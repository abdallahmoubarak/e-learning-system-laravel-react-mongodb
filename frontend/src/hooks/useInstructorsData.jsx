import { useQuery } from "react-query";
import axios from "axios";

const fetchAllData = () => {
  return axios.get("http://localhost:4000/instructors");
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
