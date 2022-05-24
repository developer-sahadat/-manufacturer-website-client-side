import React from "react";

const MakeAdminUser = ({ user, index }) => {
  console.log(user);
  const { name, image, email } = user;
  console.log(image);
  return (
    <>
      <tr>
        <th>
          <th>{index + 1}</th>
        </th>
        <td>
          <div class="flex items-center space-x-3">
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
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
              <div class="font-bold">{name}</div>
            </div>
          </div>
        </td>
        <td>{email}</td>

        <th>
          <button class="btn btn-primary text-gray-100 btn-xs">
            Make Admin
          </button>
        </th>
      </tr>
    </>
  );
};

export default MakeAdminUser;
