import React from "react";
import { motion } from "framer-motion";

function AboutTwo() {
  return (
    <div className="relative flex flex-col items-center justify-center text-center py-16 bg-gray-900 text-white overflow-hidden">
      {/* Flying Text Animation */}
      <motion.h2
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Empowering AI Innovations
      </motion.h2>

      {/* Description with Fade-in Animation */}
      <motion.p
        className="text-lg max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        Our AI-driven solutions enhance efficiency, automate workflows, and unlock new possibilities through intelligent automation.
      </motion.p>

      {/* Flying Text Images */}
      <motion.img
        src="/about/aibrain1.png" // Replace with an actual image path
        alt="AI Brain"
        className="absolute left-10 top-20 w-28 opacity-70"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
      />

      <motion.img
        src="/about/ainetwork.jpg" // Replace with an actual image path
        alt="AI Network"
        className="absolute right-10 bottom-20 w-32 rounded-full opacity-70"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
      />
    </div>
  );
}

export default AboutTwo;
