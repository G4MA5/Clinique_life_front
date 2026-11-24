import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CreditCard, Smartphone, Banknote, ShieldCheck, Check, Bell, Receipt, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Genere from "../ui/Genere";

// Section « Paiements » : téléphone central, moyens de paiement autour, effet parallaxe
const gauche = [
  { icon: CreditCard, title: "Carte bancaire", text: "Réglez par carte de débit ou de crédit, en toute sécurité." },
  { icon: Smartphone, title: "Mobile money", text: "Payez depuis votre téléphone en quelques secondes." },
  { icon: Banknote, title: "Espèces", text: "Le paiement en caisse reste toujours possible." },
];

const droite = ["Orange Money", "MTN MoMo", "Moov Money", "Wave", "Visa", "Mastercard"];

const actions = [
  { icon: Smartphone, label: "Mobile money" },
  { icon: CreditCard, label: "Carte" },
  { icon: Banknote, label: "Espèces" },
  { icon: ShieldCheck, label: "Assurance" },
];

const ease = [0.22, 1, 0.36, 1] as const;
const apparition = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  show: (i = 0) => ({ opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, delay: i * 0.12, ease } }),
};
const vue = { once: true, margin: "-80px" } as const;

const Paiements: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  // Vitesses différentes = profondeur (parallaxe)
  const yTexte = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const yPhone = useTransform(scrollYProgress, [0, 1], [70, -70]);
  const yCarte = useTransform(scrollYProgress, [0, 1], [160, -160]);
  const yGauche = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const yDroite = useTransform(scrollYProgress, [0, 1], [-30, 50]);

  return (
    <section ref={ref} className="relative overflow-hidden w-full bg-[linear-gradient(135deg,#155DFC_0%,#00BBA7_100%)] py-24 md:py-28 px-6 md:px-12 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Grand texte d'arrière-plan */}
        <motion.p
          style={{ y: yTexte }}
          className="pointer-events-none absolute inset-x-0 top-24 text-center text-[16vw] lg:text-[180px] font-bold leading-none text-white/10 select-none"
        >
          Payer simplement
        </motion.p>

        {/* En-tête */}
        <motion.div variants={apparition} initial="hidden" whileInView="show" viewport={vue} className="relative text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold">Payez comme vous voulez</h2>
          <p className="mt-5 text-lg text-white/80">
            Carte, mobile money ou espèces : la Clinique Life simplifie votre passage en caisse.
          </p>
        </motion.div>

        <div className="relative mt-14 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-10 lg:gap-6">
          {/* Moyens principaux (gauche) */}
          <motion.ul style={{ y: yGauche }} className="space-y-6 order-2 lg:order-1">
            {gauche.map(({ icon: Icon, title, text }, i) => (
              <motion.li custom={i + 1} variants={apparition} initial="hidden" whileInView="show" viewport={vue} key={title} className="flex items-start gap-4 lg:flex-row-reverse lg:text-right">
                <span className="relative grid place-items-center w-12 h-12 shrink-0 rounded-2xl bg-white text-gray-950 shadow-lg">
                  <Icon size={22} />
                  <span className="hidden lg:block absolute top-1/2 -right-14 w-12 border-t-2 border-dotted border-white/60" />
                </span>
                <div>
                  <p className="font-semibold text-lg">{title}</p>
                  <p className="text-sm text-white/75 max-w-[240px] lg:ml-auto">{text}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>

          {/* Téléphone */}
          <motion.div style={{ y: yPhone }} className="relative mx-auto order-1 lg:order-2">
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 40 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={vue} transition={{ duration: 1, ease }} className="w-[260px] h-[520px] rounded-[44px] bg-gray-950 p-2.5 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)]">
              <div className="relative h-full rounded-[36px] bg-[#F1F6FB] overflow-hidden text-gray-900">
                <span className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-6 rounded-full bg-gray-950" />
                <div className="bg-gray-950 px-5 pt-12 pb-16 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-white/60">Bonjour,</p>
                      <p className="font-semibold">Bienvenue à la Clinique Life</p>
                    </div>
                    <Bell size={16} className="text-white/70" />
                  </div>
                </div>
                <div className="-mt-10 mx-4 rounded-2xl bg-white p-4 shadow-md">
                  <p className="text-xs text-gray-400 flex items-center gap-1"><Receipt size={12} /> Facture consultation</p>
                  <p className="mt-1 text-2xl font-bold">25 000 FCFA</p>
                  <span className="mt-3 inline-flex items-center gap-1 rounded-full bg-[linear-gradient(135deg,#155DFC_0%,#00BBA7_100%)] px-3 py-1 text-xs font-semibold text-white">
                    Payer maintenant <ArrowRight size={12} />
                  </span>
                </div>
                <p className="mt-5 mx-4 text-xs font-semibold text-gray-500">Moyens de paiement</p>
                <div className="mt-2 mx-4 grid grid-cols-2 gap-2">
                  {actions.map(({ icon: Icon, label }) => (
                    <div key={label} className="rounded-xl bg-white p-3 flex flex-col items-center gap-1.5 shadow-sm">
                      <Icon size={18} className="text-[#155DFC]" />
                      <span className="text-[11px] font-medium">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Carte flottante « paiement réussi » */}
            <motion.div
              style={{ y: yCarte }}
              className="absolute -right-10 sm:-right-24 top-1/2 w-56 rounded-2xl bg-white p-4 text-gray-900 shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <span className="grid place-items-center w-10 h-10 rounded-full bg-[linear-gradient(135deg,#155DFC_0%,#00BBA7_100%)] text-white">
                  <Check size={20} strokeWidth={3} />
                </span>
                <div>
                  <p className="text-sm font-bold">Paiement réussi</p>
                  <p className="text-xs text-gray-500">25 000 FCFA · Mobile money</p>
                </div>
              </div>
              <div className="mt-3 h-1.5 rounded-full bg-gray-100 overflow-hidden">
                <span className="block h-full w-full bg-[linear-gradient(90deg,#155DFC_0%,#00BBA7_100%)]" />
              </div>
            </motion.div>
          </motion.div>

          {/* Opérateurs (droite) */}
          <motion.div style={{ y: yDroite }} className="order-3">
            <ul className="flex flex-wrap lg:flex-col gap-3 lg:items-start">
              {droite.map((op, i) => (
                <motion.li custom={i + 2} variants={apparition} initial="hidden" whileInView="show" viewport={vue} key={op} className="relative flex items-center">
                  <span className="hidden lg:block w-10 border-t-2 border-dotted border-white/60 mr-2" />
                  <span className="rounded-full bg-white px-5 py-2.5 text-gray-950 font-semibold shadow-lg">{op}</span>
                </motion.li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-white/80 lg:pl-12">
              <Genere dark>Liste des opérateurs à confirmer avec la clinique.</Genere>
            </p>
          </motion.div>
        </div>

        {/* Bouton */}
        <div className="relative mt-14 flex justify-center">
          <Link
            to="/assurances"
            className="group inline-flex items-center gap-3 bg-gray-950 text-white pl-6 pr-1.5 py-1.5 rounded-full font-semibold"
          >
            Voir les assurances acceptées
            <span className="grid place-items-center w-9 h-9 rounded-full bg-white text-gray-950 transition-transform group-hover:translate-x-0.5">
              <ArrowRight size={18} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Paiements;
