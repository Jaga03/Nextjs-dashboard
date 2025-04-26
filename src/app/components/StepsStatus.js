"use client";

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

function StepsStatus() {
  const completedSteps = [
    "Profile Setup",
    "Initial Training",
    "Legal Documents",
  ];

  const remainingSteps = [
    "Financial Integration",
    "Final Review",
  ];

  return (
    <div className="space-y-6">
     
      <motion.div
        className="bg-gray-50 p-6 rounded-2xl shadow-md"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="text-lg font-bold mb-6 text-gray-800">Steps Completed</h2>
        <ul className="space-y-4">
          {completedSteps.map((step, index) => (
            <li key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
               
                <div className="h-3 w-3 rounded-full border border-gray-400"></div>
                <span className="text-gray-700">{step}</span>
              </div>
             
              <CheckCircle className="text-green-500 h-5 w-5" />
            </li>
          ))}
        </ul>
      </motion.div>

      
      <motion.div
        className="bg-gray-50 p-6 rounded-2xl shadow-md"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      >
        <h2 className="text-lg font-bold mb-6 text-gray-800">Steps Remaining</h2>
        <ul className="space-y-4">
          {remainingSteps.map((step, index) => (
            <li key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
           
                <div className="h-3 w-3 rounded-full border border-gray-400"></div>
                <span className="text-gray-700">{step}</span>
              </div>
            
              <CheckCircle className="text-green-300 h-5 w-5" />
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export default StepsStatus;
