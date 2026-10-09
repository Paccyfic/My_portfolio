import { useContentEditor } from "@/hooks/useContentEditor";
import { AddButton, Card, EditorLoading, RowActions, SaveBar, TextField, commaToArray, move } from "./fields";

export const SkillsEditor = () => {
  const { draft, setDraft, loading, saving, save, reset } = useContentEditor("skills");
  if (loading || !draft) return <EditorLoading />;

  return (
    <div className="space-y-4">
      <AddButton label="Add skill group" onClick={() => setDraft([...draft, { title: "New group", items: [] }])} />

      {draft.map((g, i) => (
        <Card key={i}>
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">{g.title}</h3>
            <RowActions
              index={i}
              count={draft.length}
              onMove={(to) => setDraft(move(draft, i, to))}
              onRemove={() => setDraft(draft.filter((_, idx) => idx !== i))}
            />
          </div>
          <TextField
            label="Group title"
            value={g.title}
            onChange={(v) => setDraft(draft.map((x, idx) => (idx === i ? { ...x, title: v } : x)))}
          />
          <TextField
            label="Skills"
            value={g.items.join(", ")}
            onChange={(v) => setDraft(draft.map((x, idx) => (idx === i ? { ...x, items: commaToArray(v) } : x)))}
            hint="Comma separated"
          />
        </Card>
      ))}

      <SaveBar saving={saving} onSave={save} onReset={reset} />
    </div>
  );
};
