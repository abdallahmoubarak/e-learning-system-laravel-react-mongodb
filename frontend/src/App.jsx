import { useState } from "react";
import Logo from "./components/Logo";
import Admin from "./components/pages/Admin";
import Sign from "./components/pages/Sign";
import "./app.css";

function App() {
  const [auth, setAuth] = useState(false);

  return (
    <>
      <div className={`sign ${auth && "sign-done"}`}>
        <Sign auth={auth} setAuth={setAuth} />
        <Logo />
      </div>
      {auth && (
        <div className={`app-body appear`}>
          <Admin />
        </div>
      )}
    </>
  );
}

export default App;
