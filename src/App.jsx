import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["Home", "Layanan", "Skill", "Proyek", "Kontak"];

const SKILLS = [
  { name: "HTML", icon: "🌐", color: "#E44D26" },
  { name: "CSS", icon: "🎨", color: "#264DE4" },
  { name: "JavaScript", icon: "⚡", color: "#F7DF1E" },
  { name: "PHP", icon: "🐘", color: "#777BB3" },
  { name: "React.js", icon: "⚛️", color: "#61DAFB" },
  { name: "Laravel", icon: "🔴", color: "#FF2D20" },
  { name: "Bootstrap", icon: "🅱", color: "#7952B3" },
  { name: "Tailwind CSS", icon: "💨", color: "#38BDF8" },
  { name: "GitHub", icon: "🐙", color: "#ffffff" },
  { name: "Figma", icon: "🎭", color: "#F24E1E" },
  { name: "Flutter", icon: "🦋", color: "#54C5F8" },
  { name: "MongoDB", icon: "🍃", color: "#47A248" },
  { name: "MySQL", icon: "🐬", color: "#00758F" },
  { name: "Node.js", icon: "🟢", color: "#68A063" },
];

const SERVICES = [
  {
    icon: "🖥️",
    title: "Web Development",
    desc: "Membangun website modern, responsif, dan berkinerja tinggi menggunakan teknologi terkini. Dari landing page sederhana hingga aplikasi web kompleks yang scalable dan mudah dikelola.",
    tags: ["React", "Laravel", "PHP"],
  },
  {
    icon: "📱",
    title: "Mobile App",
    desc: "Pengembangan aplikasi mobile cross-platform yang smooth dan intuitif menggunakan Flutter. Membawa pengalaman digital terbaik ke genggaman pengguna.",
    tags: ["Flutter", "Dart", "Firebase"],
  },
  {
    icon: "🎨",
    title: "Frontend & UI/UX",
    desc: "Merancang antarmuka yang indah, fungsional, dan berpusat pada pengguna. Dari wireframe hingga prototype interaktif dengan Figma yang siap diimplementasikan.",
    tags: ["Figma", "Tailwind", "Framer"],
  },
];

const PROJECTS = [
  {
    title: "Tabunganku",
    desc: "Platform tabungan online lengkap dengan fitur, dan dashboard admin.",
    tags: ["Laravel", "MySQL", "Bootstrap"],
    color: "from-violet-500 to-purple-700",
    emoji: "🛒",
    img: "/image/project1.png",
  },

  {
    title: "Tixid",
    desc: "Aplikasi web film.",
    tags: ["Laravel", "MySQL", "Bootstrap"],
    color: "from-cyan-500 to-blue-600",
    emoji: "🏫",
    img: "/image/project2.png",

  },
  {
    title: "Website Makanan",
    desc: "Website resep makanan.",
    tags: ["React.js", "Tailwindcss", "API"],
    color: "from-orange-400 to-red-500",
    emoji: "🍔",
    img: "/image/project3.png",

  },
  {
    title: "Calculator Karbon",
    desc: "Website menghitung jejak karbon.",
    tags: ["HTML", "CSS", "JS"],
    color: "from-emerald-400 to-teal-600",
    emoji: "📊",
    img: "/image/project4.png",

  },
  {
    title: "Fake Store Api",
    desc: "Web fake store.",
    tags: ["React.js", "API", "Tailwind"],
    color: "from-pink-400 to-rose-600",
    emoji: "🎨",
    img: "/image/project5.png",

  },
  {
    title: "Personal Web 2",
    desc: "Web Portofolio.",
    tags: ["HTML", "CSS", "JS"],
    color: "from-amber-400 to-yellow-600",
    emoji: "✍️",
    img: "/image/project.png",

  },
];

