"use client";

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

function TotalFranchisees() {
  const avatars = [
    "/avatar1.avif", 
    "/avatar2.avif", 
    "/avatar3.avif", 
    "/avatar4.avif"
  ]; 

  const stages = [
    { name: "Stage 1 (Initial Inquiry)", progress: 2 },
    { name: "Stage 2 (Document Submission)", progress: 7 },
    { name: "Stage 3 (Training)", progress: 5 },
  ];

  return (
    <motion.div
      className="bg-white p-4 rounded-xl shadow"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-lg font-semibold mb-2">Total Franchisees Onboard</h2>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-4xl font-bold">14</span>

          <div className="flex items-center bg-green-100 text-green-600 px-2 py-0.5 rounded-full text-sm font-medium">
            <ArrowUpRight size={16} className="mr-1" />
            7.4%
          </div>
        </div>

        <div className="flex items-center -space-x-2">
          {avatars.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt="avatar"
              width={32}
              height={32}
              className="rounded-full border-2 border-white"
            />
          ))}
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium border-2 border-white">
            +7
          </div>
        </div>
      </div>

  
      <div className="space-y-2">
        {stages.map((stage, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-600">{stage.name}</span>
            <div className="w-full bg-gray-200 h-2 rounded-full">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: `${(stage.progress / 10) * 100}%` }}
              />
            </div>
            <span className="text-sm font-medium text-gray-600 ml-2">{String(stage.progress).padStart(2, '0')}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default TotalFranchisees;
