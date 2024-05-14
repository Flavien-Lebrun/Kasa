import React from 'react';
import kasaLogo from '../assets/kasawhite.svg'

const Footer = () => {
    return (
        <div className='footer'>
            <img src={kasaLogo} alt="Kasa logo" />
            <p>© 2024 Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer;