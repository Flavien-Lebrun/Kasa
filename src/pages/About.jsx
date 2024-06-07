import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Infos from '../components/Infos';

const About = () => {
    return (
        <>
            <Banner imgsrc="src/assets/mountains.png" opacityValue={0.3} />
            <Infos />
        </>
    );
};

export default About;