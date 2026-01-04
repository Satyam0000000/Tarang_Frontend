/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const events = [
  {
    title: "Debate Championship 2025",
    date: "12 January 2025",
    tag: "Debate",
  },
  {
    title: "Inter-College MUN Summit",
    date: "25 January 2025",
    tag: "MUN",
  },
  {
    title: "Poetry Slam – Rhythm of Words",
    date: "7 February 2025",
    tag: "Poetry",
  },
  {
    title: "Storytelling Night – Echoes of Youth",
    date: "18 February 2025",
    tag: "Storytelling",
  },
];

export default function EventsSlider() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const next = () => setIndex((i) => (i + 1) % events.length);
  const prev = () =>
    setIndex((i) => (i === 0 ? events.length - 1 : i - 1));

  return (
    <div
      className="
        w-full py-16 px-6 sm:px-12 
        bg-gradient-to-b 
        from-[#0b0b1e] via-[#120f2c] to-[#1a133f]
        text-white
      "
    >
      {/* Subtle heading */}
      <h3 className="text-gray-400 text-lg font-medium mb-4">
        Upcoming Events
      </h3>

      <div className="relative max-w-4xl mx-auto">

        {/* Left button */}
        <button
          onClick={prev}
          className="
            absolute -left-6 sm:-left-10 top-1/2 -translate-y-1/2 
            text-gray-400 hover:text-purple-400 
            transition p-2 bg-transparent
          "
        >
          <ChevronLeft size={35} />
        </button>

        {/* Right button */}
        <button
          onClick={next}
          className="
            absolute -right-6 sm:-right-10 top-1/2 -translate-y-1/2 
            text-gray-400 hover:text-purple-400 
            transition p-2 bg-transparent
          "
        >
          <ChevronRight size={35} />
        </button>

        {/* Slider */}
        <div className="overflow-hidden rounded-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.35 }}
              onClick={() => navigate("/UpcomingEvents")}
              className="
                cursor-pointer p-8 
                rounded-2xl
                bg-[#151533]/40 
                backdrop-blur-md 
                border border-purple-500/20
                shadow-[0_0_28px_rgba(139,92,246,0.22)]
                hover:shadow-[0_0_45px_rgba(139,92,246,0.45)]
                transition-all
              "
            >
              <p className="text-sm text-purple-300 mb-2">
                {events[index].tag}
              </p>

              <h2
                className="
                  text-2xl sm:text-3xl font-semibold 
                  bg-clip-text text-transparent 
                  bg-gradient-to-r from-purple-400 to-blue-400 
                  mb-2
                "
              >
                {events[index].title}
              </h2>

              <p className="text-gray-400">
                {events[index].date}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}