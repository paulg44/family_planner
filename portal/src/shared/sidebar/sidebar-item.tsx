import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";

interface ISharedSidebarItem {
  onClick: () => void;
  label: string;
  route: string;
  extra?: React.ReactElement;
}

const SharedSidebarItem = ({
  label,
  route,
  extra,
  onClick,
}: ISharedSidebarItem) => {
  const location = useLocation();
  const active = location.pathname.startsWith(`/${route}`);

  return (
    <Link
      to={route}
      onClick={() => {
        onClick();
      }}
    >
      <div className={clsx("button-sm", active && "bg-gray-200")}>
        <p>{label}</p>
        {extra && extra}
      </div>
    </Link>
  );
};

export default SharedSidebarItem;
