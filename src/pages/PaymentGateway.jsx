/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function PaymentGateway() {
  const location = useLocation();
  const navigate = useNavigate();

  const passedAmount = location.state?.amount || "";
  const userData = location.state?.userData || null;

  const [upiId, setUpiId] = useState("");
  const [amount, setAmount] = useState(passedAmount);  
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handlePayment = async () => {
    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post("http://localhost:8000/create-upi-payment", {
        upiId,
        amount,
        userData,
      });

      if (response.data.success) {
        setMessage("UPI Request Sent! Please check your UPI app.");
      } else {
        setMessage("Failed to send UPI request.");
      }
    } catch (error) {
      setMessage("Error sending payment request.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#0b0b1e] via-[#151533] to-[#0b0b1e] text-white px-4">
      <div className="bg-[#1b1b38]/40 backdrop-blur-xl border border-gray-600/20 rounded-2xl p-8 w-full max-w-md shadow-lg">
        <h2 className="text-2xl font-semibold text-purple-300 mb-6 text-center">
          UPI Payment
        </h2>

        <label className="block mb-2 text-gray-300">Enter UPI ID</label>
        <input
          type="text"
          value={upiId}
          onChange={(e) => setUpiId(e.target.value)}
          placeholder="example@upi"
          className="w-full mb-4 px-4 py-2 rounded-lg bg-[#27274a]/40 border border-gray-600/30 text-white outline-none"
        />

        <p className="text-gray-300 mb-4 text-center text-lg">
          Amount: <span className="text-purple-300 font-semibold">₹{amount}</span>
        </p>

        <button
          onClick={handlePayment}
          disabled={loading}
          className="w-full mt-4 bg-purple-600 hover:bg-purple-700 transition text-white py-2 rounded-lg text-lg disabled:opacity-50"
        >
          {loading ? "Processing..." : "Pay Now"}
        </button>

        {message && (
          <p className="text-center mt-4 text-purple-300">{message}</p>
        )}
      </div>
    </div>
  );
}

export default PaymentGateway;