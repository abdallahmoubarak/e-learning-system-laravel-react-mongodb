import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";

const fetchAllData = () => {
  return axios.get("http://localhost:4000/instructors");
};

const addInstructor = (instructor) => {
  return axios.post("http://localhost:4000/instructors", instructor);
};

export const useInstructorsData = () => {
  return useQuery("instructors", fetchAllData, {
    select: (data) => {
      const instructors = data.data.map((instructor) => {
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
