import AppBody from "./AppBody";
import Header from "../sections/Header/Header";
import StatusBar from "../sections/StatusBar";

const AppLayout = () => {
  return (
    <div className="bg-app-bg flex flex-col h-screen">
      <Header/>
      <AppBody/>
      <StatusBar/>
    </div>
  );
};

export default AppLayout;
