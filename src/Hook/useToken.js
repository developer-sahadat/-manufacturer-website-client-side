import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const email = user?.user?.email;
    const name = user?.user?.displayName;
    const image = user?.user?.photoURL;

    const correctUser = { email: email, name: name, image: image };
    if (email) {
      fetch(` https://fathomless-temple-10901.herokuapp.com/user/${email}`, {
        method: "PUT",
        body: JSON.stringify(correctUser),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((result) => {
          const accessToken = result?.token;
          localStorage.setItem("accessToken", accessToken);
          setToken(accessToken);
        });
    }
  }, [user]);

  return [token, setToken];
};

export default useToken;
