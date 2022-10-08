import { useMutation, useQuery, useQueryClient } from "react-query";
import { request } from "../util/axios-utils";

const addCourse = (course) => {
  return request({ url: "/courses", data: course, method: "post" });
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
