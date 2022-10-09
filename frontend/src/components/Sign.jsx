import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Select from "./Select";

export default function Sign({ auth, setAuth }) {
  const [signup, setSignUp] = useState(true);
  const [selected, setSelected] = useState("");

  const handleSignClick = (signType, setAuth) => {
    if (signType === "signin") {
      setAuth(true);
    } else {
      alert("noooo");
    }
  };

  return (
    <>
      {!auth && (
        <div className="sign-container">
          <h1>{signup ? "Sign Up" : "Sign In"}</h1>
          <div className="inputs-container">
            {signup && <Input name="Name" />}
            <Input name="Email" />
            <Input name="Password" pass={true} />
            {signup && (
              <Select
                name="Type"
                options={["Student", "Instructor", "Admin"]}
                setSelected={setSelected}
                selected={selected}
              />
            )}
          </div>
          <div className="switch" onClick={() => setSignUp(!signup)}>
            {signup ? "I already have an account" : "I don't have an account"}
          </div>
          <Button
            text={signup ? "Sign Up" : "Sign In"}
            onClick={() =>
              handleSignClick(signup ? "signup" : "signin", setAuth)
            }
          />
        </div>
      )}
    </>
  );
}
