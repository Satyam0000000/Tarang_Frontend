/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import UpcomingEventsImg from "../assets/UpComingevent/UpcomingEvents.png";
import Feb_15_Event from "../assets/Debate/Feb_15_Event.png"
import Feb7EventImg from "../assets/Debate/Feb_7_event.png"
const eventsData = [
    {
    id: 2,
    title: "Does God Exist ??",
    date: "15 Feb 2026",
    entryFee: "₹100",
    time: "10:00 PM onwards",
    mode: "Online (Google Meet)",
    prize: "Domino's coupon and 2x Prize",
    description:
      "This debate explores one of the most profound questions of human thought. Participants will present arguments based on faith, science, logic, and personal belief, encouraging critical thinking and respectful discussion of diverse perspectives.",
    image:Feb_15_Event,
    isNew: false,
    eventOpen: false,
    eventLink: "https://meet.google.com/txt-zgbk-kjp",
    brochure: '/Brochure/Feb_15_Event.pdf',
    whatsappLink:"https://chat.whatsapp.com/I0f5XOYwcmi8zgkw8K3WIy?mode=gi_t",
  },
  {
    id: 1,
    title: "Social Media & 5th Generation Warfare",
    date: "6-7 Feb 2026",
    entryFee: "₹100",
    time: "10:00 PM onwards",
    mode: "Online (Google Meet)",
    prize: "Domino's coupon and 2x Prize",
    description:
      "Join the Social Media & 5G Warfare Debate Bootcamp on Feb 6-7, 10 PM onwards, organised by NIT Jalandhar Virtual Debate Club (TARANG). This online event helps students develop clear thinking, confident expression, and sharp communication skills through real-time discussions on trending topics. Boost your personality and ace online interactions! ",
    image:Feb7EventImg,
    isNew: false,
    eventOpen: false,
    eventLink: "https://meet.google.com/txt-zgbk-kjp",
    brochure: '/Brochure/Feb_7_Brochure.pdf',
  },

];

function UpcomingEvents() {
  const [expandedId, setExpandedId] = useState(null);
  const [registrations, setRegistrations] = useState([]);
  const [loadingRegistrations, setLoadingRegistrations] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/register", { replace: true });
    }
    const fetchRegistrations = async () => {
      try {
        setLoadingRegistrations(true);
        const res = await fetch(
          "https://tarang-backend-alpha.vercel.app/api/my-registrations",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await res.json();
        if (data.success) {
          setRegistrations(data.data || []);
        }
        setLoadingRegistrations(false);
      } catch (err) {
        console.error("Failed to fetch registrations", err);
        setLoadingRegistrations(false);
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

          const isButtonLoading = loadingRegistrations;
          const isEventClosed = event.eventOpen === false;
          let amount = null;
          if (event.entryFee && event.entryFee !== "Free") {
            amount = event.entryFee.replace("₹", "").trim();
          }
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
            {/* comment */}
            {event.isNew && (
              <div className="absolute -top-3 -right-3 flex flex-col gap-1 z-10">
                <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  NEW 60% OFF
                </span>
                <span className="bg-emerald-600 text-white text-[10px] font-semibold px-3 py-1 rounded-full shadow-lg">
                  COUPON: TARANG_OFFER_2026
                </span>
              </div>
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

              <p className="text-gray-400 text-sm mb-1 leading-relaxed"> {event.date}</p>
              <p className="text-gray-400 text-sm mb-3 leading-relaxed"> {event.entryFee}</p>

              {expandedId === event.id && (
                <div className="text-gray-300 text-sm mt-3 space-y-2">
                  <p className="leading-relaxed">{event.description}</p>
                  <p>⏳ Time: {event.time || "Not Provided"}</p>
                   <p>⏳ Mode: {event.mode || "Not Provided"}</p>
                  <p>🏆 Prize: {event.prize || "To be announced"}</p>
                  {event.brochure && (
                    <button
                      onClick={(e) => {
                      e.stopPropagation();
                      const link = document.createElement('a');
                      link.href = event.brochure;
                      link.download = 'Jan_28_Brochure.pdf';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                  }}
                  className="text-emerald-400 underline block text-left cursor-pointer bg-transparent border-none p-0 hover:text-emerald-300"
                  >
                  📄 Download Event Brochure
                  </button>
                  )}
                  {event.youtube && (
                    <a
                      href={event.youtube}
                      target="_blank"
                      className="text-purple-300 underline block"
                    >
                       Watch Promo Video
                    </a>
                  )}
                  {event.whatsappLink && (
                    <a
                      href={event.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 underline block hover:text-green-300"
                    >
                       Join WhatsApp Group
                    </a>
                  )}
                </div>
              )}

              {isEventClosed && (
                <p className="text-red-400 text-xs mt-3">
                  Registrations for this event are closed.
                </p>
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
                  whileTap={{ scale: hasParticipated || isButtonLoading || isEventClosed ? 1 : 0.95 }}
                  disabled={hasParticipated || isButtonLoading || isEventClosed}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (hasParticipated) return;


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
                    isButtonLoading
                      ? "bg-gray-600 cursor-wait text-gray-300"
                      : isEventClosed
                      ? "bg-red-600 cursor-not-allowed text-white"
                      : hasParticipated
                      ? "bg-green-600 cursor-not-allowed text-white"
                      : "bg-purple-600 hover:bg-purple-700 text-white"
                  }`}
                >
                  {isButtonLoading
                    ? "Checking..."
                    : isEventClosed
                    ? "Registration Closed"
                    : hasParticipated
                    ? "Participated"
                    : "Participate"}
                </motion.button>
                {hasParticipated && !isEventClosed && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
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