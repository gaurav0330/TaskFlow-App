type StatCardProps = {
  data: {
    name: string;
    kpi: string | number;
    isPositive: boolean;
    msg: string;
  };
};

const StatCard = ({ data }: StatCardProps) => {
  return (
    <div className="min-w-[150px] rounded-md border border-app-border bg-app-bg-sec px-3 py-3.5">
      <h3 className="mb-1 text-[11px] text-app-text-muted">
        {data.name}
      </h3>

      <h2 className="text-[22px] font-semibold">
        {data.kpi}
      </h2>

      <p
        className={`text-[11px] ${
          data.isPositive
            ? "text-[#0369A1]"
            : "text-[#B91C1C]"
        }`}
      >
        <span>{data.isPositive ? "▲" : "▼"} </span>
        <span>{data.msg}</span>
      </p>
    </div>
  );
};

export default StatCard;