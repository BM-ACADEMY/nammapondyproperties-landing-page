import React from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, CalendarCheck, PhoneCall } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: <Search className="w-10 h-10 transition-colors duration-300" />,
      title: "Explore & Choose",
      description: "Browse verified plots in high-growth areas like ECR Belt, Auroville, Kottakuppam & more. Filter by budget, size & location.",
    },
    {
      number: "02",
      icon: <MapPin className="w-10 h-10 transition-colors duration-300" />,
      title: "Book Free Site Visit",
      description: "Schedule a no-obligation guided visit to your shortlisted plots. We arrange everything — transport, documents & expert guidance.",
    },
    {
      number: "03",
      icon: <CalendarCheck className="w-10 h-10 transition-colors duration-300" />,
      title: "Verify & Decide",
      description: "Get full transparency — clear titles, approved layouts, pricing & legal checks. Make your decision with complete peace of mind.",
    },
    {
      number: "04",
      icon: <PhoneCall className="w-10 h-10 transition-colors duration-300" />,
      title: "Secure Your Plot",
      description: "Finalize directly with verified owners/builders. Zero brokerage on direct listings. Start your Puducherry dream today!",
    },
  ];

  // Container variants to stagger the children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Time between each card animation
      },
    },
  };

  // Individual card variants (Slide in from left)
  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Section Heading */}
        <div className="text-center mb-10 md:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            How It Works — Simple & Hassle-Free
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Buying your dream plot in Puducherry is easy with Namma Pondy Properties. Follow these 4 steps.
          </motion.p>
        </div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Connecting Line (desktop only) */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
            className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-300 transform -translate-y-1/2 z-0 origin-left"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative z-10"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 text-center flex flex-col items-center hover:-translate-y-2"
              >
                {/* Icon Container with Hover Color Logic */}
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-orange-100 flex items-center justify-center mb-4 md:mb-6 relative transition-colors duration-300 group-hover:bg-orange-600">
                  <div className="text-orange-600 group-hover:text-white transition-colors duration-300">
                    {step.icon}
                  </div>
                  <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-orange-600 text-white text-sm font-bold flex items-center justify-center border-4 border-white transition-transform group-hover:scale-110">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors">
                  {step.title}
                </h3>

                <p className="text-gray-700 leading-relaxed text-base">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-xl md:text-2xl font-medium text-gray-800 mb-6">
            Ready to start your journey to owning a plot in Puducherry?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-lg rounded-lg shadow-lg transition duration-300"
          >
            Book Free Site Visit Today →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
