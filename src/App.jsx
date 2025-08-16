import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import LazyLoader from "./LazyLoader";
import ScrollToTop from "./ScrollToTop";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";


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
const Eater = lazy(() => import("./Eater"));
const Piter = lazy(() => import("./Piter"));
const Pik = lazy(() => import("./Pik"));
const Ellish = lazy(() => import("./Ellish"));
const Cloud = lazy(() => import("./Cloud"));
const Innovate = lazy(() => import("./Innovate"));
const Azure = lazy(() => import("./Azure"));
const Watrex = lazy(() => import("./Watrex"));
const UniqueHero = lazy(() => import("./UniqueHero"));
const Ketra = lazy(() => import("./Ketra"));
const Ritex = lazy(() => import("./Ritex"));
const Tifeter = lazy(() => import("./Tifeter"));
const Rofter = lazy(() => import("./Rofter"));
const Toll = lazy(() => import("./Toll"));
const Repter = lazy(() => import("./Repter"));
const Laptor = lazy(() => import("./Laptor"));
const Ktrox = lazy(() => import("./Ktrox"));
const Waxter = lazy(() => import("./Waxter"));
const Migration = lazy(() => import("./Migration"));
const Atifex = lazy(() => import("./Atifex"));
const Hefter = lazy(() => import("./Hefter"));
const Betrex = lazy(() => import("./Betrex"));
const Hatrex = lazy(() => import("./Hatrex"));
const Hitoera = lazy(() => import("./Hitoera"));
const Digital = lazy(() => import("./Digital"));
const Fotrom = lazy(() => import("./Fotrom"));
const Lixs = lazy(() => import("./Lixs"));
const Ioteor = lazy(() => import("./Ioteor"));
const Wiptex = lazy(() => import("./Wiptex"));
const WhyAwwal = lazy(() => import("./WhyAwwal"));
const NewsMain = lazy(() => import("./NewsMain"));
const Azul = lazy(() => import("./Azul"));
const AwwalSecurity = lazy(() => import("./AwwalSecurity"));
const Bitriz = lazy(() => import("./Bitriz"));
const Hotel = lazy(() => import("./Hotel"));
const DubaiBank = lazy(() => import("./DubaiBank"));
const SmartPharmacy = lazy(() => import("./SmartPharmacy"));
const Tranfrom = lazy(() => import("./Tranfrom"));
const Contact = lazy(() => import("./Contactect"));
const Homepageser = lazy(() => import("./Homepageser"));
const CyberGuard = lazy(() => import("./CyberGuard"));
const HomeMain = lazy(() => import("./HomeMain"));
const TechSecurer = lazy(() => import("./TechSecurer"));
const Aibox = lazy(() => import("./Aibox"));
const Approach = lazy(() => import("./Approach"));
const CaseStudy = lazy(() => import("./CaseStudy"));
const Industrial = lazy(() => import("./Industrial"));
const Poteker = lazy(() => import("./Poteker"));
const Hofpt = lazy(() => import("./Hofpt"));
const Waptexr = lazy(() => import("./Waptexr"));
const Form = lazy(() => import("./Form"));
const CloudIndustriel = lazy(() => import("./CloudIndustriel"));
const SoftDevlop = lazy(() => import("./SoftDevlop"));
const Softwarelap = lazy(() => import("./Softwarelap"));
const Cyberlap = lazy(() => import("./Cyberlap"));
const Footermain = lazy(() => import("./Footermain"));
const Blog = lazy(() => import("./Blog"));
const Pater = lazy(() => import("./Pater"));
const Dashboard = lazy(() => import("./Dashboard"));
const AdminBlog = lazy(() => import("./AdminBlog"));
const AdminCase = lazy(() => import("./AdminCase"));
const EfficiencyBoxes = lazy(() => import("./EfficiencyBoxes"));
const SecurityCloud = lazy(() => import("./SecurityCloud"));
const Partner = lazy(() => import("./Partner"));
const Blooogs = lazy(()=>import("./Blooogs"));
const Contactect = lazy(() => import("./Contactect"));
const Adcaseone = lazy(() => import("./Adcaseone"))
const Adcasetwo = lazy(() => import("./Adcasetwo"))
const Adcasethree = lazy(() => import("./Adcasethree"))
const AdBlogone = lazy(() => import("./AdminBlogone"))
const AdBlogtwo = lazy(() => import("./AdminBlogtwo"))
const AdBlogthree = lazy(() => import("./AdminBlogthree"))




