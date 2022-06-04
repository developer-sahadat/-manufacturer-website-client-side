import React from "react";
import { Route, Routes } from "react-router-dom";
import RequireAdmin from "../../RequireAdmin";
import RequireAuth from "../../RequireAuth";
import AddProduct from "../Dashboard/AdminDashboard/AddProduct";
import AllOrders from "../Dashboard/AdminDashboard/AllOrders";
import Analysis from "../Dashboard/AdminDashboard/Analysis/Analysis";
import MakeAdmin from "../Dashboard/AdminDashboard/MakeAdmin";
import ManageProducts from "../Dashboard/AdminDashboard/ManageProducts";
import Dashboard from "../Dashboard/Dashboard/Dashboard";
import ProfileDashboard from "../Dashboard/ProfileDashboard/ProfileDashboard";
import AddReview from "../Dashboard/UserDashboard/AddReview";
import MyOrder from "../Dashboard/UserDashboard/MyOrder";
import Home from "../HomePage/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import BusinessMember from "../Pages/BusinessMember/BusinessMember";
import Contact from "../Pages/Contact/Contact";

import Login from "../Pages/Login/Login";
import MyPortfolio from "../Pages/MyPortfolio/MyPortfolio";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import Payment from "../Pages/Payment/Payment";
import Purchase from "../Pages/Purchase/Purchase";
import Reviews from "../Pages/Reviews/Reviews";
import SingUp from "../Pages/SingUp/SingUp";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SingUp />} />
        <Route path="/my-portfolio" element={<MyPortfolio />} />
        <Route path="/business-member" element={<BusinessMember />} />
        <Route path="/review" element={<Reviews />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
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
          <Route index element={<ProfileDashboard />} />
          {/**User Route **/}
          <Route path="my-orders" element={<MyOrder />}></Route>
          <Route path="payment/:paymentId" element={<Payment />} />
          <Route path="review" element={<AddReview />} />

          {/**Admin Route **/}
          <Route
            path="analysis"
            element={
              <RequireAdmin>
                <Analysis />
              </RequireAdmin>
            }
          ></Route>

          <Route
            path="make-admin"
            element={
              <RequireAdmin>
                <MakeAdmin />
              </RequireAdmin>
            }
          />
          <Route
            path="manage-products"
            element={
              <RequireAdmin>
                <ManageProducts />
              </RequireAdmin>
            }
          />
          <Route
            path="all-order"
            element={
              <RequireAdmin>
                <AllOrders />
              </RequireAdmin>
            }
          />
          <Route
            path="add-product"
            element={
              <RequireAdmin>
                <AddProduct />
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
