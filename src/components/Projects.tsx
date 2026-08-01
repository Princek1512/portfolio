import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { projects } from "@/data/profile";

export default function Projects() {
  const [openId, setOpenId] = useState<string | null>(projects[0]?.id ?? null);

  return (
    <section id="projects" className="relative py-28 md:py-36 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="font-utility text-xs uppercase tracking-[0.3em] text-accent mb-4"
      >
        // projects
      </motion.p>
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="font-display text-4xl md:text-5xl uppercase leading-[0.95] text-text mb-14 max-w-xl"
      >
        Things I've built.
      </motion.h2>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="divide-y divide-line border-t border-b border-line"
      >
        {projects.map((project) => {
          const isOpen = openId === project.id;
          return (
            <motion.article key={project.id} variants={fadeUp}>
              <button
                onClick={() => setOpenId(isOpen ? null : project.id)}
                className="w-full flex items-center justify-between gap-6 py-7 text-left group"
                aria-expanded={isOpen}
              >
                <div>
                  <h3 className="font-display text-2xl md:text-3xl uppercase text-text group-hover:text-accent transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm md:text-base text-muted mt-1">
                    {project.subtitle}
                  </p>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <span className="font-utility text-xs uppercase tracking-wider text-muted hidden sm:inline">
                    {project.period}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-text"
                  >
                    <ChevronDown size={20} />
                  </motion.span>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 grid md:grid-cols-[1fr_1.4fr] gap-6">
                      <div className="flex flex-wrap gap-2 h-fit">
                        {project.stack.map((s) => (
                          <span
                            key={s}
                            className="px-3 py-1.5 rounded-full border border-line bg-surface text-xs font-utility text-muted"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                      <ul className="space-y-3">
                        {project.points.map((p, i) => (
                          <li key={i} className="text-sm md:text-base text-muted leading-relaxed pl-4 border-l border-accent/40">
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
