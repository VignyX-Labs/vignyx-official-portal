"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiArrowUp } from "react-icons/hi";

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 480);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed z-40 bottom-40 right-4 md:bottom-24 md:right-6 w-11 h-11 rounded-full bg-white border border-[#e2e8f0] shadow-lg flex items-center justify-center text-[#4338ca] hover:bg-indigo-50 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4338ca]/50 focus-visible:ring-offset-2"
        >
          <HiArrowUp size={18} aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
