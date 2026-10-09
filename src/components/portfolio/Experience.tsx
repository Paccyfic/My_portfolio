import { ExternalLink } from "lucide-react";
import { useSiteContent } from "@/hooks/useSiteContent";

export const Experience = () => {
  const { experience } = useSiteContent();

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Career
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 tracking-tight">
            Experience timeline
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          <div className="space-y-12">
            {experience.map((job, i) => (
              <div
                key={job.id}
                className={`relative flex md:items-center ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-3 md:left-1/2 w-3 h-3 rounded-full bg-gradient-primary shadow-glow -translate-x-1/2 mt-2 md:mt-0" />

                <div className="pl-10 md:pl-0 md:w-1/2 md:px-8">
                  <div className="p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-smooth shadow-card">
                    <div className="text-xs text-primary font-semibold mb-2">
                      {job.period}
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{job.role}</h3>
                    <div className="text-sm text-muted-foreground mb-3">
                      {job.company}
                      {job.location ? ` · ${job.location}` : ""}
                    </div>
                    <ul className="space-y-2">
                      {job.points.map((p) => (
                        <li
                          key={p}
                          className="text-sm text-muted-foreground leading-relaxed flex gap-2"
                        >
                          <span className="text-primary mt-1.5 shrink-0">▸</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                    {job.links && job.links.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {job.links.map((l) => (
                          <a
                            key={l.url}
                            href={l.url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded-md border border-border bg-secondary text-secondary-foreground hover:border-primary hover:text-primary transition-smooth"
                          >
                            {l.label} <ExternalLink size={11} />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
