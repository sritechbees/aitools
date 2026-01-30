import React, { useState } from 'react';
import Image from 'next/image';
import App_layout from '@/component/layout/app_layout';
import Map2 from '@/component/home/map';
import Head from 'next/head';

type FormData = {
  name: string;
  number: string;
  email: string;
  message: string;
};

const AIContact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    number: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value as string,
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
    { location: 'Email', company: '', phone: 'contact@aisolutions.com' }
  ];

  return (
    <App_layout>
        <Head>
        <title>Ai Software |  Contact</title>
      </Head>
       <div className="bg-gradient-to-br from-gray-900 via-gray-200 to-gray-900 pt-28">
    
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg w-full max-w-5xl mx-auto">
          
          <div className="flex items-center justify-center p-8 bg-blue-100 rounded-l-lg w-full md:w-1/3">
            <Image src="/home/contactimg.jpg" alt="Contact Us" width={300} height={300} className="max-w-xs h-[750px]" />
          </div>

          <div className="flex flex-col w-full md:w-2/3 p-8">
            <div className="mb-6">
              <h3 className="text-primary text-3xl font-bold mb-6 text-center">Contact AI Solutions</h3>
              <form onSubmit={handleSubmit} className="w-full">
                {(Object.keys(formData) as (keyof FormData)[]).map((field) => (
                  <div className="mb-4" key={field}>
                    <label htmlFor={field} className="block text-sm font-medium text-gray-700">
                      {field === 'message' ? 'Type Your Message here...' : `Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                    </label>
                    {field === 'message' ? (
                      <textarea
                        id={field}
                        name={field}
                        rows={3}
                        required
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={formData[field]}
                        onChange={handleInputChange}
                      ></textarea>
                    ) : (
                      <input
                        id={field}
                        name={field}
                        type={field === 'number' ? 'number' : field === 'email' ? 'email' : 'text'}
                        required
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={formData[field]}
                        onChange={handleInputChange}
                      />
                    )}
                  </div>
                ))}
                <button
                  type="submit"
                  className="w-full py-3 px-4 border border-transparent rounded-md shadow-md text-sm font-medium text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {contactDetails.map((detail, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded-lg shadow text-center">
                  <h4 className="text-xl font-semibold text-primary">{detail.location}</h4>
                  {detail.company && <p>{detail.company}</p>}
                  <p className="text-black font-bold mt-2">{detail.phone}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="px-5 mt-10">
        <Map2/>
        </div>
    </div>
    </App_layout>
  );
};

export default AIContact;
