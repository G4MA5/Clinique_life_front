import Actualites from "../components/accueils/Actualites";
import Avantages from "../components/accueils/Avantages";
import Banniere from "../components/accueils/Banniere";
import Parcours from "../components/accueils/Parcour";
import Equipements from "../components/accueils/Equipements";
import Presentation from "../components/accueils/Presentation";
import PlateauTechnique from "../components/accueils/PlateauTechnique";
import ApercuEquipe from "../components/accueils/ApercuEquipe";
import ApercuBlog from "../components/accueils/ApercuBlog";
// import Specialites from "../components/accueils/Specialites";
import Paiements from "../components/accueils/Paiements";
import CarouselHero from "../components/accueils/CarouselHero";
import AnnouncementPopup from "../components/accueils/AnnouncementPopup";
import FadeIn from "../components/animations/FadeIn";

const Accueil: React.FC = () => {
  return (
    <div className="bg-[#D2DEEA] w-full overflow-hidden">
      <AnnouncementPopup buttonLink="/blog" />

      {/* HERO SECTION - CAROUSEL */}
      <section className="relative w-full">
        <CarouselHero />
      </section>

      {/* AVANTAGES */}
      <FadeIn>
        <Avantages />
      </FadeIn>

      {/* PARCOURS */}
      <FadeIn>
        <Parcours />
      </FadeIn>

      {/* PRÉSENTATION + CHIFFRES */}
      <FadeIn>
        <Presentation />
      </FadeIn>

      {/* 
        ===================================================================
        SECTION SPÉCIALITÉS (Masquée - grille des spécialités & services)
        Composant conservé dans : src/components/accueils/Specialites.tsx
        Pour la réafficher, décommentez le bloc ci-dessous :
        ===================================================================
      */}
      {/* 
      <FadeIn>
        <Specialites />
      </FadeIn> 
      */}

      {/* PLATEAU TECHNIQUE */}
      <FadeIn>
        <PlateauTechnique />
      </FadeIn>

      {/* ÉQUIPEMENTS */}
      <FadeIn>
        <Equipements />
      </FadeIn>

      {/* PRATICIENS */}
      <FadeIn>
        <ApercuEquipe />
      </FadeIn>

      {/* PAIEMENTS */}
      <Paiements />

      {/* BLOG */}
      <FadeIn>
        <ApercuBlog />
      </FadeIn>

      {/* ACTUALITES */}
      <FadeIn>
        <Actualites />
      </FadeIn>

      {/* BANNIERE */}
      <FadeIn>
        <Banniere />
      </FadeIn>

    </div>
  );
};

export default Accueil;