import { useMutation, useQuery, useQueryClient } from "react-query";
import { request } from "../util/axios-utils";
import { v4 as uuid } from "uuid";

const addUser = (user) => {
  const id = uuid();
  const code = "122109";
  user = { id, code, ...user };
  return request({ url: "/users", data: user, method: "post" });
};

export const useFetchUsers = (type) => {
  return useQuery(`users?type=${type}`, {
    select: (data) => {
      return data;
    },
  });
};

export const useAddUser = (type) => {
  const queryClient = useQueryClient();
  return useMutation(addUser, {
    onSuccess: () => {
      queryClient.invalidateQueries([`users?type=${type}`]);
    },
  });
};
