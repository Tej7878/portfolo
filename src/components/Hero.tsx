import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

const lines = [
  { text: "Images that", className: "" },
  { text: "move. Ads that", className: "" },
  { text: "feel shot.", className: "gradient-text" },
];

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen flex-col justify-center overflow-hidden aurora px-5 py-24 md:px-10">
      <div className="orb pointer-events-none absolute -left-24 top-24 h-80 w-80 rounded-full bg-ember/45 blur-3xl" />
      <div
        className="orb pointer-events-none absolute right-0 top-40 h-[28rem] w-[28rem] rounded-full bg-blush/30 blur-3xl"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="orb pointer-events-none absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-cyan/20 blur-3xl"
        style={{ animationDelay: "4s" }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl pt-10">
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mb-6 flex items-center gap-4 text-[11px] tracking-[0.4em] uppercase text-gold"
        >
          <span className="h-px w-10 bg-gradient-to-r from-ember via-blush to-gold" />
          velveta.ai · AI creative studio
        </motion.div>

        <h1 className="font-display text-4xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl md:text-7xl lg:text-[6.2vw]">
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.9, delay: 0.12, ease: [0.76, 0, 0.24, 1] }}
            >
              Images that move.
            </motion.span>
          </span>
          <span className="mt-1 block overflow-hidden md:mt-2">
            <motion.span
              className="block"
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.9, delay: 0.24, ease: [0.76, 0, 0.24, 1] }}
            >
              Ads that <span className="gradient-text">feel shot.</span>
            </motion.span>
          </span>
        </h1>

        <div className="mt-10 flex flex-col gap-8 md:mt-14 md:flex-row md:items-end md:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="max-w-xl font-serif text-xl italic leading-relaxed text-paper/85 sm:text-2xl md:text-3xl"
          >
            We generate fashion films, garment stills, and campaign ads — directed like a studio, shipped like software.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.7 }}
            href="#work"
            className="btn-lux group inline-flex items-center gap-3 self-start border border-paper/25 bg-paper/5 px-7 py-3.5 text-[12px] tracking-[0.25em] uppercase backdrop-blur-sm transition hover:border-blush hover:text-gold"
          >
            View selected work
            <ArrowDownRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
