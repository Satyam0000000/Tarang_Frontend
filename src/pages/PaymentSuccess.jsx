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
    <div className="flex items-center justify-center min-h-[60vh] bg-gray-50 dark:bg-neutral-900">
      <div className="rounded-xl bg-white dark:bg-neutral-800 px-8 py-6 shadow-md text-center">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
          {status}
        </h1>
        {orderId && (
          <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
            Order ID: <span className="font-medium">{orderId}</span>
          </p>
        )}
      </div>
    </div>
  );
}

export default PaymentSuccess;