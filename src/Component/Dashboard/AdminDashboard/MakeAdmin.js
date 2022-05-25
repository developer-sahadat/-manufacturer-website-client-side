import { signOut } from "firebase/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../../../FirebaseInit/FirebaseInit";
import LoadingSpinner from "../../Shear/LoadingSpinner";
import MakeAdminUser from "./Analysis/MakeAdminUser";

const MakeAdmin = () => {
  let navigate = useNavigate();

  const { data, isLoading, refetch } = useQuery(["user"], () =>
    fetch(`http://localhost:5000/user`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      if (res.status === 401 || res.status === 403) {
        navigate("/");
        signOut(auth);
      }

      return res.json();
    })
  );

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="z-0">
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>

              <th>Make Admin</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => (
              <MakeAdminUser
                refetch={refetch}
                index={index}
                user={user}
                key={user?._id}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;
