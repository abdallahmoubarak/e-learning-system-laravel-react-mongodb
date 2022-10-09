import { useState } from "react";
import Select from "../Select";
import Button from "../Button";
import Table from "../Table";
import Modal from "../Modal";
import { useFetchUsers } from "../../hooks/useUserData";
import { useFetchCourses } from "../../hooks/useCoursesData";
import filter from "../../util/search";
import Add from "../Add";
let rows = [];

export default function Admin() {
  const [openModal, setOpenModal] = useState(false);
  const [selected, setSelected] = useState("");
  const [search, setSearch] = useState("");
  const [defaultValues, setDefaultValues] = useState();
  const { data: instructors } = useFetchUsers("Instructor");
  const { data: students } = useFetchUsers("Student");
  const { data: courses } = useFetchCourses();

  if (selected === "" && students && instructors) {
    rows = instructors?.concat(students);
  }
  if (selected === "Instructors" && instructors) rows = instructors;
  if (selected === "Students" && students) rows = students;
  if (selected === "Courses" && courses) rows = courses;
  if (rows[0] && !!search) rows = filter(rows, search, searchFields);

  const handleEditClick = (user) => {
    setDefaultValues("");
    setOpenModal(true);
    setDefaultValues(user);
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
        />
      </div>
      <Table
        header={selected === "Courses" ? courseHeader : header}
        rows={rows}
        handleEditClick={handleEditClick}
        handleViewClick={handleViewClick}
      />
      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
        content={<Add instructors={instructors} setOpenModal={setOpenModal} />}
      />
    </div>
  );
}

const header = ["Type", "Code", "Name", "Email", "Phone"];
const courseHeader = ["Type", "Code", "Name", "Instructor", "Status"];
const selectOptions = ["Students", "Instructors", "Courses"];
const searchFields = ["Code", "Name", "Instructor", "Status"];
