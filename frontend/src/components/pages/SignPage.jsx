import Logout from "../Logout";
import Sign from "../Sign";
import Logo from "../Logo";

export default function SignPage({ currentUser }) {
  return (
    <>
      <div className={`sign ${currentUser && "sign-done"}`}>
        <Sign currentUser={currentUser} />
        <Logo />
        <Logout currentUser={currentUser} />
      </div>
    </>
  );
}
