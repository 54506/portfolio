import React from 'react';
import { motion } from 'framer-motion';

const achievements = [
    {
        id: 1,
        icon: '🏆',
        title: 'First Position in Debate',
        period: 'Higher Secondary',
        description: 'Secured first position in inter-school debate competition, demonstrating strong communication skills and logical reasoning.',
        color: '#F59E0B',
        tag: 'Public Speaking',
    },
    {
        id: 2,
        icon: '🥈',
        title: 'Second Position in Debate',
        period: 'B.Tech',
        description: 'Secured second position in inter-college debate competition during B.Tech, showcasing continued excellence in communication.',
        color: '#06B6D4',
        tag: 'Leadership',
    },
    {
        id: 3,
        icon: '🏏',
        title: 'Best Batsman Award',
        period: 'College',
        description: 'Awarded Best Batsman for scoring the highest runs in the college cricket tournament, reflecting teamwork and competitive spirit.',
        color: '#10B981',
        tag: 'Sports',
    },
];

export default function Achievements() {
    return (
        <section id="achievements" style={{
            padding: 'clamp(4rem, 8vw, 7rem) clamp(1rem, 4vw, 2rem)',
            background: 'radial-gradient(ellipse at 10% 40%, rgba(245,158,11,0.06) 0%, transparent 55%), #0a0a0f',
            position: 'relative',
        }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <span className="section-badge">Achievements</span>
                    <h2 style={{
                        fontFamily: 'Space Grotesk, sans-serif',
                        fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800,
                    }}>
                        Milestones &{' '}
                        <span style={{ background: 'linear-gradient(135deg, #4F46E5, #06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            Wins
                        </span>
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.45)', marginTop: '0.75rem', fontSize: '0.95rem' }}>
                        Recognition and accomplishments along the journey
                    </p>
                </motion.div>

                {/* Timeline */}
                <div style={{ position: 'relative' }}>
                    {/* Center line – visible on md+ */}
                    <div style={{
                        position: 'absolute',
                        left: '50%',
                        top: 0, bottom: 0,
                        width: '2px',
                        transform: 'translateX(-50%)',
                        background: 'linear-gradient(180deg, #4F46E540, #06B6D440)',
                        borderRadius: '2px',
                    }} className="hide-xs" />

                    {achievements.map((a, i) => {
                        const isLeft = i % 2 === 0;
                        return (
                            <motion.div
                                key={a.id}
                                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.7, delay: i * 0.15, ease: 'easeOut' }}
                                style={{
                                    display: 'flex',
                                    justifyContent: isLeft ? 'flex-start' : 'flex-end',
                                    marginBottom: '2.5rem',
                                    position: 'relative',
                                    width: '100%',
                                }}
                                className="ach-row"
                            >
                                {/* Timeline dot */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.15 + 0.3, type: 'spring' }}
                                    style={{
                                        position: 'absolute',
                                        left: '50%',
                                        top: '28px',
                                        transform: 'translate(-50%, 0)',
                                        width: '16px', height: '16px',
                                        borderRadius: '50%',
                                        background: a.color,
                                        boxShadow: `0 0 0 4px ${a.color}30, 0 0 20px ${a.color}80`,
                                        zIndex: 2,
                                    }}
                                    className="hide-xs"
                                />

                                {/* Card */}
                                <motion.div
                                    whileHover={{ y: -6, boxShadow: `0 22px 55px ${a.color}25` }}
                                    style={{
                                        width: 'calc(50% - 2.5rem)',
                                        minWidth: 'min(100%, 280px)',
                                        background: 'rgba(255,255,255,0.04)',
                                        backdropFilter: 'blur(18px)',
                                        WebkitBackdropFilter: 'blur(18px)',
                                        border: `1px solid rgba(255,255,255,0.08)`,
                                        borderRadius: '20px',
                                        padding: '1.75rem',
                                        transition: 'all 0.4s ease',
                                        borderTop: `3px solid ${a.color}`,
                                        position: 'relative',
                                        overflow: 'hidden',
                                    }}
                                    className="ach-card"
                                >
                                    {/* BG deco */}
                                    <div style={{
                                        position: 'absolute', bottom: '-15px', right: '-15px',
                                        width: '70px', height: '70px', borderRadius: '50%',
                                        background: `radial-gradient(circle, ${a.color}25, transparent 70%)`,
                                        pointerEvents: 'none',
                                    }} />

                                    {/* Header row */}
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.9rem', marginBottom: '0.9rem' }}>
                                        <motion.div
                                            animate={{ rotate: [0, 5, -5, 0] }}
                                            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
                                            style={{
                                                width: '52px', height: '52px', borderRadius: '14px',
                                                background: `${a.color}22`, border: `1px solid ${a.color}44`,
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                fontSize: '1.6rem', flexShrink: 0,
                                            }}
                                        >
                                            {a.icon}
                                        </motion.div>
                                        <div style={{ flex: 1, minWidth: 0 }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px', flexWrap: 'wrap' }}>
                                                <span style={{
                                                    padding: '3px 10px', borderRadius: '100px',
                                                    background: `${a.color}20`, border: `1px solid ${a.color}40`,
                                                    color: a.color, fontSize: '0.68rem', fontWeight: 700,
                                                }}>
                                                    {a.tag}
                                                </span>
                                                <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.72rem' }}>
                                                    {a.period}
                                                </span>
                                            </div>
                                            <h3 style={{
                                                fontFamily: 'Space Grotesk, sans-serif',
                                                fontWeight: 700, fontSize: '0.97rem', color: '#fff',
                                                lineHeight: 1.3,
                                            }}>
                                                {a.title}
                                            </h3>
                                        </div>
                                    </div>

                                    <p style={{
                                        color: 'rgba(255,255,255,0.55)',
                                        fontSize: '0.85rem',
                                        lineHeight: 1.75,
                                    }}>
                                        {a.description}
                                    </p>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Responsive mobile stacked layout */}
                <style>{`
                    @media (max-width: 768px) {
                        .ach-row { justify-content: center !important; padding-left: 0 !important; padding-right: 0 !important; }
                        .ach-card { width: 100% !important; max-width: 500px !important; }
                    }
                `}</style>
            </div>
        </section>
    );
}
