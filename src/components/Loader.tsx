import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          window.clearInterval(id);
          return 100;
        }
        return p + 2;
      });
    }, 28);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    if (progress < 100) return;
    const t = window.setTimeout(onDone, 520);
    return () => window.clearTimeout(t);
  }, [progress, onDone]);

  return (
    <motion.div
      className="aurora fixed inset-0 z-[100] flex flex-col justify-between px-6 py-8 text-paper md:px-10"
      initial={{ opacity: 1 }}
      exit={{ y: "-100%", transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
    >
      <div className="flex items-center justify-between text-[11px] tracking-[0.35em] uppercase text-gold">
        <span>velveta.ai</span>
        <span>AI studio</span>
      </div>
      <div className="flex flex-col items-center text-center">
        <div className="relative">
          <div className="pointer-events-none absolute inset-0 scale-150 rounded-full bg-ink/70 blur-2xl" />
          <img
            src="/logo.png"
            alt="velveta.ai"
            className="logo-glow relative h-40 w-40 object-contain md:h-52 md:w-52"
          />
        </div>
        <p className="mt-8 font-serif text-4xl italic leading-none md:text-6xl">
          Generating the <span className="gradient-text not-italic font-display font-bold">room.</span>
        </p>
        <p className="mt-6 max-w-sm text-sm text-mist">
          Video · garments · ads — a studio for work that looks photographed, not prompted.
        </p>
      </div>
      <div>
        <div className="mb-3 flex justify-between font-display text-sm tracking-widest">
          <span>Loading archive</span>
          <span>{String(progress).padStart(3, "0")}</span>
        </div>
        <div className="h-[2px] w-full bg-paper/10">
          <motion.div
            className="h-full bg-gradient-to-r from-ember via-blush to-gold shadow-[0_0_18px_rgba(232,74,200,0.7)]"
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear", duration: 0.08 }}
          />
        </div>
      </div>
    </motion.div>
  );
}
