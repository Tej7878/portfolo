import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { useMemo, useState } from "react";
import { type Category, type Project, projects } from "../data/projects";
import { DemoModal } from "./DemoModal";
import { PhotoModal } from "./PhotoModal";

const filters: Category[] = ["All", "Video", "Garments", "Ads"];

export function Work() {
  const [filter, setFilter] = useState<Category>("All");
  const [active, setActive] = useState<Project | null>(null);

  const list = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section id="work" className="relative px-5 py-24 md:px-10">
      <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-[70%] -translate-x-1/2 rounded-full bg-ember/15 blur-3xl" />
      <div className="relative mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-[11px] tracking-[0.4em] uppercase text-gold">01 — Archive</p>
          <h2 className="mt-3 font-display text-5xl font-bold md:text-7xl">
            Selected <span className="gradient-text">work</span>
          </h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-2 text-[11px] tracking-[0.22em] uppercase transition ${
                filter === f
                  ? "pill-active border-blush bg-gradient-to-r from-ember to-blush text-paper"
                  : "border-paper/20 text-paper/70 hover:border-gold/60 hover:text-gold"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <motion.ul layout className="grid gap-5 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {list.map((project, index) => (
            <motion.li
              layout
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
            >
              <button
                type="button"
                data-cursor="hover"
                onClick={() => setActive(project)}
                className="group w-full text-left"
              >
                <div className="shine glow-border relative aspect-[4/5] overflow-hidden bg-paper/5 md:aspect-[16/11]">
                  {project.videoUrl ? (
                    <video
                      src={project.videoUrl}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <img
                      src={project.cover}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                  )}
                  <div className="film-grain absolute inset-0" />
                  <div className="absolute left-4 top-4 rounded-full bg-ink/70 px-3 py-1 text-[10px] tracking-[0.25em] uppercase backdrop-blur">
                    {project.category}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-5">
                    <div>
                      <p className="font-serif text-3xl italic">{project.title}</p>
                      <p className="mt-1 text-[11px] tracking-[0.2em] uppercase text-paper/70">
                        {project.client} · {project.year}
                      </p>
                    </div>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-paper/40 bg-ink/40 backdrop-blur transition group-hover:border-blush group-hover:bg-gradient-to-br group-hover:from-ember group-hover:to-blush">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      <AnimatePresence>
        {active && active.id === "ai-video-modeling" && (
          <DemoModal key="demo-modal" onClose={() => setActive(null)} />
        )}
        {active && active.id === "ai-photo-modeling" && (
          <PhotoModal key="photo-modal" onClose={() => setActive(null)} />
        )}
        {active && active.id !== "ai-video-modeling" && active.id !== "ai-photo-modeling" && (
          <motion.div
            key="standard-modal"
            className="fixed inset-0 z-[95] flex items-end justify-center bg-ink/80 p-4 backdrop-blur-md md:items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.article
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto border border-blush/20 bg-ink shadow-[0_0_80px_rgba(139,108,255,0.25)]"
            >
              <button
                type="button"
                onClick={() => setActive(null)}
                className="absolute right-4 top-4 z-10 rounded-full border border-paper/20 bg-ink/60 p-2"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="relative aspect-[16/9] overflow-hidden">
                {active.videoUrl ? (
                  <video src={active.videoUrl} autoPlay loop muted playsInline className="h-full w-full object-cover" />
                ) : (
                  <img src={active.cover} alt="" className="h-full w-full object-cover" />
                )}
                <div className="film-grain absolute inset-0" />
              </div>
              <div className="grid gap-8 p-6 md:grid-cols-[1.2fr_0.8fr] md:p-10">
                <div>
                  <p className="text-[11px] tracking-[0.3em] uppercase text-gold">{active.category}</p>
                  <h3 className="mt-2 font-serif text-5xl italic">{active.title}</h3>
                  <p className="mt-5 max-w-xl text-paper/80">{active.story}</p>
                </div>
                <div className="space-y-4 border-t border-paper/10 pt-6 text-sm md:border-l md:border-t-0 md:pl-8 md:pt-0">
                  <Meta label="Client" value={active.client} />
                  <Meta label="Year" value={active.year} />
                  <Meta label="Tags" value={active.tags.join(" · ")} />
                  <p className="pt-2 text-mist">{active.summary}</p>
                </div>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] tracking-[0.3em] uppercase text-mist">{label}</p>
      <p className="mt-1">{value}</p>
    </div>
  );
}
