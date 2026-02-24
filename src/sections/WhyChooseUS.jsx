import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldAlert,
  ShieldCheck,
  CircleDollarSign,
  MapPinned,
  Scale,
  ArrowRight,
  Handshake,
  HeartHandshake
} from 'lucide-react';

const WhyChooseUs = () => {
  const points = [
    {
      problem: "Fake listings & broker calls",
      solution: "100% Verified plots with clear titles & current photos.",
      icon: <ShieldCheck className="w-8 h-8" />,
      color: "from-red-500/20 to-transparent"
    },
    {
      problem: "Hidden charges & stress",
      solution: "Fixed, transparent pricing. What you see is what you pay.",
      icon: <CircleDollarSign className="w-8 h-8" />,
      color: "from-orange-500/20 to-transparent"
    },
    {
      problem: "Mismatched site visits",
      solution: "Free guided visits in high-growth zones like ECR & Auroville.",
      icon: <MapPinned className="w-8 h-8" />,
      color: "from-blue-500/20 to-transparent"
    },
    {
      problem: "Middlemen blocking access",
      solution: "Direct connect with verified builders. Zero brokerage.",
      icon: <Handshake className="w-8 h-8" />,
      color: "from-purple-500/20 to-transparent"
    },
    {
      problem: "Legal & document fears",
      solution: "Full legal support & clear documentation from day one.",
      icon: <Scale className="w-8 h-8" />,
      color: "from-green-500/20 to-transparent"
    },
    {
      problem: "Future dispute anxiety",
      solution: "Safe investments for your family's long-term peace of mind.",
      icon: <HeartHandshake className="w-8 h-8" />,
      color: "from-teal-500/20 to-transparent"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-24 bg-[#f8f9fa] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[#ff6600] font-bold tracking-[0.2em] uppercase text-sm"
            >
              The Namma Pondy Difference
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black text-[#1a1a1a] mt-4 leading-tight"
            >
              We fix what <span className="text-[#ff6600]">others ignore.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-500 text-lg max-w-sm border-l-2 border-[#ff6600] pl-6 italic"
          >
            Tired of the usual property headaches in Puducherry? Experience a transparent way to buy plots.
          </motion.p>
        </div>

        {/* Unique Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {points.map((point, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 transition-all duration-300"
            >
              {/* Top Section: The Problem */}
              <div className="p-8 pb-4">
                <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${point.color} text-[#ff6600] mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  {point.icon}
                </div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-red-500/70 mb-2 flex items-center gap-2">
                   <ShieldAlert size={14} /> The Headache
                </h4>
                <h3 className="text-xl font-bold text-[#1a1a1a] leading-snug">
                  {point.problem}
                </h3>
              </div>

              {/* Bottom Section: The Solution */}
              <div className="mt-4 p-8 pt-6 bg-[#1a1a1a] relative overflow-hidden">
                {/* Visual Decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#ff6600]/10 rounded-full blur-3xl -mr-10 -mt-10" />

                <h4 className="text-xs font-bold uppercase tracking-widest text-[#ff6600] mb-3">
                  Our Solution
                </h4>
                <p className="text-gray-300 leading-relaxed font-medium">
                  {point.solution}
                </p>

                <div className="mt-6 flex items-center text-white font-bold text-sm group-hover:gap-3 gap-2 transition-all">
                   Explore Process <ArrowRight size={16} className="text-[#ff6600]" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

     
      </div>
    </section>
  );
};

export default WhyChooseUs;
