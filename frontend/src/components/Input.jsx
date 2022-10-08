import React, { useId } from "react";

export default function Input({ name, value, pass }) {
  const id = useId();
  return (
    <>
      <div className="input-container">
        <input
          className="input"
          autocomplete="off"
          id={id}
          placeholder={name}
          value={value}
          type={pass ? "password" : "text"}
        />
        <label For={id}>{name}</label>
      </div>
    </>
  );
}
