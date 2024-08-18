import { Open_Sans } from "next/font/google";
import Image from "next/image";
import React from "react";
import { projects } from "../../data";
import style from "./card.module.scss";

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
    <div className="container mx-auto px-4 py-16 gap-8">
      <div className="flex flex-col gap-1 md:gap-8 mx-auto">
        <div className="md:w-[700px] mx-auto">
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
        {projects.map((project, i) => {
          return (
            <div
              key={`p_${i}`}
              className={`${style.cardContainer} md:h-[68vh] md:sticky md:top-0`}
            >
              <div
                className={`bg-[#FDFAFA] mt-10 py-5 px-10 rounded-3xl ${style.custom_shad} h-full md:h-[340px] ${style.card}`}
                style={{ top: `calc(10% + ${i * 25}px)` }}
              >
                <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 md:px-10 md:h-[272px] mb-5 md:mb-0">
                  <div className="md:w-[400px] md:flex flex-col gap-5 justify-start">
                    <div className="mb-5 md:mb-0">
                      <div className="bg-[#6CAE7533] w-24 text-center py-2 rounded-2xl mb-2">
                        <p className={`${openSans.className} text-[10px]`}>
                          {project?.status}
                        </p>
                      </div>
                      <h1
                        className={`text-xl md:text-3xl ${openSan.className}`}
                      >
                        {project?.title}
                      </h1>
                    </div>
                    <p
                      className={`${openSans.className} text-[14px] md:text-lg`}
                    >
                      {project?.description}
                    </p>
                  </div>
                  <div>
                    <Image
                      src={project?.link}
                      alt={project?.src}
                      width={300}
                      height={276}
                    />
                  </div>
                </div>
                <div>
                  <p>{project?.page}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AnimationCardSection;
