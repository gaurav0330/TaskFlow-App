import { statsData } from "../../../../data/dashboardData";
import StatCard from "./StatCard";
import TasksCompletedChart from "./TasksCompletedChart";

const DashboardPage = () => {
  return (
    <div className="bg-app-bg p-4">
      <div className="flex gap-3">
        {statsData.map((item) => (
          <StatCard key={item.name} data={item} />
        ))}
      </div>

        <div>
          <TasksCompletedChart />
        </div>


    </div>
  );
};

export default DashboardPage;
