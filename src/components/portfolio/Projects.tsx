import { ArrowUpRight } from "lucide-react";

import { useSiteContent } from "@/hooks/useSiteContent";

export const Projects = () => {
  const { projects } = useSiteContent();

  return (
    <section id="projects" className="py-24 bg-gradient-subtle relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Selected work
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 tracking-tight">
            Featured projects
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            A snapshot of products I've shipped — from fintech mobile apps to enterprise platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <a
              key={p.id}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="group p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:-translate-y-1 transition-smooth shadow-card relative overflow-hidden"
            >
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full border border-border bg-secondary flex items-center justify-center group-hover:bg-gradient-primary group-hover:border-primary transition-smooth">
                <ArrowUpRight className="text-muted-foreground group-hover:text-primary-foreground transition-smooth" size={18} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 pr-12">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs rounded-md bg-secondary text-secondary-foreground border border-border"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
