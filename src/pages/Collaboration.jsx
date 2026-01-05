import React from 'react'
import founderPic from "../assets/founder.jpg";
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
        </div>
        <p className="text-gray-300 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros eget nulla 
          fermentum varius. Maecenas auctor, magna sit amet elementum posuere, risus arcu 
          gravida nibh, sed vehicula lorem nulla sed elit. In hac habitasse platea dictumst.
        </p>
      </div>

      {/* Developer Card */}
      <div className="flex flex-col md:flex-row items-center md:items-center md:space-x-6 space-y-4 md:space-y-0 w-11/12 md:w-3/4">
        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-xl font-semibold text-purple-300">Developer</h2>
          <div className="w-36 h-36 rounded-full overflow-hidden border-2 border-purple-500/40">
            <img src={developerPic} alt="Developer" className="w-full h-full object-cover" />
          </div>
        </div>
        <p className="text-gray-300 text-sm leading-relaxed">
          I am a B.Tech student from NIT Jalandhar and a full-stack MERN developer.
      I work on making all types of web applications, AI models, and AI-powered systems integrated
       with web applications, including workflow-based AI apps similar to n8n.
      Along with my academic journey, I also take up freelance projects and enjoy collaborating with 
      individuals and teams.
     📩 You can contact me at satyamgoswami2705@gmail.com for freelance work, collaborations, or any queries.
        </p>
      </div>
    </div>
  )
}

export default Collaboration