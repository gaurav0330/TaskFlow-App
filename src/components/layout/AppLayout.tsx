import AppBody from "./AppBody";
import Header from "../sections/Header/Header";
import StatusBar from "../sections/StatusBar";

const AppLayout = () => {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-app-bg">
      <Header/>
      <AppBody/>
      <StatusBar/>
    </div>
  );
};

export default AppLayout;
