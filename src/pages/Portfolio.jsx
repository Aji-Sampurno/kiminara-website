import React from 'react';
import { useEffect } from 'react';
import PortfolioGrid from '../components/sections/PortfolioGrid';
import { portfolios } from '../data';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Portfolio = () => {
    useScrollReveal();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            {/* Page Header */}
            <section style={{ paddingTop: '150px', paddingBottom: '3rem' }}>
                <div className="container">
                    <div className="section-header reveal">
                        <h1>Koleksi Karya Kami</h1>
                        <p style={{ margin: '1.5rem auto 0', fontSize: '1.2rem' }}>
                            Kumpulan proyek aplikasi mobile dan sistem website yang telah kami dedikasikan untuk kesuksesan klien kami.
                        </p>
                    </div>
                </div>
            </section>

            {/* Full Portfolio Grid */}
            <PortfolioGrid items={portfolios} showHeader={false} />

            {/* CTA Section */}
            <section style={{ padding: '4rem 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Punya Ide Brilian Selanjutnya?</h3>
                    <a href="/#contact" className="btn btn-primary">Konsultasi Gratis Sekarang</a>
                </div>
            </section>
        </>
    );
};

export default Portfolio;
