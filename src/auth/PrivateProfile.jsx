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
    <div>
      <h2 className="text-xl font-bold mb-4">Participated Events</h2>

      {events.length === 0 ? (
        <p>You haven’t registered for any events yet.</p>
      ) : (
        <div className="space-y-4">
          {events.map((event) => (
            <div
              key={event._id}
              className="border rounded-lg p-4 shadow-sm"
            >
              <h3 className="font-semibold text-lg">{event.eventName}</h3>
              <p>Event ID: {event.eventId}</p>
              <p>Status: {event.paymentStatus}</p>
              <p>Amount: ₹{event.amount}</p>
              <p className="text-sm text-gray-500">
                Registered on: {new Date(event.registeredAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Profile;