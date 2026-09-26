import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { taskCompleteData } from "../../../../data/dashboardData";

const TasksCompletedChart = () => {
  return (
    <div className="rounded-md border border-app-border bg-app-bg-sec p-4">
      <h2 className="mb-4 text-sm font-semibold text-app-text">
        Tasks completed / week
      </h2>

      <div className="h-[250px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={taskCompleteData}
            margin={{
              top: 10,
              right: 10,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid
              vertical={false}
              stroke="var(--app-border)"
            />

            <XAxis
              dataKey="name"
              tick={{
                fill: "var(--app-text-muted)",
                fontSize: 11,
              }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{
                fill: "var(--app-text-muted)",
                fontSize: 11,
              }}
              axisLine={false}
              tickLine={false}
              width={30}
            />

            <Tooltip
              cursor={{ fill: "var(--app-bg)" }}
              contentStyle={{
                backgroundColor: "var(--surface)",
                border: "1px solid var(--app-border)",
                borderRadius: "6px",
                color: "var(--app-text)",
              }}
            />

            <Bar
              dataKey="value"
              fill="var(--primary)"
              radius={[4, 4, 0, 0]}
              barSize={80}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TasksCompletedChart;