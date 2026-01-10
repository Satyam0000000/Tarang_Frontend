/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaYoutube, FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="bg-gray-950 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">

        {/* --- About Section --- */}
        <div>
          <h2 className="text-xl font-semibold text-violet-400 mb-4">
            About Us
          </h2>
          <p className="text-sm leading-relaxed text-gray-400">
            We aim to connect and showcase innovative events, rewards, and 
            collaborations. Explore insights, achievements, and upcoming updates.
          </p>
        </div>

        {/* --- Quick Links --- */}
        <div>
          <h2 className="text-xl font-semibold text-violet-400 mb-4">
            Quick Links
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <button onClick={() => handleNavigate("/UpcomingEvents")} className="hover:text-violet-400 transition text-left">
                Events
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigate("/collaboration")} className="hover:text-violet-400 transition text-left">
                Partners
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigate("/rewards")} className="hover:text-violet-400 transition text-left">
                Rewards
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigate("/about")} className="hover:text-violet-400 transition text-left">
                About
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigate("/contact")} className="hover:text-violet-400 transition text-left">
                Contact
              </button>
            </li>
          </ul>
        </div>

        {/* --- Contact Section --- */}
        <div>
          <h2 className="text-xl font-semibold text-violet-400 mb-4">
            Connect With Us
          </h2>
          <p className="text-sm text-gray-400 mb-3">
            NIT Jalandhar, Punjab, India<br />
            Support Email: <a href="mailto:anand.tarang.nitj@gmail.com" className="hover:text-violet-400">anand.tarang.nitj@gmail.com</a><br />
            Developer Help Email: <a href="mailto:satyamgoswami2705@gmail.com" className="hover:text-violet-400">satyamgoswami2705@gmail.com</a>
          </p>
          <div className="flex space-x-5 text-2xl">
            <motion.a whileHover={{ scale: 1.2 }} href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin className="hover:text-violet-400 transition" />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="hover:text-violet-400 transition" />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="https://youtube.com" target="_blank" rel="noreferrer">
              <FaYoutube className="hover:text-violet-400 transition" />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="https://github.com" target="_blank" rel="noreferrer">
              <FaGithub className="hover:text-violet-400 transition" />
            </motion.a>
          </div>
        </div>
      </div>

      {/* --- Bottom Line --- */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} NIT Jalandhar | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;