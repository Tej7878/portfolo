import { motion, AnimatePresence } from "framer-motion";
import { X, Search, ChevronLeft, ChevronRight, ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";

type PhotoCollection = {
  id: string;
  name: string;
  countLabel: string;
  description: string;
  photos: {
    id: string;
    url: string;
    title: string;
    tag: string;
  }[];
};

const collections: PhotoCollection[] = [
  {
    id: "col-1",
    name: "Collection 01: Fashion Editorial",
    countLabel: "4 High-Res Editorial Photos",
    description: "Urban street editorial showcasing contemporary haute couture and accessories.",
    photos: [
      {
        id: "col1-1",
        url: "https://images.unsplash.com/photo-1509631179647-0c37cb1100f7?auto=format&fit=crop&w=1000&q=85",
        title: "Editorial Look 01 — Back Accent & Bag",
        tag: "Street Editorial"
      },
      {
        id: "col1-2",
        url: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85",
        title: "Editorial Look 02 — Walking Stride",
        tag: "Full Silhouette"
      },
      {
        id: "col1-3",
        url: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1000&q=85",
        title: "Editorial Look 03 — Street Crosswalk",
        tag: "Motion Portrait"
      },
      {
        id: "col1-4",
        url: "https://images.unsplash.com/photo-1539109136881-3be0616acf95?auto=format&fit=crop&w=1000&q=85",
        title: "Editorial Look 04 — Front Portrait Pose",
        tag: "Accessory Detail"
      }
    ]
  },
  {
    id: "col-2",
    name: "Collection 02: Haute Couture Studio",
    countLabel: "4 High-Res Studio Photos",
    description: "Clean studio lighting highlighting luxury garment drape and fabric texture.",
    photos: [
      {
        id: "col2-1",
        url: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1000&q=85",
        title: "Haute Couture 01 — Minimalist Trench",
        tag: "Studio Lighting"
      },
      {
        id: "col2-2",
        url: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=85",
        title: "Haute Couture 02 — Velvet Eveningwear",
        tag: "Editorial Studio"
      },
      {
        id: "col2-3",
        url: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1000&q=85",
        title: "Haute Couture 03 — High Contrast Profile",
        tag: "Dramatic Silhouette"
      },
      {
        id: "col2-4",
        url: "https://images.unsplash.com/photo-1512413914488-842278c5208b?auto=format&fit=crop&w=1000&q=85",
        title: "Haute Couture 04 — Textured Silk Ensemble",
        tag: "Macro Detail"
      }
    ]
  },
  {
    id: "col-3",
    name: "Collection 03: Modern Glamour Portraits",
    countLabel: "4 High-Res Glamour Portraits",
    description: "Cinematic close-up portraits with ultra-sharp facial features and beauty lighting.",
    photos: [
      {
        id: "col3-1",
        url: "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=1000&q=85",
        title: "Glamour Portrait 01 — Soft Golden Hour",
        tag: "Natural Glow"
      },
      {
        id: "col3-2",
        url: "https://images.unsplash.com/photo-1550614000-4b95d415f82c?auto=format&fit=crop&w=1000&q=85",
        title: "Glamour Portrait 02 — High Fashion Beauty",
        tag: "Studio Stills"
      },
      {
        id: "col3-3",
        url: "https://images.unsplash.com/photo-1492633423870-43d1cd2a4507?auto=format&fit=crop&w=1000&q=85",
        title: "Glamour Portrait 03 — Vibrant Ambient Tone",
        tag: "Colorgrade"
      },
      {
        id: "col3-4",
        url: "https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?auto=format&fit=crop&w=1000&q=85",
        title: "Glamour Portrait 04 — Minimalist Studio Face",
        tag: "Editorial Beauty"
      }
    ]
  },
  {
    id: "col-4",
    name: "Collection 04: Urban Contemporary",
    countLabel: "4 High-Res Streetwear Photos",
    description: "Edgy lifestyle and streetwear concepts shot across dynamic metropolitan backdrops.",
    photos: [
      {
        id: "col4-1",
        url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1000&q=85",
        title: "Urban 01 — Oversized Silhouette",
        tag: "Metropolitan"
      },
      {
        id: "col4-2",
        url: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=1000&q=85",
        title: "Urban 02 — Industrial Mood",
        tag: "Streetwear"
      },
      {
        id: "col4-3",
        url: "https://images.unsplash.com/photo-1616469829941-c7200edec809?auto=format&fit=crop&w=1000&q=85",
        title: "Urban 03 — Neon Twilight",
        tag: "Night Editorial"
      },
      {
        id: "col4-4",
        url: "https://images.unsplash.com/photo-1509631179647-0c37cb1100f7?auto=format&fit=crop&w=1000&q=85",
        title: "Urban 04 — Modern Chic Fit",
        tag: "Urban Stills"
      }
    ]
  }
];

export function PhotoModal({ onClose }: { onClose: () => void }) {
  const [selectedCollectionId, setSelectedCollectionId] = useState(collections[0].id);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [hoveredPhotoIndex, setHoveredPhotoIndex] = useState<number | null>(null);

  const currentCollection =
    collections.find((c) => c.id === selectedCollectionId) || collections[0];

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) =>
        prev! === 0 ? currentCollection.photos.length - 1 : prev! - 1
      );
    }
  };

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) =>
        prev! === currentCollection.photos.length - 1 ? 0 : prev! + 1
      );
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0B0914]/90 p-3 md:p-6 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 20, opacity: 0, scale: 0.96 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 20, opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[96vh] w-full max-w-[1300px] flex-col overflow-hidden rounded-2xl border border-[#2A2A4A] bg-[#0A0A12] shadow-2xl shadow-indigo-500/10"
      >
        {/* Header */}
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-[#212136] bg-[#0E0E18] px-6 py-4 shrink-0">
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#2D2D4A] bg-[#141424] font-bold text-white shadow-inner tracking-wider text-sm">
              5D
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-bold tracking-tight text-white font-display">
                  AI Photo Modeling
                </h2>
                <span className="rounded-full border border-[#2C3868] bg-[#162045] px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-[#7A9AFF]">
                  ULTRA QUALITY
                </span>
              </div>
              <p className="mt-0.5 text-xs text-gray-400">
                Create Professional Studio-Grade Model Photoshoots Without Physical Studios, Sets, Or Crews.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2 text-xs font-bold text-black shadow-md transition hover:bg-gray-200"
            >
              Book Service
              <Sparkles className="h-3.5 w-3.5 fill-black" />
            </a>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2A2A4A] bg-[#151522] text-gray-400 transition hover:bg-[#2A2A4A] hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </header>

        {/* Collections Tab Bar */}
        <div className="border-b border-[#212136] bg-[#0B0B14] px-6 py-3">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin scrollbar-thumb-[#2A2A4A]">
            {collections.map((col) => {
              const isActive = col.id === selectedCollectionId;
              return (
                <button
                  key={col.id}
                  onClick={() => setSelectedCollectionId(col.id)}
                  className={`whitespace-nowrap rounded-xl px-5 py-2.5 text-xs font-medium transition-all ${
                    isActive
                      ? "bg-[#5E52F6] text-white shadow-lg shadow-indigo-600/30 font-semibold"
                      : "border border-[#232338] bg-[#12121E] text-gray-300 hover:border-[#383854] hover:text-white"
                  }`}
                >
                  {col.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Modal Body / Image Grid */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8">
          {/* Subheading Row */}
          <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-baseline gap-2.5">
              <h3 className="text-base font-bold text-white tracking-wide">
                {currentCollection.name}
              </h3>
              <span className="text-xs font-medium text-[#7A9AFF]">
                ({currentCollection.countLabel})
              </span>
            </div>
            <p className="text-xs text-gray-400">
              Click any image to view fullscreen
            </p>
          </div>

          {/* 4-Column Image Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {currentCollection.photos.map((photo, index) => {
              const isHovered = hoveredPhotoIndex === index;
              return (
                <div
                  key={photo.id}
                  onMouseEnter={() => setHoveredPhotoIndex(index)}
                  onMouseLeave={() => setHoveredPhotoIndex(null)}
                  onClick={() => setLightboxIndex(index)}
                  className={`group relative cursor-pointer overflow-hidden rounded-2xl border bg-[#141422] transition-all duration-300 ${
                    isHovered
                      ? "border-[#7A60FF] shadow-[0_0_25px_rgba(122,96,255,0.35)] scale-[1.01]"
                      : "border-[#25253D] hover:border-[#52449E]"
                  }`}
                >
                  {/* Photo Container */}
                  <div className="relative aspect-[9/14] w-full overflow-hidden bg-[#0A0A10]">
                    <img
                      src={photo.url}
                      alt={photo.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Subtle gradient vignette */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                    {/* Fullscreen Preview overlay pill */}
                    <div
                      className={`absolute bottom-4 left-4 flex items-center gap-1.5 rounded-lg border border-white/10 bg-black/60 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md transition-all duration-300 ${
                        isHovered
                          ? "opacity-100 translate-y-0 shadow-lg"
                          : "opacity-90 md:opacity-0 md:group-hover:opacity-100 translate-y-1 group-hover:translate-y-0"
                      }`}
                    >
                      <Search className="h-3.5 w-3.5 text-white" />
                      <span>Fullscreen Preview</span>
                    </div>

                    {/* Tag Badge at top */}
                    <div className="absolute left-3 top-3 rounded-md bg-black/50 px-2 py-0.5 text-[10px] font-medium text-gray-300 backdrop-blur-sm">
                      {photo.tag}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Bar */}
        <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-[#212136] bg-[#0E0E18] px-6 py-4 shrink-0">
          <div className="flex items-center gap-2.5 text-xs text-gray-300">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
            </span>
            <span>
              Ready for production: All services tailored to your exact brand aesthetics.
            </span>
          </div>

          <a
            href="#contact"
            onClick={onClose}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#5B4EFF] to-[#A84BFF] px-6 py-2.5 text-xs font-semibold text-white shadow-lg shadow-purple-600/25 transition-all hover:from-[#6D61FF] hover:to-[#B65DFF] hover:shadow-purple-600/40"
          >
            <span>Request Similar Project</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </footer>
      </motion.div>

      {/* Lightbox / Fullscreen Viewer */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-[110] flex items-center justify-center bg-black/95 p-4 backdrop-blur-xl"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative flex max-h-[92vh] max-w-4xl flex-col items-center"
            >
              {/* Top controls */}
              <div className="mb-3 flex w-full items-center justify-between px-2 text-white">
                <div>
                  <h4 className="text-sm font-semibold">
                    {currentCollection.photos[lightboxIndex].title}
                  </h4>
                  <p className="text-xs text-gray-400">
                    Photo {lightboxIndex + 1} of {currentCollection.photos.length} • {currentCollection.name}
                  </p>
                </div>
                <button
                  onClick={() => setLightboxIndex(null)}
                  className="rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Lightbox Image */}
              <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <img
                  src={currentCollection.photos[lightboxIndex].url}
                  alt={currentCollection.photos[lightboxIndex].title}
                  className="max-h-[78vh] w-auto object-contain rounded-xl"
                />

                {/* Left Arrow */}
                <button
                  onClick={handlePrevPhoto}
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2.5 text-white backdrop-blur-md transition hover:bg-black/80"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={handleNextPhoto}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2.5 text-white backdrop-blur-md transition hover:bg-black/80"
                  aria-label="Next photo"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
