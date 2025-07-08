function Projects() {
  const projects = [
    {
      name: "Weather App",
      tech: "HTML, CSS, JS | OpenWeather API"
    },
    {
      name: "Calculator",
      tech: "React + Styled CSS | Live UI updates"
    },
   
  ];

  return (
    <section id="projects" className="py-12 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold text-blue-700 mb-10">Projects</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((proj, i) => (
          <div key={i} className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-800">{proj.name}</h3>
            <p className="text-sm text-gray-600 mt-2">{proj.tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;
