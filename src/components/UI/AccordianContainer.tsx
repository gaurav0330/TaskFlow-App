type AccordianContainerProps = {
  title: string;
  children: React.ReactNode;
};

const AccordianContainer = ({ title, children }: AccordianContainerProps) => {
  const isOpend: boolean = true;

  return (
    <div className="border border-app-border h-min-7.5 bg-app-bg-sec px-3 ml-2 mb-2 rounded-md flex flex-col">
      
      <div className="flex justify-between items-center">
        <h3 className="">{title}</h3>
        <span>
          {" "}
          <p> + </p>
        </span>
      </div>

      {isOpend && children}
    </div>
  );
};

export default AccordianContainer;
