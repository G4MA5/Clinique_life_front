import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Award, GraduationCap, Users, ArrowRight, Brain, HeartPulse, Baby, Stethoscope } from "lucide-react";
import Cerveau from "../../assets/cerveau.webp";
import { initialSpecialists } from "../../data/teamData";

// Bannière de la page « Nos spécialistes » : texte à gauche, illustration du cerveau à droite
const ease = [0.22, 1, 0.36, 1] as const;

const atouts = [
  { icon: Award, label: "Experts certifiés" },
  { icon: GraduationCap, label: "Formation continue" },
  { icon: Users, label: "Approche humaine" },
];

// Étiquettes flottantes autour de l'illustration
const etiquettes = [
  { icon: Brain, label: "Neurologie", cls: "left-0 top-[18%]", d: "0s" },
  { icon: HeartPulse, label: "Cardiologie", cls: "right-0 top-[8%]", d: "-2s" },
  { icon: Baby, label: "Pédiatrie", cls: "right-2 top-[52%]", d: "-4s" },
];

// Points « synapses » qui pulsent sur le cerveau (en % de l'image)
const synapses = [
  [38, 22], [55, 15], [70, 28], [30, 38], [62, 40], [48, 30],
];

const apparition = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay, ease },
});

const Titre: React.FC = () => {
  const allerEquipe = () =>
    document.getElementById("equipe")?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section className="relative w-full overflow-hidden bg-[#F7FAFE] pt-28 md:pt-32 pb-10 px-4 md:px-8">
      {/* Fond */}
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(#155DFC14_1px,transparent_1px)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_at_right,black_25%,transparent_70%)]" />
      <div className="pointer-events-none absolute -top-40 right-0 w-[700px] h-[700px] rounded-full bg-[#155DFC]/[0.08] blur-[120px] blob-move" />
      <div className="pointer-events-none absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full bg-[#00BBA7]/[0.08] blur-[110px] blob-move" style={{ animationDelay: "-8s" }} />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* ===== Texte ===== */}
        <div>
          <motion.p {...apparition(0)} className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#155DFC]">
            <span className="w-8 h-px bg-[#00BBA7]" /> Nos spécialistes
          </motion.p>

          <motion.h1 {...apparition(0.1)} className="mt-6 text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.02] text-gray-950">
            Une équipe médicale{" "}
            <span className="bg-[linear-gradient(135deg,#155DFC_0%,#00BBA7_100%)] bg-clip-text text-transparent">
              d'excellence
            </span>
          </motion.h1>

          <motion.p {...apparition(0.2)} className="mt-6 max-w-lg text-lg text-gray-500 leading-relaxed">
            Nos médecins spécialistes sont hautement qualifiés et dévoués à votre santé. Découvrez leurs parcours et
            expertises.
          </motion.p>

          <motion.div {...apparition(0.3)} className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={allerEquipe}
              className="group inline-flex items-center gap-3 bg-gray-950 text-white pl-6 pr-1.5 py-1.5 rounded-full font-semibold"
            >
              Découvrir l'équipe
              <span className="grid place-items-center w-9 h-9 rounded-full bg-white text-gray-950 transition-transform group-hover:translate-y-0.5">
                <ArrowRight size={18} className="rotate-90" />
              </span>
            </button>
            <Link
              to="/rdv"
              className="inline-flex items-center px-6 py-3 rounded-full font-semibold text-gray-950 ring-1 ring-gray-300 hover:ring-[#155DFC]/50 hover:bg-white transition"
            >
              Prendre rendez-vous
            </Link>
          </motion.div>

          {/* Atouts */}
          <motion.ul {...apparition(0.4)} className="mt-12 grid grid-cols-3 gap-3 max-w-lg">
            {atouts.map(({ icon: Icon, label }) => (
              <li key={label} className="rounded-2xl bg-white/80 backdrop-blur p-4 ring-1 ring-white shadow-[0_15px_35px_-25px_rgba(21,93,252,0.5)]">
                <span className="grid place-items-center w-9 h-9 rounded-xl bg-[linear-gradient(135deg,#155DFC_0%,#00BBA7_100%)] text-white">
                  <Icon size={16} />
                </span>
                <p className="mt-3 text-sm font-semibold text-gray-900 leading-tight">{label}</p>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* ===== Illustration ===== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease }}
          className="relative mx-auto w-full max-w-[560px] aspect-square"
        >
          {/* Cercles décoratifs */}
          <span className="absolute inset-[6%] rounded-full border border-[#155DFC]/15 anim-ring" />
          <span className="absolute inset-[16%] rounded-full border border-dashed border-[#00BBA7]/30" />

          <div className="absolute inset-0 icon-drift" style={{ animationDuration: "9s" }}>
            <img
              src={Cerveau}
              alt="Illustration du cerveau et du système nerveux"
              className="w-full h-full object-cover object-[50%_18%] mix-blend-multiply [mask-image:radial-gradient(circle_at_50%_45%,black_55%,transparent_72%)]"
            />
            {/* Synapses */}
            {synapses.map(([x, y], i) => (
              <span key={i} className="absolute" style={{ left: `${x}%`, top: `${y}%` }}>
                <span className="absolute -inset-2 rounded-full bg-[#00BBA7]/40 animate-ping" style={{ animationDelay: `${i * 0.4}s`, animationDuration: "2.4s" }} />
                <span className="relative block w-2.5 h-2.5 rounded-full bg-[#00BBA7] shadow-[0_0_12px_#00BBA7]" />
              </span>
            ))}
          </div>

          {/* Étiquettes */}
          {etiquettes.map(({ icon: Icon, label, cls, d }) => (
            <span
              key={label}
              className={`absolute ${cls} hidden sm:inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur pl-1.5 pr-4 py-1.5 text-sm font-semibold text-gray-900 shadow-lg icon-drift`}
              style={{ animationDelay: d }}
            >
              <span className="grid place-items-center w-8 h-8 rounded-full bg-[#155DFC]/10 text-[#155DFC]"><Icon size={15} /></span>
              {label}
            </span>
          ))}

          {/* Carte chiffre */}
          <div className="absolute left-4 bottom-[8%] flex items-center gap-3 rounded-2xl bg-gray-950 text-white p-3 pr-5 shadow-2xl">
            <span className="grid place-items-center w-10 h-10 rounded-xl bg-[linear-gradient(135deg,#155DFC_0%,#00BBA7_100%)]">
              <Stethoscope size={18} />
            </span>
            <span className="leading-tight">
              <b className="block text-xl">{initialSpecialists.length}</b>
              <span className="text-xs text-white/70">spécialistes à votre écoute</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Titre;
