/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";

const pastEvents = [
  {
    id: 1,
    title: "Tech Fiesta 2024",
    heldOn: "12 Nov 2024",
    winners: "Rahul Sharma (1st), Ananya Verma (2nd)",
    prize: "₹10,000 + Goodies",
    youtube: "https://youtube.com",
    description:
      "A full–day technical extravaganza with coding rounds, quizzes, and project showcases.",
  },
  {
    id: 2,
    title: "Cultural Night 2024",
    heldOn: "25 Oct 2024",
    winners: "Simran Kaur (Solo), Team Zenith (Group)",
    prize: "Certificates + Gift Hampers",
    youtube: "",
    description:
      "A beautiful evening filled with dance, music, drama, and crowd performances.",
  },
  {
    id: 3,
    title: "Debate Championship 2023",
    heldOn: "5 Sept 2023",
    winners: "Karan Singh (Winner), Muskan Patel (Runner-Up)",
    prize: "₹5,000 + Trophy",
    youtube: "",
    description:
      "A campus-wide debate competition where participants showcased exceptional oratory skills.",
  },
];

function PreviousEvents() {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <div className="w-full py-16 px-4 sm:px-10 
    bg-gradient-to-b from-[#0b0b1e] via-[#151533] to-[#0b0b1e] text-white min-h-screen">

      <h3 className="text-gray-200 text-3xl font-semibold mb-10 tracking-wide text-center">
        <br/>
        Previous Events
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10 max-w-6xl mx-auto">
        {pastEvents.map((event) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="
            bg-[#1b1b38]/40 backdrop-blur-xl 
            border border-gray-600/20 
            rounded-2xl shadow-md 
            hover:shadow-[0_0_25px_rgba(139,92,246,0.3)]
            transition-all cursor-pointer
            p-0
            self-start
            text-sm
          "
          >
            <div className="h-28 sm:h-40 w-full bg-[#27274a]/40 rounded-t-2xl"></div>

            <div className="p-4 sm:p-6">
              <h2 className="text-xl font-semibold text-gray-200 mb-2">
                {event.title}
              </h2>

              <p className="text-gray-400 text-sm mb-1"> Event Held On: {event.heldOn}</p>
              <p className="text-gray-400 text-sm mb-1"> Winners: {event.winners}</p>
              <p className="text-gray-400 text-sm mb-3"> Prize: {event.prize}</p>

              {expandedId === event.id && (
                <div className="text-gray-300 text-sm mb-3">
                  <p className="leading-relaxed">{event.description}</p>

                  {event.youtube && (
                    <a 
                      href={event.youtube}
                      target="_blank"
                      className="text-purple-300 underline block mt-2"
                    >
                      ▶ Watch Event Video
                    </a>
                  )}
                </div>
              )}

              <div className="flex justify-start items-center mt-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setExpandedId(expandedId === event.id ? null : event.id);
                  }}
                  className="text-sm text-purple-300 hover:underline"
                >
                  {expandedId === event.id ? "Hide Info" : "More Info"}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default PreviousEvents;