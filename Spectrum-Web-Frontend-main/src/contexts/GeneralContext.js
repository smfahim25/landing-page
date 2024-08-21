import { createContext, useContext, useState, useEffect } from "react";

const GeneralContext = createContext();

export const useGeneral = () => useContext(GeneralContext);

export const GeneralProvider = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrollable, setIsScrollable] = useState(false);
  useEffect(() => {
    console.log("window.innerWidth", window.innerWidth);
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth <= 768) {
        setCollapsed(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <GeneralContext.Provider
      value={{
        collapsed,
        setCollapsed,
        isHovered,
        setIsHovered,
        isMobile,
        isScrollable,
        setIsScrollable,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};
