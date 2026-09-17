import { NavLink } from "react-router-dom";
import data from "../../data/LeftSidebarData";

const LeftSidebar = () => {
  return (
    <div className="w-[180px] flex flex-col shrink-0 pl-2.5 bg-app-bg-sec border-[1px] border-[#C9CEDA]">
      <h4 className="text-[10.5px] uppercase text-app-text-muted pt-1 pr-1.5 pb-2">
        NAVIGATE
      </h4>

      {data.map((item) => {
        const Icon = item.icon;

        return (
          <NavLink
            to={item.path}
            key={item.name}
            className={({ isActive }) =>
              `flex items-center text-[13px] mb-1 mr-1 gap-2 px-1 py-1 rounded-[6px] ${
                isActive ? "bg-primary/40 text-primary" : "text-app-text-muted"
              }`
            }
          >
            <Icon size={15} />
            {item.name}
          </NavLink>
        );
      })}
    </div>
  );
};

export default LeftSidebar;
