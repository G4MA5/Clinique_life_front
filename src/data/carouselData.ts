import BuildingImg from "../assets/Acceuil0.webp";
import TeamImg from "../assets/Chirurgie.jpg";
import EquipImg from "../assets/Technologie.jpg";

export type CarouselSlide = {
  id: number;
  type: "image" | "video";
  url: string;
  title: string;
  /** Seconde ligne du titre, affichée en blanc atténué */
  accent?: string;
  description: string;
  isActive?: boolean;
};

/** Slide vidéo fixe, toujours en première position du hero */
export const videoSlide: CarouselSlide = {
  id: 0,
  type: "video",
  url: "/videos/hero-radiologie.mp4",
  title: "Radiologie de pointe.",
  accent: "Des diagnostics précis.",
  description:
    "Un service d'imagerie moderne et une équipe qualifiée pour des résultats fiables, rapidement.",
};

export const initialSlides: CarouselSlide[] = [
  {
    id: 1,
    type: "image",
    url: BuildingImg,
    title: "Votre santé,",
    accent: "notre engagement.",
    description: "Une clinique moderne conçue pour votre confort et votre bien-être.",
  },
  {
    id: 2,
    type: "image",
    url: TeamImg,
    title: "Une équipe experte,",
    accent: "à votre écoute.",
    description: "Des professionnels passionnés, disponibles pour vous 24h/24.",
  },
  {
    id: 3,
    type: "image",
    url: EquipImg,
    title: "Technologie moderne,",
    accent: "soins de confiance.",
    description: "Un plateau technique de dernière génération pour des diagnostics précis.",
  },
];
