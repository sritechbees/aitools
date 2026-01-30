import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonial = () => {
  const reviews = [
    {
      name: "Aswin",
      feedback:
        "The AI-powered drone surveillance system has significantly improved our security. Real-time monitoring is a game changer!",
      image: "/testimonial/aswinn.png",
    },
    {
      name: "Aswath",
      feedback:
        "The AI-powered drone surveillance system has significantly improved our security. Real-time monitoring is a game changer!",
      image: "/testimonial/aswath-profile.png",
    },
    {
      name: "Naresh",
      feedback:
        "Automated alerts helped us prevent unauthorized access. Highly recommend this AI software!",
      image: "/testimonial/Nareshnew-profile.png",
    },
    {
      name: "Ruban",
      feedback:
        "The AI-powered drone surveillance system has significantly improved our security. Real-time monitoring is a game changer!",
      image: "/testimonial/ruban-profile.png",
    },
    {
      name: "Prasanth",
      feedback:
        "The reporting and analytics provided by the AI software give us deep insights into security patterns. Excellent technology!",
      image: "/testimonial/prasanth-profile.png",
    },
    {
      name: "Jaiprakash",
      feedback:
        "The AI-powered drone surveillance system has significantly improved our security. Real-time monitoring is a game changer!",
      image: "/testimonial/jai-prakash-profile.png",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-gray-900 to-black text-white text-center py-12">
      <h2 className="text-4xl font-bold mb-10">Testimonials</h2>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="w-full max-w-6xl mx-auto"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="p-6 bg-gray-800 rounded-lg shadow-lg flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div
                className="w-24 h-24 mb-4 rounded-full bg-cover bg-center"
                style={{ backgroundImage: `url(${review.image})` }}
              ></div>
              <h3 className="text-xl font-semibold mb-2">{review.name}</h3>
              <p className="text-gray-300">&quot;{review.feedback}&quot;</p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
