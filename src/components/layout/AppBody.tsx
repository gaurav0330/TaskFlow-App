import LeftSidebar from "../sections/LeftSidebar";
import MainContent from "../sections/MainContent";
import RightSidebar from "../sections/RightSidebar";

const AppBody = () => {
  return (
    <div className="flex flex-1 w-full">
        <LeftSidebar/>
        <MainContent/>
        <RightSidebar/>
      </div>
  )
};

export default AppBody;