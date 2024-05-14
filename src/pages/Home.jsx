import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ImageBanner from '../components/ImageBanner';

const Home = () => {
    return (
        <div>
            <Navigation />
            <ImageBanner />
            <Footer />
        </div>
    );
};

export default Home;