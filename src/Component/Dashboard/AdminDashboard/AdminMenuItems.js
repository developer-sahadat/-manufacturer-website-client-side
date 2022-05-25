import React from "react";
import { NavLink } from "react-router-dom";

const AdminMenuItems = () => {
  return (
    <div className="slider_wrapper">
      <div>
        <h3 className="text-xl font-medium mt-6">Dashboard</h3>
        <ul className="slider_list">
          <NavLink to="/">
            <li>
              <i className="fa-solid fa-house-chimney mr-2"></i>
              Home
            </li>
          </NavLink>

          <NavLink to="/dashboard/analysis">
            <li className="mt-1">
              <i className="fa-solid fa-chart-simple mr-2"></i>
              Analysis
            </li>
          </NavLink>

          <NavLink to="/">
            <li className="mt-1">
              <i className="fa-solid fa-arrow-trend-up mr-2"></i>
              All Orders
            </li>
          </NavLink>

          <NavLink to="/dashboard/add-product">
            <li className="mt-1">
              <i class="fa-solid fa-circle-plus mr-2"></i>
              Add A Product
            </li>
          </NavLink>

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
