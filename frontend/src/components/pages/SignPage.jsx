import Logout from "../Logout";
import Sign from "../Sign";
import Logo from "../Logo";

export default function SignPage({ auth, setAuth }) {
  return (
    <>
      <div className={`sign ${auth && "sign-done"}`}>
        <Sign auth={auth} setAuth={setAuth} />
        <Logo />
        <Logout auth={auth} setAuth={setAuth} />
      </div>
    </>
  );
}
