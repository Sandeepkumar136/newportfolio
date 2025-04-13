import React from 'react'
import Navbar from './Contents/Navbar';
import './styles/style.css';
import { DarkModeProvider } from './context/DarkModeContext';
import HomeTyping from './Contents/HomeTyping';

const App = () => {
  return (
    <>
    <DarkModeProvider>
      <Navbar/>
      <HomeTyping/>
    </DarkModeProvider>
    </>
  )
}

export default App;
