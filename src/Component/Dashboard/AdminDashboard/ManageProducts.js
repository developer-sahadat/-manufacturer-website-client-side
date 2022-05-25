import { signOut } from "firebase/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../../../FirebaseInit/FirebaseInit";
import LoadingSpinner from "../../Shear/LoadingSpinner";
import ManageProduct from "./ManageProduct";

const ManageProducts = () => {
  let navigate = useNavigate();

  const { data, isLoading, refetch } = useQuery(["services"], () =>
    fetch(`http://localhost:5000/services`, {
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
    <div>
      <div class="overflow-x-auto z-0 w-full">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Product</th>
              <th>Image</th>
              <th>Title</th>

              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((service, index) => (
              <ManageProduct
                service={service}
                index={index}
                refetch={refetch}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
