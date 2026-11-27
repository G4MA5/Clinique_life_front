import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Siren, Phone, ShieldCheck } from "lucide-react";
import { initialAssurances } from "../../data/assurancesData";
import Chambre from "../../assets/Acceuil0.webp";

// Section « Présentation » : textes et chiffres repris de la page À propos
const chiffres = [
  { value: "25 000+", label: "Patients traités" },
  { value: "50 000+", label: "Consultations" },
  { value: "15+", label: "Années d'expérience" },
  { value: "~30", label: "Lits et places" },
];

const Presentation: React.FC = () => (
  <section className="py-12 sm:py-20 px-4 md:px-8 lg:px-16 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Proche de vous, <span className="text-[#155DFC]">proche de la vie.</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 leading-relaxed">
            Située dans un quartier résidentiel calme et paisible, la Clinique Life est un établissement
            sanitaire à taille humaine, qui offre toutes les commodités et services d'une clinique moderne.
          </p>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
            Elle allie hôtellerie de bon standing et soins de qualité, avec un plateau technique adéquat et
            un bloc opératoire associant des professionnels aux compétences avérées.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-wrap gap-3">
            <Link
              to="/a-propos"
              className="group inline-flex items-center gap-3 bg-gray-900 text-white pl-6 pr-1.5 py-1.5 rounded-full font-semibold text-sm sm:text-base"
            >
              Découvrir la clinique
              <span className="grid place-items-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white text-gray-900 transition-transform group-hover:translate-x-0.5">
                <ArrowRight size={18} />
              </span>
            </Link>
          </div>
        </div>

        <div className="relative mb-8 sm:mb-0">
          <img src={Chambre} alt="Clinique Life" loading="lazy" className="w-full aspect-[4/3] object-cover rounded-2xl sm:rounded-[32px] shadow-md" />
          <div className="absolute -bottom-6 left-2 right-2 sm:left-6 sm:right-6 grid grid-cols-3 gap-1 sm:gap-2 rounded-2xl sm:rounded-3xl bg-white/95 sm:bg-white backdrop-blur-md p-1.5 sm:p-3 shadow-[0_20px_50px_-20px_rgba(19,71,116,0.35)] ring-1 ring-black/5 divide-x divide-gray-100 sm:divide-x-0">
            <Link to="/contact" className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-1 sm:gap-2.5 rounded-xl sm:rounded-2xl p-1.5 sm:p-3 hover:bg-[#F1F6FB] transition min-w-0">
              <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-blue-50 sm:bg-transparent flex items-center justify-center text-[#155DFC] shrink-0">
                <Siren size={15} className="sm:w-[18px] sm:h-[18px]" />
              </div>
              <div className="min-w-0 w-full">
                <b className="block text-gray-900 text-[11px] sm:text-sm font-bold truncate">Urgences</b>
                <span className="block text-[10px] sm:text-xs text-gray-500 truncate">24h/24 · 7j/7</span>
              </div>
            </Link>
            <a href="tel:+2250701214580" className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-1 sm:gap-2.5 rounded-xl sm:rounded-2xl p-1.5 sm:p-3 hover:bg-[#F1F6FB] transition min-w-0 pl-1.5 sm:pl-3">
              <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-blue-50 sm:bg-transparent flex items-center justify-center text-[#155DFC] shrink-0">
                <Phone size={15} className="sm:w-[18px] sm:h-[18px]" />
              </div>
              <div className="min-w-0 w-full">
                <b className="block text-gray-900 text-[11px] sm:text-sm font-bold truncate">Appeler</b>
                <span className="block text-[10px] sm:text-xs text-gray-500 font-medium sm:font-normal truncate">07 01 21 45 80</span>
              </div>
            </a>
            <Link to="/assurances" className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-1 sm:gap-2.5 rounded-xl sm:rounded-2xl p-1.5 sm:p-3 hover:bg-[#F1F6FB] transition min-w-0 pl-1.5 sm:pl-3">
              <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-blue-50 sm:bg-transparent flex items-center justify-center text-[#155DFC] shrink-0">
                <ShieldCheck size={15} className="sm:w-[18px] sm:h-[18px]" />
              </div>
              <div className="min-w-0 w-full">
                <b className="block text-gray-900 text-[11px] sm:text-sm font-bold truncate">Assurances</b>
                <span className="block text-[10px] sm:text-xs text-gray-500 truncate">{initialAssurances.length}+ partenaires</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Chiffres clés */}
      <div className="mt-14 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 rounded-2xl sm:rounded-[32px] bg-[#F1F6FB] divide-x divide-y lg:divide-y-0 divide-white">
        {chiffres.map((c) => (
          <div key={c.label} className="p-4 sm:p-6 md:p-8 text-center">
            <p className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900">{c.value}</p>
            <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base text-gray-500">{c.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Presentation;
