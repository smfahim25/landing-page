// import "@/config/firebase";
import { signInWithPopup } from "firebase/auth";
import { auth, googleAuthProvider } from "@/config/firebase";

export const signupWithGoogle = async () => {
  try {
    console.log("Authenticating with Google..");
    const result = await signInWithPopup(auth, googleAuthProvider);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};
