import { useMutation, useQuery, useQueryClient } from "react-query";
import { request } from "../util/axiosInstance";

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

const addCourse = (course) => {
  return request({ url: "/courses", data: course, method: "post" });
};

export const useAddCourse = () => {
  const queryClient = useQueryClient();
  return useMutation(addCourse, {
    onSuccess: () => {
      queryClient.invalidateQueries(["courses"]);
    },
  });
};

const addAssignment = (assignment) => {
  return request({
    url: "/courses/assignments",
    data: assignment,
    method: "post",
  });
};

export const useAddAssignment = () => {
  const queryClient = useQueryClient();
  return useMutation(addAssignment, {
    onSuccess: () => {
      queryClient.invalidateQueries(["courses"]);
    },
  });
};

const addAnnouncement = (announcement) => {
  return request({
    url: "/courses/announcements",
    data: announcement,
    method: "post",
  });
};

export const useAddAnnouncement = () => {
  const queryClient = useQueryClient();
  return useMutation(addAnnouncement, {
    onSuccess: () => {
      queryClient.invalidateQueries(["courses"]);
    },
  });
};
