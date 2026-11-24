import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { articles } from "../../data/blogArticles";
import Logo from "../../assets/life.png";

// En-tête du blog : composition centrée (grand titre, photos en arc) + bandeau de conseils qui défile
const ease = [0.22, 1, 0.36, 1] as const;

const conseils = [
  "Faites un bilan de santé au moins une fois par an",
  "Nos urgences vous accueillent 24h/24 et 7j/7",
  "Pensez à mettre à jour le carnet de vaccination de vos enfants",
  "Un suivi de grossesse régulier protège la maman et le bébé",
  "Buvez de l'eau régulièrement, surtout par forte chaleur",
  "Prenez rendez-vous en ligne en quelques clics",
];

// Position de chaque photo dans l'arc (rotation + décalage vertical)
const arc = [
  { r: -8, y: 30 },
  { r: 0, y: 0 },
  { r: 8, y: 30 },
];

const Partie1_blog: React.FC = () => (
  <section className="relative w-full overflow-hidden bg-[#F7FAFE]">
    <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(#155DFC14_1px,transparent_1px)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" />
    <div className="pointer-events-none absolute -top-48 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-[#155DFC]/[0.09] blur-[120px]" />

    {/* Plusieurs lignes « JOURNAL » en contour qui défilent en sens alternés */}
    <div aria-hidden="true" className="pointer-events-none select-none absolute inset-x-0 top-16 space-y-2 [mask-image:linear-gradient(to_bottom,black_40%,transparent)]">
      {[0, 1, 2].map((ligne) => (
        <div key={ligne} className={`flex w-max ${ligne % 2 ? "journal-defile-inverse" : "journal-defile"}`}>
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="px-8 text-[120px] md:text-[180px] font-black leading-none text-transparent [-webkit-text-stroke:1.5px_rgba(21,93,252,0.10)]">
              JOURNAL
            </span>
          ))}
        </div>
      ))}
    </div>

    <div className="relative max-w-5xl mx-auto px-4 pt-28 md:pt-36 text-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease }}
        className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#155DFC]"
      >
        <span className="w-8 h-px bg-[#00BBA7]" />
        <img src={Logo} alt="Clinique Life" className="w-9 h-9 object-contain" /> Le journal
        <span className="w-8 h-px bg-[#00BBA7]" />
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1, ease }}
        className="mt-6 text-5xl sm:text-7xl xl:text-8xl font-bold tracking-tight leading-[0.95] text-gray-950"
      >
        Actualités <span className="italic font-serif font-normal text-gray-400">&amp;</span>
        <br />
        <span className="bg-[linear-gradient(135deg,#155DFC_0%,#00BBA7_100%)] bg-clip-text text-transparent">conseils santé</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease }}
        className="mt-7 max-w-xl mx-auto text-lg text-gray-500 leading-relaxed"
      >
        Découvrez nos dernières actualités et conseils santé pour vous accompagner au quotidien.
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease }}
        type="button"
        onClick={() => document.getElementById("articles")?.scrollIntoView({ behavior: "smooth" })}
        className="group mt-9 inline-flex items-center gap-3 bg-gray-950 text-white pl-6 pr-1.5 py-1.5 rounded-full font-semibold"
      >
        Lire les articles
        <span className="grid place-items-center w-9 h-9 rounded-full bg-white text-gray-950 transition-transform group-hover:translate-y-0.5">
          <ArrowDown size={18} />
        </span>
      </motion.button>

      {/* Photos des articles disposées en arc */}
      <div className="relative mt-14 flex justify-center items-start -space-x-6 sm:-space-x-4 pb-16">
        {articles.map((a, i) => (
          <motion.figure
            key={a.id}
            initial={{ opacity: 0, y: 80, rotate: 0 }}
            animate={{ opacity: 1, y: arc[i].y, rotate: arc[i].r }}
            transition={{ duration: 1, delay: 0.35 + i * 0.12, ease }}
            whileHover={{ y: arc[i].y - 14, rotate: 0, scale: 1.04 }}
            className="relative w-36 sm:w-52 lg:w-60 rounded-3xl bg-white p-2 pb-3 shadow-[0_30px_60px_-25px_rgba(21,93,252,0.45)]"
            style={{ zIndex: i === 1 ? 2 : 1 }}
          >
            <img src={a.image} alt={a.titre} className="w-full aspect-[4/5] object-cover object-top rounded-[18px]" />
            <figcaption className="mt-2.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#155DFC]">{a.categorie}</figcaption>
          </motion.figure>
        ))}
      </div>
    </div>

    {/* Bandeau de conseils qui défile */}
    <div className="relative overflow-hidden bg-[linear-gradient(135deg,#155DFC_0%,#00BBA7_100%)] py-4 text-white">
      <div className="flex w-max blog-marquee">
        {[...conseils, ...conseils].map((t, i) => (
          <span key={i} className="flex items-center gap-8 px-8 text-base md:text-lg font-medium whitespace-nowrap">
            {t} <span className="text-white/50">✦</span>
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default Partie1_blog;
