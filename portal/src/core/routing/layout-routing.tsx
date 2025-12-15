import { Outlet } from "react-router-dom";
import SharedLayout from "../../shared/layout/layout";

const LayoutRouting = () => {
  return (
    <SharedLayout>
      <Outlet />
    </SharedLayout>
  );
};

export default LayoutRouting;
