import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const Hero = () => {
    useScrollReveal();

    return (
        <section id="home" className="hero">
            <div className="container">
                <div className="hero-content reveal">
                    <h1>Wujudkan Visi Digital Anda Menjadi Kenyataan</h1>
                    <p>Kiminara hadir untuk membantu bisnis Anda berkembang melalui solusi pengembangan website dan aplikasi mobile yang modern, cepat, dan responsif.</p>
                    <div className="hero-btns">
                        <Link to="/portfolio" className="btn btn-primary">Lihat Portofolio</Link>
                        <Link to="/#services" className="btn btn-outline">Pelajari Layanan</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
