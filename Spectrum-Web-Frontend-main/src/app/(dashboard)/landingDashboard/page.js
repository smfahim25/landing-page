"use client";
import { Backdrop, CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default function page() {
  const user = useSelector((state) => state.auth.user);
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  useEffect(() => {
    if (user?.data?.getUser?.role !== "ADMIN") {
      router.push("/");
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
