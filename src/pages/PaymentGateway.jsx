/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function PaymentGateway() {
  const location = useLocation();

  const passedAmount = location.state?.amount || "";
  const userData = location.state?.userData || null;

  const [amount, setAmount] = useState(passedAmount);  
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handlePayment = async () => {
    if (!userData) {
      setMessage("Please login before making payment.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      console.log("Sending to backend:", {
        amount,
        customer: {
          id: userData.customerId,
          name: userData.name,
          email: userData.email,
          phone: userData.phone,
        },
      });
      const res = await axios.post(
        "https://tarang-backend-alpha.vercel.app/api/create-order",
        {
          amount,
          customer: {
            id: userData.customerId,
            name: userData.name,
            email: userData.email,
            phone: userData.phone,
          },
        }
      );

      // Redirect to Cashfree Checkout
      if (!res.data.payment_link) {
        throw new Error("Payment link not received from backend");
      }
      window.location.href = res.data.payment_link;
    } catch (error) {
      console.error(error);
      setMessage("Payment initiation failed.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#0b0b1e] via-[#151533] to-[#0b0b1e] text-white px-4">
      <div className="bg-[#1b1b38]/40 backdrop-blur-xl border border-gray-600/20 rounded-2xl p-8 w-full max-w-md shadow-lg">
        <h2 className="text-2xl font-semibold text-purple-300 mb-6 text-center">
          Payment
        </h2>

        <p className="text-gray-300 mb-4 text-center text-lg">
          Amount: <span className="text-purple-300 font-semibold">₹{amount}</span>
        </p>

        <button
          onClick={handlePayment}
          disabled={loading}
          className="w-full mt-4 bg-purple-600 hover:bg-purple-700 transition text-white py-2 rounded-lg text-lg disabled:opacity-50"
        >
          {loading ? "Redirecting..." : "Pay Now"}
        </button>

        {message && (
          <p className="text-center mt-4 text-purple-300">{message}</p>
        )}
      </div>
    </div>
  );
}

export default PaymentGateway;