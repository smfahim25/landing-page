import { Open_Sans } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

const openSan = Open_Sans({
  weight: "700",
  subsets: ["vietnamese"],
});
const openSans = Open_Sans({
  weight: "400",
  subsets: ["vietnamese"],
});
const Hero = () => {
  const user = useSelector((state) => state.auth.user);
  const router = useRouter();
  return (
    <div>
      <section>
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center gap-7">
          {/* https://www.youtube.com/embed/znqUwx0b0HI?si=ubmfNWGSb1vfyiG7 */}
          <video
            className="absolute top-0 left-0 w-full h-[60vh] object-cover z-[-1] filter blur-[130px]"
            src="/img/blur.mp4"
            autoPlay
            loop
            muted
            playsInline
            poster="/img/placeholder.jpg" // Fallback image in case the video doesn't load
          ></video>
          <div>
            <div>
              <h1
                className={`text-2xl font-bold md:text-5xl ${openSan.className}`}
              >
                Hello Educators!
              </h1>
              <h1
                className={`text-2xl mt-2 font-bold md:text-5xl md:mt-5 ${openSan.className}`}
              >
                <span className="text-[#6665DD]">Copilot</span> reporting in
                soon.
              </h1>
            </div>
            <div className="mt-5">
              <h1
                className={`text-md md:text-2xl text-[#262626] ${openSans.className}`}
              >
                Copilot handles all the boring stuff,
              </h1>
              <h1 className={`text-md md:text-2xl mt-2 ${openSans.className}`}>
                so you can focus on what you love —{" "}
                <span
                  className={`text-[#00BEB0] text-2xl md:text-3xl  ${openSan.className}`}
                >
                  teaching
                </span>
              </h1>
            </div>
          </div>
          <div className="flex flex-wrap justify-center">
            {user ? (
              <button className="px-8 py-3 m-2 text-md font-semibold rounded-xl bg-[#B5BABE] text-white flex justify-center items-center">
                <Image src="/img/tick.svg" alt="tick" width={24} height={24} />{" "}
                <span> You’re on the waitlist</span>
              </button>
            ) : (
              <button
                className="px-8 py-3 m-2 text-lg font-semibold rounded-xl bg-[#6665DD] text-white"
                onClick={() => router.push("/login")}
              >
                Sign in to join waitlist
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
