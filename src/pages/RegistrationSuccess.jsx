import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function RegistrationSuccess() {
  const navigate = useNavigate();
  const { state } = useLocation();

  // Fallback if page is refreshed or accessed directly
  if (!state) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Registration Successful</h1>
          <p className="mt-2 text-sm text-gray-400">
            Your registration was successful.
          </p>
          <button
            onClick={() => navigate("/")}
            className="mt-6 rounded-md bg-violet-600 px-6 py-2 text-sm font-semibold text-white hover:bg-violet-700"
          >
            Go to Home
          </button>
        </div>
      </div>
    );
  }

  const { fullName, email, eventName, amount } = state;

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-black via-violet-950 to-black px-4">
      <div className="w-full max-w-md rounded-2xl border border-violet-500/20 bg-black/40 p-8 text-white shadow-xl backdrop-blur">
        <h1 className="text-3xl font-bold tracking-wide text-white">
          Registration Successful 🎉
        </h1>

        <p className="mt-3 text-sm text-violet-200">
          You have been successfully registered for the event.
        </p>

        <div className="mt-6 space-y-4">
          <div className="rounded-lg border border-violet-500/20 bg-black/30 px-4 py-3">
            <p className="text-xs uppercase tracking-widest text-violet-300">
              Name
            </p>
            <p className="mt-1 text-sm font-medium text-white">
              {fullName}
            </p>
          </div>

          <div className="rounded-lg border border-violet-500/20 bg-black/30 px-4 py-3">
            <p className="text-xs uppercase tracking-widest text-violet-300">
              Email
            </p>
            <p className="mt-1 text-sm font-medium text-white">
              {email}
            </p>
          </div>

          <div className="rounded-lg border border-violet-500/20 bg-black/30 px-4 py-3">
            <p className="text-xs uppercase tracking-widest text-violet-300">
              Event
            </p>
            <p className="mt-1 text-sm font-medium text-white">
              {eventName}
            </p>
          </div>

          <div className="rounded-lg border border-emerald-500/20 bg-black/30 px-4 py-3">
            <p className="text-xs uppercase tracking-widest text-emerald-300">
              Amount
            </p>
            <p className="mt-1 text-sm font-semibold text-white">
              ₹{amount}
            </p>
          </div>
        </div>

        <div className="mt-8 flex gap-4">
          <button
            onClick={() => navigate("/")}
            className="flex-1 rounded-md bg-violet-600 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-700"
          >
            Go to Home
          </button>

          <button
            onClick={() => navigate("/events")}
            className="flex-1 rounded-md border border-violet-500/40 px-4 py-2 text-sm font-semibold text-violet-300 hover:bg-violet-500/10"
          >
            View Events
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegistrationSuccess;
