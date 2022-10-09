import "./app.css";
import { useState } from "react";
import Admin from "./components/pages/Admin";
import SignPage from "./components/pages/SignPage";

function App() {
  const [auth, setAuth] = useState(true);
  return (
    <>
      <SignPage auth={auth} setAuth={setAuth} />
      {auth && (
        <div className={`app-body`}>
          <Admin />
        </div>
      )}
    </>
  );
}

export default App;
