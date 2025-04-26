"use client";

import { motion } from 'framer-motion';

function ProspectLeads() {
  const leads = [
    { name: "Wade Warren", stage: "Initial Inquiry", avatar: "/lead1.png" },
    { name: "Ava Wright", stage: "Initial Inquiry", avatar: "/lead2.png" },
    { name: "Cody Fisher", stage: "Initial Inquiry", avatar: "/lead3.png" },
  ];

  return (
    <motion.div
      className="bg-white p-4 rounded-xl shadow"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-lg font-semibold mb-4">Prospect Leads</h2>
      <ul className="space-y-4 text-gray-700">
        {leads.map((lead, index) => (
          <li key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src={lead.avatar} alt="avatar" className="w-10 h-10 rounded-full" />
              <span className="font-medium">{lead.name}</span>
            </div>
            <span className="text-sm text-gray-500">Stage: {lead.stage}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default ProspectLeads;
