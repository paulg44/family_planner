import { Route, Routes } from "react-router-dom";
import DashboardRouting from "../../modules/dashboard/dashboard-routing";
import CalendarRouting from "../../modules/calendar/calendar-routing";
import LayoutRouting from "./layout-routing";
import ChoresRouting from "../../modules/chores/chores-routing";

const AppRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutRouting />}>
        <Route path="/dashboard/*" element={<DashboardRouting />} />
        <Route path="/calendar/*" element={<CalendarRouting />} />
        <Route path="/chores/*" element={<ChoresRouting />} />
      </Route>
    </Routes>
  );
};

export default AppRouting;
