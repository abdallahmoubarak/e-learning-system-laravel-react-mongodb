import { useMutation, useQuery, useQueryClient } from "react-query";
import { authApi, request } from "../util/axiosInstance";

const getCourses = () => {
  return authApi.get("courses").then((res) => res.data?.data);
};

export const useFetchCourses = () => {
  return useQuery({
    queryFn: () => getCourses(),
    queryKey: "courses",
    refetchOnWindowFocus: false,
  });
};

const addCourse = (course) => {
  return authApi({ url: "/courses", data: course, method: "POST" });
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
