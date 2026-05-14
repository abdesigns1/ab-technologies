import ServicesHero from "../components/services/ServicesHero";
import ServicesProcess from "../components/services/ServicesProcess";
import TechStack from "../components/services/TechStack";
import CallToAction from "../components/CallToAction";
import FullServices from "./FullServices";

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <FullServices />
      <ServicesProcess />
      <TechStack />
      <CallToAction />
    </>
  );
}
