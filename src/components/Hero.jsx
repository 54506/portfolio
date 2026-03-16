import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiDownload, FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const PARTICLES = Array.from({ length: 16 }, (_, i) => ({
    id: i,
    w: Math.random() * 70 + 15,
    h: Math.random() * 70 + 15,
    top: Math.random() * 100,
    left: Math.random() * 100,
    dur: Math.random() * 5 + 4,
    delay: Math.random() * 3,
}));

// All skills that orbit/float around the avatar
const skillTags = [
    { text: 'Python', color: '#4F46E5', offset: { top: '2%', right: '-38px' } },
    { text: 'Django', color: '#06B6D4', offset: { bottom: '18%', left: '-50px' } },
    { text: 'HTML', color: '#F97316', offset: { top: '22%', left: '-42px' } },
    { text: 'CSS', color: '#38BDF8', offset: { top: '-8%', left: '30%' } },
    { text: 'JavaScript', color: '#FBBF24', offset: { bottom: '-4%', right: '10%' } },
    { text: 'React', color: '#22D3EE', offset: { bottom: '38%', right: '-48px' } },
    { text: 'MySQL', color: '#10B981', offset: { bottom: '-6%', left: '20%' } },
    { text: 'PostgreSQL', color: '#8B5CF6', offset: { top: '48%', left: '-60px' } },
];

