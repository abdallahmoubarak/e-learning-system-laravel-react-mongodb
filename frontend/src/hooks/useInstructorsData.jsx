import { useQuery, useMutation, useQueryClient } from "react-query";
import { request } from "../util/axios-utils";

const addInstructor = (instructor) => {
  return request({ url: "/instructors", data: instructor, method: "post" });
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
