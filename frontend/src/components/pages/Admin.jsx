import { useState } from "react";
import AddEdit from "../AddEdit";
import Button from "../Button";
import Table from "../Table";
import Modal from "../Modal";
import { useQuery } from "react-query";
import axios from "axios";

export default function Admin() {
  const [openModal, setOpenModal] = useState(false);

  const { isLoading, data } = useQuery("admins", () =>
    axios.get("http://localhost:4000/admins"),
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(data.data);

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
      <style jsx="true">{`
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
