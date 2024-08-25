"use client";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function DashboardLayout({ children }) {
  const user = useSelector((state) => state.auth.user);
  const router = useRouter();
  useEffect(() => {
    if (user?.data?.getUser?.role !== "ADMIN") {
      router.push("/");
    }
  }, []);
  return (
    <div className="overflow-hidden">
      <div>
        <Header />
      </div>
      <Box className="h-screen flex z-50 overflow-hidden">
        <Sidebar />
        <Box className="flex-1 overflow-y-auto scrollbar-hide px-5">
          <main className="ml-0 md:ml-2 -z-50 ">{children}</main>
        </Box>
      </Box>
    </div>
  );
}
