import React from 'react'
import Navbar from './Contents/Navbar';
import './styles/style.css';
import { DarkModeProvider } from './context/DarkModeContext';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Education from './components/Education';
import Contributors from './components/Contributors';
import References from './components/References';
import Resume from './components/Resume';
import Achievements from './components/Achievements';
import MoreInfo from './components/MoreInfo';
import About from './components/About';
import { FilterDialogueBoxProvider } from './context/FilterDialogboxContext';

const App = () => {
  return (
   <Router>
    <DarkModeProvider>
      <FilterDialogueBoxProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='services' element={<Services/>} />
        <Route path='education' element={<Education/>} />
        <Route path='contributors' element={<Contributors/>} />
        <Route path='references' element={<References/>} />
        <Route path='resume' element={<Resume/>} />
        <Route path='achievements' element={<Achievements/>} />
        <Route path='moreinfo' element={<MoreInfo/>} />
        <Route path='about' element={<About/>} />
      </Routes>
      </FilterDialogueBoxProvider>
    </DarkModeProvider>
   </Router>
  )
}

export default App;
