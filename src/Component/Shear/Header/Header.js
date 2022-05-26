import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../../FirebaseInit/FirebaseInit";
import CustomButton1 from "../CustomButton/CustomButton1";
import LoadingSpinner from "../LoadingSpinner";
import "./Header.css";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <LoadingSpinner />;
  }

  const menuItems = (
    <>
      <li>
        <NavLink className="link" to="/">
          Home
        </NavLink>
      </li>

      <li>
        <NavLink className="link" to="/my-portfolio">
          My Portfolio
        </NavLink>
      </li>
      <li>
        <NavLink className="link" to="/blogs">
          Blogs
        </NavLink>
      </li>

      <li>
        {user && (
          <NavLink className="link " to="/dashboard">
            Dashboard
          </NavLink>
        )}
      </li>

      {user ? (
        <button
          className="border border-primary px-10 py-2 custom_btn"
          onClick={() => {
            localStorage.removeItem("accessToken");
            signOut(auth);
          }}
        >
          Sign Out
        </button>
      ) : (
        <Link className="link" to="/login">
          <CustomButton1>Login</CustomButton1>
        </Link>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar  lg:px-10">
        <div className="navbar-start">
          <Link className="btn btn-ghost normal-case text-xl" to="\">
            Construction Tools
          </Link>
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow-2xl bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 lg:py-2">{menuItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
