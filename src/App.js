import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Style/Style.css'
import { DarkModeProvider } from './context/DarkModeContext';
import Navbar from './Contents/Navbar';
import Home from './Components/Home';
import Services from './Components/Services';
import Education from './Components/Education';
import Refrences from './Components/Refrences';
import Contributors from './Components/Contributors';
import Resume from './Components/Resume';
import Awards from './Components/Awards';
import Certificates from './Components/Certificates';
import Information from './Components/Information';
import Ads from './Components/Ads';
import Contact from './Components/Contact';
import About from './Components/About';

const App = () => {
  return (
    <Router>
      <DarkModeProvider>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/education" element={<Education/>} />
          <Route path="/refrences" element={<Refrences/>} />
          <Route path="/contributors" element={<Contributors/>} />
          <Route path="/resume" element={<Resume/>} />
          <Route path="/awards" element={<Awards/>} />
          <Route path="/certificates" element={<Certificates/>} />
          <Route path="/information" element={<Information/>} />
          <Route path="/ads" element={<Ads/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </DarkModeProvider>
    </Router>
  )
}

export default App;
