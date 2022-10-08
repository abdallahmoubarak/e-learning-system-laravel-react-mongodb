import { useMutation, useQuery, useQueryClient } from "react-query";
import { request } from "../util/axios-utils";

const addStudent = (student) => {
  return request({ url: "/students", data: student, method: "post" });
};

export const useStudentsData = () => {
  return useQuery("students", {
    select: (data) => {
      return data?.map((student) => {
        return { ...student, type: "Student" };
      });
    },
  });
};

export const useAddStudent = () => {
  const queryClient = useQueryClient();
  return useMutation(addStudent, {
    onSuccess: () => {
      queryClient.invalidateQueries(["students"]);
    },
  });
};
