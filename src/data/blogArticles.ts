// Articles du blog (contenu repris des anciennes sections de la page Blog)
import BilanImg from "../assets/Medecin.jpg";
import GrossesseImg from "../assets/Enceinte.jpg";
import PediatrieImg from "../assets/Enfant1.jpg";

export type Article = {
  id: string;
  categorie: string;
  titre: string;
  extrait: string;
  auteur: string;
  date: string;
  lecture: string;
  tags: string[];
  image: string;
  lien?: string; // page de lecture, si elle existe
};

export const articles: Article[] = [
  {
    id: "bilans",
    categorie: "Prévention",
    titre: "L'importance des bilans de santé réguliers",
    extrait:
      "Un bilan de santé complet permet de détecter précocement les maladies et d'adopter une approche préventive. Découvrez pourquoi il est essentiel de consulter régulièrement et quels examens privilégier selon votre âge.",
    auteur: "Dr. Konan Marie",
    date: "15 Décembre 2024",
    lecture: "5 min",
    tags: ["Santé", "Prévention", "Bilan"],
    image: BilanImg,
    lien: "/blog/lire",
  },
  {
    id: "grossesse",
    categorie: "Maternité",
    titre: "Suivi de grossesse : nos conseils pour futures mamans",
    extrait:
      "La grossesse est une période unique qui nécessite un suivi médical adapté. Notre équipe d'obstétriciens vous accompagne à chaque étape avec des consultations personnalisées, des échographies de qualité et des conseils nutrition.",
    auteur: "Dr. Aya Diabaté",
    date: "10 Décembre 2024",
    lecture: "7 min",
    tags: ["Grossesse", "Maternité", "Conseils"],
    image: GrossesseImg,
  },
  {
    id: "pediatrie",
    categorie: "Pédiatrie",
    titre: "La santé des enfants : vaccination et suivi pédiatrique",
    extrait:
      "Protéger la santé de vos enfants commence dès les premiers jours. Notre service de pédiatrie offre un programme de vaccination complet et un suivi personnalisé pour assurer la croissance harmonieuse de votre enfant.",
    auteur: "Dr. Kouassi Jean",
    date: "5 Décembre 2024",
    lecture: "6 min",
    tags: ["Enfants", "Vaccination", "Pédiatrie"],
    image: PediatrieImg,
  },
];
