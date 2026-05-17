import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import hero from "../assets/hero.png"; 
import Porto from "../assets/Porto.png"; 
import Karbon from "../assets/Karbon.png"; 
import Tabungan from "../assets/Tabungan.png"; 
import TIX from "../assets/TIX.png"; 
import Fake from "../assets/Fake.png"; 
import Makanan from "../assets/Makanan.png"; 
import Figma from "../assets/Figma.png"; 
import Flutter from "../assets/Flutter.png"; 
import sert1 from "../assets/sert1.png"; 
import sert2 from "../assets/sert2.png"; 
import sert3 from "../assets/sert3.png"; 
import sert4 from "../assets/sert4.png"; 
import sert5 from "../assets/sert5.png"; 
import sert6 from "../assets/sert6.png"; 

const ProjectData = {
  items: [
    {
      image: Porto,
      title: "Portfolio V1",
      desc: "Project ini dibuat untuk kebutuhan personal branding.",
      tags: ["HTML", "CSS", "Javascript"],
      link: "https://github.com/username/portfolio-v1", 
    },
    {
      image: Karbon,
      title: "Calculator Karbon",
      desc: "Project ini dibuat untuk menghitung jejak karbon kita sehari hari.",
      tags: ["HTML", "CSS", "Javascript"],
      link: "https://calculator-karbon-demo.com", 
    },
    {
      image: Tabungan,
      title: "TabunganKu",
      desc: "Project yang dibuat untuk menginput tabungan kita sehari hari.",
      tags: ["Laravel", "Bootstrap", "MySQL", "PHP", "HTML", "CSS", "Javascript"],
      link: "https://github.com/username/tabunganku",
    },
    {
      image: TIX,
      title: "TIXID",
      desc: "Website App Movie.",
      tags: ["Laravel", "Bootstrap", "MySQL", "PHP", "HTML", "CSS", "Javascript"],
      link: "https://github.com/Faizabbasy/Project-TIXID.git",
    },
    {
      image: Fake,
      title: "Fake Store App",
      desc: "Website Fake Store.",
      tags: ["ReactJS", "TailwindCSS", "API"],
      link: "https://fake-store-app.netlify.app",
    },
    {
      image: Makanan,
      title: "Website Resep Makanan",
      desc: "Website Resep resep makanan dari berbagai negara.",
      tags: ["ReactJS", "TailwindCSS", "API"],
      link: "https://resep-makanan-apps.vercel.app",
    },
    {
      image: Figma,
      title: "Desain Figma",
      desc: "Design App Parfum.",
      tags: ["Figma"],
      link: "https://www.figma.com/file/...design-parfum",
    },
    {
      image: Flutter,
      title: "Slicing/Design Flutter",
      desc: "Design App Flutter.",
      tags: ["Flutter"],
      link: "https://github.com/username/flutter-slicing",
    },
  ],
};

const SertifikatData = {
  items: [
    { image: sert1, title: "Certificate 1" },
    { image: sert2, title: "Certificate 2" },
    { image: sert3, title: "Certificate 3" },
    { image: sert4, title: "Certificate 4" },
    { image: sert5, title: "Certificate 5" },
    { image: sert6, title: "Certificate 6" },
  ],
};

