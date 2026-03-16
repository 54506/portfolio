import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiMenu, FiX, FiLayers } from 'react-icons/fi';

const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Achievements', to: 'achievements' },
    { name: 'Contact', to: 'contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav style={{
            position: 'fixed',
            top: scrolled ? '1.5rem' : '1rem',
            left: '50%',
            transform: 'translateX(-50%)',
            width: scrolled ? 'min(90%, 800px)' : 'min(94%, 1100px)',
            zIndex: 1000,
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        }}>
            <div style={{
                background: scrolled ? 'rgba(15, 15, 25, 0.7)' : 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: scrolled ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: scrolled ? '100px' : '20px',
                padding: scrolled ? '0.6rem 1.5rem' : '1rem 2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: scrolled ? '0 20px 40px rgba(0, 0, 0, 0.4)' : 'none',
                transition: 'all 0.4s ease',
            }}>
                {/* Abstract Logo */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}
                >
                    <div style={{
                        width: '38px', height: '38px',
                        background: 'linear-gradient(135deg, #4F46E5, #06B6D4)',
                        borderRadius: '10px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: '#fff',
                        boxShadow: '0 8px 16px rgba(79, 70, 229, 0.3)',
                    }}>
                        <FiLayers size={20} />
                    </div>
                    <span style={{
                        fontFamily: 'Space Grotesk, sans-serif',
                        fontWeight: 800,
                        fontSize: '1.2rem',
                        color: '#fff',
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                    }}>
                        Dev<span style={{ color: '#06B6D4' }}>.</span>
                    </span>
                </motion.div>

                {/* Desktop Menu */}
                <ul style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2rem',
                    listStyle: 'none',
                    margin: 0,
                    padding: 0,
                }} className="hide-xs">
                    {navLinks.map((link) => (
                        <li key={link.to}>
                            <Link
                                to={link.to}
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={800}
                                activeClass="active-nav"
                                style={{
                                    color: 'rgba(255, 255, 255, 0.65)',
                                    fontSize: '0.88rem',
                                    fontWeight: 500,
                                    textDecoration: 'none',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s',
                                    padding: '5px 0',
                                    position: 'relative',
                                }}
                            >
                                {link.name}
                                <motion.span
                                    className="nav-underline"
                                    style={{
                                        position: 'absolute',
                                        bottom: 0, left: 0,
                                        width: 0, height: '2px',
                                        background: 'linear-gradient(90deg, #4F46E5, #06B6D4)',
                                    }}
                                />
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    style={{
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        width: '40px', height: '40px',
                        borderRadius: '10px',
                        display: 'none',
                        alignItems: 'center', justifyContent: 'center',
                        color: '#fff', cursor: 'pointer',
                        transition: 'all 0.3s',
                    }}
                    className="show-xs"
                >
                    {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
                </button>
            </div>

            {/* Mobile Menu Slide-down */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 10, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        style={{
                            background: 'rgba(15, 15, 25, 0.95)',
                            backdropFilter: 'blur(20px)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '24px',
                            padding: '1.5rem',
                            marginTop: '0.5rem',
                            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
                        }}
                    >
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {navLinks.map((link) => (
                                <li key={link.to} style={{ marginBottom: '0.75rem' }}>
                                    <Link
                                        to={link.to}
                                        smooth={true}
                                        offset={-100}
                                        onClick={() => setMobileOpen(false)}
                                        style={{
                                            display: 'block',
                                            padding: '12px 20px',
                                            borderRadius: '12px',
                                            color: '#fff',
                                            background: 'rgba(255,255,255,0.03)',
                                            textDecoration: 'none',
                                            fontSize: '1rem',
                                            fontWeight: 500,
                                        }}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Custom Active Styles */}
            <style>{`
                .active-nav {
                    color: #fff !important;
                }
                .active-nav .nav-underline {
                    width: 100% !important;
                }
                @media (max-width: 768px) {
                    .hide-xs { display: none !important; }
                    .show-xs { display: flex !important; }
                }
            `}</style>
        </nav>
    );
}
