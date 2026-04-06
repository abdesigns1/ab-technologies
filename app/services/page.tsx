import ServicesHero from "../components/services/ServicesHero";
import ServicesGrid from "../components/services/ServicesGrid";
import ServicesProcess from "../components/services/ServicesProcess";
import ServicesCTA from "../components/services/ServicesCTA";
import Services from "../components/Services";
import CallToAction from "../components/CallToAction";

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <Services />
      <ServicesProcess />
      <CallToAction />
    </>
  );
}
