import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import profileImg from "../assets/me.png";

export default function About() {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: #ffffff;
        }

        .about-section {
          min-height: 100vh;
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
          color: #1e293b;
          padding: 100px 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: 'Inter', 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          position: relative;
          overflow: hidden;
        }

        /* Decorative background elements */
        .about-section::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.04) 0%, rgba(99, 102, 241, 0) 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .about-section::after {
          content: '';
          position: absolute;
          bottom: -30%;
          left: -10%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(236, 72, 153, 0.03) 0%, rgba(236, 72, 153, 0) 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .wrap {
          width: 100%;
          max-width: 1200px;
          position: relative;
          z-index: 2;
        }

        /* 2 COLUMN LAYOUT */
        .about-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .about-section {
            padding: 60px 20px;
          }
          
          .about-container {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }
          
          .about-image-wrapper {
            order: -1;
          }
          
          .stats-container {
            justify-content: center;
          }
        }

        /* TEXT SECTION */
        .about-text {
          display: flex;
          flex-direction: column;
        }

        .badge {
          display: inline-block;
          padding: 6px 16px;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.08) 100%);
          border-radius: 40px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.5px;
          color: #6366f1;
          margin-bottom: 20px;
          width: fit-content;
        }

        @media (max-width: 768px) {
          .badge {
            margin-left: auto;
            margin-right: auto;
          }
        }

        .main-title {
          font-size: clamp(32px, 5vw, 48px);
          font-weight: 700;
          margin: 0 0 16px 0;
          background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.2;
        }

        .subtitle {
          font-size: 18px;
          font-weight: 500;
          color: #6366f1;
          margin-bottom: 24px;
          letter-spacing: -0.3px;
        }

        .description {
          font-size: 16px;
          line-height: 1.7;
          color: #475569;
          margin-bottom: 18px;
        }

        .highlight {
          font-weight: 600;
          color: #6366f1;
          background: rgba(99, 102, 241, 0.08);
          padding: 2px 8px;
          border-radius: 6px;
          display: inline-block;
        }

        /* STATS SECTION */
        .stats-container {
          display: flex;
          gap: 32px;
          margin-top: 32px;
          flex-wrap: wrap;
        }

        .stat-item {
          text-align: left;
        }

        @media (max-width: 768px) {
          .stat-item {
            text-align: center;
            flex: 1;
          }
        }

        .stat-number {
          font-size: 28px;
          font-weight: 800;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
        }

        .stat-label {
          font-size: 13px;
          color: #94a3b8;
          font-weight: 500;
          margin-top: 6px;
          letter-spacing: 0.3px;
        }

        /* IMAGE SECTION */
        .about-image-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .profile-card {
          position: relative;
          width: 100%;
          max-width: 360px;
        }

        /* Decorative rings */
        .profile-card::before {
          content: '';
          position: absolute;
          top: -20px;
          left: -20px;
          right: -20px;
          bottom: -20px;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.1) 100%);
          border-radius: 40px;
          z-index: 0;
          animation: pulse 3s ease-in-out infinite;
        }

        .profile-box {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          border-radius: 32px;
          overflow: hidden;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          padding: 4px;
          z-index: 2;
          box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.15);
        }

        .profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 28px;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .profile-box:hover .profile-img {
          transform: scale(1.05);
        }

        /* Floating badge on image */
        .floating-badge {
          position: absolute;
          bottom: 20px;
          right: 20px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          padding: 8px 16px;
          border-radius: 40px;
          font-size: 14px;
          font-weight: 600;
          color: #6366f1;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.02);
            opacity: 0.8;
          }
        }

        /* Skill tags */
        .skill-tags {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 24px;
        }

        .skill-tag {
          padding: 5px 14px;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 500;
          color: #475569;
          transition: all 0.3s ease;
        }

        .skill-tag:hover {
          border-color: #6366f1;
          color: #6366f1;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .skill-tags {
            justify-content: center;
          }
        }
      `}</style>

      <section id="tentang" className="about-section" data-aos="fade-up">
        <div className="wrap">
          <div className="about-container">
            
            {/* LEFT: TEXT CONTENT */}
            <div className="about-text" data-aos="fade-right" data-aos-delay="100">
              <span className="badge"> About Me</span>
              <h2 className="main-title">Halo, Saya Muhamad Faiz Abbasy</h2>
              
              <p className="description">
                Saya adalah seorang pelajar di <span className="highlight">SMK Wikrama Bogor</span>, 
                mengambil jurusan <span className="highlight">Pengembangan Perangkat Lunak dan Gim (PPLG)</span>. 
                Bersekolah di Wikrama membentuk saya menjadi pribadi yang disiplin, memiliki mental pembelajar, 
                serta terbiasa bekerja secara tim maupun individu.
              </p>

              <p className="description">
                Fokus utama saya saat ini adalah mendalami dunia rekayasa perangkat lunak, 
                mulai dari pengembangan aplikasi berbasis web hingga perancangan antarmuka pengguna. 
                Saya senang memecahkan masalah melalui baris kode dan selalu tertarik untuk 
                mengeksplorasi teknologi modern terbaru.
              </p>

              {/* STATS */}
              <div className="stats-container">
                <div className="stat-item">
                  <div className="stat-number">4+</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
              </div>


            </div>

            {/* RIGHT: PROFILE IMAGE */}
            <div className="about-image-wrapper" data-aos="fade-left" data-aos-delay="200">
              <div className="profile-card">
                <div className="profile-box">
                  <img 
                    src={profileImg} 
                    alt="Foto Profil Saya" 
                    className="profile-img" 
                  />
                </div>
                
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}