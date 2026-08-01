import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { education } from "@/data/profile";

const stats = [
  { value: "1500+", label: "Problems solved" },
  { value: "45+", label: "Rated contests" },
  { value: "1560", label: "Max Codeforces rating" },
  { value: "8.85", label: "CGPA / 10.0" },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid md:grid-cols-[1fr_1.2fr] gap-14 md:gap-20"
      >
        <motion.div variants={fadeUp}>
          <p className="font-utility text-xs uppercase tracking-[0.3em] text-accent mb-4">
            // about
          </p>
          <h2 className="font-display text-4xl md:text-5xl uppercase leading-[0.95] text-text">
            Competitive
            <br />
            by habit.
          </h2>

          <dl className="mt-10 grid grid-cols-2 gap-6">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-3xl md:text-4xl text-text">
                  {s.value}
                </dt>
                <dd className="font-utility text-xs uppercase tracking-wider text-muted mt-1">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div variants={fadeUp} className="space-y-6 text-base md:text-lg text-muted leading-relaxed">
          <p>
            I'm a Computer Science undergraduate at Nirma University, Ahmedabad,
            originally from Amreli, Gujarat. Most of my time outside coursework
            goes into two things that feed each other: competitive programming
            and applied machine learning.
          </p>
          <p>
            As a Codeforces Specialist I've worked through 1500+ problems across
            segment trees, graphs, dynamic programming, and greedy strategies —
            the same instinct for breaking a problem into clean, testable pieces
            carries directly into how I structure ML pipelines, from feature
            engineering to model validation to explainability.
          </p>
          <p>
            Off the clock, I'm the Club Director at{" "}
            <span className="text-text">CodeAdda</span>, where I get to put that
            same problem-solving mindset to work mentoring other students through
            contests and structured practice.
          </p>

          <div className="pt-6 border-t border-line space-y-4">
            {education.map((e) => (
              <div key={e.institution} className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
                <div>
                  <p className="text-text font-medium">{e.institution}</p>
                  <p className="text-sm text-muted">{e.detail}</p>
                </div>
                <p className="font-utility text-xs uppercase tracking-wider text-muted whitespace-nowrap">
                  {e.period}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
