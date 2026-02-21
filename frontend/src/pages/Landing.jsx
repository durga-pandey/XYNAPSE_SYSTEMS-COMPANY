import HeroSection from "../components/HeroSection";
import Bubble from "../components/Bubble";
import SemiCircle from "../components/SemiCircle";
import Service from "../components/Service";
import SecuredData from "../components/SecuredData";
import Projects from "../components/Projects";
import Client from "../components/Client";

const Landing = () => {
  return (
    <div>
      <HeroSection />
      <Bubble />
      <SemiCircle />
      <Service />
      <SecuredData />
      <Projects />
      <Client/>
    </div>
  );
};

export default Landing;
