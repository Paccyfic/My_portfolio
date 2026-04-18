import { Code2, Rocket, Users, Sparkles } from "lucide-react";
import profileImg from "@/assets/profile.png";

const stats = [
  { icon: Rocket, value: "5+", label: "Years Experience" },
  { icon: Code2, value: "30+", label: "Projects Shipped" },
  { icon: Users, value: "100K+", label: "Users Reached" },
  { icon: Sparkles, value: "10+", label: "Technologies" },
];

export const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              About me
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6 tracking-tight">
              Crafting software that <span className="text-gradient">ships and scales</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a Software Engineer based in Oshawa, Canada, with a passion for
                building polished products end-to-end. I currently work as a Full-Stack
                Developer at WRS Health, modernizing a flagship EHR platform with React 19
                and micro-frontend architecture.
              </p>
              <p>
                I've collaborated with distributed teams of 5–15 engineers, delivered
                cross-platform mobile apps with 50K+ downloads, and architected backend
                services that cut response times by up to 45%. I'm a strong advocate for
                clean code, comprehensive testing, and AI-assisted development.
              </p>
              <p>
                Currently pursuing my Master's in Computer Science (Software Engineering)
                at Ontario Tech University.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -inset-4 bg-gradient-primary rounded-3xl blur-2xl opacity-30" />
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-border bg-card shadow-card">
                <img
                  src={profileImg}
                  alt="Pacific Ndahiro, Software Engineer"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="group p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-smooth shadow-card"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                  <Icon className="text-primary-foreground" size={20} />
                </div>
                <div className="text-3xl font-bold text-foreground">{value}</div>
                <div className="text-sm text-muted-foreground mt-1">{label}</div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
