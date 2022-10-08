import Input from "../Input";

export default function Sign() {
  return (
    <>
      <div className="sign-container">
        <h1>Sign Up</h1>
        <div className="inputs-container">
          <Input name="Name" />
          <Input name="Email" />
          <Input name="Password" pass={true} />
        </div>
      </div>

      <style jsx>{`
        .sign-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          max-width: 30rem;
          margin: auto;
          padding-top: 3rem;
          color: white;
        }
        .inputs-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          width: 100%;
          padding: 2rem 0;
        }
      `}</style>
    </>
  );
}
