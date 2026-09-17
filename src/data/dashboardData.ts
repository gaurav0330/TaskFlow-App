type StatDataType = {
  name: string;
  kpi: number;
  isPositive: boolean;
  msg: string;
};

export const statsData: StatDataType[] = [
  {
    name: "Active tasks",
    kpi: 128,
    isPositive: true,
    msg: "6% vs last week",
  },
  {
    name: "Overdue",
    kpi: 7,
    isPositive: false,
    msg: "2 since Monday",
  },
  {
    name: "Team load",
    kpi: 82,
    isPositive: true,
    msg: "4%",
  },
  {
    name: "Open leave requests",
    kpi: 3,
    isPositive: false,
    msg: "1",
  },
];
type TaskCompleteDataType = {
  name: string;
  value: number;
};

export const taskCompleteData: TaskCompleteDataType[] = [
  {
    name: "W1",
    value: 23,
  },
  {
    name: "W2",
    value: 31,
  },
  {
    name: "W3",
    value: 27,
  },
  {
    name: "W4",
    value: 42,
  },
  {
    name: "W5",
    value: 35,
  },
  {
    name: "W6",
    value: 48,
  },
];
