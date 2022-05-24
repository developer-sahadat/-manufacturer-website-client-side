import React from "react";
import { Route, Routes } from "react-router-dom";
import RequireAdmin from "../../RequireAdmin";
import RequireAuth from "../../RequireAuth";
import MakeAdmin from "../Dashboard/AdminDashboard/MakeAdmin";
// import Analysis from "../Dashboard/Analysis/Analysis";
import Dashboard from "../Dashboard/Dashboard/Dashboard";
import MyOrder from "../Dashboard/UserDashboard/MyOrder";
import Home from "../HomePage/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import Purchase from "../Pages/Purchase/Purchase";
import SingUp from "../Pages/SingUp/SingUp";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SingUp />} />
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        />

        {/**dashboard nested Route code start  **/}
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          {/**User Route **/}
          <Route path="my-orders" element={<MyOrder />}></Route>

          {/**Admin Route **/}
          {/* <Route index element={<Analysis />}></Route> */}
          <Route
            path="make-admin"
            element={
              <RequireAdmin>
                <MakeAdmin />
              </RequireAdmin>
            }
          />
        </Route>
        {/**dashboard nested Route code end  **/}

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
