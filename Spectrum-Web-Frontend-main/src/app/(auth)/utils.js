// authUtils.js
import { signupWithGoogle } from "@/lib/auth";
import ApiServices from "@/services/ApiServices";

export const handleGoogleSignup = async () => {
  try {
    const data = await signupWithGoogle();
    if (!data) {
      console.error("An unexpected error occurred during signup.");
      throw new Error("An unexpected error occurred during signup.");
    }

    const reqBody = {
      email: data?._tokenResponse?.email,
      // isEmailVerified: data?._tokenResponse?.emailVerified,
      // source: "google",
      // profilePhoto: data?._tokenResponse?.photoUrl,
      name: data?._tokenResponse?.firstName,
      // lastName: data?._tokenResponse?.lastName,
    };

    const res = await ApiServices.signup(reqBody);
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
