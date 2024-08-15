"use client";
import { LOGOS } from "@/assets";
import CustomButton from "@/components/common/CustomButton";
import CustomLink from "@/components/common/CustomLink";
import CustomTypography from "@/components/common/CustomTypography";
import { Box, Divider } from "@mui/material";
import { handleGoogleSignup } from "../utils";
import { useAlertContext } from "@/contexts/AlertProvider";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { login } from "@/store/auth/slice";

const Signup = () => {
  const router = useRouter();
  const { addAlert } = useAlertContext();
  const dispatch = useDispatch();

  const handleSignup = async () => {
    try {
      const res = await handleGoogleSignup();

      addAlert(res.message || "Sign up successful", "success");

      // updating the auth state
      dispatch(login(res));
      // route the user
      router.push("/");
    } catch (error) {
      addAlert(error, "error");
    }
  };

  return (
    <Box className="flex flex-col space-y-6 lg:w-2/3 w-full py-6">
      <CustomTypography variant="h4" fontWeight={"bold"} className="">
        Begin your educational journey with us.
      </CustomTypography>

      <CustomButton
        fullWidth={true}
        variant="outlined"
        color="basic"
        startIcon={<LOGOS.google />}
        onClick={handleSignup}
        // loading={true}
      >
        Signup with Google
      </CustomButton>

      <CustomTypography className="text-gray-500">
        By signing up, you agree to "Platform's"{" "}
        <CustomLink href="/">User Agreement</CustomLink>,{" "}
        <CustomLink href="/">Privacy Policy</CustomLink> and{" "}
        <CustomLink href="/">Cookie Policy</CustomLink>..
      </CustomTypography>

      <Divider sx={{ borderBottomWidth: 1.5 }} />

      <CustomTypography className="text-gray-500 text-center">
        Already have an account? <CustomLink href={"/login"}>Log in</CustomLink>
      </CustomTypography>
    </Box>
  );
};

export default Signup;
