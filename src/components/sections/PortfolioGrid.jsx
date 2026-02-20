import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const PortfolioGrid = ({ items, limit, showHeader = true, showViewAll = false }) => {
    useScrollReveal();

    const displayItems = limit ? items.slice(0, limit) : items;

    return (
        <section id={showHeader ? "portfolio" : "portfolio-full"} style={{ paddingTop: showHeader ? '6rem' : '2rem' }}>
            <div className="container">
                {showHeader && (
                    <div className="section-header reveal">
                        <h2>Karya Terbaik Kami</h2>
                        <p>Beberapa proyek terpilih yang telah kami kembangkan untuk klien-klien luar biasa.</p>
                    </div>
                )}

                <div className="portfolio-grid">
                    {displayItems.map((item, index) => (
                        <div
                            className="portfolio-card reveal"
                            key={item.id}
                            style={{ transitionDelay: `${(index % 3) * 100}ms` }}
                        >
                            <div
                                className="portfolio-img"
                                style={{
                                    backgroundImage: `url('${item.image}')`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover'
                                }}
                            ></div>
                            <div className="portfolio-content">
                                <span className="portfolio-tag">{item.category}</span>
                                <h3>{item.title}</h3>
                                <p>{showHeader ? item.description : item.fullDescription}</p>
                                <div className="portfolio-footer">
                                    {showHeader && (
                                        <Link to="/portfolio" className="portfolio-link">
                                            Lihat Detail <ArrowRight size={16} />
                                        </Link>
                                    )}
                                    <Link to={`/privacy-policy?app=${item.id}`} className="privacy-link">
                                        <Shield size={14} /> {showHeader ? 'Privacy Policy' : 'Kebijakan Privasi'}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {showViewAll && (
                    <div className="view-all-container reveal">
                        <Link to="/portfolio" className="btn btn-outline">Lihat Semua Portofolio</Link>
                    </div>
                )}
            </div>
        </section>
    );
};

export default PortfolioGrid;
