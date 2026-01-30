'use client';

import Image from 'next/image';

export default function AIToolCard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-6">
      
      <div className="relative group">
        {/* Glow Border */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-300"></div>

        {/* Card */}
        <div className="relative max-w-sm bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-[1.02]">
          
          {/* Image */}
          <div className="relative w-full h-48">
            <Image
              src="/home/chatgpt.jpg"
              alt="ChatGPT AI Tool"
              fill
              className="object-cover"
            />

            {/* Badge */}
            <span className="absolute top-3 left-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full backdrop-blur">
              Popular AI
            </span>
          </div>

          {/* Content */}
          <div className="p-5">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              ChatGPT AI Tool
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed">
              ChatGPT is an AI-powered assistant used for content creation, coding help,
              idea generation, and problem-solving. It improves productivity and learning
              efficiency.
            </p>

            <button className="mt-5 w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white py-2.5 rounded-xl hover:from-gray-800 hover:to-gray-700 transition-all font-medium">
              Learn More →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
