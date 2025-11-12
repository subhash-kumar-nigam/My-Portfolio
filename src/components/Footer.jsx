import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-teal-50 text-gray-700 border-t border-gray-200 shadow-inner py-16 px-6 md:px-12">
      {/* Decorative gradient circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-teal-100/40 rounded-full blur-3xl opacity-60 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-200/40 rounded-full blur-3xl opacity-60 animate-pulse"></div>

      {/* Main Footer Grid */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        {/* 🟢 Brand / About Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <img
              src="/Images/subhash.png" // ✅ Update your logo path here
              alt="Subhash Logo"
              className="w-14 h-14 rounded-full border-2 border-teal-500 shadow-md hover:scale-110 transition-transform duration-300"
            />
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Subhash <span className="text-teal-500">Nigam</span>
            </h2>
          </div>

          <div className="h-1 w-16 bg-gradient-to-r from-teal-500 to-transparent mx-auto md:mx-0 rounded-full mb-4"></div>

          <p className="text-gray-600 text-sm leading-relaxed">
            I’m a passionate <span className="text-teal-500 font-semibold">Full Stack Developer</span> building fast, modern, and scalable web applications using{" "}
            <span className="text-teal-500 font-semibold">React.js</span>,{" "}
            <span className="text-teal-500 font-semibold">Node.js</span>, and{" "}
            <span className="text-teal-500 font-semibold">Tailwind CSS</span>.
          </p>
        </div>

        {/* 🟢 Quick Links Section */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4 relative inline-block after:content-[''] after:block after:w-10 after:h-[3px] after:bg-teal-500 after:mt-2 after:rounded-full mx-auto md:mx-0">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            {[
              { label: "Home", to: "/" },
              { label: "About", to: "/about" },
              { label: "Skills", to: "/skills" },
              { label: "Experience", to: "/experience" }, // ✅ New Page Added Here
              { label: "Projects", to: "/projects" },
              { label: "Contact", to: "/contact" },
            ].map((link, i) => (
              <li key={i}>
                <Link
                  to={link.to}
                  className="hover:text-teal-500 transition-colors duration-300 flex items-center justify-center md:justify-start gap-2 group"
                >
                  <span className="w-2 h-2 bg-teal-500 rounded-full opacity-0 group-hover:opacity-100 transition-all"></span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 🟢 Social Links Section */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4 relative inline-block after:content-[''] after:block after:w-10 after:h-[3px] after:bg-teal-500 after:mt-2 after:rounded-full mx-auto md:mx-0">
            Connect With Me
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Let’s collaborate or connect through my social handles below.
          </p>
          <div className="flex justify-center md:justify-start gap-6 text-3xl">
            <a
              href="https://github.com/subhash-kumar-nigam"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-teal-500 transition-transform transform hover:scale-110 hover:-translate-y-1"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/subhash-nigam-82398924a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-teal-500 transition-transform transform hover:scale-110 hover:-translate-y-1"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:nigamsubhash123456@gmail.com"
              className="text-gray-600 hover:text-teal-500 transition-transform transform hover:scale-110 hover:-translate-y-1"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Divider Line + Bottom Text */}
      <div className="relative z-10 mt-12 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-gray-800 font-semibold">Subhash Nigam</span>. All
          rights reserved.
        </p>
        <p className="mt-2 text-xs text-gray-400">
          Made with ❤️ & powered by{" "}
          <span className="text-teal-500 font-semibold">React.js</span> +
          <span className="text-teal-500 font-semibold"> Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
