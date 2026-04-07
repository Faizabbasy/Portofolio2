const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            Hi, I'm <span className="text-blue-600">John Doe</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-6">
            Frontend Developer & UI Enthusiast
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
            I create beautiful and responsive web applications with modern technologies.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition transform hover:scale-105">
            View My Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;