import "./index.css";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Skills from "./skills";
import Tools from "./Tools";
import Contact from "./Contact";

function App() {
  return (
    <div className="font-sans bg-white text-gray-800">
        <Header />
      <About />
      <Projects />
      <Skills />
      <Tools />
      <Contact />
    </div>
    
    
  );
}

export default App;
