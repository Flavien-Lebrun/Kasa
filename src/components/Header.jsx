import React from 'react';
import { NavLink } from "react-router-dom"
import kasaLogo from '../assets/kasalogo.svg'

const Header = () => {
    return (
        <header>
            <img src={kasaLogo} alt="Kasa logo" />
            <div>
                <div>
                    <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <p>Accueil</p>
                    </NavLink>
                    <NavLink to="/about" id="about-button" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <p>A Propos</p>
                    </NavLink>
                </div>
            </div>
        </header>
    );
};

export default Header;