import { handleGoogleSignup } from "@/app/(auth)/utils";
import { login } from "@/store/auth/slice";
import { Badge } from "@mui/material";
import { Open_Sans } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const openSan = Open_Sans({
  weight: "700",
  subsets: ["vietnamese"],
});
const openSans = Open_Sans({
  weight: "400",
  subsets: ["vietnamese"],
});

const GetStarted = () => {
  const user = useSelector((state) => state.auth.user);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSignup = async () => {
    try {
      const res = await handleGoogleSignup();

      console.log(res.message || "Sign up successful", "success");

      // updating the auth state
      dispatch(login(res));
      // route the user
      router.push("/questionairre");
    } catch (error) {
      console.log(error, "error");
    }
  };

  return (
    <div className="bg-started-gradient w-full">
      <div className="container mx-auto flex flex-col items-center py-16 gap-8">
        <div className="text-center">
          <h1
            className={`text-lg md:text-[32px] text-[#595D62] ${openSans.className}`}
          >
            Copilot is exclusively designed for you and your fellow educators.
          </h1>
          <h1
            className={`text-lg md:text-[32px] text-[#595D62] ${openSans.className} mt-5`}
          >
            Here’s how you can{" "}
            <span
              className={`text-lg md:text-[32px] ${openSan.className} text-[#6665DD]`}
            >
              get started.
            </span>
          </h1>
        </div>
        <div className="md:px-40 flex flex-col items-center gap-12">
          <div className="cursor-text mt-10 md:mt-0">
            <div className="hidden md:flex md:w-[750px] lg:w-[1050px]">
              <Image src="/img/step.svg" alt="step" width={1050} height={330} />
            </div>
            <div className="md:hidden flex">
              <Image
                src="/img/step-mob.svg"
                alt="step"
                width={320}
                height={520}
              />
            </div>
          </div>
          <div className="text-center bg-[#fbf6f8] px-5 md:px-28 py-10 rounded-[40px] mt-5">
            <div>
              <div className="mb-[30px]">
                <h1
                  className={`text-lg md:text-[32px] text-[#595D62] ${openSans.className}`}
                >
                  Here’s what’s next for{" "}
                  <Badge badgeContent={"Beta"} color="primary">
                    <span className={`text-[#6665DD] ${openSan.className}`}>
                      Copilot
                    </span>
                  </Badge>
                </h1>
              </div>
              <div className="mb-[40px]">
                <h1
                  className={`text-sm md:text-lg text-[#262626] ${openSans.className}`}
                >
                  We plan to get your feedback on the private beta and bring the
                  best experience to you.
                </h1>
                <h1
                  className={`text-sm md:text-lg text-[#262626] ${openSans.className}`}
                >
                  If you're interested to get early access to your Copliot, sign
                  up for the waitlist!
                </h1>
              </div>
              <div className="flex flex-wrap justify-center">
                {user ? (
                  <button className="px-8 py-3 m-2 text-md font-semibold rounded-xl bg-[#B5BABE] text-white flex items-center">
                    <Image
                      src="/img/tick.svg"
                      alt="tick"
                      width={24}
                      height={24}
                    />{" "}
                    <span> You’re on the waitlist</span>
                  </button>
                ) : (
                  <button
                    className="px-8 py-3 m-2 text-lg font-semibold rounded-xl bg-[#6665DD] text-white"
                    onClick={handleSignup}
                  >
                    Sign in to join waitlist
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
