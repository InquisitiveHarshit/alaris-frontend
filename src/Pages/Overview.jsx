import React from 'react';
import { motion } from 'framer-motion';
import { FiChevronRight } from 'react-icons/fi';
import { optimizeCloudinary } from '../utils/cloudianry';


const Overview = ({openModal}) => {
  return (
    <section id="overview" className="py-10 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Images */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl  left-0 md:-left-20 top-0 md:-top-10  overflow-hidden shadow-2xl">
              <img
                src={optimizeCloudinary("https://res.cloudinary.com/djvps0arr/image/upload/v1785492284/Untitled_design_8_kncbph.png")}
                
                alt="Gaur Alaris Overview"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-10 w-2/3 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://res.cloudinary.com/dzvwqhzgf/image/upload/v1764652591/Picture1-min_hl9ufb.png"
                alt="Interior"
                className="w-full h-84 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>

          {/* Right Content */}
          <div>
            <div className="inline-flex items-center mb-6">
              <div className="w-12 h-1 bg-amber-500 rounded-full mr-4" />
              <span className="text-amber-600 font-semibold tracking-widest uppercase">
                Overview
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Drive yourself to luxurious living standards
            </h2>

            <div className="space-y-4 text-gray-600 mb-8">
              <p>
                Gaurs Group introduces Gaur Alaris (Phase 1) at Yamuna Expressway. 
                It is a thoughtfully designed RERA-approved residential project spanning 11.8 acres of planned development. 
                With world-class amenities that envelop luxury, the 8 acres of peacock-inspired landscape greens 
                here offer unparalleled serenity.
              </p>
              <p>
                Here, 8 towers (34 storey) featuring Art Deco architecture and the ~1,00,000 sq.ft. Club Regalia (85,000 sq.ft. BUA + 15,000 sq.ft. Terrace across 5 levels) captivate residents with 
                a majestic skyline and city view.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 text-center text-sm font-semibold text-gray-800">
               <div className="p-3 bg-amber-50 rounded-lg shadow-sm border border-amber-100"><div className="text-xl text-amber-600 mb-1">3</div>Decades of Commitment</div>
               <div className="p-3 bg-amber-50 rounded-lg shadow-sm border border-amber-100"><div className="text-xl text-amber-600 mb-1">75+</div>Delivered Projects</div>
               <div className="p-3 bg-amber-50 rounded-lg shadow-sm border border-amber-100"><div className="text-xl text-amber-600 mb-1">45k+</div>Possessions (2014-25)</div>
               <div className="p-3 bg-amber-50 rounded-lg shadow-sm border border-amber-100"><div className="text-xl text-amber-600 mb-1">75k+</div>Units Delivered</div>
               <div className="p-3 bg-amber-50 rounded-lg shadow-sm border border-amber-100"><div className="text-xl text-amber-600 mb-1">3 Lakh+</div>Satisfied Customers</div>
               <div className="p-3 bg-amber-50 rounded-lg shadow-sm border border-amber-100"><div className="text-xl text-amber-600 mb-1">100M+</div>Sq.ft. Delivered</div>
               <div className="p-3 bg-amber-50 rounded-lg shadow-sm border border-amber-100"><div className="text-xl text-amber-600 mb-1">7</div>Business Verticals</div>
               <div className="p-3 bg-amber-50 rounded-lg shadow-sm border border-amber-100"><div className="text-xl text-amber-600 mb-1">1</div>Legacy of Trust</div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openModal('know More')}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all cursor-pointer"
            >
              <span>Know More</span>
              <FiChevronRight />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Overview;