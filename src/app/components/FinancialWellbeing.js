"use client";
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

function FinancialWellbeing() {
  return (
    <motion.div
      className="bg-white p-4 rounded-xl shadow"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-lg font-semibold mb-2">Financial Wellbeing</h2>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold">20</h1>
          <p className="text-sm text-gray-500">Total Franchisees</p>
        </div>
        <div className="flex items-center bg-green-100 text-green-600 px-2 py-0.5 rounded-full text-sm font-medium">
          <ArrowUpRight size={18} className="mr-1" />
          2.1%
        </div>
      </div>
      <div className="p-1">
        <hr className="border-gray-200" />
      </div>
      <div className="flex justify-center mt-4 space-x-4">
        <div className="flex flex-col items-center p-8 border-2 border-gray-300 rounded-lg text-center sm:p-4">
          <p className="text-m">Target</p>
          <span className="font-bold text-2xl mt-2">$500,000</span>
        </div>
        <div className="flex flex-col items-center p-8 border-2 border-gray-300 rounded-lg text-center sm:p-4">
          <p className="text-m">Current</p>
          <span className="font-bold text-2xl mt-2">$450,000</span>
        </div>
      </div>
    </motion.div>
  );
}

export default FinancialWellbeing;
