
function Header() {
  return (
    <header className="bg-blue-600 text-white py-6 sticky top-0 z-50 shadow">
      <div className="container mx-auto flex flex-col items-center gap-2">
        <h1 className="text-3xl font-bold">Abhishek Saini</h1>
        <p className="text-sm">Frontend Developer</p>
        <nav className="space-x-4 mt-2">
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#contact" className="hover:underline">Contact</a>
           <a href="https://github.com/YourGitHubUsername" target="_blank" className="hover:underline">GitHub</a>
  <a href="https://linkedin.com/in/YourLinkedInUsername" target="_blank" className="hover:underline ">LinkedIn</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
