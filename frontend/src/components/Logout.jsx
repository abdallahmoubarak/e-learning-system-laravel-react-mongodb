export default function Logout({ currentUser }) {
  const logOut = () => {
    localStorage.removeItem("JWT");
  };

  return (
    <>
      {currentUser && (
        <>
          <div className="greating">Hello, {currentUser.name}</div>
          <div className="logout" onClick={() => logOut()}>
            Log out
          </div>
        </>
      )}
    </>
  );
}
