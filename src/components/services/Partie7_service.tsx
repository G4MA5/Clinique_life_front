import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, ScrollText, Printer } from "lucide-react";
import Logo from "../../assets/life.png";

// Charte du patient présentée comme un document officiel (papier à en-tête, articles, tampon, signature).
// Regroupe les anciennes sections « droits » (Partie7) et « devoirs » (Partie8) avec le même contenu.
const droits = [
  {
    titre: "Garantir le secret",
    texte:
      "La Clinique LIFE est tenue de garantir le secret de l'ensemble des informations de caractère médical et social vous concernant. Cette obligation de secret professionnel s'applique à tous les professionnels, salariés et bénévoles, intervenant dans l'établissement. Si vous le souhaitez, vous pouvez demander à ce que votre présence ne soit pas communiquée.",
  },
  {
    titre: "Information sur votre état de santé",
    texte:
      "Vous avez le droit d'être informé sur votre état de santé. Cette information porte sur les différentes investigations, traitements ou actions qui vous sont proposés, leur utilité, leur urgence éventuelle, leurs conséquences, les risques fréquents ou graves normalement prévisibles qu'ils comportent, ainsi que sur les autres solutions possibles et sur les conséquences prévisibles en cas de refus. Seule l'urgence ou l'impossibilité d'informer peut dispenser le professionnel de santé de cette obligation.",
  },
  {
    titre: "Consentement aux soins",
    texte:
      "Aucun acte médical ni aucun traitement ne peuvent être pratiqués sans votre consentement libre et éclairé et ce consentement peut être retiré à tout moment. En revanche si vos décisions mettent votre vie en danger, il est du devoir du médecin de tout faire pour vous convaincre d'accepter les soins qui s'imposent.",
  },
  {
    titre: "Cas des enfants mineurs",
    texte:
      "Les décisions concernant votre santé relèvent, pour les mineurs, des titulaires de l'autorité parentale. Néanmoins vous avez le droit dans la mesure du possible, de recevoir vous-même une information et de participer à la prise de décision.",
  },
];

const reglesVie = [
  { titre: "Boissons alcoolisées et produits illicites", texte: "L'introduction de boissons alcoolisées et de produits illicites est interdite dans la Clinique." },
  { titre: "Nuisances sonores", texte: "Le silence constitue l'un des éléments du confort et du rétablissement des patients. Il vous est demandé, ainsi qu'à vos visiteurs, de le respecter. Il est recommandé d'écouter de la musique à l'aide d'un casque et de veiller au volume sonore du téléviseur de votre chambre." },
  { titre: "Tabac", texte: "Il est strictement interdit de fumer dans la Clinique." },
  { titre: "Téléphone portable", texte: "En raison des risques de perturbations pouvant intervenir sur certains équipements médicaux, l'utilisation de téléphones portables à l'intérieur de la Clinique peut être restreinte. Si c'était le cas il vous sera demandé de mettre votre téléphone en mode arrêt." },
  { titre: "Visites", texte: "La visite des proches est un moment réconfortant. Toutefois, pour des raisons d'hygiène et pour votre rétablissement, merci de limiter le nombre de visiteurs présents en même temps dans votre chambre. Par ailleurs, les enfants peuvent être porteurs de maladies spécifiques dont les répercussions sont parfois plus graves lorsqu'elles touchent des adultes et notamment des personnes affaiblies. C'est pourquoi d'une façon générale, il est déconseillé aux jeunes de moins de 15 ans de rendre visite aux patients." },
  { titre: "Comportement général", texte: "Respecter et permettre le repos des autres patients, n'apporter aucune gêne au fonctionnement du service, avoir une tenue vestimentaire correcte lors de vos déplacements dans l'enceinte de la Clinique, maintenir en bon état les locaux et les objets mis à votre disposition, ne pas introduire d'animal dans l'enceinte de l'établissement." },
];

const hygiene =
  "La lutte contre les infections nosocomiales : une infection est dite nosocomiale si elle est acquise en milieu hospitalier. Le seul moyen de lutte est la prévention. Celle-ci passe par des règles d'hygiène simples. La transmission des germes par les mains représente le mode principal de contamination en milieu hospitalier. Le lavage des mains du personnel soignant, des patients et des visiteurs est donc un des moyens efficaces de prévention. Vous trouverez un distributeur de solution hydroalcoolique dans chaque chambre, n'hésitez pas à l'utiliser pendant votre séjour ainsi que vos visiteurs.";

const ease = [0.22, 1, 0.36, 1] as const;

// Titre d'article façon texte réglementaire
const Article: React.FC<{ n: string; titre: string; texte: string }> = ({ n, titre, texte }) => (
  <div className="grid grid-cols-[auto_1fr] gap-x-5 py-5 border-b border-dashed border-gray-200 last:border-0">
    <span className="font-serif text-sm italic text-[#155DFC] pt-0.5 whitespace-nowrap">Art. {n}</span>
    <div>
      <h4 className="font-serif text-lg font-semibold text-gray-950">{titre}</h4>
      <p className="mt-1.5 text-[15px] text-gray-600 leading-relaxed">{texte}</p>
    </div>
  </div>
);

