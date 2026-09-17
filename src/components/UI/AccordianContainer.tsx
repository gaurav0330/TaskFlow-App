import { useState } from "react";

type AccordianContainerProps = {
  title: string;
  titleStyle ?: string;
  children: React.ReactNode;

};

const AccordianContainer = ({ title, children,titleStyle}: AccordianContainerProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="border border-app-border h-min-7.5 bg-app-bg-sec px-3 py-2.5 ml-2 mb-2 rounded-md flex flex-col transition-[width]">
        <button type="button" className="flex justify-between w-full" onClick={() => setIsOpen((prev) => !prev)} aria-expanded={isOpen}> 
          <h3 className={titleStyle}>{title}</h3>
          <span>{  !isOpen ? "+" : "-"}</span>
        </button>
      {isOpen && children}
    </div>
  );
};

export default AccordianContainer;
