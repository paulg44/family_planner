import { Navigate, Route, Routes } from "react-router-dom";
import Chores from "./chores";

const ChoresRouting = () => {
  return (
    <Routes>
      <Route path="" element={<Chores />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default ChoresRouting;
