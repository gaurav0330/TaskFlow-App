import ItemList from "../../../data/LeftSidebarData";
import { NavLink } from "react-router-dom";

const MainTabBar = () => {
  return (
    <div className="flex gap-2 border-b border-[#C9CEDA]">
      {ItemList.map((item) => (
        <NavLink
          to={item.path}
          key={item.name}
          className={({ isActive }) =>
            `px-3 py-2 text-[12px] font-semibold ${
              isActive
                ? "text-primary border-b-2 border-primary"
                : "text-app-text-muted"
            }`
          }
        >
          {item.name}
        </NavLink>
      ))}
    </div>
  );
};

export default MainTabBar;