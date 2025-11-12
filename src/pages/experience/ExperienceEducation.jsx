// src/pages/ExperienceEducation.jsx
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaLaptopCode } from "react-icons/fa";

export default function ExperienceEducation() {
  const experiences = [
    {
      title: "Web Developer – Novarsis Tech Pvt. Ltd Indore",
      duration: "September 2025 – Present",
      points: [
        "Developing modern web applications using React.js, Node.js, and REST APIs.",
        "Writing clean, maintainable, and scalable code.",
        "Collaborating with backend teams for seamless API integration.",
      ],
    },
    {
      title: "Web Developer – Yashsoft Solution, Jabalpur",
      duration: "April 2025 – September 2025",
      points: [
        "Built and maintained full-stack web applications using React.js, Node.js, Express.js, and MySQL.",
        "Designed responsive UI and implemented RESTful APIs.",
        "Created reusable components for scalability and performance.",
      ],
    },
    {
      title: "React.js Intern – Alphawizz Technology Pvt. Ltd Indore",
      duration: "December 2024 – March 2025",
      points: [
        "Built interactive UIs using React.js and Redux.",
        "Assisted in backend integration and debugging.",
        "Worked on multiple projects under supervision of senior developers.",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institute:
        "Baderia Global Institute of Engineering and Management, Jabalpur",
      year: "2020 – 2024",
      cgpa: "8.02 CGPA",
    },
    {
      degree: "Full Stack Web Development Training",
      institute: "SPARK IT Training Institute, Pune (MH)",
      year: "March 2024 – November 2024",
      cgpa: "Completed ",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-950 via-blue-950 to-teal-900 text-white px-6 md:px-16 py-24 md:py-32">
      {/* 🔹 Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold text-center mb-16"
      >
        My <span className="text-teal-400">Experience & Education</span>
      </motion.h1>

      {/* 🔹 Work Experience Section */}
      <div className="space-y-10">
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 text-3xl font-semibold text-teal-400 mb-6"
        >
          <FaBriefcase className="text-3xl" /> Work Experience
        </motion.h2>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="p-8 bg-white/10 backdrop-blur-lg border border-teal-400/30 rounded-2xl shadow-lg hover:scale-[1.02] transition-transform"
          >
            <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
            <p className="text-sm text-teal-400 mb-4">{exp.duration}</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* 🔹 Education Section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-24"
      >
        <h2 className="flex items-center gap-3 text-3xl font-semibold text-teal-400 mb-6">
          <FaGraduationCap className="text-3xl" /> Education
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="p-8 bg-white/10 backdrop-blur-lg border border-blue-400/30 rounded-2xl shadow-lg hover:scale-[1.02] transition-transform"
            >
              <div className="flex items-center gap-3 mb-3">
                <FaLaptopCode className="text-teal-400 text-2xl" />
                <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
              </div>
              <p className="text-gray-300 mb-2">{edu.institute}</p>
              <p className="text-gray-400">{edu.year}</p>
              <p className="text-teal-300 font-semibold mt-2">{edu.cgpa}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
