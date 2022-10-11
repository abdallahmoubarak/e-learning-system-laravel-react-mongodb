import { useState, useEffect } from "react";
import Select from "../Select";
import Button from "../Button";
import Table from "../Table";
import Modal from "../Modal";
import Add from "../Add";
import filter from "../../util/search";
import { useFetchUsers } from "../../hooks/useUserData";
import { useFetchCourses } from "../../hooks/useCoursesData";
import { filterSelected } from "../../util/filterSelected";
let rows = [];

export default function Instructor() {
  const [openModal, setOpenModal] = useState(false);
  const [selected, setSelected] = useState("Courses");
  const [header, setHeader] = useState(["Type", "Code", "Name", "Status"]);
  const [search, setSearch] = useState("");
  const { data: students } = useFetchUsers("Student");
  const { data: courses } = useFetchCourses();

  useEffect(() => {
    selected === "Courses" && setHeader(["Type", "Code", "Name", "Status"]);
    selected === "Students" &&
      setHeader(["Type", "Code", "Name", "Email", "Phone"]);
    selected === "Assignments" &&
      setHeader(["Course_Name", "Type", "Title", "Content", "Due"]);
    selected === "Announcements" &&
      setHeader(["Course_Name", "Type", "Title", "Content"]);
  }, [selected]);

  if (courses) rows = filterSelected(selected, courses);
  if (selected === "Students" && students) rows = students;
  if (rows[0] && !!search) rows = filter(rows, search, searchFields);

  const handleEditClick = (item) => {
    setOpenModal(true);
  };
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
        <Button text={"Add"} onClick={() => setOpenModal(true)} />
        <Select
          name={"Select"}
          options={selectOptions}
          selected={selected}
          setSelected={setSelected}
          noDefault={true}
        />
      </div>
      <Table
        header={header}
        rows={rows}
        handleEditClick={handleEditClick}
        handleViewClick={handleViewClick}
        canEdit={true}
      />
      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <Add setOpenModal={setOpenModal} options={addOptions} />
      </Modal>
    </div>
  );
}

const addOptions = ["Student", "Assignment", "Announcement"];
const selectOptions = ["Courses", "Students", "Assignments", "Announcements"];
const searchFields = ["Code", "Course_Name", "Name", "Content", "Title"];
