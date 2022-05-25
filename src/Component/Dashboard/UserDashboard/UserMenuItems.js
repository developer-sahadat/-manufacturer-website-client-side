import React from "react";
import { NavLink } from "react-router-dom";

const UserMenuItems = () => {
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

          <NavLink to="/dashboard">
            <li className="mt-1">
              <i className="fa-solid fa-user mr-2"></i>
              Profile
            </li>
          </NavLink>

          <li className="mt-1">
            <NavLink to="/dashboard">
              <i className="fa-solid fa-gear mr-2"></i>
              Setting
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-medium">Order Details</h3>
        <ul className="slider_list">
          <NavLink to="/dashboard/my-orders">
            <li>
              <i className="fa-solid fa-house-chimney mr-2"></i>
              My Order
            </li>
          </NavLink>
          <NavLink to="/dashboard/review">
            <li className="mt-1">
              <i className="fa-solid fa-chart-simple mr-2"></i>
              Add Feedback
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default UserMenuItems;
