import { useMutation, useQuery } from "react-query";
import { client } from "..";
import { authApi } from "../util/axiosInstance";

const getUsers = async (type) => {
  const res = await authApi.get(`/users/${type}`);
  return res.data?.data;
};

export const useFetchUsers = (type) => {
  return useQuery(type, () => getUsers(type), {
    refetchOnWindowFocus: false,
  });
};

const addUser = (user) => {
  return authApi({ url: "/users", data: user, method: "POST" }).then(
    (res) => res.data,
  );
};

export const useAddUser = () => {
  return useMutation({
    mutationFn: (user) => addUser(user),
    onSuccess: (data) => {
      client.invalidateQueries("instructors");
      client.invalidateQueries("students");
    },
  });
};
