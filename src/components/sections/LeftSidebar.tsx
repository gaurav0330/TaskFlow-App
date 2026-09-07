
import data from "../../data/LeftSidebarData";

const LeftSidebar = () => {

  return( <div className="w-[250px] flex flex-col shrink-0 pl-2.5">
      <h4 className="text-[10.5px] uppercase text-app-text-muted pt-1 pr-1.5 pb-2">NAVIGATE</h4>

    {data.map((item)=>{
      
      const Icon = item.icon;

      return(<p key={item.name}
      className="flex items-center text-[13px] text-app-text-muted mb-1 gap-2"
      >
        <Icon size={15}/>
        {item.name}
      </p>)
    })}
    
  </div>);
};


export default LeftSidebar;
