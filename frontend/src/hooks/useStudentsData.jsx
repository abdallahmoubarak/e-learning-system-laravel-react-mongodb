import { useQuery } from "react-query";
import axios from "axios";

const fetchAllData = () => {
  return axios.get("http://localhost:4000/students");
};

export const useStudentsData = () => {
  return useQuery("students", fetchAllData, {
    select: (data) => {
      return data.data.map((student) => {
        return { ...student, type: "Student" };
      });
    },
  });
};
