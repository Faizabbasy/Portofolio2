import { useState, useEffect } from "react";

// 1. MEMPERBAIKI: Mengubah 'href' menjadi 'id' agar seragam
const navItems = [
  { id: "tentang", label: "Tentang" },
  { id: "skill", label: "Skill" },
  { id: "project", label: "Project" },
  // { id: "sertifikat", label: "Sertifikat" },
  { id: "layanan", label: "Education" },
];

export default function Navbar() {
  const [active, setActive] = useState("tentang");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. MEMPERBAIKI: Menambahkan fungsi Smooth Scroll ke Element target ID
  const handleNav = (id) => {
    setActive(id);
    setMenuOpen(false);

    const element = document.getElementById(id);
    if (element) {
      // Mengimbangi tinggi navbar (64px) agar element tidak tertutup navbar
      const offset = 64; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .navbar {
          position: sticky;
          top: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 28px;
          height: 64px;
          background: rgba(13, 13, 13, 0.82);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          font-family: 'Plus Jakarta Sans', sans-serif;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Efek saat scroll - navbar mengecil */
        .navbar.scrolled {
          padding: 0 48px;
          height: 56px;
          background: rgba(13, 13, 13, 0.95);
          border-bottom-color: rgba(120, 200, 255, 0.2);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        /* Efek hover pada navbar saat scroll */
        .navbar.scrolled:hover {
          background: rgba(13, 13, 13, 0.98);
        }

        /* LOGO */
        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .logo-name {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 700;
          font-size: 15px;
          letter-spacing: -0.01em;
          color: #f2f2f0;
          transition: all 0.3s ease;
        }

        /* Efek scroll pada logo */
        .navbar.scrolled .logo-name {
          font-size: 14px;
        }

        .logo-name em {
          font-style: normal;
          color: #78c8ff;
        }

        /* CENTER NAV */
        .nav-center {
          display: flex;
          align-items: center;
          gap: 2px;
        }

        .nav-item {
          position: relative;
          padding: 7px 13px;
          border-radius: 8px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 13.5px;
          font-weight: 500;
          letter-spacing: 0.01em;
          color: rgba(242, 242, 240, 0.5);
          cursor: pointer;
          transition: all 0.2s ease;
          user-select: none;
        }

        /* Efek scroll pada nav item */
        .navbar.scrolled .nav-item {
          padding: 6px 12px;
          font-size: 13px;
        }

        .nav-item:hover {
          color: #f2f2f0;
          background: rgba(255, 255, 255, 0.05);
        }

        .nav-item.active {
          color: #f2f2f0;
        }

        .nav-pill {
          position: absolute;
          bottom: 5px;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: 18px;
          height: 2px;
          border-radius: 2px;
          background: #78c8ff;
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        /* Efek scroll pada nav pill */
        .navbar.scrolled .nav-pill {
          bottom: 4px;
          width: 16px;
        }

        .nav-item:hover .nav-pill,
        .nav-item.active .nav-pill {
          transform: translateX(-50%) scaleX(1);
        }

        /* RIGHT */
        .nav-right {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .online-badge {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #4ade80;
          animation: pulse-badge 1.8s ease-in-out infinite;
          flex-shrink: 0;
        }

        @keyframes pulse-badge {
          0%, 100% { box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.5); }
          50%       { box-shadow: 0 0 0 5px rgba(74, 222, 128, 0); }
        }

        .contact-btn {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 8px 18px;
          border-radius: 9px;
          background: rgba(120, 200, 255, 0.12);
          border: 1px solid rgba(120, 200, 255, 0.2);
          color: #78c8ff;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 13.5px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          letter-spacing: 0.01em;
        }

        /* Efek scroll pada contact button */
        .navbar.scrolled .contact-btn {
          padding: 6px 16px;
          font-size: 13px;
          border-radius: 8px;
        }

        .contact-btn:hover {
          background: rgba(120, 200, 255, 0.2);
          border-color: rgba(120, 200, 255, 0.4);
          transform: translateY(-1px);
        }

        .contact-btn:active {
          transform: scale(0.97);
        }

        /* HAMBURGER */
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 5px;
          border-radius: 7px;
          background: transparent;
          border: none;
          transition: all 0.2s;
        }

        /* Efek scroll pada hamburger */
        .navbar.scrolled .hamburger {
          padding: 4px;
        }

        .navbar.scrolled .hamburger span {
          width: 18px;
          height: 1.5px;
        }

        .hamburger:hover {
          background: rgba(255, 255, 255, 0.06);
        }

        .hamburger span {
          display: block;
          width: 20px;
          height: 1.5px;
          background: #f2f2f0;
          border-radius: 2px;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }

        .hamburger.open span:nth-child(1) {
          transform: translateY(6.5px) rotate(45deg);
        }
        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }
        .hamburger.open span:nth-child(3) {
          transform: translateY(-6.5px) rotate(-45deg);
        }

        /* MOBILE MENU */
        .mobile-menu {
          position: fixed;
          top: 64px;
          left: 0;
          right: 0;
          background: rgba(13, 13, 13, 0.97);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          overflow: hidden;
          max-height: 0;
          opacity: 0;
          transition: max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
          z-index: 99;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        /* Efek scroll pada mobile menu */
        .navbar.scrolled ~ .mobile-menu {
          top: 56px;
        }

        .mobile-menu.open {
          max-height: 300px;
          opacity: 1;
        }

        .mobile-inner {
          padding: 10px 16px 16px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .mobile-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 11px 13px;
          border-radius: 9px;
          font-size: 14px;
          font-weight: 500;
          color: rgba(242, 242, 240, 0.5);
          cursor: pointer;
          transition: color 0.2s, background 0.2s;
        }

        .mobile-item:hover,
        .mobile-item.active {
          color: #f2f2f0;
          background: rgba(255, 255, 255, 0.05);
        }

        .mobile-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.15);
          transition: background 0.2s;
          flex-shrink: 0;
        }

        .mobile-item:hover .mobile-dot,
        .mobile-item.active .mobile-dot {
          background: #78c8ff;
        }

        .mobile-contact {
          margin-top: 6px;
          padding: 11px;
          border-radius: 9px;
          background: rgba(120, 200, 255, 0.1);
          border: 1px solid rgba(120, 200, 255, 0.2);
          color: #78c8ff;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          width: 100%;
          transition: background 0.2s;
          letter-spacing: 0.01em;
        }

        .mobile-contact:hover {
          background: rgba(120, 200, 255, 0.18);
        }

        /* RESPONSIVE DESIGN */
        @media (max-width: 1024px) {
          .navbar {
            padding: 0 20px;
          }
          
          .navbar.scrolled {
            padding: 0 32px;
          }
        }

        @media (max-width: 768px) {
          .nav-center,
          .contact-btn,
          .online-badge {
            display: none !important;
          }

          .hamburger {
            display: flex;
          }

          .navbar {
            padding: 0 16px;
          }
          
          /* Efek scroll untuk mobile */
          .navbar.scrolled {
            padding: 0 24px;
            height: 52px;
          }
        }

        @media (max-width: 480px) {
          .navbar {
            padding: 0 12px;
          }
          
          .navbar.scrolled {
            padding: 0 16px;
            height: 50px;
          }
          
          .logo-name {
            font-size: 14px;
          }
          
          .navbar.scrolled .logo-name {
            font-size: 13px;
          }
        }

        /* Animasi tambahan untuk smooth scroll effect */
        @keyframes navbarGlow {
          0% {
            box-shadow: 0 0 0 0 rgba(120, 200, 255, 0);
          }
          100% {
            box-shadow: 0 2px 8px rgba(120, 200, 255, 0.1);
          }
        }

        .navbar.scrolled {
          animation: navbarGlow 0.4s ease-out;
        }
      `}</style>

      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        {/* Logo */}
        <div className="logo" onClick={() => handleNav("tentang")}>
          <span className="logo-name">
            Faiz<em>.dev</em>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="nav-center">
          {navItems.map((item) => (
            <div
              key={item.id}
              className={`nav-item${active === item.id ? " active" : ""}`}
              onClick={() => handleNav(item.id)}
            >
              {item.label}
              <span className="nav-pill" />
            </div>
          ))}
        </div>

        {/* Desktop Right */}
        <div className="nav-right">
          <div className="online-badge" title="Available for work" />
          <button className="contact-btn" onClick={() => handleNav("contact")}>
            Contact
          </button>
        </div>

        {/* Hamburger button */}
        <button
          className={`hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        <div className="mobile-inner">
          {navItems.map((item) => (
            <div
              key={item.id}
              className={`mobile-item${active === item.id ? " active" : ""}`}
              onClick={() => handleNav(item.id)}
            >
              <span className="mobile-dot" />
              {item.label}
            </div>
          ))}
          <button className="mobile-contact" onClick={() => handleNav("contact")}>
            Contact
          </button>
        </div>
      </div>
    </>
  );
}