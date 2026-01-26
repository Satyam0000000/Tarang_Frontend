import React from "react";

function RewardedFellow() {
  const rewards = [
    {
      title: "Domino's Discount Coupon",
      description: "Flat ₹200 off on any medium or large pizza combo.",
      bg: "from-purple-500/20 to-purple-900/40",
      icon: "",
    },
    {
      title: "Nescafé Free Beverage",
      description: "Enjoy one free coffee at the Nescafé outlet inside campus.",
      bg: "from-pink-500/20 to-pink-900/40",
      icon: "☕",
    },
    {
      title: "Goodies Pack",
      description: "Exclusive goodies including badges, stickers, and wristbands.",
      bg: "from-yellow-500/20 to-yellow-900/40",
      icon: "",
    },
    {
      title: "Cash Prize",
      description: "Cash award for top performers in the debate event.",
      bg: "from-green-500/20 to-green-900/40",
      icon: "",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0b1e] via-[#151533] to-[#0b0b1e] text-white pt-32 pb-20 flex flex-col items-center px-4">
      
      <h1 className="text-3xl sm:text-4xl font-bold text-purple-300 mb-10">
        Winner Rewards
      </h1>

      <p className="text-gray-300 max-w-2xl text-center mb-12">
        Celebrate excellence with exclusive rewards crafted just for our debate champions.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 w-11/12 md:w-3/4">
        {rewards.map((reward, index) => (
          <div
            key={index}
            className={`rounded-xl p-6 bg-gradient-to-br ${reward.bg} border border-purple-500/20 shadow-lg shadow-black/30 hover:scale-[1.03] transition-all duration-300`}
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="text-4xl">{reward.icon}</div>
              <h2 className="text-xl font-semibold text-purple-300">
                {reward.title}
              </h2>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              {reward.description}
            </p>
          </div>
        ))}
      </div>

      {/* Previous Winners Section */}
      <div className="w-11/12 md:w-3/4 mt-16">
        <h2 className="text-2xl font-semibold text-purple-300 mb-6">
          Previous Winners
        </h2>

        <ul className="space-y-3 text-gray-300 text-sm">
          <li className="border-b border-purple-500/20 pb-2">
            • NAN
          </li>
        </ul>
      </div>

    </div>
  );
}

export default RewardedFellow;