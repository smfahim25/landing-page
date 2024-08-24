"use client";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { Open_Sans } from "next/font/google";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import Header from "@/components/layout/Header";
import Link from "next/link";
import { FreeMode } from "swiper/modules";

const openSanBold = Open_Sans({
  weight: "700",
  subsets: ["vietnamese"],
});

const openSanRegular = Open_Sans({
  weight: "400",
  subsets: ["vietnamese"],
});

export default function Page() {
  const [groupedArticles, setGroupedArticles] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://landing-pages-shoshin-tech.onrender.com/api/v1/articals")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const grouped = data.data.reduce((acc, article) => {
          const categoryName = article.category.name;
          if (!acc[categoryName]) {
            acc[categoryName] = [];
          }
          acc[categoryName].push(article);
          setLoading(false);
          return acc;
        }, {});

        setGroupedArticles(grouped);
      })
      .catch((error) => {
        setLoading(false);
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

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

  const truncateTitle = (title, maxLength) => {
    return title.length > maxLength ? title.slice(0, maxLength) + "..." : title;
  };

  return (
    <div>
      <Header />
      {loading ? (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin bg-[#6665DD]"></div>
        </div>
      ) : (
        <div className="min-h-screen py-10 md:pl-20">
          <div className="mb-10">
            <h1
              className={`text-[#262626] text-3xl ${openSanBold.className} ml-4 md:ml-0`}
            >
              Resources
            </h1>
          </div>
          <div className="flex flex-col gap-8">
            {Object.entries(groupedArticles).map(([categoryName, articles]) => (
              <div
                key={categoryName}
                className="flex flex-col gap-5 pl-5 md:pl-0"
              >
                <div className="flex justify-between items-center pr-5 md:px-0 md:pr-12">
                  <h2
                    className={`text-[#595D62] text-[16px] md:text-[20px] ${openSanBold.className}  `}
                  >
                    {categoryName}
                  </h2>
                  <h2 className="w-[52px]">
                    {articles[0]?.catId && (
                      <Link
                        href={`/resource/all_resource?id=${articles[0]?.catId}`}
                        className={`text-[#6665DD] text-sm ${openSanBold.className}`}
                      >
                        See all
                      </Link>
                    )}
                  </h2>
                </div>
                <div>
                  <Swiper
                    breakpoints={{
                      340: {
                        slidesPerView: 1.2,
                        spaceBetween: 15,
                      },
                      700: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                      },
                      991: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                      },
                      1024: {
                        slidesPerView: 4.5,
                        spaceBetween: 20,
                      },
                      1700: {
                        slidesPerView: 5.5,
                        spaceBetween: 20,
                      },
                      2100: {
                        slidesPerView: 7,
                        spaceBetween: 20,
                      },
                    }}
                    freeMode={true}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[FreeMode]}
                  >
                    {articles.map((item) => (
                      <SwiperSlide key={item.id}>
                        <Box
                          sx={{
                            borderRadius: "10px",
                            overflow: "hidden",
                          }}
                        >
                          <Card
                            sx={{
                              maxWidth: 345,
                              borderRadius: "10px",
                            }}
                            className="shadow-none"
                          >
                            <Link
                              href={`/resource/resource_details?catId=${item?.catId}&id=${item?.id}`}
                              target="_blank"
                            >
                              <CardMedia
                                sx={{ height: 180 }}
                                image={item.img}
                                title={item.title}
                                className="rounded-xl"
                              />
                            </Link>
                            <CardContent sx={{ padding: "16px" }}>
                              <Link
                                href={`/resource/resource_details?catId=${item?.catId}&id=${item?.id}`}
                                target="_blank"
                              >
                                <Typography
                                  gutterBottom
                                  variant="h6"
                                  component="div"
                                  className={`${openSanBold.className} padding-card`}
                                  sx={{
                                    fontSize: "14px",
                                    lineHeight: "24px",
                                    fontWeight: "700",
                                    color: "#262626",
                                  }}
                                >
                                  {truncateTitle(item?.title, 35)}
                                </Typography>
                              </Link>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                                className={`${openSanRegular.className}`}
                                sx={{
                                  fontSize: "12px",
                                  lineHeight: "18px",
                                  color: "#595D62",
                                  marginBottom: "10px",
                                }}
                              >
                                <div className="hidden md:flex">
                                  <div
                                    dangerouslySetInnerHTML={{
                                      __html: `${truncateTitle(
                                        item?.description,
                                        45
                                      )}`,
                                    }}
                                  />
                                </div>
                                <div className="md:hidden flex">
                                  <div
                                    dangerouslySetInnerHTML={{
                                      __html: `${truncateTitle(
                                        item?.description,
                                        50
                                      )}`,
                                    }}
                                  />
                                </div>
                              </Typography>
                              <Typography
                                variant="caption"
                                display="block"
                                sx={{
                                  fontSize: "12px",
                                  color: "#9E9E9E",
                                }}
                              >
                                Published on {formatDate(item?.createAt)}
                              </Typography>
                            </CardContent>
                          </Card>
                        </Box>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
