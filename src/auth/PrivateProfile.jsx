import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function Profile() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          "https://tarang-backend-alpha.vercel.app/api/my-registrations",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setEvents(res.data.data);
      } catch (err) {
        console.error("Failed to load registrations", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRegistrations();
  }, []);

  if (loading) {
    return (
      <div
        className="
          min-h-screen pt-24 px-4 flex items-start justify-center
          bg-gradient-to-b from-[#0b0b1e] via-[#151533] to-[#0b0b1e]
          text-white
        "
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            w-full max-w-5xl
            bg-[#151533]/40 backdrop-blur-xl
            border border-purple-500/20
            rounded-2xl shadow-lg
            p-8
          "
        >
          <h2
            className="
              text-2xl font-bold mb-6
              bg-clip-text text-transparent
              bg-gradient-to-r from-purple-400 to-blue-400
            "
          >
            Loading your profile…
          </h2>

          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="
                  h-24 rounded-xl
                  bg-[#ffffff0a]
                  border border-white/10
                  animate-pulse
                "
              />
            ))}
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div
      className="
        min-h-screen
        bg-gradient-to-b from-[#0b0b1e] via-[#151533] to-[#0b0b1e]
        text-white
      "
    >
      <div className="pt-24 px-4 max-w-5xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Participated Events</h2>

      {events.length === 0 ? (
        <p>You haven’t registered for any events yet.</p>
      ) : (
        <div className="space-y-4">
          {events.map((event) => (
            <div
              key={event._id}
              className="rounded-xl p-5 bg-white/5 backdrop-blur border border-white/10 shadow-lg hover:shadow-xl transition-all"
            >
              <h3 className="font-semibold text-lg text-white">{event.eventName}</h3>
              <p className="text-sm mt-1">
                Status: <span className="font-medium text-green-400">{event.paymentStatus}</span>
              </p>
              <p className="text-sm">
                Amount: <span className="font-medium text-indigo-400">₹{event.amount}</span>
              </p>
              <p className="text-xs text-gray-400 mt-2">
                Registered on: {new Date(event.createdAt).toLocaleDateString("en-IN", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
          ))}
        </div>
      )}
      </div>
    </div>
  );
}

export default Profile;