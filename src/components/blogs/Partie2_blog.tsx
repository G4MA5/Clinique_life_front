import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Clock, CalendarDays, UserRound } from "lucide-react";
import { articles, Article } from "../../data/blogArticles";

// Corps du blog : article « À la une » en grand + grille d'articles filtrable par thème
const ease = [0.22, 1, 0.36, 1] as const;
const vedettes = articles.slice(0, 2);
const categories = ["Tous", ...Array.from(new Set(articles.map((a) => a.categorie)))];

const Meta: React.FC<{ a: Article; clair?: boolean }> = ({ a, clair }) => (
  <div className={`flex flex-wrap items-center gap-x-5 gap-y-2 text-xs ${clair ? "text-white/80" : "text-gray-500"}`}>
    <span className="flex items-center gap-1.5"><UserRound size={14} /> {a.auteur}</span>
    <span className="flex items-center gap-1.5"><CalendarDays size={14} /> {a.date}</span>
    <span className="flex items-center gap-1.5"><Clock size={14} /> {a.lecture} de lecture</span>
  </div>
);

// Bouton de lecture : lien si la page existe, sinon mention « bientôt en ligne »
const Lire: React.FC<{ a: Article; clair?: boolean }> = ({ a, clair }) =>
  a.lien ? (
    <Link to={a.lien} className={`group inline-flex items-center gap-3 pl-5 pr-1.5 py-1.5 rounded-full text-sm font-semibold ${clair ? "bg-white text-gray-950" : "bg-gray-950 text-white"}`}>
      Lire l'article
      <span className={`grid place-items-center w-8 h-8 rounded-full transition-transform group-hover:rotate-45 ${clair ? "bg-gray-950 text-white" : "bg-white text-gray-950"}`}>
        <ArrowUpRight size={16} />
      </span>
    </Link>
  ) : (
    <span className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium ${clair ? "bg-white/15 text-white/80" : "bg-white text-gray-500"}`}>Article complet bientôt en ligne</span>
  );

const Partie2_blog: React.FC = () => {
  const [filtre, setFiltre] = useState("Tous");
  const liste = articles.filter((a) => filtre === "Tous" || a.categorie === filtre);

  return (
    <section id="articles" className="w-full bg-white py-24 px-4 md:px-8 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        {/* ===== À la une : deux articles en vedette ===== */}
        <div className="flex items-end justify-between gap-6 mb-8">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-950">
            À la <span className="italic font-serif font-normal text-gray-400">une</span>
          </h2>
          <span className="hidden sm:block text-sm text-gray-400">Sélection de la rédaction</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Grand article : texte posé sur la photo */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease }}
            className="group relative lg:col-span-7 min-h-[520px] overflow-hidden rounded-[36px]"
          >
            <img src={vedettes[0].image} alt={vedettes[0].titre} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/85 via-gray-950/20 to-transparent" />
            <span className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-gray-950">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00BBA7] animate-pulse" /> À la une
            </span>
            <span className="absolute right-6 top-4 text-8xl font-black text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.7)]">01</span>
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 text-white">
              <span className="inline-block rounded-full bg-[linear-gradient(135deg,#155DFC_0%,#00BBA7_100%)] px-3.5 py-1 text-xs font-semibold">{vedettes[0].categorie}</span>
              <h3 className="mt-4 max-w-xl text-3xl md:text-5xl font-bold tracking-tight leading-[1.05]">{vedettes[0].titre}</h3>
              <p className="mt-4 max-w-lg text-white/80 leading-relaxed line-clamp-2">{vedettes[0].extrait}</p>
              <div className="mt-5"><Meta a={vedettes[0]} clair /></div>
              <div className="mt-7"><Lire a={vedettes[0]} clair /></div>
            </div>
          </motion.article>

          {/* Second article : carte claire, photo en haut */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.15, ease }}
            className="group relative lg:col-span-5 flex flex-col overflow-hidden rounded-[36px] bg-[#F1F6FB]"
          >
            <div className="relative h-64 lg:h-72 overflow-hidden">
              <img src={vedettes[1].image} alt={vedettes[1].titre} className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
              <span className="absolute right-5 bottom-0 translate-y-1/3 text-8xl font-black text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.85)]">02</span>
            </div>
            <div className="flex-1 flex flex-col p-6 md:p-8">
              <span className="self-start rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#155DFC]">{vedettes[1].categorie}</span>
              <h3 className="mt-4 text-2xl md:text-3xl font-bold tracking-tight leading-tight text-gray-950">{vedettes[1].titre}</h3>
              <p className="mt-3 text-gray-500 leading-relaxed line-clamp-3">{vedettes[1].extrait}</p>
              <div className="mt-5"><Meta a={vedettes[1]} /></div>
              <div className="mt-auto pt-7"><Lire a={vedettes[1]} /></div>
            </div>
          </motion.article>
        </div>

        {/* ===== Tous les articles ===== */}
        <div className="mt-24 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-950">
            Tous les <span className="italic font-serif font-normal text-gray-400">articles</span>
          </h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setFiltre(c)}
                className={`relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${filtre === c ? "text-white" : "text-gray-600 bg-[#F1F6FB] hover:text-gray-950"}`}
              >
                {filtre === c && <motion.span layoutId="filtre-blog" className="absolute inset-0 rounded-full bg-gray-950" transition={{ duration: 0.4, ease }} />}
                <span className="relative">{c}</span>
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {liste.map((a, i) => (
              <motion.article
                layout
                key={a.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease }}
                className={`group relative overflow-hidden rounded-[28px] bg-[#F1F6FB] ${i === 0 && liste.length > 2 ? "md:col-span-2 lg:col-span-1 lg:row-span-2" : ""}`}
              >
                <div className={`relative overflow-hidden ${i === 0 && liste.length > 2 ? "aspect-[4/3] lg:aspect-auto lg:h-[420px]" : "aspect-[16/10]"}`}>
                  <img src={a.image} alt={a.titre} className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute top-4 left-4 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-semibold text-[#155DFC]">{a.categorie}</span>
                  {/* Numéro géant */}
                  <span className="absolute right-4 bottom-0 translate-y-1/3 text-8xl font-black text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.85)]">
                    {String(articles.indexOf(a) + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="p-6">
                  <Meta a={a} />
                  <h3 className="mt-3 text-xl font-semibold leading-snug text-gray-950">{a.titre}</h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed line-clamp-3">{a.extrait}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {a.tags.map((t) => (
                      <span key={t} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-600">#{t}</span>
                    ))}
                  </div>
                  <div className="mt-6"><Lire a={a} /></div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Partie2_blog;