function App() {

  const urlpath = useLocation().pathname;
  useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
  }, [urlpath])

  return (
    <Suspense fallback={<div className="page-loading"></div>}>
     <ScrollToTop />
      <Routes>
      
       <Route
  path="/"
  element={
    <>
      <Navbar />
      <LazyLoader Component={HomeMain} />
      <LazyLoader Component={TechSecurer} />
      <LazyLoader Component={Homepageser} />
      <LazyLoader Component={Aibox} />
      <LazyLoader Component={CyberGuard} />
      <LazyLoader Component={Industrial} />
      <LazyLoader Component={DarkWebAlert} />
      <LazyLoader Component={Approach} />
      <LazyLoader Component={CaseStudy} />
      <LazyLoader Component={Poteker} />
      <LazyLoader Component={NewsSection} />
      <LazyLoader Component={Footer} />
      <LazyLoader Component={Partner} />
      <LazyLoader Component={Form}/>
      <LazyLoader Component={Waptexr} />
      <LazyLoader Component={Footermain} />
      <LazyLoader Component={AdminCase} />
      <LazyLoader Component={AdminBlog} />
      <LazyLoader Component={Dashboard} />
      
      <LazyLoader Component={Blooogs}/>
      <Blog/>
    </>
  }
/>

{/* Separate Form Page */}
<Route
  path="/form"
  element={
    <>
      <Navbar />
      <Form />
      
    </>
  }
/>
<Route
    path="/Adcaseone"
    element={
      <>
        <Adcaseone/>
      </>
    }
    />
    <Route
    path="/Adcasetwo"
    element={
      <>
        <Adcasetwo/>
      </>
    }
    />
    <Route
    path="/Adcasethree"
    element={
      <>
        <Adcasethree/>
      </>
    }
    />
    <Route
    path="/AdBlogone"
    element={
      <>
        <AdBlogone/>
      </>
    }
    />
    <Route
    path="/AdBlogtwo"
    element={
      <>
        <AdBlogtwo/>
      </>
    }
    />
    <Route
    path="/AdBlogthree"
    element={
      <>
        <AdBlogthree/>
      </>
    }
    />
<Route
  path="/Contact"
  element={
    <>
      <Navbar />
      <Contactect/>
      <Form />
      <Footermain/>
      
    </>
  }
/>

      <Route
        path="/vapt"
        element={
          <>
            <Navbar />
           
            <LazyLoader Component={Hofpt} />
      <LazyLoader Component={TestingApproach} />
      <LazyLoader Component={ProtectionSteps} />
      <LazyLoader Component={SecuritySolutions} />
      <LazyLoader Component={Anicard} />
      <LazyLoader Component={Featured} />
      <LazyLoader Component={DarkWebAlert} />
      <LazyLoader Component={Deliverables} />
      <LazyLoader Component={DeliverablesGrid} />
      <LazyLoader Component={SecurityDocumentation} />
      <LazyLoader Component={SupportedPlatforms} />
      <LazyLoader Component={UnifiedPlatform} />
      <LazyLoader Component={SecureOrganization} />
      <LazyLoader Component={Footermain} />
            
          </>
        }
      />
      <Route
        path="/AI & Automation Services"
        element={
          <>
          <Navbar/>
       <LazyLoader Component={AiHeroSection} />
<LazyLoader Component={EfficiencySection} />
<LazyLoader Component={EfficiencyBoxes} />
<LazyLoader Component={Pater} />
<LazyLoader Component={Piter} />
<LazyLoader Component={Pik} />
<LazyLoader Component={Footermain} />

       
          </>
          }
      />
      <Route
        path="/why-awwal"
        element={
          <>
          <Navbar/>
        <LazyLoader Component={WhyAwwal} />
<LazyLoader Component={NewsMain} />
<LazyLoader Component={AwwalSecurity} />
<LazyLoader Component={Azure} />
<LazyLoader Component={Bitriz} />
<LazyLoader Component={Hotel} />
<LazyLoader Component={DubaiBank} />
<LazyLoader Component={SmartPharmacy} />
<LazyLoader Component={Tranfrom} />
<LazyLoader Component={Footermain} />


          </>
          }
          />
           <Route
          path="/blog"
          element={
            <>
              <Navbar />
             
                <LazyLoader Component={Blooogs} />
                <LazyLoader Component={Footermain} />
            </>
          }
        />
 <Route
        path="/what-we-do"
        element={
          <>
          <Navbar/>
          <LazyLoader Component={Videosection} />
<LazyLoader Component={Digital} />
<LazyLoader Component={Fotrom} />
<LazyLoader Component={Lixs} />
<LazyLoader Component={Ioteor} />
<LazyLoader Component={Wiptex} />
<LazyLoader Component={Footermain} />

             </>
             }
             />
          
      
      
      
      <Route
        path="/CLOUD"
        element={
          <>
            <Navbar />
           <LazyLoader Component={Ellish} />
<LazyLoader Component={Cloud} />
<LazyLoader Component={SecurityCloud} />
<LazyLoader Component={Innovate} />
<LazyLoader Component={CloudIndustriel} />
<LazyLoader Component={Azure} />
<LazyLoader Component={Watrex} />
<LazyLoader Component={Footermain} />
            
            

            
          </>
        }
      />
      
      
       <Route
        path="/SOFTWARE DEV"
        element={
          <>
          <Navbar/>
          <LazyLoader Component={Repter} />
<LazyLoader Component={SoftDevlop} />
<LazyLoader Component={Softwarelap} />
<LazyLoader Component={Ktrox} />
<LazyLoader Component={Laptor} />
<LazyLoader Component={Waxter} />
<LazyLoader Component={Footermain} />
          </>
          }
      />
       <Route
        path="/IT INFRA"
        element={
          <>
          <Navbar/>
         <LazyLoader Component={ITInfrastructurePage} />
<LazyLoader Component={CbSection} />
<LazyLoader Component={Benefits} />
<LazyLoader Component={NextGen} />
<LazyLoader Component={KeyBenefits} />
<LazyLoader Component={TechnologyPlatforms} />
<LazyLoader Component={Videofoot} />
<LazyLoader Component={Optimize} />
<LazyLoader Component={Footermain} />
          </>
          }
      />
       <Route
        path="/WEBSITE DEV"
        element={
          <>
          <LazyLoader Component={Navbar} />
<LazyLoader Component={UniqueHero} />
<LazyLoader Component={Ketra} />
<LazyLoader Component={Tifeter} />
<LazyLoader Component={Ritex} />
<LazyLoader Component={Rofter} />
<LazyLoader Component={Toll} />
<LazyLoader Component={Footermain} />
          
         
          </>
          }
      />
        <Route
        path="/MIGRATION"
        element={
          <>
         <LazyLoader Component={Navbar} />
<LazyLoader Component={Migration} />
<LazyLoader Component={Atifex} />
<LazyLoader Component={Hefter} />
<LazyLoader Component={Betrex} />
<LazyLoader Component={Hatrex} />
<LazyLoader Component={Hitoera} />
<LazyLoader Component={Tranfrom} />
<LazyLoader Component={Footermain} />
          </>
          }
      />
     

       
      
    </Routes>
     </Suspense>
  );
}

export default App;
