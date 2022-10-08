import { useState } from "react";
import "./app.css";
import Logo from "./components/Logo";
import Sign from "./components/pages/Sign";

function App() {
  const [auth, setAuth] = useState(true);

  return (
    <div className={`sign ${!auth && "sign-done"}`}>
      <Sign auth={auth} setAuth={setAuth} />
      <Logo />
    </div>
  );
}

export default App;
