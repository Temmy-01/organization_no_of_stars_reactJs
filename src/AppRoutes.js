import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardPage from "./Pages/Admin/Dashboard";
import BaseLayout from "./components/Layouts/BaseLayout";
import CompanyIndex from "./Pages/Admin/CompanyRepo";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/app/dashboard"
        element={
          <BaseLayout>
            <DashboardPage />
          </BaseLayout>
        }
      />

      <Route
        path="/app/index"
        element={
          <BaseLayout>
            <CompanyIndex />
          </BaseLayout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
