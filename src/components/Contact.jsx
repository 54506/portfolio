import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

const contactInfo = [
    {
        icon: <FiMail size={20} />,
        label: 'Email',
        value: 'sdash6239@gmail.com',
        href: 'mailto:sdash6239@gmail.com',
        color: '#4F46E5',
    },
    {
        icon: <FiPhone size={20} />,
        label: 'Phone',
        value: '+91 8327766246',
        href: 'tel:+918327766246',
        color: '#06B6D4',
    },
    {
        icon: <FiMapPin size={20} />,
        label: 'Location',
        value: 'Berhampur, Odisha, India',
        href: null,
        color: '#8B5CF6',
    },
];

export default function Contact() {
    const formRef = useRef(null);
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState(null); // 'success' | 'error' | 'loading'

    const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = async e => {
        e.preventDefault();
        setStatus('loading');
        try {
            await emailjs.sendForm(
                'YOUR_SERVICE_ID',      // replace with your EmailJS service ID
                'YOUR_TEMPLATE_ID',     // replace with your EmailJS template ID
                formRef.current,
                'YOUR_PUBLIC_KEY'       // replace with your EmailJS public key
            );
            setStatus('success');
            setForm({ name: '', email: '', message: '' });
        } catch {
            setStatus('error');
        }
        setTimeout(() => setStatus(null), 5000);
    };

    return (
        <section id="contact" style={{
            padding: 'clamp(4rem, 8vw, 7rem) clamp(1rem, 4vw, 2rem)',
            background: 'radial-gradient(ellipse at 50% 0%, rgba(79,70,229,0.1) 0%, transparent 60%), #0a0a0f',
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
                    <span className="section-badge">Get in Touch</span>
                    <h2 style={{
                        fontFamily: 'Space Grotesk, sans-serif',
                        fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800,
                    }}>
                        Let's <span style={{ background: 'linear-gradient(135deg, #4F46E5, #06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Connect</span>
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.45)', marginTop: '0.75rem', fontSize: '0.95rem', maxWidth: '500px', margin: '0.75rem auto 0' }}>
                        Have a project or opportunity in mind? I'd love to hear from you!
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
                    gap: '2rem',
                    alignItems: 'start',
                }}>
                    {/* Left: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
                    >
                        {/* Intro card */}
                        <div style={{
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            borderRadius: '20px',
                            padding: '1.75rem',
                            borderTop: '2px solid rgba(79,70,229,0.5)',
                        }}>
                            <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.75rem' }}>
                                Open for Opportunities 🚀
                            </h3>
                            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.88rem', lineHeight: 1.8 }}>
                                I'm currently looking for entry-level software development roles. Whether it's a full-time job, internship, or freelance project — let's talk!
                            </p>
                        </div>

                        {/* Contact Info Items */}
                        {contactInfo.map((item, i) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 + 0.2 }}
                                whileHover={{ y: -4, boxShadow: `0 14px 40px ${item.color}22` }}
                                style={{
                                    background: 'rgba(255,255,255,0.04)',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                    borderRadius: '16px',
                                    padding: '1.25rem 1.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    textDecoration: 'none',
                                    transition: 'all 0.3s',
                                    cursor: item.href ? 'pointer' : 'default',
                                }}
                                as={item.href ? 'a' : 'div'}
                                onClick={() => item.href && window.open(item.href, '_self')}
                            >
                                <div style={{
                                    width: '46px', height: '46px', borderRadius: '12px',
                                    background: `${item.color}20`, border: `1px solid ${item.color}35`,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: item.color, flexShrink: 0,
                                }}>
                                    {item.icon}
                                </div>
                                <div>
                                    <div style={{ color: 'rgba(255,255,255,0.38)', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{item.label}</div>
                                    <div style={{ color: '#fff', fontWeight: 600, fontSize: '0.88rem', marginTop: '2px' }}>{item.value}</div>
                                </div>
                            </motion.div>
                        ))}

                        {/* Social */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            style={{
                                background: 'rgba(255,255,255,0.04)',
                                border: '1px solid rgba(255,255,255,0.08)',
                                borderRadius: '16px',
                                padding: '1.25rem 1.5rem',
                                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                gap: '1rem', flexWrap: 'wrap',
                            }}
                        >
                            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', fontWeight: 500 }}>Find me online</span>
                            <div style={{ display: 'flex', gap: '0.6rem' }}>
                                {[
                                    { icon: <FiGithub size={18} />, href: 'https://github.com/54506', color: '#4F46E5' },
                                    { icon: <FiLinkedin size={18} />, href: 'https://www.linkedin.com/in/subham-dash-1b5887310', color: '#06B6D4' },
                                    { icon: <FiMail size={18} />, href: 'mailto:sdash6239@gmail.com', color: '#8B5CF6' },
                                ].map((s, i) => (
                                    <a
                                        key={i}
                                        href={s.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{
                                            width: '40px', height: '40px', borderRadius: '50%',
                                            background: `${s.color}18`, border: `1px solid ${s.color}35`,
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            color: s.color, textDecoration: 'none',
                                            transition: 'all 0.3s',
                                        }}
                                        onMouseEnter={e => { e.currentTarget.style.background = `${s.color}35`; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = `0 8px 20px ${s.color}40`; }}
                                        onMouseLeave={e => { e.currentTarget.style.background = `${s.color}18`; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                                    >
                                        {s.icon}
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        style={{
                            background: 'rgba(255,255,255,0.04)',
                            backdropFilter: 'blur(18px)',
                            WebkitBackdropFilter: 'blur(18px)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            borderRadius: '24px',
                            padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                            borderTop: '2px solid rgba(6,182,212,0.5)',
                        }}
                    >
                        <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                            Send a Message
                        </h3>

                        <form ref={formRef} onSubmit={handleSubmit}>
                            {/* Name */}
                            <div style={{ marginBottom: '1.1rem' }}>
                                <label style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
                                    Your Name
                                </label>
                                <input
                                    className="form-input"
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Subham Dash"
                                    value={form.name}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Email */}
                            <div style={{ marginBottom: '1.1rem' }}>
                                <label style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
                                    Email Address
                                </label>
                                <input
                                    className="form-input"
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="you@example.com"
                                    value={form.email}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Message */}
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
                                    Message
                                </label>
                                <textarea
                                    className="form-input"
                                    name="message"
                                    required
                                    rows={5}
                                    placeholder="Hi Subham, I'd like to discuss..."
                                    value={form.message}
                                    onChange={handleChange}
                                    style={{ resize: 'vertical', minHeight: '130px' }}
                                />
                            </div>

                            {/* Submit */}
                            <motion.button
                                type="submit"
                                disabled={status === 'loading'}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.97 }}
                                className="glow-btn"
                                style={{
                                    width: '100%',
                                    padding: '14px',
                                    background: status === 'loading'
                                        ? 'rgba(79,70,229,0.5)'
                                        : 'linear-gradient(135deg, #4F46E5, #06B6D4)',
                                    border: 'none',
                                    borderRadius: '12px',
                                    color: '#fff',
                                    fontWeight: 700,
                                    fontSize: '0.95rem',
                                    cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                                    boxShadow: '0 0 28px rgba(79,70,229,0.4)',
                                    transition: 'all 0.3s',
                                    fontFamily: 'Inter, sans-serif',
                                }}
                            >
                                {status === 'loading' ? (
                                    <>
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                            style={{ width: '16px', height: '16px', border: '2px solid rgba(255,255,255,0.4)', borderTopColor: '#fff', borderRadius: '50%' }}
                                        />
                                        Sending...
                                    </>
                                ) : (
                                    <><FiSend /> Send Message</>
                                )}
                            </motion.button>

                            {/* Status Messages */}
                            {status === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    style={{
                                        display: 'flex', alignItems: 'center', gap: '8px',
                                        marginTop: '1rem', padding: '12px 16px',
                                        background: 'rgba(16,185,129,0.12)',
                                        border: '1px solid rgba(16,185,129,0.3)',
                                        borderRadius: '10px',
                                        color: '#10B981', fontSize: '0.88rem', fontWeight: 600,
                                    }}
                                >
                                    <FiCheckCircle /> Message sent successfully!
                                </motion.div>
                            )}
                            {status === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    style={{
                                        display: 'flex', alignItems: 'center', gap: '8px',
                                        marginTop: '1rem', padding: '12px 16px',
                                        background: 'rgba(239,68,68,0.12)',
                                        border: '1px solid rgba(239,68,68,0.3)',
                                        borderRadius: '10px',
                                        color: '#EF4444', fontSize: '0.88rem', fontWeight: 600,
                                    }}
                                >
                                    <FiAlertCircle /> Failed to send. Please try again or email directly.
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
