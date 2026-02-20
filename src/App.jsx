import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ScrollToHashElement from './components/layout/ScrollToHashElement'; // Will create this

function App() {
    return (
        <Router>
            <ScrollToHashElement />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="portfolio" element={<Portfolio />} />
                    <Route path="privacy-policy" element={<PrivacyPolicy />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
