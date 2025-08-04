import "./index.css";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills"; // Ensure filename is capital "S"
import Tools from "./Tools";
import Contact from "./Contact";

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
