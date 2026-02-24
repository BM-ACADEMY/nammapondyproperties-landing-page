import React from 'react';
import { motion } from 'framer-motion';
import {
  Home,
  UserPlus,
  Building2,
  User,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const TypesOfUsers = () => {
  const userTypes = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Plot Buyers",
      description: "Discover verified, ready-to-build plots in Puducherry's fastest-growing areas like ECR & Auroville.",
      ctaText: "Explore Plots",
      ctaLink: "/plots",
      color: "emerald", // Green-ish
      accent: "bg-emerald-500",
      light: "bg-emerald-50"
    },
    {
      icon: <UserPlus className="w-8 h-8" />,
      title: "Channel Agents",
      description: "Join our network for pre-qualified leads and direct builder access. Boost income 3–5×.",
      ctaText: "Join Network",
      ctaLink: "/agents",
      color: "blue",
      accent: "bg-blue-500",
      light: "bg-blue-50"
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Builders",
      description: "Scale project sales with custom landing pages, targeted ads, and priority promotion.",
      ctaText: "Partner Now",
      ctaLink: "/builders",
      color: "purple",
      accent: "bg-purple-500",
      light: "bg-purple-50"
    },
    {
      icon: <User className="w-8 h-8" />,
      title: "Direct Owners",
      description: "List your plot for free — no brokerage, direct buyer enquiries, and lightning-fast sales.",
      ctaText: "List Property",
      ctaLink: "/owners",
      color: "amber",
      accent: "bg-amber-500",
      light: "bg-amber-50"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="py-24 bg-[#fafafa] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Modern Header Section */}
        <div className="relative mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-bold tracking-widest uppercase bg-white border border-gray-200 rounded-full text-orange-600 shadow-sm"
          >
            <Sparkles size={16} /> Ecosystem
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight"
          >
            Tailored for <span className="text-orange-600 italic">Everyone.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-gray-500 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Whether buying, selling, or building — Namma Pondy is the bridge to your Puducherry real estate success.
          </motion.p>
        </div>

        {/* Dynamic Card Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {userTypes.map((type, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -12 }}
              className={`group relative p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-xl shadow-gray-200/50 flex flex-col h-full transition-all duration-500`}
            >
              {/* Background Glow Effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem] bg-gradient-to-br ${type.light} to-white -z-10`} />

              {/* Icon Circle */}
              <div className={`w-16 h-16 rounded-2xl ${type.light} flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                <div className={`${type.accent.replace('bg-', 'text-')} transition-colors duration-500`}>
                  {type.icon}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                {type.title}
              </h3>

              <p className="text-gray-500 mb-8 flex-grow leading-relaxed text-[15px]">
                {type.description}
              </p>

              {/* Minimalist Button */}
              <motion.a
                href={type.ctaLink}
                whileHover={{ gap: '12px' }}
                className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-gray-900 group-hover:text-orange-600 transition-all"
              >
                {type.ctaText}
                <ArrowRight className="w-5 h-5 text-orange-600" />
              </motion.a>

              {/* Bottom Decorative Line */}
              <div className={`absolute bottom-0 left-12 right-12 h-1 ${type.accent} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-full`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Unique Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 p-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent"
        >
          <div className="bg-[#fafafa] py-10 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
              Still unsure where you fit?
            </h3>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,102,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-[#1a1a1a] text-white font-black rounded-full uppercase tracking-[0.2em] text-sm transition-all"
            >
              Talk to Our Experts
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TypesOfUsers;
