import React from "react";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "../../RequireAuth";
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
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
