import React from 'react'

const Navbar = () => {
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
                <li className="nav-items-th"><i className="bx bx-sun"></i></li>
            </ul>
            <i className="toggle-nav bx bx-menu"></i>
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
        <aside className="sidebar">
            <ul className="side-contents">services</ul>
            <ul className="side-contents">education</ul>
            <ul className="side-contents">refrences</ul>
            <ul className="side-contents">contributors</ul>
            <ul className="side-contents">resume</ul>
            <ul className="side-contents">awards</ul>
            <ul className="side-contents">certificates</ul>
            <ul className="side-contents">more information</ul>
            <ul className="side-contents">ads</ul>
            <ul className="side-contents">contact</ul>
            <ul className="side-contents">about us</ul>
            <ul className="side-contents">user screen</ul>
        </aside>

    </div>
  )
}

export default Navbar;
