import { client } from "..";
import { authApi } from "../util/axiosInstance";

export default function Logout({ currentUser }) {
  const logOut = () => {
    localStorage.removeItem("JWT");
    authApi.defaults.headers.Authorization = null;
    client.setQueryData(["User"], null);
  };

  return (
    <>
      {currentUser && (
        <>
          <div className="greating">Hello, {currentUser.name}</div>
          <div className="logout" onClick={logOut}>
            Log out
          </div>
        </>
      )}
    </>
  );
}
