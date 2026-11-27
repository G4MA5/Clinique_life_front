import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Play, ArrowRight, Siren, Baby, ScanLine, FlaskConical, Users } from "lucide-react";
import consultationVideo from "../../assets/Docteur.mp4";
import Directeur from "../../assets/Directeur.png";

// En-tête de la page À propos : carte héro (texte à gauche, vidéo à droite) + raccourcis services
const ease = [0.22, 1, 0.36, 1] as const;

const raccourcis = [
  { icon: Siren, label: "Urgences 24/7" },
  { icon: Baby, label: "Maternité" },
  { icon: ScanLine, label: "Radiologie" },
  { icon: FlaskConical, label: "Laboratoire" },
];

const Partie1_apropos: React.FC = () => {
  const video = useRef<HTMLVideoElement>(null);
  const [lecture, setLecture] = useState(false);

  const lancer = () => {
    setLecture(true);
    video.current?.play();
  };

  return (
    <section className="w-full bg-white px-4 md:px-8 pt-6 pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Carte héro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease }}
          className="relative overflow-hidden rounded-[36px] bg-[linear-gradient(135deg,#155DFC_0%,#3B82F6_45%,#00BBA7_100%)] p-6 sm:p-10 lg:p-14 text-white"
        >
          {/* Décor */}
          <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/15 blur-3xl" />
          <div className="pointer-events-none absolute right-[22%] top-10 w-72 h-72 rounded-full border border-white/20 anim-ring" />
          <div className="pointer-events-none absolute right-[18%] top-24 w-44 h-44 rounded-full border border-white/25 anim-ring anim-ring-delay" />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Texte */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-3 py-1.5 text-xs font-medium ring-1 ring-white/25">
                <span className="w-1.5 h-1.5 rounded-full bg-white" /> Proches de vous, proches de la vie
              </span>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
                Bienvenue à la Clinique Life
              </h1>
              <p className="mt-6 text-white/85 leading-relaxed max-w-lg">
                Un établissement sanitaire à taille humaine, alliant hôtellerie de bon standing et soins de qualité,
                au service des populations d'Abidjan et de ses environs.
              </p>
              <Link
                to="/rdv"
                className="group mt-8 inline-flex items-center gap-3 bg-white text-gray-950 pl-6 pr-1.5 py-1.5 rounded-full font-semibold"
              >
                Prendre rendez-vous
                <span className="grid place-items-center w-9 h-9 rounded-full bg-gray-950 text-white transition-transform group-hover:translate-x-0.5">
                  <ArrowRight size={18} />
                </span>
              </Link>

              {/* Mini-carte directeur */}
              <Link
                to="/directeur-biographie"
                className="mt-10 flex max-w-sm items-center gap-4 rounded-2xl bg-white p-3 pr-4 text-gray-950 shadow-xl transition hover:-translate-y-0.5"
              >
                <img src={Directeur} alt="Dr. Gabriel DONGUI" className="w-16 h-16 rounded-xl object-cover object-top bg-[#F1F6FB]" />
                <span className="flex-1">
                  <span className="inline-block rounded-full bg-[#00BBA7]/15 px-2 py-0.5 text-[10px] font-semibold text-[#00968a]">Direction</span>
                  <span className="block mt-1 font-semibold text-[#155DFC]">Dr. Gabriel DONGUI</span>
                  <span className="block text-xs text-gray-500">Directeur Général · Voir son parcours</span>
                </span>
                <span className="grid place-items-center w-8 h-8 rounded-full ring-1 ring-gray-200">
                  <ArrowRight size={14} />
                </span>
              </Link>
            </div>

            {/* Vidéo */}
            <div className="relative">
              <div className="group relative overflow-hidden rounded-[28px] ring-4 ring-white/30 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.5)] aspect-[4/3] bg-gray-950">
                <video
                  ref={video}
                  src={`${consultationVideo}#t=1`}
                  className="w-full h-full object-cover"
                  controls={lecture}
                  playsInline
                  preload="metadata"
                  onEnded={() => setLecture(false)}
                />
                {!lecture && (
                  <button
                    type="button"
                    onClick={lancer}
                    aria-label="Lire la vidéo"
                    className="absolute inset-0 grid place-items-center bg-gradient-to-t from-black/50 via-transparent to-transparent"
                  >
                    <span className="relative grid place-items-center">
                      <span className="absolute w-20 h-20 rounded-full bg-white/30 animate-ping" />
                      <span className="relative grid place-items-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-md ring-1 ring-white/50 transition-transform duration-500 group-hover:scale-110">
                        <span className="grid place-items-center w-14 h-14 rounded-full bg-white text-gray-950">
                          <Play size={22} className="ml-1" fill="currentColor" />
                        </span>
                      </span>
                    </span>
                  </button>
                )}
              </div>

              {/* Carte flottante chiffres (masquée sur mobile) */}
              <div className="hidden sm:flex absolute -left-4 sm:-left-8 bottom-8 items-center gap-3 rounded-2xl bg-white/95 backdrop-blur p-3 pr-5 text-gray-950 shadow-xl icon-drift">
                <span className="grid place-items-center w-10 h-10 rounded-full bg-[linear-gradient(135deg,#155DFC_0%,#00BBA7_100%)] text-white">
                  <Users size={18} />
                </span>
                <span className="text-sm leading-tight">
                  <b className="block">25 000+</b>
                  <span className="text-gray-500">patients traités</span>
                </span>
              </div>

              {/* Pastille vidéo */}
              <span className="absolute right-4 top-4 rounded-full bg-white/20 backdrop-blur-md px-3 py-1.5 text-xs font-medium ring-1 ring-white/30">
                En vidéo · 1 min 24
              </span>
            </div>
          </div>
        </motion.div>

        {/* Raccourcis services */}
        <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {raccourcis.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 + i * 0.1, ease }}
            >
              <Link
                to="/services"
                className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 transition hover:border-[#155DFC]/30 hover:shadow-[0_15px_30px_-20px_rgba(21,93,252,0.5)]"
              >
                <span className="grid place-items-center w-12 h-12 rounded-xl bg-[#155DFC]/10 text-[#155DFC] transition-colors group-hover:bg-[linear-gradient(135deg,#155DFC_0%,#00BBA7_100%)] group-hover:text-white">
                  <Icon size={22} />
                </span>
                <span className="font-semibold text-gray-900">{label}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partie1_apropos;
