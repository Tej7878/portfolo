import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ArrowLeft } from "lucide-react";
import { useState } from "react";

type Demo = {
  id: string;
  badge: string;
  title: string;
  desc: string;
  stats: string;
  cover: string;
  videoUrl: string;
  rawImages: string[];
  aiImages: string[];
};

const demos: Demo[] = [
  {
    id: "demo-1",
    badge: "Demo 1",
    title: "Demo 01: Fashion Model Runway",
    desc: "Full production showcase with 2 raw camera input photos and 3 studio model frames.",
    stats: "2 Raw • 3 AI Stills",
    cover: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    rawImages: [
      "https://images.unsplash.com/photo-1550614000-4b95d415f82c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?auto=format&fit=crop&w=400&q=80"
    ],
    aiImages: [
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1509631179647-0c37cb1100f7?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    id: "demo-2",
    badge: "Demo 2",
    title: "Demo 02: Studio Apparel Motion",
    desc: "Full production showcase with 2 raw camera input photos and 3 studio model frames.",
    stats: "2 Raw • 3 AI Stills",
    cover: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    rawImages: [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=400&q=80"
    ],
    aiImages: [
      "https://images.unsplash.com/photo-1492633423870-43d1cd2a4507?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1509631179647-0c37cb1100f7?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    id: "demo-3",
    badge: "Demo 3",
    title: "Demo 03: Editorial Commercial Sequence",
    desc: "Full production showcase with 2 raw camera input photos and 3 studio model frames.",
    stats: "2 Raw • 3 AI Stills",
    cover: "https://images.unsplash.com/photo-1539109136881-3be0616acf95?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    rawImages: [
      "https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=400&q=80"
    ],
    aiImages: [
      "https://images.unsplash.com/photo-1512413914488-842278c5208b?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1509631179647-0c37cb1100f7?auto=format&fit=crop&w=400&q=80"
    ]
  }
];

export function DemoModal({ onClose }: { onClose: () => void }) {
  const [activeDemo, setActiveDemo] = useState<Demo | null>(null);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0B0914]/90 p-4 md:p-8 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 20, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 20, opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[95vh] w-full max-w-[1200px] flex-col overflow-hidden rounded-2xl border border-[#2A2A4A] bg-[#0A0A10] shadow-2xl shadow-indigo-500/10"
      >
        {/* Header */}
        <header className="flex items-center justify-between border-b border-[#2A2A4A] bg-[#0F0F17] px-6 py-4 shrink-0">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#2A2A4A] bg-[#151520] font-bold text-white shadow-inner">
              3D
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-lg font-bold text-white font-display">AI Video Modeling</h2>
                <span className="rounded-full bg-[#1A254C] px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-[#7A9AFF]">
                  TRENDING
                </span>
              </div>
              <p className="text-xs text-gray-400">Generate High-Fidelity AI Video Models And Virtual Actors For Ads, Campaigns, And Commercials.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-white px-5 py-2 text-sm font-bold text-black transition hover:bg-gray-200">
              Book Service ✦
            </button>
            <button
              onClick={onClose}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#2A2A4A] bg-[#151520] text-gray-400 transition hover:bg-[#2A2A4A] hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </header>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10 scrollbar-hide">
          <AnimatePresence mode="wait">
            {!activeDemo ? (
              <motion.div
                key="list"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center"
              >
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#2A2A4A] bg-[#1A1A2E] px-4 py-1.5 text-[11px] font-bold tracking-widest text-[#9D84FF] uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#9D84FF]"></span>
                  AI VIDEO MODELING DEMONSTRATIONS
                </div>
                <h1 className="mb-3 text-center font-display text-4xl font-extrabold text-white md:text-5xl">
                  Select A Demo Showcase
                </h1>
                <p className="mb-12 max-w-2xl text-center text-sm text-gray-400">
                  Choose Demo 1, Demo 2, or Demo 3 to open its full commercial video, raw smartphone input photos, and AI generated model frames together.
                </p>

                <div className="grid w-full gap-6 md:grid-cols-3">
                  {demos.map((demo) => (
                    <div
                      key={demo.id}
                      className="group flex cursor-pointer flex-col overflow-hidden rounded-xl border border-[#2A2A4A] bg-[#151520] transition hover:border-[#4A4A7A] hover:shadow-[0_0_30px_rgba(139,108,255,0.1)]"
                      onClick={() => setActiveDemo(demo)}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={demo.cover}
                          alt={demo.title}
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        />
                        <div className="absolute left-4 top-4 rounded-full bg-[#6A4CFF] px-3 py-1 text-[11px] font-bold tracking-wider text-white shadow-lg uppercase">
                          {demo.badge}
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <h3 className="mb-2 text-xl font-bold text-white">{demo.title}</h3>
                        <p className="mb-6 text-sm text-gray-400 leading-relaxed">{demo.desc}</p>
                        <div className="mt-auto flex items-center justify-between border-t border-[#2A2A4A] pt-4">
                          <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">{demo.stats}</span>
                          <button className="flex items-center gap-2 rounded-full bg-[#241B4D] px-4 py-1.5 text-xs font-bold text-[#A58FFF] transition group-hover:bg-[#8B6CFF] group-hover:text-white">
                            Open Full Demo <ArrowRight className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="detail"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col"
              >
                {/* Detail Navigation */}
                <div className="mb-8 flex items-center justify-between rounded-xl border border-[#2A2A4A] bg-[#151520] p-3">
                  <button
                    onClick={() => setActiveDemo(null)}
                    className="flex items-center gap-2 rounded-lg bg-[#2A2A4A]/40 px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#2A2A4A]"
                  >
                    <ArrowLeft className="h-4 w-4" /> Back to All Demos
                  </button>
                  <div className="flex gap-2 bg-[#0A0A10] p-1 rounded-lg border border-[#2A2A4A]">
                    {demos.map((d) => (
                      <button
                        key={d.id}
                        onClick={() => setActiveDemo(d)}
                        className={`rounded-md px-6 py-1.5 text-sm font-bold transition ${
                          activeDemo.id === d.id
                            ? "bg-[#6A4CFF] text-white shadow-[0_0_15px_rgba(106,76,255,0.4)]"
                            : "text-gray-400 hover:bg-[#2A2A4A] hover:text-white"
                        }`}
                      >
                        {d.badge}
                      </button>
                    ))}
                  </div>
                  <div className="rounded-lg border border-[#2A2A4A] bg-[#1A1A2E] px-4 py-2 text-sm font-semibold text-[#A58FFF]">
                    {activeDemo.title}
                  </div>
                </div>

                {/* Main Video */}
                <div className="mb-8 overflow-hidden rounded-xl border border-[#2A2A4A] bg-[#08080C]">
                  <div className="flex items-center justify-between border-b border-[#2A2A4A] bg-[#151520] px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                      <span className="text-[11px] font-bold tracking-widest text-white uppercase">
                        AI VIDEO MODELING COMMERCIAL
                      </span>
                    </div>
                    <span className="rounded bg-[#1A1A3A] px-2.5 py-1 text-[10px] font-bold tracking-wider text-[#7A9AFF]">
                      HD 60 FPS AI Fluid Motion
                    </span>
                  </div>
                  <div className="flex justify-center bg-black py-8">
                    <div className="aspect-[9/16] w-full max-w-[320px] overflow-hidden rounded-xl border border-[#2A2A4A]">
                       {activeDemo.videoUrl ? (
                          <video src={activeDemo.videoUrl} autoPlay loop muted playsInline className="h-full w-full object-cover" />
                        ) : (
                          <img src={activeDemo.cover} alt="" className="h-full w-full object-cover" />
                        )}
                    </div>
                  </div>
                </div>

                {/* Stills Comparison */}
                <div className="grid gap-6 lg:grid-cols-[1fr_1.5fr]">
                  {/* Raw Photos */}
                  <div className="flex flex-col rounded-xl border border-[#3A2A1A] bg-[#1A1508] p-6 shadow-[0_0_30px_rgba(234,179,8,0.03)]">
                    <div className="mb-6 flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
                          <h3 className="text-sm font-bold tracking-widest text-yellow-500 uppercase">
                            RAW INPUT PHOTOS (BEFORE)
                          </h3>
                        </div>
                        <p className="mt-1 text-xs text-gray-400">Unedited camera snapshots</p>
                      </div>
                      <span className="rounded border border-yellow-500/30 bg-yellow-500/10 px-2.5 py-1 text-[10px] font-bold tracking-wider text-yellow-500">
                        {activeDemo.rawImages.length} Photos
                      </span>
                    </div>
                    <div className="mb-4 grid flex-1 grid-cols-2 gap-4">
                      {activeDemo.rawImages.map((img, i) => (
                        <div key={i} className="group relative aspect-[3/4] overflow-hidden rounded-lg border border-[#3A2A1A]">
                          <img src={img} alt={`Raw ${i + 1}`} className="h-full w-full object-cover grayscale opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0" />
                          <div className="absolute bottom-2 left-2 rounded bg-black/80 px-2 py-1 text-[10px] font-bold text-yellow-500 backdrop-blur">
                            Raw #{i + 1}
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="text-[11px] italic text-gray-500">Click any photo to zoom in fullscreen</p>
                  </div>

                  {/* AI Stills */}
                  <div className="flex flex-col rounded-xl border border-[#3A2A5A] bg-[#1A1528] p-6 shadow-[0_0_40px_rgba(139,108,255,0.05)]">
                    <div className="mb-6 flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-[#A58FFF]"></span>
                          <h3 className="text-sm font-bold tracking-widest text-[#A58FFF] uppercase">
                            AI MODEL STILLS (AFTER)
                          </h3>
                        </div>
                        <p className="mt-1 text-xs text-gray-400">Studio-grade virtual model results</p>
                      </div>
                      <span className="rounded border border-[#A58FFF]/30 bg-[#A58FFF]/10 px-2.5 py-1 text-[10px] font-bold tracking-wider text-[#A58FFF]">
                        {activeDemo.aiImages.length} Frames
                      </span>
                    </div>
                    <div className="mb-4 grid flex-1 grid-cols-3 gap-4">
                      {activeDemo.aiImages.map((img, i) => (
                        <div key={i} className="group relative aspect-[3/4] overflow-hidden rounded-lg border border-[#4A3A7A]">
                          <img src={img} alt={`AI Still ${i + 1}`} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                          <div className="absolute bottom-2 left-2 rounded bg-black/80 px-2 py-1 text-[10px] font-bold text-white backdrop-blur">
                            AI Still #{i + 1}
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="text-[11px] italic text-gray-500">Click any photo to zoom in fullscreen</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <footer className="flex items-center justify-between border-t border-[#2A2A4A] bg-[#0F0F17] px-6 py-4 shrink-0">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
            </span>
            <p className="text-xs text-gray-400">
              <strong className="text-gray-300">Ready for production:</strong> All services tailored to your exact brand aesthetics.
            </p>
          </div>
          <button className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#8B6CFF] to-[#B84AFF] px-6 py-2.5 text-sm font-bold text-white transition hover:opacity-90 shadow-[0_0_20px_rgba(139,108,255,0.4)]">
            Request Similar Project <ArrowRight className="h-4 w-4" />
          </button>
        </footer>
      </motion.div>
    </motion.div>
  );
}
