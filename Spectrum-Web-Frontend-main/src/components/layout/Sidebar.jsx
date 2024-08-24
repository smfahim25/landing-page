"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import SidebarLink from "./SidebarLink";
import CustomAvatar from "../common/CustomAvatar";
import { ICONS } from "@/assets";
import { Box } from "@mui/material";
import Header from "./Header";
import { usePathname } from "next/navigation";
import { useGeneral } from "@/contexts/GeneralContext";
import {
  Book,
  ChartColumnBig,
  ChevronLeft,
  ChevronRight,
  CircleChevronRight,
} from "lucide-react";
import Collapsed from "./Collapsed";

const sideBar = {
  links: [
    {
      title: "Articles",
      href: "/landingDashboard/articles",
      paths: [
        "/landingDashboard/articles",
        "/landingDashboard/articles/create_articles",
      ],
      icon: <Book size={24} />,
      iconFilled: <Book size={24} />,
    },
    {
      title: "Analytics",
      href: "/landingDashboard/analytics",
      paths: ["/landingDashboard/analytics"],
      icon: <ChartColumnBig size={24} />,
      iconFilled: <ChartColumnBig size={24} />,
    },
  ],
};

const Sidebar = () => {
  const [currentPath, setCurrentPath] = useState("");
  const path = usePathname();
  const { collapsed, setCollapsed, isHovered, setIsHovered, isMobile } =
    useGeneral();

  useEffect(() => {
    setCurrentPath(path);
  }, [path]);

  return (
    <aside
      className={`${!collapsed && "pr-2"}  top-0 left-0 h-screen
       flex flex-col  z-50 bg-white transform 
      transition-transform duration-300 ease-in-out relative md:translate-x-0`}
    >
      <div className="flex h-full">
        <div className="">
          <div className="bg-[#6665DD] h-screen rounded-lg p-4 flex flex-col justify-between">
            <Collapsed
              href="#"
              icon={
                collapsed ? (
                  <ChevronRight size={30} />
                ) : (
                  <ChevronLeft size={30} />
                )
              }
              onClick={() => setCollapsed(!collapsed)}
            />
            {!collapsed && (
              <Box className="flex-1">
                {sideBar.links.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className={`flex items-center gap-x-2 rounded-sm text-xs  p-2  ${
                      link.paths.includes(currentPath)
                        ? "bg-[#E3E9F3] font-bold text-black"
                        : "text-white"
                    }`}
                  >
                    {link.paths.includes(currentPath)
                      ? link.iconFilled
                      : link.icon}
                    {link.title}
                  </Link>
                ))}
              </Box>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
