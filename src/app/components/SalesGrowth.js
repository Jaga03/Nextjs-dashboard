"use client";

import { motion } from 'framer-motion';

function SalesGrowth() {
  return (
    <motion.div
      className="bg-white p-4 rounded-2xl shadow flex flex-col gap-4"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <h1 className='text-lg font-semibold mb-2'>Key Insights & Feedback</h1>
      <div className="flex justify-between items-center">
        
        <div>
          <h2 className="text-4xl font-bold">10%</h2>
          <p className="text-sm text-gray-500">Sales Growth</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/batch.png" 
            alt="Top Performer"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-xs text-blue-600 font-semibold mt-1 bg-blue-100 px-2 py-0.5 rounded-full">
            Top Performer
          </span>
        </div>
      </div>

      <hr className="border-gray-200" />

      <div>
        <h3 className="text-sm font-semibold text-gray-800 mb-2">Feedback</h3>
        <div className="flex items-start gap-2 text-gray-600 text-sm">
          <div className="w-2 h-2 bg-gray-400 rounded-full mt-1" />
          <p>Franchisees are requesting more detailed training materials.</p>
        </div>
      </div>
    </motion.div>
  );
}

export default SalesGrowth;
