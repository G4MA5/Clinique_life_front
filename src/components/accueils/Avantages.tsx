import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, ShieldCheck, Clock, Award, HeartPulse, Pill, Stethoscope, Syringe, Activity, Siren,
} from "lucide-react";
import Cube3D from "../ui/Cube3D";
import Photo from "../../assets/enseigne-bleue.png";

// Section « Pourquoi choisir la Clinique Life » : fond bleu pâle animé, photo et éléments 3D flottants
const avantages = [
  { title: "Expertise & Sécurité", text: "Professionnels aux compétences avérées et démarche qualité stricte", icon: ShieldCheck },
  { title: "Disponibilité 24/7", text: "Service d’urgence disponible jour et nuit pour votre tranquillité", icon: Clock },
  { title: "Équipements modernes", text: "Technologies de pointe pour des diagnostics précis et fiables", icon: Award },
  { title: "Soins personnalisés", text: "Approche humaine et écoute attentive de vos besoins de santé", icon: HeartPulse },
];

// Petites icônes flottantes en arrière-plan
const flottantes = [
  { icon: Pill, cls: "left-[4%] top-[12%]", d: "0s" },
  { icon: Syringe, cls: "left-[46%] top-[6%]", d: "1.2s" },
  { icon: Activity, cls: "right-[5%] top-[10%]", d: "2.4s" },
  { icon: Stethoscope, cls: "left-[8%] bottom-[10%]", d: "0.6s" },
  { icon: HeartPulse, cls: "right-[42%] bottom-[6%]", d: "1.8s" },
];

const ease = [0.22, 1, 0.36, 1] as const;

const Avantages: React.FC = () => (
  <section className="relative w-full overflow-hidden bg-[#F7FAFE] py-24 px-6 md:px-12">
    {/* ===== Fond dynamique ===== */}
    <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(#155DFC14_1px,transparent_1px)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
    <div className="pointer-events-none absolute -top-40 -left-32 w-[520px] h-[520px] rounded-full bg-[#155DFC]/[0.07] blur-[110px] blob-move" />
    <div className="pointer-events-none absolute -bottom-40 -right-32 w-[520px] h-[520px] rounded-full bg-[#00BBA7]/[0.08] blur-[110px] blob-move" style={{ animationDelay: "-6s" }} />
    {flottantes.map(({ icon: Icon, cls, d }) => (
      <span key={cls} className={`pointer-events-none absolute ${cls} hidden md:grid place-items-center w-11 h-11 rounded-2xl bg-white/70 text-[#155DFC]/70 shadow-sm icon-drift`} style={{ animationDelay: d }}>
        <Icon size={20} />
      </span>
    ))}

    <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">
      {/* ===== Texte + atouts ===== */}
      <div>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.4, ease }}
          className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
        >
          Pourquoi choisir la <span className="text-cyan-500">CLINIQUE LIFE</span> ?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.4, delay: 0.05, ease }}
          className="mt-5 text-lg text-gray-600"
        >
          Une prise en charge humaine, moderne et fiable pour votre santé.
        </motion.p>

        <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-3 sm:gap-4">
          {avantages.map(({ title, text, icon: Icon }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: i * 0.06, ease }}
              className="group rounded-2xl sm:rounded-3xl bg-white/80 backdrop-blur-md p-3.5 sm:p-5 ring-1 ring-white shadow-[0_15px_40px_-25px_rgba(21,93,252,0.5)] transition-colors duration-500 hover:bg-white flex flex-col justify-between"
            >
              <div>
                <span className="grid place-items-center w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-[linear-gradient(135deg,#155DFC_0%,#00BBA7_100%)] text-white shadow-md shadow-[#155DFC]/25 transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </span>
                <h3 className="mt-2.5 sm:mt-4 font-semibold text-xs sm:text-base text-gray-950 leading-snug">{title}</h3>
              </div>
              <p className="hidden sm:block mt-1 text-sm text-gray-500 leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>

        <Link
          to="/services"
          className="group mt-10 inline-flex items-center gap-3 bg-gray-950 text-white pl-7 pr-1.5 py-1.5 rounded-full font-semibold"
        >
          Voir tous les services
          <span className="grid place-items-center w-10 h-10 rounded-full bg-white text-gray-950 transition-transform group-hover:translate-x-0.5">
            <ArrowRight size={18} />
          </span>
        </Link>
      </div>

      {/* ===== Photo + éléments 3D ===== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.4, ease }}
        className="relative mx-auto w-full max-w-xl lg:mr-0 pb-12 sm:pb-16 pl-6 sm:pl-16"
      >
        <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-[0_40px_80px_-30px_rgba(21,93,252,0.5)] ring-4 sm:ring-8 ring-white">
          <img src={Photo} alt="Enseigne bleue de la Clinique Life" loading="lazy" className="w-full aspect-[4/5] sm:aspect-[5/6] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#155DFC]/10 via-transparent to-transparent" />
        </div>

        {/* Badge flottant */}
        <div className="absolute right-2 sm:right-4 top-3 sm:top-6 flex items-center gap-2 sm:gap-3 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur px-2.5 sm:px-4 py-2 sm:py-3 shadow-xl icon-drift" style={{ animationDelay: "-2s" }}>
          <span className="grid place-items-center w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-gray-950 text-white shrink-0"><Siren className="w-3.5 h-3.5 sm:w-4 sm:h-4" /></span>
          <span className="text-xs sm:text-sm leading-tight"><b className="block text-gray-950 text-[11px] sm:text-sm">Urgences 24h/24</b><span className="text-[10px] sm:text-xs text-gray-500">7 jours sur 7</span></span>
        </div>

        {/* Croix néon flottante */}
        <div className="absolute left-1 sm:left-4 bottom-20 sm:bottom-24 neon-cross-float scale-[0.55] sm:scale-100 origin-left">
          <div className="relative w-20 h-20">
            <span className="absolute left-1/2 top-0 -translate-x-1/2 w-7 h-20 rounded-lg border-[3px] border-cyan-300 bg-cyan-300/15 shadow-[0_0_25px_rgba(34,211,238,0.9),inset_0_0_14px_rgba(34,211,238,0.6)]" />
            <span className="absolute top-1/2 left-0 -translate-y-1/2 w-20 h-7 rounded-lg border-[3px] border-cyan-300 bg-cyan-300/15 shadow-[0_0_25px_rgba(34,211,238,0.9),inset_0_0_14px_rgba(34,211,238,0.6)]" />
          </div>
        </div>

        {/* Quelques cubes 3D dispersés, tailles variées (très discrets sur mobile) */}
        <Cube3D front={HeartPulse} side={Activity} size={78} delay="-1s" className="absolute left-1 sm:left-0 bottom-1 sm:bottom-0 scale-[0.38] sm:scale-100 origin-bottom-left" />
        <Cube3D front={Pill} side={Syringe} size={54} delay="-3s" className="absolute top-1 left-2 sm:-top-5 sm:left-10 scale-[0.42] sm:scale-100 origin-top-left" />
        <Cube3D front={Stethoscope} side={HeartPulse} size={64} delay="-2s" className="absolute right-0 sm:-right-8 top-1/2 scale-[0.4] sm:scale-100 origin-right" />
      </motion.div>
    </div>
  </section>
);

export default Avantages;
