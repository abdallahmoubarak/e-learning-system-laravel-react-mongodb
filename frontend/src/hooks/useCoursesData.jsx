import { useMutation, useQuery, useQueryClient } from "react-query";
import axios from "axios";

const addCourse = (course) => {
  return axios.post("http://localhost:4000/courses", course);
};

export const useCoursesData = () => {
  return useQuery("courses", {
    select: (data) => {
      const courses = data?.map((course) => {
        return { ...course, type: "Course" };
      });
      return courses;
    },
  });
};

export const useAddCourse = () => {
  const queryClient = useQueryClient();
  return useMutation(addCourse, {
    onSuccess: () => {
      queryClient.invalidateQueries(["courses"]);
    },
  });
};
