import { useState } from "react";
import AddEdit from "../AddEdit";
import Button from "../Button";
import Table from "../Table";
import Modal from "../Modal";

export default function Admin() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="admin-container">
        <div className="search-container">
          <input className="search" placeholder="Search" />
          <Button text={"Add"} onClick={() => setOpenModal(true)} />
        </div>
        <Table header={header} rows={rows} />
        <Modal
          openModal={openModal}
          setOpenModal={setOpenModal}
          content={<AddEdit />}
        />
      </div>
      <style jsx>{`
        .admin-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .search-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 1rem;
        }
        .search {
          padding: 0.6rem 3rem;
          border-radius: 0.4rem;
          font-size: 1.2rem;
          border: 1px solid gray;
          min-width: 40vw;
          flex: 1 1;
        }
      `}</style>
    </>
  );
}

const header = ["Type", "Code", "Name", "Email", "Phone"];

const rows = [
  { Type: "Student", Code: "he", Name: "ho" },
  { Type: "Instructor", Code: "12sdfa" },
  { Type: "Course", Code: "12sdfa" },
];
