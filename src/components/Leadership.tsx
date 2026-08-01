import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { achievements, leadership, ratingBands, ratingTrend } from "@/data/profile";

/** Fixed domain so the colored tier bands line up with real Codeforces cutoffs. */
const DOMAIN_MIN = 800;
const DOMAIN_MAX = 1650;

const CONTEST_LABELS = ["C1", "C5", "C10", "C15", "C20", "C30", "C40", "Now"];

function yFor(value: number, height: number) {
  return height - ((value - DOMAIN_MIN) / (DOMAIN_MAX - DOMAIN_MIN)) * height;
}

/** Builds an SVG path string from the rating trend values. */
function buildPath(values: number[], width: number, height: number) {
  const step = width / (values.length - 1);
  return values
    .map((v, i) => {
      const x = i * step;
      const y = yFor(v, height);
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
}

function RatingGraph() {
  const leftPad = 44;
  const bottomPad = 26;
  const width = 560;
  const height = 170;
  const path = buildPath(ratingTrend, width, height);
  const gridValues = [900, 1100, 1300, 1500];

  return (
    <div className="w-full overflow-x-auto">
      <svg
        viewBox={`0 0 ${width + leftPad + 12} ${height + bottomPad}`}
        className="w-full min-w-[460px] h-auto"
        preserveAspectRatio="xMidYMid meet"
      >
        <g transform={`translate(${leftPad}, 0)`}>
          {/* Rating-tier background bands, using real Codeforces cutoffs */}
          {ratingBands.map((band, i) => {
            const prevMax = i === 0 ? DOMAIN_MIN : ratingBands[i - 1].max;
            const yTop = yFor(Math.min(band.max, DOMAIN_MAX), height);
            const yBottom = yFor(prevMax, height);
            return (
              <rect
                key={band.name}
                x={0}
                y={yTop}
                width={width}
                height={Math.max(yBottom - yTop, 0)}
                fill={band.color}
                opacity={0.08}
              />
            );
          })}

          {/* Horizontal gridlines with rating values on the y-axis */}
          {gridValues.map((g) => (
            <g key={g}>
              <line
                x1={0}
                x2={width}
                y1={yFor(g, height)}
                y2={yFor(g, height)}
                stroke="#8b93a0"
                strokeOpacity={0.15}
                strokeDasharray="4 4"
              />
              <text
                x={-10}
                y={yFor(g, height) + 3}
                fontSize="10"
                textAnchor="end"
                fill="#8b93a0"
                fontFamily="Outfit"
              >
                {g}
              </text>
            </g>
          ))}

          <motion.path
            d={path}
            fill="none"
            stroke="#17a398"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
          />

          {ratingTrend.map((v, i) => {
            const x = (i * width) / (ratingTrend.length - 1);
            const y = yFor(v, height);
            const isLast = i === ratingTrend.length - 1;
            return (
              <g key={i}>
                <motion.circle
                  cx={x}
                  cy={y}
                  r={isLast ? 5 : 3}
                  fill={isLast ? "#e8a33d" : "#eceef0"}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + i * 0.06, duration: 0.3 }}
                />
                {(i === 0 || isLast) && (
                  <motion.text
                    x={x}
                    y={y - 12}
                    fontSize="11"
                    fontWeight={600}
                    textAnchor={isLast ? "end" : "start"}
                    fill={isLast ? "#e8a33d" : "#eceef0"}
                    fontFamily="Outfit"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.1, duration: 0.3 }}
                  >
                    {v}
                  </motion.text>
                )}
                <text
                  x={x}
                  y={height + 18}
                  fontSize="10"
                  textAnchor="middle"
                  fill="#8b93a0"
                  fontFamily="Outfit"
                >
                  {CONTEST_LABELS[i]}
                </text>
              </g>
            );
          })}
        </g>
      </svg>

      {/* Legend spelling out what the colored bands mean */}
      <div className="flex flex-wrap gap-4 mt-4 pl-1">
        {ratingBands.map((band) => (
          <div key={band.name} className="flex items-center gap-2">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: band.color }}
            />
            <span className="text-xs font-utility text-muted uppercase tracking-wider">
              {band.name} <span className="text-muted/60">(&lt;{band.max})</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Leadership() {
  return (
    <section id="leadership" className="relative py-28 md:py-36 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="font-utility text-xs uppercase tracking-[0.3em] text-accent mb-4"
      >
        // leadership & achievements
      </motion.p>
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="font-display text-4xl md:text-5xl uppercase leading-[0.95] text-text mb-14 max-w-xl"
      >
        Rating climb, and
        <br />
        who it's for.
      </motion.h2>

      <div className="grid md:grid-cols-[1.1fr_1fr] gap-14">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.div variants={fadeUp} className="rounded-2xl border border-line bg-surface p-6 md:p-8">
            <p className="font-utility text-xs uppercase tracking-wider text-muted mb-1">
              Codeforces rating trajectory
            </p>
            <p className="text-xs text-muted/70 mb-4">
              Approximate progression across rated contests, Newbie → Specialist (current: 1560)
            </p>
            <RatingGraph />
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 rounded-2xl border border-line bg-surface p-6 md:p-8">
            <div className="flex items-baseline justify-between mb-2">
              <h3 className="font-display text-xl uppercase text-text">{leadership.org}</h3>
              <span className="font-utility text-xs uppercase tracking-wider text-muted">
                {leadership.period}
              </span>
            </div>
            <p className="text-sm text-accent font-utility uppercase tracking-wider mb-4">
              {leadership.role}
            </p>
            <ul className="space-y-3">
              {leadership.points.map((p, i) => (
                <li key={i} className="text-sm md:text-base text-muted leading-relaxed pl-4 border-l border-accent/40">
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="space-y-4"
        >
          {achievements.map((a) => (
            <motion.li
              key={a.title}
              variants={fadeUp}
              className="rounded-xl border border-line bg-surface/60 p-5 hover:border-accent/50 transition-colors"
            >
              <p className="text-text font-medium">{a.title}</p>
              <p className="text-sm text-muted mt-1">{a.detail}</p>
              <p className="text-xs text-muted/70 mt-2 font-utility uppercase tracking-wider">
                {a.meta}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
