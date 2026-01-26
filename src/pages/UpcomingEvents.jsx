/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import UpcomingEventsImg from "../assets/UpComingevent/UpcomingEvents.png";
import Jan28EventImg from "../assets/Debate/28_Jan_Event.png"
const eventsData = [
  {
    id: 1,
    title: "Social Media & 5th Generation Warfare",
    date: "28 Jan 2026",
    entryFee: "₹1",
    time: "10:00 PM onwards",
    mode: "Online (Zoom)",
    prize: "Domino's coupon",
    description:
      "A online debate initiative that sharpens thinking, expression, and officer-like communication for CDS–SSB aspirants and all students who want's improvement through real-time discussions. Designed to mirror SSB discussion & psychological scenarios, helping participants build confidence. ",
    image:Jan28EventImg,
    isNew: true,
    eventLink: "https://meet.google.com/txt-zgbk-kjp",
  },
  {
    id: 2,
    title: "The Grand Argument",
    date: "To be announced...",
    entryFee: "Free",
    description:
      "An intense platform for structured arguments and critical thinking.Debaters compete to persuade, rebut, and dominate the discourse.",
    image:UpcomingEventsImg,
    isNew: false,
    eventLink:"",
  },
  {
    id: 3,
    title: "Clash of Perspectives",
    date: "To be announced...",
    entryFee: "₹200",
    description:
      "A high-energy debate competition where logic meets conviction. Participants challenge ideas, defend viewpoints, and redefine perspectives.",
    image:UpcomingEventsImg,
    isNew: false,
    eventLink: "",
  },
];

function UpcomingEvents() {
  const [expandedId, setExpandedId] = useState(null);
  const [registrations, setRegistrations] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/register", { replace: true });
    }
    const fetchRegistrations = async () => {
      try {
        const res = await fetch("/api/my-registrations", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        if (data.success) {
          setRegistrations(data.data || []);
        }
      } catch (err) {
        console.error("Failed to fetch registrations", err);
      }
    };

    fetchRegistrations();
  }, [navigate]);
  return (
    <div className="w-full py-16 px-4 sm:px-10 
    bg-gradient-to-b from-[#0b0b1e] via-[#151533] to-[#0b0b1e] text-white min-h-screen">

      <h3 className="text-gray-200 text-3xl font-semibold mb-10 tracking-wide text-center">
        <br/>
        Upcoming Events
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {eventsData.map((event) => {
          const hasParticipated = registrations.some(
            (reg) => String(reg.eventId) === String(event.id)
          );
          return (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="
            relative
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
            {event.isNew && (
              <span className="absolute -top-3 -right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10">
                NEW
              </span>
            )}
            {/* Upcoming event image here */}
            <img
              src={event.image}
              alt={event.title}
              className="h-28 sm:h-40 w-full object-cover rounded-t-3xl"
             />

            <div className="p-5 sm:p-6">
              <h2 className="text-xl font-semibold text-gray-200 mb-2">
                {event.title}
              </h2>

              <p className="text-gray-400 text-sm mb-1 leading-relaxed">📅 {event.date}</p>
              <p className="text-gray-400 text-sm mb-3 leading-relaxed">💰 {event.entryFee}</p>

              {expandedId === event.id && (
                <div className="text-gray-300 text-sm mt-3 space-y-2">
                  <p className="leading-relaxed">{event.description}</p>
                  <p>⏳ Time: {event.time || "Not Provided"}</p>
                   <p>⏳ Mode: {event.mode || "Not Provided"}</p>
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
                  whileTap={{ scale: hasParticipated ? 1 : 0.95 }}
                  disabled={hasParticipated}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (hasParticipated) return;

                    let amount = null;
                    if (event.entryFee && event.entryFee !== "Free") {
                      amount = event.entryFee.replace("₹", "").trim();
                    }

                    navigate("/registerevent", {
                      state: {
                        amount,
                        eventId: event.id,
                        eventName: event.title,
                        eventLink: event.eventLink,
                        registerForFriend: true,
                      },
                    });
                  }}
                  className={`px-4 py-2 rounded-xl text-sm transition ${
                    hasParticipated
                      ? "bg-gray-500 cursor-not-allowed text-gray-200"
                      : "bg-purple-600 hover:bg-purple-700 text-white"
                  }`}
                >
                  {hasParticipated ? "Participated" : "Participate"}
                </motion.button>
                {hasParticipated && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate("/registerevent", {
                        state: {
                          eventId: event.id,
                          eventName: event.title,
                          eventLink: event.eventLink,
                          registerForFriend: true,
                        },
                      });
                    }}
                    className="text-xs text-purple-300 underline mt-1"
                  >
                    Register for a friend
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )})}
      </div>
    </div>
  );
}

export default UpcomingEvents;