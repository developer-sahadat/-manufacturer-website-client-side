import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../../../FirebaseInit/FirebaseInit";
import LoadingSpinner from "../../Shear/LoadingSpinner";
import ProfileUpdateModal from "../../Shear/Modal/ProfileUpdateModal/ProfileUpdateModal";

const ProfileDashboard = () => {
  const [updateProfile, setUpdateProfile] = useState(null);
  let navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

  const { data, isLoading, refetch } = useQuery(["single-user", user], () =>
    fetch(
      `https://construction-tools.onrender.com/single-user?email=${user?.email}`,
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    ).then((res) => {
      if (res.status === 401 || res.status === 403) {
        navigate("/");
        signOut(auth);
      }

      return res.json();
    })
  );
  console.log(data);
  if (isLoading || loading) {
    return <LoadingSpinner />;
  }
  return (
    <section>
      <h2 className="ml-10 mt-5 text-2xl font-bold text-secondary">
        My Profile
      </h2>
      <div className="py-10 px-10 ">
        <div className="avatar online">
          <div className="w-24 rounded-full">
            <img
              src={
                data?.image
                  ? data?.image || data.data.image
                  : "https://i.ibb.co/30DwmWG/Image-Placeholder.png"
              }
              alt=""
            />
          </div>
        </div>
        <div className=" pt-5 border-t-2">
          <ul>
            <li className="mb-2">
              <span className="text-xl font-bold">Name:</span>
              <span className="ml-5 text-gray-500">{data?.name}</span>
            </li>
            <li className="mb-2">
              <span className="text-xl font-bold">Email:</span>
              <span className="ml-5 text-gray-500">{data?.email}</span>
            </li>
            <li className="mb-2">
              <span className="text-xl font-bold">Phone:</span>
              <span className="ml-5 text-gray-500">
                {data?.number ? data?.number : "Please add your phone number"}
              </span>
            </li>
            <li className="mb-2">
              <span className="text-xl font-bold">Address:</span>
              <span className="ml-5 text-gray-500">
                {data?.address ? data?.address : "Please add your Address"}
              </span>
            </li>
            <li className="mb-2">
              <span className="text-xl font-bold">Education:</span>
              <span className="ml-5 text-gray-500">
                {data?.education
                  ? data?.education
                  : "Please add your Education"}
              </span>
            </li>
          </ul>
        </div>
        <div className=" pt-5 border-t-2">
          <h3 className=" mb-3 mt-1 text-2xl font-bold text-secondary">
            Add Social Media Link
          </h3>
          <ul>
            <li className="mb-2">
              <span className="text-xl font-bold">Linkedin:</span>
              <span className="ml-5 text-gray-500">
                {data?.linkedin
                  ? data?.linkedin
                  : "Please add your Linkedin URl"}
              </span>
            </li>
            <li className="mb-2">
              <span className="text-xl font-bold">Facebook:</span>
              <span className="ml-5 text-gray-500">
                {data.facebook ? data.facebook : "Please add your Linkedin URL"}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mb-10 cursor-pointer">
        <label
          onClick={() => setUpdateProfile(data)}
          htmlFor="profile-update-modal"
          className="text-center font-bold cursor-pointer border border-primary px-10 py-3 custom_btn "
        >
          Update Profile
        </label>
      </div>
      {updateProfile && (
        <ProfileUpdateModal
          setUpdateProfile={setUpdateProfile}
          user={data}
          refetch={refetch}
        />
      )}
    </section>
  );
};

export default ProfileDashboard;
