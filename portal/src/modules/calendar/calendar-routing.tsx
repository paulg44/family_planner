import Calendar from "./calendar";
import { Routes, Route, Navigate } from "react-router-dom";

const CalendarRouting = () => {
  return (
    <Routes>
      <Route path="" element={<Calendar />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default CalendarRouting;
