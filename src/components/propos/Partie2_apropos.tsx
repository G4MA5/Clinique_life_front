import React, { useState } from "react";
import { HeartHandshake, Users, Award } from "lucide-react";

// Section « Notre mission » : texte + 3 valeurs
const valeurs = [
  {
    icon: HeartHandshake,
    title: "Proximité",
    text: "Nous sommes proches de vous et disponibles à tout moment pour vous accompagner avec attention et bienveillance.",
  },
  {
    icon: Users,
    title: "Humanité",
    text: "Chaque patient est unique. Nous plaçons l'écoute, le respect et l'empathie au cœur de notre approche médicale.",
  },
  {
    icon: Award,
    title: "Excellence",
    text: "Nous garantissons des soins de qualité grâce à des équipements modernes et à une équipe médicale hautement qualifiée.",
  },
];

const Partie2_apropos: React.FC = () => {
  const [selectedValeur, setSelectedValeur] = useState<number | null>(null);

  return (
    <section className="w-full bg-white py-12 sm:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">Notre mission</h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-500 leading-relaxed">
            <span className="font-semibold text-gray-800">Clinique Life</span> – Un nom qui reflète notre engagement :
            être proches de vous, présents dans tous les moments importants de votre vie. Nous croyons qu'une bonne
            santé commence par une relation de confiance et de proximité avec nos patients.
          </p>
          <p className="mt-5 sm:mt-8 border-l-4 border-[#00BBA7] pl-4 italic text-sm sm:text-base text-gray-500">
            « Une ambition constante : être proche de vous, proche de la vie. »
          </p>
        </div>

        <div className="lg:col-span-7 grid grid-cols-2 gap-3 sm:gap-5">
          {valeurs.map(({ icon: Icon, title, text }, i) => {
            const isSelected = selectedValeur === i;
            return (
              <div
                key={title}
                onClick={() => setSelectedValeur(isSelected ? null : i)}
                className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[#F1F6FB] p-4 sm:p-7 transition-all duration-300 cursor-pointer sm:cursor-default hover:-translate-y-1 hover:bg-white hover:shadow-[0_25px_50px_-25px_rgba(21,93,252,0.45)] hover:ring-1 hover:ring-[#155DFC]/15 ${
                  i === 2 ? "col-span-2" : ""
                } ${isSelected ? "ring-2 ring-[#155DFC] bg-white shadow-lg" : ""}`}
              >
                <span className="absolute right-3 top-3 sm:right-6 sm:top-6 text-3xl sm:text-6xl font-bold text-[#155DFC]/[0.08] select-none">
                  0{i + 1}
                </span>
                <span className="grid place-items-center w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[linear-gradient(135deg,#155DFC_0%,#00BBA7_100%)] text-white shadow-lg shadow-[#155DFC]/25 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-6deg]">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </span>
                <h3 className="mt-3 sm:mt-6 text-sm sm:text-xl font-semibold text-gray-950">
                  {title}
                </h3>
                <p
                  className={`mt-2 text-gray-500 leading-relaxed text-xs sm:text-base ${
                    isSelected ? "block" : "hidden sm:block"
                  }`}
                >
                  {text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Partie2_apropos;
