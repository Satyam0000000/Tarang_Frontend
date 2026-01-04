/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = ({ user, setUser }) => {
  const navigate = useNavigate();
  const [eventOpen, setEventOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
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
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0a0518]/95 backdrop-blur-md text-white border-b border-[#1e1730] shadow-md">
      <div className="flex justify-between items-center px-4 md:px-8 py-3 md:py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
        <img
          src={logo}  
          alt="Tarang Logo"
          className="h-9 md:h-12 w-auto" 
    />
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center space-x-8 font-medium">
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
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0a0518]/95 border-t border-[#1e1730] text-sm"
          >
            <div className="flex flex-col px-5 py-4 space-y-4">
              <button
                onClick={() => {
                  handleParticipate();
                  setMobileOpen(false);
                }}
                className="text-left hover:text-purple-400"
              >
                Upcoming Event
              </button>

              <Link
                to="/previous-events"
                onClick={() => setMobileOpen(false)}
                className="hover:text-purple-400"
              >
                Previous Events
              </Link>

              <Link
                to="/collaboration"
                onClick={() => setMobileOpen(false)}
                className="hover:text-purple-400"
              >
                Partner
              </Link>

              <Link
                to="/rewards"
                onClick={() => setMobileOpen(false)}
                className="hover:text-purple-400"
              >
                Rewards
              </Link>

              <Link
                to="/about"
                onClick={() => setMobileOpen(false)}
                className="hover:text-purple-400"
              >
                About
              </Link>

              {user ? (
                <>
                  <Link
                    to="/profile"
                    onClick={() => setMobileOpen(false)}
                    className="hover:text-purple-400"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setMobileOpen(false);
                    }}
                    className="text-left text-red-400"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() => setMobileOpen(false)}
                    className="bg-purple-600 px-4 py-2 rounded-lg text-center"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setMobileOpen(false)}
                    className="bg-purple-600 px-4 py-2 rounded-lg text-center"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;