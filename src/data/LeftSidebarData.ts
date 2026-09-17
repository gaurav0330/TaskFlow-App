import {
  LayoutDashboard,
  Users,
  Folder,
  CalendarDays,
  Settings,
} from "lucide-react";

export default [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    name: "Employee",
    icon: Users,
    path: "/employees",
  },
  {
    name: "Projects",
    icon: Folder,
    path: "/projects",
  },
  {
    name: "Leave Requests",
    icon: CalendarDays,
    path: "/leave",
  },
  {
    name: "Settings",
    icon: Settings,
    path: "/settings",
  },
];
