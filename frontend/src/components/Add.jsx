import Select, { SpecialSelect } from "./Select";
import Input from "./Input";
import { useState } from "react";
import Button from "./Button";
import { useAddUser } from "../hooks/useUserData";
import { useAddCourse } from "../hooks/useCoursesData";

export default function Add({ instructors, setOpenModal }) {
  const [selected, setSelected] = useState("");
  const [instructor, setInstructor] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const { mutate: addStudent } = useAddUser("Student");
  const { mutate: addInstructor } = useAddUser("Instructor");
  const { mutate: addCourse } = useAddCourse();

  return (
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
        <SpecialSelect
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
          selected === "Student" &&
            addStudent({ type: selected, name, email, phone });
          selected === "Instructor" &&
            addInstructor({ type: selected, name, email, phone });
          selected === "Course" && addCourse({ name, instructor });

          setName("");
          setEmail("");
          setPhone("");
          setInstructor("");
          setOpenModal(false);
        }}
      />
    </div>
  );
}
const options = ["Student", "Instructor", "Course"];
