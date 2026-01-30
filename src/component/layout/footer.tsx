import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLocationArrow } from 'react-icons/fa';
import { FiSmartphone } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Image from 'next/image';

function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-12 px-8 overflow-hidden">
      {/* Background Animations */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          animate={{ x: [0, 30, 0], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute w-72 h-72 bg-indigo-300 opacity-40 rounded-full top-10 left-5 z-0"
        ></motion.div>
        <motion.div
          animate={{ x: [-20, 10, -20], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute w-52 h-52 bg-pink-400 opacity-50 rounded-full bottom-10 right-10 z-0"
        ></motion.div>
      </div>

      {/* Footer Content */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
        {/* Contact Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Contact Us</h2>
          <p>Email: <a href="mailto:info@sportscrmicon.com" className="hover:underline">info@sportscrmicon.com</a></p>
          <p>Phone: <a href="tel:1234567890" className="hover:underline">123-456-7890</a></p>
        </div>

        {/* Follow Us Section */}
        <div className="text-center space-y-4">
          <h2 className="text-xl font-semibold">Follow Us</h2>
          <div className="flex justify-center space-x-6">
            <FaFacebookF className="hover:text-blue-600 cursor-pointer text-3xl" />
            <FaTwitter className="hover:text-blue-400 cursor-pointer text-3xl" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer text-3xl" />
          </div>
        </div>

        {/* Quick Links Section */}
        <div>
          <h2 className="text-xl font-semibold">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">About-us</a></li>
            <li><a href="#" className="hover:underline">Features</a></li>
            <li><a href="#" className="hover:underline">Pricing</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Location and App Download Section */}
        <div>
          <h2 className="text-xl font-semibold">Download Our App</h2>
          <div className="flex space-x-4 relative">
            <div className="flex items-center">
              <Image className='h-36 w-40' src="/googleplay.png"alt='googleplay' height={200} width={200}></Image>
            </div>
            <div className="flex items-center">
            <Image className='h-36 w-40' src="/appstore.png"alt='appstore' height={200} width={200}></Image>
            </div>
          </div>

          <div className=" flex items-center space-x-4 relative">
            <FaLocationArrow className="text-3xl" />
            <p>123 Fitness Street, Wellness City, Country</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center relative mt-10 text-sm border-t border-gray-300 pt-6">
        <p>&copy; 2025 AI-Software. All Rights Reserved.</p>
        <div className="flex items-center space-x-2">
          <FiSmartphone className="text-xl" />
          <p>Developed by <span className='text-yellow-400'>Ruban Tech Solutions</span></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
