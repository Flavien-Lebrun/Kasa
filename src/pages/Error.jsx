import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import NotFound from '../components/NotFound';

const Error = () => {
    return (
        <div>
            <Navigation />
            <NotFound />
            <Footer />
        </div>
    );
};

export default Error;