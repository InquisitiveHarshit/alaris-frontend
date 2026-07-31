import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiMapPin, FiChevronRight } from 'react-icons/fi';
import { MdKingBed, MdSquareFoot } from 'react-icons/md';
import BookingForm from './BookingForm';
import { optimizeCloudinary } from '../utils/cloudianry';


const Hero = ({ openModal }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden ">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 ">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
        <img
          src={optimizeCloudinary("https://res.cloudinary.com/djvps0arr/image/upload/v1785492284/Untitled_design_8_kncbph.png")}
          alt="Gaurs Apartments"
          className="w-full h-full object-cover"
        />
      </div>

      <div className=" max-w-7xl mx-auto px-4 pt-32 pb-20 md:pt-40 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <FiMapPin className="text-amber-400" />
              <span>Sector 22D, Yamuna Expressway</span>
            </motion.div>

            <h1 className="text-xl md:text-4xl font-semibold mb-6 leading-tight">
              Gaur Alaris

            </h1>


            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => openModal('brochure')}
                className="flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all cursor-pointer"
              >
                <span>Download Brochure</span>
                <FiDownload />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => openModal('enquiry')}
                className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all cursor-pointer"
              >
                <span>Know More</span>
                <FiChevronRight />
              </motion.button>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <BookingForm title="Book A Site Visit!" />
          </motion.div>
        </div>

        {/* Floating Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {[
            { label: 'Project Area', value: '11.8 Acres' },
            { label: 'RERA No.', value: 'UPRERAPRJ950965/07/2026' },
            { label: 'Towers', value: '8 Towers (34 Storey)' },
            { label: 'Architecture', value: 'Art Deco' },
            { label: 'Clubhouse', value: 'Club Regalia — 1,00,000 sq.ft.' },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-500/60 backdrop-blur-md border border-white/40 rounded-2xl p-4 text-center hover:bg-white/15 transition-all flex flex-col justify-center min-h-[90px]"
            >
              <p className="text-xs text-gray-300 mb-1 uppercase tracking-wide">{item.label}</p>
              <p className="text-sm font-bold text-white leading-tight break-words">{item.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;