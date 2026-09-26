import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

import { taskByStatusData } from "../../../../data/dashboardData";

const STATUS_COLORS = [
  "var(--success)", // To do
  "#0369A1",        // Done
  "#B45309",        // Review
  "var(--danger)",  // Blocked
];

const TaskByStatus = () => {
  return (
    <div className="w-full min-w-0 rounded-md border border-app-border bg-surface p-4">
      {/* Title */}
      <h2 className="mb-2 text-sm font-semibold text-app-text">
        Tasks by status
      </h2>

      {/* Chart */}
      <div className="h-[170px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={taskByStatusData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius="52%"
              outerRadius="72%"
              paddingAngle={0}
              stroke="none"
              isAnimationActive={true}
            >
              {taskByStatusData.map((entry, index) => (
                <Cell
                  key={`cell-${entry.name}`}
                  fill={STATUS_COLORS[index]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="mt-1 flex flex-wrap justify-center gap-x-3 gap-y-2 text-[11px] text-app-text-muted">
        {taskByStatusData.map((item, index) => (
          <div
            key={item.name}
            className="flex items-center gap-1"
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{
                backgroundColor: STATUS_COLORS[index],
              }}
            />

            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskByStatus;