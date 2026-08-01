import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { Suspense, lazy } from "react";
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from "@/lib/motion";
import { profile } from "@/data/profile";
import princePhoto from "@/assets/prince.jpg";

const GraphNetworkScene = lazy(() => import("@/components/three/GraphNetwork"));

export default function Hero() {
  const scrollToAbout = () =>
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden noise-grid"
    >
      <div className="absolute inset-0 flex items-center justify-center opacity-90">
        <div className="w-[min(85vw,720px)] h-[min(85vw,720px)]">
          <Suspense fallback={null}>
            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              className="w-full h-full"
            >
              <GraphNetworkScene />
            </motion.div>
          </Suspense>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-transparent to-bg pointer-events-none" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col justify-between min-h-screen px-6 md:px-12 pt-28 pb-10 max-w-7xl mx-auto"
      >
        <div className="flex items-start justify-between gap-6">
          <div>
            <motion.p
              variants={fadeUp}
              className="flex items-center gap-2 font-utility text-xs md:text-sm uppercase tracking-[0.3em] text-muted"
            >
              <MapPin size={13} className="text-accent" />
              {profile.location}
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="mt-2 font-utility text-xs md:text-sm uppercase tracking-[0.3em] text-accent"
            >
              {profile.tagline}
            </motion.p>
          </div>

          <motion.div
            variants={scaleIn}
            className="shrink-0 w-24 h-24 md:w-36 md:h-36 rounded-full overflow-hidden ring-2 ring-accent/60 ring-offset-2 ring-offset-bg"
          >
            <img
              src={princePhoto}
              alt="Prince Kachchhi"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <div className="mt-auto">
          <motion.h1
            variants={fadeUp}
            className="font-display uppercase leading-[0.88] tracking-[-0.02em] text-[15vw] md:text-[9vw] lg:text-[7.5rem] text-text pointer-events-none"
          >
            Prince
            <br />
            Kachchhi
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-lg text-base md:text-lg text-muted leading-relaxed"
          >
            B.Tech CSE student at Nirma University who thinks in graphs, trees,
            and edge cases — 1500+ Codeforces problems solved, and a habit of
            turning messy datasets into models people can actually trust.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center gap-2 bg-accent text-bg px-6 py-3 rounded-full text-xs font-utility uppercase tracking-[0.2em] font-semibold hover:opacity-90 transition-opacity"
            >
              View Projects
              <ArrowUpRight size={15} />
            </button>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 border border-line text-text px-6 py-3 rounded-full text-xs font-utility uppercase tracking-[0.2em] hover:bg-surface transition-colors"
            >
              Get in touch
            </a>
          </motion.div>
        </div>

        <motion.button
          variants={fadeUp}
          onClick={scrollToAbout}
          initial="hidden"
          animate="visible"
          whileHover={{ y: 3 }}
          viewport={viewportOnce}
          className="mt-10 self-center flex flex-col items-center gap-2 text-muted"
          aria-label="Scroll to about section"
        >
          <span className="font-utility text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ArrowDown size={16} />
        </motion.button>
      </motion.div>
    </section>
  );
}
