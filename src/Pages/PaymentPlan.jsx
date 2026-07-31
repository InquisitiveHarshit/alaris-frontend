import React from 'react';
import { motion } from 'framer-motion';

const PaymentPlan = () => {
  const clpData = [
    { stage: "On Booking", percentage: "10%" },
    { stage: "Within 45 Days", percentage: "10%" },
    { stage: "Start of Excavation", percentage: "5%" },
    { stage: "Start of Rafting", percentage: "5%" },
    { stage: "Start of Basement", percentage: "5%" },
    { stage: "Completion of Ground Floor", percentage: "5%" },
    { stage: "2nd Floor Slab", percentage: "5%" },
    { stage: "6th Floor Slab", percentage: "5%" },
    { stage: "10th Floor Slab", percentage: "5%" },
    { stage: "14th Floor Slab", percentage: "5%" },
    { stage: "18th Floor Slab", percentage: "5%" },
    { stage: "22nd Floor Slab", percentage: "5%" },
    { stage: "26th Floor Slab", percentage: "5%" },
    { stage: "30th Floor Slab", percentage: "5%" },
    { stage: "Top Floor Slab", percentage: "5%" },
    { stage: "Exterior Plaster / Primer", percentage: "5%" },
    { stage: "On Offer of Possession", percentage: "10%" },
  ];

  return (
    <section id="payment-plan" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center mb-4">
            <div className="w-12 h-1 bg-amber-500 rounded-full mr-4" />
            <span className="text-amber-600 font-semibold tracking-widest uppercase">
              Payment Plan
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Construction Linked Plan (CLP)
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A structured, progress-based payment schedule designed for your peace of mind.
          </p>
        </motion.div>

        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-10 border border-gray-100">
          <div className="relative border-l-4 border-amber-200 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-8">
            {clpData.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[35px] sm:-left-[51px] top-1/2 transform -translate-y-1/2 w-6 h-6 bg-white border-4 border-amber-500 rounded-full z-10" />
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-gray-50 p-4 rounded-xl hover:bg-amber-50 transition-colors border border-transparent hover:border-amber-200 group">
                  <span className="text-gray-800 font-medium text-base sm:text-lg mb-2 sm:mb-0 group-hover:text-amber-900">
                    {item.stage}
                  </span>
                  <div className="bg-amber-500 text-white font-bold px-4 py-1.5 rounded-full text-sm self-start sm:self-auto shadow-md">
                    {item.percentage}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentPlan;
