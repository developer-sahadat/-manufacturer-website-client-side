import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../FirebaseInit/FirebaseInit";
import UseAdmin from "../../../Hook/UseAdmin";
import LoadingSpinner from "../../Shear/LoadingSpinner";
import AdminMenuItems from "../AdminDashboard/AdminMenuItems";
import UserMenuItems from "../UserDashboard/UserMenuItems";
import "./DashboardSideBar.css";

const DashboardSideBar = () => {
  const [user, loading] = useAuthState(auth);
  const [admin] = UseAdmin(user);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="sidebar ">
      {admin ? <AdminMenuItems /> : <UserMenuItems />}
    </div>
  );
};

export default DashboardSideBar;
