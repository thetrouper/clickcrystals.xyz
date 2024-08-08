'use client'

import { useState } from "react";
import { motion } from "framer-motion";

export default function MobileMenuNav({handler}: any) {
  const [navbarOpen, setNavbarOpen] = useState(true);
  
  const toggle = () => {
    setNavbarOpen(!navbarOpen);
    handler(navbarOpen);
  };

  return (
    <div className="md:hidden">
      <button
        className="inline items-center p-3 rounded-full bg-blue-50 text-gray-700 hover:bg-blue-100"
        onClick={toggle}
      >
        <svg width="20" height="20" viewBox="0 0 24 24">
          <motion.path
            d="M3 6h18M3 12h18M3 18h18"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            animate={navbarOpen ? { d: "M3 6h18M3 12h18M3 18h18" } : { d: "M3 3l18 18M3 21l18-18" }}
            transition={{ duration: 0.2 }}
          />
        </svg>
      </button>
    </div>
  );
}