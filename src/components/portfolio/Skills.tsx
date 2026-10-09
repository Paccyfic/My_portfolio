import { useSiteContent } from "@/hooks/useSiteContent";

export const Skills = () => {
  const { skills: skillGroups } = useSiteContent();

  return (
    <section id="skills" className="py-24 bg-gradient-subtle relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Tech Stack
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 tracking-tight">
            Tools I work with
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Technologies I've used to ship production applications across web and mobile.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-smooth shadow-card"
            >
              <h3 className="text-lg font-semibold mb-4 text-foreground">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-xs rounded-full bg-secondary text-secondary-foreground border border-border hover:border-primary hover:text-primary transition-smooth"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
