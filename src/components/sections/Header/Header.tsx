// import Logo from ""; 
import Logo from "../../Logo";
import Search from "../../Search";

const Header = () => {
  return (
    <div className =" h-12.5 w-full flex items-center justify-between border-2 border-black  px-4">
   
      <div className="flex-hr gap-8">

        <div className="flex-hr gap-1">
          <Logo/>
          <p className="font-semibold">TaskFlow</p>
        </div>

        <Search/>

      </div>

      <div className="flex-hr">

        <p>icons</p>
      
      </div>
    </div>
  );
};

export default Header;
