import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import AppartmentGrid from '../components/AppartmentGrid';

const Home = () => {
    return (
        <>
            <Header />
            <Banner imgsrc="src/assets/cove.png" opacityValue={0.6} text={"Chez vous, <br>partout et ailleurs"} />
            <AppartmentGrid />
            <Footer />
        </>
    );
};

export default Home;