import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Code } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header style={{
            background: isScrolled ? 'rgba(23, 26, 33, 0.85)' : 'rgba(23, 26, 33, 0.7)',
            boxShadow: isScrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none'
        }}>
            <div className="container">
                <nav>
                    <Link to="/" className="logo">
                        <Code size={24} />
                        Kiminara<span>.</span>
                    </Link>

                    <ul className={`nav-links ${isMobileMenuOpen ? 'nav-active' : ''}`}>
                        <li><Link to="/#home" onClick={() => setIsMobileMenuOpen(false)}>Beranda</Link></li>
                        <li><Link to="/#services" onClick={() => setIsMobileMenuOpen(false)}>Layanan</Link></li>
                        <li><Link to="/portfolio" className={location.pathname === '/portfolio' ? 'active' : ''}>Portofolio</Link></li>
                        <li><Link to="/#contact" className="btn btn-primary" onClick={() => setIsMobileMenuOpen(false)}>Hubungi Kami</Link></li>
                    </ul>

                    <div
                        className={`mobile-toggle ${isMobileMenuOpen ? 'toggle-active' : ''}`}
                        onClick={toggleMobileMenu}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
