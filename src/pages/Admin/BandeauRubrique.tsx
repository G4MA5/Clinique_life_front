import React from "react";
import Echographe from "../../assets/plateau/echographe.jpg";
import Chambre from "../../assets/plateau/chambre.jpg";
import RadioPro from "../../assets/plateau/radio-pro.jpg";
import NeonatPano from "../../assets/plateau/neonat-pano.jpg";
import RadioPoste from "../../assets/plateau/radio-poste.jpg";
import NeonatSalle from "../../assets/plateau/neonat-salle.jpg";
import NeonatEntree from "../../assets/plateau/neonat-entree.jpg";
import Negatoscope from "../../assets/plateau/negatoscope.jpg";

// Bandeau d'en-tête de chaque rubrique de l'admin : dégradé du site + photo de la clinique + description
type Infos = { description: string; image: string };

const rubriques: Record<string, Infos> = {
  "Rendez-vous": { description: "Suivez, confirmez et organisez les rendez-vous des patients.", image: Echographe },
  Messages: { description: "Lisez et traitez les messages envoyés depuis le formulaire de contact.", image: Chambre },
  Recrutement: { description: "Examinez les candidatures reçues et suivez leur avancement.", image: RadioPro },
  "Gestion contenu": { description: "Mettez à jour les services et les articles publiés sur le site.", image: NeonatPano },
  "Gestion admins": { description: "Gérez les comptes qui ont accès à l'espace d'administration.", image: RadioPoste },
  "Popup d'accueil": { description: "Personnalisez l'annonce qui s'affiche à l'arrivée sur le site.", image: NeonatEntree },
  Équipe: { description: "Mettez à jour l'équipe administrative et les spécialistes.", image: NeonatSalle },
  Carrousel: { description: "Choisissez les visuels et messages du haut de la page d'accueil.", image: Negatoscope },
  Assurances: { description: "Gérez la liste des assurances et partenaires affichés sur le site.", image: Chambre },
  Newsletter: { description: "Rédigez et envoyez vos campagnes aux abonnés de la newsletter.", image: NeonatEntree },
  "Mot de passe": { description: "Modifiez le mot de passe de votre compte administrateur.", image: RadioPoste },
};

const BandeauRubrique: React.FC<{ titre: string; icon: React.ReactNode }> = ({ titre, icon }) => {
  const infos = rubriques[titre];
  if (!infos) return null;
  return (
    <div className="relative mb-6 overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#155DFC_0%,#00BBA7_100%)] text-white">
      {/* Photo à droite, fondue dans le dégradé */}
      <img
        src={infos.image}
        alt=""
        className="absolute inset-y-0 right-0 hidden sm:block w-1/2 h-full object-cover [mask-image:linear-gradient(to_right,transparent,black_55%)]"
      />
      <span className="pointer-events-none absolute -left-16 -bottom-20 w-64 h-64 rounded-full border border-white/20 anim-ring" />
      <span className="pointer-events-none absolute -left-4 -bottom-10 w-40 h-40 rounded-full border border-white/25 anim-ring anim-ring-delay" />

      <div className="relative p-6 md:p-8 sm:max-w-[60%]">
        <span className="grid place-items-center w-12 h-12 rounded-2xl bg-white text-[#155DFC] shadow-lg [&>svg]:w-5 [&>svg]:h-5">{icon}</span>
        <h2 className="mt-5 text-3xl md:text-4xl font-semibold tracking-tight">{titre}</h2>
        <p className="mt-2 text-white/85">{infos.description}</p>
      </div>
    </div>
  );
};

export default BandeauRubrique;
