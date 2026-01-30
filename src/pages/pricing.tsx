import App_layout from "@/component/layout/app_layout";
import React from "react";
import Head from "next/head";
const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: '$19/month',
      features: ['AI Predictions', 'Basic Support', 'Limited API Calls'],
    },
    {
      name: 'Pro',
      price: '$49/month',
      features: ['Advanced AI Models', 'Priority Support', 'Unlimited API Calls'],
    },
    {
      name: 'Enterprise',
      price: 'Custom Pricing',
      features: ['Dedicated AI Models', '24/7 Support', 'Enterprise Integrations'],
    },
  ];

  return (
    <App_layout>
       <Head>
        <title>Ai Software |  Pricing</title>
      </Head>
    <div className="flex flex-col items-center justify-center py-28 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold mb-6">Pricing Plans</h2>
      <p className="text-lg text-gray-400 mb-12">Choose the plan that suits your needs</p>
      <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl px-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/50"
          >
            <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
            <p className="text-3xl font-bold text-indigo-400">{plan.price}</p>
            <ul className="mt-4 mb-6 text-gray-300">
              {plan.features.map((feature, i) => (
                <li key={i} className="mb-2">✔ {feature}</li>
              ))}
            </ul>
            <button className="bg-indigo-500 hover:bg-indigo-600 px-6 py-2 rounded-lg text-lg font-medium">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
    </App_layout>
  );
};

export default Pricing;