const Partie7_service: React.FC = () => {
  const [onglet, setOnglet] = useState<"droits" | "devoirs">("droits");

  return (
    <section className="relative w-full overflow-hidden bg-[#EEF3F9] py-24 px-4 md:px-8">
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(#155DFC14_1px,transparent_1px)] [background-size:26px_26px]" />

      <div className="relative max-w-5xl mx-auto">
        {/* En-tête de section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Droits et devoirs du patient</h2>
          <p className="mt-5 text-lg text-gray-500">
            La CLINIQUE LIFE veille à respecter votre dignité et ne fait aucune discrimination dans l'accès à la prévention et
            aux soins. Les équipes vous assurent un droit au respect de votre vie privée et au secret professionnel.
          </p>
        </div>

        {/* Onglets */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-full bg-white p-1.5 shadow-sm">
            {([["droits", "Les droits du patient", ShieldCheck], ["devoirs", "Les devoirs du patient", ScrollText]] as const).map(([id, label, Icon]) => (
              <button
                key={id}
                type="button"
                onClick={() => setOnglet(id)}
                className={`relative inline-flex items-center gap-2 rounded-full px-4 sm:px-6 py-2.5 text-sm font-semibold transition-colors ${onglet === id ? "text-white" : "text-gray-600 hover:text-gray-950"}`}
              >
                {onglet === id && <motion.span layoutId="onglet-charte" className="absolute inset-0 rounded-full bg-gray-950" transition={{ duration: 0.4, ease }} />}
                <Icon size={16} className="relative" />
                <span className="relative">{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Feuilles empilées */}
        <div className="relative">
          <div className="absolute inset-x-6 -bottom-3 top-3 rounded-[6px] bg-white/70 rotate-[1.2deg] shadow-sm" />
          <div className="absolute inset-x-3 -bottom-1.5 top-1.5 rounded-[6px] bg-white/85 -rotate-[0.8deg] shadow-sm" />

          {/* Document principal */}
          <article className="relative rounded-[6px] bg-white shadow-[0_40px_80px_-40px_rgba(21,93,252,0.45)] overflow-hidden">
            {/* Liseré dégradé en haut, comme un papier à en-tête */}
            <div className="h-2 bg-[linear-gradient(90deg,#155DFC_0%,#00BBA7_100%)]" />

            <div className="px-6 sm:px-12 lg:px-16 pt-10 pb-12">
              {/* En-tête du document */}
              <header className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 pb-8 border-b-2 border-gray-950">
                <div className="flex items-center gap-4">
                  <img src={Logo} alt="Clinique Life" className="w-14 h-14 object-contain" />
                  <div>
                    <p className="font-serif text-2xl font-bold tracking-tight text-gray-950">Clinique Life</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Votre santé, notre engagement</p>
                  </div>
                </div>
                <div className="sm:text-right text-xs text-gray-500 leading-relaxed">
                  <p>Angré, Cocody — Abidjan</p>
                  <p>07 01 21 45 80 · 07 01 34 06 72</p>
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="mt-3 inline-flex items-center gap-1.5 rounded-full ring-1 ring-gray-200 px-3 py-1.5 font-semibold text-gray-700 hover:ring-[#155DFC]/40 transition"
                  >
                    <Printer size={13} /> Imprimer
                  </button>
                </div>
              </header>

              {/* Titre du document */}
              <div className="mt-10 text-center">
                <p className="text-[11px] uppercase tracking-[0.35em] text-[#00BBA7] font-semibold">Document à l'attention des patients</p>
                <h3 className="mt-3 font-serif text-3xl md:text-4xl font-bold text-gray-950">Charte du patient</h3>
                <p className="mt-2 font-serif italic text-gray-500">
                  {onglet === "droits" ? "Titre I — Les droits du patient" : "Titre II — Les devoirs du patient"}
                </p>
              </div>

              {/* Contenu */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={onglet}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease }}
                  className="mt-10"
                >
                  {onglet === "droits" ? (
                    droits.map((d, i) => <Article key={d.titre} n={`${i + 1}`} titre={d.titre} texte={d.texte} />)
                  ) : (
                    <>
                      <p className="text-[15px] text-gray-600 leading-relaxed">
                        Durant votre séjour, vous serez amené à partager des espaces soumis à quelques règles élémentaires de vie,
                        d'hygiène et de sécurité.
                      </p>
                      <h4 className="mt-8 font-serif text-xl font-bold text-gray-950">Chapitre 1 — Respect des règles de vie</h4>
                      {reglesVie.map((r, i) => <Article key={r.titre} n={`1.${i + 1}`} titre={r.titre} texte={r.texte} />)}
                      <h4 className="mt-8 font-serif text-xl font-bold text-gray-950">Chapitre 2 — Respect des règles d'hygiène</h4>
                      <Article n="2.1" titre="Lutte contre les infections nosocomiales" texte={hygiene} />
                    </>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Pied du document : signature + tampon */}
              <footer className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center sm:items-end justify-between gap-8">
                <div className="text-center sm:text-left">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-400">Pour la Direction</p>
                  <p className="mt-2 font-serif italic text-3xl text-[#155DFC]">Clinique Life</p>
                  <div className="mt-1 w-48 border-b border-gray-300" />
                </div>
                {/* Tampon circulaire */}
                <div className="relative w-32 h-32 -rotate-12 opacity-80" aria-hidden="true">
                  <svg viewBox="0 0 120 120" className="w-full h-full">
                    <defs>
                      <path id="cercle-tampon" d="M60 60 m-44 0 a44 44 0 1 1 88 0 a44 44 0 1 1 -88 0" />
                    </defs>
                    <circle cx="60" cy="60" r="56" fill="none" stroke="#00BBA7" strokeWidth="2.5" />
                    <circle cx="60" cy="60" r="34" fill="none" stroke="#00BBA7" strokeWidth="1.5" />
                    <text fill="#00BBA7" fontSize="10.5" fontWeight="700" letterSpacing="2.5">
                      <textPath href="#cercle-tampon">CLINIQUE LIFE • ABIDJAN • CHARTE •</textPath>
                    </text>
                  </svg>
                  <img src={Logo} alt="" className="absolute inset-0 m-auto w-11 h-11 object-contain opacity-90" />
                </div>
              </footer>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Partie7_service;
