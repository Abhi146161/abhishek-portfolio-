function About() {
  return (
    <section className="py-12 px-6 bg-gray-100 text-center" id="about">
      <img
        src="/Abhishek.img"
        alt="Abhishek Saini"
        className="w-32 h-32 mx-auto rounded-full shadow-md mb-4 object-cover"
      />
      <h2 className="text-3xl font-bold text-blue-700 mb-4">About Me</h2>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed"> I’m Abhishek Saini, a passionate frontend developer skilled in HTML, CSS,
        JavaScript and React. I love building user-friendly web interfaces and learning
        new technologies every day.</p>
    </section>
  );
}
export default About;