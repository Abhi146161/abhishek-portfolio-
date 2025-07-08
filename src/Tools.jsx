import { FaGithub, FaGitAlt } from "react-icons/fa";

function Tools() {
  const tools = [
    { name: "VS Code", icon: "🧑‍💻" },
    { name: "MS Word", icon: "📄" },
    { name: "MS Excel", icon: "📊" },
    { name: "Chrome DevTools", icon: "🧪" },
    { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
    { name: "GitHub", icon: <FaGithub className="text-black" /> },
  ];

  return (
    <section id="tools" className="bg-white py-12 px-6 text-center">
      <h2 className="text-3xl font-bold text-blue-700 mb-10">Tools I Use</h2>
      <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 max-w-5xl mx-auto">
        {tools.map((tool, i) => (
          <div
            key={i}
            className="bg-gray-50 shadow p-4 rounded-lg flex flex-col items-center hover:shadow-md transition duration-300"
          >
            <div className="text-4xl mb-2">
              {typeof tool.icon === "string" ? <span>{tool.icon}</span> : tool.icon}
            </div>
            <p className="text-gray-700 font-medium">{tool.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Tools;
