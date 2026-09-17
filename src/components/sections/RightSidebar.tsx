import { useState } from "react";
import AccordianContainer from "../UI/AccordianContainer";
import NotificationComp from "./RightSidebar/NotificationComp";
import PriorityComp from "./RightSidebar/PriorityComp";

const RightSidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      className={`mr-2.5  px-2 bg-app-bg-sec flex transition-[width] ${isOpen ? "w-[280px]" : "w-[30px]"} `}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
        className="w-[25px] h-[25px] shrink-0 bg-app-text-muted rounded-full align-baseline"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? "-" : "+"}
      </button>

      {isOpen && (
        <div className="flex-1">
          <AccordianContainer
            title="Filters"
            titleStyle="text-[14px] font-semibold"
          >
            <PriorityComp />
          </AccordianContainer>

          <AccordianContainer
            title="Notifications"
            titleStyle="text-[14px] font-semibold"
          >
            <NotificationComp />
          </AccordianContainer>
        </div>
      )}
    </div>
  );
};

export default RightSidebar;
