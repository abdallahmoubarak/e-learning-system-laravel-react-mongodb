import { useMutation, useQuery, useQueryClient } from "react-query";
import axios from "axios";

const addStudent = (student) => {
  return axios.post("http://localhost:4000/students", student);
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
