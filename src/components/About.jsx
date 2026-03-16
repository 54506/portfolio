import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiMail, FiPhone, FiBook, FiUser, FiExternalLink } from 'react-icons/fi';

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.7, delay, ease: 'easeOut' },
});

const StatItem = ({ number, label }) => (
    <div style={{ textAlign: 'center' }}>
        <div style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
            fontWeight: 800,
            background: 'linear-gradient(135deg, #4F46E5, #06B6D4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
        }}>{number}</div>
        <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', fontWeight: 500 }}>{label}</div>
    </div>
);

export default function About() {
    return (
        <section id="about" style={{
            padding: 'clamp(4rem, 8vw, 7rem) clamp(1rem, 4vw, 2rem)',
            background: 'radial-gradient(ellipse at 80% 50%, rgba(6,182,212,0.07) 0%, transparent 58%), #0a0a0f',
            position: 'relative',
        }}>
            {/* Background deco */}
            <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                backgroundImage: 'linear-gradient(rgba(79,70,229,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(79,70,229,0.03) 1px, transparent 1px)',
                backgroundSize: '80px 80px',
            }} />

            <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                {/* Section Header */}
                <motion.div {...fadeUp(0)} style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span className="section-badge">About Me</span>
                    <h2 style={{
                        fontFamily: 'Space Grotesk, sans-serif',
                        fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800,
                    }}>
                        Who <span style={{ background: 'linear-gradient(135deg, #4F46E5, #06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Am I?</span>
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.45)', marginTop: '0.75rem', fontSize: '0.95rem' }}>
                        A passionate developer on a mission to build meaningful things
                    </p>
                </motion.div>

                {/* Hero Bio Card */}
                <motion.div
                    {...fadeUp(0.1)}
                    whileHover={{ boxShadow: '0 24px 60px rgba(79,70,229,0.15)' }}
                    className="about-card"
                    style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '24px',
                        padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                        marginBottom: '2rem',
                        display: 'flex',
                        gap: 'clamp(1.5rem, 4vw, 2.5rem)',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        transition: 'box-shadow 0.4s',
                    }}
                >
                    {/* Avatar */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        style={{
                            width: 'clamp(100px, 18vw, 150px)',
                            height: 'clamp(100px, 18vw, 150px)',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #4F46E5, #06B6D4)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
                            flexShrink: 0,
                            boxShadow: '0 0 40px rgba(79,70,229,0.4)',
                        }}
                    >
                        👨‍💻
                    </motion.div>

                    <div style={{ flex: 1, minWidth: 'min(100%, 300px)' }}>
                        <h3 style={{
                            fontFamily: 'Space Grotesk, sans-serif',
                            fontSize: 'clamp(1.2rem, 3vw, 1.7rem)',
                            fontWeight: 700, marginBottom: '4px',
                        }}>Subham Sekhar Dash</h3>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#06B6D4', marginBottom: '1rem', fontSize: '0.88rem' }}>
                            <FiMapPin size={13} /> Berhampur, Odisha, India
                        </div>
                        <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.85, fontSize: '0.92rem', marginBottom: '1.5rem' }}>
                            Seeking an entry-level software development position to apply my technical skills, enhance my problem-solving abilities, and contribute to innovative projects in a dynamic and collaborative environment.
                        </p>

                        {/* Stats */}
                        <div 
                            className="stat-grid"
                            style={{
                                display: 'flex', gap: 'clamp(1.5rem, 4vw, 3rem)',
                                flexWrap: 'wrap',
                                padding: '1.25rem',
                                background: 'rgba(255,255,255,0.03)',
                                border: '1px solid rgba(255,255,255,0.06)',
                                borderRadius: '14px',
                            }}
                        >
                            <StatItem number="4+" label="Projects" />
                            <StatItem number="4+" label="Years Study" />
                            <StatItem number="6+" label="Technologies" />
                            <StatItem number="3" label="Achievements" />
                        </div>
                    </div>
                </motion.div>

                {/* CSS for responsiveness */}
                <style>{`
                    @media (max-width: 640px) {
                        .about-card { justify-content: center !important; text-align: center !important; }
                        .stat-grid { justify-content: center !important; gap: 1.5rem !important; }
                    }
                `}</style>

                {/* Info Cards Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: '1.25rem',
                }}>
                    {/* Personal Info */}
                    <motion.div
                        {...fadeUp(0.15)}
                        whileHover={{ y: -6, boxShadow: '0 20px 50px rgba(79,70,229,0.18)' }}
                        style={{
                            background: 'rgba(255,255,255,0.04)',
                            backdropFilter: 'blur(16px)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            borderRadius: '20px',
                            padding: '1.75rem',
                            transition: 'all 0.4s ease',
                            borderTop: '2px solid rgba(79,70,229,0.5)',
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.2rem' }}>
                            <div style={{
                                width: '40px', height: '40px', borderRadius: '10px',
                                background: 'linear-gradient(135deg, rgba(79,70,229,0.3), rgba(6,182,212,0.15))',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: '#4F46E5',
                            }}>
                                <FiUser size={18} />
                            </div>
                            <h3 style={{ fontWeight: 700, fontSize: '0.95rem', color: '#fff' }}>Personal Info</h3>
                        </div>
                        {[
                            { label: 'Name', value: 'Subham Sekhar Dash' },
                            { label: 'Location', value: 'Berhampur, Odisha' },
                        ].map(item => (
                            <div key={item.label} style={{ marginBottom: '0.6rem' }}>
                                <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{item.label}</span>
                                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.88rem', fontWeight: 500, marginTop: '2px' }}>{item.value}</p>
                            </div>
                        ))}
                    </motion.div>

                    {/* Contact */}
                    <motion.div
                        {...fadeUp(0.25)}
                        whileHover={{ y: -6, boxShadow: '0 20px 50px rgba(6,182,212,0.18)' }}
                        style={{
                            background: 'rgba(255,255,255,0.04)',
                            backdropFilter: 'blur(16px)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            borderRadius: '20px',
                            padding: '1.75rem',
                            transition: 'all 0.4s ease',
                            borderTop: '2px solid rgba(6,182,212,0.5)',
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.2rem' }}>
                            <div style={{
                                width: '40px', height: '40px', borderRadius: '10px',
                                background: 'linear-gradient(135deg, rgba(6,182,212,0.3), rgba(79,70,229,0.15))',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: '#06B6D4',
                            }}>
                                <FiMail size={18} />
                            </div>
                            <h3 style={{ fontWeight: 700, fontSize: '0.95rem', color: '#fff' }}>Contact</h3>
                        </div>
                        <div style={{ marginBottom: '0.7rem' }}>
                            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Email</span>
                            <a href="mailto:sdash6239@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#06B6D4', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500, marginTop: '2px' }}>
                                sdash6239@gmail.com <FiExternalLink size={12} />
                            </a>
                        </div>
                        <div style={{ marginBottom: '0.7rem' }}>
                            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Phone</span>
                            <a href="tel:+918327766246" style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#06B6D4', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500, marginTop: '2px' }}>
                                <FiPhone size={12} /> +91 8327766246
                            </a>
                        </div>
                        <div>
                            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>LinkedIn</span>
                            <a href="https://www.linkedin.com/in/subham-dash-1b5887310" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#06B6D4', textDecoration: 'none', fontSize: '0.82rem', fontWeight: 500, marginTop: '2px', wordBreak: 'break-all' }}>
                                subham-dash-1b5887310 <FiExternalLink size={12} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Education */}
                    <motion.div
                        {...fadeUp(0.35)}
                        whileHover={{ y: -6, boxShadow: '0 20px 50px rgba(139,92,246,0.18)' }}
                        style={{
                            background: 'rgba(255,255,255,0.04)',
                            backdropFilter: 'blur(16px)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            borderRadius: '20px',
                            padding: '1.75rem',
                            transition: 'all 0.4s ease',
                            borderTop: '2px solid rgba(139,92,246,0.5)',
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.2rem' }}>
                            <div style={{
                                width: '40px', height: '40px', borderRadius: '10px',
                                background: 'linear-gradient(135deg, rgba(139,92,246,0.3), rgba(79,70,229,0.15))',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: '#8B5CF6',
                            }}>
                                <FiBook size={18} />
                            </div>
                            <h3 style={{ fontWeight: 700, fontSize: '0.95rem', color: '#fff' }}>Education</h3>
                        </div>
                        <div style={{
                            padding: '1rem',
                            background: 'rgba(139,92,246,0.08)',
                            border: '1px solid rgba(139,92,246,0.2)',
                            borderRadius: '12px',
                        }}>
                            <div style={{ color: '#8B5CF6', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>2021 – 2025</div>
                            <p style={{ color: '#fff', fontWeight: 700, fontSize: '0.9rem', marginBottom: '2px' }}>B.Tech – CSE</p>
                            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.82rem' }}>Kalam Institute of Technology</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
