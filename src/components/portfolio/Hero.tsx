import { useState } from "react";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactDialog } from "@/components/portfolio/ContactDialog";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-hero" />
      <div className="absolute inset-0 -z-10 bg-background/60" />

      <div className="container mx-auto px-6 text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-border bg-card/50 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-xs text-muted-foreground">Available for new opportunities</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.05]">
          Hi, I'm <span className="text-gradient">Pacific Ndahiro</span>
          <br />
          <span className="text-foreground">Software Engineer</span>
        </h1>

        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          5+ years designing, building, and shipping production-grade web and mobile
          applications with React, React Native, Flutter, and Node.js. Clean code,
          scalable architecture, real impact.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            size="lg"
            onClick={() => setContactOpen(true)}
            className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow"
          >
            Hire me <ArrowRight className="ml-1" />
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#projects">
              View my work
            </a>
          </Button>
          <Button asChild size="lg" variant="ghost">
            <a href="/Pacific_Ndahiro.pdf" download="Pacific_Ndahiro.pdf">
              <Download className="mr-1" /> Download CV
            </a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-5">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full border border-border bg-card/50 hover:border-primary hover:text-primary transition-smooth"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full border border-border bg-card/50 hover:border-primary hover:text-primary transition-smooth"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:ndahiropacific@gmail.com"
            className="p-3 rounded-full border border-border bg-card/50 hover:border-primary hover:text-primary transition-smooth"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>

      <ContactDialog open={contactOpen} onOpenChange={setContactOpen} title="Hire me" description="Tell me about the role or project — I'll get back to you within 24 hours." />
    </section>
  );
};
