import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight, Siren, HeartPulse, Stethoscope, Scissors, Flower2, Baby, Heart,
  Eye, Droplets, Activity, FlaskConical, ScanLine, Smile,
} from "lucide-react";

// Section « Nos spécialités » : la liste affichée sur l'enseigne de la clinique
const specialites = [
  { icon: Siren, title: "Urgences médico-chirurgicales" },
  { icon: HeartPulse, title: "Réanimation" },
  { icon: Stethoscope, title: "Médecine et spécialités médicales" },
  { icon: Scissors, title: "Chirurgie et spécialités chirurgicales" },
  { icon: Flower2, title: "Gynécologie-obstétrique" },
  { icon: Baby, title: "Pédiatrie - Néonatologie" },
  { icon: Heart, title: "Cardiologie" },
  { icon: Eye, title: "Ophtalmologie" },
  { icon: Droplets, title: "Néphrologie - Dialyse rénale" },
  { icon: Activity, title: "Gastro-entérologie - Fibroscopie" },
  { icon: FlaskConical, title: "Laboratoire d'analyses" },
  { icon: ScanLine, title: "Radiographie - Échographie - ECG - Holter" },
  { icon: Smile, title: "Cabinet dentaire" },
];

const Specialites: React.FC = () => (
  <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#F1F6FB]">
    <div className="max-w-7xl mx-auto">
      <div className="text-center max-w-4xl mx-auto mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Tous vos soins sous un même toit</h2>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-500">
          Des urgences à l'imagerie, une équipe pluridisciplinaire réunie pour simplifier votre parcours.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {specialites.map(({ icon: Icon, title }) => (
          <Link
            key={title}
            to="/services"
            className="group relative overflow-hidden rounded-3xl bg-white p-6 flex flex-col gap-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_24px_40px_-18px_rgba(21,93,252,0.55)]"
          >
            {/* Fond dégradé qui monte au survol */}
            <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#155DFC_0%,#00BBA7_100%)] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            <span className="pointer-events-none absolute -right-10 -bottom-10 w-32 h-32 rounded-full border border-white/25 scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-700" />

            <div className="relative flex items-start justify-between">
              <span className="grid place-items-center w-11 h-11 rounded-2xl bg-[#155DFC]/10 text-[#155DFC] transition-all duration-500 group-hover:bg-white group-hover:text-[#155DFC] group-hover:rotate-[-8deg] group-hover:scale-110">
                <Icon size={20} />
              </span>
              <span className="grid place-items-center w-8 h-8 rounded-full border border-gray-200 text-gray-400 transition-all duration-500 group-hover:bg-gray-950 group-hover:border-gray-950 group-hover:text-white group-hover:rotate-45">
                <ArrowUpRight size={16} />
              </span>
            </div>
            <h3 className="relative font-semibold text-gray-900 leading-snug transition-colors duration-500 group-hover:text-white">{title}</h3>
          </Link>
        ))}

        {/* Tuile d'appel à l'action */}
        <Link
          to="/services"
          className="group relative overflow-hidden sm:col-span-2 lg:col-span-3 rounded-3xl bg-[linear-gradient(135deg,#155DFC_0%,#00BBA7_100%)] p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-white"
        >
          <span className="pointer-events-none absolute -right-16 -bottom-16 w-56 h-56 rounded-full border border-white/20 anim-ring" />
          <span className="pointer-events-none absolute -right-6 -bottom-6 w-36 h-36 rounded-full border border-white/25 anim-ring anim-ring-delay" />
          <span className="pointer-events-none absolute -top-10 -left-10 w-40 h-40 rounded-full bg-white/15 blur-2xl anim-glow" />
          <div className="relative">
            <p className="text-2xl md:text-3xl font-semibold">Découvrez tous nos services</p>
            <p className="mt-1 text-white/80">Équipes, équipements et prises en charge en détail.</p>
            <div className="mt-4 flex flex-wrap gap-2 text-sm">
              {["13 spécialités", "Urgences 24h/24", "Laboratoire sur place"].map((s) => (
                <span key={s} className="rounded-full bg-white/20 px-3 py-1 font-medium">{s}</span>
              ))}
            </div>
          </div>
          <span className="relative self-start md:self-center shrink-0 inline-flex items-center gap-3 rounded-full bg-gray-950 pl-5 pr-1.5 py-1.5 font-semibold">
            Voir les services
            <span className="grid place-items-center w-9 h-9 rounded-full bg-white text-gray-950 transition-transform group-hover:translate-x-0.5">
              <ArrowUpRight size={18} />
            </span>
          </span>
        </Link>
      </div>
    </div>
  </section>
);

export default Specialites;
