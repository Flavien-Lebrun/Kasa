import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ImageBanner from '../components/ImageBanner';
import AppartmentGrid from '../components/AppartmentGrid';

const Home = () => {
    return (
        <div>
            <Navigation />
            <ImageBanner imgsrc="src/assets/cove.png" opacityValue={0.6} text={"Chez vous, partout et ailleurs"} />
            <AppartmentGrid />
            <Footer />
        </div>
    );
};

export default Home;