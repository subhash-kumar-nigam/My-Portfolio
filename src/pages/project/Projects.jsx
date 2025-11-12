import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Novarsis Tech Pvt. Ltd. Website",
      description: [
        "Developed a responsive company website for Novarsis Tech Pvt. Ltd.",
        "Built using React.js, Node.js, Express.js, and MySQL.",
        "Includes service showcase, contact form, and animations.",
        "Optimized performance and SEO for better visibility.",
      ],
      tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MySQL"],
      github: "https://github.com/subhash-kumar-nigam",
      live: "https://novarsistech.com/",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=60",
    },
    {
      title: "FOICT – Finding Opportunities In Changing Times",
      description: [
        "Created a course and job search platform for users.",
        "Developed backend APIs using Node.js and Express.js.",
        "Integrated MySQL database for user and course management.",
        "Designed a modern, user-friendly React-based frontend.",
      ],
      tech: ["React.js", "Node.js", "Express.js", "MySQL"],
      github: "https://github.com/subhash-kumar-nigam",
      live: "https://foict.com/",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=60",
    },
    {
      title: "Pathak Pest Control (PPC)",
      description: [
        "Developed a booking system for pest control services.",
        "Built admin dashboard for managing requests and clients.",
        "Integrated secure database operations using MySQL.",
        "Implemented responsive and mobile-first UI design.",
      ],
      tech: ["React.js", "Node.js", "Express.js", "MySQL"],
      github: "https://github.com/subhash-kumar-nigam",
      live: "https://pathakpestcontrol.com/",
      image:
        "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?auto=format&fit=crop&w=900&q=60",
    },
    {
      title: "Yashsoft Website",
      description: [
        "Developed a corporate portfolio website for Yashsoft.",
        "Built using React.js and Tailwind CSS with modern UI.",
        "Integrated smooth animations and responsive layouts.",
        "Showcases company services and contact information.",
      ],
      tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MySQL"],
      github: "https://github.com/subhash-kumar-nigam",
      live: "https://www.yashsoftsolution.com/",
      image:
        "https://images.unsplash.com/photo-1505685296765-3a2736de412f?auto=format&fit=crop&w=900&q=60",
    },
    {
      title: "AlphaSilver Website",
      description: [
        "Frontend-only shopping cart application built in React.js.",
        "Users can add/remove products and adjust quantities.",
        "Implemented state management using Context API.",
        "Designed a responsive, minimalistic user interface.",
      ],
      tech: ["React.js", "Tailwind CSS", "Context API"],
      github: "https://github.com/subhash-kumar-nigam",
      live: "#",
      image:
        "https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&w=900&q=60",
    },
    {
      title: "Shopping Cart Website",
      description: [
        "Created a mobile-first responsive shopping site.",
        "Developed with React.js and Tailwind CSS only.",
        "Smooth navigation with optimized component structure.",
        "Focused on clean UI/UX for smartphone users.",
      ],
      tech: ["React.js", "Tailwind CSS"],
      github: "https://github.com/subhash-kumar-nigam",
      live: "#",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=60",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-950 via-blue-950 to-teal-900 text-white px-6 md:px-16 py-24 md:py-32">
      {/* Section Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold text-center mb-12"
      >
        My <span className="text-teal-400">Projects</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="max-w-3xl mx-auto text-gray-300 text-center mb-16 text-lg"
      >
        A showcase of full-stack and frontend web applications I’ve developed —
        blending{" "}
        <span className="text-teal-300 font-semibold">creativity</span>,{" "}
        <span className="text-teal-300 font-semibold">responsive UI</span>, and{" "}
        <span className="text-teal-300 font-semibold">
          scalable backend solutions
        </span>
        .
      </motion.p>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            whileHover={{ scale: 1.04 }}
            className="relative bg-gray-800/70 rounded-2xl shadow-lg overflow-hidden border border-gray-700 hover:border-teal-400 hover:shadow-teal-500/40 transition-all duration-500"
          >
            {/* Image */}
            <div className="h-56 overflow-hidden relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col justify-between">
              <h3 className="text-2xl font-semibold text-white mb-3 tracking-wide">
                {project.title}
              </h3>

              {/* Description */}
              <ul className="text-gray-400 text-sm list-disc list-inside mb-4 space-y-1">
                {project.description.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.3 }}
                    className="hover:text-gray-200 transition-colors duration-300"
                  >
                    {point}
                  </motion.li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-teal-500/20 text-teal-300 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons at Bottom */}
              <div className="flex gap-3 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-1/2 bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-md transition-all duration-300 hover:scale-105"
                >
                  <FaGithub /> Code
                </a>

                {project.live && project.live !== "#" ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-1/2 border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white py-2 rounded-md transition-all duration-300 hover:scale-105"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                ) : (
                  <button
                    disabled
                    className="flex items-center justify-center gap-2 w-1/2 border border-gray-600 text-gray-400 cursor-not-allowed py-2 rounded-md"
                  >
                    <FaExternalLinkAlt /> Coming Soon
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
