import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Calendar, Phone } from "lucide-react";
import { ServiceDetail } from "../../data/servicesDetailedData";

// Fiche détaillée d'un service (même disposition que les fiches profil)
interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: ServiceDetail | null;
}

const ease = [0.22, 1, 0.36, 1] as const;

const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onClose, service }) => {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose]);

  return createPortal(
    <AnimatePresence>
      {isOpen && service && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center p-3 sm:p-6 bg-gray-950/50 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={service.title}
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ duration: 0.45, ease }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-[32px] bg-white shadow-2xl grid grid-cols-1 md:grid-cols-[0.95fr_1.05fr]"
          >
            <button
              onClick={onClose}
              aria-label="Fermer"
              className="absolute top-4 right-4 z-10 grid place-items-center w-10 h-10 rounded-full bg-white/90 backdrop-blur text-gray-950 shadow-md hover:rotate-90 transition-transform duration-300"
            >
              <X size={18} />
            </button>

            {/* Photo / Vidéo */}
            <div className="relative min-h-[260px] md:min-h-full">
              {service.image?.endsWith(".mp4") ? (
                <video
                  src={service.image}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover" />
              )}
              {!service.image?.endsWith(".mp4") && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#155DFC]/85 via-[#155DFC]/10 to-transparent pointer-events-none" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white pointer-events-none">
                    <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
                      <span className="w-6 h-px bg-[#00BBA7]" /> Nos services
                    </p>
                    <h2 className="mt-2 text-2xl sm:text-3xl font-bold leading-tight">{service.title}</h2>
                  </div>
                </>
              )}
            </div>

            {/* Détails */}
            <div className="p-6 sm:p-8 lg:p-10">
              <span className="inline-block rounded-full bg-[linear-gradient(135deg,#155DFC_0%,#00BBA7_100%)] px-3.5 py-1 text-xs font-semibold text-white">
                {service.subtitle}
              </span>
              <p className="mt-5 text-gray-600 leading-relaxed">{service.description}</p>

              {service.highlights.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-950">Points forts</h3>
                  <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.highlights.map((item) => (
                      <li key={item} className="flex items-center gap-3 rounded-2xl bg-[#F1F6FB] px-4 py-3 text-sm font-medium text-gray-800">
                        <span className="grid place-items-center w-6 h-6 shrink-0 rounded-full bg-[#00BBA7] text-white">
                          <Check size={13} strokeWidth={3} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/rdv"
                  onClick={onClose}
                  className="inline-flex items-center gap-2 rounded-full bg-gray-950 pl-1.5 pr-5 py-1.5 text-sm font-semibold text-white"
                >
                  <span className="grid place-items-center w-8 h-8 rounded-full bg-white text-gray-950"><Calendar size={14} /></span>
                  Prendre rendez-vous
                </Link>
                <a
                  href="tel:+2250701214580"
                  className="inline-flex items-center gap-2 rounded-full pl-1.5 pr-5 py-1.5 text-sm font-semibold text-gray-950 ring-1 ring-gray-200 hover:ring-[#155DFC]/40 transition"
                >
                  <span className="grid place-items-center w-8 h-8 rounded-full bg-[#F1F6FB] text-[#155DFC]"><Phone size={14} /></span>
                  07 01 21 45 80
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default ServiceModal;
