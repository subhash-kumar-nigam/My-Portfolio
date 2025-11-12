// src/pages/Skills.jsx
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiMysql,
  SiExpress,
  SiRedux,
  SiBootstrap,
} from "react-icons/si";

export default function Skills() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const skillBarColors = [
    "from-blue-400 to-teal-400",
    "from-green-400 to-teal-500",
    "from-cyan-400 to-blue-500",
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-950 via-blue-950 to-teal-900 text-white px-6 md:px-16 py-24 md:py-32 overflow-hidden relative">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-blue-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-teal-500/20 blur-3xl rounded-full"></div>

      {/* Page Title */}
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold text-center mb-20"
      >
        My <span className="text-teal-400">Skills</span>
      </motion.h1>

      {/* FRONTEND SKILLS */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        className="mb-24"
      >
        <h2 className="text-3xl font-semibold mb-10 text-teal-400 text-center md:text-left">
          Frontend Development
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {[
            { icon: <FaHtml5 className="text-orange-500" />, label: "HTML5" },
            { icon: <FaCss3Alt className="text-blue-500" />, label: "CSS3" },
            { icon: <SiJavascript className="text-yellow-400" />, label: "JavaScript" },
            { icon: <FaReact className="text-cyan-400" />, label: "React.js" },
            { icon: <SiRedux className="text-purple-400" />, label: "Redux" },
            { icon: <SiTailwindcss className="text-cyan-300" />, label: "Tailwind CSS" },
          ].map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-6 bg-gray-800/60 rounded-2xl shadow-md hover:bg-gray-800 hover:shadow-teal-400/30 border border-gray-700 hover:border-teal-400 transition-all duration-300"
            >
              <div className="text-5xl mb-3 mx-auto">{skill.icon}</div>
              <p className="font-medium text-gray-200">{skill.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* BACKEND SKILLS */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        className="mb-24"
      >
        <h2 className="text-3xl font-semibold mb-10 text-green-400 text-center md:text-left">
          Backend Development
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {[
            { icon: <FaNodeJs className="text-green-500" />, label: "Node.js" },
            { icon: <SiExpress className="text-gray-300" />, label: "Express.js" },
            { icon: <SiMysql className="text-blue-400" />, label: "MySQL" },
            { icon: <FaDatabase className="text-orange-400" />, label: "Database" },
          ].map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-6 bg-gray-800/60 rounded-2xl shadow-md hover:bg-gray-800 hover:shadow-green-400/30 border border-gray-700 hover:border-green-400 transition-all duration-300"
            >
              <div className="text-5xl mb-3 mx-auto">{skill.icon}</div>
              <p className="font-medium text-gray-200">{skill.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* TOOLS */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        className="mb-24"
      >
        <h2 className="text-3xl font-semibold mb-10 text-yellow-400 text-center md:text-left">
          Tools & Others
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {[
            { icon: <FaGitAlt className="text-orange-400" />, label: "Git / GitHub" },
            { icon: <SiBootstrap className="text-purple-400" />, label: "Bootstrap" },
            { icon: <FaDatabase className="text-blue-300" />, label: "REST APIs" },
          ].map((tool, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-6 bg-gray-800/60 rounded-2xl shadow-md hover:bg-gray-800 hover:shadow-yellow-400/30 border border-gray-700 hover:border-yellow-400 transition-all duration-300"
            >
              <div className="text-5xl mb-3 mx-auto">{tool.icon}</div>
              <p className="font-medium text-gray-200">{tool.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* SKILL BARS */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-semibold mb-12 text-teal-400 text-center md:text-left">
          Skill Proficiency
        </h2>

        {[
          { name: "React.js", level: 90, color: "from-blue-400 to-teal-400" },
          { name: "Node.js", level: 80, color: "from-green-400 to-teal-500" },
          { name: "MySQL", level: 75, color: "from-cyan-400 to-blue-500" },
          { name: "Tailwind CSS", level: 85, color: "from-blue-400 to-cyan-400" },
          { name: "JavaScript (ES6+)", level: 88, color: "from-yellow-400 to-orange-400" },
        ].map((skill, i) => (
          <div key={i} className="mb-6">
            <div className="flex justify-between mb-2 text-gray-300">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1.2 }}
                className={`h-3 rounded-full bg-gradient-to-r ${skill.color}`}
              ></motion.div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