function useIntersect(options) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setVisible(true);
    }, options);
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Navbar({ active, setActive }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
          ? "bg-[#0a0a0f]/90 backdrop-blur-xl shadow-lg shadow-black/30 border-b border-white/5"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-xl font-black tracking-tight">
          <span className="text-white">Faiz</span>
          <span className="text-[#00e5ff]">.Abbasy</span>
        </span>
        {/* Desktop */}
        <ul className="hidden  md:flex gap-8">
          {NAV_LINKS.map((n) => (
            <li key={n}>
              <a
                href={`#${n.toLowerCase()}`}
                onClick={() => setActive(n)}
                className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-[#00e5ff] relative group ${active === n ? "text-[#00e5ff]" : "text-white/60"
                  }`}
              >
                {n}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-[#00e5ff] transition-all duration-300 ${active === n ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                />
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile */}
        <button
          className="md:hidden text-white/70 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="text-2xl">{menuOpen ? "✕" : "☰"}</span>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-xl border-t border-white/5 px-6 pb-6">
          {NAV_LINKS.map((n) => (
            <a
              key={n}
              href={`#${n.toLowerCase()}`}
              onClick={() => {
                setActive(n);
                setMenuOpen(false);
              }}
              className="block py-3 text-white/60 hover:text-[#00e5ff] font-medium transition-colors"
            >
              {n}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

function HeroSection() {
  const [typed, setTyped] = useState("");
  const roles = ["Frontend Developer", "UI/UX Designer", "Mobile Developer"];
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const handleStartedClick = (e) => {
    // Jika kamu ingin link tetap scroll ke #kontak, jangan gunakan e.preventDefault()
    // Path sesuai struktur yang kamu sebutkan tadi
    const audio = new Audio('public/sound/Bruno Mars - Risk It All [Official Music Video] - (320 Kbps).mp3');
    audio.play().catch(err => console.log("Autoplay diblokir browser:", err));
  };

  useEffect(() => {
    const current = roles[roleIdx];
    const delay = deleting ? 50 : 100;
    const timer = setTimeout(() => {
      if (!deleting) {
        setTyped(current.slice(0, charIdx + 1));
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1500);
        } else setCharIdx((c) => c + 1);
      } else {
        setTyped(current.slice(0, charIdx - 1));
        if (charIdx - 1 === 0) {
          setDeleting(false);
          setRoleIdx((r) => (r + 1) % roles.length);
          setCharIdx(0);
        } else setCharIdx((c) => c - 1);
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [charIdx, deleting, roleIdx]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0f]"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,229,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.07) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00e5ff]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center pt-24">
        {/* Left */}
        <div className="space-y-6 animate-fadeUp">

          <h1 className="text-5xl md:text-6xl font-black leading-tight text-white">
            Muhamad
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-violet-400">
              Faiz Abbasy
            </span>
          </h1>

          <div className="h-8 flex items-center">
            <span className="text-xl text-white/70 font-mono">
              {typed}
              <span className="inline-block w-0.5 h-5 bg-[#00e5ff] ml-0.5 animate-pulse" />
            </span>
          </div>

          <p className="text-white/50 text-base leading-relaxed max-w-md">
            Membangun pengalaman digital yang indah dan fungsional. Passionate
            dalam menciptakan antarmuka yang elegan dan kode yang bersih.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="#layanan"
              onClick={handleStartedClick} // Tambahkan event onClick di sini
              className="px-6 py-3 bg-[#00e5ff] text-[#0a0a0f] font-bold rounded-xl hover:bg-white transition-all duration-300 hover:scale-105 shadow-lg shadow-[#00e5ff]/20 text-sm"
            > Started →
            </a>
            <a
              href="#proyek"
              className="px-6 py-3 border border-white/20 text-white font-semibold rounded-xl hover:border-[#00e5ff]/50 hover:bg-white/5 transition-all duration-300 text-sm"
            >
              Lihat Proyek
            </a>
          </div>

          {/* <div className="flex gap-6 pt-2">
            {[
              ["15+", "Proyek Selesai"],
              ["3+", "Tahun Pengalaman"],
              ["10+", "Klien Puas"],
            ].map(([num, label]) => (
              <div key={label}>
                <div className="text-2xl font-black text-[#00e5ff]">{num}</div>
                <div className="text-xs text-white/40 font-medium">{label}</div>
              </div>
            ))}
          </div> */}
        </div>

        {/* Right - Avatar */}
        <div className="flex justify-center relative">
          <div className="relative">
            {/* Ring */}
            {/* <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#00e5ff]/30 animate-spin-slow" />
            <div className="absolute -inset-4 rounded-full border border-[#00e5ff]/10" /> */}

            {/* Avatar placeholder */}
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-[#00e5ff]/20 via-violet-500/20 to-[#0a0a0f] border-2 border-[#00e5ff]/30 flex items-center justify-center relative overflow-hidden shadow-2xl shadow-[#00e5ff]/10">
              <div className="text-9xl select-none">
                <img src="/image/image.png" alt="" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/60 to-transparent" />
            </div>

            {/* Floating badges */}
            <div className="absolute -top-2 -right-4 bg-[#0a0a0f] border border-[#00e5ff]/30 rounded-2xl px-3 py-2 shadow-xl">
              <div className="text-xs text-[#00e5ff] font-bold">Frontedn</div>
              <div className="text-[10px] text-white/40">Dev</div>
            </div>
            <div className="absolute -bottom-2 -left-4 bg-[#0a0a0f] border border-violet-400/30 rounded-2xl px-3 py-2 shadow-xl">
              <div className="text-xs text-violet-400 font-bold">Figma</div>
              <div className="text-[10px] text-white/40">UI/UX</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30 text-xs">
        <span>Scroll</span>
        <span className="animate-bounce">↓</span>
      </div> */}
    </section>
  );
}

function ServicesSection() {
  const [ref, visible] = useIntersect({ threshold: 0.1 });
  return (
    <section
      id="layanan"
      ref={ref}
      className="py-28 bg-[#0d0d14] relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00e5ff]/30 to-transparent" />
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3">
            My Service
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00e5ff] to-violet-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className={`group relative bg-[#0a0a0f] border border-white/5 rounded-2xl p-7 hover:border-[#00e5ff]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#00e5ff]/5 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00e5ff]/0 to-violet-400/0 group-hover:from-[#00e5ff]/5 group-hover:to-violet-400/5 transition-all duration-500" />
              <div className="text-4xl mb-5">{s.icon}</div>
              <h3 className="text-lg font-bold text-white mb-3">{s.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-5">
                {s.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-[11px] font-semibold rounded-lg bg-[#00e5ff]/10 text-[#00e5ff] border border-[#00e5ff]/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const [ref, visible] = useIntersect({ threshold: 0.1 });
  return (
    <section
      id="skill"
      ref={ref}
      className="py-28 bg-[#0a0a0f] relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-400/30 to-transparent" />
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle at 70% 50%, rgba(139,92,246,0.15) 0%, transparent 60%)",
        }}
      />
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3">
            Tech Stack
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-400 to-[#00e5ff] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {SKILLS.map((skill, i) => (
            <div
              key={skill.name}
              className={`group flex flex-col items-center gap-3 p-4 rounded-2xl bg-[#0d0d14] border border-white/5 hover:border-white/20 transition-all duration-400 hover:-translate-y-2 cursor-default ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-2xl"
                style={{ background: `${skill.color}18` }}
              >
                {skill.icon}
              </div>
              <span className="text-[11px] font-semibold text-white/50 group-hover:text-white/80 transition-colors text-center leading-tight">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const [ref, visible] = useIntersect({ threshold: 0.05 });
  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="proyek"
      ref={ref}
      className="py-28 bg-[#0d0d14] relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00e5ff]/30 to-transparent" />
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >

          <h2 className="text-4xl md:text-5xl font-black text-white mt-3">
            Proyek
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00e5ff] to-violet-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <div
              key={p.title}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`group relative rounded-2xl overflow-hidden border border-white/5 hover:border-white/15 transition-all duration-500 hover:-translate-y-2 cursor-pointer ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Image area */}
              <div
                className={`h-44 bg-gradient-to-br ${p.color} flex items-center justify-center relative overflow-hidden`}
              >
                <span
                  className={`text-7xl transition-transform duration-500 ${hovered === i ? "scale-110" : "scale-100"}`}
                >
                  <img src={p.img} alt="" />
                </span>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
              </div>

              {/* Content */}
              <div className="bg-[#0a0a0f] p-5">
                <h3 className="text-base font-bold text-white mb-1.5">
                  {p.title}
                </h3>
                <p className="text-white/45 text-xs leading-relaxed mb-4">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[10px] font-semibold rounded-md bg-white/5 text-white/50 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [ref, visible] = useIntersect({ threshold: 0.1 });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (form.name && form.email && form.message) {
      setSent(true);
      setTimeout(() => setSent(false), 4000);
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <section
      id="kontak"
      ref={ref}
      className="py-28 bg-[#0a0a0f] relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-400/30 to-transparent" />
      <div className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle at 30% 70%, rgba(0,229,255,0.05) 0%, transparent 60%)",
        }}
      />
      <div className="max-w-5xl mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h3 className="text-violet-400  font-bold tracking-[0.3em] uppercase">
            Contact Me
          </h3>

          <div className="w-16 h-1 bg-gradient-to-r from-violet-400 to-[#00e5ff] mx-auto mt-4 rounded-full" />

        </div>

        <div
          className={`grid md:grid-cols-2 gap-12 items-start transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Info */}
          <div className="space-y-6">
            <div className="bg-[#0d0d14] border border-white/5 rounded-2xl p-6 space-y-5">
              {[
                { icon: <i class="fa-solid fa-at text-white"></i>, label: "Email", val: "faizabbasy@email.com" },
                { icon: <i class="fa-brands fa-whatsapp text-white"></i>, label: "WhatsApp", val: "+62 812-9005-4793" },
                { icon: <i class="fa-solid fa-location-crosshairs text-white"></i>, label: "Lokasi", val: "Bogor, Jawa Barat, Indonesia" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#00e5ff]/10 flex items-center justify-center text-lg shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[11px] text-white/30 font-semibold tracking-wider uppercase mb-0.5">
                      {item.label}
                    </div>
                    <div className="text-sm text-white/70 font-medium">{item.val}</div>
                  </div>
                </div>
              ))}
            </div>


          </div>

          {/* Form */}
          <div className="bg-[#0d0d14] border border-white/5 rounded-2xl p-7 space-y-4">
            {sent && (
              <div className="bg-[#00e5ff]/10 border border-[#00e5ff]/30 text-[#00e5ff] text-sm rounded-xl p-3 text-center font-semibold">
                ✅ Pesan terkirim! Saya akan segera menghubungi Anda.
              </div>
            )}
            {["name", "email"].map((field) => (
              <div key={field}>
                <label className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-1.5 block">
                  {field === "name" ? "Nama Lengkap" : "Alamat Email"}
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  value={form[field]}
                  onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  className="w-full bg-[#0a0a0f] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#00e5ff]/50 transition-colors"
                />
              </div>
            ))}
            <div>
              <label className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-1.5 block">
                Pesan
              </label>
              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-[#0a0a0f] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#00e5ff]/50 transition-colors resize-none"
              />
            </div>
            <button
              onClick={handleSubmit}
              className="w-full py-3.5 bg-gradient-to-r from-[#00e5ff] to-violet-400 text-[#0a0a0f] font-bold rounded-xl hover:opacity-90 hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-[#00e5ff]/20 text-sm"
            >
              Kirim Pesan →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#080810] border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-lg font-black text-white">
            Faiz.Abbasy<span className="text-[#00e5ff]">.</span>
          </span>
          <span className="text-white/20 text-sm">— Frontend Dev & UI/UX</span>
        </div>
        <div className="flex gap-6 text-sm text-white/30">
          {NAV_LINKS.map((n) => (
            <a
              key={n}
              href={`#${n.toLowerCase()}`}
              className="hover:text-[#00e5ff] transition-colors"
            >
              {n}
            </a>
          ))}
        </div>
        <p className="text-white/20 text-xs">
          © 2024 Muhamad Faiz Abbasy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes fadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
      @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      .animate-fadeUp { animation: fadeUp 0.8s ease forwards; }
      .animate-spin-slow { animation: spin-slow 20s linear infinite; }
      html { scroll-behavior: smooth; }
      ::-webkit-scrollbar { width: 4px; }
      ::-webkit-scrollbar-track { background: #0a0a0f; }
      ::-webkit-scrollbar-thumb { background: #00e5ff30; border-radius: 2px; }
    `;
    document.head.appendChild(style);

    const sections = document.querySelectorAll("section[id]");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const id = e.target.id;
            const match = NAV_LINKS.find((n) => n.toLowerCase() === id);
            if (match) setActive(match);
          }
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => { obs.disconnect(); style.remove(); };
  }, []);

  return (
    <div className="bg-[#0a0a0f] min-h-screen font-sans">
      <Navbar active={active} setActive={setActive} />
      <HeroSection />
      <ServicesSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}