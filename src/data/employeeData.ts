export type EmployeeType = {
  id: number;
  name: string;
  role: string;
  dept: string;
  joined: string;
  util: number;
  salary: number;
};

export const employeeData: EmployeeType[] = [
  {
    id: 1,
    name: "Omar Farouk",
    role: "Designer",
    dept: "Design",
    joined: "2022-02-14",
    util: 66,
    salary: 86000,
  },
  {
    id: 2,
    name: "Sara Ahmed",
    role: "Product Designer",
    dept: "Design",
    joined: "2023-01-15",
    util: 70,
    salary: 91000,
  },
  {
    id: 3,
    name: "Tom Becker",
    role: "UX Researcher",
    dept: "Design",
    joined: "2022-09-08",
    util: 60,
    salary: 87000,
  },
  {
    id: 4,
    name: "Arjun Mehta",
    role: "Frontend Engineer",
    dept: "Engineering",
    joined: "2022-07-19",
    util: 78,
    salary: 98000,
  },
  {
    id: 5,
    name: "Hana Kobayashi",
    role: "QA Engineer",
    dept: "Engineering",
    joined: "2023-04-03",
    util: 74,
    salary: 83000,
  },
  {
    id: 6,
    name: "Li Wei",
    role: "Backend Engineer",
    dept: "Engineering",
    joined: "2020-11-02",
    util: 85,
    salary: 104000,
  },
  {
    id: 7,
    name: "Maya Rodriguez",
    role: "VP Engineering",
    dept: "Engineering",
    joined: "2021-03-04",
    util: 92,
    salary: 168000,
  },
  {
    id: 8,
    name: "Rahul Sharma",
    role: "Sales Manager",
    dept: "Sales",
    joined: "2021-08-12",
    util: 72,
    salary: 95000,
  },
  {
    id: 9,
    name: "Emily Chen",
    role: "Sales Executive",
    dept: "Sales",
    joined: "2023-06-20",
    util: 68,
    salary: 78000,
  },
  {
    id: 10,
    name: "Daniel Smith",
    role: "Account Executive",
    dept: "Sales",
    joined: "2022-12-01",
    util: 76,
    salary: 88000,
  },
];