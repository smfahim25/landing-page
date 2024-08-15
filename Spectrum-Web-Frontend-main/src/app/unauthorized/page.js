"use client"
import React from "react";
import { useRouter } from "next/navigation";

const Unauthorized = () => {
  const router = useRouter();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Access Denied</h1>
      <p>You do not have permission to view this page.</p>
      <button onClick={() => router.push("/")}>Go to Home</button>
    </div>
  );
};

export default Unauthorized;
