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


// type TaskByStatusType = {
//   name: string;
//   value: number;
// };

// export const taskByStatusData: TaskCompleteDataType[] = [
//   {
//     name: "W1",
//     value: 23,
//   },
//   {
//     name: "W2",
//     value: 31,
//   },
//   {
//     name: "W3",
//     value: 27,
//   },
//   {
//     name: "W4",
//     value: 42,
//   },
//   {
//     name: "W5",
//     value: 35,
//   },
//   {
//     name: "W6",
//     value: 48,
//   },
// ];




export type TaskByStatusDataType = {
  name: string;
  value: number;
};

export const taskByStatusData: TaskByStatusDataType[] = [
  {
    name: "To do",
    value: 48,
  },
  {
    name: "Done",
    value: 28,
  },
  {
    name: "Review",
    value: 16,
  },
  {
    name: "Blocked",
    value: 8,
  },
];


export type RecentActivityType = {
  id: number;
  name: string;
  action: string;
  time: string;
};

export const recentActivityData: RecentActivityType[] = [
  {
    id: 1,
    name: "Maya Rodriguez",
    action: 'Closed "Fix paging bar bug"',
    time: "12 min ago",
  },
  {
    id: 2,
    name: "Arjun Mehta",
    action: "Requested leave, Jul 14–16",
    time: "1 hr ago",
  },
  {
    id: 3,
    name: "Li Wei",
    action: 'Moved "API contract" to Review',
    time: "2 hr ago",
  },
  {
    id: 4,
    name: "Sara Ahmed",
    action: "Commented on Q3 Revamp",
    time: "3 hr ago",
  },
  {
    id: 5,
    name: "Tom Becker",
    action: "Added 3 new tasks",
    time: "5 hr ago",
  },
];