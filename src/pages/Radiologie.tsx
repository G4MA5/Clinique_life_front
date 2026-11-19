import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Phone, Maximize2, X, Play, Image as ImageIcon } from "lucide-react";

// Images optimisées
import PosteRadioMains from "../assets/radiologie/poste-radio-mains.webp";
import ManipulatriceRadio from "../assets/radiologie/manipulatrice-radio.webp";
import NegatoscopeRadio from "../assets/radiologie/radiographie-negatoscope.webp";

interface PhotoItem {
  id: number;
  image: string;
  title: string;
  tag: string;
}

const photos: PhotoItem[] = [
  {
    id: 1,
    image: PosteRadioMains,
    title: "Poste de radiographie numérique",
    tag: "Capteur plan haute résolution",
  },
  {
    id: 2,
    image: ManipulatriceRadio,
    title: "Équipe médicale en poste",
    tag: "Manipulatrice qualifiée",
  },
  {
    id: 3,
    image: NegatoscopeRadio,
    title: "Lecture sur négatoscope mural",
    tag: "Analyse immédiate des clichés",
  },
];

const Radiologie: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<PhotoItem | null>(null);

  return (
    <div className="min-h-screen bg-slate-50 text-gray-800 pt-[90px] overflow-x-hidden">
      
      {/* 1. HERO SECTION RESTAURÉE */}
      <section className="relative w-full bg-[linear-gradient(135deg,#0a2540_0%,#155DFC_50%,#00BBA7_100%)] text-white py-14 md:py-20 px-4 overflow-hidden">
        {/* Cercles de fond / Blur esthétique */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Fil d'Ariane & Bouton retour */}
          <div className="flex items-center gap-3 mb-6 text-sm">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white transition-all font-medium border border-white/20 group"
            >
              <ArrowLeft
                size={16}
                className="group-hover:-translate-x-1 transition-transform"
              />
              Retour à nos services
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              {/* Titre Principal */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 leading-tight">
                Plateau de <span className="text-teal-300">Radiologie</span> de Haute Précision
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-white/90 max-w-2xl leading-relaxed">
                À la <strong>Clinique Life</strong>, notre unité de radiologie met à votre disposition
                des équipements numériques de dernière génération pour un diagnostic fiable, rapide et sécurisé,
                avec une réduction maximale de la dose de rayons X.
              </p>
            </div>

            {/* Carte Appel rapide / RDV */}
            <div className="lg:col-span-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-white text-center shadow-xl">
              <h3 className="text-lg font-bold mb-2">Besoin d'un examen urgent ?</h3>
              <p className="text-xs text-white/80 mb-6">
                Accueil immédiat pour les urgences ou prise de rendez-vous en ligne.
              </p>
              <div className="flex flex-col gap-3">
                <Link
                  to="/rdv"
                  className="flex items-center justify-center gap-2 bg-teal-400 hover:bg-teal-300 text-slate-900 font-bold py-3 px-6 rounded-xl transition-all shadow-md hover:scale-[1.02]"
                >
                  <Calendar size={18} /> Prendre Rendez-vous
                </Link>
                <a
                  href="tel:+2250777344859"
                  className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white font-semibold py-2.5 px-6 rounded-xl transition-all border border-white/20"
                >
                  <Phone size={16} /> +225 07 77 34 48 59
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION VIDÉO & PHOTOS (CONTENU PUR ET DIRECT) */}
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        
        {/* VIDÉO */}
        <div className="mb-14 bg-white rounded-3xl p-4 sm:p-6 shadow-md border border-gray-100">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Play size={22} className="text-blue-600 fill-blue-600" />
            Découvrez notre service de radiologie en vidéo
          </h2>

          <div className="relative rounded-2xl overflow-hidden bg-black aspect-video max-h-[540px] w-full mx-auto shadow-inner">
            <video
              src="/videos/radiologie.mp4"
              poster={PosteRadioMains}
              controls
              playsInline
              preload="metadata"
              className="w-full h-full object-contain"
            >
              Votre navigateur ne prend pas en charge la lecture vidéo.
            </video>
          </div>
        </div>

        {/* 3 PHOTOS EN GRILLE */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <ImageIcon size={22} className="text-teal-600" />
            Nos installations en images
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {photos.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 transition-all cursor-pointer flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="flex items-center gap-1.5 bg-white/95 text-gray-900 font-bold px-4 py-2 rounded-full text-xs shadow-md">
                      <Maximize2 size={14} /> Agrandir
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-teal-600 uppercase tracking-wider block mb-1">
                      {item.tag}
                    </span>
                    <h3 className="text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* MODALE D'AGRANDISSEMENT PHOTO */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="bg-white rounded-2xl overflow-hidden shadow-2xl max-w-3xl w-full border border-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-black flex items-center justify-center max-h-[75vh]">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full max-h-[75vh] object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition"
              >
                <X size={18} />
              </button>
            </div>
            <div className="p-4 bg-white flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-600">
                  {selectedImage.tag}
                </span>
                <h3 className="text-base font-bold text-gray-900">
                  {selectedImage.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="text-xs font-semibold text-gray-600 hover:text-gray-900 px-3 py-1.5 rounded-lg border border-gray-200"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Radiologie;
