import "./App.css";
import { lazy } from "react";
import LazyLoader from "./LazyLoader";
const Navbar = lazy(() => import("./Navbar"));
const Videosection = lazy(() => import("./Videosection"));
const AboutUs = lazy(() => import("./AboutUs"));
const Services = lazy(() => import("./Services"));
const ScrollingLogosSection = lazy(() => import("./ScrollingLogosSection"));
const DarkWebAlert = lazy(() => import("./DarkWebAlert"));
const NewsSection = lazy(() => import("./NewsSection"));
const Footer = lazy(() => import("./Ooter"));
const VaptSection = lazy(() => import("./VaptSection"));
const TestingApproach = lazy(() => import("./TestingApproach"));
const ProtectionSteps = lazy(() => import("./ProtectionSteps"));
const Featured = lazy(() => import("./Featured"));
const SecuritySolutions = lazy(() => import("./SecuritySolutions"));
const Deliverables = lazy(() => import("./Deliverables"));
const DeliverablesGrid = lazy(() => import("./DeliverablesGrid"));
const SecurityDocumentation = lazy(() => import("./SecurityDocumentation"));
const Anicard = lazy(() => import("./Anicard"));
const SupportedPlatforms = lazy(() => import("./SupportedPlatforms"));
const UnifiedPlatform = lazy(() => import("./UnifiedPlatform"));
const SecureOrganization = lazy(() => import("./SecureOrganization"));
const ITInfrastructurePage = lazy(() => import("./ITInfrastructurePage"));
const CbSection = lazy(() => import("./CbSection"));
const Benefits = lazy(() => import("./Benefits"));
const Videofoot = lazy(() => import("./Videofoot"));
const NextGen = lazy(() => import("./NextGen"));
const KeyBenefits = lazy(() => import("./KeyBenefits"));
const Optimize = lazy(() => import("./Optimize"));
const TechnologyPlatforms = lazy(() => import("./TechnologyPlatforms"));
const AiHeroSection = lazy(() => import("./AiHeroSection"));
const EfficiencySection = lazy(() => import("./EfficiencySection"));
const Pater = lazy(() => import("./Pater"));
const Piter = lazy(() => import("./Piter"));
const Rik = lazy(() => import("./rik"));
const Ellish = lazy(() => import("./Ellish"));
const Cloud = lazy(() => import("./Cloud"));

function App() {
  return (
    <>
      <LazyLoader Component={Navbar} />
      <LazyLoader Component={Videosection} />
      <LazyLoader Component={AboutUs} />
      <LazyLoader Component={ScrollingLogosSection} />
      <LazyLoader Component={Services} />
      <LazyLoader Component={DarkWebAlert} />
      <LazyLoader Component={NewsSection} />
      <LazyLoader Component={Footer} />
      <LazyLoader Component={VaptSection} />
      <LazyLoader Component={TestingApproach} />
      <LazyLoader Component={Featured} />
      <LazyLoader Component={ProtectionSteps} />
      <LazyLoader Component={Anicard} />
      <LazyLoader Component={SecuritySolutions} />
      <LazyLoader Component={Deliverables} />
      <LazyLoader Component={DeliverablesGrid} />
      <LazyLoader Component={SecurityDocumentation} />
      <LazyLoader Component={SupportedPlatforms} />
      <LazyLoader Component={UnifiedPlatform} />
      <LazyLoader Component={SecureOrganization} />
      <LazyLoader Component={ITInfrastructurePage} />
      <LazyLoader Component={CbSection} />
      <LazyLoader Component={Benefits} />
      <LazyLoader Component={Videofoot} />
      <LazyLoader Component={NextGen} />
      <LazyLoader Component={KeyBenefits} />
      <LazyLoader Component={Optimize} />
      <LazyLoader Component={TechnologyPlatforms} />
      <LazyLoader Component={AiHeroSection} />
      <LazyLoader Component={EfficiencySection} />
      <LazyLoader Component={Pater} />
      <LazyLoader Component={Piter} />
      <LazyLoader Component={Rik} />
      <LazyLoader Component={Ellish} />
      <LazyLoader Component={Cloud} />
    </>
  );
}

export default App;
