import React from "react";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    {
      title: "AI Drone Deployment",
      description: "Drones are deployed to survey the area using AI-powered cameras.",
      icon: "🚁",
      bgImage: "url('/home/AI Drone Deployment.jpg')"
    },
    {
      title: "Real-Time Monitoring",
      description: "Live footage is analyzed for potential threats and anomalies.",
      icon: "📡",
      bgImage: "url('/home/Real-Time Monitoring.jpg')"
    },
    {
      title: "Automated Alerts",
      description: "Instant alerts are sent to security personnel when threats are detected.",
      icon: "⚠️",
      bgImage: "url('/home/Automated Alerts.jpg')"
    },
    {
      title: "Data Analysis & Reporting",
      description: "AI compiles reports and insights for future security improvements.",
      icon: "📊",
      bgImage: "url('/home/Data Analysis & Reporting.jpg')"
    },
  ];

  return (
    <section className="bg-gradient-to-r from-gray-900 to-black text-white text-center py-8">
      <h2 className="text-4xl font-bold mb-10">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white text-gray-900 rounded-lg shadow-lg relative overflow-hidden group"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ backgroundImage: step.bgImage }}
            ></div>
            <div className="relative z-10">
              <div className="text-5xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-white">{step.title}</h3>
              <p className="text-gray-900 group-hover:text-white">{step.description}</p>
            </div>
          </motion.div>
          
        ))}
      </div>
      
    </section>
    
  );
};

export default HowItWorks;
