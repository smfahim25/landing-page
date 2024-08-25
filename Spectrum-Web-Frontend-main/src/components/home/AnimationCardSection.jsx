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
    <div className="container mx-auto px-4 pt-16">
      <div className="flex flex-col gap-1 md:gap-16 mx-auto">
        <div className="md:w-[750px] mx-auto">
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
                className={`${style.cardContainer} lg:h-[100vh] xl:h-[100vh] md-xl:h-[90vh] 2xl:h-[85vh] 3xl:h-[75vh] 5xl:h-[65vh] 6xl:h-[65vh] md:sticky md:bottom-0`}
                style={{ zIndex: projects.length - i }} // Ensures correct stacking order
              >
                <div
                  className={`bg-[#FDFAFA] mt-10 py-5 px-10 shadow-custom-anim rounded-3xl h-full xl:h-[400px] 3xl:h-[400px] 6xl:h-[500px] ${style.card} border border-[#F5F5F5] xl:relative`}
                  style={{ top: `${i * 80}px` }} // Adjust the top value
                >
                  <div className="relative flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 md:px-10 xl:h-[300px] 6xl:h-[400px] mb-5 md:mb-0">
                    <div className="md:w-[550px] 2xl:w-[700px] 5xl:w-full 6xl:w-full md:flex flex-col gap-5 justify-start">
                      <div className="mb-5 md:mb-0">
                        <div className="bg-[#6CAE7533] w-24 text-center py-2 rounded-2xl mb-2">
                          <p className={`${openSans.className} text-[10px]`}>
                            {project?.status}
                          </p>
                        </div>
                        <h1
                          className={`text-xl md:text-[32px] ${openSan.className}`}
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
    </div>
  );
};

export default AnimationCardSection;
