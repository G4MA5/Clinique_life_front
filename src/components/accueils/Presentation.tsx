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
  <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Proche de vous, <span className="text-[#155DFC]">proche de la vie.</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Située dans un quartier résidentiel calme et paisible, la Clinique Life est un établissement
            sanitaire à taille humaine, qui offre toutes les commodités et services d'une clinique moderne.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Elle allie hôtellerie de bon standing et soins de qualité, avec un plateau technique adéquat et
            un bloc opératoire associant des professionnels aux compétences avérées.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/a-propos"
              className="group inline-flex items-center gap-3 bg-gray-900 text-white pl-6 pr-1.5 py-1.5 rounded-full font-semibold"
            >
              Découvrir la clinique
              <span className="grid place-items-center w-9 h-9 rounded-full bg-white text-gray-900 transition-transform group-hover:translate-x-0.5">
                <ArrowRight size={18} />
              </span>
            </Link>
          </div>
        </div>

        <div className="relative">
          <img src={Chambre} alt="Clinique Life" loading="lazy" className="w-full aspect-[4/3] object-cover rounded-[32px]" />
          <div className="absolute -bottom-6 left-6 right-6 grid grid-cols-3 gap-2 rounded-3xl bg-white p-3 shadow-[0_20px_50px_-20px_rgba(19,71,116,0.35)]">
            <Link to="/contact" className="flex items-center gap-2 rounded-2xl p-3 hover:bg-[#F1F6FB] transition">
              <Siren size={18} className="text-[#155DFC] shrink-0" />
              <span className="text-sm"><b className="block text-gray-900">Urgences</b><span className="text-gray-500">24h/24 · 7j/7</span></span>
            </Link>
            <a href="tel:+2250701214580" className="flex items-center gap-2 rounded-2xl p-3 hover:bg-[#F1F6FB] transition">
              <Phone size={18} className="text-[#155DFC] shrink-0" />
              <span className="text-sm"><b className="block text-gray-900">Appeler</b><span className="text-gray-500">07 01 21 45 80</span></span>
            </a>
            <Link to="/assurances" className="flex items-center gap-2 rounded-2xl p-3 hover:bg-[#F1F6FB] transition">
              <ShieldCheck size={18} className="text-[#155DFC] shrink-0" />
              <span className="text-sm"><b className="block text-gray-900">Assurances</b><span className="text-gray-500">{initialAssurances.length}+ partenaires</span></span>
            </Link>
          </div>
        </div>
      </div>

      {/* Chiffres clés */}
      <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 rounded-[32px] bg-[#F1F6FB] divide-x divide-y lg:divide-y-0 divide-white">
        {chiffres.map((c) => (
          <div key={c.label} className="p-6 md:p-8 text-center">
            <p className="text-3xl md:text-5xl font-bold text-gray-900">{c.value}</p>
            <p className="mt-2 text-sm md:text-base text-gray-500">{c.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Presentation;
