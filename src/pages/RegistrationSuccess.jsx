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
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-[#0b0b1e] via-[#151533] to-[#0b0b1e] text-white px-4 pt-28">
      <div className="relative max-w-lg w-full rounded-2xl border border-violet-400/15 bg-[#141432]/70 p-8 shadow-md">
        <h1 className="text-3xl font-bold tracking-wide text-white text-center">
          Registration Successful
        </h1>

        <p className="mt-4 text-sm text-violet-200 text-center">
          Your registration has been completed successfully.
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

        <div className="mt-8 flex justify-between gap-4">
          <button
            onClick={() => navigate("/")}
            className="rounded-lg border border-violet-500/40 px-6 py-2.5 text-sm font-medium text-violet-300 transition hover:bg-violet-500/10"
          >
            Home
          </button>

          <button
            onClick={() => navigate("/UpcomingEvents")}
            className="rounded-lg bg-violet-600 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-violet-700"
          >
            Explore Events
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegistrationSuccess;
