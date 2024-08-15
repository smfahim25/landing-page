"use client";
import withProtectedRoute from "@/hocs/withProtectedRoute";
import React from "react";
import Image from "next/image";
import { Box, TextField, Button, Typography, Container } from "@mui/material";
import { IMAGES } from "@/assets";

function OnboardingPage() {
  return (
    <Box className="min-h-screen p-4 flex flex-col md:flex-row items-center justify-center">
      {/* Image Section */}
      <Box className="w-full md:w-1/2 flex justify-center items-center">
        <Image
          src={IMAGES.onboarding_1}
          width={450}
          // height={652}
          alt="Onboarding Image"
          className="max-w-full h-auto rounded-[10px]"
        />
      </Box>

      {/* Form Section */}
      <Box className="w-full md:w-1/2 p-8">
        <Typography
          variant="h5"
          gutterBottom
          className="text-lg leading-tight font-semibold mb-2"
        >
          Now that you are verified, complete your profile
        </Typography>
        <Typography variant="body1" className="mb-4">
          Create a personal identity on the platform. Choosing a unique ID for
          yourself helps build a personal identity on the platform and stand out
          among other users.
        </Typography>
        <form>
          <TextField
            fullWidth
            variant="outlined"
            label="User ID"
            placeholder="E.g., aryan_1982"
            className="mb-4"
          />
          <Button variant="contained" color="primary">
            Next
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default withProtectedRoute(OnboardingPage);