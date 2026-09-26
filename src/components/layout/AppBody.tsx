import LeftSidebar from "../sections/LeftSidebar";
import MainContent from "../sections/MainContent/MainContent";
import RightSidebar from "../sections/RightSidebar";

const AppBody = () => {
  return (
    <div className="flex min-h-0 flex-1 w-full overflow-hidden">
        <LeftSidebar/>
        <MainContent/>
        <RightSidebar/>
      </div>
  )
};

export default AppBody;