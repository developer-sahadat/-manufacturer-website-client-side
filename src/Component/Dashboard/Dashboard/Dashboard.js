import React from "react";
import { Outlet } from "react-router-dom";
import DashboardSideBar from "../DashboardSideBar/DashboardSideBar";
import DashboardTopBar from "../DashboardTopbar/DashboardTopBar";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <DashboardTopBar />
      <section className="dashboard_container  ">
        <DashboardSideBar />
        <div>
          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
