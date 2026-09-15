import { capabilities } from "../data/projects";

export function Marquee() {
  const row = [...capabilities, ...capabilities];
  return (
    <div className="relative overflow-hidden border-y border-paper/10 bg-gradient-to-r from-ember/10 via-transparent to-blush/10 py-4">
      <div className="fade-x marquee-track flex w-max gap-10 whitespace-nowrap">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 text-[12px] tracking-[0.35em] uppercase text-gold"
          >
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blush to-ember shadow-[0_0_12px_rgba(232,74,200,0.8)]" />
          </span>
        ))}
      </div>
    </div>
  );
}
