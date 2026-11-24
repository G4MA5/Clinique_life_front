import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Stethoscope } from "lucide-react";

// Section « Notre équipe dédiée » : grille bento de photos
import MedecinImg from "../../assets/General.jpg";
import ProfessionelImg from "../../assets/Professionel.jpg";
import AnalyseImg from "../../assets/Analyse.jpg";
import SoinsImg from "../../assets/Soins.jpg";
import EnfantImg from "../../assets/enfant.jpg";
import AccueilImg from "../../assets/Accueil.jpg";

type Tile = { title: string; text: string; image: string; span: string; pos?: string };

const tiles: Tile[] = [
  { title: "Médecine générale", text: "Des médecins à votre écoute pour un diagnostic précis.", image: MedecinImg, span: "md:col-span-2 md:row-span-2" },
  { title: "+15 professionnels", text: "Médecins, infirmiers et techniciens qualifiés.", image: ProfessionelImg, span: "md:col-span-2", pos: "object-[center_30%]" },
  { title: "Analyses médicales", text: "Laboratoire sur place.", image: AnalyseImg, span: "", pos: "object-[center_35%]" },
  { title: "Soins infirmiers", text: "Un suivi attentif.", image: SoinsImg, span: "", pos: "object-[center_30%]" },
  { title: "Santé infantile", text: "Pédiatrie et néonatologie.", image: EnfantImg, span: "", pos: "object-[center_30%]" },
  { title: "Service 24/7", text: "Un accueil ouvert jour et nuit, toute l'année.", image: AccueilImg, span: "md:col-span-2", pos: "object-[center_30%]" },
];

const Equipements: React.FC = () => (
  <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
    <div className="max-w-7xl mx-auto">
      {/* En-tête */}
      <div className="text-center max-w-4xl mx-auto mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Notre équipe dédiée à votre santé
        </h2>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-500">
          Des professionnels dévoués à votre bien-être, à chaque étape de votre parcours de soins.
        </p>
      </div>

      {/* Bento */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[260px] md:auto-rows-[300px] gap-4">
        {tiles.map((t) => (
          <article key={t.title} className={`group relative overflow-hidden rounded-3xl ${t.span}`}>
            <img
              src={t.image}
              alt={t.title}
              loading="lazy"
              className={`absolute inset-0 w-full h-full object-cover ${t.pos ?? "object-center"} transition-transform duration-700 group-hover:scale-105`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 text-white">
              <h3 className="text-lg md:text-xl font-semibold">{t.title}</h3>
              <p className="mt-1 text-sm text-white/75">{t.text}</p>
            </div>
          </article>
        ))}

        {/* Tuile d'action */}
        <Link
          to="/rdv"
          className="group relative overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#155DFC_0%,#00BBA7_100%)] p-6 flex flex-col text-white"
        >
          <span className="pointer-events-none absolute -right-16 -bottom-16 w-56 h-56 rounded-full border border-white/20 anim-ring" />
          <span className="pointer-events-none absolute -right-6 -bottom-6 w-36 h-36 rounded-full border border-white/25 anim-ring anim-ring-delay" />
          <span className="pointer-events-none absolute -top-10 -left-10 w-40 h-40 rounded-full bg-white/15 blur-2xl anim-glow" />
          <span className="relative grid place-items-center w-11 h-11 rounded-2xl bg-white/20">
            <Stethoscope size={20} />
          </span>
          <p className="relative mt-4 text-2xl font-semibold leading-tight">Besoin d'un avis médical ?</p>
          <p className="relative mt-2 text-sm text-white/80">Consultations sur rendez-vous, urgences ouvertes 24h/24.</p>
          <div className="relative mt-auto flex items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-white text-gray-950 pl-4 pr-1 py-1 text-sm font-semibold">
              Prendre RDV
              <span className="grid place-items-center w-7 h-7 rounded-full bg-gray-950 text-white transition-transform group-hover:translate-x-0.5">
                <ArrowRight size={14} />
              </span>
            </span>
          </div>
        </Link>
      </div>
    </div>
  </section>
);

export default Equipements;
