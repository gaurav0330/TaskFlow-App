import { statsData, recentActivityData } from "../../../../data/dashboardData";
import RecentActivity from "./RecentActivity";
import StatCard from "./StatCard";
import TaskByStatus from "./TaskByStatus";
import TasksCompletedChart from "./TasksCompletedChart";

const DashboardPage = () => {
  return (
    <div className="bg-app-bg p-4">
      <div className="flex gap-3">
        {statsData.map((item) => (
          <StatCard key={item.name} data={item} />
        ))}
      </div>

      <div className="grid grid-cols-[2fr_1fr] gap-3 mt-4 mb-4">
        <TasksCompletedChart />
        <TaskByStatus />
      </div>

      <div className="flex gap-3 overflow-x-auto">
        {recentActivityData.map((item) => (
          <RecentActivity key={item.name} data={item} />
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
