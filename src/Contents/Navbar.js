import React, { useState } from 'react'
import { useDarkMode } from '../context/DarkModeContext'

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
                <div className="logo-contain">
                    <i className="bx bx-code-alt"></i>
                    CodewithSanju
                </div>
                <ul className="nav-list">
                    <li className="nav-item">services</li>
                    <li className="nav-item">education</li>
                    <li className="nav-item">contributors</li>
                    <li className="nav-item">references</li>
                    <li className="nav-item">more information</li>
                </ul>
            </div>
            <div className="rhs-contain">
                <ul className="nav-list-rh">
                    <li className="nav-items-rh">resume</li>
                    <li className="nav-items-rh">Achievements</li>
                    <li className="nav-items-rh">about us</li>
                    <li onClick={toggleDarkMode} className="nav-items-rh-th"><i className={`bx bx-${darkMode ? 'moon': 'sun'}`}></i></li>
                </ul>
                <i onClick={ToggleSidebar} className={`toggle-sidebar bx ${isSidebarOpen ? "bx-x": "bx-menu"}`}></i>
            </div>
        </nav>
      <aside className={`sidebar ${isSidebarOpen ? "open": ''}`}>
        <ul className="side-list">
            <li className="side-item"><i className="side-icon bx bx-book-content"></i> Services</li>
            <li className="side-item"><i className="side-icon bx bxs-graduation"></i> education</li>
            <li className="side-item"><i className="side-icon bx bx-group"></i> contributors</li>
            <li className="side-item"><i className="side-icon bx bx-detail"></i> references</li>
            <li className="side-item"><i className="side-icon bx bxs-file-pdf"></i> resume</li>
            <li className="side-item"><i className="side-icon bx bx-trophy"></i> Achievements</li>
            <li className="side-item"><i className="side-icon bx bx-dots-horizontal-rounded"></i> more information</li>
            <li className="side-item"><i className="side-icon bx bx-user"></i> about us</li>
        </ul>
      </aside>
    </div>
  )
}

export default Navbar
