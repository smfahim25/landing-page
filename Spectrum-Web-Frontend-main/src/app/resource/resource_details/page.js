"use client";
import Header from "@/components/layout/Header";
import { Avatar } from "@mui/material";
import { Open_Sans } from "next/font/google";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const openSan = Open_Sans({
  weight: "700",
  subsets: ["vietnamese"],
});
const openSans = Open_Sans({
  weight: "400",
  subsets: ["vietnamese"],
});
export default function page() {
  const params = useSearchParams();
  const articleId = params?.get("id");
  const [details, setDetails] = useState("");

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(
          `https://landing-pages-shoshin-tech.onrender.com/api/v1/articals/artical-details/${articleId}`,
          {
            method: "GET",
            headers: {
              //   Authorization: `${user?.data?.accessToken}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch article");
        }

        const data = await response.json();
        console.log(data.data);
        setDetails(data?.data);
      } catch (error) {
        toast.error("Error fetching article:", error);
      }
    };
    if (articleId) {
      fetchArticle();
    }
  }, [articleId]);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = date.toLocaleDateString("en-GB", options);

    // Add ordinal suffix to day
    const day = date.getDate();
    const ordinalSuffix = (day) => {
      if (day > 3 && day < 21) return "th";
      switch (day % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    return `${day}${ordinalSuffix(day)} ${formattedDate.replace(day, "")}`;
  };
  return (
    <div>
      <Header />
      <div className="flex flex-col gap-7">
        <div className="h-[400px]">
          {details?.img && (
            <Image
              src={`${details?.img}`}
              alt={details?.title}
              width={500}
              height={200}
              className="h-[500px] w-full"
            />
          )}
        </div>
        <div className="flex justify-center items-center min-h-[65vh]">
          <div className="mt-[20px] flex flex-col w-[400px] sm:w-[500px] md:w-[600px] gap-5 mx-auto break-all">
            <div>
              <h1
                className={`text-[18px] md:text-[32px] ${openSan.className} text-left text-[#262626] text-wrap`}
              >
                {details?.title}
              </h1>
            </div>
            <div className="flex justify-start gap-3">
              <Avatar src="/logo.png" className="border-2" />
              <div>
                <p
                  className={`text-[14px] ${openSan.className} text-[#262626]`}
                >
                  {details?.user?.name ? details?.user?.name : "unknown"}
                </p>
                <p
                  className={`text-[10px] ${openSan.className} text-center text-[#262626]`}
                >
                  {formatDate(details?.createAt)}
                </p>
              </div>
            </div>
            <div className="text-left">
              <div dangerouslySetInnerHTML={{ __html: details?.description }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
