import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Echographe from "../../assets/plateau/echographe.jpg";
import RadioPoste from "../../assets/plateau/radio-poste.jpg";
import RadioPro from "../../assets/plateau/radio-pro.jpg";
import Negatoscope from "../../assets/plateau/negatoscope.jpg";
import Chambre from "../../assets/plateau/chambre.jpg";
import NeonatSalle from "../../assets/plateau/neonat-salle.jpg";
import NeonatEntree from "../../assets/plateau/neonat-entree.jpg";

// Section « Plateau technique » : bento de 7 photos de la clinique
type Tuile = { tag: string; title: string; desc: string; image: string; span: string; to: string };

const tuiles: Tuile[] = [
  { tag: "Imagerie", title: "Salle d'échographie", desc: "Échographies réalisées sur place, dans une salle dédiée.", image: Echographe, span: "md:col-span-2 md:row-span-2", to: "/services" },
  { tag: "Radiologie", title: "Poste de radiologie", desc: "Radiographies numériques pour un diagnostic rapide.", image: RadioPoste, span: "", to: "/services/radiologie" },
  { tag: "Radiologie", title: "Manipulatrice en radiologie", desc: "Un personnel qualifié pour réaliser vos examens.", image: RadioPro, span: "", to: "/services/radiologie" },
  { tag: "Radiologie", title: "Lecture des clichés", desc: "Des clichés analysés avec précision.", image: Negatoscope, span: "", to: "/services/radiologie" },
  { tag: "Hospitalisation", title: "Chambres hospitalières", desc: "Des chambres spacieuses et bien aérées.", image: Chambre, span: "", to: "/services" },
  { tag: "Néonatologie", title: "Salle néonatale", desc: "Un espace lumineux pour les soins des nouveau-nés.", image: NeonatSalle, span: "md:col-span-2", to: "/services" },
  { tag: "Néonatologie", title: "Entrée du service de néonatologie", desc: "Un service dédié aux tout-petits.", image: NeonatEntree, span: "", to: "/services" },
];

const PlateauTechnique: React.FC = () => (
  <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="text-center max-w-4xl mx-auto mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Des équipements au service du soin</h2>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-500">
          Des installations modernes pour des diagnostics précis et une prise en charge sécurisée.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[240px] md:auto-rows-[260px] gap-4">
        {tuiles.map((t) => (
          <Link key={t.title} to={t.to} className={`group relative overflow-hidden rounded-3xl ${t.span}`}>
            <img
              src={t.image}
              alt={t.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
            <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/0 transition duration-500 group-hover:ring-white/30" />
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 text-white">
              <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">
                <span className="w-5 h-px bg-[#00BBA7] transition-all duration-500 group-hover:w-8" />
                {t.tag}
              </p>
              <h3 className="mt-2 font-semibold text-lg md:text-xl leading-snug">{t.title}</h3>
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500">
                <p className="overflow-hidden text-sm text-white/80">
                  <span className="block pt-1.5">{t.desc}</span>
                </p>
              </div>
            </div>
          </Link>
        ))}

        {/* Tuile d'appel à l'action */}
        <Link
          to="/services"
          className="group relative overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#155DFC_0%,#00BBA7_100%)] p-6 flex flex-col text-white"
        >
          <span className="pointer-events-none absolute -right-16 -bottom-16 w-56 h-56 rounded-full border border-white/20 anim-ring" />
          <span className="pointer-events-none absolute -right-6 -bottom-6 w-36 h-36 rounded-full border border-white/25 anim-ring anim-ring-delay" />
          <span className="pointer-events-none absolute -top-10 -left-10 w-40 h-40 rounded-full bg-white/15 blur-2xl anim-glow" />
          <span className="relative inline-flex self-start items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">
            <Sparkles size={12} /> 13 spécialités
          </span>
          <p className="relative mt-4 text-2xl font-semibold leading-tight">Tous nos services, sous un même toit</p>
          <div className="relative mt-3 flex flex-wrap gap-1.5 text-xs">
            {["Urgences", "Laboratoire", "Bloc", "Maternité"].map((s) => (
              <span key={s} className="rounded-full border border-white/30 px-2.5 py-0.5">{s}</span>
            ))}
          </div>
          <span className="relative mt-auto self-start inline-flex items-center gap-2 rounded-full bg-gray-950 pl-4 pr-1 py-1 text-sm font-semibold">
            Voir les services
            <span className="grid place-items-center w-7 h-7 rounded-full bg-white text-gray-950 transition-transform group-hover:translate-x-0.5">
              <ArrowUpRight size={14} />
            </span>
          </span>
        </Link>
      </div>
    </div>
  </section>
);

export default PlateauTechnique;