export default function Project() {
  const [tab, setTab] = useState("project");

  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    });
  }, []);

  const currentData = tab === "project" ? ProjectData : SertifikatData;

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: black; 
        }

        .project-section {
          min-height: 100vh;
          background: #f6f6f6; 
          color: #111111; 
          padding: 80px 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: Arial, sans-serif;
        }

        .wrap {
          width: 100%;
          max-width: 1100px;
        }

        .title {
          font-size: 36px;
          font-weight: 800;
          text-align: center;
          margin-bottom: 30px;
          letter-spacing: 1px;
          color: #111;
        }

        .tabs {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .tab-btn {
          padding: 12px 24px;
          border-radius: 12px;
          border: 1px solid rgba(0, 0, 0, 0.1);
          background: #ffffff;
          color: #555;
          cursor: pointer;
          font-weight: 700;
          transition: all 0.3s ease;
          box-shadow: 0 2px 4px rgba(0,0,0,0.02);
        }

        .tab-btn:hover {
          color: #000;
          border-color: rgba(0, 0, 0, 0.3);
        }

        .tab-btn.active {
          background: #111111;
          color: #ffffff;
          border-color: #111111;
        }

        /* Perubahan kelas layout Grid dinamis */
        .cards {
          display: grid;
          grid-template-columns: repeat(2, 1fr); 
          gap: 40px 30px; 
        }

        /* Mengubah grid menjadi 3 kolom khusus jika yang aktif adalah galeri sertifikat */
        .cards.achievement-grid {
          grid-template-columns: repeat(3, 1fr);
        }

        @media (max-width: 992px) {
          .cards.achievement-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .cards, .cards.achievement-grid {
            grid-template-columns: 1fr;
          }
        }

        .card {
          background: transparent; 
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 100%;
          text-decoration: none;
          color: inherit;
        }

        .card-img-wrapper {
          width: 100%;
          height: 280px; 
          overflow: hidden;
          border-radius: 8px; 
          background: #e0e0e0;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05); 
          cursor: pointer; 
        }

        /* Tinggi wrapper gambar sertifikat disesuaikan agar proporsional berkemiringan kertas lanskap */
        .achievement-grid .card-img-wrapper {
          height: 210px;
        }

        .card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .card:hover .card-img {
          transform: scale(1.02);
        }

        .card-content {
          padding: 20px 4px 0 4px; 
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .period {
          font-size: 13px;
          color: #666;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .card-title {
          font-size: 26px;
          font-weight: 700;
          margin-bottom: 10px;
          color: #222222;
          letter-spacing: -0.5px;
        }

        /* Jika judul sertifikat kosong, kelas ini mencegah ruang berlebih */
        .card-title:empty {
          margin: 0;
        }

        .card:hover .card-title {
          color: #555555; 
          text-decoration: underline;
        }

        .place {
          color: #555;
          font-size: 14px;
          margin-bottom: 10px;
        }

        .desc {
          line-height: 1.5;
          color: #666666;
          margin-bottom: 16px;
          font-size: 15px;
        }

        .tags {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
          margin-top: auto; 
        }

        .tag {
          padding: 6px 16px;
          border-radius: 999px;
          background: #222222;
          font-size: 13px;
          font-weight: 600;
          color: #ffffff;
        }
      `}</style>

      <section id="project" className="project-section" data-aos="fade-up">
        <div className="wrap">

          <div className="header">
            <h2 className="title">Project & Achievement</h2>
          </div>

          {/* TABS */}
          <div className="tabs">
            <button
              className={`tab-btn ${tab === "project" ? "active" : ""}`}
              onClick={() => setTab("project")}
            >
              Project
            </button>

            <button
              className={`tab-btn ${tab === "sertifikat" ? "active" : ""}`}
              onClick={() => setTab("sertifikat")}
            >
              Achievement
            </button>
          </div>

          {/* CONTENT CARDS */}
          {/* Menambahkan kelas dinamis 'achievement-grid' jika tab sertifikat aktif */}
          <div className={`cards ${tab === "sertifikat" ? "achievement-grid" : ""}`}>
            {currentData.items.map((item, index) => {
              const CardComponent = item.link ? "a" : "div";
              const cardProps = item.link 
                ? { href: item.link, target: "_blank", rel: "noopener noreferrer" } 
                : {};

              return (
                <CardComponent
                  key={index}
                  className="card"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  {...cardProps}
                >
                  {item.image && (
                    <div className="card-img-wrapper">
                      <img src={item.image} alt={item.title || "Sertifikat"} className="card-img" />
                    </div>
                  )}

                  {/* Konten teks hanya akan diproses rapi jika ada data judul/deskripsi */}
                  {(item.title || item.desc || item.period) && (
                    <div className="card-content">
                      {item.period && <div className="period">{item.period}</div>}
                      {item.title && <div className="card-title">{item.title}</div>}
                      {item.place && <div className="place">{item.place}</div>}
                      {item.desc && <div className="desc">{item.desc}</div>}

                      {/* FIXED: Ditambahkan validasi 'item.tags &&' agar tidak blank saat render sertifikat */}
                      {item.tags && item.tags.length > 0 && (
                        <div className="tags">
                          {item.tags.map((tag) => (
                            <span key={tag} className="tag">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </CardComponent>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}