import { useEffect, useState, type ReactNode } from "react";
import SharedSidebar from "../sidebar/sidebar";
import Header from "./header";

type SharedLayoutProps = {
  children?: ReactNode;
};

const SharedLayout = ({ children }: SharedLayoutProps) => {
  const [screenHeight, setScreenHeight] = useState(`${window.innerHeight}px`);

  useEffect(() => {
    window.addEventListener("resize", () =>
      setScreenHeight(`${window.innerHeight}px`)
    );
    return () => {
      window.removeEventListener("resize", () =>
        setScreenHeight(`${window.innerHeight}px`)
      );
    };
  }, []);
  return (
    <div className="flex flex-col md:flex-row ">
      <SharedSidebar screenHeight={screenHeight} />
      <div className="grow flex flex-col">
        <Header />
        <div className="grow max-h-full flex flex-col relative">{children}</div>
      </div>
    </div>
  );
};
export default SharedLayout;
