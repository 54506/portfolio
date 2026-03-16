import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / total) * 100;
      setScrollProgress(progress);
      setShowTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const moveCursor = (e) => {
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX - 4 + 'px';
        dotRef.current.style.top = e.clientY - 4 + 'px';
      }
      if (ringRef.current) {
        ringRef.current.style.left = e.clientX - 20 + 'px';
        ringRef.current.style.top = e.clientY - 20 + 'px';
      }
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      {/* Cursor */}
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />

      {/* Scroll progress */}
      <div id="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />

      {/* Scroll to top */}
      {showTop && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #4F46E5, #06B6D4)',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            boxShadow: '0 0 20px rgba(79,70,229,0.5)',
            color: 'white',
            fontSize: '20px',
            transition: 'transform 0.3s',
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.15)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          ↑
        </button>
      )}
    </>
  );
}
