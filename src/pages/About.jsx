import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ImageBanner from '../components/ImageBanner';
import Infos from '../components/Infos';

const About = () => {
    return (
        <div>
            <Navigation />
            <ImageBanner imgsrc="src/assets/mountains.png" opacityValue={0.3} />
            <Infos />
            <Footer />
        </div>
    );
};

export default About;