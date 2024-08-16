import { Open_Sans } from "next/font/google";
import Image from "next/image";
import React from "react";

const openSan = Open_Sans({
  weight: "700",
  subsets: ["vietnamese"],
});
const openSans = Open_Sans({
  weight: "400",
  subsets: ["vietnamese"],
});
const AnimationCardSection = () => {
  return (
    <div className="container mx-auto flex flex-col items-center px-4 py-16 gap-8">
      <div className="md:w-[700px]">
        <h1
          className={`text-[18px] md:text-3xl ${openSans.className} text-center`}
        >
          We're busy building a product with{" "}
          <span
            className={`text-[#6665DD] text-xl md:text-3xl  ${openSan.className}`}
          >
            features
          </span>{" "}
          {""}
          <span>most important to help you do what you do best.</span>
        </h1>
      </div>
      <div className="flex flex-col gap-1 md:gap-8">
        <div className="bg-[#FDFAFA] mt-10 py-5 px-10 rounded-3xl shadow-md h-full md:h-[340px]">
          <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 md:px-10 md:h-[272px] mb-5 md:mb-0">
            <div className="md:w-[400px] md:flex flex-col gap-5 justify-start">
              <div className="mb-5 md:mb-0">
                <div className="bg-[#6CAE7533] w-24 text-center py-2 rounded-2xl mb-2">
                  <p className={`${openSans.className} text-[10px]`}>
                    Launching with
                  </p>
                </div>
                <h1 className={`text-xl md:text-3xl ${openSan.className}`}>
                  Chat Canvas
                </h1>
              </div>
              <p className={`${openSans.className} text-[14px] md:text-lg`}>
                Effortlessly generate ideas, draft lessons, and interact with
                AI, all while instantly organizing your notes.
              </p>
            </div>
            <div>
              <Image
                src="/img/chat_canvas.svg"
                alt="chat"
                width={300}
                height={276}
              />
            </div>
          </div>
          <div>
            <p>01</p>
          </div>
        </div>
        <div className="bg-[#FDFAFA] mt-10 py-5 px-10 rounded-3xl shadow-md h-full md:h-[340px]">
          <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 md:px-10 md:h-[272px] mb-5 md:mb-0 py-3">
            <div className="md:w-[400px] md:flex flex-col gap-5 justify-start">
              <div className="mb-5 md:mb-0">
                <div className="bg-[#6CAE7533] w-24 text-center py-2 rounded-2xl mb-2">
                  <p className={`${openSans.className} text-[10px]`}>
                    Comming Soon
                  </p>
                </div>
                <h1 className={`text-xl md:text-3xl ${openSan.className}`}>
                  Smart Workflows
                </h1>
              </div>
              <p className={`${openSans.className} text-[14px] md:text-lg`}>
                Automate your tasks with Smart Workflows or build one with
                actions library for your uniques tasks.
              </p>
            </div>
            <div>
              <Image src="/img/smart.svg" alt="chat" width={300} height={276} />
            </div>
          </div>
          <div>
            <p>02</p>
          </div>
        </div>
        <div className="bg-[#FDFAFA] mt-10 py-5 px-10 rounded-3xl shadow-md h-full md:h-[340px]">
          <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 md:px-10 md:h-[272px] mb-5 md:mb-0 py-3">
            <div className="md:w-[400px] md:flex flex-col gap-5 justify-start">
              <div className="mb-5 md:mb-0">
                <div className="bg-[#6CAE7533] w-24 text-center py-2 rounded-2xl mb-2">
                  <p className={`${openSans.className} text-[10px]`}>
                    Comming Soon
                  </p>
                </div>
                <h1 className={`text-xl md:text-3xl ${openSan.className}`}>
                  Virtual Teaching Assistants (VTAs)
                </h1>
              </div>
              <p className={`${openSans.className} text-[14px] md:text-lg`}>
                Create AI tutors tailored to your learner needs and deploy to
                support individual learning.
              </p>
            </div>
            <div>
              <Image
                src="/img/virtual.svg"
                alt="chat"
                width={300}
                height={276}
              />
            </div>
          </div>
          <div>
            <p>03</p>
          </div>
        </div>
        <div className="bg-[#FDFAFA] mt-10 py-5 px-10 rounded-3xl shadow-md h-full md:h-[340px]">
          <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 md:px-10 md:h-[272px] mb-5 md:mb-0 py-2">
            <div className="md:w-[400px] md:flex flex-col gap-5 justify-start">
              <div className="mb-5 md:mb-0">
                <div className="bg-[#6CAE7533] w-24 text-center py-2 rounded-2xl mb-2">
                  <p className={`${openSans.className} text-[10px]`}>
                    Comming Soon
                  </p>
                </div>
                <h1 className={`text-xl md:text-3xl ${openSan.className}`}>
                  Custom Copilots
                </h1>
              </div>
              <p className={`${openSans.className} text-[14px] md:text-lg`}>
                AI assistants tailored to help you with specific tasks like
                lesson planning, and professional development.
              </p>
            </div>
            <div>
              <Image
                src="/img/copilots.svg"
                alt="chat"
                width={300}
                height={276}
              />
            </div>
          </div>
          <div>
            <p>04</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimationCardSection;
