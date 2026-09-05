import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="h-[30px] w-[260px] flex-hr border border-app-border bg-app-bg-sec gap-1 relative">
        <span className="absolute  left-2 bottom-0.5 "><FaSearch /></span>
        <input className="w-[230px] h-full absolute right-0 outline-0 border " type="text" border-0 />
    </div>
  );
};

export default Search;
