import { useState } from "react";
import Select from "../Select";
import Button from "../Button";
import Table from "../Table";
import Modal from "../Modal";
import Add from "../Add";
import filter from "../../util/search";
import { useFetchUsers } from "../../hooks/useUserData";
import { useFetchCourses } from "../../hooks/useCoursesData";
let rows = [];

export default function Admin() {
  const [openModal, setOpenModal] = useState(false);
  const [selected, setSelected] = useState("Students");
  const [search, setSearch] = useState("");
  const { data: instructors } = useFetchUsers("Instructor");
  const { data: students } = useFetchUsers("Student");
  const { data: courses } = useFetchCourses();

  if (selected === "Instructors" && instructors) rows = instructors;
  if (selected === "Students" && students) rows = students;
  if (selected === "Courses" && courses) rows = courses;
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
        handleEditClick={handleEditClick}
        handleViewClick={handleViewClick}
        canEdit={true}
      />
      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <Add
          instructors={instructors}
          setOpenModal={setOpenModal}
          options={addOptions}
        />
      </Modal>
    </div>
  );
}

const header = ["Type", "Code", "Name", "Email", "Phone"];
const courseHeader = ["Type", "Code", "Name", "Instructor", "Status"];
const selectOptions = ["Students", "Instructors", "Courses"];
const searchFields = ["Code", "Name", "Instructor", "Status"];
const addOptions = ["Student", "Instructor", "Course"];
