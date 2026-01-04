/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = ({ user, setUser }) => {
  const navigate = useNavigate();
  const [eventOpen, setEventOpen] = useState(false);
  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    window.location.reload(); // optional refresh
  };
  const isLoggedIn = !!localStorage.getItem("token"); 

  const handleParticipate = () => {
    if (isLoggedIn) navigate("/UpcomingEvents");
    else navigate("/register");
  };
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0a0518]/95 backdrop-blur-md text-white border-b border-[#1e1730] shadow-lg">
      <div className="flex justify-between items-center px-8 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
        <img
          src={logo}  
          alt="Tarang Logo"
          className="h-15 w-auto" 
    />
        </Link>

        {/* Nav Links */}
        <nav className="flex items-center space-x-8 font-medium">
          {/* Event Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setEventOpen(true)}
            onMouseLeave={() => setEventOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-purple-400 transition">
              Event <ChevronDown size={16} />
            </button>

            <AnimatePresence>
              {eventOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-8 left-0 bg-[#1a1130] rounded-lg shadow-lg overflow-hidden"
                >
                  <button
                  onClick={handleParticipate}
                  className="block w-full text-left px-4 py-2 hover:bg-purple-600 transition"
                  >
                   Upcoming Event
                  </button>
                  <Link
                    to="/previous-events"
                    className="block px-4 py-2 hover:bg-purple-600 transition"
                  >
                    Previous Events
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/collaboration" className="hover:text-purple-400 transition">
            Partner
          </Link>

          <Link to="/rewards" className="hover:text-purple-400 transition">
            Rewards
          </Link>

          <Link to="/about" className="hover:text-purple-400 transition">
            About
          </Link>
          {user ? (
          <>
            <Link to="/profile">Profile</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login"
            className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700 transition">Login</Link>
            <Link to="/register"
            className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700 transition">Register</Link>
          </>
        )}
        </nav>
      </div>
    </header>
  );
};

export default Header;