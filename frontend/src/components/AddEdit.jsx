import Select from "./Select";
import Input from "./Input";
import { useState } from "react";
import Button from "./Button";
import { useAddUser } from "../hooks/useUserData";
import { useAddCourse } from "../hooks/useCoursesData";
import { v4 as uuid } from "uuid";

export default function AddEdit({ instructors, setOpenModal }) {
  const [selected, setSelected] = useState();
  const [instructor, setInstructor] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const { mutate: addStudent } = useAddUser("Student");
  const { mutate: addInstructor } = useAddUser("Instructor");
  const { mutate: addCourse } = useAddCourse();

  const handleAddUserClick = ({ type, name, email, phone }) => {
    const id = uuid();
    const code = "122109";
    const user = { id, type, code, name, email, phone };
    type === "Student" && addStudent(user);
    type === "Instructor" && addInstructor(user);
  };

  const handleAddCourseClick = ({ name, instructor }) => {
    const id = uuid();
    const code = "CS229101";
    const status = "active";
    const course = { id, code, name, instructor, status };
    addCourse(course);
  };

  return (
    <>
      <div className="add-edit-container">
        <div>Add a student, instructor, or course</div>
        <Select
          name={"Type"}
          options={options}
          setSelected={setSelected}
          selected={selected}
        />
        <Input name={"Name"} value={name} setValue={setName} />
        {selected !== "Course" && (
          <>
            <Input name={"Email"} value={email} setValue={setEmail} />
            <Input name={"Phone"} value={phone} setValue={setPhone} />
          </>
        )}
        {selected === "Course" && (
          <Select
            name="Instructor"
            options={instructors}
            selected={instructor}
            setSelected={setInstructor}
          />
        )}
        <Button
          text="Add"
          dark={true}
          onClick={() => {
            selected === "Instructor" ||
              ("Student" &&
                handleAddUserClick({ type: selected, name, email, phone }));
            selected === "Course" && handleAddCourseClick({ name, instructor });
            setName("");
            setEmail("");
            setPhone("");
            setInstructor("");
            setOpenModal(false);
          }}
        />
      </div>
      <style jsx="true">{`
        .add-edit-container {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
      `}</style>
    </>
  );
}
const options = ["Student", "Instructor", "Course"];
