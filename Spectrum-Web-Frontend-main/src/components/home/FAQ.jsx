import { Open_Sans } from "next/font/google";
import React from "react";
import AccordionItem from "./Accordion";

const openSan = Open_Sans({
  weight: "700",
  subsets: ["vietnamese"],
});
const openSans = Open_Sans({
  weight: "400",
  subsets: ["vietnamese"],
});

const FAQ = () => {
  return (
    <div>
      <div className="container mx-auto px-5 flex flex-col items-center py-16 gap-8 mt-5">
        <div className="text-center">
          <h1
            className={`text-lg md:text-[32px] text-[#595D62] ${openSans.className}`}
          >
            Got questions? We’ve got{" "}
            <span
              className={`text-lg md:text-[32px] ${openSan.className} text-[#6665DD]`}
            >
              answers!
            </span>
          </h1>
        </div>
        <div className="bg-[#FDFAFA] lg:w-[1090px] mt-8 px-5 md:px-10  py-12 rounded-[40px] shadow-custom-anim border border-[#F5F5F5]">
          <div className="w-full lg:w-[720px]">
            <AccordionItem
              title="What is Copilot?"
              content="Copilot is an AI-powered code completion tool that helps you write code faster and with fewer errors."
            />
            <AccordionItem
              title="How do I sign up for Copilot?"
              content="To sign up for Copilot, visit the official website and follow the registration process."
            />
            <AccordionItem
              title="How long will I have to wait to get access after signing up?"
              content="Access time may vary, but it typically takes a few days after signing up."
            />
            <AccordionItem
              title="Do I need to complete an educator verification to access Copilot?"
              content="Educator verification is not required to access Copilot, but it may be necessary for certain features."
            />
            <AccordionItem
              title="What can I do to expedite my access to Copilot?"
              content="Educator verification is not required to access Copilot, but it may be necessary for certain features."
            />
            <AccordionItem
              title="What is Copilot Insider Circle?"
              content="Educator verification is not required to access Copilot, but it may be necessary for certain features."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
