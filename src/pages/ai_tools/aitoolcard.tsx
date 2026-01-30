'use client';

import Image from 'next/image';

export default function AIToolCard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
        {/* Image Section */}
        <div className="relative w-full h-48">
          <Image
            src="/home/chatgpt.jpg" // place image in public folder
            alt="AI Tool"
            fill
            className="object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="p-5">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            ChatGPT AI Tool
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            ChatGPT is an AI-powered assistant used for content creation, coding help,
            idea generation, and problem-solving. It improves productivity and learning
            efficiency.
          </p>

          <button className="mt-4 w-full bg-gray-950 text-white py-2 rounded-xl hover:bg-gray-800 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
