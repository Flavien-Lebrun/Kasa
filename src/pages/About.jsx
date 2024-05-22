import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ImageBanner from '../components/ImageBanner';

const About = () => {
    return (
        <div>
            <Navigation />
            <h1>A propos</h1>
            <br />
            <ImageBanner imgsrc="src/assets/mountains.png"/>
            <Footer />
        </div>
    );
};

export default About;