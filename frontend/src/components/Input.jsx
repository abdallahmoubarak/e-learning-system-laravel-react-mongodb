import React, { useId } from "react";

export default function Input({ name, value, pass }) {
  const id = useId();
  return (
    <>
      <div className="input-container">
        <input
          className="input"
          autoComplete="off"
          id={id}
          placeholder={name}
          value={value}
          type={pass ? "password" : "text"}
        />
        <label htmlFor={id}>{name}</label>
      </div>
    </>
  );
}
