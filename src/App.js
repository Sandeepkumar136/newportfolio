import React, { useRef } from "react";
import Navbar from "./Contents/Navbar";
import "./styles/style.css";
import { DarkModeProvider } from "./context/DarkModeContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Services from "./components/Services";
import Education from "./components/Education";
import Contributors from "./components/Contributors";
import References from "./components/References";
import Resume from "./components/Resume";
import Achievements from "./components/Achievements";
import MoreInfo from "./components/MoreInfo";
import About from "./components/About";
import { FilterDialogueBoxProvider } from "./context/FilterDialogboxContext";
import { LangDialogueboxProvider } from "./context/LangDialogueboxContext";
import Footer from "./Footer";
import { AlertDialogueProvider } from "./context/AlertDialogueContext";

const App = () => {
  const missionRef = useRef(null);
  const ourServicesRef = useRef(null);
  const forDevRef = useRef(null);
  const termsRef = useRef(null);
  const faqRef = useRef(null);
  const privacyRef = useRef(null);

  const scrollToMissons = () => {
    missionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToServices = () => {
    ourServicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToFordev = () => {
    forDevRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToTerms = () => {
    termsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToFaq = () => {
    faqRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToPrivacy = () => {
    privacyRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Router>
      <DarkModeProvider>
        <FilterDialogueBoxProvider>
          <LangDialogueboxProvider>
            <AlertDialogueProvider>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About missionRef={missionRef} />} />
                <Route path="services" element={<Services />} />
                <Route path="education" element={<Education />} />
                <Route path="contributors" element={<Contributors />} />
                <Route path="references" element={<References />} />
                <Route path="resume" element={<Resume />} />
                <Route path="achievements" element={<Achievements />} />
                <Route path="moreinfo" element={<MoreInfo />} />
                {/* <Route path='footer' element={<Footer/>} /> */}
              </Routes>
              <Footer ourMissonClick={scrollToMissons} forDevClick={scrollToFordev} ourServicesClick={scrollToServices} termsClick={scrollToTerms} faqClick={scrollToFaq} privacyClick={scrollToPrivacy} />
            </AlertDialogueProvider>
          </LangDialogueboxProvider>
        </FilterDialogueBoxProvider>
      </DarkModeProvider>
    </Router>
  );
};

export default App;
