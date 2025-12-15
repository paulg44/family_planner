import { Route, Routes } from "react-router-dom";
import DashboardRouting from "../../modules/dashboard/dashboard-routing";
import CalendarRouting from "../../modules/calendar/calendar-routing";

const AppRouting = () => {
  return (
    <Routes>
      <Route path="/dashboard/*" element={<DashboardRouting />} />
      <Route path="/calendar/*" element={<CalendarRouting />} />
    </Routes>
  );
};

export default AppRouting;
