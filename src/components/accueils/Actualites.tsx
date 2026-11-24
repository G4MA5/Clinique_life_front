import React from "react";
import { ArrowUpRight } from "lucide-react";

// Enveloppe décorative en CSS (corps + rabat)
const Enveloppe: React.FC<{ className: string }> = ({ className }) => (
  <div className={`pointer-events-none absolute w-56 md:w-72 aspect-[4/3] ${className}`}>
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white to-gray-100 shadow-[0_20px_40px_-10px_rgba(10,40,120,0.45)]" />
    <div
      className="absolute inset-x-0 top-0 h-[62%] bg-gradient-to-b from-white to-gray-200 rounded-t-2xl drop-shadow"
      style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
    />
    <div
      className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white to-gray-100 rounded-b-2xl"
      style={{ clipPath: "polygon(0 100%, 50% 0, 100% 100%)" }}
    />
  </div>
);

// Section newsletter : bannière centrée avec enveloppes décoratives
const Actualites: React.FC = () => (
  <section className="w-full bg-white py-20 px-4 md:px-8 lg:px-16">
    <div className="relative overflow-hidden max-w-6xl mx-auto rounded-[32px] bg-[linear-gradient(135deg,#155DFC_0%,#00BBA7_100%)] px-6 pt-16 pb-28 md:pb-20 text-center text-white shadow-[0_30px_60px_-30px_rgba(21,93,252,0.6)]">
      {/* Halos */}
      <div className="pointer-events-none absolute -left-20 top-0 w-72 h-72 rounded-full bg-white/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 -bottom-10 w-72 h-72 rounded-full bg-[#00BBA7]/40 blur-3xl" />

      {/* Enveloppes */}
      <Enveloppe className="-left-10 md:-left-6 -bottom-16 md:-bottom-10 -rotate-[14deg]" />
      <Enveloppe className="-right-10 md:-right-6 -bottom-16 md:-bottom-10 rotate-[14deg]" />

      <div className="relative max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
          Rejoignez notre newsletter et restez{" "}
          <span className="font-serif italic font-normal">informé</span>
        </h2>
        <p className="mt-5 max-w-lg mx-auto text-white/85 md:text-lg">
          Conseils santé, actualités et nouveautés de la Clinique Life, directement dans votre boîte mail.
        </p>

        <form className="mt-8 mx-auto max-w-md flex items-center gap-2 rounded-full bg-white/15 border border-white/25 p-1.5 backdrop-blur">
          <input
            type="email"
            required
            placeholder="votre@email.com"
            className="flex-1 min-w-0 bg-transparent px-4 py-2.5 text-white placeholder-white/70 outline-none"
          />
          <button
            type="submit"
            className="inline-flex items-center gap-1.5 rounded-full bg-gray-950 px-5 py-2.5 font-semibold hover:bg-black transition"
          >
            S'inscrire <ArrowUpRight size={16} />
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default Actualites;
