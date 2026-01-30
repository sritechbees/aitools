'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

function AiSoftwareUse() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-black text-white flex items-center justify-center">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

      <div data-aos="fade-left" className="flex justify-center">
          <Image 
            src="/home/aisoftwareuse1.png" 
            alt="AI Software Usage"  height={600} width={600}
            className="w-full h-[410px] max-w-md rounded-2xl"
          />
        </div>
        {/* Left Side: Text Content */}
        <div data-aos="fade-right">
          <h2 className="text-4xl font-bold mb-4">AI Software Usage</h2>
          <p className="text-lg text-gray-300 mb-6">
            AI software is transforming industries by automating tasks, enhancing decision-making, 
            and optimizing workflows. It is used in cybersecurity, healthcare, automation, 
            and data analytics to improve efficiency and accuracy.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li><strong>Cybersecurity:</strong> AI detects threats in real-time.</li>
            <li><strong>Healthcare:</strong> AI assists in diagnostics and treatment.</li>
            <li><strong>Automation:</strong> AI streamlines operations in industries.</li>
            <li><strong>Data Analytics:</strong> AI helps analyze big data for insights.</li>
          </ul>
        </div>

      
      </div>
    </div>
  );
}

export default AiSoftwareUse;
