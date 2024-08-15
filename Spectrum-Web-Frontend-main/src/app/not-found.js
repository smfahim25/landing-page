"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Typography } from "@mui/material";
import CustomTypography from "@/components/common/CustomTypography";
import CustomButton from "@/components/common/CustomButton";
import { IMAGES } from "@/assets";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="w-full flex justify-center items-center flex-col">
      <Image
        src={IMAGES.not_found}
        alt="Not found image"
        // layout="responsive"
        // width={1920}
        // height={1080}
      />
      <CustomTypography
        variant={"h6"}
        fontWeight={"bold"}
        className="text-neutral_main"
      >
        Page not Found
      </CustomTypography>
      <CustomTypography variant={"subtitle1"}>
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </CustomTypography>
      <CustomButton onClick={() => router.push("/")} variant="contained">
        Go to Home
      </CustomButton>
    </div>
  );
};

export default NotFound;
