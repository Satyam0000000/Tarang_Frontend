import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <div className="
      min-h-screen 
      bg-gradient-to-b from-[#0b0b1e] via-[#151533] to-[#0b0b1e] 
      text-white px-6 sm:px-12 py-20
    ">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <motion.h1
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="
            text-4xl sm:text-5xl font-bold mb-6 text-center 
            bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400
          "
        ><br/>
          Tarang – Where Voices Create Waves
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="text-center text-xl italic text-purple-300 mb-12"
        >
          “संवादे सत्यं वर्धते” — “Through dialogue, truth grows.”
        </motion.p>

        {/* Section 1 */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="space-y-5 mb-20 text-lg leading-relaxed text-gray-300"
        >
          <p>
            Tarang is not just a platform — it’s a movement of ideas, emotions,
            and expressions. Built for college students from across India,
            Tarang celebrates debate, MUN, poetry, and storytelling — where every
            voice creates a ripple of change.
          </p>

          <p>
            Here, intellect meets creativity. Confidence meets cause. And every
            word spoken echoes with the rhythm of new ideas — the <span className="font-semibold text-purple-300">
            Tarang (wave)</span> of youth expression.
          </p>
        </motion.div>

        {/* Essence */}
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="
            text-3xl font-semibold mb-6 
            bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300
          "
        >
          Our Essence
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="italic text-xl text-purple-300 mb-6"
        >
          “उद्यमेन हि सिद्ध्यन्ति कार्याणि न मनोरथैः” —  
          “Success is achieved through effort, not mere wishes.”
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="space-y-5 mb-20 text-lg text-gray-300 leading-relaxed"
        >
          <p>
            Tarang is built to ignite confidence and curiosity among students.
            We aim to create a culture where discussion replaces silence and
            awareness replaces apathy — inspiring young minds to speak for what
            matters.
          </p>
          <p>
            We believe in building leaders through communication, shaping
            personalities that thrive in classrooms, boardrooms, and beyond.
          </p>
        </motion.div>

        {/* Events Section */}
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="
            text-3xl font-semibold mb-10
            bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300
          "
        >
          Our Events
        </motion.h2>

        {/* Event Cards */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Debate & MUN */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="
              p-6 bg-[#151533]/40 backdrop-blur-md 
              border border-purple-400/20 rounded-2xl 
              shadow-[0_0_25px_rgba(139,92,246,0.2)]
            "
          >
            <h3 className="text-2xl font-semibold mb-3 text-purple-300">
              Debate & MUN
            </h3>
            <p className="text-purple-200 mb-4 italic">
              “विवादो बुद्धिवर्धनः” — “Debate enhances intelligence.”
            </p>
            <p className="text-gray-300">
              Sharpen your intellect, refine your logic, and learn the art of
              diplomacy. Discuss India’s challenges & global issues — become a
              voice that inspires change.
            </p>
          </motion.div>

          {/* Poetry Slam */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="
              p-6 bg-[#151533]/40 backdrop-blur-md 
              border border-purple-400/20 rounded-2xl 
              shadow-[0_0_25px_rgba(139,92,246,0.2)]
            "
          >
            <h3 className="text-2xl font-semibold mb-3 text-purple-300">Poetry Slam</h3>
            <p className="text-purple-200 mb-4 italic">
              “कविता हृदयस्य स्वरः” — “Poetry is the voice of the heart.”
            </p>
            <p className="text-gray-300">
              Let your words paint emotions. Celebrate creativity through rhythm
              and reflection — where poetry becomes the heartbeat of society.
            </p>
          </motion.div>

          {/* Storytelling */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="
              p-6 bg-[#151533]/40 backdrop-blur-md 
              border border-purple-400/20 rounded-2xl 
              shadow-[0_0_25px_rgba(139,92,246,0.2)] md:col-span-2
            "
          >
            <h3 className="text-2xl font-semibold mb-3 text-purple-300">Storytelling</h3>
            <p className="text-purple-200 mb-4 italic">
              “कथासु निहितं ज्ञानम्” — “Wisdom resides within stories.”
            </p>
            <p className="text-gray-300">
              Every story carries a lesson, every voice carries a dream. Bring
              imagination to life and inspire others through narrative.
            </p>
          </motion.div>

        </div>
      </div>
    </div>
  );
}