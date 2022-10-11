import { useMutation, useQuery } from "react-query";
import { client } from "..";
import { authApi, request } from "../util/axiosInstance";

const signUp = (user) => {
  return request({ url: "/sign/signup", data: user, method: "post" });
};

export const useSignUp = (setMsg) => {
  return useMutation(signUp, {
    onSuccess: (res) => {
      authApi.defaults.headers["Content-Type"] = "application/json";
      authApi.defaults.headers.common.Authorization = `Bearer ${res.data?.authorisation?.token}`;
      localStorage.setItem("JWT", res.data?.authorisation?.token);
      client.setQueryData("User", res.data?.user);
    },
    onError: (err) => {
      setMsg(err.message);
    },
  });
};

const signIn = (user) => {
  return request({ url: "/sign/signin", data: user, method: "post" });
};

export const useSignIn = (setMsg) => {
  return useMutation(signIn, {
    onSuccess: (res) => {
      authApi.defaults.headers["Content-Type"] = "application/json";
      authApi.defaults.headers.common.Authorization = `Bearer ${res.data?.authorisation?.token}`;
      localStorage.setItem("JWT", res.data?.authorisation?.token);
      client.setQueryData("User", res.data?.user);
    },
    onError: () => {
      setMsg("Your Email/Password dosn't match");
    },
  });
};

const getUser = () => {
  return authApi.get("/users/current").then((res) => res.data?.data);
};

export const useCurrentUser = () => {
  return useQuery({
    queryKey: "User",
    queryFn: () => getUser(),
    refetchOnWindowFocus: false,
  });
};
