import React from 'react';
import { motion } from 'framer-motion';

const DesignTeam = () => {
  const team = [
    { role: "Project Architect", name: "Hafeez Contractor" },
    { role: "Club & Interior Architect", name: "OchreInk" },
    { role: "Landscape Architect", name: "SCI (Site Concepts International), Singapore" },
    { role: "Structural Consultant", name: "R D Consultant" },
    { role: "MEP Consultant", name: "Paradise Consultant" },
    { role: "Clubhouse Interior Designer", name: "Mona Arora, Studio Designscape" }
  ];

  return (
    <section id="design-team" className="py-20 bg-gradient-to-b from-white to-gray-50">
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
              Shaped By Globally Respected Design Expertise
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            A Collaborative Vision, Expertly Assembled
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all flex items-start space-x-4"
            >
              <div className="w-2 h-12 bg-amber-500 rounded-full shrink-0" />
              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">{member.role}</p>
                <h4 className="text-lg font-bold text-gray-900">{member.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignTeam;
