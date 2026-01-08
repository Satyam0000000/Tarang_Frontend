import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

function PaymentSuccess() {
  const [params] = useSearchParams();
  const orderId = params.get("order_id");

  const [status, setStatus] = useState("VERIFYING");
  const [paymentId, setPaymentId] = useState(null);
  const [details, setDetails] = useState(null);

  useEffect(() => {
    if (!orderId) {
      setStatus("FAILED");
      return;
    }

    const interval = setInterval(async () => {
      try {
        const res = await axios.get(
          `https://tarang-backend-alpha.vercel.app/api/verify-payment/${orderId}`
        );

        const { status, paymentId, details } = res.data;

        // 🔹 Always update status if backend responds
        setStatus(status || "PENDING");

        if (paymentId) setPaymentId(paymentId);
        if (details) setDetails(details);

        if (status === "PAID" || status === "FAILED") {
          clearInterval(interval);
        }
      } catch (err) {
        console.error("Payment verification error:", err);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [orderId]);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-[#0b0b1e] via-[#151533] to-[#0b0b1e] text-white px-4 pt-28">
      <div className="relative max-w-lg w-full rounded-2xl border border-violet-400/15 bg-[#141432]/70 p-8 text-center shadow-md">
        

        <h1 className="text-3xl font-bold tracking-wide text-white">
          {status === "VERIFYING" && "Verifying payment..."}
          {status === "PAID" && "Payment Successful 🎉"}
          {status === "PENDING" && "Payment Pending ⏳"}
          {status === "FAILED" && "Payment Failed ❌"}
        </h1>

        <p className="mt-4 text-sm text-violet-200">
          {status === "PAID" &&
            "Your payment has been confirmed and your registration is complete."}
          {status === "PENDING" &&
            "Your payment is being processed. Please wait, this page will update automatically."}
          {status === "FAILED" &&
            "Payment failed. If any amount was deducted, it will be refunded automatically."}
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

        {paymentId && (
          <div className="mt-4 rounded-lg border border-emerald-500/20 bg-black/30 px-4 py-3">
            <p className="text-xs uppercase tracking-widest text-emerald-300">
              Payment ID
            </p>
            <p className="mt-1 break-all text-sm font-medium text-white">
              {paymentId}
            </p>
          </div>
        )}

        {details && (
          <div className="mt-4 rounded-lg border border-violet-500/20 bg-black/30 px-4 py-3 text-left text-sm text-violet-200 space-y-1">
            <p><span className="font-semibold">Name:</span> {details.name}</p>
            <p><span className="font-semibold">Email:</span> {details.email}</p>
            <p><span className="font-semibold">Event:</span> {details.eventName}</p>
            <p><span className="font-semibold">Amount:</span> ₹{details.amount}</p>
          </div>
        )}

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/UpcomingEvents"
            className="rounded-lg bg-violet-600 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-violet-700"
          >
            Explore More Events
          </a>
          <a
            href="/"
            className="rounded-lg border border-violet-500/40 px-6 py-2.5 text-sm font-medium text-violet-300 transition hover:bg-violet-500/10"
          >
            Home
          </a>
        </div>

      </div>
    </div>
  );
}

export default PaymentSuccess;