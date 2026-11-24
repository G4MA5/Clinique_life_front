import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HistoireImg from "../../assets/histoire.png";
import DirecteurImg from "../../assets/Directeur.png";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Partie3_apropos: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"directeur" | "histoire">("directeur");
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="w-full bg-[#F7FAFE] py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* ONGLETS */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-full p-1.5 shadow-[0_10px_30px_-15px_rgba(21,93,252,0.35)] ring-1 ring-gray-100">
            <button
              onClick={() => setActiveTab("directeur")}
              className={`px-8 py-3 rounded-full font-medium transition-all text-base ${
                activeTab === "directeur"
                  ? "bg-[linear-gradient(135deg,#155DFC_0%,#00BBA7_100%)] text-white shadow-md"
                  : "bg-transparent text-gray-700 hover:text-blue-600"
              }`}
            >
              Mot du Directeur
            </button>
            <button
              onClick={() => setActiveTab("histoire")}
              className={`px-8 py-3 rounded-full font-medium transition-all text-base ${
                activeTab === "histoire"
                  ? "bg-[linear-gradient(135deg,#155DFC_0%,#00BBA7_100%)] text-white shadow-md"
                  : "bg-transparent text-gray-700 hover:text-blue-600"
              }`}
            >
              Notre Histoire
            </button>
          </div>
        </div>

        {/* CONTENU MOT DU DIRECTEUR */}
        {activeTab === "directeur" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* IMAGE DIRECTEUR */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col items-center md:items-end"
            >
              <img
                src={DirecteurImg}
                alt="Dr. Gabriel DONGUI"
                className="w-full max-w-[450px] h-auto rounded-[32px] shadow-[0_40px_80px_-30px_rgba(21,93,252,0.5)] ring-8 ring-white"
              />
              <div className="mt-8 flex justify-center w-full max-w-[450px]">
                <Link
                  to="/directeur-biographie"
                  className="group inline-flex items-center gap-3 bg-gray-950 text-white font-semibold pl-6 pr-1.5 py-1.5 rounded-full"
                >
                  Voir son parcours
                  <span className="grid place-items-center w-9 h-9 rounded-full bg-white text-gray-950 transition-transform group-hover:translate-x-0.5"><ArrowRight size={18} /></span>
                </Link>
              </div>
            </motion.div>

            {/* MESSAGE */}
            <div className="text-left">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="inline-block bg-[#155DFC]/10 text-[#155DFC] px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                  Message du Directeur
                </div>

                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-2">
                  Dr. Gabriel DONGUI
                </h2>
                
                <p className="text-[#00BBA7] font-bold text-xl mb-8">
                  Directeur Général
                </p>

                <div className="space-y-4 text-gray-600 leading-relaxed text-[16px]">
                  <p>
                    Située dans un quartier résidentiel calme et paisible,{" "}
                    <span className="font-semibold text-gray-800">CLINIQUE LIFE</span>{" "}
                    est un établissement sanitaire à taille humaine, qui offre toutes 
                    les commodités et services d'une clinique moderne.
                  </p>

                  <p>
                    Avec une capacité d'une trentaine de lits et places, repartis dans 
                    des chambres spacieuses et bien aérées, l'activité de soins s'organise 
                    autour de spécialités médico-chirurgicales.
                  </p>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="overflow-hidden space-y-4"
                      >
                        <p>
                          Vous y trouverez un accueil chaleureux et personnalisé, respectant 
                          la confidentialité depuis votre admission jusqu'aux services de soins, 
                          soit le respect des droits du patient.
                        </p>

                        <p>
                          La <span className="font-semibold text-gray-800">CLINIQUE LIFE</span>{" "}
                          allie savamment hôtellerie de bon standing et soins de qualité. Elle est 
                          dotée d'un plateau technique adéquat with un bloc opératoire associant 
                          différents professionnels de santé aux compétences avérées, gage d'une 
                          prise en charge optimale des patients.
                        </p>

                        <p>
                          La <span className="font-semibold text-gray-800">CLINIQUE LIFE</span>{" "}
                          s'engage également dans une démarche qualité et sécurité des soins, dont 
                          l'objectif est d'assurer la qualité de la prise en charge du patient tout 
                          au long de son parcours.
                        </p>

                        <p>
                          Ce site Web est pour nous l'interface qui permettra d'être à votre écoute 
                          et de communiquer avec vous, tout en vous faisant participer à la vie de 
                          la <span className="font-semibold text-gray-800">CLINIQUE LIFE</span>.
                        </p>

                        <p className="text-gray-900 font-bold text-lg mt-6">
                          Bienvenue à Life !
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-gray-950 font-semibold ring-1 ring-gray-200 hover:ring-[#155DFC]/40 transition"
                >
                  {isExpanded ? (
                    <>
                      Voir moins <ChevronUp size={20} />
                    </>
                  ) : (
                    <>
                      Lire la suite <ChevronDown size={20} />
                    </>
                  )}
                </button>

                <div className="mt-12 pt-8 border-t border-gray-100">
                  <div>
                    <p className="font-bold text-gray-900 text-lg">Dr. Gabriel DONGUI</p>
                    <p className="text-gray-500 text-sm">Directeur Général</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}

        {/* CONTENU NOTRE HISTOIRE */}
        {activeTab === "histoire" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* IMAGE */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex justify-center md:justify-end"
            >
              <img
                src={HistoireImg}
                alt="Clinique Life"
                className="w-full max-w-[450px] h-auto rounded-[32px] shadow-[0_40px_80px_-30px_rgba(21,93,252,0.5)] ring-8 ring-white"
              />
            </motion.div>

           {/* TEXTE */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-left"
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-8">
                Notre Histoire
              </h2>

              <div className="space-y-6 text-gray-600 leading-relaxed text-[16px]">
                <p>
                  Implantée à Angré, dans la commune de Cocody, la{" "}
                  <span className="font-semibold text-gray-800">Clinique Life</span>{" "}
                  est née de la volonté de créer un établissement de santé moderne, 
                  accessible et profondément humain, au service des populations d'Abidjan 
                  et de ses environs.
                </p>

                <p>
                  Dès sa création, la Clinique Life a été pensée comme une structure 
                  sanitaire à taille humaine, alliant excellence médicale, qualité d'accueil 
                  et respect du patient.
                </p>

                <p>
                  L'objectif a toujours été clair : offrir des soins fiables et sécurisés 
                  dans un environnement calme, rassurant et adapté aux exigences de la 
                  médecine contemporaine.
                </p>

                <p>
                  Au fil des années, la clinique s'est progressivement développée en 
                  renforçant son plateau technique, en diversifiant ses spécialités 
                  médico-chirurgicales et en constituant une équipe pluridisciplinaire 
                  compétente.
                </p>

                <p className="border-l-4 border-[#00BBA7] pl-4 italic text-gray-500">
                  "Une ambition constante : être proche de vous, proche de la vie."
                </p>
              </div>
            </motion.div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Partie3_apropos;