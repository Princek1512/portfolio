import { motion } from "framer-motion";
import { fadeUp, slideIn, staggerContainer, viewportOnce } from "@/lib/motion";
import { skillGroups } from "@/data/profile";

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 md:py-36 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="font-utility text-xs uppercase tracking-[0.3em] text-accent mb-4"
      >
        // skills
      </motion.p>
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="font-display text-4xl md:text-5xl uppercase leading-[0.95] text-text mb-14 max-w-xl"
      >
        Tools I reach for.
      </motion.h2>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid md:grid-cols-2 gap-10 md:gap-x-16 md:gap-y-12"
      >
        {skillGroups.map((group) => (
          <motion.div key={group.label} variants={fadeUp}>
            <h3 className="font-utility text-sm uppercase tracking-[0.2em] text-muted mb-4">
              {group.label}
            </h3>
            <motion.ul
              variants={staggerContainer}
              className="flex flex-wrap gap-3"
            >
              {group.items.map((item) => (
                <motion.li
                  key={item}
                  variants={slideIn}
                  className="px-4 py-2 rounded-full border border-line bg-surface text-sm text-text font-utility hover:border-accent hover:text-accent transition-colors"
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
