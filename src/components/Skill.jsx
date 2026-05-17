import React from 'react';
import { 
  FaHtml5, FaCss3Alt, FaJsSquare, FaLaravel, 
  FaPhp, FaReact, FaGithub, FaFigma, FaBootstrap 
} from 'react-icons/fa';
import { SiFlutter, SiTailwindcss, SiExpress } from 'react-icons/si';

const Skills = () => {
  // Baris 1: Berjalan ke Kiri
  const row1 = [
    { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
    { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-500" /> },
    { name: 'PHP', icon: <FaPhp className="text-indigo-600" /> },
    { name: 'Laravel', icon: <FaLaravel className="text-red-600" /> },
    { name: 'ReactJS', icon: <FaReact className="text-cyan-400" /> },
  ];

  // Baris 2: Berjalan ke Kanan
  const row2 = [
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" /> },
    { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-600" /> },
    { name: 'Express', icon: <SiExpress className="text-gray-800" /> },
    { name: 'Flutter', icon: <SiFlutter className="text-blue-400" /> },
    { name: 'Figma', icon: <FaFigma className="text-pink-500" /> },
    { name: 'GitHub', icon: <FaGithub className="text-gray-900" /> },
  ];

  return (
    <section id='skill' className="bg-white py-16 px-4 min-h-[70vh] flex flex-col justify-center items-center overflow-hidden" data-aos="fade-up">
      
      {/* Tambahan CSS Kustom untuk Efek Animasi Marquee yang Mulus */}
      <style>{`
        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          display: flex;
          width: max-content;
          animation: marqueeLeft 20s linear infinite;
        }
        .animate-marquee-right {
          display: flex;
          width: max-content;
          animation: marqueeRight 20s linear infinite;
        }
        .marquee-container:hover .animate-marquee-left,
        .marquee-container:hover .animate-marquee-right {
          animation-play-state: paused; /* Efek estetik: Berhenti jalan saat kursor diarahkan */
        }
      `}</style>

      <div className="w-full flex flex-col items-center">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
             My Skills
          </h2>
        </div>

        {/* Outer Container (Mengatur batasan Height total area skill) */}
        <div className="marquee-container  w-full max-w-4xl flex flex-col gap-6 overflow-hidden py-4">
          
          {/* BARIS 1: BERJALAN KE KIRI */}
          <div className="w-full overflow-hidden flex">
            <div className="animate-marquee-left gap-5 pr-5">
              {/* Kita gandakan datanya (dua kali map) agar animasinya menyambung mulus tanpa patah */}
              {[...row1, ...row1].map((skill, index) => (
                <div 
                  key={`row1-${index}`} 
                  className="bg-gray-50 px-6 py-4 rounded-xl border border-gray-100 flex flex-col items-center justify-center gap-2 w-28 h-28 sm:w-32 sm:h-32 transition-all duration-200 hover:scale-105 hover:bg-white hover:border-black hover:shadow-md shrink-0"
                >
                  <span className="text-3xl sm:text-4xl">{skill.icon}</span>
                  <span className="font-semibold text-gray-800 text-xs sm:text-sm tracking-wide text-center">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* BARIS 2: BERJALAN KE KANAN */}
          <div className="w-full overflow-hidden flex">
            <div className="animate-marquee-right gap-5 pr-5">
              {[...row2, ...row2].map((skill, index) => (
                <div 
                  key={`row2-${index}`} 
                  className="bg-gray-50 px-6 py-4 rounded-xl border border-gray-100 flex flex-col items-center justify-center gap-2 w-28 h-28 sm:w-32 sm:h-32 transition-all duration-200 hover:scale-105 hover:bg-white hover:border-black hover:shadow-md shrink-0"
                >
                  <span className="text-3xl sm:text-4xl">{skill.icon}</span>
                  <span className="font-semibold text-gray-800 text-xs sm:text-sm tracking-wide text-center">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;  