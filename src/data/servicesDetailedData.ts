import MaterniteImg from "../assets/Maternite.jpg";
import MedecinImg from "../assets/Medecin.jpg";
import ChirurgieImg from "../assets/Chirurgie.jpg";
import AnalyseImg from "../assets/Analyse.jpg";
import EnceinteImg from "../assets/Enceinte.jpg";
import CardiologieImg from "../assets/Cardiologie.jpg";
import SoinsImg from "../assets/Soins.jpg";
import NeonatSalle from "../assets/plateau/neonat-salle.jpg";
import RadioProImg from "../assets/plateau/radio-pro.jpg";
import EchographeImg from "../assets/plateau/echographe.jpg";
import ReanimationImg from "../assets/reanimation.jpeg";
import HematoImg from "../assets/hemato.jpeg";
import ColoscopieImg from "../assets/coloscopie.jpeg";

export interface ServiceDetail {
  title: string;
  subtitle: string;
  image: string;
  description: string;
  highlights: string[];
}

export const servicesDetailedData: Record<string, ServiceDetail> = {
  // FEMME – MÈRE – ENFANT
  "la-gynecologie": {
    title: "La Gynécologie",
    subtitle: "Suivi et prévention pour la femme",
    image: MaterniteImg,
    description: "La gynécologie à la Clinique LIFE englobe l'ensemble des soins liés à la santé reproductive féminine. Nous assurons le dépistage précoce, les consultations de routine et le traitement des pathologies gynécologiques avec une approche personnalisée et respectueuse.",
    highlights: ["Consultations annuelles", "Dépistage et frottis", "Planification familiale", "Traitement des troubles hormonaux"]
  },
  "obstetrique": {
    title: "Obstétrique",
    subtitle: "Accompagner la vie avec expertise",
    image: EnceinteImg,
    description: "Notre service d'obstétrique vous accompagne de la conception à l'accouchement. Nous offrons un suivi de grossesse rigoureux, des échographies de pointe et un accouchement sécurisé dans un environnement chaleureux pour la mère et l'enfant.",
    highlights: ["Suivi de grossesse", "Échographies obstétricales", "Préparation à la naissance", "Accouchement sécurisé"]
  },
  "reeducation-du-perinee": {
    title: "Rééducation du périnée",
    subtitle: "Restauration du confort post-partum",
    image: MaterniteImg,
    description: "Essentielle après l'accouchement, la rééducation périnéale permet de prévenir les complications futures et de retrouver un confort optimal. Nos kinésithérapeutes spécialisés vous guident à travers des exercices adaptés.",
    highlights: ["Évaluation post-natale", "Techniques manuelles", "Biofeedback", "Suivi personnalisé"]
  },
  "medecine-de-la-reproduction": {
    title: "Médecine de la Reproduction",
    subtitle: "Soutenir vos projets de parentalité",
    image: MaterniteImg,
    description: "Le pôle de médecine de la reproduction aide les couples rencontrant des difficultés de conception. Grâce à des diagnostics précis et des techniques modernes (PMA, insémination), nous maximisons vos chances de réussite.",
    highlights: ["Bilan de fertilité", "Assistance Médicale à la Procréation", "Suivi endocrinologique", "Conseil génétique"]
  },
  "pediatrie": {
    title: "Pédiatrie",
    subtitle: "La santé de vos enfants, notre priorité",
    image: MaterniteImg,
    description: "Le service de pédiatrie assure la croissance et le bien-être de vos enfants, du nouveau-né à l'adolescent. Nous proposons des consultations de suivi, des vaccinations et une prise en charge rapide des maladies infantiles.",
    highlights: ["Suivi de croissance", "Vaccinations", "Urgences pédiatriques", "Conseils nutritionnels"]
  },
  "service-de-neonatologie": {
    title: "Service de Néonatologie",
    subtitle: "Soins intensifs pour les tout-petits",
    image: "/videos/neonatologie.mp4",
    description: "Notre unité de néonatologie accueille les prématurés et les nouveau-nés nécessitant une surveillance particulière. Équipée de couveuses modernes, elle garantit des soins optimaux 24h/24.",
    highlights: ["Soins intensifs néonataux", "Pathologies respiratoires", "Accompagnement des parents", "Surveillance continue"]
  },

  // MÉDECINE
  "service-de-medecine-interne": {
    title: "Service de Médecine Interne",
    subtitle: "Diagnostic global des pathologies complexes",
    image: MedecinImg,
    description: "La médecine interne traite les maladies touchant plusieurs organes ou les cas complexes nécessitant une vision globale du patient. Nos internistes coordonnent les soins pour une prise en charge holistique.",
    highlights: ["Maladies systémiques", "Pathologies infectieuses", "Bilan de santé global", "Coordination spécialisée"]
  },
  "service-de-neurologie": {
    title: "Service de neurologie",
    subtitle: "Expertise du système nerveux",
    image: MedecinImg,
    description: "Prise en charge des troubles du cerveau, de la moelle épinière et des nerfs. Nous traitons les migraines, l'épilepsie, les troubles du sommeil et les maladies neurodégénératives avec précision.",
    highlights: ["EEG et bilans neuro", "Suivi post-AVC", "Troubles du mouvement", "Consultations mémoire"]
  },
  "service-de-cardiologie": {
    title: "Service de Cardiologie",
    subtitle: "Prendre soin de votre cœur",
    image: CardiologieImg,
    description: "Diagnostic et traitement des maladies cardiovasculaires. Notre service dispose d'outils modernes pour l'électrocardiographie et le suivi de l'hypertension et de l'insuffisance cardiaque.",
    highlights: ["ECG et Doppler", "Holter tensionnel", "Épreuve d'effort", "Prévention cardiovasculaire"]
  },
  "service-dophtalmologie": {
    title: "Service d'Ophtalmologie",
    subtitle: "Santé oculaire et soins de la vision",
    image: MedecinImg,
    description: "Le service d'ophtalmologie prend en charge l'ensemble des troubles de la vision et des pathologies oculaires. Nos spécialistes réalisent bilans visuels, dépistage du glaucome, suivi de la rétine et actes de microchirurgie avec des technologies modernes.",
    highlights: ["Bilan de la vue & réfraction", "Dépistage du glaucome & DMLA", "Fond d'œil et imagerie oculaire", "Chirurgie de la cataracte & réfraction"]
  },
  "ophtalmologie": {
    title: "Service d'Ophtalmologie",
    subtitle: "Santé oculaire et soins de la vision",
    image: MedecinImg,
    description: "Le service d'ophtalmologie prend en charge l'ensemble des troubles de la vision et des pathologies oculaires. Nos spécialistes réalisent bilans visuels, dépistage du glaucome, suivi de la rétine et actes de microchirurgie avec des technologies modernes.",
    highlights: ["Bilan de la vue & réfraction", "Dépistage du glaucome & DMLA", "Fond d'œil et imagerie oculaire", "Chirurgie de la cataracte & réfraction"]
  },
  "service-dhematologie": {
    title: "Service d'Hématologie",
    subtitle: "Diagnostic et traitement des maladies du sang",
    image: HematoImg,
    description: "Le service d'hématologie prend en charge l'ensemble des pathologies du sang, de la moelle osseuse et des ganglions lymphatiques. Nous assurons le diagnostic précis et le suivi thérapeutique des anémies, troubles de la coagulation et hémopathies.",
    highlights: ["Bilan hématologique complet et myélogramme", "Prise en charge des anémies et carences sévères", "Diagnostic et suivi des troubles de l'hémostase", "Traitements ambulatoires et protocoles spécialisés"]
  },
  "hematologie": {
    title: "Service d'Hématologie",
    subtitle: "Diagnostic et traitement des maladies du sang",
    image: HematoImg,
    description: "Le service d'hématologie prend en charge l'ensemble des pathologies du sang, de la moelle osseuse et des ganglions lymphatiques. Nous assurons le diagnostic précis et le suivi thérapeutique des anémies, troubles de la coagulation et hémopathies.",
    highlights: ["Bilan hématologique complet et myélogramme", "Prise en charge des anémies et carences sévères", "Diagnostic et suivi des troubles de l'hémostase", "Traitements ambulatoires et protocoles spécialisés"]
  },
  "service-hematologie": {
    title: "Service d'Hématologie",
    subtitle: "Diagnostic et traitement des maladies du sang",
    image: HematoImg,
    description: "Le service d'hématologie prend en charge l'ensemble des pathologies du sang, de la moelle osseuse et des ganglions lymphatiques. Nous assurons le diagnostic précis et le suivi thérapeutique des anémies, troubles de la coagulation et hémopathies.",
    highlights: ["Bilan hématologique complet et myélogramme", "Prise en charge des anémies et carences sévères", "Diagnostic et suivi des troubles de l'hémostase", "Traitements ambulatoires et protocoles spécialisés"]
  },
  "service-de-coloscopie": {
    title: "Service de Coloscopie",
    subtitle: "Exploration endoscopique et dépistage digestif",
    image: ColoscopieImg,
    description: "La coloscopie est un examen médical endoscopique de référence permettant de visualiser la paroi interne du côlon et du rectum avec une précision millimétrique. Elle assure le dépistage précoce, la résection préventive de polypes (polypectomie) et le diagnostic des affections digestives sous anesthésie/sédation sécurisée.",
    highlights: ["Dépistage précoce des polypes et du cancer colorectal", "Examen sous sédation pour un confort absolu sans douleur", "Ablation de polypes en ambulatoire (polypectomie)", "Système vidéo-endoscopique HD de haute précision"]
  },
  "coloscopie": {
    title: "Service de Coloscopie",
    subtitle: "Exploration endoscopique et dépistage digestif",
    image: ColoscopieImg,
    description: "La coloscopie est un examen médical endoscopique de référence permettant de visualiser la paroi interne du côlon et du rectum avec une précision millimétrique. Elle assure le dépistage précoce, la résection préventive de polypes (polypectomie) et le diagnostic des affections digestives sous anesthésie/sédation sécurisée.",
    highlights: ["Dépistage précoce des polypes et du cancer colorectal", "Examen sous sédation pour un confort absolu sans douleur", "Ablation de polypes en ambulatoire (polypectomie)", "Système vidéo-endoscopique HD de haute précision"]
  },
  "service-coloscopie": {
    title: "Service de Coloscopie",
    subtitle: "Exploration endoscopique et dépistage digestif",
    image: ColoscopieImg,
    description: "La coloscopie est un examen médical endoscopique de référence permettant de visualiser la paroi interne du côlon et du rectum avec une précision millimétrique. Elle assure le dépistage précoce, la résection préventive de polypes (polypectomie) et le diagnostic des affections digestives sous anesthésie/sédation sécurisée.",
    highlights: ["Dépistage précoce des polypes et du cancer colorectal", "Examen sous sédation pour un confort absolu sans douleur", "Ablation de polypes en ambulatoire (polypectomie)", "Système vidéo-endoscopique HD de haute précision"]
  },

  // CHIRURGIE
  "service-durologie": {
    title: "Service d'Urologie",
    subtitle: "Santé des voies urinaires",
    image: ChirurgieImg,
    description: "Chirurgie et traitement des pathologies urinaires chez l'homme et la femme. Nous traitons les calculs, les infections chroniques et la santé de l'appareil génital masculin.",
    highlights: ["Lithiase urinaire", "Incontinence", "Andrologie", "Chirurgie rénale"]
  },
  "service-dorthopedie-et-de-traumatologie": {
    title: "Service d'Orthopédie et de Traumatologie",
    subtitle: "Rétablir votre mobilité",
    image: ChirurgieImg,
    description: "Prise en charge des fractures, des entorses et des maladies dégénératives des articulations. Nos chirurgiens orthopédistes interviennent pour restaurer votre autonomie.",
    highlights: ["Traumatologie d'urgence", "Chirurgie prothétique", "Médecine du sport", "Arthroscopie"]
  },
  "service-de-chirurgie-digestive-et-viscerale": {
    title: "Service de Chirurgie Digestive et Viscérale",
    subtitle: "Chirurgie viscérale et cœlioscopie",
    image: ChirurgieImg,
    description: "Interventions chirurgicales de l'appareil digestif, de la vésicule biliaire, hernies et appendicite, réalisées avec des techniques mini-invasives avancées.",
    highlights: ["Chirurgie cœlioscopique", "Chirurgie des hernies", "Vésicule et appendice", "Suivi post-opératoire"]
  },
  "service-de-reanimation": {
    title: "Service de Réanimation",
    subtitle: "Soins intensifs et surveillance continue 24/7",
    image: ReanimationImg,
    description: "Unité de soins intensifs et de réanimation polyvalente assurant la prise en charge des détresses vitales, réanimations médicales et surveillances post-opératoires critiques sous monitorage continu 24h/24.",
    highlights: ["Surveillance hémodynamique 24/7", "Ventilation et assistance respiratoire", "Prise en charge des détresses vitales", "Soins intensifs post-opératoires"]
  },
  "reanimation": {
    title: "Service de Réanimation",
    subtitle: "Soins intensifs et surveillance continue 24/7",
    image: ReanimationImg,
    description: "Unité de soins intensifs et de réanimation polyvalente assurant la prise en charge des détresses vitales, réanimations médicales et surveillances post-opératoires critiques sous monitorage continu 24h/24.",
    highlights: ["Surveillance hémodynamique 24/7", "Ventilation et assistance respiratoire", "Prise en charge des détresses vitales", "Soins intensifs post-opératoires"]
  },

  // LABORATOIRE
  "analyses-biologiques-completes": {
    title: "Analyses biologiques",
    subtitle: "La bio-technologie au service du soin",
    image: AnalyseImg,
    description: "Le laboratoire réalise l'ensemble des analyses sanguines, urinaires et biologiques nécessaires à votre diagnostic. Précision et rapidité sont nos engagements quotidiens.",
    highlights: ["Bilans sanguins", "Hémostase", "Sérologie", "Analyses d'urgence 24/7"]
  },

  // IMAGERIE
  "radiologie": {
    title: "Radiologie",
    subtitle: "Imagerie médicale standard",
    image: "/videos/radiologie.mp4",
    description: "Examens de radiographie conventionnelle pour l'exploration des os et des organes internes. Résultats rapides pour un diagnostic efficace.",
    highlights: ["Radio pulmonaire", "Ostéo-articulaire", "ASP", "Interprétation rapide"]
  },
  "echographie": {
    title: "Échographie",
    subtitle: "Imagerie par ultrasons",
    image: EchographeImg,
    description: "Explorez vos organes en temps réel et sans irradiation. Idéal pour le suivi de grossesse et l'exploration abdominale ou pelvienne.",
    highlights: ["Dopler vasculaire", "Écho abdominale", "Thyroïde et tissus mous", "Gynéco-obstétrique"]
  }
};

// Fonction helper pour obtenir la clé à partir du titre
export const getServiceKey = (title: string): string => {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Enlever les accents
    .replace(/[^\w\s-]/g, "") // Enlever caractères spéciaux
    .trim()
    .replace(/\s+/g, "-"); // Remplacer espaces par tirets
};
