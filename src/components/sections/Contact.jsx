import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const Contact = () => {
    useScrollReveal();

    return (
        <section id="contact" style={{ paddingBottom: '2rem' }}>
            <div className="container">
                <div
                    className="service-card reveal"
                    style={{
                        textAlign: 'center',
                        borderColor: 'rgba(79, 70, 229, 0.4)',
                        background: 'linear-gradient(to bottom right, var(--surface-color), rgba(79, 70, 229, 0.05))'
                    }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Siap Memulai Proyek Anda?</h2>
                    <p style={{ margin: '0 auto 2rem' }}>Mari diskusikan ide Anda bersama kami. Tim ahli Kiminara siap memberikan solusi pengembangan terbaik.</p>
                    <a href="mailto:hello@kiminara.com" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>Hubungi Tim Kami</a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
