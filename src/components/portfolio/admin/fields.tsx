import type { ReactNode } from "react";
import { ArrowDown, ArrowUp, Loader2, Plus, Save, Trash2, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface FieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  hint?: string;
}

export const TextField = ({ label, value, onChange, placeholder, hint }: FieldProps) => (
  <div className="space-y-1.5">
    <Label>{label}</Label>
    <Input value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} />
    {hint && <p className="text-xs text-muted-foreground">{hint}</p>}
  </div>
);

export const AreaField = ({ label, value, onChange, placeholder, hint, rows = 4 }: FieldProps & { rows?: number }) => (
  <div className="space-y-1.5">
    <Label>{label}</Label>
    <Textarea rows={rows} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} />
    {hint && <p className="text-xs text-muted-foreground">{hint}</p>}
  </div>
);

/** One item per line <-> string[] */
export const linesToArray = (v: string) => v.split("\n").map((l) => l.trim()).filter(Boolean);
export const commaToArray = (v: string) => v.split(",").map((l) => l.trim()).filter(Boolean);

export const Card = ({ children }: { children: ReactNode }) => (
  <div className="rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-5 shadow-card space-y-4">{children}</div>
);

export const move = <T,>(list: T[], from: number, to: number): T[] => {
  if (to < 0 || to >= list.length) return list;
  const next = [...list];
  const [item] = next.splice(from, 1);
  next.splice(to, 0, item);
  return next;
};

interface RowActionsProps {
  index: number;
  count: number;
  onMove: (to: number) => void;
  onRemove: () => void;
}

export const RowActions = ({ index, count, onMove, onRemove }: RowActionsProps) => (
  <div className="flex items-center gap-1">
    <Button type="button" variant="ghost" size="sm" disabled={index === 0} onClick={() => onMove(index - 1)} aria-label="Move up">
      <ArrowUp className="h-4 w-4" />
    </Button>
    <Button type="button" variant="ghost" size="sm" disabled={index === count - 1} onClick={() => onMove(index + 1)} aria-label="Move down">
      <ArrowDown className="h-4 w-4" />
    </Button>
    <Button
      type="button"
      variant="ghost"
      size="sm"
      className="text-destructive"
      onClick={() => window.confirm("Remove this item?") && onRemove()}
      aria-label="Remove"
    >
      <Trash2 className="h-4 w-4" />
    </Button>
  </div>
);

export const AddButton = ({ label, onClick }: { label: string; onClick: () => void }) => (
  <Button type="button" variant="outline" onClick={onClick}>
    <Plus className="h-4 w-4 mr-1" /> {label}
  </Button>
);

export const SaveBar = ({ saving, onSave, onReset }: { saving: boolean; onSave: () => void; onReset: () => void }) => (
  <div className="sticky bottom-0 -mx-1 px-1 py-4 bg-background/90 backdrop-blur flex items-center gap-3 border-t border-border">
    <Button onClick={onSave} disabled={saving} className="bg-gradient-primary text-primary-foreground hover:opacity-90">
      {saving ? <Loader2 className="h-4 w-4 mr-1 animate-spin" /> : <Save className="h-4 w-4 mr-1" />} Save changes
    </Button>
    <Button variant="ghost" onClick={onReset} disabled={saving}>
      <RotateCcw className="h-4 w-4 mr-1" /> Restore defaults
    </Button>
  </div>
);

export const EditorLoading = () => <div className="py-16 text-center text-muted-foreground">Loading...</div>;
