import { useContentEditor } from "@/hooks/useContentEditor";
import type { Job } from "@/lib/content";
import { AddButton, AreaField, Card, EditorLoading, RowActions, SaveBar, TextField, linesToArray, move } from "./fields";

export const ExperienceEditor = () => {
  const { draft, setDraft, loading, saving, save, reset } = useContentEditor("experience");
  if (loading || !draft) return <EditorLoading />;

  const update = (i: number, patch: Partial<Job>) =>
    setDraft(draft.map((j, idx) => (idx === i ? { ...j, ...patch } : j)));

  const add = () =>
    setDraft([
      {
        id: `job-${Date.now()}`,
        role: "New role",
        company: "Company",
        period: "Month YYYY — Present",
        points: [],
      },
      ...draft,
    ]);

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        Newest first. New jobs are added at the top; use the arrows to reorder.
      </p>
      <AddButton label="Add job" onClick={add} />

      {draft.map((job, i) => (
        <Card key={job.id}>
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">
              {job.role} <span className="text-muted-foreground font-normal">· {job.company}</span>
            </h3>
            <RowActions
              index={i}
              count={draft.length}
              onMove={(to) => setDraft(move(draft, i, to))}
              onRemove={() => setDraft(draft.filter((_, idx) => idx !== i))}
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <TextField label="Role" value={job.role} onChange={(v) => update(i, { role: v })} />
            <TextField label="Company" value={job.company} onChange={(v) => update(i, { company: v })} />
            <TextField label="Period" value={job.period} onChange={(v) => update(i, { period: v })} placeholder="Jul 2026 — Present" />
            <TextField label="Location (optional)" value={job.location ?? ""} onChange={(v) => update(i, { location: v || undefined })} />
          </div>
          <AreaField
            label="Description bullets"
            rows={6}
            value={job.points.join("\n")}
            onChange={(v) => update(i, { points: linesToArray(v) })}
            hint="One bullet per line."
          />
          <AreaField
            label="Links (optional)"
            rows={3}
            value={(job.links ?? []).map((l) => `${l.label} | ${l.url}`).join("\n")}
            onChange={(v) =>
              update(i, {
                links: linesToArray(v)
                  .map((line) => {
                    const [label, ...rest] = line.split("|");
                    return { label: label.trim(), url: rest.join("|").trim() };
                  })
                  .filter((l) => l.label && l.url),
              })
            }
            hint="One per line: Label | https://url"
          />
        </Card>
      ))}

      <SaveBar saving={saving} onSave={save} onReset={reset} />
    </div>
  );
};
