export default function Logout({ auth, setAuth }) {
  const logOut = (setAuth) => {
    localStorage.removeItem("JWT");
    localStorage.removeItem("User");
    setAuth(false);
  };

  return (
    <>
      {auth && (
        <div className="logout" onClick={() => logOut(setAuth)}>
          Log out
        </div>
      )}
    </>
  );
}
