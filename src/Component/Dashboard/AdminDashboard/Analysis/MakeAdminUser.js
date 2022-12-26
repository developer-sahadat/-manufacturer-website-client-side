import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../../FirebaseInit/FirebaseInit";

const MakeAdminUser = ({ user, index, refetch }) => {
  const { name, image, email, role } = user;
  let navigate = useNavigate();

  const makeAdmin = () => {
    fetch(`https://construction-tools.onrender.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          navigate("/");
          signOut(auth);
        }
        return res.json();
      })
      .then((result) => {
        if (result?.acknowledged) {
          refetch();
          toast("Successfully added admin");
        }
      });
  };
  return (
    <>
      <tr>
        <th>{index + 1}</th>

        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  src={
                    image
                      ? image
                      : "https://i.ibb.co/30DwmWG/Image-Placeholder.png"
                  }
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
            </div>
          </div>
        </td>
        <td>{email}</td>

        <th>
          {role ? (
            "Already Admin"
          ) : (
            <button
              onClick={() => makeAdmin()}
              className="btn btn-primary text-gray-100 btn-xs"
            >
              Make Admin
            </button>
          )}
        </th>
      </tr>
    </>
  );
};

export default MakeAdminUser;
