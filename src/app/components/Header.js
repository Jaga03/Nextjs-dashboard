"use client";

import { Cog6ToothIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

function Header() {
  return (
    <motion.header
      className="flex justify-between items-center px-6 py-4 bg-white rounded-xl shadow"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h1 className="text-xl font-bold">Dashboard</h1>
      <div className="flex items-center gap-4">
        <Cog6ToothIcon className="h-6 w-6 text-gray-600 cursor-pointer" />
        <img
          src="/avatar1.avif"
          alt="Profile"
          className="w-9 h-9 rounded-full border"
        />
      </div>
    </motion.header>
  );
}

export default Header;
