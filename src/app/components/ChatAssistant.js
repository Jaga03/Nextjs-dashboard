"use client";

import { motion } from 'framer-motion';

function ChatAssistant() {
  return (
    <motion.div
      className="bg-white p-4 rounded-xl shadow flex flex-col justify-between"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <img src="/logo.png" alt="logo" className="mx-auto mb-4" style={{ width: '64px', height: '35.56px' }}/>
      <h2 className="text-2xl font-semibold mb-2 text-center">Welcome to the AI Chat Assistant</h2>
      <div className="relative w-full mt-4">
        <input
          type="text"
          placeholder="Ask your question here..."
          className="border p-2 pr-10 rounded-lg w-full"
        />
        <img
          src="/send.png"
          alt="send"
          className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
        />
      </div>
    </motion.div>
  );
}

export default ChatAssistant;
