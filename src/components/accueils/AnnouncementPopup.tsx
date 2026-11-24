import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Sparkles, CalendarDays } from "lucide-react";
import { useNavigate } from "react-router-dom";
import medecinImg from "../../assets/Medecin.jpg";
import Logo from "../../assets/life.png";

// Pop-up d'annonce de l'accueil : photo à gauche, texte à droite (empilé en mobile).
// Elle ne s'affiche qu'une fois par session de navigation pour ne pas gêner la visite.
interface AnnouncementPopupProps {
  delay?: number;
  title?: string;
  message?: string;
  image?: string;
  buttonLink?: string;
  type?: "pub" | "info";
  date?: string;
}

const CLE_SESSION = "annonce-accueil-vue";
const ease = [0.22, 1, 0.36, 1] as const;

const AnnouncementPopup: React.FC<AnnouncementPopupProps> = ({
  delay = 2000,
  title = "Nouveau : Service de Télémédecine 24/7",
  message = "Consultez nos médecins spécialistes depuis chez vous en toute sécurité et à tout moment.",
  image = medecinImg,
  buttonLink = "#",
  type = "pub",
  date = "5 Mars 2026",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let dejaVue = false;
    try {
      dejaVue = sessionStorage.getItem(CLE_SESSION) === "1";
    } catch {
      /* stockage indisponible : on affiche quand même */
    }
    if (dejaVue) return;
    const timer = setTimeout(() => setIsOpen(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  // Fermeture avec Échap + mémorisation pour la session
  const handleClose = () => {
    setIsOpen(false);
    try {
      sessionStorage.setItem(CLE_SESSION, "1");
    } catch {
      /* ignoré */
    }
  };

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && handleClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const handleAction = () => {
    if (buttonLink && buttonLink !== "#") navigate(buttonLink);
    handleClose();
  };

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-950/50 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={title}
            initial={{ opacity: 0, y: 50, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ duration: 0.55, ease }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-sm md:max-w-3xl overflow-hidden rounded-[32px] bg-white shadow-[0_50px_100px_-30px_rgba(0,0,0,0.5)] grid grid-cols-1 md:grid-cols-[1fr_1.1fr]"
          >
            {/* Photo */}
            <div className="relative h-48 md:h-auto md:min-h-[420px] overflow-hidden">
              <motion.img
                src={image}
                alt={title}
                initial={{ scale: 1.15 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.4, ease }}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#155DFC]/70 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-white/10" />
              {/* Logo */}
              <span className="absolute left-4 bottom-4 grid place-items-center w-14 h-14 rounded-2xl bg-white shadow-xl">
                <img src={Logo} alt="Clinique Life" className="w-10 h-10 object-contain" />
              </span>
            </div>

            {/* Contenu */}
            <div className="relative p-6 sm:p-8 md:p-10 flex flex-col">
              <span className="pointer-events-none absolute -right-16 -top-16 w-56 h-56 rounded-full border border-[#155DFC]/10 anim-ring" />

              <button
                onClick={handleClose}
                aria-label="Fermer"
                className="absolute top-4 right-4 grid place-items-center w-10 h-10 rounded-full bg-[#F1F6FB] text-gray-950 hover:rotate-90 transition-transform duration-300"
              >
                <X size={18} />
              </button>

              <div className="relative flex flex-wrap items-center gap-2 pr-12">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[linear-gradient(135deg,#155DFC_0%,#00BBA7_100%)] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                  <Sparkles size={12} /> Nouveauté
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F1F6FB] px-3 py-1 text-[11px] font-semibold text-gray-500">
                  <CalendarDays size={12} /> {date}
                </span>
              </div>

              <h2 className="relative mt-5 text-2xl md:text-3xl font-bold tracking-tight leading-tight text-gray-950">{title}</h2>
              <p className="relative mt-3 text-gray-500 leading-relaxed">{message}</p>

              <div className="relative mt-auto pt-8">
                {type === "pub" ? (
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      onClick={handleAction}
                      className="group inline-flex items-center gap-3 rounded-full bg-gray-950 pl-6 pr-1.5 py-1.5 text-sm font-semibold text-white"
                    >
                      Lire l'article
                      <span className="grid place-items-center w-9 h-9 rounded-full bg-white text-gray-950 transition-transform group-hover:translate-x-0.5">
                        <ArrowRight size={16} />
                      </span>
                    </button>
                    <button onClick={handleClose} className="px-4 py-3 text-sm font-semibold text-gray-500 hover:text-gray-950 transition">
                      Plus tard
                    </button>
                  </div>
                ) : (
                  <button onClick={handleClose} className="w-full rounded-full bg-gray-950 py-3.5 text-sm font-semibold text-white">
                    Fermer
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default AnnouncementPopup;
