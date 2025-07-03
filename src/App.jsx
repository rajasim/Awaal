import "./App.css";
import Navbar from "./Navbar";

import Videosection from "./Videosection";

import AboutUs from "./AboutUs";
import Services from "./Services";
import ScrollingLogosSection from "./ScrollingLogosSection";
import DarkWebAlert from "./DarkWebAlert";
import NewsSection from "./NewsSection";

import Footer from "./Ooter";
import VaptSection from "./VaptSection";
import TestingApproach from "./TestingApproach";
import ProtectionSteps from "./ProtectionSteps";
import Featured from "./Featured";
import SecuritySolutions from "./SecuritySolutions";
import Deliverables from "./Deliverables";
import DeliverablesGrid from "./DeliverablesGrid";
import SecurityDocumentation from "./SecurityDocumentation";
import Anicard from "./Anicard";
import SupportedPlatforms from "./SupportedPlatforms";
import UnifiedPlatform from "./UnifiedPlatform";
import SecureOrganization from "./SecureOrganization";
import ITInfrastructurePage from "./ITInfrastructurePage";
import CbSection from "./CbSection";
import Benefits from "./Benefits";
import Videofoot from "./Videofoot";
import NextGen from "./NextGen";
import KeyBenefits from "./KeyBenefits";
import Optimize from "./Optimize";
import TechnologyPlatforms from "./TechnologyPlatforms";
import AiHeroSection from "./AiHeroSection";
import EfficiencySection from "./EfficiencySection";
import Eater from "./Eater";
import Piter from "./Piter";
import Pik from "./Pik";
import Ellish from "./Ellish";
import Cloud from "./Cloud";
import Innovate from "./Innovate";
import Azure from "./Azure";
import Watrex from "./Watrex";
import UniqueHero from "./UniqueHero";
import Ketra from "./Ketra";
import Ritex from "./Ritex";
import Tifeter from "./Tifeter";
import Rofter from "./Rofter";
import Toll from "./Toll";
import Opatise from "./Opatise";
import Repter from "./Repter";
import Laptor from "./Laptor";
import Ktrox from "./Ktrox";
import Waxter from "./Waxter";
import Migration from "./Migration";
import Atifex from "./Atifex";
import Hefter from "./Hefter";
import Betrex from "./Betrex";
import Hatrex from "./Hatrex";
import Hitoera from "./Hitoera";
import Haftrop from "./Haftrop";
import Harirtox from "./Harirtox";
import Digital from "./Digital";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Videosection />
            <AboutUs />
            <ScrollingLogosSection />
            <Services />
            <DarkWebAlert />
            <Piter />
            <Pik />
            <Ellish />
            <Cloud />
            <Innovate />
            <Azure />
            <Watrex />
            <UniqueHero />
            <Ketra />
            <Ritex />
            <Tifeter />
            <Rofter />
            <Toll />
          </>
        }
      />
      <Route
        path="/vapt"
        element={
          <>
            <Navbar />
            <NewsSection />
            <Footer />
            <VaptSection />
            <TestingApproach />
            <Featured />
            <ProtectionSteps />
            <Anicard />
            <SecuritySolutions />
            <Deliverables />
            <DeliverablesGrid />
            <SecurityDocumentation />
            <SupportedPlatforms />
            <UnifiedPlatform />
            <SecureOrganization />
            <Haftrop />
            <Harirtox />
            <Digital />
          </>
        }
      />
      <Route
        path="/it-infrastructure"
        element={
          <>
            <Navbar />
            <ITInfrastructurePage />
            <CbSection />
            <Benefits />
            <Videofoot />
            <NextGen />
            <KeyBenefits />
            <Optimize />
            <TechnologyPlatforms />
            <AiHeroSection />
            <EfficiencySection />
            <Eater />
            <Opatise />
            <Repter />
            <Laptor />
            <Ktrox />
            <Waxter />
            <Migration />
            <Atifex />
            <Hefter />
            <Betrex />
            <Hatrex />
            <Hitoera />
          </>
        }
      />
    </Routes>
  );
}

export default App;
