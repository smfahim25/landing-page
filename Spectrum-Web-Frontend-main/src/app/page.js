"use client";
import ProfileCard from "@/components/display/ProfileCard";
import AnimationCardSection from "@/components/home/AnimationCardSection";
import Hero from "@/components/home/Hero";
import withProtectedRoute from "@/hocs/withProtectedRoute";
import { useState } from "react";
import { useSelector } from "react-redux";

function Home() {
  // const user = useSelector((state) => state.auth.user);
  // console.log(user);

  const chips = [
    { value: "chip1", label: "Chip 1" },
    { value: "chip2", label: "Chip 2" },
    { value: "chip3", label: "Chip 3" },
    { value: "chip4", label: "Chip 4" },
    { value: "chip5", label: "Chip 5" },
    { value: "chip6", label: "Chip 6" },
  ];

  const listItems = [
    {
      id: 1,
      component: (
        <ProfileCard
          avatarSrc={""}
          name={"Circle 1"}
          description={"circle 1 one liner"}
        />
      ),
    },
    {
      id: 2,
      component: (
        <ProfileCard
          avatarSrc={""}
          name={"Circle 2"}
          description={
            "circle 2 one liner very importabt you knoe tthe basic hso if the so"
          }
        />
      ),
    },
    {
      id: 3,
      component: (
        <ProfileCard
          avatarSrc={
            "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
          }
          name={"Circle 3"}
          description={"circle 3 one liner"}
        />
      ),
    },
  ];

  const initialContent = [
    {
      type: "blockquote",
      props: {
        textColor: "default",
        text: "jkj",
        textAlignment: "left",
      },
      content: [
        {
          type: "text",
          text: "jkj",
          styles: {},
        },
      ],
      children: [],
    },
    {
      type: "codeblock",
      props: {
        language: "",
        text: "dsfdsf",
      },
      content: [
        {
          type: "text",
          text: "dsfdsf",
          styles: {
            code: true,
          },
        },
      ],
      children: [],
    },
    {
      type: "divider",
      props: {},
      children: [],
    },
    {
      type: "paragraph",
      props: {
        textColor: "default",
        backgroundColor: "default",
        textAlignment: "center",
      },
      content: [
        {
          type: "text",
          text: "/",
          styles: {},
        },
      ],
      children: [],
    },
  ];

  const defaultBlocks = [
    {
      type: "heading",
      placeholder: "Type",
      props: {
        level: 1,
      },
    },
  ];

  return (
    <main className=" flex flex-col justify-center items-center">
      {/* <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDsou-9Yj0s2NTQ1pGx4zvMQj12BW1NUvgLA&s')] bg-cover bg-center h-[873px] w-full"> */}
      <Hero />
      {/* </div> */}
      <AnimationCardSection />
    </main>
  );
}

export default withProtectedRoute(Home);
