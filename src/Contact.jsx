function Contact() {
  return (
    <section id="contact" className="bg-blue-50 py-12 px-6 text-center">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">Contact Me</h2>
      
      <p className="text-gray-700 text-lg mb-2">
        📧 Email: <a href="mailto:abhishek95680@gmail.com" className="text-blue-600 hover:underline">abhishek95680@gmail.com</a>
      </p>
      <p className="text-gray-700 text-lg mb-4">
        📱 Mobile: <a href="tel:9568426691" className="text-blue-600 hover:underline">9568426691</a>
      </p>

      <div className="flex justify-center gap-6 mb-6">
        <a href="https://github.com/Abhi146161" target="_blank" className="text-blue-700 hover:underline">
          🔗 GitHub
        </a>
        <a href="https://linkedin.com/in/abhishek-saini-6a554a25b" target="_blank" className="text-blue-700 hover:underline">
          💼 LinkedIn
        </a>
      </div>

      <a
        href="/resume.pdf"
        download
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
      >
        📄 Download Resume
      </a>
    </section>
  );
}
export default Contact;
