import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";

const addInstructor = (instructor) => {
  return axios.post("http://localhost:4000/instructors", instructor);
};

export const useInstructorsData = () => {
  return useQuery("instructors", {
    select: (data) => {
      const instructors = data?.map((instructor) => {
        return { ...instructor, type: "Instructor" };
      });
      return instructors;
    },
  });
};

export const useAddInstructor = () => {
  const queryClient = useQueryClient();
  return useMutation(addInstructor, {
    onSuccess: () => {
      queryClient.invalidateQueries(["instructors"]);
    },
  });
};
