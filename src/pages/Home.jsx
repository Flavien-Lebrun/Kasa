import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ImageBanner from '../components/ImageBanner';
import AppartmentCarousel from '../components/AppartmentCarousel';

const Home = () => {
    return (
        <div>
            <Navigation />
            <ImageBanner imgsrc="src/assets/cove.png"/>
            <AppartmentCarousel />
            <Footer />
        </div>
    );
};

export default Home;