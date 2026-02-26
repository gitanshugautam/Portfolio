import { useEffect, useState } from "react";

export default function App() {
  const roles = ["Full Stack Developer", "MERN Stack Developer", "React Developer"];
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [dark, setDark] = useState(() => {
  return localStorage.getItem("theme") === "dark";
});

  useEffect(() => {
    document.title = "Gitanshu Gautam | Portfolio";
  }, []);

  // Typing Effect
  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setText(roles[roleIndex].slice(0, i + 1));
      i++;
      if (i === roles[roleIndex].length) {
        clearInterval(typing);
        setTimeout(() => {
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setText("");
        }, 1500);
      }
    }, 80);
    return () => clearInterval(typing);
  }, [roleIndex]);

  useEffect(() => {
  if (dark) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}, [dark]);


  return (
    <div className={dark ? "dark" : ""}>
      <div className="bg-gray-50 dark:bg-gray-900 dark:text-white text-gray-800 scroll-smooth transition duration-300">

        {/* Navbar */}
        <nav className="fixed w-full bg-white dark:bg-gray-800 shadow z-50">
          <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
            <h1 className="text-xl md:text-2xl font-bold text-blue-600">
              Gitanshu Gautam
            </h1>

            <div className="hidden md:flex gap-6 font-medium items-center">
              <a href="#home" className="hover:text-blue-600">Home</a>
              <a href="#about" className="hover:text-blue-600">About</a>
              <a href="#skills" className="hover:text-blue-600">Skills</a>
              <a href="#projects" className="hover:text-blue-600">Projects</a>
              <a href="#contact" className="hover:text-blue-600">Contact</a>

              {/* Dark Mode Button */}
              <button
                onClick={() => setDark(!dark)}
                className="px-3 py-1 rounded-lg bg-gray-200 dark:bg-gray-700"
              >
                🌙
              </button>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <section id="home" className="min-h-screen flex items-center pt-24 px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center w-full">
            <div className="text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Hi, I'm{" "}
                <span className="text-blue-600">Gitanshu Gautam</span>
              </h2>

              {/* Typing Effect */}
              <p className="text-xl md:text-2xl text-blue-600 font-semibold h-8 mb-4">
                {text}|
              </p>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                BCA Student at SVG College Ghumarwin (HPU).  
                I build modern full stack web applications using MERN stack.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                {/* Resume Download */}
                <a
                  href="/resume.pdf"
                  download
                  className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:scale-105 transition"
                >
                  Download Resume 📄
                </a>

                <a
                  href="https://github.com/gitanshugautam"
                  target="_blank"
                  className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-600 hover:text-white transition"
                >
                  GitHub 🔗
                </a>
              </div>
            </div>

            {/* Profile Image */}
          <div className="flex justify-center order-first md:order-last">
  <img
    src="/profile.jpg"
    alt="Gitanshu Gautam"
    className="w-40 h-40 sm:w-52 sm:h-52 md:w-72 md:h-72 rounded-full object-cover shadow-xl border-4 border-blue-600"
  />
</div>git status

          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16 bg-white dark:bg-gray-800 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I am a BCA student from SVG College Ghumarwin affiliated with
              Himachal Pradesh University. I am a passionate Full Stack Developer
              skilled in React.js, Node.js, Express, and MongoDB. I focus on
              building fast, responsive and real-world applications.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {[
                "JavaScript",
                "HTML",
                "CSS",
                "Tailwind CSS",
                "React.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Bootstrap",
                "GitHub",
              ].map((skill) => (
                <div
                  key={skill}
                  className="bg-white dark:bg-gray-700 shadow-md rounded-xl py-4 px-2 font-semibold hover:shadow-xl hover:scale-105 transition"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects with Live Link */}
        <section id="projects" className="py-16 bg-white dark:bg-gray-800 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Projects</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-2xl shadow hover:shadow-2xl transition text-left">
                <h3 className="text-xl font-bold mb-2 text-blue-600">
                  Hyper Drop (E-commerce)
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A full stack e-commerce website like Blinkit built using MERN stack
                  with responsive UI, cart system, and admin features.
                </p>

                <div className="flex gap-4">
                  <a
  href="https://github.com/gitanshugautam/HyperDrop"
  target="_blank"
  rel="noopener noreferrer"
  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:scale-105 transition"
>
  Source Code 💻
</a>

                  {/* Add your live link later */}
                <a
  href="https://hyper-drop-chi.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
>
  Live Demo 🚀
</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Contact</h2>
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 space-y-4">
              <p className="text-lg">📧 gitanshugautam82@gmail.com</p>
              <p className="text-lg">📱 8627861923</p>
              <p className="text-lg">💻 github.com/gitanshugautam</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-blue-600 text-white text-center py-4">
          © {new Date().getFullYear()} Gitanshu Gautam | Full Stack Developer
        </footer>
      </div>
    </div>
  );
}