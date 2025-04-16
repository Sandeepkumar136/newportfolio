import React, { useState } from 'react'
import { useDarkMode } from '../context/DarkModeContext'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { darkMode, toggleDarkMode } = useDarkMode();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const ToggleSidebar= ()=>{
        setIsSidebarOpen(!isSidebarOpen);
    }
  return (
    <div className='navbar'>
        <nav className="nav">
            <div className="lhs-contain">
                <Link to="/" className="logo-contain">
                    <i className="bx bx-code-alt"></i>
                    CodewithSanju
                </Link>
                <ul className="nav-list">
                    <Link to="services" className="nav-item">services</Link>
                    <Link to="education" className="nav-item">education</Link>
                    <Link to="contributors" className="nav-item">contributors</Link>
                    <Link to="references" className="nav-item">references</Link>
                    <Link to="moreinfo" className="nav-item">more information</Link>
                </ul>
            </div>
            <div className="rhs-contain">
                <ul className="nav-list-rh">
                    <Link to='resume' className="nav-items-rh">resume</Link>
                    <Link to='achievements' className="nav-items-rh">Achievements</Link>
                    <Link to='about' className="nav-items-rh">about us</Link>
                    <li onClick={toggleDarkMode} className="nav-items-rh-th"><i className={`bx bx-${darkMode ? 'moon': 'sun'}`}></i></li>
                </ul>
                <i onClick={ToggleSidebar} className={`toggle-sidebar bx ${isSidebarOpen ? "bx-x": "bx-menu"}`}></i>
            </div>
        </nav>
      <aside className={`sidebar ${isSidebarOpen ? "open": ''}`}>
        <ul className="side-list">
            <Link to='services' className="side-item"><i className="side-icon bx bx-book-content"></i> Services</Link>
            <Link to='education' className="side-item"><i className="side-icon bx bxs-graduation"></i> education</Link>
            <Link to='contributors' className="side-item"><i className="side-icon bx bx-group"></i> contributors</Link>
            <Link to='references' className="side-item"><i className="side-icon bx bx-detail"></i> references</Link>
            <Link to='resume' className="side-item"><i className="side-icon bx bxs-file-pdf"></i> resume</Link>
            <Link to='achievements' className="side-item"><i className="side-icon bx bx-trophy"></i> Achievements</Link>
            <Link to='moreinfo' className="side-item"><i className="side-icon bx bx-dots-horizontal-rounded"></i> more information</Link>
            <Link to='about' className="side-item"><i className="side-icon bx bx-user"></i> about us</Link>
        </ul>
      </aside>
    </div>
  )
}

export default Navbar
