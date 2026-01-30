'use client';

import { useState } from 'react';
import Image from 'next/image';
import App_layout from '@/component/layout/app_layout';
import Map2 from '@/component/home/map';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ai Software | Contact',
  description: 'Contact AI Solutions for business and support',
};

type FormData = {
  name: string;
  number: string;
  email: string;
  message: string;
};

export default function AIContact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    number: '',
    email: '',
    message: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactDetails = [
    { location: 'India', company: 'AI Solutions Pvt. Ltd.', phone: '+91 9876543210' },
    { location: 'UK', company: 'AI Innovations Ltd.', phone: '+44 1234 567890' },
    { location: 'USA', company: 'AI Tech Inc.', phone: '+1 555 678 910' },
    { location: 'Email', company: '', phone: 'contact@aisolutions.com' },
  ];

  return (
    <App_layout>
      <div className="bg-gradient-to-br from-gray-900 via-gray-200 to-gray-900 pt-28 pb-16">
        <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-2xl w-full max-w-6xl mx-auto overflow-hidden">
          
          {/* Left Image */}
          <div className="relative w-full md:w-1/3 min-h-[300px] md:min-h-[700px] bg-blue-100">
            <Image
              src="/home/contactimg.jpg"
              alt="Contact Us"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right Form */}
          <div className="flex flex-col w-full md:w-2/3 p-8 md:p-10">
            <h3 className="text-3xl font-bold mb-8 text-center text-gray-900">
              Contact AI Solutions
            </h3>

            <form onSubmit={handleSubmit} className="w-full mb-10">
              {(Object.keys(formData) as (keyof FormData)[]).map((field) => (
                <div className="mb-5" key={field}>
                  <label
                    htmlFor={field}
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {field === 'message'
                      ? 'Type Your Message here...'
                      : `Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                  </label>

                  {field === 'message' ? (
                    <textarea
                      id={field}
                      name={field}
                      rows={4}
                      required
                      className="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm"
                      value={formData[field]}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <input
                      id={field}
                      name={field}
                      type={
                        field === 'number'
                          ? 'tel'
                          : field === 'email'
                          ? 'email'
                          : 'text'
                      }
                      required
                      className="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm"
                      value={formData[field]}
                      onChange={handleInputChange}
                    />
                  )}
                </div>
              ))}

              <button
                type="submit"
                className="w-full py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 transition-all shadow-lg"
              >
                Send Message
              </button>
            </form>

            {/* Contact Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {contactDetails.map((detail, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-5 rounded-xl shadow text-center hover:shadow-md transition"
                >
                  <h4 className="text-xl font-semibold text-gray-900">
                    {detail.location}
                  </h4>
                  {detail.company && (
                    <p className="text-gray-600 mt-1">{detail.company}</p>
                  )}
                  <p className="text-black font-bold mt-2">
                    {detail.phone}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="px-5 mt-14 max-w-6xl mx-auto">
          <Map2 />
        </div>
      </div>
    </App_layout>
  );
}
