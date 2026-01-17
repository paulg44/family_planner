import { App } from "antd";
import "./App.css";
import AppRouting from "./core/routing/app-routing";
import { FetchFirebaseDataProvider } from "./core/providers/test-firebase-fetch";
import { UserProvider } from "./core/providers/user-provider";

function FamilyPlanner() {
  return (
    <App>
      <UserProvider>
        <FetchFirebaseDataProvider>
          <AppRouting />
        </FetchFirebaseDataProvider>
      </UserProvider>
    </App>
  );
}

export default FamilyPlanner;
