import { Route, Routes } from "react-router-dom";
import DashboardRouting from "../../modules/dashboard/dashboard-routing";

const AppRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardRouting />} />
    </Routes>
  );
};

export default AppRouting;
