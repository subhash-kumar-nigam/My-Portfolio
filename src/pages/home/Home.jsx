import { motion } from "framer-motion";
import {
  FaArrowDown,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[210vh] flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-gray-950 via-blue-950 to-teal-900 text-white px-6 sm:px-8 md:px-12 py-24 md:py-36"
    >
      {/* 🔷 Decorative Side Borders */}
      <div className="absolute left-0 top-0 w-[2px] h-full bg-gradient-to-b from-teal-400 to-transparent opacity-40" />
      <div className="absolute right-0 top-0 w-[2px] h-full bg-gradient-to-t from-blue-400 to-transparent opacity-40" />

      {/* 🔷 Background Glows */}
      <div className="absolute -top-40 -left-40 w-[450px] h-[450px] bg-teal-500/20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-blue-600/20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(14,165,233,0.1)_0%,_transparent_70%)]" />

      {/* 🔹 Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight"
        >
          Hi, I’m{" "}
          <motion.span
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            className="bg-gradient-to-r from-teal-400 via-blue-400 to-teal-400 bg-[length:200%_200%] text-transparent bg-clip-text"
          >
            Subhash Nigam
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-gray-200"
        >
          Full Stack Developer | React.js | Node.js | MySQL
        </motion.h2>

        {/* Tech Stack Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-8 text-4xl sm:text-5xl mb-10"
        >
          <FaReact className="text-blue-400 hover:scale-110 transition-transform duration-300 animate-bounce-slow" />
          <FaNodeJs className="text-green-400 hover:scale-110 transition-transform duration-300 animate-float" />
          <FaHtml5 className="text-orange-500 hover:scale-110 transition-transform duration-300 animate-bounce-slow" />
          <FaCss3Alt className="text-blue-500 hover:scale-110 transition-transform duration-300 animate-bounce-slow" />
          <FaDatabase className="text-teal-400 hover:scale-110 transition-transform duration-300 animate-pulse" />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="max-w-2xl text-gray-300 mb-10 leading-relaxed text-base sm:text-lg"
        >
          I specialize in crafting high-performance, user-friendly web
          applications using modern frameworks and clean design principles. From
          pixel-perfect frontends to scalable backends — I bring ideas to life
          through code and creativity.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-5 sm:gap-8"
        >
          <a
            href="/contact"
            className="px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-500 hover:from-blue-600 hover:to-teal-600 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-transform transform hover:scale-110 duration-300"
          >
            Hire Me
          </a>
          <a
            href="/Images/Subhash-Nigam-WebDeveloper-Final-Underlined-1.pdf"
            download
            className="px-8 py-4 border-2 border-teal-400 text-teal-400 rounded-full text-lg font-semibold hover:bg-teal-400 hover:text-white shadow-md transition-transform transform hover:scale-110 duration-300"
          >
            Download CV
          </a>
        </motion.div>
      </div>

      {/* 🔹 Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="relative z-10 mt-24 md:mt-36 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
      >
        {[
          { number: "1+", text: "Years of Experience" },
          { number: "10+", text: "Completed Projects" },
          { number: "5+", text: "Happy Clients" },
        ].map((stat, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-teal-400/30 shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-4xl font-bold text-teal-400">{stat.number}</h3>
            <p className="text-gray-300 mt-2">{stat.text}</p>
          </div>
        ))}
      </motion.div>

      {/* 🔽 About My Journey Section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 mt-32 max-w-5xl text-center space-y-6"
      >
        <h3 className="text-3xl md:text-4xl font-semibold text-teal-400">
          More About My Journey 👇
        </h3>
        <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
          From creating small-scale websites to developing full-fledged web
          applications, my journey as a developer has been filled with learning
          and growth. I constantly experiment with design patterns, modern tools
          and performance optimization.
        </p>
        <p className="text-gray-400 text-base">
          My mission is to deliver experiences that connect technology with
          human creativity. Every project I work on focuses on usability,
          design, and lasting impact.
        </p>
      </motion.div>

      {/* 🔹 Why Hire Me Section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 mt-28 max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {[
          {
            title: "Clean Code",
            desc: "I believe in maintainable, scalable, and reusable code with strong attention to performance and readability.",
          },
          {
            title: "Responsive Design",
            desc: "Every project I create is fully responsive, optimized for mobile, tablet, and desktop viewing experiences.",
          },
          {
            title: "Team Collaboration",
            desc: "Effective communication, version control, and agile methodologies make teamwork smooth and productive.",
          },
        ].map((box, i) => (
          <div
            key={i}
            className="bg-white/10 p-8 rounded-2xl border border-teal-400/20 hover:border-teal-400/50 backdrop-blur-md shadow-md hover:scale-105 transition-transform duration-300"
          >
            <h4 className="text-2xl font-bold text-teal-400 mb-3">
              {box.title}
            </h4>
            <p className="text-gray-300 text-base">{box.desc}</p>
          </div>
        ))}
      </motion.div>

      {/* 🔹 Bottom Message + Arrow */}
      <div className="mt-28 flex flex-col items-center text-center space-y-6">
        <motion.h3
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="text-3xl md:text-4xl font-semibold text-teal-400"
        >
          Let’s Build Something Amazing Together 🚀
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="max-w-xl text-gray-400 text-base sm:text-lg"
        >
          Whether it’s a website, portfolio, or full-stack app — I turn your
          ideas into beautiful, scalable digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            delay: 2.2,
            duration: 1.5,
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className="text-teal-400 mt-4"
        >
          <FaArrowDown className="text-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
