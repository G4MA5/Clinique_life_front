import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Siren } from "lucide-react";
import { Link } from "react-router-dom";

import { initialSlides, videoSlide, CarouselSlide } from "../../data/carouselData";

const features = [
  { title: "Urgences 24h/24", text: "Une équipe mobilisée jour et nuit, 7 jours sur 7." },
  { title: "Équipe experte", text: "Des spécialistes qualifiés, attentifs à chaque patient." },
  { title: "Plateau technique", text: "Imagerie et équipements modernes pour des soins précis." },
];

const IMAGE_DURATION = 8000;

const CarouselHero: React.FC = () => {
  const [slides, setSlides] = useState<CarouselSlide[]>([videoSlide, ...initialSlides]);
  const [index, setIndex] = useState(0);

  // Les slides images gérées depuis l'admin (localStorage) suivent la vidéo
  useEffect(() => {
    try {
      const saved = localStorage.getItem("carouselSlides");
      if (!saved) return;
      const images = (JSON.parse(saved) as CarouselSlide[]).filter(
        (s) => s.isActive !== false && s.type !== "video"
      );
      if (images.length) setSlides([videoSlide, ...images]);
    } catch {
      /* ignore */
    }
  }, []);

  const next = useCallback(() => setIndex((i) => (i + 1) % slides.length), [slides.length]);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  // Les images défilent seules ; la vidéo passe à la suite quand elle se termine
  useEffect(() => {
    if (slides[index]?.type === "video") return;
    const t = setTimeout(next, IMAGE_DURATION);
    return () => clearTimeout(t);
  }, [index, slides, next]);

  const slide = slides[index];
  if (!slide) return null;

  return (
    <div className="relative w-full h-[100svh] min-h-[640px] overflow-hidden bg-slate-950 group">
      {/* Média */}
      <AnimatePresence initial={false}>
        <motion.div
          key={slide.id + slide.url}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="absolute inset-0"
        >
          {slide.type === "video" ? (
            <video
              src={slide.url}
              autoPlay
              muted
              playsInline
              onEnded={next}
              className="w-full h-full object-cover"
            />
          ) : (
            <img src={slide.url} alt={slide.title} className="w-full h-full object-cover" />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Voiles pour la lisibilité du texte */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/15 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/45 to-transparent pointer-events-none" />

      {/* Contenu */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-end pb-10 md:pb-14 pt-28">
        <div className="flex-1 flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id + slide.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="max-w-3xl"
            >
              <h1 className="font-poppins font-semibold text-white tracking-tight leading-[1.05] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
                {slide.title}
                {slide.accent && (
                  <>
                    <br />
                    <span className="text-white/60">{slide.accent}</span>
                  </>
                )}
              </h1>
              <p className="mt-6 text-base md:text-lg text-white/80 max-w-lg leading-relaxed">
                {slide.description}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  to="/rdv"
                  className="inline-flex items-center gap-3 bg-white text-slate-900 pl-6 pr-1.5 py-1.5 rounded-full font-semibold text-sm md:text-base hover:bg-white/90 transition"
                >
                  Prendre rendez-vous
                  <span className="grid place-items-center w-9 h-9 rounded-full bg-slate-900 text-white">
                    <ArrowRight size={18} />
                  </span>
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center px-6 py-3 rounded-full border border-white/50 text-white font-semibold text-sm md:text-base hover:bg-white/10 transition"
                >
                  Nos services
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carte urgences (desktop) */}
        <Link
          to="/contact"
          className="hidden lg:flex absolute right-12 bottom-48 items-center gap-3 max-w-xs rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-4 text-white hover:bg-white/15 transition"
        >
          <span className="grid place-items-center w-10 h-10 rounded-full bg-white text-slate-900 shrink-0">
            <Siren size={18} />
          </span>
          <span>
            <span className="block font-semibold">Urgences ouvertes 24h/24</span>
            <span className="block text-sm text-white/70">Contactez-nous à tout moment</span>
          </span>
        </Link>

        {/* Bandeau des points forts */}
        <div className="border-t border-white/25 pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
          {features.map((f) => (
            <div key={f.title} className="hidden sm:block first:block">
              <h3 className="text-white font-medium text-lg">{f.title}</h3>
              <p className="mt-1 text-sm text-white/65 max-w-xs">{f.text}</p>
            </div>
          ))}
        </div>

        {/* Indicateurs */}
        <div className="mt-6 flex items-center gap-2">
          {slides.map((s, i) => (
            <button
              key={s.id + s.url}
              aria-label={`Slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1 rounded-full transition-all ${
                i === index ? "w-10 bg-white" : "w-5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Flèches */}
      <button
        onClick={prev}
        aria-label="Précédent"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 hover:bg-white/25 text-white transition opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={next}
        aria-label="Suivant"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 hover:bg-white/25 text-white transition opacity-0 group-hover:opacity-100"
      >
        <ChevronRight size={28} />
      </button>
    </div>
  );
};

export default CarouselHero;
