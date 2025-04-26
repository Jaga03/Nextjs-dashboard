"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const PendingQuestions = () => {
  const questions = [
    {
      name: "Phoenix Baker",
      username: "@phoenix",
      time: "5min ago",
      question: "What are the requirements for opening a new store?",
      avatar: "/avatar5.png", 
    },
    {
      name: "Koray Okumus",
      username: "@koray",
      time: "4hr ago",
      question: "How do I manage inventory effectively?",
      avatar: "/avatar6.png",
    },
  ];

  return (
    <motion.div
      className="bg-white p-4 rounded-xl shadow-md"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Pending Questions</h2>
        <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full font-semibold">
          {questions.length.toString().padStart(2, '0')}
        </span>
      </div>

      <ul className="divide-y divide-gray-200">
        {questions.map((item, index) => (
          <li key={index} className="py-4 flex items-start gap-3">
            <div className="relative">
              <Image
                src={item.avatar}
                alt={item.name}
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></span>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.username}</p>
                </div>
                <p className="text-xs text-gray-400">{item.time}</p>
              </div>
              <p className="mt-2 text-gray-700">{item.question}</p>
            </div>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default PendingQuestions;
