import { useState } from "react";
import { Mail, MapPin, Phone, Github, Linkedin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactDialog } from "@/components/portfolio/ContactDialog";

export const Contact = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Get in touch
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 tracking-tight">
            Let's build something <span className="text-gradient">great</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Open to full-time roles, contract work, and collaborations. I usually
            respond within 24 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-10">
          <a
            href="mailto:ndahiropacific@gmail.com"
            className="p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-smooth text-center shadow-card"
          >
            <Mail className="mx-auto mb-3 text-primary" size={22} />
            <div className="text-xs text-muted-foreground mb-1">Email</div>
            <div className="text-sm font-medium text-foreground break-all">
              ndahiropacific@gmail.com
            </div>
          </a>
          <a
            href="tel:+14029041136"
            className="p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-smooth text-center shadow-card"
          >
            <Phone className="mx-auto mb-3 text-primary" size={22} />
            <div className="text-xs text-muted-foreground mb-1">Phone</div>
            <div className="text-sm font-medium text-foreground">+1 (402) 904-1136</div>
          </a>
          <div className="p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm text-center shadow-card">
            <MapPin className="mx-auto mb-3 text-primary" size={22} />
            <div className="text-xs text-muted-foreground mb-1">Location</div>
            <div className="text-sm font-medium text-foreground">Oshawa, ON, Canada</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={() => setOpen(true)}
            className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow"
          >
            <Mail className="mr-1" /> Send a message
          </Button>
          <div className="flex gap-3">
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
              href="https://www.ndahiropacific.dev"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full border border-border bg-card/50 hover:border-primary hover:text-primary transition-smooth"
              aria-label="Website"
            >
              <Globe size={18} />
            </a>
          </div>
        </div>
      </div>

      <ContactDialog open={open} onOpenChange={setOpen} />
    </section>
  );
};
