// import Logo from ""; 
import Logo from "../../UI/Logo";
import Search from "../../UI/Search";
import { FaBell } from "react-icons/fa";
import Profile from "../Profile/Profile";


const Header = () => {
  return (
    <div className =" h-12.5 w-full flex items-center justify-between px-4">
   
      <div className="flex-hr gap-3">
        <div className="flex-hr gap-1">
          <Logo/>
          <p className="font-semibold">TaskFlow</p>
        </div>

        <Search/>
      </div>

      <div className="flex gap-2 relative">
        <FaBell size={"15"} className="absolute top-[5px] left-[-20px]"/>
        <Profile/>
      </div>
    </div>
  );
};

export default Header;
