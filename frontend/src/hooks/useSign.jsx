import { useMutation } from "react-query";
import { request } from "../util/axios-utils";
import { v4 as uuid } from "uuid";

const signUp = (user) => {
  const id = uuid();
  user = { id, ...user };
  return request({ url: "/users1", data: user, method: "post" });
};

export const useSignUp = (setAuth, setMsg) => {
  return useMutation(signUp, {
    onSuccess: (res) => {
      localStorage.setItem("JWT", res.data?.authorisation?.token);
      localStorage.setItem("User", JSON.stringify(res.data?.user));
      setAuth(true);
    },
    onError: (err) => {
      setMsg(err.message);
      setAuth(false);
    },
  });
};

const signIn = (user) => {
  return request({ url: "/users", data: user, method: "post" });
};

export const useSignIn = (setAuth, setMsg) => {
  return useMutation(signIn, {
    onSuccess: (res) => {
      console.log(res);
      localStorage.setItem("JWT", res.data?.authorisation?.token);
      localStorage.setItem("User", JSON.stringify(res.data?.user));
      setAuth(true);
    },
    onError: () => {
      setMsg("Your Email/Password dosn't match");
      setAuth(false);
    },
  });
};
