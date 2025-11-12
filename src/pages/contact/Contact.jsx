import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
  const contacts = [
    {
      icon: <FaPhoneAlt className="text-teal-400 text-5xl" />,
      title: "Call Me",
      info: "+91 7509602722",
      link: "tel:+917509602722",
      color: "from-teal-500/30 to-transparent",
    },
    {
      icon: <FaWhatsapp className="text-green-400 text-5xl" />,
      title: "WhatsApp",
      info: "Chat instantly",
      link: "https://wa.me/917509602722",
      color: "from-green-500/30 to-transparent",
    },
    {
      icon: <FaEnvelope className="text-pink-400 text-5xl" />,
      title: "Email",
      info: "nigamsubhash123456@gmail.com",
      link: "mailto:nigamsubhash123456@gmail.com",
      color: "from-pink-500/30 to-transparent",
    },
    {
      icon: <FaLinkedin className="text-blue-500 text-5xl" />,
      title: "LinkedIn",
      info: "Connect professionally",
      link: "https://linkedin.com/in/subhash-nigam-82398924a",
      color: "from-blue-500/30 to-transparent",
    },
    {
      icon: <FaGithub className="text-gray-300 text-5xl" />,
      title: "GitHub",
      info: "Explore my projects",
      link: "https://github.com/subhash-kumar-nigam/",
      color: "from-gray-400/30 to-transparent",
    },
  ];

  return (
    <section className="min-h-screen  bg-gradient-to-br from-gray-950 via-blue-950 to-teal-900 text-white px-6 md:px-16 py-24 md:py-32">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold text-center mb-12"
      >
        Contact <span className="text-teal-400">Me</span>
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="max-w-2xl mx-auto text-gray-300 text-center mb-16"
      >
        Let’s connect! I’d love to collaborate or help you bring your ideas to life 🚀
      </motion.p>

      {/* Contact Grid */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center"
      >
        {contacts.map((contact, i) => (
          <motion.a
            key={i}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, rotateX: 3, rotateY: 3 }}
            className={`relative group overflow-hidden p-10 bg-gray-800/70 rounded-2xl shadow-lg border border-gray-700 hover:border-teal-400 transition-all duration-500 flex flex-col items-center gap-5`}
          >
            {/* Glow background */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${contact.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
            ></div>

            <div className="relative z-10 flex flex-col items-center gap-3">
              {contact.icon}
              <h3 className="text-xl font-semibold text-white group-hover:text-teal-300 transition-colors duration-300">
                {contact.title}
              </h3>
              <p className="text-gray-400 text-sm">{contact.info}</p>
            </div>
          </motion.a>
        ))}
      </motion.div>

      {/* Footer Tagline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-center mt-20 text-gray-400 text-sm"
      >
        <p className="mb-2">
          📍 Based in <span className="text-teal-400">Jabalpur, India</span>
        </p>
        <p>Available for Freelance & Remote Opportunities</p>
      </motion.div>
    </section>
  );
}
