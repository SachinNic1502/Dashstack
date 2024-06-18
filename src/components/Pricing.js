import React, { useState } from "react";

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleCardClick = (plan) => {
    setSelectedPlan(plan);
  };

  const plans = [
    { name: "Basic", price: "$14.99" },
    { name: "Standard", price: "$49.99" },
    { name: "Premium", price: "$89.99" },
  ];

  return (
    <section className="flex-grow p-4 overflow-auto">
      <h3 className="text-[32px] text-[#202224] font-bold mb-4">
      Pricing
      </h3>
    <div className="flex justify-center mt-8 space-x-4">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`max-w-xs mx-4 bg-white shadow-lg rounded-lg overflow-hidden text-center border ${
            selectedPlan === plan.name ? "border-blue-500" : "border-gray-300"
          }`}
          onClick={() => handleCardClick(plan.name)}
        >
          <div className="px-6 py-4">
            <h2 className="font-bold text-xl mb-2">{plan.name}</h2>
            <p className="text-gray-600 text-base">Monthly Charge</p>
            <div className="text-blue-500 text-3xl font-bold mb-4">
              {plan.price}
            </div>
            <hr className="my-4" />
            <ul className="text-gray-600 text-sm mb-6 text-center text-[18px]">
              <li className="mb-2 text-black font-bold">Free Setup</li>
              <li className="mb-2 text-black font-bold">
                Bandwidth Limit 10 GB
              </li>
              <li className="mb-2 text-black font-bold">20 User Connection</li>
              <li className="mb-2">Analytics Report</li>
              <li className="mb-2">Public API Access</li>
              <li className="mb-2">Plugins Integration</li>
              <li className="mb-2">Custom Content Management</li>
            </ul>
            <hr className="my-4" />
            <button
              className={`py-2 px-4 rounded focus:outline-none focus:shadow-outline font-bold ${
                selectedPlan === plan.name
                  ? "bg-blue-500 hover:bg-blue-700 text-white"
                  : "bg-white border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
              }`}
            >
              Get Started
            </button>
            <p className="text-xs mt-2">Start Your 30 Day Free Trial</p>
          </div>
        </div>
      ))}
    </div>
    </section>
  );
};

export default Pricing;
