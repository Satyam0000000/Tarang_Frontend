/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaYoutube, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
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
            <li><Link to="/events" className="hover:text-violet-400 transition">Events</Link></li>
            <li><Link to="/partners" className="hover:text-violet-400 transition">Partners</Link></li>
            <li><Link to="/rewards" className="hover:text-violet-400 transition">Rewards</Link></li>
            <li><Link to="/about" className="hover:text-violet-400 transition">About</Link></li>
            <li><Link to="/contact" className="hover:text-violet-400 transition">Contact</Link></li>
          </ul>
        </div>

        {/* --- Contact Section --- */}
        <div>
          <h2 className="text-xl font-semibold text-violet-400 mb-4">
            Connect With Us
          </h2>
          <p className="text-sm text-gray-400 mb-3">
            NIT Jalandhar, Punjab, India<br />
            Email: <a href="mailto:info@nitj.ac.in" className="hover:text-violet-400">info@nitj.ac.in</a>
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