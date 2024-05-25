import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ImageBanner from '../components/ImageBanner';
import AppartmentCarousel from '../components/AppartmentCarousel';

const Home = () => {
    return (
        <div>
            <Navigation />
            <ImageBanner imgsrc="src/assets/cove.png" opacityValue={0.6} text={"Chez vous, partout et ailleurs"} />
            <AppartmentCarousel />
            <Footer />
        </div>
    );
};

export default Home;