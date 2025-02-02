"use client";
import Footer from "@/components/layout/Footer";
import { Avatar } from "@mui/material";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Open_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import style from "./details.module.css";

const openSan = Open_Sans({
  weight: "700",
  subsets: ["vietnamese"],
});
const openSans = Open_Sans({
  weight: "400",
  subsets: ["vietnamese"],
});

export default function Page() {
  const params = useSearchParams();
  const router = useRouter();
  const articleId = params?.get("id");
  const catId = params?.get("catId");
  const [details, setDetails] = useState("");
  const [loading, setLoading] = useState(false);
  const [resources, setResources] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await fetch(
          `https://landing-pages-shoshin-tech.onrender.com/api/v1/articals?id=${catId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch resources");
        }
        const data = await response.json();

        // Filter only active articles
        const activeResources =
          data?.data?.filter((resource) => resource.status === "ACTIVE") || [];
        setResources(activeResources);
      } catch (error) {
        toast.error("Error fetching resources:", error);
      }
    };

    if (catId) {
      fetchResources();
    }
  }, [catId]);

  useEffect(() => {
    setLoading(true);
    const fetchArticle = async () => {
      try {
        const response = await fetch(
          `https://landing-pages-shoshin-tech.onrender.com/api/v1/articals/artical-details/${articleId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch article");
        }

        const data = await response.json();
        setLoading(false);

        // Only set details if the article is active
        if (data?.data?.status === "ACTIVE") {
          setDetails(data.data);
          // Find the index of the current article in the list of active resources
          const index = resources.findIndex(
            (resource) => resource.id === articleId
          );
          setCurrentIndex(index);
        } else {
          toast.error("The requested article is not active.");
          router.push("/"); // Redirect or handle as necessary
        }
      } catch (error) {
        setLoading(false);
        toast.error("Error fetching article:", error);
      }
    };
    if (articleId && resources.length > 0) {
      fetchArticle();
    }
  }, [articleId, resources, router]);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      const previousResource = resources[currentIndex - 1];
      router.push(`?id=${previousResource.id}&catId=${catId}`);
    }
  };

  const handleNext = () => {
    if (currentIndex < resources.length - 1) {
      const nextResource = resources[currentIndex + 1];
      router.push(`?id=${nextResource.id}&catId=${catId}`);
    }
  };

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
  const linkedinUrl = details?.linkedin?.startsWith("http")
    ? details.linkedin
    : `https://${details?.linkedin}`;
  return (
    <div>
      {loading ? (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin bg-[#6665DD]"></div>
        </div>
      ) : (
        <div className="flex flex-col gap-7 pb-5 min-h-[70vh] md:h-full">
          <div className="">
            {details?.img && (
              <Image
                src={`${details?.img}`}
                alt={details?.title}
                width={500}
                height={200}
                className=" h-[400px] md:h-[610px] w-full"
              />
            )}
          </div>
          <div className="flex justify-center items-center md:min-h-[35vh] px-5">
            <div className="mt-[20px] flex flex-col w-[400px] sm:w-[500px] md:w-[620px] xl:w-2/4 gap-5 mx-auto break-normal">
              <div>
                <h1
                  className={`text-[18px] md:text-[32px] ${openSan.className} text-left text-[#262626]`}
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
                    className={`text-[10px] ${openSans.className} text-center text-[#262626] flex items-center gap-1`}
                  >
                    <span>{formatDate(details?.createAt)}</span>
                    <p>|</p>
                    <span>
                      <Link
                        href={linkedinUrl || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src="/img/linkedin.png"
                          alt="LinkedIn logo"
                          width={12}
                          height={12}
                        />
                      </Link>
                    </span>
                  </p>
                </div>
              </div>
              <div
                className={`text-left ${style.customHeading} ${style.customList} ${style.customParagraph}`}
              >
                <div
                  dangerouslySetInnerHTML={{ __html: details?.description }}
                />
              </div>
              <div className="flex justify-between items-center mt-5">
                <button
                  onClick={handlePrevious}
                  disabled={currentIndex === 0}
                  className="bg-transparent text-black py-2 rounded disabled:opacity-50 flex items-center ml-[-5px]"
                >
                  <ChevronLeft />
                  <span> Previous article</span>
                </button>
                <button
                  onClick={handleNext}
                  disabled={currentIndex === resources.length - 1}
                  className="bg-transparent text-black  py-2 rounded disabled:opacity-50 flex items-center mr-[-5px]"
                >
                  <span> Next article</span>
                  <ChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div
        className="bg-white pt-10 pb-5 mt-5"
        style={{ boxShadow: "0px -1px 10px 0px #DEDADA40" }}
      >
        <Footer />
      </div>
    </div>
  );
}
