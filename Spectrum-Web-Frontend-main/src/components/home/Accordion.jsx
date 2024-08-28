"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b md:w-[700px] lg:w-[900px] md-lg:w-[990px] mx-auto">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between w-full py-4 px-2 md:px-6 text-left"
      >
        <span className="text-[14px] md:text-[20px] font-medium">{title}</span>
        <span>
          {isOpen ? (
            <ChevronUp className="text-xl" />
          ) : (
            <ChevronDown className="text-xl" />
          )}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, scale: 0.95 }}
            animate={{ height: "auto", opacity: 1, scale: 1 }}
            exit={{ height: 0, opacity: 0, scale: 0.95 }}
            transition={{
              duration: 0.5,
              ease: [0.25, 0.8, 0.5, 1],
            }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-4 text-gray-600 text-[14px]">{content}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccordionItem;
