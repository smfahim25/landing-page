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

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const res = await handleGoogleSignup();
      console.log(res);

      // updating the auth state
      dispatch(login(res));

      // route the user
      router.push("/");
    } catch (error) {
      console.log(error, "error");
    }
  };

  return (
    <Box className="flex flex-col space-y-6 lg:w-2/3 w-full py-6">
      <Box>
        <CustomTypography variant="h4" fontWeight={"bold"} className="">
          Welcome back!
        </CustomTypography>

        <CustomTypography className="" variant="p">
          Login with your registered email
        </CustomTypography>
      </Box>

      <CustomButton
        fullWidth={true}
        variant="outlined"
        color="basic"
        startIcon={<LOGOS.google />}
        onClick={handleLogin}
      >
        Login with Google
      </CustomButton>

      <CustomTypography className="text-gray-500 text-center">
        New to platform? <CustomLink href={"/signup"}>Sign up</CustomLink>
      </CustomTypography>
    </Box>
  );
};

export default Login;
