/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Theater, Rocket, Mic, Trophy } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  const handleParticipate = () => {
    if (isLoggedIn) navigate("/UpcomingEvents");
    else navigate("/register");
  };

  // ==================== INSIGHTS ====================
  const insights = [
    {
      icon: (
        <Theater className="w-4 h-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 group-hover:from-blue-400 group-hover:to-purple-400 transition-all" />
      ),
      label: "Cultural Events",
    },
    {
      icon: (
        <Rocket className="w-8 h-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 group-hover:from-blue-400 group-hover:to-purple-400 transition-all" />
      ),
      label: "Technical Competitions",
    },
    {
      icon: (
        <Mic className="w-8 h-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 group-hover:from-blue-400 group-hover:to-purple-400 transition-all" />
      ),
      label: "Workshops & Talks",
    },
    {
      icon: (
        <Trophy className="w-8 h-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 group-hover:from-blue-400 group-hover:to-purple-400 transition-all" />
      ),
      label: "Prizes & Recognition",
    },
  ];

  // ==================== EVENTS ====================
  const events = [
    { title: "Debate Championship 2025", date: "12 January 2025", tag: "Debate" },
    { title: "Inter-College MUN Summit", date: "25 January 2025", tag: "MUN" },
    { title: "Poetry Slam – Rhythm of Words", date: "7 February 2025", tag: "Poetry" },
    { title: "Storytelling Night – Echoes of Youth", date: "18 February 2025", tag: "Storytelling" },
  ];

  const previousEvents = [
    { title: "Tarang Opening Debate 2024", date: "06 December 2024", tag: "Debate" },
    { title: "Youth Poetry Fest", date: "11 November 2024", tag: "Poetry" },
    { title: "Storytelling Evening", date: "04 September 2024", tag: "Storytelling" },
  ];

  return (
    <>
      {/* ======================================================
          HERO SECTION
          ====================================================== */}
      <div className="relative flex flex-col items-start justify-center min-h-screen bg-[#0b0b1e] text-white overflow-hidden px-6 sm:px-12">

        {/* Floating TARANG Background */}
        <motion.h1
  className="absolute right-2 top-10 
  text-[5rem] sm:text-[10rem] md:text-[15rem]
  font-extrabold text-transparent bg-clip-text 
  bg-gradient-to-r from-purple-500 to-blue-500 
  opacity-10 select-none pointer-events-none"
  
  animate={{
    x: ["5%", "12%", "-3%"],
    y: ["-2%", "2%", "-2%"],
  }}
  transition={{
    duration: 12,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  style={{ zIndex: 0 }}
>
  तरंगः
</motion.h1>

        {/* Floating Purple Wave */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-40 
          bg-gradient-to-t from-purple-800/20 via-transparent to-transparent"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Main Hero Content */}
        <div className="z-10 max-w-full mt-20 sm:mt-28 px-2">
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-2xl sm:text-4xl md:text-5xl font-bold leading-snug mb-4 ml-1"
          >
            यत्र बुद्धिः प्रवहति। <span className="text-purple-400">तरंगः</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.1 }}
            className="text-gray-300 text-sm sm:text-base md:text-lg max-w-sm mb-8 ml-1"
          >
            Where discussion awakens intelligence.
          </motion.p>

          {/* Insights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mb-10">
            {insights.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.11,
                  y: -6,
                  boxShadow: "0 0 25px rgba(139,92,246,0.5)",
                }}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                  delay: 0.01 + i * 0.05,
                }}
                className="group flex flex-col items-center justify-center 
                bg-[#151533]/40 backdrop-blur-md p-4 rounded-xl shadow-md cursor-pointer"
              >
                {item.icon}
                <p className="font-medium text-sm sm:text-base text-gray-300 mt-2">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 250 }}
              onClick={handleParticipate}
              className="bg-gradient-to-r from-purple-500 to-blue-500 
              text-white px-8 py-3 rounded-xl font-semibold shadow-lg"
            >
              Participate →
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 250 }}
              onClick={() => navigate("/about")}
              className="border border-gray-600 hover:border-purple-400 
              px-8 py-3 rounded-xl font-semibold text-gray-300 hover:text-white"
            >
              Learn More
            </motion.button>
          </div>
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 
        bg-gradient-to-t from-black/30 via-transparent to-black/30 pointer-events-none"></div>
      </div>

{/* ======================================================
    SECTION 2 — UPCOMING EVENTS (GRID)
   ====================================================== */}

<div className="w-full py-16 px-4 sm:px-10 
  bg-gradient-to-b from-[#0b0b1e] via-[#151533] to-[#0b0b1e] text-white">

  <h3 className="text-gray-200 text-3xl font-semibold mb-10 tracking-wide">
    Upcoming Events
  </h3>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 max-w-6xl mx-auto">
    {events.map((event, i) => (
      <motion.div
      key={i}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      viewport={{ once: true }}
      className="
        bg-[#1b1b38]/40 backdrop-blur-xl 
        border border-gray-600/20 
        rounded-2xl shadow-md 
        hover:shadow-[0_0_25px_rgba(139,92,246,0.3)]
        transition-all cursor-pointer
      "
      onClick={() => {
        if (isLoggedIn) navigate("/UpcomingEvents");
        else navigate("/register");
      }}
    >
      <div className="h-40 w-full bg-[#27274a]/40 rounded-t-2xl"></div>
    
      <div className="p-6">
        <p className="text-purple-300 text-sm mb-1">{event.tag}</p>
    
        <h2 className="text-xl font-semibold text-gray-200 mb-2">
          {event.title}
        </h2>
    
        <p className="text-gray-400">{event.date}</p>
      </div>
    </motion.div>
    ))}
  </div>
</div>

{/* ======================================================
    SECTION 3 — PREVIOUS EVENTS (GRID)
   ====================================================== */}

<div className="w-full py-16 px-4 sm:px-10 
  bg-gradient-to-b from-[#151533] via-[#0b0b1e] to-[#0b0b1e] text-white">

  <h3 className="text-gray-200 text-3xl font-semibold mb-10 tracking-wide">
    Previous Events
  </h3>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 max-w-6xl mx-auto">
    {previousEvents.map((event, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: i * 0.1 }}
        viewport={{ once: true }}
        className="
          bg-[#1a1a33]/40 backdrop-blur-xl 
          border border-gray-500/20 
          rounded-2xl shadow-lg 
          hover:shadow-[0_0_40px_rgba(139,92,246,0.5)]
          transition-all cursor-pointer
        "
      >
        <div className="h-40 bg-gradient-to-r from-gray-700/40 to-gray-600/30 rounded-t-2xl"></div>

        <div className="p-6">
          <p className="text-purple-300 text-sm mb-1">{event.tag}</p>

          <h2 className="text-xl font-semibold mb-2 text-gray-200">
            {event.title}
          </h2>

          <p className="text-gray-400">{event.date}</p>
        </div>
      </motion.div>
    ))}
  </div>
</div>
    </>
  );
};

export default Home;