import { useQuery } from "react-query";
import axios from "axios";

const fetchAllData = () => {
  return axios.get("http://localhost:4000/courses");
};

export const useCoursesData = () => {
  return useQuery("courses", fetchAllData, {
    select: (data) => {
      const courses = data.data.map((instructor) => {
        return { ...instructor, type: "Course" };
      });
      return courses;
    },
  });
};
