// Catalogue des services, regroupés par pôle (contenu repris des anciennes sections de la page Services)
import type { LucideIcon } from "lucide-react";
import { Baby, Stethoscope, Scissors, FlaskConical, ScanLine } from "lucide-react";
import NeonatEntree from "../assets/plateau/neonat-entree.jpg";
import Chambre from "../assets/plateau/chambre.jpg";
import ChirurgieImg from "../assets/Chirurgie.jpg";
import AnalyseImg from "../assets/Analyse.jpg";
import RadioPoste from "../assets/plateau/radio-poste.jpg";

export type ServiceItem = { title: string; description: string };
export type Pole = { id: string; nom: string; accroche: string; icon: LucideIcon; image: string; services: ServiceItem[] };

export const poles: Pole[] = [
  {
    id: "femme-mere-enfant",
    nom: "Femme – Mère – Enfant",
    accroche: "De la grossesse aux premiers pas, un accompagnement complet.",
    icon: Baby,
    image: NeonatEntree,
    services: [
      { title: "La Gynécologie", description: "Consultations et suivi gynécologique complet" },
      { title: "Obstétrique", description: "Suivi de grossesse et accouchement" },
      { title: "Rééducation du périnée", description: "Rééducation post-partum" },
      { title: "Médecine de la Reproduction", description: "Assistance médicale à la procréation" },
      { title: "Pédiatrie", description: "Soins pour enfants et adolescents" },
      { title: "Service de Néonatologie", description: "Soins spécialisés pour nouveau-nés" },
    ],
  },
  {
    id: "medecine",
    nom: "Médecine",
    accroche: "Des spécialistes pour diagnostiquer et traiter chaque pathologie.",
    icon: Stethoscope,
    image: Chambre,
    services: [
      { title: "Service de Médecine Interne", description: "Diagnostic et traitement des pathologies complexes" },
      { title: "Service de neurologie", description: "Prise en charge des troubles neurologiques" },
      { title: "Service de Diabétologie-Endocrinologie", description: "Suivi du diabète et troubles hormonaux" },
      { title: "Service de Cardiologie", description: "Diagnostic et traitement des maladies cardiaques" },
      { title: "Service de Dermatologie et Vénérologie", description: "Soins de la peau et MST" },
      { title: "Service d'Hématologie", description: "Traitement des maladies du sang" },
      { title: "Service d'Oto-Rhino-Laryngologie (ORL)", description: "Spécialiste ORL et troubles auditifs" },
    ],
  },
  {
    id: "chirurgie",
    nom: "Chirurgie",
    accroche: "Un bloc opératoire et une réanimation pour opérer en sécurité.",
    icon: Scissors,
    image: ChirurgieImg,
    services: [
      { title: "Service d'Urologie", description: "Chirurgie des voies urinaires et appareil génital" },
      { title: "Service d'Orthopédie et de Traumatologie", description: "Chirurgie osseuse et articulaire" },
      { title: "Service de Chirurgie Digestive et Viscérale", description: "Chirurgie de l'appareil digestif" },
      { title: "Service de Réanimation", description: "Soins intensifs, surveillance continue et réanimation 24h/24" },
    ],
  },
  {
    id: "laboratoire",
    nom: "Laboratoire",
    accroche: "Des analyses fiables réalisées sur place.",
    icon: FlaskConical,
    image: AnalyseImg,
    services: [
      { title: "Analyses biologiques complètes", description: "Tous types d'analyses médicales" },
      { title: "Bactériologie", description: "Identification des agents infectieux" },
      { title: "Biochimie", description: "Analyses biochimiques spécialisées" },
      { title: "Hématologie", description: "Analyses sanguines" },
    ],
  },
  {
    id: "imagerie",
    nom: "Imagerie médicale",
    accroche: "Radiographie et échographie pour des diagnostics précis.",
    icon: ScanLine,
    image: RadioPoste,
    services: [
      { title: "Radiologie", description: "Examens radiologiques standards" },
      { title: "Échographie", description: "Échographie générale et spécialisée" },
      { title: "Scanner", description: "Tomodensitométrie de pointe" },
      { title: "IRM", description: "Imagerie par résonance magnétique" },
    ],
  },
];
