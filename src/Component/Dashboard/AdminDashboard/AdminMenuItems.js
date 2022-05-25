import React from "react";
import { NavLink } from "react-router-dom";

const AdminMenuItems = () => {
  return (
    <div className="slider_wrapper">
      <div>
        <h3 className="text-xl font-medium mt-6">Dashboard</h3>
        <ul className="slider_list">
          <li>
            <NavLink to="/">
              <i className="fa-solid fa-house-chimney mr-2"></i>
              Home
            </NavLink>
          </li>
          <li className="mt-1">
            <NavLink to="/dashboard/analysis">
              <i className="fa-solid fa-chart-simple mr-2"></i>
              Analysis
            </NavLink>
          </li>
          <li className="mt-1">
            <NavLink to="/">
              <i className="fa-solid fa-arrow-trend-up mr-2"></i>
              All Orders
            </NavLink>
          </li>
          <li className="mt-1">
            <NavLink to="/">
              <i class="fa-solid fa-circle-plus mr-2"></i>
              Add A Product
            </NavLink>
          </li>

          <NavLink to="/dashboard/manage-products">
            <li className="mt-1">
              <i class="fa-solid fa-people-roof mr-2"></i>
              Manage Products
            </li>
          </NavLink>
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-medium">Settings</h3>
        <ul className="slider_list">
          <NavLink to="/dashboard">
            <li>
              <i className="fa-solid fa-house-chimney mr-2"></i>
              My Profile
            </li>
          </NavLink>
          <NavLink to="/dashboard/make-admin">
            <li className="mt-1">
              <i class="fa-solid fa-dice-d6 mr-2"></i> Make Admin
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default AdminMenuItems;
