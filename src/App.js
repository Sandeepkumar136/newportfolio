import React from 'react'
import Navbar from './Contents/Navbar';
import './styles/style.css';
import { DarkModeProvider } from './context/DarkModeContext';

const App = () => {
  return (
    <>
    <DarkModeProvider>
      <Navbar/>
    </DarkModeProvider>
    </>
  )
}

export default App;
