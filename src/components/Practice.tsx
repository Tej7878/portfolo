import { motion } from "framer-motion";

const pillars = [
  {
    n: "02",
    title: "AI video",
    copy: "Fashion films, product motion, and looping heroes generated from stills, CAD, or a shot list — then graded like a real camera unit.",
  },
  {
    n: "03",
    title: "Garment imagery",
    copy: "On-model, ghost mannequin, colorways, and fabric close-ups for lookbooks and e-com. Consistent light. True drape.",
  },
  {
    n: "04",
    title: "Ad systems",
    copy: "Not one hero — a kit. Hooks, 9:16 cuts, UGC-style variants, and end cards so media can test without another shoot.",
  },
];

export function Practice() {
  return (
    <section id="practice" className="relative border-t border-paper/10 px-5 py-24 md:px-10">
      <p className="text-[11px] tracking-[0.4em] uppercase text-gold">Practice</p>
      <h2 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-tight md:text-6xl">
        A studio stack for brands that need pictures <span className="gradient-text">tomorrow.</span>
      </h2>
      <p className="mt-6 max-w-xl font-serif text-xl italic text-paper/75">
        Software engineer by craft, art director by taste. I build generation pipelines you can actually ship.
      </p>

      <div className="mt-16 grid gap-px bg-paper/10 md:grid-cols-3">
        {pillars.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: i * 0.1 }}
            className="group relative bg-ink p-8 transition duration-500 hover:bg-[#0c0a28]"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-ember via-blush to-gold opacity-0 transition group-hover:opacity-100" />
            <p className="text-[11px] tracking-[0.3em] uppercase text-ember">{p.n}</p>
            <h3 className="mt-6 font-serif text-4xl italic transition group-hover:text-gold">{p.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-mist">{p.copy}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
