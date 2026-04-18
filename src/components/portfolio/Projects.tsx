import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Production Fintech Mobile App",
    description:
      "Cross-platform mobile app for secure financial transactions. 50K+ active users, 4.5+ rating, end-to-end encryption, PCI-DSS compliant payments.",
    tags: ["Flutter", "Dart", "Firebase", "OAuth 2.0"],
    link: "https://play.google.com/store/apps/details?id=com.hexakomb.nokanda&hl=en",
  },
  {
    title: "Muse of Research",
    description:
      "AI agent helping users discover scholarly articles across X, Telegram, and Discord using the Eliza framework.",
    tags: ["Python", "FastAPI", "PostgreSQL", "Eliza"],
    link: "https://x.com/MuseofResearch",
  },
  {
    title: "Enterprise Web Platform",
    description:
      "Scalable web app with role-based access control and real-time WebSocket features. Cut load times by 50% via query optimization.",
    tags: ["React", "Node.js", "WebSockets", "CI/CD"],
    link: "https://app.isokko.com/",
  },
  {
    title: "RDB URS",
    description:
      "Microservices platform for the Rwanda Development Board. React frontend, Spring Boot backend, with Python and Bash data migration scripts.",
    tags: ["React", "Spring Boot", "Microservices", "SQL"],
    link: "https://urs.rdb.rw/",
  },
];

export const Projects = () => {
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
              key={p.title}
              href={p.link}
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
