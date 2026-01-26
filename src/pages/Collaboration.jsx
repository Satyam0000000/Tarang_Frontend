import React from 'react'
import founderPic from "../assets/founder.png";
import developerPic from "../assets/developer.png";

function Collaboration() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0b1e] via-[#151533] to-[#0b0b1e] text-white pt-32 pb-20 flex flex-col items-center space-y-16">
      {/* Founder Card */}
      <div className="flex flex-col md:flex-row items-center md:items-center md:space-x-6 space-y-4 md:space-y-0 w-11/12 md:w-3/4">
        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-xl font-semibold text-purple-300">Founder</h2>
          <div className="w-36 h-36 rounded-full overflow-hidden border-2 border-purple-500/40">
            <img src={founderPic} alt="Founder" className="w-full h-full object-cover" />
          </div>
          <p className="text-white font-bold text-base">
            Anand
          </p>
        </div>

        <p className="text-gray-300 text-sm leading-relaxed space-y-3">
          <span className="block">
            I am Anand, a student from NIT Jalandhar and the founder of this initiative.
          </span>

          <span className="block">
            I have a deep interest in reading, history, geopolitics, debating, and poetry,
            and I have been actively performing poetry for the past 7 years.
          </span>

          <span className="block">
            Building this platform is not just a project for me — it is a personal mission
            to create meaningful opportunities for young people to learn, express, and lead.
          </span>
        </p>
      </div>

      {/* Developer Card */}
      <div className="flex flex-col md:flex-row items-center md:items-center md:space-x-6 space-y-4 md:space-y-0 w-11/12 md:w-3/4">
        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-xl font-semibold text-purple-300">Developer</h2>
          <div className="w-36 h-36 rounded-full overflow-hidden border-2 border-purple-500/40">
            <img src={developerPic} alt="Developer" className="w-full h-full object-cover" />
          </div>
          <p className="text-white font-bold text-base">
            Satyam Goswami
          </p>
        </div>
        <p className="text-gray-300 text-sm leading-relaxed space-y-3">
          <span className="block">
            I am a B.Tech student from NIT Jalandhar and a full-stack MERN developer.
          </span>

          <span className="block">
            I work on making all types of web applications, AI models, and AI-powered systems
            integrated with web applications, including workflow-based AI apps similar to n8n.
          </span>

          <span className="block">
            Along with my academic journey, I also take up freelance projects and enjoy
            collaborating with individuals and teams.
          </span>

          <span className="block">
            📩 You can contact me at{" "}
            <a
              href="mailto:satyamgoswami2705@gmail.com"
              className="text-purple-400 hover:underline"
            >
              satyamgoswami2705@gmail.com
            </a>
          </span>
        </p>
      </div>
    </div>
  )
}

export default Collaboration