import React from 'react';
import { NavLink } from "react-router-dom"
import kasaLogo from '../assets/kasalogo.svg'

const Navigation = () => {
    return (
        <div className="navigation">
            <img src={kasaLogo} alt="Kasa logo" />
            <div>
                <ul>
                    <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li>Accueil</li>
                    </NavLink>
                    <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li>A Propos</li>
                    </NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Navigation;