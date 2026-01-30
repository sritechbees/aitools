'use client';

import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaSatelliteDish, FaChartLine, FaCloudUploadAlt, FaRobot, FaMicrochip, FaShieldAlt, FaNetworkWired } from 'react-icons/fa';
import Image from 'next/image';

function Mastermind() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className='bg-gradient-to-b from-black via-gray-900 to-blue-900 min-h-screen flex items-center justify-center p-8'>
      <div className="max-w-7xl mx-auto my-5 p-4 text-white">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-center text-[#3aa0c9] p-4">Mastermind AI</h1>
        <div className="flex flex-col md:flex-row h-full md:border">
          {/* Left side: Tabs */}
          <div className="flex flex-row md:flex-col w-full md:w-1/4 border-b md:border-b-0 md:border-r px-5 overflow-x-auto md:overflow-hidden md:overflow-y-auto !h-full md:!h-auto">
            {features.map((feature, index) => (
              <button
                key={index}
                className={`p-4 w-full rounded-lg mt-[20px] md:w-auto text-center cursor-pointer whitespace-nowrap ${
                  activeTab === index ? "bg-green-700 text-white" : "bg-orange-700 text-white"
                } hover:bg-green-700 transition-colors duration-300`}
                onClick={() => setActiveTab(index)}
              >
                {feature.title}
              </button>
            ))}
          </div>
          {/* Right side: Content */}
          <div className="w-full max-lg:mt-12 p-5">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`${
                  activeTab === index ? "block" : "hidden"
                } font-bold text-center py-5 text-xl sm:text-2xl md:text-3xl text-green-700`}
              >
                {feature.title}
                <p className="text-gray-300 text-center mt-4">{feature.desc}</p>
                <div className="flex justify-center mt-5">
                  <div className="relative w-full max-w-lg p-6 bg-black/20 backdrop-blur-lg rounded-3xl border-2 border-white border-gray-700 shadow-lg">
                    <Image src={feature.img} height={300} width={500} alt={feature.title} className="w-full rounded-2xl shadow-md" />
                    {/* <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md transition-all">
                      Learn More
                    </button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const features = [
  { icon: <FaSatelliteDish size={30} />, title: 'Satellite Data', desc: 'Advanced AI analysis of satellite imagery for strategic insights.', img: '/home/satellite Data1.jpg' },
  { icon: <FaChartLine size={30} />, title: 'Predictive Analytics', desc: 'AI-driven forecasting & risk assessment based on data trends.', img: '/home/predictive_analytics.jpg' },
  { icon: <FaCloudUploadAlt size={30} />, title: 'Cloud AI Processing', desc: 'High-speed cloud computing for real-time data analysis & reporting.', img: '/home/cloud_ai_processing1.jpg' },
  { icon: <FaRobot size={30} />, title: 'AI Robotics', desc: 'Autonomous systems powered by intelligent AI algorithms.', img: '/home/ai_robotics.jpg' },
  { icon: <FaMicrochip size={30} />, title: 'AI Processing', desc: 'High-performance AI-driven data analysis and machine learning.', img: '/home/ai_processing.jpg' },
  { icon: <FaShieldAlt size={30} />, title: 'Cybersecurity', desc: 'AI-enhanced security to prevent cyber threats and attacks.', img: '/home/cybersecurity.jpg' },
  { icon: <FaNetworkWired size={30} />, title: 'IoT Integration', desc: 'Seamless integration with IoT devices for smart monitoring.', img: '/home/iot_integration.jpg' },
];

export default Mastermind;
