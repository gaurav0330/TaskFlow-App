import type { RecentActivityType } from "../../../../data/dashboardData";

type RecentActivityProps = {
  data: RecentActivityType;
};

const RecentActivity = ({ data }: RecentActivityProps) => {
  return (
    <div className="min-w-[210px] rounded-md border border-app-border bg-app-bg-sec px-3 py-3">
      <h3 className="text-[13px] font-semibold text-app-text">
        {data.name}
      </h3>

      <p className="mt-1 text-[12px] text-app-text-muted">
        {data.action}
      </p>

      <p className="mt-2 text-[11px] text-app-text-muted">
        {data.time}
      </p>
    </div>
  );
};

export default RecentActivity;