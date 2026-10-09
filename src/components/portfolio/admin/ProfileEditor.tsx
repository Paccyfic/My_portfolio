import { useContentEditor } from "@/hooks/useContentEditor";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import type { Profile } from "@/lib/content";
import { AreaField, Card, EditorLoading, SaveBar, TextField, linesToArray } from "./fields";

export const ProfileEditor = () => {
  const { draft, setDraft, loading, saving, save, reset } = useContentEditor("profile");
  if (loading || !draft) return <EditorLoading />;

  const set = <K extends keyof Profile>(k: K, v: Profile[K]) => setDraft({ ...draft, [k]: v });

  return (
    <div className="space-y-6">
      <Card>
        <h3 className="font-semibold">Headline</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <TextField label="Name" value={draft.name} onChange={(v) => set("name", v)} />
          <TextField label="Title" value={draft.title} onChange={(v) => set("title", v)} />
        </div>
        <AreaField label="Hero summary" rows={4} value={draft.heroText} onChange={(v) => set("heroText", v)} />
        <TextField label="Availability badge text" value={draft.availability} onChange={(v) => set("availability", v)} />
        <div className="flex items-center gap-2">
          <Switch checked={draft.showAvailability} onCheckedChange={(v) => set("showAvailability", v)} id="avail" />
          <Label htmlFor="avail">Show the availability badge</Label>
        </div>
      </Card>

      <Card>
        <h3 className="font-semibold">Contact &amp; location</h3>
        <TextField label="Location / address" value={draft.location} onChange={(v) => set("location", v)} />
        <div className="grid sm:grid-cols-2 gap-4">
          <TextField label="Email" value={draft.email} onChange={(v) => set("email", v)} />
          <TextField label="Phone (display)" value={draft.phone} onChange={(v) => set("phone", v)} />
          <TextField label="Phone (dial link)" value={draft.phoneHref} onChange={(v) => set("phoneHref", v)} hint="e.g. +14029041136" />
          <TextField label="Website" value={draft.website} onChange={(v) => set("website", v)} />
          <TextField label="GitHub URL" value={draft.github} onChange={(v) => set("github", v)} />
          <TextField label="LinkedIn URL" value={draft.linkedin} onChange={(v) => set("linkedin", v)} />
        </div>
      </Card>

      <Card>
        <h3 className="font-semibold">About section</h3>
        <AreaField
          label="Summary paragraphs"
          rows={10}
          value={draft.aboutParagraphs.join("\n\n")}
          onChange={(v) => set("aboutParagraphs", v.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean))}
          hint="Separate paragraphs with a blank line."
        />
      </Card>

      <Card>
        <h3 className="font-semibold">Stat tiles</h3>
        <AreaField
          label="One per line, as value | label"
          rows={5}
          value={draft.stats.map((s) => `${s.value} | ${s.label}`).join("\n")}
          onChange={(v) =>
            set(
              "stats",
              linesToArray(v).map((line) => {
                const [value, ...rest] = line.split("|");
                return { value: value.trim(), label: rest.join("|").trim() };
              }),
            )
          }
          hint="Example: 6+ | Years Experience. Up to 4 look best."
        />
      </Card>

      <SaveBar saving={saving} onSave={save} onReset={reset} />
    </div>
  );
};
