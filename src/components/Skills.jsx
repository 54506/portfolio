import React, { useState } from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
    {
        label: 'Languages',
        emoji: '💻',
        color: '#4F46E5',
        skills: [{ name: 'Python', level: 85 }],
    },
    {
        label: 'Frameworks & Libraries',
        emoji: '📦',
        color: '#06B6D4',
        skills: [
            { name: 'Django', level: 70 },
            { name: 'NumPy', level: 75 },
            { name: 'Pandas', level: 72 },
            { name: 'Bootstrap', level: 78 },
        ],
    },
    {
        label: 'Web Development',
        emoji: '🌐',
        color: '#8B5CF6',
        skills: [
            { name: 'HTML', level: 88 },
            { name: 'CSS', level: 82 },
            { name: 'JavaScript', level: 70 },
        ],
    },
    {
        label: 'Database',
        emoji: '🗄️',
        color: '#10B981',
        skills: [
            { name: 'Oracle SQL', level: 75 },
            { name: 'MySQL', level: 82 },
            { name: 'PostgreSQL', level: 70 },
        ],
    },
    {
        label: 'Tools',
        emoji: '🛠️',
        color: '#F59E0B',
        skills: [
            { name: 'VS Code', level: 90 },
            { name: 'Edit Plus', level: 65 },
        ],
    },
    {
        label: 'Soft Skills',
        emoji: '🤝',
        color: '#EC4899',
        skills: [
            { name: 'Team Leadership', level: 80 },
            { name: 'Communication', level: 82 },
            { name: 'Problem Solving', level: 85 },
        ],
    },
];

function SkillBar({ name, level, color, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            style={{ marginBottom: '1.1rem' }}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '7px' }}>
                <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.86rem', fontWeight: 500 }}>{name}</span>
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 + 0.8 }}
                    style={{ color, fontSize: '0.8rem', fontWeight: 700 }}
                >
                    {level}%
                </motion.span>
            </div>
            <div style={{
                height: '7px', borderRadius: '10px',
                background: 'rgba(255,255,255,0.06)',
                overflow: 'hidden',
                position: 'relative',
            }}>
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, delay: index * 0.08 + 0.2, ease: [0.23, 1, 0.32, 1] }}
                    style={{
                        height: '100%',
                        borderRadius: '10px',
                        background: `linear-gradient(90deg, ${color}, ${color}aa)`,
                        boxShadow: `0 0 12px ${color}60`,
                        position: 'relative',
                    }}
                >
                    {/* Shimmer effect */}
                    <motion.div
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'linear', delay: 1.5 + index * 0.1 }}
                        style={{
                            position: 'absolute', inset: 0,
                            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                            borderRadius: '10px',
                        }}
                    />
                </motion.div>
            </div>
        </motion.div>
    );
}

export default function Skills() {
    const [activeFilter, setActiveFilter] = useState(null);

    const displayed = activeFilter
        ? skillCategories.filter(c => c.label === activeFilter)
        : skillCategories;

    return (
        <section id="skills" style={{
            padding: 'clamp(4rem, 8vw, 7rem) clamp(1rem, 4vw, 2rem)',
            background: 'radial-gradient(ellipse at 20% 50%, rgba(79,70,229,0.07) 0%, transparent 60%), #0a0a0f',
        }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '3rem' }}
                >
                    <span className="section-badge">Skills & Expertise</span>
                    <h2 style={{
                        fontFamily: 'Space Grotesk, sans-serif',
                        fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800,
                    }}>
                        My <span style={{ background: 'linear-gradient(135deg, #4F46E5, #06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Tech Stack</span>
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.45)', marginTop: '0.75rem', fontSize: '0.95rem' }}>
                        Technologies and tools I work with
                    </p>
                </motion.div>

                {/* Filter Chips */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    style={{
                        display: 'flex', gap: '0.6rem', flexWrap: 'wrap',
                        justifyContent: 'center', marginBottom: '2.5rem',
                    }}
                >
                    <button
                        onClick={() => setActiveFilter(null)}
                        style={{
                            padding: '7px 18px', borderRadius: '100px', border: 'none', cursor: 'pointer',
                            background: !activeFilter ? 'linear-gradient(135deg, #4F46E5, #06B6D4)' : 'rgba(255,255,255,0.06)',
                            color: '#fff', fontSize: '0.78rem', fontWeight: 600,
                            transition: 'all 0.3s',
                        }}
                    >
                        All
                    </button>
                    {skillCategories.map(cat => (
                        <button
                            key={cat.label}
                            onClick={() => setActiveFilter(activeFilter === cat.label ? null : cat.label)}
                            style={{
                                padding: '7px 18px', borderRadius: '100px',
                                border: `1px solid ${activeFilter === cat.label ? cat.color : 'rgba(255,255,255,0.1)'}`,
                                cursor: 'pointer',
                                background: activeFilter === cat.label ? `${cat.color}22` : 'rgba(255,255,255,0.04)',
                                color: activeFilter === cat.label ? cat.color : 'rgba(255,255,255,0.65)',
                                fontSize: '0.78rem', fontWeight: 600,
                                transition: 'all 0.3s',
                            }}
                        >
                            {cat.emoji} {cat.label}
                        </button>
                    ))}
                </motion.div>

                {/* Skills Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '1.25rem',
                }}>
                    {displayed.map((cat, ci) => (
                        <motion.div
                            key={cat.label}
                            layout
                            initial={{ opacity: 0, y: 30, scale: 0.96 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.55, delay: ci * 0.08 }}
                            whileHover={{ y: -5, boxShadow: `0 22px 55px ${cat.color}22` }}
                            style={{
                                background: 'rgba(255,255,255,0.04)',
                                backdropFilter: 'blur(16px)',
                                border: `1px solid rgba(255,255,255,0.08)`,
                                borderRadius: '20px',
                                padding: '1.75rem',
                                transition: 'all 0.4s ease',
                                borderTop: `2px solid ${cat.color}66`,
                                position: 'relative', overflow: 'hidden',
                            }}
                        >
                            {/* BG deco */}
                            <div style={{
                                position: 'absolute', top: '-20px', right: '-20px',
                                width: '80px', height: '80px', borderRadius: '50%',
                                background: `radial-gradient(circle, ${cat.color}25, transparent 70%)`,
                                pointerEvents: 'none',
                            }} />

                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
                                <div style={{
                                    width: '42px', height: '42px', borderRadius: '11px',
                                    background: `${cat.color}20`, border: `1px solid ${cat.color}40`,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '1.2rem',
                                }}>
                                    {cat.emoji}
                                </div>
                                <h3 style={{
                                    fontFamily: 'Space Grotesk, sans-serif',
                                    fontWeight: 700, fontSize: '0.92rem',
                                    color: cat.color, letterSpacing: '0.02em',
                                }}>
                                    {cat.label}
                                </h3>
                            </div>

                            {cat.skills.map((s, si) => (
                                <SkillBar key={s.name} name={s.name} level={s.level} color={cat.color} index={si} />
                            ))}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
