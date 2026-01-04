/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
const eventsData = [
  {
    id: 1,
    title: "Tech Fiesta 2025",
    date: "12 Nov 2025",
    entryFee: "₹100",
    description:
      "An inter-college tech event featuring hackathons, coding challenges, and AI exhibitions. Winners get exciting prizes and internship opportunities.",
  },
  {
    id: 2,
    title: "Cultural Night",
    date: "25 Nov 2025",
    entryFee: "Free",
    description:
      "A night of dance, music, and performances by students and guest artists. Entry is free for all registered students.",
  },
  {
    id: 3,
    title: "Startup Pitch Battle",
    date: "10 Dec 2025",
    entryFee: "₹200",
    description:
      "Pitch your innovative startup ideas to real investors and industry experts. Top 3 teams will receive funding support and mentorship.",
  },
];

function UpcomingEvents() {
  const [expandedId, setExpandedId] = useState(null);
  const navigate = useNavigate();
  return (
    <div className="w-full py-16 px-4 sm:px-10 
    bg-gradient-to-b from-[#0b0b1e] via-[#151533] to-[#0b0b1e] text-white min-h-screen">

      <h3 className="text-gray-200 text-3xl font-semibold mb-10 tracking-wide text-center">
        <br/>
        Upcoming Events
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {eventsData.map((event) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="
            bg-[#1b1b38]/40 backdrop-blur-xl 
            border border-gray-600/20 
            rounded-3xl shadow-md 
            hover:shadow-[0_0_25px_rgba(139,92,246,0.3)]
            transition-all cursor-pointer
            p-0
            self-start
            text-sm
          "
          >
            <div className="h-28 sm:h-40 w-full bg-[#27274a]/40 rounded-t-3xl"></div>

            <div className="p-5 sm:p-6">
              <h2 className="text-xl font-semibold text-gray-200 mb-2">
                {event.title}
              </h2>

              <p className="text-gray-400 text-sm mb-1 leading-relaxed">📅 {event.date}</p>
              <p className="text-gray-400 text-sm mb-3 leading-relaxed">💰 {event.entryFee}</p>

              {expandedId === event.id && (
                <div className="text-gray-300 text-sm mt-3 space-y-2">
                  <p className="leading-relaxed">{event.description}</p>
                  <p>⏳ Last Date: {event.lastDate || "Not Provided"}</p>
                  <p>🏆 Prize: {event.prize || "To be announced"}</p>
                  {event.youtube && (
                    <a
                      href={event.youtube}
                      target="_blank"
                      className="text-purple-300 underline block"
                    >
                      ▶ Watch Promo Video
                    </a>
                  )}
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 sm:justify-between sm:items-center mt-5">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setExpandedId(expandedId === event.id ? null : event.id);
                  }}
                  className="text-sm text-purple-300 hover:underline"
                >
                  {expandedId === event.id ? "Hide Info" : "More Info"}
                </button>

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    let amount = null;

                    if (event.entryFee && event.entryFee !== "Free") {
                      amount = event.entryFee.replace("₹", "").trim();
                    }

                    navigate("/registerevent", { state: { amount } });
                  }}
                  className="bg-purple-600 text-white px-4 py-2 rounded-xl text-sm hover:bg-purple-700 transition"
                >
                  Participate
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default UpcomingEvents;