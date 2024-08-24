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
const BenefitsCard = () => {
  return (
    <div>
      <div className="container mx-auto flex flex-col items-center px-4 pt-[60px] md:pt-16 gap-6">
        <div className="md:w-[489px]">
          <h1
            className={`text-[18px] md:text-[32px] ${openSans.className} text-center text-[#595D62]`}
          >
            We are obsessed with making{" "}
            <span className="text-[#595D62]">
              sure these{" "}
              <span
                className={`text-[#6665DD] text-xl md:text-[32px]  ${openSan.className}`}
              >
                benefits
              </span>{" "}
              help you.
            </span>
          </h1>
        </div>
        <div className="flex flex-col gap-1 md:gap-8">
          <div className="bg-[#FDFAFA] mt-10 py-5 px-10 rounded-3xl shadow-custom-anim h-full w-full border border-[#F5F5F5]">
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 md:px-10  mb-5 md:mb-0 py-5">
              <div>
                <Image
                  src="/img/tech-buis.gif"
                  alt="chat"
                  width={300}
                  height={276}
                  className="h-[350px] w-[400px] mt-[-75px]"
                />
              </div>
              <div className="md:w-[500px] 2xl:w-[600px] md:flex flex-col gap-5 justify-start">
                <div className="mb-5 md:mb-0">
                  <h1
                    className={`text-xl md:text-[32px] ${openSan.className} text-center`}
                  >
                    Teach More, Manage Less
                  </h1>
                </div>
                <p
                  className={`${openSans.className} text-[14px] md:text-lg text-center`}
                >
                  Redirect your focus from non-teaching tasks — let Copilot
                  streamline your routine tasks.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#FDFAFA] mt-10 py-5 px-10 rounded-3xl shadow-custom-anim h-full border border-[#F5F5F5]">
            <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 md:px-10  mb-5 md:mb-0 py-3">
              <div className="md:w-[500px] 2xl:w-[600px] md:flex flex-col gap-5 justify-start">
                <div className="mb-5 md:mb-0">
                  <h1
                    className={`text-xl md:text-[32px] ${openSan.className} text-center`}
                  >
                    Inspire More, Stress Less
                  </h1>
                </div>
                <p
                  className={`${openSans.className} text-[14px] md:text-lg text-center`}
                >
                  Shed the stress of overwhelming tasks — Copilot manages the
                  background details for you.
                </p>
              </div>
              <div>
                <Image
                  src="/img/less_women.gif"
                  alt="chat"
                  width={300}
                  height={276}
                  className="transform scale-x-[-1]"
                />
              </div>
            </div>
          </div>
          <div className="bg-[#FDFAFA] mt-10 py-5 px-10 rounded-3xl shadow-custom-anim h-full border border-[#F5F5F5]">
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 md:px-10  mb-5 md:mb-0 py-3">
              <div>
                <Image
                  src="/img/personal.gif"
                  alt="chat"
                  width={300}
                  height={276}
                />
              </div>
              <div className="md:w-[550px] 2xl:w-[650px] md:flex flex-col gap-5 justify-start">
                <div className="mb-5 md:mb-0">
                  <h1
                    className={`text-xl md:text-[32px] ${openSan.className} text-center`}
                  >
                    Personalize More, Struggle Less
                  </h1>
                </div>
                <p
                  className={`${openSans.className} text-[14px] md:text-lg text-center`}
                >
                  Deliver tailored learning experiences with Copilot's adaptive
                  support for each student.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsCard;
