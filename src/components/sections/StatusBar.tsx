const StatusBar = () => {
  return (
    <div className="h-7.5 flex items-center gap-2 px-3.5">
      <span className="w-[7px] h-[7px] rounded-full bg-app-text-muted"></span>
      <span className="text-xs text-app-text-muted">Synced 2 min ago</span>
    </div>
  );
};

export default StatusBar;
