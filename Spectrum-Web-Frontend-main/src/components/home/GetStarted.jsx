import { Badge } from "@mui/material";
import { Open_Sans } from "next/font/google";
import React from "react";

const openSan = Open_Sans({
  weight: "700",
  subsets: ["vietnamese"],
});
const openSans = Open_Sans({
  weight: "400",
  subsets: ["vietnamese"],
});

const GetStarted = () => {
  return (
    <div className="bg-started-gradient w-full">
      <div className="container mx-auto flex flex-col items-center py-16 gap-8">
        <div className="text-center">
          <h1 className={`text-3xl text-[#595D62] ${openSans.className}`}>
            Copilot is exclusively designed for you and your fellow educators.
          </h1>
          <h1 className={`text-3xl text-[#595D62] ${openSans.className}`}>
            Here’s how you can{" "}
            <span className={`text-3xl ${openSan.className} text-[#6665DD]`}>
              get started.
            </span>
          </h1>
        </div>
        <div className="px-40 flex flex-col items-center gap-12">
          <div className="flex justify-center items-center gap-5 px-10">
            <div className="text-[#595D62]">Step 1</div>
            <div className="flex flex-col items-center">
              <div className="dashed-line-horizontal"></div>
            </div>
            <div className="text-[#595D62]">Step 2</div>
            <div className="flex flex-col items-center">
              <div className="dashed-line-horizontal2"></div>
            </div>
            <div className="text-[#595D62]">Step 3</div>
          </div>
          <div className="hidden md:flex justify-between items-start space-x-6">
            <div className="text-center">
              <div className={`text-3xl ${openSan.className}`}>
                Join the waitlist
              </div>
              <div className="text-[#262626] mt-2 text-lg">
                Sign up now to secure your spot for an early access to Copilot.
              </div>
            </div>
            <div className="text-center">
              <div className={`text-3xl ${openSan.className}`}>
                Get verified
              </div>
              <div className="text-[#262626] mt-2 text-lg">
                Verify your status as an educator to ensure a tailored and
                secure experience.
              </div>
            </div>
            <div className="text-center">
              <div className={`text-3xl ${openSan.className}`}>
                Access Copilot
              </div>
              <div className="text-[#262626] mt-2 text-lg">
                Once verified, dive into Copilot and start making your teaching
                life easier.
              </div>
            </div>
          </div>
          <div className="text-center bg-[#fbf6f8] px-28 py-10 rounded-[40px] mt-16">
            <div>
              <div className="mb-[30px]">
                <h1 className={`text-3xl text-[#595D62] ${openSans.className}`}>
                  Here’s what’s next for{" "}
                  <Badge badgeContent={"Beta"} color="primary">
                    <span className={`text-[#6665DD] ${openSan.className}`}>
                      Copilot
                    </span>
                  </Badge>
                </h1>
              </div>
              <div className="mb-[40px]">
                <h1 className={`text-lg text-[#262626] ${openSans.className}`}>
                  We plan to get your feedback on the private beta and bring the
                  best experience to you.
                </h1>
                <h1 className={`text-lg text-[#262626] ${openSans.className}`}>
                  If you're interested to get early access to your Copliot, sign
                  up for the waitlist!
                </h1>
              </div>
              <div>
                <button className="px-8 py-3 m-2 text-lg font-semibold rounded-xl bg-[#6665DD] text-white">
                  Sign in to join waitlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
