import { CalendarDays, ClipboardList, Stethoscope, FileText, ArrowRight, Info } from "lucide-react";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Assurance, initialAssurances } from "../../data/assurancesData";

// Liste des logos qui ont besoin d'être plus grands - We use the name instead of filename now
const largeLogos = ["GGA", "CIMEF", "CNPS", "SYNACASS", "SEVEN", "MUSATRAP", "Transvie", "Utrep", "Ankara", "Ascoma", "Atlantique"];

const steps = [
  {
    id: "01",
    title: "Prise de rendez-vous",
    text: "Réservez votre créneau en ligne ou par téléphone avec confirmation immédiate",
    icon: CalendarDays,
  },
  {
    id: "02",
    title: "Accueil à la clinique",
    text: "Présentez-vous 10 min avant pour la mise à jour de votre dossier",
    icon: ClipboardList,
  },
  {
    id: "03",
    title: "La Consultation",
    text: "Examen médical complet avec diagnostic personnalisé sur place",
    icon: Stethoscope,
  },
  {
    id: "04",
    title: "Suivi & Documents",
    text: "Ordonnances et documents médicaux avec planification du suivi",
    icon: FileText,
  },
];

export default function Parcours() {
  const [partners, setPartners] = useState<Assurance[]>([]);
  const [activeStep, setActiveStep] = useState<string | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("assurances");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          if (typeof parsed[0] === 'object' && parsed[0] !== null && 'name' in parsed[0]) {
            setPartners(parsed);
            return;
          } else {
            // Bad format (e.g. old string array), clear it out
            localStorage.removeItem("assurances");
          }
        }
      }
    } catch (e) {

      console.error("Error loading assurances:", e);
    }
    setPartners(initialAssurances);
  }, []);

  return (
    <div className="w-full bg-white">
      {/* Section Partenaires avec scroll automatique */}
      <div className="w-full bg-white py-8 overflow-hidden">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
          Assurances et partenaires
        </h2>
        <div className="relative">
          <div className="flex animate-scroll-continuous">
            {/* Première série complète de logos */}
            {partners.map((partner, i) => (
              <div key={`first-${i}`} className="flex-shrink-0 mx-8">
                <img 
                 src={partner.logo}
                  alt={partner.name}
                  className={largeLogos.includes(partner.name) ? "h-28 w-40 object-contain" : "h-20 w-32 object-contain"}
                  onError={(e) => {
                    console.log(`Erreur: ${partner.name}`);
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
            ))}
            {/* Deuxième série complète pour effet infini */}
            {partners.map((partner, i) => (
              <div key={`second-${i}`} className="flex-shrink-0 mx-8">
                <img 
                  src={partner.logo}
                  alt={partner.name}
                  className={largeLogos.includes(partner.name) ? "h-28 w-40 object-contain" : "h-20 w-32 object-contain"}
                  onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bouton vers la page complète */}
        <div className="flex justify-center mt-12">
          <Link
            to="/assurances"
            className="group flex items-center gap-3 bg-white border-2 border-blue-500 text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-blue-200"
          >
            Voir tous nos partenaires
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Section Parcours de soins */}
      <section className="w-full py-12 sm:py-20 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Votre consultation en toute simplicité
          </h2>

          <p className="mt-4 sm:mt-6 max-w-3xl mx-auto text-sm sm:text-lg text-gray-500">
            Nous avons simplifié chaque étape pour que vous puissiez vous concentrer
            sur ce qui compte le plus : votre santé.
          </p>

          {/* Overlay transparent pour fermer la bulle au clic extérieur sur mobile */}
          {activeStep && (
            <div
              className="fixed inset-0 z-20 md:hidden"
              onClick={() => setActiveStep(null)}
            />
          )}

          <div className="mt-10 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === step.id;

              return (
                <div key={index} className="relative flex justify-center">
                  {/* Ligne de connexion desktop */}
                  {index !== steps.length - 1 && (
                    <div className="hidden lg:block absolute top-[62px] right-[-60px] w-[100px] h-[4px] bg-gradient-to-r from-cyan-400 to-transparent pointer-events-none" />
                  )}

                  {/* Bulle de message mobile au tap (design blanc) */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.85, y: 8 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.85, y: 8 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className={`md:hidden absolute z-30 bottom-[calc(100%+12px)] ${
                          index % 2 === 0 ? "left-0" : "right-0"
                        } w-[215px] max-w-[85vw] p-3.5 bg-white text-gray-900 rounded-2xl shadow-[0_15px_40px_-10px_rgba(21,93,252,0.28)] border border-blue-100/90 ring-1 ring-black/5 text-left`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-1.5 pb-1 border-b border-gray-100">
                          <span className="text-[11px] font-bold text-[#155DFC] flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#155DFC] animate-pulse" />
                            Étape {step.id}
                          </span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveStep(null);
                            }}
                            className="text-gray-400 hover:text-gray-700 text-xs p-1 leading-none -mr-1"
                            aria-label="Fermer"
                          >
                            ✕
                          </button>
                        </div>
                        <p className="text-xs text-gray-700 leading-snug">
                          {step.text}
                        </p>
                        {/* Pointe flèche bulle de message blanche */}
                        <div
                          className={`absolute top-full w-0 h-0 border-x-[7px] border-x-transparent border-t-[8px] border-t-white drop-shadow-[0_2px_1px_rgba(0,0,0,0.06)] ${
                            index % 2 === 0 ? "left-7" : "right-7"
                          }`}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Carte */}
                  <div
                    onClick={() => setActiveStep(isActive ? null : step.id)}
                    className={`bg-white rounded-2xl shadow-md sm:shadow-lg p-3.5 sm:px-6 sm:py-8 text-center w-full max-w-[260px] mx-auto transition-all duration-300 cursor-pointer md:cursor-default select-none ${
                      isActive
                        ? "ring-2 ring-blue-500 shadow-xl scale-[1.02]"
                        : "hover:shadow-xl"
                    }`}
                  >
                    <div className="w-10 h-10 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>

                    <div className="text-3xl sm:text-5xl font-extrabold text-gray-100 mb-1 sm:mb-2">
                      {step.id}
                    </div>

                    <h3 className="text-xs sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-3 leading-snug">
                      {step.title}
                    </h3>

                    {/* Sur desktop : texte normal affiché */}
                    <p className="hidden md:block text-gray-500 text-sm leading-relaxed">
                      {step.text}
                    </p>

                    {/* Sur mobile : petit indicateur interactif */}
                    <div className="md:hidden mt-2 flex items-center justify-center gap-1 text-[10px] font-medium text-blue-600 bg-blue-50/80 py-0.5 px-2 rounded-full mx-auto w-fit">
                      <Info size={11} />
                      <span>{isActive ? "Fermer" : "Détails"}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes scroll-continuous {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-continuous {
          animation: scroll-continuous 60s linear infinite;
          display: flex;
          width: max-content;
        }

        .animate-scroll-continuous:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}