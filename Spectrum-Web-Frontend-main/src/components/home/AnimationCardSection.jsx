import { Open_Sans } from "next/font/google";
import Image from "next/image";
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
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col gap-1 md:gap-8 mx-auto">
        <div className="md:w-[700px] mx-auto">
          <h1
            className={`text-[18px] md:text-[32px] ${openSans.className} text-center`}
          >
            We're busy building a product with{" "}
            <span
              className={`text-[#6665DD] text-xl md:text-[32px]  ${openSan.className}`}
            >
              features
            </span>{" "}
            {""}
            <span>most important to help you do what you do best.</span>
          </h1>
        </div>
        <div>
          {projects.map((project, i) => {
            return (
              <div
                key={`p_${i}`}
                className={`relative md:sticky md:bottom-0`}
                style={{ zIndex: projects.length - i, top: `${i * 40}px` }} // Adjust the spacing as needed
              >
                <div className="bg-[#FDFAFA] mt-3 py-4 px-6 rounded-3xl shadow-md h-auto md:h-[340px]">
                  <div className="relative flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 md:px-8 md:h-[272px] mb-4 md:mb-0">
                    <div className="md:w-[400px] flex flex-col gap-4 justify-start">
                      <div className="mb-4">
                        <div className="bg-[#6CAE7533] w-20 text-center py-2 rounded-2xl mb-2">
                          <p className="text-xs">{project?.status}</p>
                        </div>
                        <h1 className="text-lg md:text-2xl">
                          {project?.title}
                        </h1>
                      </div>
                      <p className="text-sm md:text-base">
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
    </div>
  );
};

export default AnimationCardSection;
