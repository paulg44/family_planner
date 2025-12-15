import { App } from "antd";
import "./App.css";
import AppRouting from "./core/routing/app-routing";
import SharedSidebar from "./shared/sidebar/sidebar";

function FamilyPlanner() {
  return (
    <App>
      <SharedSidebar />
      <AppRouting />
    </App>
  );
}

export default FamilyPlanner;
