import { motion } from "framer-motion";
import { BarChart3, ChefHat, Code2, Github, Linkedin, Mail, Phone } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { profile } from "@/data/profile";

const socials = [
  { icon: Mail, label: "Email", href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: Github, label: "GitHub", href: profile.links.github },
  { icon: Linkedin, label: "LinkedIn", href: profile.links.linkedin },
  { icon: Code2, label: "Codeforces", href: profile.links.codeforces },
  { icon: ChefHat, label: "CodeChef", href: profile.links.codechef },
  { icon: BarChart3, label: "Codolio", href: profile.links.codolio },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-line px-6 md:px-12 py-16 md:py-20">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="max-w-7xl mx-auto"
      >
        <motion.p
          variants={fadeUp}
          className="font-utility text-xs uppercase tracking-[0.3em] text-accent mb-4"
        >
          // contact
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="font-display text-4xl md:text-6xl uppercase leading-[0.95] text-text max-w-2xl"
        >
          Let's build something worth debugging.
        </motion.h2>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          {socials.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-2 border border-line rounded-full px-5 py-3 text-sm text-text hover:border-accent hover:text-accent transition-colors"
              aria-label={label}
            >
              <Icon size={16} />
              <span className="font-utility text-xs uppercase tracking-wider">{label}</span>
            </a>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-16 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-muted font-utility uppercase tracking-wider"
        >
          <p>© {new Date().getFullYear()} {profile.name}. Amreli, Gujarat.</p>
          <p>Built with React · Tailwind · Framer Motion · R3F</p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
