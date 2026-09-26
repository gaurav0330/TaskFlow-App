import { Outlet } from "react-router";
import MainTabBar from "./MainTabBar";

const MainContent = () => {
  return <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden border border-app-border" >
    <MainTabBar/>
      <div className="min-h-0 flex-1 overflow-auto">
        <Outlet />
      </div>
  </div>;
};

export default MainContent;
