import HeroSection from "./components/HeroSection";
import WhoWeAre from "./components/WhoWeAre";
import CallToAction from "./components/CallToAction";
import Testimonials from "./components/Testimonials";
import Services from "./components/Services";
import FAQ from "./components/FAQ";
import ProjectsSection from "./components/ProjectsSection";
import CounterSection from "./components/CounterSection";

export default function Home() {
  return (
    <div>
      <main>
        <HeroSection />
        <WhoWeAre />
        <Services />
        <ProjectsSection />
        <CounterSection />
        <CallToAction />
        <Testimonials />
        <FAQ />
      </main>
    </div>
  );
}
