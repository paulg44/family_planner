import type { ReactNode } from "react";
import SharedSidebar from "../sidebar/sidebar";
import Header from "./header";

type SharedLayoutProps = {
  children?: ReactNode;
};

const SharedLayout = ({ children }: SharedLayoutProps) => {
  return (
    <div className="flex flex-col md:flex-row">
      <SharedSidebar />
      <div className="grow flex flex-col">
        <Header />
        <div>{children}</div>
      </div>
    </div>
  );
};
export default SharedLayout;
