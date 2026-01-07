import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

function PaymentSuccess() {
  const [params] = useSearchParams();
  const orderId = params.get("order_id");

  const [status, setStatus] = useState("Verifying payment...");

  useEffect(() => {
    if (!orderId) {
      setStatus("⚠️ Order ID missing from payment redirect");
      return;
    }

    const verifyPayment = async () => {
      try {
        const res = await axios.get(
          `https://tarang-backend-alpha.vercel.app/api/verify-payment/${orderId}`
        );

        if (
          res.data.order_status === "PAID" ||
          res.data.order_status === "SUCCESS"
        ) {
          setStatus("✅ Payment Successful");
        } else {
          setStatus("⏳ Payment Pending");
        }
      } catch (error) {
        console.error("Verification API failed, trusting Cashfree redirect:", error);
        setStatus("✅ Payment Successful");
      }
    };

    verifyPayment();
  }, [orderId]);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-[#0b0b1e] via-[#151533] to-[#0b0b1e] text-white px-4 pt-28">
      <div className="relative max-w-lg w-full rounded-2xl border border-violet-400/15 bg-[#141432]/70 p-8 text-center shadow-md">

        <h1 className="text-3xl font-bold tracking-wide text-white">
          {status}
        </h1>

        <p className="mt-4 text-sm text-violet-200">
          Thank you for participating in <span className="font-semibold text-violet-400">Tarang</span>.
          Your enthusiasm and presence make the event truly special.
        </p>

        {orderId && (
          <div className="mt-6 rounded-lg border border-violet-500/20 bg-black/30 px-4 py-3">
            <p className="text-xs uppercase tracking-widest text-violet-300">
              Order ID
            </p>
            <p className="mt-1 break-all text-sm font-medium text-white">
              {orderId}
            </p>
          </div>
        )}

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/events"
            className="rounded-lg bg-violet-600 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-violet-700"
          >
            Explore More Events
          </a>
          <a
            href="/profile"
            className="rounded-lg border border-violet-500/40 px-6 py-2.5 text-sm font-medium text-violet-300 transition hover:bg-violet-500/10"
          >
            View Profile
          </a>
        </div>

      </div>
    </div>
  );
}

export default PaymentSuccess;