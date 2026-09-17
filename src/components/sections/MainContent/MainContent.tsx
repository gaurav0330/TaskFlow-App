import { Outlet } from "react-router";
import MainTabBar from "./MainTabBar";

const MainContent = () => {
  return <div className="flex-1 min-w-0 border-[1px] border-[#C9CEDA]">
    <MainTabBar/>
    <Outlet/>
  </div>;
};

export default MainContent;
