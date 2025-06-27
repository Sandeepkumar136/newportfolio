import React, { useState } from 'react'
import { useDarkMode } from '../context/DarkModeContext'
import { Link, NavLink } from 'react-router-dom';

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
                    <NavLink to="services" className={({isActive})=> isActive ? "nav-item active": "nav-item" } >services</NavLink>
                    <NavLink to="education" className={({isActive})=> isActive ? "nav-item active": "nav-item" }>education</NavLink>
                    <NavLink to="contributors" className={({isActive})=> isActive ? "nav-item active": "nav-item" }>contributors</NavLink>
                    <NavLink to="references" className={({isActive})=> isActive ? "nav-item active": "nav-item" }>projects</NavLink>
                    <NavLink to="moreinfo" className={({isActive})=> isActive ? "nav-item active": "nav-item" }>more information</NavLink>
                </ul>
            </div>
            <div className="rhs-contain">
                <ul className="nav-list-rh">
                    <NavLink to='resume' className={({isActive})=> isActive ? "nav-items-rh active": "nav-items-rh" } >resume</NavLink>
                    <NavLink to='achievements' className={({isActive})=> isActive ? "nav-items-rh active": "nav-items-rh" } >Achievements</NavLink>
                    <NavLink to='about' className={({isActive})=> isActive ? "nav-items-rh active": "nav-items-rh" } >about us</NavLink>
                    <li onClick={toggleDarkMode} className="nav-items-rh-th"><i className={`bx bx-${darkMode ? 'moon': 'sun'}`}></i></li>
                </ul>
                <i onClick={ToggleSidebar} className={`toggle-sidebar bx ${isSidebarOpen ? "bx-x": "bx-menu"}`}></i>
            </div>
        </nav>
      <aside className={`sidebar ${isSidebarOpen ? "open": ''}`}>
        <ul className="side-list">
            <NavLink  onClick={ToggleSidebar} to='services' className={({isActive})=> isActive ? "side-item active": "side-item" }  ><i className="side-icon bx bx-book-content"></i> Services</NavLink>
            <NavLink  onClick={ToggleSidebar} to='education' className={({isActive})=> isActive ? "side-item active": "side-item" }  ><i className="side-icon bx bxs-graduation"></i> education</NavLink>
            <NavLink  onClick={ToggleSidebar} to='contributors' className={({isActive})=> isActive ? "side-item active": "side-item" }  ><i className="side-icon bx bx-group"></i> contributors</NavLink>
            <NavLink  onClick={ToggleSidebar} to='references' className={({isActive})=> isActive ? "side-item active": "side-item" }  ><i className="side-icon bx bx-detail"></i> projects</NavLink>
            <NavLink  onClick={ToggleSidebar} to='resume' className={({isActive})=> isActive ? "side-item active": "side-item" }  ><i className="side-icon bx bxs-file-pdf"></i> resume</NavLink>
            <NavLink  onClick={ToggleSidebar} to='achievements' className={({isActive})=> isActive ? "side-item active": "side-item" }  ><i className="side-icon bx bx-trophy"></i> Achievements</NavLink>
            <NavLink  onClick={ToggleSidebar} to='moreinfo' className={({isActive})=> isActive ? "side-item active": "side-item" }  ><i className="side-icon bx bx-dots-horizontal-rounded"></i> more information</NavLink>
            <NavLink  onClick={ToggleSidebar} to='about' className={({isActive})=> isActive ? "side-item active": "side-item" }  ><i className="side-icon bx bx-user"></i> about us</NavLink>
        </ul>
      </aside>
    </div>
  )
}

export default Navbar;
