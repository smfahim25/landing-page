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
      <div>
        <h1 className={`text-md md:text-3xl ${openSans.className}`}>
          We're busy building a product with{" "}
          <span
            className={`text-[#6665DD] text-2xl md:text-3xl  ${openSan.className}`}
          >
            features
          </span>
          <br />
          <span>most important to help you do what you do best.</span>
        </h1>
      </div>
      <div className="flex flex-col gap-8">
        <div className="bg-[#FDFAFA] mt-10 py-5 px-10 rounded-xl shadow-md">
          <div className="flex items-center gap-16 px-10">
            <div className="w-[400px] flex flex-col gap-5 justify-start">
              <div>
                <div className="bg-[#6CAE7533] w-24 text-center py-2 rounded-2xl mb-2">
                  <p className={`${openSans.className} text-[10px]`}>
                    Launching with
                  </p>
                </div>
                <h1 className={`text-md md:text-3xl ${openSan.className}`}>
                  Chat Canvas
                </h1>
              </div>
              <p className={`${openSans.className} text-lg`}>
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
        <div className="bg-[#FDFAFA] mt-10 py-5 px-10 rounded-xl shadow-md">
          <div className="flex items-center gap-16 px-10">
            <div className="w-[400px] flex flex-col gap-5 justify-start">
              <div>
                <div className="bg-[#6CAE7533] w-24 text-center py-2 rounded-2xl mb-2">
                  <p className={`${openSans.className} text-[10px]`}>
                    Launching with
                  </p>
                </div>
                <h1 className={`text-md md:text-3xl ${openSan.className}`}>
                  Chat Canvas
                </h1>
              </div>
              <p className={`${openSans.className} text-lg`}>
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
            <p>02</p>
          </div>
        </div>
        <div className="bg-[#FDFAFA] mt-10 py-5 px-10 rounded-xl shadow-md">
          <div className="flex items-center gap-16 px-10">
            <div className="w-[400px] flex flex-col gap-5 justify-start">
              <div>
                <div className="bg-[#6CAE7533] w-24 text-center py-2 rounded-2xl mb-2">
                  <p className={`${openSans.className} text-[10px]`}>
                    Launching with
                  </p>
                </div>
                <h1 className={`text-md md:text-3xl ${openSan.className}`}>
                  Chat Canvas
                </h1>
              </div>
              <p className={`${openSans.className} text-lg`}>
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
            <p>03</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimationCardSection;
