import { useState } from "react";
import { useSignIn, useSignUp } from "../hooks/useSign";
import Button from "./Button";
import Input from "./Input";
import Select from "./Select";

export default function Sign({ auth, setAuth }) {
  const [signup, setSignUp] = useState(true);
  const [selected, setSelected] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [phone, setPhone] = useState("");
  const { mutate: signUp } = useSignUp();
  const { mutate: signIn } = useSignIn();

  const handleSignClick = (signType) => {
    if (signType === "signin") {
      signIn({ email, pass });
      setAuth(true);
    } else {
      signUp({ type: selected, name, email, pass, phone });
      setAuth(true);
    }
  };

  return (
    <>
      {!auth && (
        <div className="sign-container">
          <h1>{signup ? "Sign Up" : "Sign In"}</h1>
          <div className="inputs-container">
            {signup && <Input name="Name" value={name} setValue={setName} />}
            <Input name="Email" value={email} setValue={setEmail} />
            <Input
              name="Password"
              pass={true}
              value={pass}
              setValue={setPass}
            />
            <Input name="Phone" value={phone} setValue={setPhone} />
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
            onClick={() => handleSignClick(signup ? "signup" : "signin")}
          />
        </div>
      )}
    </>
  );
}
