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
import Fotrom from "./Fotrom";
import Lixs from "./Lixs";
import Ioteor from "./Ioteor";
import Wiptex from "./Wiptex";
import WhyAwwal from "./WhyAwwal";
import NewsMain from "./NewsMain";
import Azul from "./Azul";
import AwwalSecurity from "./AwwalSecurity";
import Bitriz from "./Bitriz";
import Hotel from "./Hotel";
import DubaiBank from "./DubaiBank";
import SmartPharmacy from "./SmartPharmacy";
import Tranfrom from "./Tranfrom";
import Contact from "./Contact";
import Homepageser from "./Homepageser";
import CyberGuard from "./CyberGuard";
import HomeMain from "./HomeMain";
import TechSecurer from "./TechSecurer";
import Aibox from "./Aibox";
import Approach from "./Approach";
import CaseStudy from "./CaseStudy";
import Industrial from "./Industrial";
import Poteker from "./Poteker";
import DarkMain from "./DarkMain";
import Hofpt from "./Hofpt";
import Waptexr from "./Waptexr";
import Form from "./Form";
import CloudIndustriel from "./CloudIndustriel";
import SoftDevlop from "./SoftDevlop";
import Softwarelap from "./Softwarelap";
import Cyberlap from "./Cyberlap";
import Footermain from "./Footermain";
import Blog from "./Blog";
import { Routes, Route } from "react-router-dom";
import Pater from "./Pater";
import Dashboard from "./Dashboard";
import AdminBlog from "./AdminBlog";
import AdminCase from "./AdminCase";
import EfficiencyBoxes from "./EfficiencyBoxes";
import SecurityCloud from "./SecurityCloud";


function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <HomeMain/>
            <TechSecurer/>
            <Homepageser/>
            <Aibox/>
            <CyberGuard/>
            <Industrial/>
            <DarkWebAlert />
            <Approach/>
            <CaseStudy/>
            <Poteker/>
             <NewsSection />
             <Footer />
             
            
            
            
            <DarkWebAlert />
            
            
            <Videofoot />
           
            
           
            
            
          
           
            
            <Contact/>
            
            
           
            
            
            
           
            <DarkMain/>
             
             <Waptexr/>
             <Footermain/>
             <AdminCase/>
             <AdminBlog/>
             <Dashboard/>
             <Form/>
             <Blog/>
           
            
          </>
        }
      />
      <Route
        path="/vapt"
        element={
          <>
            <Navbar />
           
             <Hofpt/>
             <TestingApproach />
             <ProtectionSteps />
                     <SecuritySolutions />  
              <Anicard />
               <Featured />
               <DarkWebAlert />
            
           
            
           
           
            <Deliverables />
            <DeliverablesGrid />
            <SecurityDocumentation />
            <SupportedPlatforms />
            <UnifiedPlatform />
            <SecureOrganization />
            
          </>
        }
      />
      <Route
        path="/AI & Automation Services"
        element={
          <>
       <AiHeroSection />
       <EfficiencySection />
       <EfficiencyBoxes/>
       <Pater/>
       <Piter />
        <Pik />
       
       
          </>
          }
      />
      <Route
        path="/why-awwal"
        element={
          <>
         <WhyAwwal/>
         <NewsMain/>
         <AwwalSecurity/>
         <Azure/>
         <Bitriz/>
         <Hotel/>
         <DubaiBank/>
         <SmartPharmacy/>
         <Tranfrom/>

          </>
          }
          />
 <Route
        path="/what-we-do"
        element={
          <>
          <Videosection />
          <Digital/>
           <Fotrom/>
            <Lixs/>
            <Ioteor/>
            <Wiptex/>

             </>
             }
             />
          
      
      
      
      <Route
        path="/CLOUD"
        element={
          <>
            <Navbar />
           <Ellish />
           <Cloud />
            <SecurityCloud />
            <Innovate />
            <CloudIndustriel/>
             <Azure />
             <Watrex />
            
            

            
          </>
        }
      />
      
      
       <Route
        path="/SOFTWARE DEV"
        element={
          <>
          <Repter />
           <SoftDevlop/>
          <Softwarelap/>
           <Ktrox />
           <Laptor />
           <Waxter />
          </>
          }
      />
       <Route
        path="/IT INFRA"
        element={
          <>
          <ITInfrastructurePage/>
          <CbSection/>
         <Benefits />
          <NextGen />
            <KeyBenefits />
            <TechnologyPlatforms/>
            <Videofoot/>
            <Optimize />
          </>
          }
      />
       <Route
        path="/WEBSITE DEV"
        element={
          <>
          <UniqueHero/>
          <Ketra/>
           <Tifeter/>
          <Ritex/>
          <Rofter/>
          <Opatise/>
          <Toll/>
          
         
          </>
          }
      />
        <Route
        path="/MIGRATION"
        element={
          <>
         <Migration />
         <Atifex />
         <Hefter/>
         <Betrex/>
         <Hatrex/>
         <Hitoera/>
         <Tranfrom/>
          </>
          }
      />
       
      
    </Routes>
  );
}

export default App;
