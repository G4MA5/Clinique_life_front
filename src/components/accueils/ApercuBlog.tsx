import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Genere from "../ui/Genere";
import GrossesseImg from "../../assets/Enceinte.jpg";
import PediatrieImg from "../../assets/Enfant1.jpg";
import BilanImg from "../../assets/bilan.jpg";

// Section « Actualités » : aperçu des articles du blog
type Article = { tag: string; title: React.ReactNode; image: string };

const articles: Article[] = [
  { tag: "Maternité", title: "Suivi de grossesse : nos conseils pour futures mamans", image: GrossesseImg },
  { tag: "Pédiatrie", title: "La santé des enfants : vaccination et suivi pédiatrique", image: PediatrieImg },
  { tag: "Prévention", title: <Genere>Bilan de santé : pourquoi le faire chaque année ?</Genere>, image: BilanImg },
];

const ApercuBlog: React.FC = () => (
  <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="text-center max-w-4xl mx-auto mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">La vie de la clinique</h2>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-500">
          Conseils de nos médecins, prévention et nouveautés de la Clinique Life.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {articles.map((a) => (
          <Link key={a.tag} to="/blog" className="group rounded-3xl bg-[#F1F6FB] p-2">
            <div className="relative overflow-hidden rounded-[20px] aspect-[16/10]">
              <img src={a.image} alt="" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <span className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#155DFC]">{a.tag}</span>
            </div>
            <div className="p-4 flex items-start justify-between gap-4">
              <h3 className="font-semibold text-gray-900 leading-snug">{a.title}</h3>
              <span className="grid place-items-center w-8 h-8 shrink-0 rounded-full bg-white text-gray-500 group-hover:bg-[#155DFC] group-hover:text-white transition">
                <ArrowUpRight size={16} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default ApercuBlog;
