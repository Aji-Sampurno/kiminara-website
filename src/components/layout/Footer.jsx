import React from 'react';
import { Link } from 'react-router-dom';
import { Code } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ marginTop: '0' }}>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-col">
                        <Link to="/" className="logo" style={{ marginBottom: '1rem' }}>
                            <Code size={24} />
                            Kiminara<span>.</span>
                        </Link>
                        <p>Agensi pengembangan teknologi web dan mobile terpercaya dengan fokus pada modernitas, performa, dan inovasi.</p>
                    </div>
                    <div className="footer-col" style={{ display: 'flex', gap: '4rem' }}>
                        <div>
                            <h4>Navigasi</h4>
                            <ul className="footer-links">
                                <li><Link to="/#home">Beranda</Link></li>
                                <li><Link to="/#services">Layanan</Link></li>
                                <li><Link to="/portfolio">Portofolio</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4>Legal</h4>
                            <ul className="footer-links">
                                <li><Link to="/privacy-policy?app=general">Privacy Policy</Link></li>
                                <li><Link to="#">Terms of Service</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Kiminara Technology. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
