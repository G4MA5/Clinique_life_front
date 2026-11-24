import React from "react";
import Actualites from "../accueils/Actualites";
import Logo from "../../assets/life.png";

// Fin du blog : grande citation puis la newsletter de l'accueil (même composant, même style)
const Partie4_blog: React.FC = () => (
  <>
    <section className="relative w-full overflow-hidden bg-gray-950 py-24 px-4 md:px-8 text-white">
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[#155DFC]/30 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 right-0 w-96 h-96 rounded-full bg-[#00BBA7]/25 blur-[110px]" />
      <figure className="relative max-w-5xl mx-auto text-center">
        <span aria-hidden="true" className="block font-serif text-8xl leading-none text-[#00BBA7]">“</span>
        <blockquote className="mt-2 text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
          Prévenir vaut mieux que guérir :{" "}
          <span className="bg-[linear-gradient(135deg,#5B8CFF_0%,#00BBA7_100%)] bg-clip-text text-transparent">
            informez-vous, faites-vous suivre.
          </span>
        </blockquote>
        <figcaption className="mt-10 flex flex-col items-center gap-3">
          <span className="grid place-items-center w-16 h-16 rounded-full bg-white shadow-lg"><img src={Logo} alt="Clinique Life" className="w-11 h-11 object-contain" /></span>
          <span className="text-sm uppercase tracking-[0.25em] text-white/50">Proche de vous, proche de la vie</span>
        </figcaption>
      </figure>
    </section>
    <Actualites />
  </>
);

export default Partie4_blog;
