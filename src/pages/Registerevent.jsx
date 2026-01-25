import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function RegisterEvent() {
  const location = useLocation();
  const navigate = useNavigate();
  const eventAmount = location.state?.amount || null;
  const eventId = location.state?.eventId || null;
  const eventName = location.state?.eventName || null;

  const initialFormState = {
    fullName: "",
    collegeName: "",
    phone: "",
    degree: "",
    year: "",
    heardFrom: "",
    customerId: "",
  };
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initialFormState);
  const [couponCode, setCouponCode] = useState("");
  const [discountedAmount, setDiscountedAmount] = useState(eventAmount);

  const degreeYears = {
    BTech: ["1st Year", "2nd Year", "3rd Year", "4th Year"],
    MTech: ["1st Year", "2nd Year"],
    PhD: ["PhD"],
  };

  // 🎟️ Coupon configuration (editable anytime)
  const COUPONS = {
    TARANG60: 60, // 60% off
    TARANG30: 30, // 30% off
  };

  const applyCoupon = () => {
    if (!couponCode || !eventAmount) return;

    const discountPercent = COUPONS[couponCode.toUpperCase()];
    if (!discountPercent) {
      alert("Invalid coupon code");
      setDiscountedAmount(eventAmount);
      return;
    }

    const finalAmount =
      Math.round(eventAmount - (eventAmount * discountPercent) / 100);

    setDiscountedAmount(finalAmount);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const generatedCustomerId = `EVT_${Date.now()}`;
      const paymentUserData = {
        customerId: generatedCustomerId,
        name: formData.fullName,
        phone: formData.phone,
        collegeName: formData.collegeName,
        degree: formData.degree,
        year: formData.year,
        heardFrom: formData.heardFrom,
        eventId,
        eventName,
      };
      if (eventAmount) {
        const token = localStorage.getItem("token");

        // 🔐 Ensure user is logged in before paid registration
        if (!token) {
          alert("Please login to register for the event");
          setLoading(false);
          return;
        }

        // 👉 JWT stays in localStorage, will be sent in createOrder API
        navigate("/payment", {
          state: {
            amount: discountedAmount,
            userData: paymentUserData,
            eventId,
            eventName,
            couponCode,
          },
        });

        setLoading(false);
      } else {
        const token = localStorage.getItem("token");
        if (!token) {
          alert("Please login to register for the event");
          setLoading(false);
          return;
        }
        await axios.post(
          "https://tarang-backend-alpha.vercel.app/api/registerEvent",
          {
            ...formData,
            eventId,
            eventName,
            amount: 0,
            paymentStatus: "FREE",
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setLoading(false);

        // ✅ Redirect to free registration success page
        navigate("/registration-success", {
          state: {
            fullName: formData.fullName,
            phone: formData.phone,
            eventName,
            amount: 0,
            type: "FREE",
          },
        });

        setFormData(initialFormState);
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
      alert("Registration Failed!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0b1e] via-[#151533] to-[#0b0b1e] text-white flex justify-center pt-32 pb-20 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-[#1b1b38]/40 backdrop-blur-xl border border-gray-600/20 rounded-2xl p-8 w-full max-w-lg shadow-lg"
      >
        <h2 className="text-3xl font-semibold text-purple-300 mb-6 text-center">
          Event Registration
        </h2>

        <label className="block mb-3 text-gray-300">Full Name</label>
        <input
          type="text"
          name="fullName"
          required
          value={formData.fullName}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 rounded-lg bg-[#27274a]/40 border border-gray-600/30 text-white outline-none"
        />

        <label className="block mb-3 text-gray-300">College Name</label>
        <input
          type="text"
          name="collegeName"
          required
          value={formData.collegeName}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 rounded-lg bg-[#27274a]/40 border border-gray-600/30 text-white outline-none"
        />

        <label className="block mb-3 text-gray-300">Phone Number</label>
        <input
          type="text"
          inputMode="numeric"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 rounded-lg bg-[#27274a]/40 border border-gray-600/30 text-white outline-none"
          pattern="[0-9]*"
        />

        <label className="block mb-3 text-gray-300">Degree</label>
        <select
          name="degree"
          required
          value={formData.degree}
          onChange={(e) => {
            setFormData({
              ...formData,
              degree: e.target.value,
              year: "",
            });
          }}
          className="w-full mb-4 px-4 py-2 rounded-lg bg-[#27274a]/40 border border-gray-600/30 text-white outline-none"
        >
          <option value="">Select Degree</option>
          <option value="BTech">B.Tech</option>
          <option value="MTech">M.Tech</option>
          <option value="PhD">Ph.D</option>
        </select>

        <label className="block mb-3 text-gray-300">Year</label>
        <select
          name="year"
          required
          disabled={!formData.degree}
          value={formData.year}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 rounded-lg bg-[#27274a]/40 border border-gray-600/30 text-white outline-none disabled:opacity-40"
        >
          <option value="">Select Year</option>
          {formData.degree &&
            degreeYears[formData.degree].map((yr, idx) => (
              <option key={idx} value={yr}>
                {yr}
              </option>
            ))}
        </select>

        <label className="block mb-3 text-gray-300">Where did you hear about us?</label>
        <select
          name="heardFrom"
          required
          value={formData.heardFrom}
          onChange={handleChange}
          className="w-full mb-6 px-4 py-2 rounded-lg bg-[#27274a]/40 border border-gray-600/30 text-white outline-none"
        >
          <option value="">Select Option</option>
          <option value="Friend">Friend</option>
          <option value="Social Media">Social Media</option>
          <option value="Website">Website</option>
        </select>

        {eventAmount && (
          <>
            <label className="block mb-3 text-gray-300">Coupon Code</label>
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Enter coupon code"
                className="flex-1 px-4 py-2 rounded-lg bg-[#27274a]/40 border border-gray-600/30 text-white outline-none"
              />
              <button
                type="button"
                onClick={applyCoupon}
                className="px-4 py-2 rounded-lg font-semibold bg-purple-600 hover:bg-purple-700 transition"
              >
                Apply
              </button>
            </div>

            {discountedAmount !== eventAmount && (
              <p className="text-green-400 mb-4">
                Coupon applied! Pay ₹{discountedAmount} instead of ₹{eventAmount}
              </p>
            )}
          </>
        )}

        <button
          type="submit"
          disabled={loading}
          className={`
            w-full mt-4 py-2 rounded-lg text-lg font-semibold
            bg-gradient-to-r from-purple-500 to-blue-500
            shadow-[0_0_20px_rgba(139,92,246,0.4)]
            transition-all flex items-center justify-center
            ${loading ? "opacity-70 cursor-not-allowed" : "hover:scale-[1.02]"}
          `}
        >
          {loading ? (
            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
          ) : (
            "Submit Registration"
          )}
        </button>
      </form>
    </div>
  );
}

export default RegisterEvent;