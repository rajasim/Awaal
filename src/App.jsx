import "./App.css";
import { Suspense, lazy } from "react";
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
      <Suspense fallback={<p>Loading ...</p>}>
        <Navbar />
      </Suspense>
      <Suspense fallback={<p>Loading ...</p>}>
        <Videosection />
      </Suspense>
      <Suspense fallback={<p>Loading ...</p>}>
        <AboutUs />
      </Suspense>
      <Suspense fallback={<p>Loading ...</p>}>
        <ScrollingLogosSection />
      </Suspense>
      <Suspense fallback={<p>Loading ...</p>}>
        <Services />
      </Suspense>
      <Suspense fallback={<p>Loading ...</p>}>
        <DarkWebAlert />
      </Suspense>
      <Suspense fallback={<p>Loading ...</p>}>
        <NewsSection />
      </Suspense>
      <Suspense fallback={<p>Loading ...</p>}>
        <Footer />
      </Suspense>
      <Suspense fallback={<p>Loading ...</p>}>
        <VaptSection />
      </Suspense>
      <Suspense fallback={<p>Loading ...</p>}>
        <TestingApproach />
      </Suspense>
      <Suspense fallback={<p>Loading ...</p>}>
        <Featured />
      </Suspense>
      <Suspense fallback={<p>Loading ...</p>}>
        <ProtectionSteps />
      </Suspense>
      <Suspense fallback={<p>Loading ...</p>}>
        <Anicard />
      </Suspense>
      <Suspense fallback={<p>Loading ...</p>}>
        <SecuritySolutions />
      </Suspense>
      <Suspense fallback={<p>Loading ...</p>}>
        <Deliverables />
      </Suspense>
      <Suspense fallback={<p>Loading ...</p>}>
        <DeliverablesGrid />
      </Suspense>
      <Suspense fallback={<p>Loading ...</p>}>
        <SecurityDocumentation />
      </Suspense>
      <Suspense fallback={<p>Loading ...</p>}>
        <SupportedPlatforms />
      </Suspense>
      <Suspense fallback={<p>Loading ...</p>}>
        <UnifiedPlatform />
      </Suspense>
      <Suspense fallback={<p>Loading ...</p>}>
        <SecureOrganization />
      </Suspense>
      <Suspense fallback={<p>Loading ...</p>}>
        <ITInfrastructurePage />
      </Suspense>
      <Suspense fallback={<p>Loading ...</p>}>
        <CbSection />
      </Suspense>
      <Suspense fallback={<p>Loading ...</p>}>
        <Benefits />
      </Suspense>
      <Suspense fallback={<p>Loading ...</p>}>
        <Videofoot />
      </Suspense>
      <Suspense fallback={<p>Loading ...</p>}>
        <NextGen />
      </Suspense>
      <Suspense fallback={<p>Loading ...</p>}>
        <KeyBenefits />
      </Suspense>
      <Suspense fallback={<p>Loading ...</p>}>
        <Optimize />
      </Suspense>
      <Suspense fallback={<p>Loading ...</p>}>
        <TechnologyPlatforms />
      </Suspense>
      <Suspense fallback={<p>Loading ...</p>}>
        <AiHeroSection />
      </Suspense>
      <Suspense fallback={<p>Loading ...</p>}>
        <EfficiencySection />
      </Suspense>
      <Suspense fallback={<p>Loading ...</p>}>
        <Pater />
      </Suspense>
      <Suspense fallback={<p>Loading ...</p>}>
        <Piter />
      </Suspense>
      <Suspense fallback={<p>Loading ...</p>}>
        <Rik />
      </Suspense>
      <Suspense fallback={<p>Loading ...</p>}>
        <Ellish />
      </Suspense>
      <Suspense fallback={<p>Loading ...</p>}>
        <Cloud />
      </Suspense>
    </>
  );
}

export default App;
