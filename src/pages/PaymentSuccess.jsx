import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

function PaymentSuccess() {
  const [params] = useSearchParams();
  const orderId = params.get("order_id");

  const [status, setStatus] = useState("Verifying payment...");

  useEffect(() => {
    if (!orderId) {
      setStatus("Invalid payment");
      return;
    }

    const verifyPayment = async () => {
      try {
        const res = await axios.get(
          `https://tarang-backend-alpha.vercel.app/api/verify-payment/${orderId}`
        );

        if (res.data.order_status === "PAID") {
          setStatus("✅ Payment Successful");
        } else {
          setStatus("❌ Payment Failed or Pending");
        }
      } catch (error) {
        setStatus("❌ Verification failed",error);
      }
    };

    verifyPayment();
  }, [orderId]);

  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      <h1 className="text-2xl">{status}</h1>
    </div>
  );
}

export default PaymentSuccess;