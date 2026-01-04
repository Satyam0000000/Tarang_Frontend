import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("Backend_URL/api/login", formData); //for vercel
      //const res = await axios.post("http://localhost:8000/login", formData); //for local
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        setUser(res.data.user);
        navigate("/");
      } else {
        setError(res.data.message);
      }
    } catch (err) {
      setError("Invalid credentials or server error",err);
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
        initial={{ opacity: 0, y: 40 }}
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
        <h2
          className="
          text-3xl font-bold text-center mb-6
          bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400
        "
        >
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="
              w-full p-3 rounded-xl 
              bg-[#ffffff0a] text-gray-200 
              border border-white/10
              placeholder-gray-400
              outline-none 
              focus:ring-2 focus:ring-purple-400/30
            "
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="
              w-full p-3 rounded-xl 
              bg-[#ffffff0a] text-gray-200 
              border border-white/10
              placeholder-gray-400
              outline-none 
              focus:ring-2 focus:ring-purple-400/30
            "
          />

          {error && (
            <p className="text-red-300 text-sm text-center">{error}</p>
          )}

          {/* Login button */}
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
            Login
          </motion.button>
        </form>

        <p className="text-sm text-gray-300 text-center mt-4">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-purple-300 hover:underline cursor-pointer"
          >
            Register here
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;