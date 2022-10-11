import { QueryClient, useMutation } from "react-query";
import { request } from "../util/axiosInstance";

const signUp = (user) => {
  return request({ url: "/sign/signup", data: user, method: "post" });
};

export const useSignUp = (setMsg) => {
  return useMutation(signUp, {
    onSuccess: (res) => {
      QueryClient.setQueryData("JWT", res.data?.authorisation?.token);
      QueryClient.setQueryData("User", res.data?.user);
    },
    onError: (err) => {
      setMsg(err.message);
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
