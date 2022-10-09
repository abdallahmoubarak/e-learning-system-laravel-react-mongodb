import { useMutation } from "react-query";
import { request } from "../util/axios-utils";
import { v4 as uuid } from "uuid";

const signUp = (user) => {
  const id = uuid();
  user = { id, ...user };
  return request({ url: "/users", data: user, method: "post" });
};

export const useSignUp = () => {
  return useMutation(signUp, {
    onSuccess: () => {
      localStorage.setItem("JWT", "");
    },
  });
};

const signIn = (user) => {
  return request({ url: "/users", data: user, method: "post" });
};

export const useSignIn = () => {
  return useMutation(signIn, {
    onSuccess: () => {
      localStorage.setItem("JWT", "");
    },
  });
};
