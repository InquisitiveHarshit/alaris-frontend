import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiNavigation, FiClock, FiHome, FiBriefcase, FiHeart, FiShoppingBag, FiMap } from 'react-icons/fi';
import { MdSchool, MdLocalHospital, MdLocalAirport, MdTheaterComedy } from 'react-icons/md';
import { optimizeCloudinary } from '../utils/cloudianry';

const Location = () => {
  const distances = [
    { location: "World's Tallest Lord Shri Krishna Murti", distance: "3 km" },
    { location: "Gaurs International School", distance: "3 km" },
    { location: "Upcoming mall, Gaur Yamuna City", distance: "3 km" },
    { location: "Eastern Peripheral Expressway", distance: "10 km" },
    { location: "Noida International Airport (Jewar)", distance: "16 km" },
    { location: "Noida-Greater Noida Expressway", distance: "18 km" }
  ];

  const landmarks = [
    "Pari Chowk", "Metro Station", "Gautam Buddha University", "Sharda University", 
    "Galgotias University", "Jaypee Hospital", "Amity University", "IT Park", 
    "F1 Track", "International Cricket Stadium", "Gaur Yamuna City", 
    "Gaurs International School", "Medical Device Park", "Metro Coach Factory", 
    "Toy City", "Film City", "Vivo", "Patanjali"
  ];

  return (
    <section id="location" className="py-20 bg-gradient-to-b from-amber-50 to-amber-100">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center mb-4">
            <div className="w-12 h-1 bg-amber-500 rounded-full mr-4" />
            <span className="text-amber-600 font-semibold tracking-widest uppercase">
              Location Advantages
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Prime Location, Unbeatable Connectivity
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Strategically located at the heart of Yamuna Expressway with excellent connectivity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              {/* Map Placeholder */}
              <div className="relative h-96 bg-gradient-to-br from-gray-100 to-gray-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center w-full h-full">
                    <img src={optimizeCloudinary("https://res.cloudinary.com/djvps0arr/image/upload/v1785493188/eb302aae-14da-43a6-8f88-9f0af94ed2b9.png")} alt="location" className='h-full w-full object-cover' />
                  </div>
                </div>
                
                {/* Location Markers */}
                <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
                <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-blue-500 rounded-full animate-pulse" />
                <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-green-500 rounded-full animate-pulse" />
                <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-purple-500 rounded-full animate-pulse" />
              </div>
              
              <div className="p-6 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                <h3 className="text-xl font-bold mb-2">Exact Location</h3>
                <p className="text-gray-300">
                  Sector 22D, Yamuna Expressway, Greater Noida, Uttar Pradesh 201308
                </p>
              </div>
            </div>

            {/* Distances Widget */}
            <div className="mt-8 bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <FiMap className="text-amber-500 mr-3" />
                Key Distances
              </h3>
              <div className="space-y-4">
                {distances.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-amber-50 transition-colors">
                    <span className="font-medium text-gray-800">{item.location}</span>
                    <span className="text-amber-600 font-bold bg-amber-100 px-3 py-1 rounded-full whitespace-nowrap">{item.distance}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Location Advantages / Landmarks */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Investment Potential */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-8 text-white mb-8"
            >
              <h3 className="text-2xl font-bold mb-4">Investment Potential</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold mb-2">High ROI</div>
                  <p className="text-amber-100">Expected appreciation</p>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">Growing Area</div>
                  <p className="text-amber-100">Rapid development</p>
                </div>
              </div>
              <p className="mt-4 text-amber-100">
                Yamuna Expressway is emerging as the next premium residential and commercial hub in NCR
              </p>
            </motion.div>

            {/* Landmarks Grid */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-4">Nearby Landmarks</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-6 gap-x-4">
                {landmarks.map((landmark, index) => (
                  <div key={index} className="flex items-start space-x-2 group">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 group-hover:scale-150 transition-transform"></div>
                    <span className="text-gray-700 text-sm font-medium">{landmark}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;