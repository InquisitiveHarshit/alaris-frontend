import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronRight, FiCheck, FiStar, FiLock, FiX, FiCheckCircle } from 'react-icons/fi';
import { MdSquareFoot, MdKingBed, MdBathtub } from 'react-icons/md';

const PriceList = ({ openModal }) => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showGateModal, setShowGateModal] = useState(false);
  const [unlockForm, setUnlockForm] = useState({ name: '', phone: '', email: '' });
  const [isUnlocking, setIsUnlocking] = useState(false);
  const [unlockDone, setUnlockDone] = useState(false);

  const handleUnlockSubmit = async (e) => {
    e.preventDefault();
    setIsUnlocking(true);
    try {
      await fetch('http://localhost:5000/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...unlockForm, formType: 'pricing-unlock', source: 'pricing-gate' })
      });
    } catch (_) {}
    setUnlockDone(true);
    setTimeout(() => {
      setIsUnlocked(true);
      setShowGateModal(false);
      setUnlockDone(false);
      setIsUnlocking(false);
    }, 1500);
  };
  const plans = [
    {
      type: "3 BHK",
      size: "1550 sq.ft.",
      price: "₹8,499 / sq.ft.",
      features: [
        "3 Bedrooms with Attached Bathrooms",
        "Spacious Living & Dining Area",
        "Modern Modular Kitchen",
        "Balcony with City View",
        "Premium Flooring",
        "Smart Home Features"
      ],
      popular: false
    },
    {
      type: "4 BHK",
      size: "1950 sq.ft.",
      price: "₹8,499 / sq.ft.",
      features: [
        "4 Bedrooms with Attached Bathrooms",
        "Large Living & Dining Area",
        "Modular Kitchen with Utility",
        "Two Balconies with Views",
        "Premium Wooden Flooring",
        "Smart Home Automation",
        "Walk-in Closet in Master Bedroom"
      ],
      popular: true
    }
  ];

  return (
    <section id="price-list" className="py-10 bg-gradient-to-b from-gray-50 to-white">
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
              Price List
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Unlock the Door to Affordable Luxury
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our premium selection of apartments designed for modern living
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className={`relative rounded-2xl overflow-hidden cursor-pointer ${
                plan.popular 
                  ? 'shadow-2xl transform scale-105' 
                  : 'shadow-xl'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 right-8 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-2 rounded-b-lg z-10">
                  <div className="flex items-center space-x-1">
                    <FiStar className="fill-current" />
                    <span className="font-bold">Most Popular</span>
                  </div>
                </div>
              )}

              <div className={`relative p-8 ${
                plan.popular 
                  ? 'bg-gradient-to-br from-amber-50 to-white border-2 border-amber-200'
                  : 'bg-white border border-gray-100'
              }`}>
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <MdKingBed className="text-2xl text-amber-600" />
                    <h3 className="text-3xl font-bold text-gray-900">
                      {plan.type}
                    </h3>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-2 text-gray-600 mb-6">
                    <MdSquareFoot className="text-xl" />
                    <span className="text-lg font-medium">{plan.size}</span>
                  </div>

                  <div className="mb-8">
                    <div className="text-sm text-gray-500 mb-2">Starting Price</div>
                    <div className="text-4xl font-bold text-amber-600">
                      {plan.price}
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center mt-1 ${
                        plan.popular
                          ? 'bg-amber-100 text-amber-600'
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        <FiCheck className="text-sm" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Amenities Icons */}
                <div className="flex justify-center space-x-6 mb-8">
                  <div className="text-center">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <MdKingBed className="text-gray-600" />
                    </div>
                    <span className="text-xs text-gray-500">{plan.type}</span>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <MdBathtub className="text-gray-600" />
                    </div>
                    <span className="text-xs text-gray-500">Attached Bath</span>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <MdSquareFoot className="text-gray-600" />
                    </div>
                    <span className="text-xs text-gray-500">Spacious</span>
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openModal('price-breakup')}
                  className={`w-full py-4 rounded-xl font-bold flex items-center justify-center space-x-2 transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:shadow-xl'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  <span>View Price Breakup</span>
                  <FiChevronRight />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Pricing Breakdown — GATED */}
        <div className="mt-16 max-w-5xl mx-auto relative">
          {/* Blur overlay when locked */}
          {!isUnlocked && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.65)', backdropFilter: 'blur(8px)' }}>
              <div className="text-center px-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <FiLock className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Unlock Full Pricing Details</h3>
                <p className="text-gray-600 mb-6 max-w-xs mx-auto text-sm">Floor-wise PLC, view charges, additional costs and disclaimers — available after a quick registration.</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowGateModal(true)}
                  className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all cursor-pointer"
                >
                  🔒 Unlock Price List
                </motion.button>
              </div>
            </div>
          )}

          {/* Blurred content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transition-all duration-500 ${!isUnlocked ? 'select-none pointer-events-none' : ''}`}
            style={{ filter: isUnlocked ? 'none' : 'blur(4px)' }}
          >
            <div className="bg-gradient-to-r from-amber-600 to-amber-700 p-6 text-white">
              <h3 className="text-2xl font-bold">Detailed Pricing Breakdown</h3>
              <p className="text-amber-100 mt-1">Basic Sales Price: ₹8,499 per sq.ft.</p>
            </div>
            
            <div className="p-6 md:p-8 space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* PLC by Floor */}
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-2 h-6 bg-amber-500 mr-2 rounded"></span>
                    PLC by Floor (₹/sq.ft.)
                  </h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex justify-between border-b pb-1"><span>1st - 5th Floor</span><span className="font-semibold text-gray-800">750</span></li>
                    <li className="flex justify-between border-b pb-1"><span>6th - 10th Floor</span><span className="font-semibold text-gray-800">700</span></li>
                    <li className="flex justify-between border-b pb-1"><span>11th - 15th Floor</span><span className="font-semibold text-gray-800">600</span></li>
                    <li className="flex justify-between border-b pb-1"><span>16th - 20th Floor</span><span className="font-semibold text-gray-800">500</span></li>
                    <li className="flex justify-between border-b pb-1"><span>21st - 25th Floor</span><span className="font-semibold text-gray-800">400</span></li>
                    <li className="flex justify-between border-b pb-1"><span>26th - 30th Floor</span><span className="font-semibold text-gray-800">300</span></li>
                    <li className="flex justify-between border-b pb-1"><span>31st - 33rd Floor</span><span className="font-semibold text-gray-800">200</span></li>
                    <li className="flex justify-between"><span>Top Floor</span><span className="font-semibold text-amber-600">Nil</span></li>
                  </ul>
                </div>

                {/* PLC by View & Other Charges */}
                <div className="space-y-8">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                      <span className="w-2 h-6 bg-amber-500 mr-2 rounded"></span>
                      PLC by View (₹/sq.ft.)
                    </h4>
                    <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                      <div className="bg-gray-50 p-3 rounded-lg text-center">Landscape<br/><span className="font-bold text-gray-900">225</span></div>
                      <div className="bg-gray-50 p-3 rounded-lg text-center">Park Facing<br/><span className="font-bold text-gray-900">225</span></div>
                      <div className="bg-gray-50 p-3 rounded-lg text-center">45 Mtr Road<br/><span className="font-bold text-gray-900">400</span></div>
                      <div className="bg-gray-50 p-3 rounded-lg text-center">Corner<br/><span className="font-bold text-gray-900">150</span></div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                      <span className="w-2 h-6 bg-amber-500 mr-2 rounded"></span>
                      Additional Charges
                    </h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li className="flex justify-between border-b pb-1"><span>Car Parking (Two)</span><span className="font-semibold text-gray-800">₹7,00,000</span></li>
                      <li className="flex justify-between border-b pb-1"><span>Club Membership</span><span className="font-semibold text-gray-800">₹4,45,000</span></li>
                      <li className="flex justify-between border-b pb-1"><span>Electricity Infra</span><span className="font-semibold text-gray-800">₹1,25,000</span></li>
                      <li className="flex justify-between"><span>Power Backup</span><span className="font-semibold text-gray-800">₹1,00,000</span></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Maintenance & IFMS */}
              <div className="bg-amber-50 p-4 rounded-xl flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm border border-amber-100">
                <div className="flex-1 text-center md:text-left">
                  <span className="text-amber-800 font-semibold block mb-1">IFMS</span>
                  <span className="text-gray-700">₹50/sq.ft.</span>
                </div>
                <div className="hidden md:block w-px h-8 bg-amber-200"></div>
                <div className="flex-1 text-center">
                  <span className="text-amber-800 font-semibold block mb-1">Maintenance</span>
                  <span className="text-gray-700">₹3.75/sq.ft. + GST<br/><span className="text-xs text-gray-500">(1 yr advance payable at possession)</span></span>
                </div>
              </div>

              <div className="text-xs text-gray-400 mt-6 pt-4 border-t border-gray-100">
                * Disclaimer: GST as applicable; prices subject to change at management's discretion; ECPA calculated @ ₹3,999/sq.ft.
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Unlock Gate Modal */}
      <AnimatePresence>
        {showGateModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowGateModal(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
              >
                <div className="bg-gradient-to-r from-amber-600 to-amber-700 p-6 text-white flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold">Unlock Full Pricing Details</h3>
                    <p className="text-amber-100 text-sm mt-1">Quick registration to view complete price list</p>
                  </div>
                  <button onClick={() => setShowGateModal(false)} className="text-white hover:text-amber-200 transition-colors cursor-pointer">
                    <FiX className="text-2xl" />
                  </button>
                </div>

                <div className="p-6">
                  {unlockDone ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FiCheckCircle className="text-green-500 text-3xl" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Unlocked!</h4>
                      <p className="text-gray-600 text-sm">Full pricing details are now visible.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleUnlockSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={unlockForm.name}
                          onChange={e => setUnlockForm(p => ({ ...p, name: e.target.value }))}
                          placeholder="Your name"
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          value={unlockForm.phone}
                          onChange={e => setUnlockForm(p => ({ ...p, phone: e.target.value.replace(/\D/g,'').slice(0,10) }))}
                          placeholder="10-digit mobile number"
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={unlockForm.email}
                          onChange={e => setUnlockForm(p => ({ ...p, email: e.target.value }))}
                          placeholder="you@example.com"
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                        />
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={isUnlocking}
                        className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all cursor-pointer disabled:opacity-60"
                      >
                        {isUnlocking ? 'Unlocking...' : 'Unlock Pricing & Sizing'}
                      </motion.button>
                      <p className="text-center text-xs text-gray-400">RERA No. UPRERAPRJ950965/07/2026 · We'll contact you with details.</p>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

    </section>
  );
};

export default PriceList;