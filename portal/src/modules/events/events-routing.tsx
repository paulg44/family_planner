import { Navigate, Route, Routes } from "react-router-dom";
import Events from "./events";

const EventsRouting = () => {
  return (
    <Routes>
      <Route path="" element={<Events />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default EventsRouting;
