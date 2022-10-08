import { useState } from "react";
import Button from "../Button";
import Input from "../Input";

export default function Sign() {
  const [signup, setSignUp] = useState(true);
  return (
    <>
      <div className="sign-container">
        <h1>Sign Up</h1>
        <div className="inputs-container">
          <Input name="Name" />
          <Input name="Email" />
          <Input name="Password" pass={true} />
        </div>
        <div className="switch" onClick={() => setSignUp(!signup)}>
          {signup ? "I already have an account" : "I don't have an account"}
        </div>
        <Button text={signup ? "Sign Up" : "Sign In"} />
      </div>

      <style jsx>{`
        h1 {
          width: 100%;
          font-size: 2.4rem;
        }
        .sign-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          max-width: 26rem;
          margin: auto;
          padding-top: 3rem;
          color: white;
        }
        .inputs-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 1rem;
          gap: 1rem;
          width: 100%;
          padding: 2rem 0;
          padding-bottom: 3rem;
        }
        .switch {
          cursor: pointer;
          text-decoration: underline;
          padding: 0.2rem;
        }
      `}</style>
    </>
  );
}