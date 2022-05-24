import React from "react";
import AdminMenuItems from "../AdminDashboard/AdminMenuItems";
// import UserMenuItems from "../UserDashboard/UserMenuItems";
import "./DashboardSideBar.css";

const DashboardSideBar = () => {
  return (
    <div className="sidebar ">
      <AdminMenuItems />
      {/* <UserMenuItems /> */}
    </div>
  );
};

export default DashboardSideBar;
