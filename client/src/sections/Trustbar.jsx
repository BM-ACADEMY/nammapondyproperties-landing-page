import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import {
  ShieldCheck,
  FileText,
  MapPin,
  Handshake,
  Users,
  IndianRupee,
} from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';

const TrustBar = () => {
  const trustItems = [
    { icon: <ShieldCheck />, text: "100% Verified Documents" },
    { icon: <FileText />, text: "Transparent Pricing" },
    { icon: <MapPin />, text: "Free Site Visits" },
    { icon: <Handshake />, text: "Direct Connect" },
    { icon: <Users />, text: "500+ Happy Buyers" },
    { icon: <IndianRupee />, text: "Zero Brokerage" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    // Changed background to Smoke White
    <div className="w-full bg-[#f8f9fa] py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Mobile/Tablet: Swiper */}
        <div className="lg:hidden">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={16}
            slidesPerView={2}
            autoplay={{ delay: 3500 }}
            pagination={{ clickable: true }}
            breakpoints={{ 640: { slidesPerView: 3 } }}
            className="pb-12 trust-swiper"
          >
            {trustItems.map((item, index) => (
              <SwiperSlide key={index}>
                {/* Retained Dark Card Style */}
                <div className="bg-[#1a1a1a] p-6 rounded-2xl flex flex-col items-center text-center gap-4 shadow-xl">
                  <div className="text-[#ff6600]">
                    {React.cloneElement(item.icon, { size: 30 })}
                  </div>
                  <p className="text-white text-[10px] font-bold uppercase tracking-widest">
                    {item.text}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop: Modern Dark Cards on Light Background */}
        <motion.div
          className="hidden lg:grid grid-cols-6 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -12,
                backgroundColor: "#222222",
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
              }}
              // Retained Dark Card Styling (#1a1a1a)
              className="group cursor-default bg-[#1a1a1a] p-8 rounded-[2rem] flex flex-col items-center text-center gap-5 transition-all duration-300 shadow-lg border border-white/5"
            >
              <div className="text-[#ff6600] transform group-hover:scale-110 transition-transform duration-300 group-hover:drop-shadow-[0_0_10px_rgba(255,102,0,0.4)]">
                {React.cloneElement(item.icon, { size: 38, strokeWidth: 1.5 })}
              </div>

              <p className="text-gray-300 group-hover:text-white text-xs font-black uppercase tracking-widest leading-relaxed">
                {item.text}
              </p>

              {/* Bottom accent bar that appears on hover */}
              <div className="w-8 h-[3px] bg-[#ff6600] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx global>{`
        .trust-swiper .swiper-pagination-bullet { background: #cbd5e0; opacity: 1; }
        .trust-swiper .swiper-pagination-bullet-active { background: #ff6600; width: 24px; border-radius: 4px; transition: all 0.3s; }
      `}</style>
    </div>
  );
};

export default TrustBar;
