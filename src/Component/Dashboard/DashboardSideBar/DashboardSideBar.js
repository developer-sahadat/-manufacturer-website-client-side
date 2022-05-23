import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./DashboardSideBar.css";

const DashboardSideBar = () => {
  return (
    <div className="sidebar ">
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
              <NavLink to="/dashboard">
                <i className="fa-solid fa-chart-simple mr-2"></i>
                Analysis
              </NavLink>
            </li>
            <li className="mt-1">
              <NavLink to="/">
                <i className="fa-solid fa-arrow-trend-up mr-2"></i>
                Sales
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-medium">Dashboard</h3>
          <ul className="slider_list">
            <li>
              <i className="fa-solid fa-house-chimney mr-2"></i>
              Home
            </li>
            <li className="mt-1">
              <i className="fa-solid fa-chart-simple mr-2"></i>
              Analysis
            </li>
            <li className="mt-1">
              <i className="fa-solid fa-arrow-trend-up mr-2"></i>
              Sales
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-medium">Dashboard</h3>
          <ul className="slider_list">
            <li>
              <i className="fa-solid fa-house-chimney mr-2"></i>
              Home
            </li>
            <li className="mt-1">
              <i className="fa-solid fa-chart-simple mr-2"></i>
              Analysis
            </li>
            <li className="mt-1">
              <i className="fa-solid fa-arrow-trend-up mr-2"></i>
              Sales
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardSideBar;
