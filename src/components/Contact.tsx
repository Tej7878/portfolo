export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-paper/10 px-5 py-28 md:px-10">
      <div className="pointer-events-none absolute inset-0 aurora opacity-80" />
      <div className="orb pointer-events-none absolute -right-16 top-10 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
      <div className="relative z-10">
        <p className="text-[11px] tracking-[0.4em] uppercase text-gold">Open for commissions</p>
        <h2 className="mt-4 max-w-4xl font-display text-5xl font-extrabold leading-[0.95] md:text-8xl">
          Let’s make the <span className="gradient-text">next film.</span>
        </h2>
        <p className="mt-8 max-w-lg font-serif text-2xl italic text-paper/80">
          Campaigns, lookbooks, product drops — send a brief, a fabric, or a product SKU.
        </p>
        <div className="mt-12 flex flex-col gap-4 md:flex-row">
          <a
            href="mailto:hello@velveta.ai"
            className="btn-lux inline-flex items-center justify-center bg-gradient-to-r from-ember via-blush to-gold px-8 py-4 text-[12px] tracking-[0.28em] uppercase text-ink shadow-[0_0_40px_rgba(232,74,200,0.35)] transition hover:opacity-95"
          >
            hello@velveta.ai
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center border border-paper/30 bg-paper/5 px-8 py-4 text-[12px] tracking-[0.28em] uppercase backdrop-blur-sm hover:border-gold hover:text-gold"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
