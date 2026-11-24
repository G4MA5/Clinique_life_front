import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { initialAdminTeam } from "../../data/teamData";

// Section « Nos praticiens » : aperçu de l'équipe (données de teamData)
const membres = initialAdminTeam.filter((m) => [4, 5, 6].includes(m.id));

const ApercuEquipe: React.FC = () => (
  <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#F1F6FB]">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
      <div className="flex flex-col justify-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Des spécialistes à vos côtés
        </h2>
        <p className="mt-6 text-lg text-gray-500">
          Une équipe médicale hautement qualifiée, attentive à chaque patient.
        </p>
        <Link
          to="/Specialiste"
          className="group mt-8 self-start inline-flex items-center gap-3 bg-gray-950 text-white pl-6 pr-1.5 py-1.5 rounded-full font-semibold"
        >
          Voir tous nos spécialistes
          <span className="grid place-items-center w-9 h-9 rounded-full bg-white text-gray-950 transition-transform group-hover:translate-x-0.5">
            <ArrowRight size={18} />
          </span>
        </Link>
      </div>

      <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {membres.map((m) => (
          <article key={m.id} className="rounded-3xl bg-white p-2 flex flex-col">
            <div className="rounded-[20px] overflow-hidden aspect-[3/4] bg-gradient-to-b from-[#155DFC]/10 to-[#F1F6FB]">
              <img src={m.image} alt={m.name} loading="lazy" className="w-full h-full object-cover object-top" />
            </div>
            <div className="p-4">
              <span className="inline-block rounded-full bg-[#155DFC]/10 px-3 py-1 text-xs font-semibold text-[#155DFC]">
                {m.role}
              </span>
              <h3 className="mt-3 font-semibold text-gray-900">{m.name}</h3>
              <p className="text-sm text-gray-500">{m.experience} d'expérience</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ApercuEquipe;
