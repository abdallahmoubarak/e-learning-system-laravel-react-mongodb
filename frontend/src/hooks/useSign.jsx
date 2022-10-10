import { useMutation } from "react-query";
import { request } from "../util/axios-utils";

const signUp = (user) => {
  return request({ url: "/sign/signup", data: user, method: "post" });
};

export const useSignUp = (setAuth, setMsg) => {
  return useMutation(signUp, {
    onSuccess: (res) => {
      localStorage.setItem("JWT", res.data?.authorisation?.token);
      localStorage.setItem("User", JSON.stringify(res.data?.user));
      setAuth(res.data?.authorisation?.token);
    },
    onError: (err) => {
      setMsg(err.message);
      setAuth(false);
    },
  });
};

const signIn = (user) => {
  return request({ url: "/sign/signin", data: user, method: "post" });
};

export const useSignIn = (setAuth, setMsg) => {
  return useMutation(signIn, {
    onSuccess: (res) => {
      localStorage.setItem("JWT", res.data?.authorisation?.token);
      localStorage.setItem("User", JSON.stringify(res.data?.user));
      setAuth(res.data?.authorisation?.token);
    },
    onError: () => {
      setMsg("Your Email/Password dosn't match");
      setAuth(false);
    },
  });
};
