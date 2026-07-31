import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { FaSwimmingPool, FaLeaf, FaTableTennis, FaSpa, FaGamepad, FaUsers, FaGlassCheers, FaBuilding } from 'react-icons/fa';
import { MdSportsCricket } from 'react-icons/md';

const Amenities = () => {
  const [activeZone, setActiveZone] = useState('Aqua Zone');

  const zones = [
    {
      id: 'Aqua Zone',
      icon: <FaSwimmingPool className="text-3xl" />,
      title: 'Aqua Zone',
      items: [
        'Splash Pad Kids Pool', 'Jacuzzi Bubble Pool', 'Leisure Pool',
        'Pool Promenade Plaza', 'Lazy Pool', 'Lap Pool', 'Pool Deck', 'Pool Feather Pavilion'
      ]
    },
    {
      id: 'Serenity Zone',
      icon: <FaLeaf className="text-3xl" />,
      title: 'Serenity Zone',
      items: [
        'Butterfly / Lotus / Plumeria / Lily / Flower / Monsoon Bloom / Bio Swale Gardens',
        'Nest Pavilion Garden', 'Focal Promenade Plaza', 'Monsoon Dance Deck',
        'Monsoon Pavilions', 'Cloud Mist Walk', 'Feather Awakening Plaza',
        'Meditation Walk', 'Senior Citizens Walk', 'Connecting Walkways',
        'Feather Trail Promenade', 'Nature Trail', 'Silent Groove Trail',
        'Nimbus Deck Plaza', 'Drizzle Deck Corner'
      ]
    },
    {
      id: 'Sports Zone (Outdoor)',
      icon: <MdSportsCricket className="text-3xl" />,
      title: 'Sports Zone (Outdoor)',
      items: [
        'Multi-purpose Play Court', 'Cricket Pitch', 'Rainbow Play Court',
        'Fitness Station', 'Jogging Track', 'Skating Rink', 'Raindrop Play Zone',
        'Pickle Ball Court', 'Family Picnic Lawn'
      ]
    },
    {
      id: 'Sports Zone (Indoor/Club)',
      icon: <FaTableTennis className="text-3xl" />,
      title: 'Sports Zone (Indoor/Club)',
      items: [
        '2 Badminton Courts', '2 Squash Courts', 'Pickleball Courts',
        'Smash Cricket', 'Viewing Gallery'
      ]
    },
    {
      id: 'Wellness Zone',
      icon: <FaSpa className="text-3xl" />,
      title: 'Wellness Zone',
      items: [
        'Heated Pool', 'Ice/Cold Bath', 'Male & Female Wellness Lounge (Spa)',
        'Salon', 'Gymnasium / Kicking / Boxing Room', 'Yoga / Aerobics / Zumba / Pilates Room'
      ]
    },
    {
      id: 'Entertainment Zone',
      icon: <FaGamepad className="text-3xl" />,
      title: 'Entertainment Zone',
      items: [
        'Arcade Junction', 'Bowling Alley', 'Air Hockey', 'Foosball Table',
        'Basketball Table', 'Virtual Game Simulator', 'Karaoke Room',
        'Billiards Room', 'Card Room', 'Carrom Room', 'Mini Theater', 'Music Room'
      ]
    },
    {
      id: 'Social Zone (Outdoor)',
      icon: <FaUsers className="text-3xl" />,
      title: 'Social Zone (Outdoor)',
      items: [
        'Celebration Activity Lawn', 'Barbecue Pavilion', 'Rain Amphitheater',
        'Senior Citizens Pavilion', 'Pet Park', 'Prayer Hall', 'Paved Activity Plaza'
      ]
    },
    {
      id: 'Social Zone (Clubhouse)',
      icon: <FaGlassCheers className="text-3xl" />,
      title: 'Social Zone (Clubhouse)',
      items: [
        'Banquet Hall', 'Pre-function Area', 'Banquet Spill-over Lawn',
        'Party Hall', 'Restaurant', 'Creche', 'Business Centre (Work Station)'
      ]
    },
    {
      id: 'Terrace Amenity Zone',
      icon: <FaBuilding className="text-3xl" />,
      title: 'Terrace Amenity Zone',
      items: [
        'Sky Veranda', 'Sky Breeze Pavilion', 'Horizon Viewing Deck', 'Terrace Lawn'
      ]
    }
  ];

  return (
    <section id="amenities" className="py-20 bg-gradient-to-b from-white to-gray-50">
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
              Amenities
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Luxury That Serves Every Need
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            World-class amenities divided into specialized zones designed for your comfort, entertainment, and well-being.
          </p>
        </motion.div>

        {/* Desktop Tabs */}
        <div className="hidden lg:flex flex-col md:flex-row gap-8">
          <div className="w-1/3 flex flex-col space-y-2">
            {zones.map((zone) => (
              <button
                key={zone.id}
                onClick={() => setActiveZone(zone.id)}
                className={`flex items-center space-x-4 p-4 rounded-xl transition-all text-left ${
                  activeZone === zone.id
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-amber-50 hover:text-amber-600'
                }`}
              >
                <div className={`${activeZone === zone.id ? 'text-white' : 'text-amber-500'}`}>
                  {zone.icon}
                </div>
                <span className="font-semibold text-lg">{zone.title}</span>
              </button>
            ))}
          </div>

          <div className="w-2/3">
            <AnimatePresence mode="wait">
              {zones.map((zone) => 
                activeZone === zone.id && (
                  <motion.div
                    key={zone.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
                  >
                    <div className="flex items-center space-x-4 mb-8 pb-6 border-b border-gray-100">
                      <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center">
                        {zone.icon}
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900">{zone.title}</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {zone.items.map((item, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white text-xs">✓</span>
                          </div>
                          <span className="text-gray-700 leading-tight">{item}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Accordion */}
        <div className="lg:hidden space-y-4">
          {zones.map((zone) => (
            <div key={zone.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <button
                onClick={() => setActiveZone(activeZone === zone.id ? '' : zone.id)}
                className={`w-full flex items-center justify-between p-4 transition-colors ${
                  activeZone === zone.id ? 'bg-amber-50 text-amber-700' : 'text-gray-700'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`${activeZone === zone.id ? 'text-amber-600' : 'text-gray-400'}`}>
                    {zone.icon}
                  </div>
                  <span className="font-semibold">{zone.title}</span>
                </div>
                {activeZone === zone.id ? <FiChevronUp /> : <FiChevronDown />}
              </button>
              
              <AnimatePresence>
                {activeZone === zone.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 bg-gray-50/50 border-t border-gray-100">
                      <ul className="space-y-3">
                        {zone.items.map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <div className="w-5 h-5 bg-amber-200 text-amber-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-[10px]">✓</span>
                            </div>
                            <span className="text-gray-600 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;