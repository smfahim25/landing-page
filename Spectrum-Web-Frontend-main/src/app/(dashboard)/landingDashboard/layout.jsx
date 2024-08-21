"use client";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { Box } from "@mui/material";

export default function DashboardLayout({ children }) {
  return (
    <div className="overflow-hidden">
      <div>
        <Header />
      </div>
      <Box className="h-screen flex z-50 overflow-hidden">
        <Sidebar />
        <Box className="flex-1 overflow-y-auto scrollbar-hide">
          <main className="ml-0 md:ml-2 -z-50 ">{children}</main>
        </Box>
      </Box>
    </div>
  );
}
