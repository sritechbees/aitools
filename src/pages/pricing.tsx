import App_layout from "@/component/layout/app_layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ai Software | Pricing",
  description: "Flexible pricing plans for AI software solutions",
};

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "$19",
      period: "/month",
      features: ["AI Predictions", "Basic Support", "Limited API Calls"],
      popular: false,
    },
    {
      name: "Pro",
      price: "$49",
      period: "/month",
      features: ["Advanced AI Models", "Priority Support", "Unlimited API Calls"],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: ["Dedicated AI Models", "24/7 Support", "Enterprise Integrations"],
      popular: false,
    },
  ];

  return (
    <App_layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white py-28 px-6">
        
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Pricing <span className="text-indigo-500">Plans</span>
          </h2>
          <p className="text-lg text-gray-400">
            Choose the plan that fits your AI business needs
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 text-center border transition-all duration-300
                ${
                  plan.popular
                    ? "border-indigo-500 shadow-2xl shadow-indigo-500/30 scale-[1.03]"
                    : "border-gray-800 hover:shadow-lg hover:shadow-indigo-500/20"
                }
              `}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-sm px-4 py-1 rounded-full shadow">
                  Most Popular
                </span>
              )}

              <h3 className="text-2xl font-semibold mb-3">
                {plan.name}
              </h3>

              <div className="mb-6">
                <span className="text-4xl font-bold text-indigo-400">
                  {plan.price}
                </span>
                <span className="text-gray-400">{plan.period}</span>
              </div>

              <ul className="mb-8 space-y-3 text-gray-300">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center justify-center gap-2">
                    <span className="text-green-400">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-semibold transition-all
                  ${
                    plan.popular
                      ? "bg-indigo-500 hover:bg-indigo-600 shadow-lg"
                      : "bg-gray-800 hover:bg-gray-700"
                  }
                `}
              >
                {plan.name === "Enterprise" ? "Contact Sales" : "Choose Plan"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </App_layout>
  );
}
