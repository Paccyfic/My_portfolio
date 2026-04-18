import { useEffect, useState } from "react";
import { Menu, X, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="text-lg font-bold tracking-tight">
          <span className="text-gradient">Pacific</span>
          <span className="text-foreground">.dev</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-2">
          <Button asChild variant="default" size="sm" className="bg-gradient-primary text-primary-foreground hover:opacity-90">
            <a href="#contact">Hire me</a>
          </Button>
          <a
            href="/admin"
            className="p-2 rounded-full border border-border bg-card/50 hover:border-primary hover:text-primary transition-smooth"
            aria-label="Admin inbox"
            title="Admin"
          >
            <UserCircle size={18} />
          </a>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-lg">
          <ul className="flex flex-col p-6 gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-base text-muted-foreground hover:text-foreground transition-smooth"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <Button asChild className="w-full bg-gradient-primary text-primary-foreground">
                <a href="#contact" onClick={() => setOpen(false)}>Hire me</a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
