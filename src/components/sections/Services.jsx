import React from 'react';
import { Smartphone, Layout, PenTool } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const Services = () => {
    useScrollReveal();

    return (
        <section id="services">
            <div className="container">
                <div className="section-header reveal">
                    <h2>Layanan Kami</h2>
                    <p>Solusi teknologi terpadu dengan standar kualitas terbaik untuk mendukung ekosistem digital bisnis Anda.</p>
                </div>

                <div className="services-grid">
                    <div className="service-card reveal">
                        <div className="service-icon">
                            <Smartphone size={32} />
                        </div>
                        <h3>Aplikasi Mobile</h3>
                        <p>Pengembangan aplikasi native maupun cross-platform (iOS & Android) dengan performa tinggi dan desain antarmuka interaktif yang intuitif.</p>
                    </div>

                    <div className="service-card reveal" style={{ transitionDelay: '100ms' }}>
                        <div className="service-icon">
                            <Layout size={32} />
                        </div>
                        <h3>Pengembangan Website</h3>
                        <p>Dari company profile hingga platform berbasis web yang kompleks. Kami membangun website responsif, SEO-friendly, dan cepat.</p>
                    </div>

                    <div className="service-card reveal" style={{ transitionDelay: '200ms' }}>
                        <div className="service-icon">
                            <PenTool size={32} />
                        </div>
                        <h3>UI/UX Design</h3>
                        <p>Rancangan antarmuka yang tidak hanya indah dipandang, tetapi juga fokus pada pengalaman pengguna yang luar biasa (User-Centric).</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
