import React from 'react'
import './Style/Style.css'
import Navbar from './Contents/Navbar';
import { DarkModeProvider } from './context/DarkModeContext';

const App = () => {
  return (
  <DarkModeProvider>
      <Navbar/>
  </DarkModeProvider>
  )
}

export default App;
