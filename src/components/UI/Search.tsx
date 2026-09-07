import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="h-[30px] w-[260px] flex-hr border border-app-border rounded-md bg-app-bg-sec gap-1 relative ">
        <span className="absolute  left-[8px] bottom-[6px] "><FaSearch color="#DDE0E5" /></span>
        <input className="w-[230px] h-full absolute right-0 outline-0 border-0 text-xs" type="text" placeholder="Search employees, projects, tasks…" />
    </div>
  );
};

export default Search;
