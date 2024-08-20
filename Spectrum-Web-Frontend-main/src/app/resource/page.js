"use client";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Open_Sans } from "next/font/google";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode } from "swiper/modules";
import Header from "@/components/layout/Header";
import Link from "next/link";

const openSan = Open_Sans({
  weight: "700",
  subsets: ["vietnamese"],
});
const openSans = Open_Sans({
  weight: "400",
  subsets: ["vietnamese"],
});
const cardsData = [
  {
    image: "/img/resource1.png",
    title: "Lizard",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    containerWidth: "500px",
    maxWidth: 345,
    imageHeight: 180,
    cardClass: "shadow-none",
    mediaClass: "rounded-xl",
  },
  {
    image: "/img/resource1.png",
    title: "Lizard",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    containerWidth: "500px",
    maxWidth: 345,
    imageHeight: 180,
    cardClass: "shadow-none",
    mediaClass: "rounded-xl",
  },
  {
    image: "/img/resource1.png",
    title: "Lizard",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    containerWidth: "500px",
    maxWidth: 345,
    imageHeight: 180,
    cardClass: "shadow-none",
    mediaClass: "rounded-xl",
  },
  {
    image: "/img/resource1.png",
    title: "Lizard",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    containerWidth: "500px",
    maxWidth: 345,
    imageHeight: 180,
    cardClass: "shadow-none",
    mediaClass: "rounded-xl",
  },
  {
    image: "/img/resource1.png",
    title: "Lizard",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    containerWidth: "500px",
    maxWidth: 345,
    imageHeight: 180,
    cardClass: "shadow-none",
    mediaClass: "rounded-xl",
  },
  {
    image: "/img/resource1.png",
    title: "Lizard",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    containerWidth: "500px",
    maxWidth: 345,
    imageHeight: 180,
    cardClass: "shadow-none",
    mediaClass: "rounded-xl",
  },
];

export default function page() {
  const [resource, setResource] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/api/v1/articals")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Assuming the response is JSON
      })
      .then((data) => {
        console.log(data.data); // Do something with the data
        setResource(data.data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);
  return (
    <div>
      <Header />
      <div className="min-h-screen py-10 md:px-20">
        <div className="mb-10">
          <h1
            className={`text-[#262626] text-xl md:text-3xl ${openSan.className} ml-4 md:ml-0`}
          >
            Resources
          </h1>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <div className="flex justify-between items-center px-5 md:px-0 md:pr-12">
              <h2
                className={`text-[#595D62] text-md md:text-xl ${openSan.className}`}
              >
                Artificial Intelligence for Educators
              </h2>
              <Link
                href="/"
                className={`text-[#6665DD] text-[12px] md:text-sm ${openSan.className}`}
              >
                See all
              </Link>
            </div>
            <div>
              <Swiper
                breakpoints={{
                  340: {
                    slidesPerView: 1,
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
                    slidesPerView: 4,
                    spaceBetween: 15,
                  },
                }}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                modules={[FreeMode]}
              >
                {cardsData.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className="">
                        <Card sx={{ maxWidth: 345 }} className="shadow-none">
                          <CardMedia
                            sx={{ height: 180 }}
                            image={item.image}
                            title="green iguana"
                            className="rounded-xl"
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              {item.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {item.description}
                            </Typography>
                          </CardContent>
                        </Card>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex justify-between items-center px-5 md:px-0 md:pr-12">
              <h2
                className={`text-[#595D62] text-md md:text-xl ${openSan.className}`}
              >
                Gig Economy of Educators
              </h2>
              <h2
                className={`text-[#6665DD] text-[12px] md:text-sm ${openSan.className}`}
              >
                See all
              </h2>
            </div>
            <div>
              <Swiper
                breakpoints={{
                  340: {
                    slidesPerView: 1,
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
                    slidesPerView: 4,
                    spaceBetween: 15,
                  },
                }}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                modules={[FreeMode]}
              >
                {cardsData.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className="">
                        <Card sx={{ maxWidth: 345 }} className="shadow-none">
                          <CardMedia
                            sx={{ height: 180 }}
                            image={item.image}
                            title="green iguana"
                            className="rounded-xl"
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              {item.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {item.description}
                            </Typography>
                          </CardContent>
                        </Card>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
