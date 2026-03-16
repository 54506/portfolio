import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';

const projects = [
    {
        id: 1,
        title: 'VOX – Voice Assistant',
        icon: '🎙️',
        badge: 'AI / Python',
        description:
            'A voice-controlled virtual assistant similar to Siri/Alexa built with Python. Features speech recognition, text-to-speech, and intelligent voice-command processing for opening apps, web search, weather updates, and time-based greetings.',
        tags: ['Python', 'SpeechRecognition', 'pyttsx3', 'Wikipedia'],
        github: 'https://github.com/54506',
        color: '#4F46E5',
        features: ['Speech Recognition', 'Text-to-Speech', 'App Control', 'Weather Updates'],
    },
    {
        id: 2,
        title: 'TO-DO List Web App',
        icon: '✅',
        badge: 'Web App',
        description:
            'A fully responsive TO-DO List application with real-time task management. Built with vanilla JS using DOM manipulation, event-driven architecture and dynamic UI updates for a seamless, modern task management experience.',
        tags: ['HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/54506',
        color: '#06B6D4',
        features: ['Add/Delete Tasks', 'Mark Complete', 'Local Storage', 'Responsive UI'],
    },
    {
        id: 3,
        title: 'OPMW – One Place Multi Work',
        icon: '📊',
        badge: 'Full Stack',
        description:
            'A full-featured Online Project Management Web app built with Django to streamline team collaboration. Includes project dashboards, task assignment, timeline tracking, progress visualization, and team communication tools.',
        tags: ['Python', 'Django', 'HTML', 'CSS', 'JavaScript', 'SQL'],
        github: 'https://github.com/54506',
        color: '#8B5CF6',
        features: ['Project Dashboard', 'Task Assignment', 'Timeline Tracking', 'Team Tools'],
    },
    {
        id: 4,
        title: 'ShopSphere – E-Commerce Platform',
        icon: '🛒',
        badge: 'E-Commerce',
        description:
            'A modern e-commerce platform with a clean UI and smooth user experience. Includes product listings, shopping cart, user authentication, order management, smart product search, filtering, and secure checkout.',
        tags: ['Python', 'Django', 'Bootstrap', 'SQL', 'JavaScript'],
        github: 'https://github.com/54506',
        color: '#10B981',
        features: ['Product Listings', 'Shopping Cart', 'User Auth', 'Order Management'],
    },
];

function ProjectCard({ project, index }) {
    const [hovered, setHovered] = useState(false);
    const [expanded, setExpanded] = useState(false);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(18px)',
                WebkitBackdropFilter: 'blur(18px)',
                border: `1px solid ${hovered ? project.color + '55' : 'rgba(255,255,255,0.07)'}`,
                borderRadius: '24px',
                overflow: 'hidden',
                transition: 'all 0.4s ease',
                transform: hovered ? 'translateY(-10px) scale(1.01)' : 'translateY(0) scale(1)',
                boxShadow: hovered ? `0 30px 70px ${project.color}2a` : '0 4px 20px rgba(0,0,0,0.3)',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {/* Header Strip */}
            <div style={{
                background: `linear-gradient(135deg, ${project.color}25, ${project.color}08)`,
                borderBottom: `1px solid ${project.color}22`,
                padding: '1.75rem 1.75rem 1.5rem',
                position: 'relative',
                overflow: 'hidden',
            }}>
                {/* Decoration orb */}
                <motion.div
                    animate={hovered ? { scale: 1.4, opacity: 1 } : { scale: 1, opacity: 0.5 }}
                    transition={{ duration: 0.4 }}
                    style={{
                        position: 'absolute', right: '-15px', top: '-15px',
                        width: '90px', height: '90px',
                        background: `radial-gradient(circle, ${project.color}35, transparent 70%)`,
                        borderRadius: '50%',
                        pointerEvents: 'none',
                    }}
                />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <div>
                        <motion.div
                            animate={hovered ? { scale: 1.1, rotate: [0, -5, 5, 0] } : { scale: 1, rotate: 0 }}
                            transition={{ duration: 0.4 }}
                            style={{
                                width: '56px', height: '56px', borderRadius: '14px',
                                background: `linear-gradient(135deg, ${project.color}35, ${project.color}15)`,
                                border: `1px solid ${project.color}44`,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: '1.7rem', marginBottom: '0.9rem',
                            }}
                        >
                            {project.icon}
                        </motion.div>
                        <h3 style={{
                            fontFamily: 'Space Grotesk, sans-serif',
                            fontWeight: 700, fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                            color: '#fff',
                        }}>
                            {project.title}
                        </h3>
                    </div>
                    <span style={{
                        padding: '5px 12px', borderRadius: '100px',
                        background: `${project.color}22`,
                        border: `1px solid ${project.color}44`,
                        color: project.color, fontSize: '0.7rem', fontWeight: 700,
                        whiteSpace: 'nowrap', flexShrink: 0,
                    }}>
                        {project.badge}
                    </span>
                </div>
            </div>

            {/* Body */}
            <div style={{ padding: '1.5rem 1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <p style={{
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: '0.86rem',
                    lineHeight: 1.8,
                    marginBottom: '1.25rem',
                    flex: expanded ? 'unset' : 1,
                }}>
                    {project.description}
                </p>

                {/* Features */}
                <AnimatePresence>
                    {hovered && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            style={{ marginBottom: '1.25rem', overflow: 'hidden' }}
                        >
                            <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                                Key Features
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                {project.features.map(f => (
                                    <span key={f} style={{
                                        padding: '4px 10px', borderRadius: '6px',
                                        background: `${project.color}15`,
                                        border: `1px solid ${project.color}28`,
                                        color: project.color, fontSize: '0.7rem', fontWeight: 600,
                                    }}>
                                        ✓ {f}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1.4rem' }}>
                    {project.tags.map(tag => (
                        <span key={tag} style={{
                            padding: '4px 11px', borderRadius: '100px',
                            background: `${project.color}14`,
                            border: `1px solid ${project.color}2e`,
                            color: project.color, fontSize: '0.72rem', fontWeight: 600,
                        }}>
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Action Buttons */}
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px',
                            padding: '10px 0',
                            flex: 1,
                            background: `linear-gradient(135deg, ${project.color}, ${project.color}cc)`,
                            borderRadius: '100px',
                            color: '#fff',
                            textDecoration: 'none',
                            fontSize: '0.82rem',
                            fontWeight: 600,
                            transition: 'all 0.3s',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.boxShadow = `0 8px 24px ${project.color}55`; }}
                        onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none'; }}
                    >
                        <FiGithub size={15} /> GitHub
                    </a>
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px',
                            padding: '10px 0',
                            flex: 1,
                            background: 'transparent',
                            border: `1px solid ${project.color}40`,
                            borderRadius: '100px',
                            color: project.color,
                            textDecoration: 'none',
                            fontSize: '0.82rem',
                            fontWeight: 600,
                            transition: 'all 0.3s',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = `${project.color}18`; e.currentTarget.style.borderColor = `${project.color}80`; }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = `${project.color}40`; }}
                    >
                        <FiExternalLink size={15} /> Live
                    </a>
                </div>
            </div>
        </motion.div>
    );
}

export default function Projects() {
    return (
        <section id="projects" style={{
            padding: 'clamp(4rem, 8vw, 7rem) clamp(1rem, 4vw, 2rem)',
            background: 'radial-gradient(ellipse at 85% 30%, rgba(6,182,212,0.07) 0%, transparent 55%), #0a0a0f',
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <span className="section-badge">Portfolio</span>
                    <h2 style={{
                        fontFamily: 'Space Grotesk, sans-serif',
                        fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800,
                    }}>
                        Featured <span style={{ background: 'linear-gradient(135deg, #4F46E5, #06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Projects</span>
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.45)', marginTop: '0.75rem', fontSize: '0.95rem' }}>
                        Things I've built — hover a card to see features ✨
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                    gap: '1.5rem',
                }}>
                    {projects.map((project, i) => (
                        <ProjectCard key={project.id} project={project} index={i} />
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    style={{ textAlign: 'center', marginTop: '3.5rem' }}
                >
                    <a
                        href="https://github.com/54506"
                        target="_blank"
                        rel="noreferrer"
                        className="glow-btn"
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: '10px',
                            padding: '14px 34px',
                            background: 'linear-gradient(135deg, #4F46E5, #06B6D4)',
                            borderRadius: '100px',
                            color: '#fff',
                            textDecoration: 'none',
                            fontWeight: 700,
                            fontSize: '0.95rem',
                            boxShadow: '0 0 30px rgba(79,70,229,0.4)',
                            transition: 'all 0.3s',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 16px 45px rgba(79,70,229,0.55)'; }}
                        onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 30px rgba(79,70,229,0.4)'; }}
                    >
                        <FiGithub size={18} /> View All on GitHub
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
