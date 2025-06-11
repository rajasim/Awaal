
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


function App() {
  return (
    <div>
      <Navbar />
       <div style={{ width: '100vw', height: '100vh' }}>
       <Videosection/>
     
      <AboutUs/>
       <ScrollingLogosSection/>
      <Services/>
      <DarkWebAlert/>
     
      <NewsSection/>
      <Footer/>
      <VaptSection/>


    </div>
    </div>
  );
}

export default App;
