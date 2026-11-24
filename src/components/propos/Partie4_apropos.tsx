import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import { X, Phone, Mail, GraduationCap, BriefcaseBusiness } from "lucide-react";
import OptimizedImage from "../ui/OptimizedImage";

// IMPORTS DES IMAGES DEPUIS src/assets/team/
import { initialAdminTeam, AdminTeamMember } from "../../data/teamData";

const Partie4_apropos: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<AdminTeamMember | null>(null);
  const team = initialAdminTeam;

  // Fermeture avec Échap et blocage du défilement quand la fiche est ouverte
  useEffect(() => {
    if (!selectedMember) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelectedMember(null);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [selectedMember]);

  return (
    <section className="w-full py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Notre Équipe Administrative
        </h2>
        <p className="text-gray-500 text-lg mb-14">
          Des professionnels dévoués pour vous accompagner dans vos démarches
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
          {team.map((member, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setSelectedMember(member)}
              className="group relative h-[420px] overflow-hidden rounded-3xl bg-[#F1F6FB] text-left"
            >
              <OptimizedImage
                src={member.image}
                alt={member.name}
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/0 transition duration-500 group-hover:ring-white/30" />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/75">
                  <span className="w-5 h-px bg-[#00BBA7] transition-all duration-500 group-hover:w-8" />
                  {member.role}
                </p>
                <h3 className="mt-2 text-xl font-semibold">{member.name}</h3>
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500">
                  <div className="overflow-hidden">
                    <p className="pt-2 text-sm text-white/80">{member.specialty}</p>
                    <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-white text-gray-950 pl-4 pr-1 py-1 text-sm font-semibold">
                      Voir le profil
                      <span className="grid place-items-center w-7 h-7 rounded-full bg-gray-950 text-white">→</span>
                    </span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* MODALE DE PROFIL */}
      {createPortal(
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center p-3 sm:p-6 bg-gray-950/50 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={selectedMember.name}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.97 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-[32px] bg-white shadow-2xl grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr]"
            >
              {/* Fermer */}
              <button
                onClick={() => setSelectedMember(null)}
                aria-label="Fermer"
                className="absolute top-4 right-4 z-10 grid place-items-center w-10 h-10 rounded-full bg-white/90 backdrop-blur text-gray-950 shadow-md hover:rotate-90 transition-transform duration-300"
              >
                <X size={18} />
              </button>

              {/* Photo */}
              <div className="relative min-h-[320px] md:min-h-full bg-[#F1F6FB]">
                <OptimizedImage src={selectedMember.image} alt={selectedMember.name} className="absolute inset-0 w-full h-full object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#155DFC]/80 via-[#155DFC]/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
                    <span className="w-6 h-px bg-[#00BBA7]" /> Équipe administrative
                  </p>
                  <h3 className="mt-2 text-2xl sm:text-3xl font-bold leading-tight">{selectedMember.name}</h3>
                </div>
              </div>

              {/* Détails */}
              <div className="p-6 sm:p-8 lg:p-10">
                <span className="inline-block rounded-full bg-[linear-gradient(135deg,#155DFC_0%,#00BBA7_100%)] px-3.5 py-1 text-xs font-semibold text-white">
                  {selectedMember.role}
                </span>
                <p className="mt-4 text-gray-600 leading-relaxed">{selectedMember.specialty}</p>

                {/* Chiffre clé */}
                <div className="mt-6 flex items-center gap-4 rounded-2xl bg-[#F1F6FB] p-4">
                  <span className="grid place-items-center w-12 h-12 rounded-xl bg-white text-[#155DFC] shadow-sm">
                    <BriefcaseBusiness size={20} />
                  </span>
                  <div>
                    <p className="text-2xl font-bold text-gray-950 leading-none">{selectedMember.experience}</p>
                    <p className="mt-1 text-sm text-gray-500">en service</p>
                  </div>
                </div>

                {/* Formation en frise */}
                {selectedMember.education && selectedMember.education.length > 0 && (
                  <div className="mt-8">
                    <h4 className="flex items-center gap-2 font-semibold text-gray-950">
                      <GraduationCap size={18} className="text-[#155DFC]" /> Formation
                    </h4>
                    <ol className="mt-4 space-y-4 border-l-2 border-[#155DFC]/15 pl-5">
                      {selectedMember.education.map((edu, idx) => (
                        <li key={idx} className="relative text-sm text-gray-600 leading-relaxed">
                          <span className="absolute -left-[27px] top-1 w-3 h-3 rounded-full bg-white ring-[3px] ring-[#00BBA7]" />
                          {edu}
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                {/* Contact */}
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={`tel:${selectedMember.phone.replace(/\s/g, "")}`}
                    className="group inline-flex items-center gap-2 rounded-full bg-gray-950 pl-1.5 pr-5 py-1.5 text-sm font-semibold text-white"
                  >
                    <span className="grid place-items-center w-8 h-8 rounded-full bg-white text-gray-950"><Phone size={14} /></span>
                    {selectedMember.phone}
                  </a>
                  <a
                    href={`mailto:${selectedMember.email}`}
                    className="inline-flex items-center gap-2 rounded-full pl-1.5 pr-5 py-1.5 text-sm font-semibold text-gray-950 ring-1 ring-gray-200 hover:ring-[#155DFC]/40 transition max-w-full"
                  >
                    <span className="grid place-items-center w-8 h-8 shrink-0 rounded-full bg-[#F1F6FB] text-[#155DFC]"><Mail size={14} /></span>
                    <span className="truncate">{selectedMember.email}</span>
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

export default Partie4_apropos;