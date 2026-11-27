import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Users, Clock } from "lucide-react";
import Echographe from "../../assets/plateau/echographe.jpg";
import RadioPro from "../../assets/plateau/radio-pro.jpg";
import NeonatPano from "../../assets/plateau/neonat-pano.jpg";
import Chambre from "../../assets/plateau/chambre.jpg";
import { poles } from "../../data/servicesCatalogue";

// Bannière de la page Services : texte à gauche, mosaïque de vraies photos à droite
const ease = [0.22, 1, 0.36, 1] as const;
const nbServices = poles.reduce((n, p) => n + p.services.length, 0);

const atouts = [
  { icon: ShieldCheck, label: "Équipements modernes" },
  { icon: Users, label: "Personnel qualifié" },
  { icon: Clock, label: "Service 24/7" },
];

const apparition = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay, ease },
});

const Partie1_service: React.FC = () => (
  <section className="relative w-full overflow-hidden bg-[#F7FAFE] px-4 md:px-8 pt-8 pb-16">
    <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(#155DFC14_1px,transparent_1px)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_at_left,black_25%,transparent_70%)]" />
    <div className="pointer-events-none absolute -top-40 -left-32 w-[600px] h-[600px] rounded-full bg-[#155DFC]/[0.08] blur-[110px] blob-move" />

    <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Texte */}
      <div>
        <motion.p {...apparition(0)} className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#155DFC]">
          <span className="w-8 h-px bg-[#00BBA7]" /> Nos services médicaux
        </motion.p>
        <motion.h1 {...apparition(0.1)} className="mt-6 text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.02] text-gray-950">
          Une gamme complète de{" "}
          <span className="bg-[linear-gradient(135deg,#155DFC_0%,#00BBA7_100%)] bg-clip-text text-transparent">services de santé</span>
        </motion.h1>
        <motion.p {...apparition(0.2)} className="mt-6 max-w-lg text-lg text-gray-500 leading-relaxed">
          De la consultation générale aux interventions chirurgicales, découvrez tous nos services médicaux de qualité
          disponibles 24h/24 et 7j/7.
        </motion.p>

        <motion.div {...apparition(0.3)} className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => document.getElementById("catalogue")?.scrollIntoView({ behavior: "smooth" })}
            className="group inline-flex items-center gap-3 bg-gray-950 text-white pl-6 pr-1.5 py-1.5 rounded-full font-semibold"
          >
            Explorer les services
            <span className="grid place-items-center w-9 h-9 rounded-full bg-white text-gray-950 transition-transform group-hover:translate-y-0.5">
              <ArrowRight size={18} className="rotate-90" />
            </span>
          </button>
          <Link to="/rdv" className="inline-flex items-center px-6 py-3 rounded-full font-semibold text-gray-950 ring-1 ring-gray-300 hover:bg-white hover:ring-[#155DFC]/50 transition">
            Prendre rendez-vous
          </Link>
        </motion.div>

        <motion.ul {...apparition(0.4)} className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
          {atouts.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              <span className="grid place-items-center w-8 h-8 rounded-full bg-white text-[#155DFC] shadow-sm"><Icon size={15} /></span>
              {label}
            </li>
          ))}
        </motion.ul>
      </div>

      {/* Mosaïque de photos */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease }}
        className="relative grid grid-cols-2 grid-rows-[180px_140px_180px] sm:grid-rows-[220px_160px_220px] gap-3"
      >
        <img src={Echographe} alt="Salle d'échographie" className="row-span-2 w-full h-full object-cover rounded-[28px]" />
        <img src={RadioPro} alt="Poste de radiologie" className="w-full h-full object-cover rounded-[28px]" />
        <img src={Chambre} alt="Chambre hospitalière" className="row-span-2 w-full h-full object-cover rounded-[28px]" />
        <img src={NeonatPano} alt="Salle de néonatologie" className="w-full h-full object-cover rounded-[28px]" />

        {/* Carte chiffre */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3 rounded-2xl bg-white/95 backdrop-blur p-3 pr-5 shadow-2xl ring-1 ring-white">
          <span className="grid place-items-center w-12 h-12 rounded-xl bg-[linear-gradient(135deg,#155DFC_0%,#00BBA7_100%)] text-white text-lg font-bold">
            {nbServices}
          </span>
          <span className="leading-tight text-sm">
            <b className="block text-gray-950">services</b>
            <span className="text-gray-500">répartis en {poles.length} pôles</span>
          </span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Partie1_service;
