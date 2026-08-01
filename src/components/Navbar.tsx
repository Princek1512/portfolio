import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "leadership", label: "Leadership" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-bg/80 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-6 md:px-10 py-4 max-w-7xl mx-auto">
        <button
          onClick={() => goTo("home")}
          className="font-display text-lg tracking-wide text-text"
        >
          PK<span className="text-accent">.</span>
        </button>

        <ul className="hidden md:flex items-center gap-8 font-utility text-xs uppercase tracking-[0.18em] text-muted">
          {sections.map((s) => (
            <li key={s.id}>
              <button
                onClick={() => goTo(s.id)}
                className="hover:text-text transition-colors"
              >
                {s.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-text"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-bg border-t border-line px-6 py-6 flex flex-col gap-5 font-utility text-sm uppercase tracking-[0.18em] text-muted">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => goTo(s.id)}
              className="text-left hover:text-text transition-colors"
            >
              {s.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
