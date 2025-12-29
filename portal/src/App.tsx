import { App } from "antd";
import "./App.css";
import AppRouting from "./core/routing/app-routing";
import { FetchFirebaseDataProvider } from "./core/providers/test-firebase-fetch";

function FamilyPlanner() {
  return (
    <App>
      <FetchFirebaseDataProvider>
        <AppRouting />
      </FetchFirebaseDataProvider>
    </App>
  );
}

export default FamilyPlanner;
