"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between w-full py-4 px-6 text-left"
      >
        <span className="text-[14px] md:text-[20px] font-medium">{title}</span>
        {isOpen ? (
          <ChevronUp className="text-xl" />
        ) : (
          <ChevronDown className="text-xl" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-4 text-gray-600 text-[14px]">{content}</div>
      )}
    </div>
  );
};
export default AccordionItem;
