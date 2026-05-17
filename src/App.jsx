import Navbar from './components/Navbar';
import About from './components/About';
import Skill from './components/Skill';
import Projects from './components/Projects';
import Layanan from './components/Layanan';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';

export default function App() {
  const texts = [
    "Frontend Developer",
    "UI/UX Designer",
    "Mobile Designer"
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length + 1));
        if (displayText === currentText) {
          setTimeout(() => {
            setIsDeleting(true);
          }, 1200);
        }
      } else {
        setDisplayText(currentText.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  return (
    <>
      <div className="bg-white min-h-screen text-black">
        <Navbar />

        {/* HERO SECTION - Clean White Background */}
        <div
          style={{
            width: '100%',
            minHeight: '100vh',
            position: 'relative',
            background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
            overflow: 'hidden',
            fontFamily: "'Inter', 'Poppins', 'Segoe UI', sans-serif"
          }}
        >
          {/* Decorative Blobs - Subtle */}
          <div style={{
            position: 'absolute',
            top: '-20%',
            right: '-10%',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, rgba(99,102,241,0) 70%)',
            borderRadius: '50%',
            pointerEvents: 'none'
          }} />
          <div style={{
            position: 'absolute',
            bottom: '-20%',
            left: '-10%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(236,72,153,0.06) 0%, rgba(236,72,153,0) 70%)',
            borderRadius: '50%',
            pointerEvents: 'none'
          }} />

          {/* MAIN CONTENT */}
          <div
            style={{
              position: 'relative',
              zIndex: 2,
              height: '100vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              padding: '20px'
            }}
          >
            {/* Small Badge / Label */}
            <div style={{
              display: 'inline-block',
              padding: '6px 16px',
              background: 'rgba(99,102,241,0.1)',
              borderRadius: '40px',
              marginBottom: '24px',
              fontSize: '14px',
              fontWeight: '500',
              color: '#6366f1',
              letterSpacing: '0.5px'
            }}>
            </div>

            {/* NAME */}
            <h1
              style={{
                fontSize: 'clamp(42px, 8vw, 72px)',
                fontWeight: '700',
                margin: 0,
                letterSpacing: '-2px',
                background: 'linear-gradient(135deg, #1e1b2e 0%, #2d2a3e 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Muhamad Faiz Abbasy
            </h1>

            {/* ANIMATED ROLE */}
            <div style={{
              marginTop: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}>
              <span style={{
                fontSize: 'clamp(16px, 3vw, 22px)',
                color: '#6b7280',
                fontWeight: '400'
              }}>
                I'm a
              </span>
              <p
                style={{
                  fontSize: 'clamp(18px, 3vw, 24px)',
                  color: '#6366f1',
                  fontWeight: '600',
                  margin: 0,
                  transition: '0.3s ease'
                }}
              >
                {displayText}
                <span style={{
                  opacity: 0.7,
                  animation: 'blink 1s infinite'
                }}>|</span>
              </p>
            </div>

            {/* Short Description */}
            <p style={{
              maxWidth: '500px',
              marginTop: '24px',
              fontSize: '16px',
              color: '#9ca3af',
              lineHeight: '1.6',
              fontWeight: '400'
            }}>
              Creating beautiful, responsive, and user-friendly digital experiences
            </p>

            {/* BUTTONS */}
            <div
              style={{
                display: 'flex',
                gap: '20px',
                marginTop: '40px',
                flexWrap: 'wrap',
                justifyContent: 'center'
              }}
            >
              {/* DOWNLOAD CV */}
              <button
                style={{
                  padding: '12px 32px',
                  borderRadius: '40px',
                  border: 'none',
                  background: '#1f2937',
                  color: 'white',
                  fontWeight: '500',
                  cursor: 'pointer',
                  fontSize: '15px',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.1)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 14px rgba(0,0,0,0.1)';
                }}
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/cv.pdf';
                  link.download = 'CV-Muhamad-Faiz-Abbasy.pdf';
                  link.click();
                }}
              >
                Download CV
              </button>

              {/* VIEW PROJECT */}
              <button
                style={{
                  padding: '12px 32px',
                  borderRadius: '40px',
                  border: '1px solid #e5e7eb',
                  background: 'white',
                  color: '#374151',
                  fontWeight: '500',
                  cursor: 'pointer',
                  fontSize: '15px',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
                  e.target.style.borderColor = '#6366f1';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
                  e.target.style.borderColor = '#e5e7eb';
                }}
                onClick={() => {
                  document
                    .getElementById('project')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Projects →
              </button>
            </div>

            {/* Scroll Indicator */}
            <div style={{
              position: 'absolute',
              bottom: '30px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              opacity: 0.6,
              transition: 'opacity 0.3s'
            }}
              onClick={() => {
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '0.6'}
            >

              <div style={{
                width: '20px',
                height: '30px',
                border: '2px solid #d1d5db',
                borderRadius: '20px',
                position: 'relative'
              }}>
                <div style={{
                  width: '4px',
                  height: '8px',
                  background: '#9ca3af',
                  borderRadius: '2px',
                  position: 'absolute',
                  top: '5px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  animation: 'scrollBounce 2s infinite'
                }} />
              </div>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              height: "180px",
              overflow: "hidden",
              background: "#white",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "120%",
                height: "120px",
                background: "#2b2926",
                left: "-5%",
                top: "30px",
                transform: "rotate(-2deg)",
                transformOrigin: "center",
              }}
            />
          </div>
        </div>

        <About />
        <Skill />
        <Projects />
        <Layanan />
        <Contact />
        <Footer />

        {/* Add CSS animations */}
        <style>{`
          @keyframes blink {
            0%, 50% { opacity: 0.7; }
            51%, 100% { opacity: 0; }
          }
          
          @keyframes scrollBounce {
            0%, 100% { transform: translateX(-50%) translateY(0); opacity: 1; }
            50% { transform: translateX(-50%) translateY(5px); opacity: 0.5; }
          }
        `}</style>
      </div>
    </>
  );
}