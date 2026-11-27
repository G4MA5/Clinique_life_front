import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Siren, ArrowUpRight } from "lucide-react";
import Logo from "../../assets/life.png";

// En-tête de la page Contact : titre centré + bento des moyens de contact (mêmes informations qu'avant)
const ease = [0.22, 1, 0.36, 1] as const;
const ITINERAIRE =
  "https://www.google.com/maps/place/CLINIQUE+M%C3%89DICALE+LIFE/@5.4114731,-3.9716629,17z/data=!3m1!4b1!4m6!3m5!1s0xfc193799b22a97b:0x5a22fb6fb3abb026!8m2!3d5.4114731!4d-3.969088!16s%2Fg%2F11t6qw58ym";

const apparition = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay, ease },
});

// Carte du bento : icône + titre + lignes, avec flèche au survol
const Tuile = ({ href, icon: Icon, titre, lignes, delay, externe }: {
  href: string; icon: typeof Phone; titre: string; lignes: string[]; delay: number; externe?: boolean;
}) => (
  <motion.a
    {...apparition(delay)}
    href={href}
    target={externe ? "_blank" : undefined}
    rel={externe ? "noreferrer" : undefined}
    className="group relative flex flex-col justify-between rounded-[28px] bg-white p-6 ring-1 ring-white shadow-[0_20px_50px_-35px_rgba(21,93,252,0.55)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(21,93,252,0.55)]"
  >
    <div className="flex items-start justify-between">
      <span className="grid place-items-center w-12 h-12 rounded-2xl bg-[#155DFC]/10 text-[#155DFC] transition-colors duration-500 group-hover:bg-[linear-gradient(135deg,#155DFC_0%,#00BBA7_100%)] group-hover:text-white">
        <Icon size={22} />
      </span>
      <span className="grid place-items-center w-9 h-9 rounded-full ring-1 ring-gray-200 text-gray-400 transition-all duration-300 group-hover:bg-gray-950 group-hover:text-white group-hover:ring-gray-950 group-hover:rotate-45">
        <ArrowUpRight size={16} />
      </span>
    </div>
    <div className="mt-8">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-400">{titre}</p>
      {lignes.map((l, i) => (
        <p key={l} className={i === 0 ? "mt-2 text-lg font-semibold text-gray-950" : "text-sm text-gray-500"}>{l}</p>
      ))}
    </div>
  </motion.a>
);

export default function Partie1() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F7FAFE] px-4 md:px-8 pt-10 pb-20">
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(#155DFC14_1px,transparent_1px)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-[#155DFC]/[0.09] blur-[120px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Titre centré */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.p {...apparition(0)} className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#155DFC]">
            <span className="w-8 h-px bg-[#00BBA7]" />
            <img src={Logo} alt="Clinique Life" className="w-8 h-8 object-contain" /> Contact
            <span className="w-8 h-px bg-[#00BBA7]" />
          </motion.p>
          <motion.h1 {...apparition(0.1)} className="mt-6 text-5xl sm:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.02] text-gray-950">
            Parlons de{" "}
            <span className="bg-[linear-gradient(135deg,#155DFC_0%,#00BBA7_100%)] bg-clip-text text-transparent">votre santé</span>
          </motion.h1>
          <motion.p {...apparition(0.2)} className="mt-6 text-lg text-gray-500">
            Notre équipe médicale est à votre écoute. Contactez-nous pour toute question ou pour prendre rendez-vous rapidement.
          </motion.p>
        </div>

        {/* Bento des contacts */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:auto-rows-[200px]">
          {/* Urgences : grande carte sombre */}
          <motion.div
            {...apparition(0.25)}
            className="relative overflow-hidden sm:col-span-2 lg:row-span-2 rounded-[32px] bg-gray-950 p-8 text-white flex flex-col justify-between"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 w-72 h-72 rounded-full bg-[#155DFC]/40 blur-3xl" />
            <div className="pointer-events-none absolute -left-10 -bottom-16 w-64 h-64 rounded-full bg-[#00BBA7]/30 blur-3xl" />
            <div className="relative flex items-center gap-3">
              <span className="relative grid place-items-center w-12 h-12 rounded-2xl bg-white text-gray-950">
                <span className="absolute inset-0 rounded-2xl bg-white/50 animate-ping" />
                <Siren size={22} className="relative" />
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold ring-1 ring-white/20">Ouvert 24h/24 · 7j/7</span>
            </div>
            <div className="relative mt-10">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Besoin d'un rendez-vous urgent ?</h2>
              <p className="mt-3 text-white/70">Appelez-nous directement pour une prise en charge rapide.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {[["+225 07 77 34 48 59", "+2250777344859"], ["+225 27 22 26 94 03", "+2252722269403"]].map(([label, tel]) => (
                  <a key={tel} href={`tel:${tel}`} className="group inline-flex items-center gap-2 rounded-full bg-white pl-1.5 pr-5 py-1.5 text-sm font-semibold text-gray-950">
                    <span className="grid place-items-center w-8 h-8 rounded-full bg-[linear-gradient(135deg,#155DFC_0%,#00BBA7_100%)] text-white"><Phone size={14} /></span>
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <Tuile href="tel:+2250777344859" icon={Phone} titre="Téléphone" lignes={["+225 07 77 34 48 59", "+225 27 22 26 94 03"]} delay={0.3} />
          <Tuile href="mailto:info@clinique-life.com" icon={Mail} titre="Email" lignes={["info@clinique-life.com", "Réponse sous 24h"]} delay={0.35} />
          <Tuile href={ITINERAIRE} externe icon={MapPin} titre="Adresse" lignes={["Angré GESTOCI", "100 m après CHINA MALL"]} delay={0.4} />
          <Tuile href="tel:+2250777344859" icon={Clock} titre="Horaires" lignes={["Ouvert 24h/24 - 7j/7", "Service d'urgence disponible"]} delay={0.45} />
        </div>
      </div>
    </section>
  );
}
