import { App } from "antd";
import "./App.css";
import AppRouting from "./core/routing/app-routing";

function FamilyPlanner() {
  return (
    <App>
      <AppRouting />
    </App>
  );
}

export default FamilyPlanner;
