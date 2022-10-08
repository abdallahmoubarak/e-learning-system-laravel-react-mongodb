import Select from "./Select";
import Input from "./Input";
import { useState } from "react";
import Button from "./Button";

export default function AddEdit({
  instructors,
  setOpenModal,
  handleAddInstructorClick,
  handleAddStudentClick,
  handleAddCourseClick,
}) {
  const [selected, setSelected] = useState();
  const [instructor, setInstructor] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

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
            selected === "Instructor" &&
              handleAddInstructorClick({ name, email, phone });
            selected === "Student" &&
              handleAddStudentClick({ name, email, phone });
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
