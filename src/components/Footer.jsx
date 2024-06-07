import React from 'react';
import kasaLogo from '../assets/kasawhite.svg'

const Footer = () => {
    return (
        <footer>
            <img src={kasaLogo} alt="Kasa logo" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;