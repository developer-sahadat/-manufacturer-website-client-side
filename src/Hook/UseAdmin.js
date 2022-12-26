import { useEffect, useState } from "react";

const UseAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);
  useEffect(() => {
    const email = user?.email;
    fetch(`https://construction-tools.onrender.com/admin/${email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setAdmin(result.admin);
        setAdminLoading(false);
      });
  }, [user]);
  return [admin, adminLoading];
};

export default UseAdmin;
