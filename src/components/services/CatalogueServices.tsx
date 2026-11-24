import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ServiceModal from "./ServiceModal";
import { poles, ServiceItem, Pole } from "../../data/servicesCatalogue";
import { servicesDetailedData, getServiceKey, ServiceDetail } from "../../data/servicesDetailedData";

// Catalogue des services : onglets par pôle, photo à gauche qui change au survol, liste éditoriale à droite
const ease = [0.22, 1, 0.36, 1] as const;

// Fiche détaillée si elle existe, sinon fiche simple construite à partir de la carte
const ficheDe = (s: ServiceItem, pole: Pole): ServiceDetail =>
  servicesDetailedData[getServiceKey(s.title)] ?? {
    title: s.title,
    subtitle: pole.nom,
    image: pole.image,
    description: s.description,
    highlights: [],
  };

const CatalogueServices: React.FC = () => {
  const [poleId, setPoleId] = useState(poles[0].id);
  const [survol, setSurvol] = useState<number | null>(null);
  const [fiche, setFiche] = useState<ServiceDetail | null>(null);

  const pole = poles.find((p) => p.id === poleId)!;
  const imageAffichee = survol !== null ? ficheDe(pole.services[survol], pole).image : pole.image;
  const PoleIcon = pole.icon;

  return (
    <section id="catalogue" className="relative w-full bg-white py-20 px-4 md:px-8 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        {/* En-tête */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Nos pôles de soins</h2>
          <p className="mt-5 text-lg text-gray-500">Choisissez un pôle, puis un service pour en savoir plus.</p>
        </div>

        {/* Onglets */}
        <div className="flex justify-center mb-12">
          <div className="flex max-w-full gap-1 overflow-x-auto rounded-full bg-[#F1F6FB] p-1.5 [scrollbar-width:none]">
            {poles.map((p) => {
              const Icon = p.icon;
              const actif = p.id === poleId;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => { setPoleId(p.id); setSurvol(null); }}
                  className={`relative shrink-0 inline-flex items-center gap-2 rounded-full px-4 sm:px-5 py-2.5 text-sm font-semibold transition-colors ${
                    actif ? "text-white" : "text-gray-600 hover:text-gray-950"
                  }`}
                >
                  {actif && (
                    <motion.span layoutId="onglet-pole" className="absolute inset-0 rounded-full bg-gray-950" transition={{ duration: 0.4, ease }} />
                  )}
                  <Icon size={16} className="relative" />
                  <span className="relative whitespace-nowrap">{p.nom}</span>
                  <span className={`relative rounded-full px-1.5 text-[11px] ${actif ? "bg-white/20" : "bg-white"}`}>{p.services.length}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-start">
          {/* Photo du pôle / du service survolé */}
          <div className="lg:sticky lg:top-28">
            <div className="relative aspect-[4/3] lg:aspect-[4/5] overflow-hidden rounded-[32px] bg-[#F1F6FB]">
              <AnimatePresence mode="popLayout">
                <motion.img
                  key={imageAffichee}
                  src={imageAffichee}
                  alt={pole.nom}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute left-6 right-6 bottom-6 text-white">
                <span className="grid place-items-center w-12 h-12 rounded-2xl bg-[linear-gradient(135deg,#155DFC_0%,#00BBA7_100%)] shadow-lg">
                  <PoleIcon size={22} />
                </span>
                <p className="mt-4 text-2xl md:text-3xl font-bold">{pole.nom}</p>
                <p className="mt-1 text-white/80">{pole.accroche}</p>
              </div>
            </div>
          </div>

          {/* Liste des services */}
          <AnimatePresence mode="wait">
            <motion.ol
              key={pole.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease }}
              className="border-t border-gray-200"
              onMouseLeave={() => setSurvol(null)}
            >
              {pole.services.map((s, i) => (
                <li key={s.title}>
                  <button
                    type="button"
                    onMouseEnter={() => setSurvol(i)}
                    onFocus={() => setSurvol(i)}
                    onClick={() => setFiche(ficheDe(s, pole))}
                    className="group relative w-full grid grid-cols-[auto_1fr_auto] items-center gap-5 border-b border-gray-200 py-6 text-left"
                  >
                    {/* Fond qui glisse au survol */}
                    <span className="absolute inset-0 -mx-4 rounded-2xl bg-[#F1F6FB] opacity-0 scale-[0.98] transition duration-300 group-hover:opacity-100 group-hover:scale-100" />
                    <span className="relative text-sm font-semibold text-gray-300 tabular-nums transition-colors group-hover:text-[#00BBA7]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="relative">
                      <span className="block text-lg md:text-xl font-semibold text-gray-950 transition-transform duration-300 group-hover:translate-x-1">
                        {s.title}
                      </span>
                      <span className="block mt-1 text-sm text-gray-500">{s.description}</span>
                    </span>
                    <span className="relative grid place-items-center w-11 h-11 rounded-full ring-1 ring-gray-200 text-gray-400 transition-all duration-300 group-hover:bg-gray-950 group-hover:text-white group-hover:ring-gray-950 group-hover:rotate-45">
                      <ArrowUpRight size={18} />
                    </span>
                  </button>
                </li>
              ))}
            </motion.ol>
          </AnimatePresence>
        </div>
      </div>

      <ServiceModal isOpen={!!fiche} onClose={() => setFiche(null)} service={fiche} />
    </section>
  );
};

export default CatalogueServices;
