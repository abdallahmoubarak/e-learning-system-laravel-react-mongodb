import { useMutation, useQuery, useQueryClient } from "react-query";
import { request } from "../util/axios-utils";
import { v4 as uuid } from "uuid";

const addCourse = (course) => {
  const id = uuid();
  const code = "CS229101";
  const status = "active";
  course = { id, code, ...course, status };
  return request({ url: "/courses", data: course, method: "post" });
};

export const useFetchCourses = () => {
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
