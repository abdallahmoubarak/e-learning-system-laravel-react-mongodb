import { useEffect, useState } from "react";
import Select from "../Select";
import Table from "../Table";
import { useFetchCourses } from "../../hooks/useCoursesData";
import filter from "../../util/search";
import { filterSelected } from "../../util/filterSelected";
let rows = [];

export default function Student() {
  const [selected, setSelected] = useState("Courses");
  const [header, setHeader] = useState(["Type", "Code", "Name", "Status"]);
  const [search, setSearch] = useState("");
  const { data: courses } = useFetchCourses();

  useEffect(() => {
    selected === "Courses" && setHeader(["Type", "Code", "Name", "Status"]);
    selected === "Assignments" &&
      setHeader(["Course_Name", "Type", "Title", "Content", "Due"]);
    selected === "Announcements" &&
      setHeader(["Course_Name", "Type", "Title", "Content"]);
  }, [selected]);

  if (courses) rows = filterSelected(selected, courses);
  if (rows[0] && !!search) rows = filter(rows, search, searchFields);

  const handleViewClick = (user) => {
    console.log(user);
  };

  return (
    <div className="admin-container">
      <div className="search-container">
        <input
          className="search"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Select
          name={"Type"}
          options={selectOptions}
          selected={selected}
          setSelected={setSelected}
          noDefault={true}
        />
      </div>
      <Table
        header={selected === "Courses" ? courseHeader : header}
        rows={rows}
        handleViewClick={handleViewClick}
      />
    </div>
  );
}

const courseHeader = ["Type", "Code", "Name", "Instructor", "Status"];
const selectOptions = ["Courses", "Assignments", "Announcements"];
const searchFields = ["Code", "Course_Name", "Name", "Instructor", "Status"];
