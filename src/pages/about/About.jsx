// src/components/About.jsx
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaLaptopCode,
  
} from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiMongodb } from "react-icons/si";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-gradient-to-br from-gray-950 via-blue-950 to-teal-900 text-white px-6 md:px-12 py-28 overflow-hidden"
    >
      {/* Background Glow Effects */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-blue-600/20 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-teal-500/20 blur-3xl rounded-full"></div>

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-center mb-16"
      >
        About <span className="text-teal-400">Me</span>
      </motion.h2>

      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 mb-28">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -100, scale: 0.8 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-400 to-teal-400 blur-lg opacity-50 group-hover:opacity-80 transition duration-500"></div>
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-teal-400 shadow-2xl">
            <img
              src="https://avatars.githubusercontent.com/u/9919?s=280&v=4"
              alt="Subhash Nigam"
              className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-center md:text-left"
        >
          <h3 className="text-3xl font-semibold mb-4">
            Hi, I’m <span className="text-teal-400">Subhash Nigam</span> 👋
          </h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            I’m a creative and detail-oriented{" "}
            <b className="text-teal-400">Full Stack Web Developer</b> from
            Jabalpur, India. I build powerful, scalable, and user-focused web
            solutions using technologies like{" "}
            <b>React.js, Node.js, Express.js, and MySQL</b>. My focus is on
            delivering clean code, seamless animations, and optimized
            performance.
          </p>
          <p className="text-gray-400 mb-8">
            I love transforming complex ideas into elegant and functional
            digital products — always learning and exploring the latest web
            technologies to stay ahead in the tech curve.
          </p>

          {/* Buttons */}
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="/Images/Subhash-Nigam-WebDeveloper-Final-Underlined-1.pdf"
              download
              className="px-8 py-3 bg-gradient-to-r from-teal-500 to-blue-500 hover:from-blue-600 hover:to-teal-600 rounded-full text-white font-semibold shadow-lg transition-transform transform hover:scale-110"
            >
              Download CV
            </a>
            <a
              href="/contact"
              className="px-8 py-3 border-2 border-teal-400 text-teal-400 rounded-full hover:bg-teal-400 hover:text-white font-semibold transition-transform transform hover:scale-110"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>

      {/* What I Do Section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto text-center mb-28"
      >
        <h3 className="text-4xl font-bold mb-14">
          What <span className="text-teal-400">I Do</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              icon: <FaReact className="text-blue-400 text-6xl mb-4" />,
              title: "Frontend Development",
              desc: "Building modern, responsive, and high-performance UIs using React.js, Tailwind CSS, and Framer Motion for smooth animations.",
            },
            {
              icon: <FaNodeJs className="text-green-400 text-6xl mb-4" />,
              title: "Backend APIs",
              desc: "Creating fast, secure, and RESTful APIs using Node.js and Express.js with authentication, validation, and database integration.",
            },
            {
              icon: <FaLaptopCode className="text-yellow-400 text-6xl mb-4" />,
              title: "Full Stack Projects",
              desc: "Developing complete web solutions that seamlessly integrate frontend and backend for real-world scalability and performance.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-10 bg-gray-800/70 rounded-2xl shadow-xl hover:shadow-2xl hover:bg-gray-800 transition-all duration-300 border border-gray-700 hover:border-teal-400"
            >
              {item.icon}
              <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Tech Stack Section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto text-center"
      >
        <h3 className="text-4xl font-bold mb-12">
          My <span className="text-teal-400">Tech Stack</span>
        </h3>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-10 place-items-center">
          <FaReact className="text-blue-400 text-6xl hover:scale-125 transition-transform duration-300" />
          <SiJavascript className="text-yellow-400 text-6xl hover:scale-125 transition-transform duration-300" />
          <SiTailwindcss className="text-cyan-400 text-6xl hover:scale-125 transition-transform duration-300" />
          <FaNodeJs className="text-green-500 text-6xl hover:scale-125 transition-transform duration-300" />
          <SiMongodb className="text-green-400 text-6xl hover:scale-125 transition-transform duration-300" />
          <FaDatabase className="text-orange-400 text-6xl hover:scale-125 transition-transform duration-300" />
        </div>
      </motion.div>
    </section>
  );
}
