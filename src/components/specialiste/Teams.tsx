import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  UserRound, Phone, Mail, X, ArrowRight, GraduationCap, BriefcaseBusiness, Clock, Languages, Calendar,
} from "lucide-react";
import { initialSpecialists, Specialist } from "../../data/teamData";

// Page « Nos spécialistes » : cartes des médecins + fiche détaillée
const ease = [0.22, 1, 0.36, 1] as const;

// Photo du spécialiste, ou icône personne si la photo est absente
const Avatar: React.FC<{ src?: string; alt: string; className?: string; icon?: number }> = ({ src, alt, className = "", icon = 56 }) => {
  const [erreur, setErreur] = useState(!src);
  return erreur ? (
    <div className={`grid place-items-center bg-[linear-gradient(135deg,#155DFC_0%,#00BBA7_100%)] text-white ${className}`}>
      <UserRound size={icon} strokeWidth={1.5} />
    </div>
  ) : (
    <img src={src} alt={alt} onError={() => setErreur(true)} className={`object-cover object-top ${className}`} />
  );
};

const Teams: React.FC = () => {
  const [selected, setSelected] = useState<Specialist | null>(null);
  const [specialists, setSpecialists] = useState<Specialist[]>(initialSpecialists);

  useEffect(() => {
    const savedSpecs = localStorage.getItem("specialists");
    if (savedSpecs) setSpecialists(JSON.parse(savedSpecs));
  }, []);

  // Fermeture avec Échap et blocage du défilement quand la fiche est ouverte
  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [selected]);

  return (
    <section id="equipe" className="relative w-full overflow-hidden py-20 px-4 md:px-8 bg-[#F7FAFE] scroll-mt-24">
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(#155DFC14_1px,transparent_1px)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {specialists.map((s, i) => (
          <motion.button
            key={s.id}
            type="button"
            onClick={() => setSelected(s)}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease }}
            className="group relative overflow-hidden rounded-[28px] bg-white p-6 text-left ring-1 ring-gray-100 shadow-[0_20px_50px_-35px_rgba(21,93,252,0.5)] transition duration-500 hover:-translate-y-1 hover:ring-[#155DFC]/20 hover:shadow-[0_30px_60px_-30px_rgba(21,93,252,0.55)]"
          >
            {/* Bandeau dégradé */}
            <div className="absolute inset-x-0 top-0 h-28 bg-[linear-gradient(135deg,#155DFC_0%,#00BBA7_100%)] opacity-[0.08] transition-opacity duration-500 group-hover:opacity-[0.16]" />
            <span className="pointer-events-none absolute -right-10 -top-10 w-40 h-40 rounded-full border border-[#155DFC]/10 anim-ring" />

            <div className="relative flex items-start justify-between">
              {/* Avatar avec anneau */}
              <div className="relative">
                <span className="absolute -inset-1.5 rounded-full bg-[linear-gradient(135deg,#155DFC_0%,#00BBA7_100%)] opacity-30 blur-md transition-opacity duration-500 group-hover:opacity-60" />
                <div className="relative rounded-full p-1 bg-white ring-1 ring-[#155DFC]/15">
                  <Avatar src={s.image} alt={s.name} className="w-24 h-24 rounded-full" icon={44} />
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F1F6FB] px-3 py-1 text-xs font-semibold text-[#155DFC]">
                <BriefcaseBusiness size={12} /> {s.experience.replace(" d'expérience", "")}
              </span>
            </div>

            <div className="relative mt-6">
              <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400">
                <span className="w-5 h-px bg-[#00BBA7] transition-all duration-500 group-hover:w-8" />
                {s.title}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-gray-950">{s.name}</h3>
              <p className="mt-1 text-gray-500">{s.specialty}</p>
            </div>

            <div className="relative mt-6 flex items-center justify-between gap-3 border-t border-gray-100 pt-5">
              <span className="flex items-center gap-2 text-xs text-gray-500">
                <Clock size={14} className="text-[#00BBA7]" /> {s.schedule}
              </span>
              <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gray-950 pl-4 pr-1 py-1 text-sm font-semibold text-white">
                Profil
                <span className="grid place-items-center w-7 h-7 rounded-full bg-white text-gray-950 transition-transform group-hover:translate-x-0.5">
                  <ArrowRight size={14} />
                </span>
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      {/* FICHE DÉTAILLÉE (même disposition que la page À propos) */}
      {createPortal(
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 z-[80] flex items-center justify-center p-3 sm:p-6 bg-gray-950/50 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              <motion.div
                role="dialog"
                aria-modal="true"
                aria-label={selected.name}
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.97 }}
                transition={{ duration: 0.45, ease }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-[32px] bg-white shadow-2xl grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr]"
              >
                <button
                  onClick={() => setSelected(null)}
                  aria-label="Fermer"
                  className="absolute top-4 right-4 z-10 grid place-items-center w-10 h-10 rounded-full bg-white/90 backdrop-blur text-gray-950 shadow-md hover:rotate-90 transition-transform duration-300"
                >
                  <X size={18} />
                </button>

                {/* Photo / icône */}
                <div className="relative min-h-[320px] md:min-h-full">
                  <Avatar src={selected.image} alt={selected.name} className="absolute inset-0 w-full h-full" icon={120} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#155DFC]/80 via-[#155DFC]/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
                      <span className="w-6 h-px bg-[#00BBA7]" /> Nos spécialistes
                    </p>
                    <h3 className="mt-2 text-2xl sm:text-3xl font-bold leading-tight">{selected.name}</h3>
                  </div>
                </div>

                {/* Détails */}
                <div className="p-6 sm:p-8 lg:p-10">
                  <span className="inline-block rounded-full bg-[linear-gradient(135deg,#155DFC_0%,#00BBA7_100%)] px-3.5 py-1 text-xs font-semibold text-white">
                    {selected.title}
                  </span>
                  <p className="mt-4 text-gray-600 leading-relaxed">{selected.specialty}</p>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-3 rounded-2xl bg-[#F1F6FB] p-4">
                      <span className="grid place-items-center w-10 h-10 shrink-0 rounded-xl bg-white text-[#155DFC] shadow-sm"><BriefcaseBusiness size={18} /></span>
                      <span className="text-sm leading-tight"><b className="block text-gray-950">{selected.experience.replace(" d'expérience", "")}</b><span className="text-gray-500">d'expérience</span></span>
                    </div>
                    <div className="flex items-center gap-3 rounded-2xl bg-[#F1F6FB] p-4">
                      <span className="grid place-items-center w-10 h-10 shrink-0 rounded-xl bg-white text-[#00BBA7] shadow-sm"><Clock size={18} /></span>
                      <span className="text-xs leading-tight text-gray-600">{selected.schedule}</span>
                    </div>
                  </div>

                  <p className="mt-6 text-gray-600 leading-relaxed">{selected.bio}</p>

                  {selected.qualifications?.length > 0 && (
                    <div className="mt-8">
                      <h4 className="flex items-center gap-2 font-semibold text-gray-950">
                        <GraduationCap size={18} className="text-[#155DFC]" /> Qualifications
                      </h4>
                      <ol className="mt-4 space-y-4 border-l-2 border-[#155DFC]/15 pl-5">
                        {selected.qualifications.map((q) => (
                          <li key={q} className="relative text-sm text-gray-600 leading-relaxed">
                            <span className="absolute -left-[27px] top-1 w-3 h-3 rounded-full bg-white ring-[3px] ring-[#00BBA7]" />
                            {q}
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}

                  {selected.languages?.length > 0 && (
                    <div className="mt-6 flex flex-wrap items-center gap-2">
                      <Languages size={16} className="text-[#155DFC]" />
                      {selected.languages.map((l) => (
                        <span key={l} className="rounded-full bg-[#F1F6FB] px-3 py-1 text-xs font-medium text-gray-700">{l}</span>
                      ))}
                    </div>
                  )}

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      to="/rdv"
                      className="group inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#155DFC_0%,#00BBA7_100%)] pl-1.5 pr-5 py-1.5 text-sm font-semibold text-white"
                    >
                      <span className="grid place-items-center w-8 h-8 rounded-full bg-white text-[#155DFC]"><Calendar size={14} /></span>
                      Prendre rendez-vous
                    </Link>
                    <a
                      href={`tel:${selected.phone.replace(/\s/g, "")}`}
                      className="inline-flex items-center gap-2 rounded-full bg-gray-950 pl-1.5 pr-5 py-1.5 text-sm font-semibold text-white"
                    >
                      <span className="grid place-items-center w-8 h-8 rounded-full bg-white text-gray-950"><Phone size={14} /></span>
                      {selected.phone}
                    </a>
                    <a
                      href={`mailto:${selected.email}`}
                      className="inline-flex max-w-full items-center gap-2 rounded-full pl-1.5 pr-5 py-1.5 text-sm font-semibold text-gray-950 ring-1 ring-gray-200 hover:ring-[#155DFC]/40 transition"
                    >
                      <span className="grid place-items-center w-8 h-8 shrink-0 rounded-full bg-[#F1F6FB] text-[#155DFC]"><Mail size={14} /></span>
                      <span className="truncate">{selected.email}</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
};

export default Teams;
