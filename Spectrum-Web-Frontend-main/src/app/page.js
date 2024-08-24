"use client";
import ProfileCard from "@/components/display/ProfileCard";
import AnimationCardSection from "@/components/home/AnimationCardSection";
import BenefitsCard from "@/components/home/BenefitsCard";
import FAQ from "@/components/home/FAQ";
import GetStarted from "@/components/home/GetStarted";
import Hero from "@/components/home/Hero";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { useState } from "react";
import { useSelector } from "react-redux";

function Home() {
  // const user = useSelector((state) => state.auth.user);
  // console.log(user);

  return (
    <div>
      <Header />
      <main className=" flex flex-col justify-center items-center">
        <div className="h-[90vh] 2xl:h-[100vh] flex justify-center items-center">
          <Hero />
        </div>
        <div>
          <AnimationCardSection />
        </div>
        <BenefitsCard />
        <GetStarted />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
