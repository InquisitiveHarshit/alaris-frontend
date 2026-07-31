import React from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiBriefcase, FiMap } from 'react-icons/fi';
import { MdTrain, MdFactory } from 'react-icons/md';

const Connectivity = () => {
  const roadRail = [
    { name: "72 Km RRTS (Proposed)", desc: "Regional Rapid Transit System" },
    { name: "EPE", desc: "Eastern Peripheral Expressway" },
    { name: "74+ Km Link Expressway", desc: "Connecting Ganga & Yamuna Expressways" },
    { name: "DFC", desc: "Dedicated Freight Corridor integration" },
    { name: "Aqua Line", desc: "Noida Metro extension (Approved)" },
    { name: "MMLP", desc: "Multimodal Logistics Park (Boraki)" },
    { name: "Delhi–Varanasi", desc: "High-Speed Rail Corridor (Planned)" },
    { name: "Service Lanes", desc: "Dedicated lanes to airport & developments" }
  ];

  const jobs = [
    { count: "3,00,000", sector: "Apparel Park" },
    { count: "90,000", sector: "Electronics & Semiconductor" },
    { count: "25,000", sector: "Medical Devices Park" },
    { count: "70,000", sector: "Logistics & Distribution" },
    { count: "30,000", sector: "Toy Park" },
    { count: "15,000", sector: "Renewable Energy Hubs" },
    { count: "18,000", sector: "Automotive & Tractor Hub" },
    { count: "80,000", sector: "MSME & ODOP Units" }
  ];

  const investors = [
    { name: "Vivo Mobile India", desc: "Smartphone manufacturing hub" },
    { name: "Integrated Batteries", desc: "4 GW solar cell manufacturing" },
    { name: "Bikanervala", desc: "Food processing & snacks" },
    { name: "Foxconn / HCL JV", desc: "€3,706 cr semiconductor facility" },
    { name: "Minda Corporation", desc: "Automotive wiring harness" },
    { name: "New Holland", desc: "₹5,000 cr tractor plant" },
    { name: "Polynomous", desc: "Polymer compounds facility" },
    { name: "Escorts Kubota", desc: "₹4,500 cr tractor & equipment hub" },
    { name: "RPSG Group", desc: "3 GW solar ecosystem" },
    { name: "Sonalika Tractors", desc: "Tractor manufacturing unit" },
    { name: "SAEL Solar", desc: "8.5 GW solar cell plant" },
    { name: "Patanjali", desc: "Large Food & Herbal Park" }
  ];

  return (
    <section id="connectivity" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Rail & Road */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center mb-4">
              <div className="w-12 h-1 bg-amber-500 rounded-full mr-4" />
              <span className="text-amber-600 font-semibold tracking-widest uppercase">
                Rail & Road
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
              Connectivity That Accelerates Growth
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadRail.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-amber-200 transition-colors">
                <MdTrain className="text-3xl text-amber-600 mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Industrial Ecosystem */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center mb-4">
              <div className="w-12 h-1 bg-amber-500 rounded-full mr-4" />
              <span className="text-amber-600 font-semibold tracking-widest uppercase">
                The Corridor Rising
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
              A Multi-Sector Economic Engine
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              3,113 industrial parks allotted across Apparel, Electronics, Renewable Energy, Toys, Fintech, Logistics, and Medical Devices.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {jobs.map((job, idx) => (
              <div key={idx} className="text-center p-6 bg-amber-50 rounded-xl border border-amber-100 shadow-sm">
                <div className="text-2xl md:text-3xl font-bold text-amber-600 mb-1">{job.count}</div>
                <div className="text-gray-700 text-xs md:text-sm uppercase tracking-wider font-semibold">{job.sector}</div>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-8 shadow-xl text-white">
            <h3 className="text-2xl font-bold mb-8 text-center flex items-center justify-center">
              <MdFactory className="text-amber-200 mr-3 text-3xl" />
              Industry Giants Investing in the Region
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {investors.map((inv, idx) => (
                <div key={idx} className="flex flex-col border-b border-amber-500/50 pb-4">
                  <span className="font-bold text-white text-lg">{inv.name}</span>
                  <span className="text-amber-100 text-sm mt-1">{inv.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Connectivity;
