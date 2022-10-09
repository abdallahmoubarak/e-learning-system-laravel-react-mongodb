import Select, { SpecialSelect } from "./Select";
import Input from "./Input";
import { useState } from "react";
import Button from "./Button";
import { useAddUser } from "../hooks/useUserData";
import {
  useAddAnnouncement,
  useAddAssignment,
  useAddCourse,
} from "../hooks/useCoursesData";

export default function Add({ instructors, setOpenModal, options }) {
  const [selected, setSelected] = useState("Student");
  const [instructor, setInstructor] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [due, setDue] = useState("");
  const { mutate: addStudent } = useAddUser("Student");
  const { mutate: addInstructor } = useAddUser("Instructor");
  const { mutate: addCourse } = useAddCourse();
  const { mutate: addAssignment } = useAddAssignment();
  const { mutate: addAnnouncement } = useAddAnnouncement();

  return (
    <div className="add-edit-container">
      <Select
        name={"Type"}
        options={options}
        setSelected={setSelected}
        selected={selected}
        noDefault={true}
      />
      {(selected === "Student" ||
        selected === "Instructor" ||
        selected === "Course") && (
        <>
          <Input name={"Name"} value={name} setValue={setName} />
        </>
      )}
      {(selected === "Student" || selected === "Instructor") && (
        <>
          <Input name={"Email"} value={email} setValue={setEmail} />
          <Input name={"Phone"} value={phone} setValue={setPhone} />
        </>
      )}
      <>
        {selected === "Course" && (
          <SpecialSelect
            name="Instructor"
            options={instructors}
            selected={instructor}
            setSelected={setInstructor}
          />
        )}
      </>
      {(selected === "Announcement" || selected === "Assignment") && (
        <>
          <Input name={"Title"} value={title} setValue={setTitle} />
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </>
      )}
      {selected === "Assignment" && (
        <Input name={"Due"} value={due} setValue={setDue} type={"date"} />
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
          selected === "Assignment" && addAssignment({ title, content, due });
          selected === "Announcement" && addAnnouncement({ title, content });
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
