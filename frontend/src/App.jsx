import "./app.css";
import Admin from "./components/pages/Admin";
import Instructor from "./components/pages/Instructor";
import SignPage from "./components/pages/SignPage";
import Student from "./components/pages/Student";
import { useCurrentUser } from "./hooks/useSign";

function App() {
  const { data: currentUser, isLoading } = useCurrentUser();

  return (
    <>
      {isLoading ? (
        <div className="fill-back"></div>
      ) : (
        <SignPage currentUser={currentUser} />
      )}
      {Boolean(currentUser) && (
        <div className="app-body">
          {currentUser.type === "Admin" && <Admin />}
          {currentUser.type === "Instructor" && <Instructor />}
          {currentUser.type === "Student" && <Student />}
        </div>
      )}
    </>
  );
}

export default App;
