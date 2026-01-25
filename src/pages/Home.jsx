/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Theater, Rocket, Mic, Trophy } from "lucide-react";
import debateImg from "../assets/UpComingevent/Debate.png";
import MUNImg from "../assets/UpComingevent/MUN.png";
import PoetryImg from "../assets/UpComingevent/Poetry.png";
import StorytellingImg from "../assets/UpComingevent/Storytelling.png";
import NoEventsImg from "../assets/UpComingevent/NoEvents.png";
import PopUp from "../components/PopUp";


const Home = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleParticipate = () => {
    if (isLoggedIn) navigate("/UpcomingEvents");
    else navigate("/register");
  };

  // ==================== INSIGHTS ====================
  const insights = [
    {
      icon: (
        <Theater className="w-6 h-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 transition-all" />
      ),
      label: "Performance on Stage",
    },
    {
      icon: (
        <Rocket className="w-6 h-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 transition-all" />
      ),
      label: "Loose Nervousness",
    },
    {
      icon: (
        <Mic className="w-6 h-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 transition-all" />
      ),
      label: "Build Personality",
    },
    {
      icon: (
        <Trophy className="w-6 h-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 transition-all" />
      ),
      label: "Rewards & Recognition",
    },
  ];

  // ==================== EVENTS ====================
  const events = [
    {
      title: "Debate Championship 2026",
      date: "Coming Soon...",
      tag: "Debate",
      image:debateImg,
    },
    {
      title: "Inter-College MUN Summit 2026",
      date: "Coming Soon...",
      tag: "MUN",
      image:MUNImg,
    },
    {
      title: "Poetry Slam – Rhythm of Words 2026",
      date: "Coming Soon...",
      tag: "Poetry",
      image:PoetryImg,
    },
    {
      title: "Storytelling Night – Echoes of Youth 2026",
      date: "Coming Soon...",
      tag: "Storytelling",
      image:StorytellingImg,
    },
  ];

  const previousEvents = [
    {
      title: "Tarang Opening Debate ",
      date: "No events yet...",
      tag: "Debate",
      image:NoEventsImg,
    },
    { 
      title: "Youth Poetry Fest",
      date: "No events yet...", 
      tag: "Poetry",
      image:NoEventsImg,
    },
       
    {
      title: "Storytelling Evening",
      date: "No events yet...",
      tag: "Storytelling",
      image:NoEventsImg,
    },
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
          opacity-20 select-none pointer-events-none"
          animate={{
            x: ["6%", "12%", "-4%"],
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
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug mb-4 ml-1"
          >
            यत्र बुद्धिः प्रवहति। <span className="text-purple-400">तरंगः</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.1 }}
            className="text-gray-300 text-base sm:text-base md:text-lg max-w-sm mb-8 ml-1"
          >
            Where discussion awakens intelligence.
          </motion.p>

          {/* Insights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mb-10">
            {insights.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.12,
                  y: -8,
                  boxShadow: "0 0 35px rgba(139,92,246,0.6)",
                }}
                whileTap={{ scale: 0.97 }}
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 3 + i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="group flex flex-col items-center justify-center 
bg-gradient-to-br from-[#1b1b38]/60 to-[#151533]/60
backdrop-blur-xl p-5 rounded-2xl 
border border-purple-500/10
shadow-md cursor-pointer"
              >
                {item.icon}
                <p className="font-semibold text-sm sm:text-base
text-gray-200 tracking-wide text-center
">
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
        <div
          className="absolute inset-0 
        bg-gradient-to-t from-black/30 via-transparent to-black/30 pointer-events-none"
        ></div>
      </div>

      {/* ======================================================
    SECTION 2 — UPCOMING EVENTS (GRID)
   ====================================================== */}

      <div
        className="w-full py-16 px-4 sm:px-10 
  bg-gradient-to-b from-[#0b0b1e] via-[#151533] to-[#0b0b1e] text-white"
      >
        <h3 className="text-gray-200 text-3xl font-semibold mb-10 tracking-wide">
          Upcoming Events
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10 max-w-6xl mx-auto">
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
        transition-all cursor-pointer text-sm
      "
              onClick={() => {
                if (isLoggedIn) navigate("/UpcomingEvents");
                else navigate("/register");
              }}
            >
              {/* Upcoming event image here */}
              <img
                src={event.image}
                alt={event.title}
                className="h-28 sm:h-40 w-full object-contain bg-[#0b0b1e] rounded-t-2xl"
              />

              <div className="p-4 sm:p-6">
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

      <div
        className="w-full py-16 px-4 sm:px-10 
  bg-gradient-to-b from-[#151533] via-[#0b0b1e] to-[#0b0b1e] text-white"
      >
        <h3 className="text-gray-200 text-3xl font-semibold mb-10 tracking-wide">
          Previous Events
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10 max-w-6xl mx-auto">
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
          transition-all cursor-pointer text-sm
        "
            >
              {/* Previous event image here */}
              <img
                src={event.image}
                alt={event.title}
                className="h-28 sm:h-40 w-full object-cover rounded-t-2xl"
              />
              <div className="p-4 sm:p-6">
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
      <PopUp open={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
};

export default Home;
