import type { IconType } from "antd/es/notification/interface";
import type { ReactElement } from "react";
import SharedSidebarItem from "./sidebar-item";

interface INavbarItemOptions {
  icon?: IconType;
  label: string;
  route: string;
  requiresAuth?: string[][];
  extra?: ReactElement;
}

const SharedSidebar = () => {
  const NavbarItems: INavbarItemOptions[] = [
    {
      label: "Dashboard",
      route: "/dashboard",
    },
    {
      label: "Settings",
      route: "/settings",
    },
    {
      label: "Chores",
      route: "/chores",
    },
    {
      label: "Calendar",
      route: "/calendar",
    },
    {
      label: "Events",
      route: "/events",
    },
    {
      label: "Rewards",
      route: "/rewards",
    },
  ];
  return (
    <div className="">
      {NavbarItems.map((item) => (
        <SharedSidebarItem key={item.route} {...item} onClick={() => {}} />
      ))}
    </div>
  );
};

export default SharedSidebar;
