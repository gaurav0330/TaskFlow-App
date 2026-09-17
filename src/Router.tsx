import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";

import AppLayout from "./components/layout/AppLayout";

import DashboardPage from "./components/sections/MainContent/Dashboard/DashboardPage";
import ProjectsPage from "./components/sections/MainContent/ProjectsPage";
import LeaveRequestsPage from "./components/sections/MainContent/LeaveRequestsPage";
import EmployeesPage from "./components/sections/MainContent/EmployeesPage";
import SettingsPage from "./components/sections/MainContent/SettingsPage";
import NotFoundPage from "./NotFoundPage";

const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<Navigate to="/dashboard" replace />}>
      {" "}
    </Route>

    <Route element={<AppLayout />}>
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/employees" element={<EmployeesPage />} />
      <Route path="/leave" element={<LeaveRequestsPage />} />
      <Route path="/settings" element={<SettingsPage />} />
    </Route>

    <Route path="*" element={<NotFoundPage />}></Route>
  </>,
);

export const router = createBrowserRouter(routes);
