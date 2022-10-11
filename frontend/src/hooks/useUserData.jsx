import { useMutation, useQuery, useQueryClient } from "react-query";
import { authApi } from "../util/axiosInstance";

const getUser = (type) => {
  return authApi.get(`users/${type}`).then((res) => res.data);
};
export const useFetchUsers = (type) => {
  return useQuery(getUser(type), {
    select: (data) => {
      return data;
    },
  });
};

const addUser = (user) => {
  return authApi.post({ url: "/users", data: user });
};

export const useAddUser = (type) => {
  const queryClient = useQueryClient();
  return useMutation(addUser, {
    onSuccess: () => {
      queryClient.invalidateQueries([`users/${type}`]);
    },
  });
};
