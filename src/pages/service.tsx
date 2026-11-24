import Partie1Service from "../components/services/Partie1_service";
import Partie7_service from "../components/services/Partie7_service";
import Partie9_service from "../components/services/Partie9_service";
import CatalogueServices from "../components/services/CatalogueServices";
import ServicesInstallations from "../components/services/ServicesInstallations";
import FadeIn from "../components/animations/FadeIn";
const Service = () => {
  return (
    <main
      className="
        min-h-screen
        bg-white
        pt-[100px]
        overflow-x-clip
      "
    >
   
      <Partie1Service />

      <CatalogueServices />
      <FadeIn duration={0.8} delay={0.1} direction="up">
        <ServicesInstallations />
      </FadeIn>
      <FadeIn duration={0.8} delay={0.1} direction="up">
        <Partie7_service />
      </FadeIn>
      <FadeIn duration={0.8} delay={0.1} direction="up">
        <Partie9_service />
      </FadeIn>
    </main>
  );
};

export default Service;