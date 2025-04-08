import React, { useState } from 'react'
import { useDarkMode } from '../context/DarkModeContext';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const {darkMode, toggleDarkMode} = useDarkMode();
    const ToggleSidebar=() =>{
        setIsSidebarOpen(!isSidebarOpen);
    }
  return (
    <div className='navbar'>
        <nav className="nav">
            <div className="nav-upper-contain">
            <div className="logo-contain">
                <i className="bx bx-code-alt"></i>
                Sandeep Kumar
            </div>
            <ul className="nav-contain">
                <li className="nav-items">resume</li>
                <li className="nav-items">contact</li>
                <li className="nav-items">more information</li>
                <li className="nav-items">about us</li>
                <li onClick={toggleDarkMode} className="nav-items-th"><i className={`bx bx-${darkMode ? "moon": "sun"}`}></i></li>
            </ul>
            <i onClick={ToggleSidebar} className={`toggle-nav bx bx-${isSidebarOpen ? "x": "menu"}`}></i>
            </div>
            <div className="nav-down-content">
                <i className="home-btn bx bxs-home"></i>
                <ul className="n-d-content">
                    <li className="n-d-items">services</li>
                    <li className="n-d-items">education</li>
                    <li className="n-d-items">refrences</li>
                    <li className="n-d-items">awards</li>
                    <li className="n-d-items">certificates</li>
                    <li className="n-d-items">contributors</li>
                    <li className="n-d-items">ads</li>
                </ul>
            </div>
        </nav>
        <aside className={`sidebar ${isSidebarOpen ? "open": ""}`}>
            <ul className="sidebar-contents">
            <li className="side-contents"><i className="sidebar-item-icon bx bxs-briefcase"></i> services</li>
            <li className="side-contents"><i className="sidebar-item-icon bx bxs-graduation"></i> education</li>
            <li className="side-contents"><i className="sidebar-item-icon bx bxs-file"></i> refrences</li>
            <li className="side-contents"><i className="sidebar-item-icon bx bx-group"></i> contributors</li>
            <li className="side-contents"><i className="sidebar-item-icon bx bxs-file-doc"></i> resume</li>
            <li className="side-contents"><i className="sidebar-item-icon bx bxs-trophy"></i> awards</li>
            <li className="side-contents"><i className="sidebar-item-icon bx bxs-medal"></i> certificates</li>
            <li className="side-contents"><i className="sidebar-item-icon bx bx-dots-horizontal-rounded"></i> more information</li>
            <li className="side-contents"><i className="sidebar-item-icon bx bxs-megaphone"></i> ads</li>
            <li className="side-contents"><i className="sidebar-item-icon bx bx-globe"></i> contact</li>
            <li className="side-contents"><i className="sidebar-item-icon bx bx-user"></i> about us</li>
            <li onClick={toggleDarkMode} className="side-contents"><i className={`sidebar-item-icon bx bx-${darkMode ? "moon": "sun"}`}></i> user screen</li>
            </ul>
        </aside>

    </div>
  )
}

export default Navbar;
