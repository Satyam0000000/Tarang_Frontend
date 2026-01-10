/* eslint-disable no-unused-vars */
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="w-full min-h-screen px-4 sm:px-10 py-16
      bg-gradient-to-b from-[#0b0b1e] via-[#151533] to-[#0b0b1e] text-white">

      {/* Heading */}
      <div className="max-w-5xl mx-auto mb-14 text-center">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-wide mb-4">
          Get in Touch
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Have questions, suggestions, or want to collaborate with us?  
          Reach out — we’d love to hear from you.
        </p>
      </div>

      {/* Content Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#1b1b38]/60 to-[#151533]/60
          backdrop-blur-xl rounded-2xl p-6 sm:p-8
          border border-purple-500/10 shadow-md"
        >
          <h2 className="text-xl font-semibold mb-6 text-gray-200">
            Contact Information
          </h2>

          <div className="space-y-5 text-gray-300 text-sm sm:text-base">
            <div className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-purple-400" />
              <a
                href="mailto:anand.tarang.nitj@gmail.com"
                className="hover:text-violet-400 transition-colors"
              >
                anand.tarang.nitj@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="w-5 h-5 text-purple-400" />
              <span>NIT Jalandhar, Punjab, India</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#1b1b38]/60 to-[#151533]/60
          backdrop-blur-xl rounded-2xl p-6 sm:p-8
          border border-purple-500/10 shadow-md"
        >
          <h2 className="text-xl font-semibold mb-4 text-gray-200">
            Contact Developer
          </h2>

          <p className="text-gray-400 text-sm sm:text-base mb-6">
            Facing any bugs, issues, or technical problems on the website?  
            Feel free to contact the developer directly.
          </p>

          <div className="space-y-4 text-gray-300 text-sm sm:text-base">
            <div className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-purple-400" />
              <a
                href="mailto:satyamgoswami2705@gmail.com"
                className="hover:text-violet-400 transition-colors"
              >
                satyamgoswami2705@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="w-5 h-5 text-purple-400" />
              <span>NIT Jalandhar, Punjab, India</span>
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;
