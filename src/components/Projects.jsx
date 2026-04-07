const Projects = () => {
  const projects = [
    {
      title: "E-Commerce App",
      description: "Full-featured e-commerce application with cart and payment integration.",
      tech: ["React", "Redux", "Tailwind CSS"],
      image: "https://via.placeholder.com/400x300?text=E-Commerce"
    },
    {
      title: "Task Manager",
      description: "Productivity app for managing tasks and projects with team collaboration.",
      tech: ["React", "Node.js", "MongoDB"],
      image: "https://via.placeholder.com/400x300?text=Task+Manager"
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio website with responsive design and smooth animations.",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      image: "https://via.placeholder.com/400x300?text=Portfolio"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          My Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;