/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Registration() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("Backend_URL/api/register", formData);
     // const res = await axios.post("http://localhost:8000/register", formData); //for loacalhost
      alert(res.data.message);
      navigate("/login");
    } catch (err) {
      if (err.response && err.response.data.message === "User already exists") {
        setError("User already exists. Redirecting to login...");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        setError("Something went wrong. Try again later.");
      }
    }
  };

  return (
    <div
      className="
      min-h-screen flex items-center justify-center 
      bg-gradient-to-b from-[#0b0b1e] via-[#151533] to-[#0b0b1e]
      p-6 text-white
    "
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          w-full max-w-md 
          bg-[#151533]/40 backdrop-blur-xl 
          border border-purple-500/20 
          rounded-2xl shadow-lg 
          p-8
        "
      >
        <h2 className="text-3xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
          Create an Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            onChange={handleChange}
            required
            className="
              w-full p-3 rounded-xl 
              bg-[#ffffff0a] text-gray-200 
              border border-white/10
              placeholder-gray-400
              outline-none 
              focus:ring-2 focus:ring-purple-400/40
            "
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
            className="
              w-full p-3 rounded-xl 
              bg-[#ffffff0a] text-gray-200 
              border border-white/10
              placeholder-gray-400
              outline-none 
              focus:ring-2 focus:ring-purple-400/40
            "
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            className="
              w-full p-3 rounded-xl 
              bg-[#ffffff0a] text-gray-200 
              border border-white/10
              placeholder-gray-400
              outline-none 
              focus:ring-2 focus:ring-purple-400/40
            "
          />

          {error && (
            <p className="text-red-300 text-sm text-center">{error}</p>
          )}

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="
              w-full py-3 rounded-xl font-semibold
              bg-gradient-to-r from-purple-500 to-blue-500
              shadow-[0_0_20px_rgba(139,92,246,0.4)]
              transition-all
            "
          >
            Register
          </motion.button>
        </form>

        <p className="text-sm text-gray-300 text-center mt-4">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-purple-300 hover:underline cursor-pointer"
          >
            Login here
          </span>
        </p>
      </motion.div>
    </div>
  );
}

export default Registration;