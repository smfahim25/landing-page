"use client";
import { Box } from "@mui/material";
import CustomCarousel from "@/components/common/CustomCarousel";
import { IMAGES } from "@/assets";
import Image from "next/image";

export default function AuthLayout({ children }) {
  return (
    <Box>
      <Box className=" min-h-screen p-4 flex flex-col md:flex-row items-center justify-center bg-white shadow-xl rounded-lg overflow-hidden">
        {/* Carousel container */}
        <Box className="w-full md:w-1/2 flex justify-center items-center ">
          <CustomCarousel
            height={{
              xs: "250px",
              md: "550px",
            }}
            width="100%"
            autoPlayInterval={2000}
            items={[IMAGES.auth_carousel_1, IMAGES.auth_carousel_2].map(
              (url) => (
                <Image
                  src={url}
                  alt="Carousel Image"
                  className="w-full h-full object-cover"
                />
              )
            )}
          />
        </Box>

        {/* Authentication form container */}
        <Box className="w-full md:w-1/2 p-8">{children}</Box>
      </Box>
    </Box>
  );
}
