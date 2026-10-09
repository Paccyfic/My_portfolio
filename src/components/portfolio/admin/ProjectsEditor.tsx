import { useContentEditor } from "@/hooks/useContentEditor";
import type { Project } from "@/lib/content";
import { AddButton, AreaField, Card, EditorLoading, RowActions, SaveBar, TextField, commaToArray, move } from "./fields";

export const ProjectsEditor = () => {
  const { draft, setDraft, loading, saving, save, reset } = useContentEditor("projects");
  if (loading || !draft) return <EditorLoading />;

  const update = (i: number, patch: Partial<Project>) =>
    setDraft(draft.map((p, idx) => (idx === i ? { ...p, ...patch } : p)));

  return (
    <div className="space-y-4">
      <AddButton
        label="Add project"
        onClick={() =>
          setDraft([
            { id: `project-${Date.now()}`, title: "New project", description: "", tags: [], link: "https://" },
            ...draft,
          ])
        }
      />

      {draft.map((p, i) => (
        <Card key={p.id}>
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">{p.title}</h3>
            <RowActions
              index={i}
              count={draft.length}
              onMove={(to) => setDraft(move(draft, i, to))}
              onRemove={() => setDraft(draft.filter((_, idx) => idx !== i))}
            />
          </div>
          <TextField label="Title" value={p.title} onChange={(v) => update(i, { title: v })} />
          <AreaField label="Description" rows={3} value={p.description} onChange={(v) => update(i, { description: v })} />
          <div className="grid sm:grid-cols-2 gap-4">
            <TextField label="Tags" value={p.tags.join(", ")} onChange={(v) => update(i, { tags: commaToArray(v) })} hint="Comma separated" />
            <TextField label="Link" value={p.link} onChange={(v) => update(i, { link: v })} />
          </div>
        </Card>
      ))}

      <SaveBar saving={saving} onSave={save} onReset={reset} />
    </div>
  );
};
