import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin, FiHeart, FiArrowUp } from 'react-icons/fi';

const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
];

const socials = [
    { icon: <FiGithub size={18} />, href: 'https://github.com/54506', label: 'GitHub', color: '#4F46E5' },
    { icon: <FiLinkedin size={18} />, href: 'https://www.linkedin.com/in/subham-dash-1b5887310', label: 'LinkedIn', color: '#06B6D4' },
    { icon: <FiMail size={18} />, href: 'mailto:sdash6239@gmail.com', label: 'Email', color: '#8B5CF6' },
];

const contactDetails = [
    { icon: <FiMail size={14} />, text: 'sdash6239@gmail.com', href: 'mailto:sdash6239@gmail.com' },
    { icon: <FiPhone size={14} />, text: '+91 8327766246', href: 'tel:+918327766246' },
    { icon: <FiMapPin size={14} />, text: 'Berhampur, Odisha, India', href: null },
];

export default function Footer() {
    const scrollTo = (href) => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer style={{
            background: 'linear-gradient(180deg, #0a0a0f 0%, #070710 100%)',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            padding: 'clamp(3rem, 6vw, 5rem) clamp(1rem, 4vw, 2rem) 0',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Top BG glow */}
            <div style={{
                position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
                width: '600px', height: '200px',
                background: 'radial-gradient(ellipse, rgba(79,70,229,0.08) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />

            <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                {/* Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: 'clamp(2rem, 4vw, 3.5rem)',
                    marginBottom: '3rem',
                }}>
                    {/* Brand column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ gridColumn: 'span 1' }}
                    >
                        <a
                            href="#home"
                            onClick={e => { e.preventDefault(); scrollTo('#home'); }}
                            style={{ textDecoration: 'none', display: 'inline-block', marginBottom: '1rem' }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <div style={{
                                    width: '32px', height: '32px', borderRadius: '8px',
                                    background: 'linear-gradient(135deg, #4F46E5, #06B6D4)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: '#fff', fontSize: '1rem', fontWeight: 800,
                                }}>
                                    D
                                </div>
                                <span style={{
                                    fontFamily: 'Space Grotesk, sans-serif',
                                    fontWeight: 700,
                                    fontSize: '1.4rem',
                                    background: 'linear-gradient(135deg, #4F46E5, #06B6D4)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}>
                                    Dev.
                                </span>
                            </div>
                        </a>
                        <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', lineHeight: 1.8, maxWidth: '230px', marginBottom: '1.5rem' }}>
                            Software Developer passionate about building innovative solutions and learning modern technologies.
                        </p>

                        {/* Social Links */}
                        <div style={{ display: 'flex', gap: '0.7rem' }}>
                            {socials.map(s => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    title={s.label}
                                    style={{
                                        width: '40px', height: '40px', borderRadius: '50%',
                                        background: `${s.color}15`, border: `1px solid ${s.color}30`,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: s.color, textDecoration: 'none',
                                        transition: 'all 0.3s',
                                    }}
                                    onMouseEnter={e => { e.currentTarget.style.background = `${s.color}30`; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = `0 8px 20px ${s.color}40`; }}
                                    onMouseLeave={e => { e.currentTarget.style.background = `${s.color}15`; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <h4 style={{
                            fontFamily: 'Space Grotesk, sans-serif',
                            fontWeight: 700, fontSize: '0.92rem', color: '#fff',
                            marginBottom: '1.2rem',
                            paddingBottom: '0.6rem',
                            borderBottom: '1px solid rgba(255,255,255,0.07)',
                        }}>
                            Quick Links
                        </h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                            {quickLinks.map(link => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        onClick={e => { e.preventDefault(); scrollTo(link.href); }}
                                        style={{
                                            textDecoration: 'none',
                                            color: 'rgba(255,255,255,0.48)',
                                            fontSize: '0.86rem',
                                            fontWeight: 500,
                                            transition: 'all 0.25s',
                                            display: 'flex', alignItems: 'center', gap: '6px',
                                        }}
                                        onMouseEnter={e => { e.currentTarget.style.color = '#06B6D4'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                                        onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.48)'; e.currentTarget.style.transform = 'translateX(0)'; }}
                                    >
                                        <span style={{ color: '#4F46E5', fontSize: '0.6rem' }}>▶</span>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h4 style={{
                            fontFamily: 'Space Grotesk, sans-serif',
                            fontWeight: 700, fontSize: '0.92rem', color: '#fff',
                            marginBottom: '1.2rem',
                            paddingBottom: '0.6rem',
                            borderBottom: '1px solid rgba(255,255,255,0.07)',
                        }}>
                            Contact
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                            {contactDetails.map((item, i) => (
                                <div
                                    key={i}
                                    style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: item.href ? 'pointer' : 'default' }}
                                    onClick={() => item.href && window.open(item.href, '_self')}
                                >
                                    <div style={{
                                        color: '#4F46E5', flexShrink: 0,
                                        width: '30px', height: '30px', borderRadius: '8px',
                                        background: 'rgba(79,70,229,0.15)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    }}>
                                        {item.icon}
                                    </div>
                                    <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.84rem', wordBreak: 'break-word' }}>
                                        {item.text}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Divider */}
                <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(79,70,229,0.3), rgba(6,182,212,0.3), transparent)', marginBottom: '1.5rem' }} />

                {/* Bottom bar */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    paddingBottom: '1.75rem',
                }}>
                    <p 
                        className="footer-copy"
                        style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '5px', flexWrap: 'wrap' }}
                    >
                        © 2026 Subham Sekhar Dash. Made with
                        <motion.span
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 1.2, repeat: Infinity }}
                            style={{ color: '#EF4444', display: 'inline-flex' }}
                        >
                            <FiHeart size={13} />
                        </motion.span>
                        using React & Framer Motion.
                    </p>

                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="footer-top-btn"
                        style={{
                            display: 'flex', alignItems: 'center', gap: '6px',
                            padding: '8px 18px',
                            background: 'rgba(79,70,229,0.15)',
                            border: '1px solid rgba(79,70,229,0.3)',
                            borderRadius: '100px',
                            color: '#4F46E5',
                            cursor: 'pointer',
                            fontSize: '0.8rem',
                            fontWeight: 600,
                            fontFamily: 'Inter, sans-serif',
                            transition: 'all 0.3s',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(79,70,229,0.3)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'rgba(79,70,229,0.15)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                    >
                        <FiArrowUp size={14} /> Back to Top
                    </button>
                </div>
            </div>

            {/* Responsive CSS */}
            <style>{`
                @media (max-width: 640px) {
                    .footer-copy { justify-content: center !important; text-align: center !important; order: 2; width: 100%; }
                    .footer-top-btn { order: 1; margin: 0 auto 1.5rem !important; }
                }
            `}</style>
        </footer>
    );
}
