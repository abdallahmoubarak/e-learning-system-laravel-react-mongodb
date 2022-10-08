import Select from "./Select";
import Input from "./Input";
import { useState } from "react";
import Button from "./Button";

export default function AddEdit() {
  const [selected, setSelected] = useState();
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
        <Input name={"Name"} />
        {selected !== "Course" && (
          <>
            <Input name={"Email"} />
            <Input name={"Phone"} />
          </>
        )}
        <Button text="Add" dark={true} />
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
