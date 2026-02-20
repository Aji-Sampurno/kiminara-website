import React from 'react';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import PortfolioGrid from '../components/sections/PortfolioGrid';
import Contact from '../components/sections/Contact';
import { portfolios } from '../data';

const Home = () => {
    return (
        <>
            <Hero />
            <Services />
            <PortfolioGrid items={portfolios} limit={2} showHeader={true} showViewAll={true} />
            <Contact />
        </>
    );
};

export default Home;
