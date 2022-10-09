import "./app.css";
import { useState } from "react";
import Admin from "./components/pages/Admin";
import Instructor from "./components/pages/Instructor";
import SignPage from "./components/pages/SignPage";
import Student from "./components/pages/Student";

function App() {
  const [auth, setAuth] = useState(true);
  return (
    <>
      <SignPage auth={auth} setAuth={setAuth} />
      {auth && (
        <div className={`app-body`}>
          {/* <Admin /> */}
          {/* <Instructor /> */}
          <Student />
        </div>
      )}
    </>
  );
}

export default App;
