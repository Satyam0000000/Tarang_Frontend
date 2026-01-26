import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import jsPDF from "jspdf";

function PaymentSuccess() {
  const [params] = useSearchParams();
  const orderId = params.get("order_id");

  const [status, setStatus] = useState("VERIFYING");
  const [paymentId, setPaymentId] = useState(null);
  const [details, setDetails] = useState(null);

  const downloadPDF = () => {
    const doc = new jsPDF();
    const generatedAt = new Date().toLocaleString();

    // 🔷 Header
    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.text("TARANG CLUB", 105, 20, { align: "center" });

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text("Event Registration Receipt", 105, 28, { align: "center" });
    doc.setFontSize(10);
    doc.text(`Generated on: ${generatedAt}`, 105, 35, { align: "center" });

    // 🔹 Divider
    doc.line(20, 42, 190, 42);

    let y = 52;

    // 🔹 Payment Summary
    doc.setFontSize(11);
    doc.setFont("helvetica", "bold");
    doc.text("Payment Summary", 20, y);
    y += 8;

    doc.setFont("helvetica", "normal");
    doc.text(`Order ID: ${orderId || "-"}`, 20, y); y += 7;
    doc.text(`Payment ID: ${paymentId || "-"}`, 20, y); y += 7;
    doc.text(`Status: ${status}`, 20, y); y += 10;

    // 🔹 Participant Details
    if (details) {
      doc.setFont("helvetica", "bold");
      doc.text("Participant Details", 20, y);
      y += 8;

      doc.setFont("helvetica", "normal");
      doc.text(`Name: ${details.name}`, 20, y); y += 7;
      doc.text(`Email: ${details.email}`, 20, y); y += 7;
      doc.text(`Event: ${details.eventName}`, 20, y); y += 10;

      // 🔸 Amount Highlight
      doc.setFont("helvetica", "bold");
      doc.setFontSize(14);
      doc.text(`Amount Paid: ₹ ${details.amount}`, 20, y);
      y += 12;

      // 🔸 Join Link
      if (details.eventLink) {
        doc.setFontSize(11);
        doc.setFont("helvetica", "bold");
        doc.text("Google Meet Link:", 20, y);
        y += 7;

        doc.setTextColor(0, 0, 255);
        doc.setFont("helvetica", "normal");
        doc.textWithLink(
          "Join Meeting (Use same Email ID)",
          20,
          y,
          { url: details.eventLink }
        );
        doc.setTextColor(0, 0, 0);
        y += 10;
      }
    }

    // 🔹 Footer
    doc.line(20, y, 190, y);
    y += 8;

    doc.setFontSize(9);
    doc.text(
      "This is a system-generated receipt. Please do not reply to this document.",
      105,
      y,
      { align: "center" }
    );

    doc.save(`Tarang_Receipt_${orderId || "payment"}.pdf`);
  };

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
        

        {(status === "VERIFYING" || status === "PENDING") && (
          <div className="mb-4 flex justify-center">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-violet-500/30 border-t-violet-500"></div>
          </div>
        )}

        <h1 className="text-3xl font-bold tracking-wide text-white">
          {status === "VERIFYING" && "Verifying payment..."}
          {status === "PAID" && "Payment Successful "}
          {status === "PENDING" && "Payment Pending "}
          {status === "FAILED" && "Payment Failed "}
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
            {details.eventLink && (
              <p>
                <span className="font-semibold">Join Link:</span>{" "}
                <a
                  href={details.eventLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 underline"
                >
                  Google Meet (Join with same Email ID)
                </a>
              </p>
            )}
          </div>
        )}

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={downloadPDF}
            className="rounded-lg border border-emerald-500/40 px-6 py-2.5 text-sm font-medium text-emerald-300 transition hover:bg-emerald-500/10"
          >
            Download PDF
          </button>
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