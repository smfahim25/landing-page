"use client";
import Header from "@/components/layout/Header";
import { Open_Sans } from "next/font/google";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import question from "./questions.json";
import { Box, Divider, Modal, Typography } from "@mui/material";
import Image from "next/image";
import { ArrowLeft, Copy, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { API_BASE_URI } from "@/utils/constants/serviceConfig";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const openSan = Open_Sans({
  weight: "700",
  subsets: ["vietnamese"],
});
const openSans = Open_Sans({
  weight: "400",
  subsets: ["vietnamese"],
});

export default function Page() {
  const user = useSelector((state) => state.auth.user);
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentQuestion, setCurentQuestion] = useState(0);
  const [lastQuestion, setLastQuestion] = useState(false);
  const [otherText, setOtherText] = useState("");
  const [allAnswers, setAllAnswers] = useState({});
  const [success, setSuccess] = useState(false);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, []);

  useEffect(() => {
    if (selectedOption === "q1-op4" || selectedOption === "q6-op4") {
      const timer = setTimeout(() => {
        if (!otherText) {
          toast.error("You need to input something before proceeding.");
        } else {
          const nextQuestion = currentQuestion + 1;
          if (nextQuestion < question.length) {
            setCurentQuestion(nextQuestion);
          } else {
            setLastQuestion(true);
          }
        }
      }, 3000); // 5 seconds to input text

      return () => clearTimeout(timer); // Clean up the timeout if the component unmounts or input changes
    }
  }, [selectedOption, otherText]);

  const handleChange = (option) => {
    setSelectedOption(option);

    // Handle option selection and set the ID in allAnswers state
    setAllAnswers((prevAnswers) => ({
      ...prevAnswers,
      [question[currentQuestion].id]: option,
    }));

    if (option !== "q1-op4" && option !== "q6-op4") {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < question.length) {
        setTimeout(() => {
          setCurentQuestion(nextQuestion);
        }, 500); // Default delay for other options
      } else {
        setLastQuestion(true);
      }
    }
  };

  useEffect(() => {
    if (selectedOption === "q1-op4" && otherText) {
      setAllAnswers((prevAnswers) => ({
        ...prevAnswers,
        q1Content: otherText, // Add q1Content with the entered text
      }));
    }
  }, [otherText]);

  useEffect(() => {
    if (selectedOption === "q6-op4" && otherText) {
      setAllAnswers((prevAnswers) => ({
        ...prevAnswers,
        q6Content: otherText, // Add q6Content with the entered text
      }));
    }
  }, [otherText]);

  const handleSubmit = async () => {
    setLoading(true);
    console.log(allAnswers);
    const payload = {
      ...allAnswers,
      email: user?.data?.getUser?.email,
    };

    try {
      const response = await fetch(
        `${API_BASE_URI}/questionaries/create-questionary`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: ` ${user?.data?.accessToken}`,
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit data");
      }

      const result = await response.json();
      console.log("Success:", result);
      setLoading(false);

      // Handle success response (e.g., show a success message, redirect, etc.)
      setSuccess(true);
      setOpen(true);
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
      // Handle error response (e.g., show an error message)
    }
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    router.push("/");
  };

  return (
    <div>
      <Header />
      {user && (
        <div>
          <video
            className="absolute top-0 left-0 w-full h-[60vh] object-cover z-[-1] filter blur-[200px]"
            src="/img/blur.mp4"
            autoPlay
            loop
            muted
            playsInline
            poster="/img/placeholder.jpg"
          ></video>
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
              <div className=""></div>
            </div>
          )}
          {success ? (
            <div>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] bg-white border-2 border-white shadow-lg rounded-lg px-10 py-8">
                  <div
                    className="flex justify-end cursor-pointer"
                    onClick={handleClose}
                  >
                    <X />
                  </div>
                  <h1 className={`text-2xl ${openSan.className} text-center`}>
                    You’re on the waitlist!
                  </h1>
                  <div className="flex justify-center">
                    <Image
                      src="/img/success.svg"
                      alt="sucess"
                      width={272}
                      height={224}
                    />
                  </div>
                  <div className="mt-10">
                    <p
                      className={`text-md ${openSans.className} text-center mb-5`}
                    >
                      Thank you for joining the Copilot waitlist! Keep an eye on
                      your inbox for updates and next steps. We're excited to
                      have you on board!
                    </p>
                    <Divider />
                    <p
                      className={`text-md ${openSan.className} text-center mt-5`}
                    >
                      Know other educators who'd love Copilot? Share this link
                      with them!
                    </p>
                  </div>
                  <div>
                    <div className="flex gap-2 mt-3">
                      <input
                        readOnly
                        type="text"
                        name="price"
                        id="price"
                        value="https://www.platformname.com/uniquellink"
                        className="flex flex-1 border sm:text-sm rounded-l-md focus:ring-inset py-2 pl-3"
                      />
                      <span className="flex items-center px-3 pointer-events-none sm:text-sm rounded-r-md bg-[#EFEFEF]">
                        <Image
                          src="/img/copy.svg"
                          alt="share"
                          width={30}
                          height={30}
                        />
                      </span>
                      <span className="flex items-center px-3 pointer-events-none sm:text-sm rounded-r-md bg-[#EFEFEF]">
                        <Image
                          src="/img/share.svg"
                          alt="share"
                          width={30}
                          height={30}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
          ) : (
            <div className="h-[100vh] xs:h-[90vh] md:h-[80vh] 2xl:h-[85vh] 3xl:h-[80vh] flex justify-center items-center">
              <div className="container mx-auto flex flex-col items-center md:px-4 md:py-10 gap-5 md:gap-8">
                <motion.div
                  key={currentQuestion}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="flex flex-col gap-1 md:gap-8"
                >
                  <div className="bg-[#FDFAFA] py-8 px-5 md:px-10 rounded-3xl shadow-custom-anim md:w-full lg:w-[1000px] border border-[#F5F5F5]">
                    <h1
                      className={`text-md md:text-xl ${openSan.className} mb-3 md:mb-7`}
                    >
                      {` Hello ${user?.data?.getUser?.name}, Just a few quick questions to get you on
                  the list!`}
                    </h1>
                    <hr />
                    <div className="flex flex-col gap-5 justify-start mt-2 md:mt-5">
                      <div>
                        <h3
                          className={`${openSans.className} text-md text-[#595D62] flex items-center md:gap-3`}
                        >
                          {currentQuestion > 0 && (
                            <span
                              onClick={() => {
                                setCurentQuestion(currentQuestion - 1);
                              }}
                              className="cursor-pointer"
                            >
                              <ArrowLeft />
                            </span>
                          )}
                          Question {currentQuestion + 1} of {question.length}
                        </h3>
                      </div>
                      <div>
                        <h1
                          className={`text-lg md:text-2xl ${openSan.className} text-[#6665DD]`}
                        >
                          {question[currentQuestion].text}
                        </h1>
                      </div>
                      <div
                        className={`grid gap-2  md:gap-5 ${
                          question[currentQuestion].id === "q2"
                            ? "grid-cols-5 lg:grid-cols-10"
                            : "grid-cols-1 lg:grid-cols-2"
                        }`}
                      >
                        {question[currentQuestion].options.map((option) => (
                          <div
                            key={option.id}
                            className={`py-2 border-2 rounded-lg cursor-pointer  ${
                              selectedOption === option.id
                                ? " border-[#6665DD]  bg-gradient-to-r from-[rgba(217,224,255,0.50)] to-[rgba(167,179,232,0.50)]"
                                : "bg-white hover:bg-gradient-to-r from-[rgba(217,224,255,0.50)] to-[rgba(167,179,232,0.50)]"
                            }`}
                            onClick={() => handleChange(option.id)}
                          >
                            <label
                              className={`flex items-center gap-2 px-3 cursor-pointer text-[14px] md:text-[18px] h-[45px] md:h-[50px] ${
                                question[currentQuestion].id === "q2" &&
                                "justify-center"
                              }`}
                            >
                              {question[currentQuestion].id !== "q2" && (
                                <input
                                  name="select"
                                  type="radio"
                                  checked={selectedOption === option.id}
                                  readOnly
                                />
                              )}
                              <div>
                                <p>
                                  {question[currentQuestion].id === "q2"
                                    ? option.value
                                    : option.text}
                                </p>
                                {question[currentQuestion].id === "q6" &&
                                  option.id === "q6-op4" &&
                                  selectedOption === "q6-op4" && (
                                    <input
                                      type="text"
                                      className="border-2 px-2 pl-3 rounded-md md:py-[1px]"
                                      placeholder="Enter your text here"
                                      onChange={(event) =>
                                        setOtherText(event.target.value)
                                      }
                                    />
                                  )}
                                {question[currentQuestion].id === "q1" &&
                                  option.id === "q1-op4" &&
                                  selectedOption === "q1-op4" && (
                                    <input
                                      type="text"
                                      value={otherText}
                                      onChange={(e) =>
                                        setOtherText(e.target.value)
                                      }
                                      placeholder="Enter text here"
                                      className="border-2 px-2 pl-3 rounded-md md:py-[1px]"
                                    />
                                  )}
                              </div>
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    {lastQuestion && (
                      <div className="flex justify-end mt-3">
                        <button
                          className="px-8 py-3 m-2 text-lg font-semibold rounded-xl bg-[#6665DD] text-white"
                          onClick={handleSubmit}
                        >
                          Join waitlist
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
