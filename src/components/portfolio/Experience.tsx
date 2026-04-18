const experience = [
  {
    role: "Full-Stack Developer",
    company: "WRS Health",
    period: "Sept 2025 — Present",
    location: "Goshen, New York",
    points: [
      "Revamping the flagship EHR platform from PHP 5.0 to React 19 with a micro-frontend architecture.",
      "Lead sprint planning, reviews, and ticket management for the frontend team.",
    ],
  },
  {
    role: "Software Engineering Contractor",
    company: "Invisible Technologies Inc.",
    period: "June 2025 — Oct 2025",
    points: [
      "Built data pipelines handling 100+ records daily with 99%+ accuracy.",
      "Reduced manual processing time by 35% with Python and TypeScript automation.",
    ],
  },
  {
    role: "Senior Mobile Developer",
    company: "Andela",
    period: "Jan 2024 — Aug 2025",
    points: [
      "Shipped React, React Native and Flutter apps serving 100K+ MAUs.",
      "Optimized backend APIs (Node.js, Django, GraphQL), cutting response times by 45%.",
      "Reached 90%+ test coverage with comprehensive unit and integration testing.",
    ],
  },
  {
    role: "Lead Flutter Developer",
    company: "HexaKomb Ltd",
    period: "June 2024 — Feb 2025",
    points: [
      "Led a fintech app to 50K+ downloads and 4.5+ store rating.",
      "Reduced startup time from 4.5s to 1.8s; integrated OAuth 2.0 and biometric auth.",
    ],
  },
  {
    role: "Software Developer",
    company: "QT Global Software",
    period: "Oct 2023 — Apr 2024",
    location: "Kigali, Rwanda",
    points: [
      "Re-engineered the URS frontend into a micro-frontend architecture.",
      "Reduced service request delivery times by ~35%.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Rwanda Space Agency",
    period: "Dec 2021 — Jul 2023",
    location: "Kigali, Rwanda",
    points: [
      "Built a data collection platform saving institutions $30K+/year.",
      "Integrated GIS services across five government platforms.",
    ],
  },
];

export const Experience = () => {
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
                key={job.company + job.period}
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
