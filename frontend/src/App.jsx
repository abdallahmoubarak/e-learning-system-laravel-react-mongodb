import "./app.css";
import { useState } from "react";
import Admin from "./components/pages/Admin";
import Instructor from "./components/pages/Instructor";
import SignPage from "./components/pages/SignPage";
import Student from "./components/pages/Student";
import { useEffect } from "react";

function App() {
  const [auth, setAuth] = useState(true);
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    setAuth(!!localStorage.getItem("JWT"));
    !!localStorage.getItem("User") &&
      setCurrentUser(JSON.parse(localStorage.getItem("User")));
  }, []);

  return (
    <>
      <SignPage auth={auth} setAuth={setAuth} />
      {auth && (
        <div className={`app-body`}>
          {currentUser.type === "Admin" && <Admin />}
          {currentUser.type === "Instructor" && <Instructor />}
          {currentUser.type === "Student" && <Student />}
        </div>
      )}
    </>
  );
}

export default App;
