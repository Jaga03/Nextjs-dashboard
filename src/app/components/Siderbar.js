"use client";

import { useState } from "react";
import {FaBars} from 'react-icons/fa'


export default function Sidebar(){
    const [isOpen,setIsOpen] = useState(false);
    const toggleSidebar=()=> setIsOpen(!isOpen);
    const menuItems = [
    "Home",
    "Stages & Checklist",
    "Upload Docs",
    "Preferred Vendors",
    "Tech Stack",
    "Targets",
    "Zee Sales Targets",
    "MAI Settings",
    ];

    return(
        <>
        {/* Mobile Top Bar */}
      <div className="lg:hidden  p-6 bg-[#11455D] text-white flex justify-between items-center h-full" >
        <button onClick={toggleSidebar} aria-label="Toggle Sidebar" className="absolute top-2 left-5">
          <FaBars size={24} />
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`${
          isOpen ? "block" : "hidden"
        } lg:block bg-[#11455D] text-gray-300 p-6 space-y-4 w-64 min-h-screen fixed lg:static top-0 left-0 z-50 transition-all duration-300`}
      >
        <div className="flex flex-col justify-between h-full">
       
          <nav className="space-y-2">
            {menuItems.map((item, idx) => (
              <button
                key={idx}
                className="w-full text-left hover:text-[#348feb] hover:bg-white/10 px-3 py-2 rounded transition duration-200"
              >
                {item}
              </button>
            ))}

          
            <button className="w-full flex items-center justify-between hover:text-[#348feb] hover:bg-white/10 px-3 py-2 rounded transition duration-200">
              <span>Pending Questions</span>
              <span className="text-sm bg-white text-[#11455D] font-bold w-6 h-6 flex items-center justify-center rounded-full">
                3
              </span>
            </button>
          </nav>

          
          <div className="absolute  bottom-0 py-3">
            <button className="w-full text-left hover:text-[#348feb] hover:bg-white/10 px-3 py-2 rounded transition duration-200" aria-label="Logout">
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black/40 lg:hidden z-40"
          
          aria-label="Close sidebar" 
        />
      )}
        </>
    )
}