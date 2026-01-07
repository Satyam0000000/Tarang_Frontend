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
        console.error(error);
        setStatus("❌ Verification failed");
      }
    };

    verifyPayment();
  }, [orderId]);

  return (
    <div className="flex items-center justify-center min-h-[60vh] text-black">
      <h1 className="text-2xl">{status}</h1>
    </div>
  );
}

export default PaymentSuccess;