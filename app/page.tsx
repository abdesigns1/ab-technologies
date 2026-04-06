import Image from "next/image";
import HeroSection from "./components/HeroSection";
import TrustedBy from "./components/TrustedBy";
import GlobalStats from "./components/GlobalStats";
import WhoWeAre from "./components/WhoWeAre";
import CallToAction from "./components/CallToAction";
import Testimonials from "./components/Testimonials";
import OurWorks from "./components/OurWorks";
import Services from "./components/Services";
import FAQ from "./components/FAQ";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <div>
      <main>
        <HeroSection />

        <WhoWeAre />
        <Services />
        <ProjectsSection />
        <GlobalStats />
        <CallToAction />
        <Testimonials />
        <FAQ />
      </main>
    </div>
  );
}
