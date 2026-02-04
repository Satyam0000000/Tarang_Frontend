/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PopUp = ({ open, onClose }) => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  const handleExplore = () => {
    onClose();
    if (isLoggedIn) navigate("/UpcomingEvents");
    else navigate("/register");
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ y: 60, scale: 0.9, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 60, scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="
              relative w-[92%] max-w-lg
              bg-gradient-to-br from-[#1b1b38] via-[#14142e] to-[#0f0f24]
              border border-purple-500/30
              rounded-3xl p-6 sm:p-8
              shadow-[0_0_60px_rgba(139,92,246,0.25)]
              text-white
            "
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
            >
              <X size={22} />
            </button>

            {/* NEW badge */}
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                NEW EVENT
              </span>
              <Sparkles className="text-yellow-400" size={18} />
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Social Media & 5th Generation Warfare (6-7 feb 2026)
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-smsm:text-base leading-relaxed mb-6">
              Join the Social Media & 5G Warfare Debate Bootcamp on Feb 6-7, 
              10 PM onwards, organised by NIT Jalandhar Virtual Debate Club (TARANG). 
              This online event helps students develop clear thinking, confident 
              expression, and sharp communication skills through real-time discussions
              on trending topics. Boost your personality and ace online interactions!
            </p>

            {/* CTA */}
            <button
              onClick={handleExplore}
              className="
                w-full py-3 rounded-xl font-semibold
                bg-gradient-to-r from-purple-500 to-blue-500
                hover:from-purple-600 hover:to-blue-600
                transition-all duration-300
                shadow-lg
              "
            >
              Explore Event 
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopUp;
