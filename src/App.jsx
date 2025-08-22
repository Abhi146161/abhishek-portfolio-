import "../src/styles/index.css";
import Header from "./components/Header";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/skills";
import Tools from "./sections/Tools";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="font-sans bg-white text-gray-800 overflow-x-hidden">
      <Header />
      <main className="space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-28">
        <About />
        <Projects />
        <Skills />
        <Tools />
        <Contact />
      </main>
    </div>
  );
}

export default App;