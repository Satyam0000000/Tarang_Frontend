/* eslint-disable no-unused-vars */
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import {motion} from "framer-motion" 
import { useLocation } from "react-router-dom";
import axios from "axios"

function OtpVerification() {

    const location = useLocation()
    const email = location.state?.email;
    const [formData, setFormData] = useState({
        email_OTP: ""
    })
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        setLoading(true)

        try {
            
            const res = await axios.post("https://tarang-backend-alpha.vercel.app/api/verify-otp",{
                email: email,
                email_OTP: formData.email_OTP
            })
            setLoading(false)
            navigate("/login")

        } catch (err) {
            setLoading(false)
            if (err.response && err.response.data.message === "OTP Expired"){ 
            setError("OTP Expired");

            } else if (err.response && err.response.data.message === "OTP Incorrect"){ 
            setError("OTP Incorrect");
            setTimeout(() => navigate("/login"), 2000);
            
      } else {
        setError("Something went wrong. Try again later.");
      }
        
        
    }

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
          Enter OTP
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Enter OTP */}
          <input
            type="number"
            name="email_OTP"
            placeholder="Enter OTP"
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
            whileHover={!loading ? { scale: 1.03 } : {}}
            whileTap={!loading ? { scale: 0.95 } : {}}
            type="submit"
            disabled={loading}
            className={`
              w-full py-3 rounded-xl font-semibold
              bg-gradient-to-r from-purple-500 to-blue-500
              shadow-[0_0_20px_rgba(139,92,246,0.4)]
              transition-all flex items-center justify-center
              ${loading ? "opacity-70 cursor-not-allowed" : ""}
            `}
          >
            {loading ? (
              <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : (
              "Verify OTP"
            )}
          </motion.button>
        </form>


      </motion.div>
    </div>
  )
}

export default OtpVerification