export default function Hero() {
    const [imgError, setImgError] = useState(false);

    return (
        <section
            id="home"
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                background: 'radial-gradient(ellipse at 22% 50%, rgba(79,70,229,0.13) 0%, transparent 58%), radial-gradient(ellipse at 80% 20%, rgba(6,182,212,0.1) 0%, transparent 58%), #0a0a0f',
                padding: 'clamp(5rem, 10vw, 6rem) clamp(1rem, 4vw, 2rem) 3rem',
            }}
        >
            {/* Grid Pattern */}
            <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                backgroundImage: 'linear-gradient(rgba(79,70,229,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(79,70,229,0.045) 1px, transparent 1px)',
                backgroundSize: '60px 60px',
            }} />

            {/* Floating Particles */}
            {PARTICLES.map(p => (
                <motion.div
                    key={p.id}
                    style={{
                        position: 'absolute',
                        width: p.w, height: p.h,
                        top: `${p.top}%`, left: `${p.left}%`,
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, rgba(79,70,229,0.25), rgba(6,182,212,0.1))',
                        filter: 'blur(1px)',
                        pointerEvents: 'none',
                    }}
                    animate={{ y: [0, -28, 0], x: [0, 12, 0], scale: [1, 1.12, 1], opacity: [0.08, 0.18, 0.08] }}
                    transition={{ duration: p.dur, repeat: Infinity, ease: 'easeInOut', delay: p.delay }}
                />
            ))}

            {/* Glow Orbs */}
            <div style={{ position: 'absolute', width: '550px', height: '550px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(79,70,229,0.18) 0%, transparent 70%)', top: '-120px', left: '-100px', filter: 'blur(60px)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', width: '420px', height: '420px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(6,182,212,0.14) 0%, transparent 70%)', bottom: '-60px', right: '-60px', filter: 'blur(60px)', pointerEvents: 'none' }} />

            {/* Content */}
            <div 
                className="hero-container"
                style={{
                    position: 'relative', zIndex: 1,
                    maxWidth: '1200px', width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 'clamp(2.5rem, 8vw, 5rem)',
                    flexWrap: 'wrap',
                }}
            >
                {/* ─── Left: Text ─── */}
                <div 
                    className="hero-text-col"
                    style={{ flex: '1 1 450px', minWidth: 'min(100%, 320px)' }}
                >
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.6, delay: 0.1 }}
                        style={{ display: 'flex', justifyContent: 'inherit' }}
                    >
                        <span style={{
                            display: 'inline-block',
                            background: 'rgba(79,70,229,0.15)',
                            border: '1px solid rgba(79,70,229,0.35)',
                            borderRadius: '100px',
                            padding: '6px 20px',
                            fontSize: '0.75rem',
                            color: '#06B6D4',
                            fontWeight: 600,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            marginBottom: '1.2rem',
                        }}>
                            👋 Welcome to my Portfolio
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        style={{
                            fontFamily: 'Space Grotesk, sans-serif',
                            fontSize: 'clamp(2rem, 5.5vw, 3.8rem)',
                            fontWeight: 800,
                            lineHeight: 1.12,
                            marginBottom: '0.5rem',
                        }}
                    >
                        Hi, I'm{' '}
                        <span style={{
                            background: 'linear-gradient(135deg, #4F46E5, #06B6D4)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>
                            Subham Sekhar Dash
                        </span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.35 }}
                        style={{
                            fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
                            fontWeight: 600,
                            color: '#06B6D4',
                            marginBottom: '1.25rem',
                            minHeight: '2.4rem',
                            display: 'flex', alignItems: 'center', gap: '8px',
                        }}
                    >

                        <TypeAnimation
                            sequence={[
                                'Software Developer', 2200,
                                'Python Developer', 2200,
                                'Aspiring Full Stack Dev', 2200,
                                'Problem Solver', 2200,
                            ]}
                            repeat={Infinity}
                            cursor
                        />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        style={{
                            color: 'rgba(255,255,255,0.58)',
                            fontSize: 'clamp(0.9rem, 1.8vw, 1rem)',
                            lineHeight: 1.8,
                            maxWidth: '480px',
                            marginBottom: '2rem',
                        }}
                    >
                        Computer Science graduate passionate about building innovative software solutions and learning modern technologies.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.65 }}
                        style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}
                    >
                        <a
                            href="#projects"
                            onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                            className="glow-btn"
                            style={{
                                display: 'flex', alignItems: 'center', gap: '8px',
                                padding: '12px 26px',
                                background: 'linear-gradient(135deg, #4F46E5, #06B6D4)',
                                borderRadius: '100px',
                                color: '#fff',
                                fontWeight: 700,
                                textDecoration: 'none',
                                fontSize: '0.92rem',
                                boxShadow: '0 0 30px rgba(79,70,229,0.4)',
                                transition: 'transform 0.3s, box-shadow 0.3s',
                            }}
                            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(79,70,229,0.6)'; }}
                            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 30px rgba(79,70,229,0.4)'; }}
                        >
                            View Projects <FiArrowRight />
                        </a>

                        {/* ✅ Resume download points to /resume.pdf in public folder */}
                        <a
                            href="/resume.pdf"
                            download="Subham_Sekhar_Dash_Resume.pdf"
                            className="glow-btn"
                            style={{
                                display: 'flex', alignItems: 'center', gap: '8px',
                                padding: '12px 26px',
                                background: 'rgba(255,255,255,0.04)',
                                border: '1.5px solid rgba(79,70,229,0.45)',
                                borderRadius: '100px',
                                color: '#fff',
                                fontWeight: 700,
                                textDecoration: 'none',
                                fontSize: '0.92rem',
                                transition: 'all 0.3s',
                            }}
                            onMouseEnter={e => { e.currentTarget.style.borderColor = '#06B6D4'; e.currentTarget.style.color = '#06B6D4'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(6,182,212,0.25)'; }}
                            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(79,70,229,0.45)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                        >
                            <FiDownload /> Download Resume
                        </a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.85 }}
                        style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}
                    >
                        <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem' }}>Follow me on</span>
                        {[
                            { icon: <FiGithub size={18} />, href: 'https://github.com/54506', label: 'GitHub' },
                            { icon: <FiLinkedin size={18} />, href: 'https://www.linkedin.com/in/subham-dash-1b5887310', label: 'LinkedIn' },
                            { icon: <FiMail size={18} />, href: 'mailto:sdash6239@gmail.com', label: 'Email' },
                        ].map(s => (
                            <a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noreferrer"
                                title={s.label}
                                style={{
                                    width: '42px', height: '42px', borderRadius: '50%',
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: 'rgba(255,255,255,0.65)',
                                    transition: 'all 0.3s',
                                    textDecoration: 'none',
                                }}
                                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(79,70,229,0.25)'; e.currentTarget.style.borderColor = '#4F46E5'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(79,70,229,0.35)'; }}
                                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'rgba(255,255,255,0.65)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                            >
                                {s.icon}
                            </a>
                        ))}
                    </motion.div>
                </div>

                {/* ─── Right: Profile Photo Sphere ─── */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.75 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9, delay: 0.3, type: 'spring', stiffness: 100 }}
                    className="hero-img-col"
                    style={{ flex: '0 0 auto', display: 'flex', justifyContent: 'center', padding: '20px' }}
                >
                    <div
                        className="float-anim"
                        style={{
                            width: 'clamp(220px, 32vw, 320px)',
                            height: 'clamp(220px, 32vw, 320px)',
                            borderRadius: '50%',
                            position: 'relative',
                            flexShrink: 0,
                        }}
                    >
                        {/* Glow ring behind photo */}
                        <div style={{
                            position: 'absolute', inset: '-4px', borderRadius: '50%',
                            background: 'linear-gradient(135deg, #4F46E5, #06B6D4)',
                            zIndex: 0,
                            boxShadow: '0 0 40px rgba(79,70,229,0.5), 0 0 80px rgba(6,182,212,0.2)',
                        }} />

                        {/* Actual photo — fallback to emoji if missing */}
                        {!imgError ? (
                            <img
                                src="/subham_photo.jpeg"
                                alt="Subham Sekhar Dash"
                                onError={() => setImgError(true)}
                                style={{
                                    position: 'absolute', inset: '4px',
                                    width: 'calc(100% - 8px)',
                                    height: 'calc(100% - 8px)',
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                    objectPosition: 'top center',
                                    zIndex: 1,
                                    border: '3px solid rgba(10,10,15,0.8)',
                                }}
                            />
                        ) : (
                            <div style={{
                                position: 'absolute', inset: '4px',
                                width: 'calc(100% - 8px)',
                                height: 'calc(100% - 8px)',
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, rgba(79,70,229,0.3), rgba(6,182,212,0.2))',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: 'clamp(4rem, 10vw, 7rem)',
                                zIndex: 1,
                            }}>
                                👨‍💻
                            </div>
                        )}

                        {/* Orbit ring 1 */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                            style={{
                                position: 'absolute', inset: '-24px', borderRadius: '50%',
                                border: '1px dashed rgba(79,70,229,0.3)',
                                zIndex: 2,
                            }}
                        >
                            <div style={{
                                position: 'absolute', width: '10px', height: '10px',
                                background: '#4F46E5', borderRadius: '50%',
                                top: '-5px', left: '50%', transform: 'translateX(-50%)',
                                boxShadow: '0 0 10px rgba(79,70,229,0.9)',
                            }} />
                        </motion.div>

                        {/* Orbit ring 2 */}
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                            style={{
                                position: 'absolute', inset: '-56px', borderRadius: '50%',
                                border: '1px dashed rgba(6,182,212,0.2)',
                                zIndex: 2,
                            }}
                        >
                            <div style={{
                                position: 'absolute', width: '8px', height: '8px',
                                background: '#06B6D4', borderRadius: '50%',
                                top: '-4px', left: '50%', transform: 'translateX(-50%)',
                                boxShadow: '0 0 8px rgba(6,182,212,0.9)',
                            }} />
                        </motion.div>

                        {/* Floating Tech Tags */}
                        {skillTags.map((tag, i) => (
                            <motion.div
                                key={tag.text}
                                className={`hero-tag hero-tag-${i}`}
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 2.5 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
                                style={{
                                    position: 'absolute',
                                    ...tag.offset,
                                    background: `${tag.color}22`,
                                    border: `1px solid ${tag.color}55`,
                                    borderRadius: '8px',
                                    padding: '5px 11px',
                                    fontSize: '0.7rem',
                                    fontWeight: 700,
                                    color: tag.color,
                                    whiteSpace: 'nowrap',
                                    zIndex: 3,
                                    backdropFilter: 'blur(8px)',
                                    boxShadow: `0 4px 16px ${tag.color}22`,
                                }}
                            >
                                {tag.text}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CSS for responsiveness */}
                <style>{`
                    @media (max-width: 991px) {
                        .hero-container { flex-direction: column !important; text-align: center !important; justify-content: center !important; }
                        .hero-text-col { 
                            flex: 0 0 auto !important; 
                            order: 2; 
                            width: 100%; 
                            display: flex !important; 
                            flex-direction: column !important; 
                            align-items: center !important; 
                            justify-content: center !important;
                            text-align: center !important;
                        }
                        .hero-img-col { order: 1; margin-bottom: 3rem; display: flex !important; justify-content: center !important; width: 100%; }
                        .hero-text-col p { margin-left: auto !important; margin-right: auto !important; }
                        .hero-text-col > div { justify-content: center !important; width: 100%; }
                    }
                    @media (max-width: 768px) {
                        .hero-tag {
                            padding: 4px 8px !important;
                            font-size: 0.6rem !important;
                        }
                    }
                    @media (max-width: 480px) {
                       .hero-tag-0, .hero-tag-2, .hero-tag-5, .hero-tag-7 { display: none !important; }
                       .hero-tag {
                           transform: scale(0.9);
                       }
                       .hero-text-col h1 { font-size: 1.8rem !important; }
                    }
                `}</style>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.8, repeat: Infinity }}
                style={{
                    position: 'absolute', bottom: '2rem', left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
                    color: 'rgba(255,255,255,0.3)', fontSize: '0.7rem', letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                }}
            >
                <span>Scroll</span>
                <div style={{
                    width: '1px', height: '40px',
                    background: 'linear-gradient(180deg, rgba(79,70,229,0.7), transparent)',
                }} />
            </motion.div>
        </section>
    );
}
