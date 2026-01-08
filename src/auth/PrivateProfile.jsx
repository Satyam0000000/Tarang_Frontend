import { useEffect, useState } from "react";
import axios from "axios";

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

  if (loading) return <p>Loading your events...</p>;

  return (
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
  );
}

export default Profile;