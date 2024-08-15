// "use client"
import { useAlertContext } from "@/contexts/AlertProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const withProtectedRoute = (WrappedComponent) => {
  const ProtectedRoute = (props) => {
    const router = useRouter();
    const { addAlert } = useAlertContext();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    useEffect(() => {
      const isLoggedIn = isAuthenticated;
      if (!isLoggedIn) {
        addAlert("You need to login first", "error");
        router.replace("/login");
      }
    }, [isAuthenticated]);

    return <WrappedComponent {...props} />;
  };

  return ProtectedRoute;
};

export default withProtectedRoute;
