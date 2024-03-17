import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
interface HeaderProps {
  date: Date;
}

const Header: React.FC<HeaderProps> = ({ date }) => {
  const formattedDate = date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <AnimatePresence >
      <div className="min-w-[390px] w-1/3 flex justify-center items-center bg-gray-200 text-gray-800 py-2 rounded-b-2xl">
        <motion.h1
        key={formattedDate}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2 }} 
        className="text-xl px-5"
        >
          {formattedDate}
        </motion.h1>
      </div>
  </AnimatePresence>
  );
};

export default Header;

