import React, { useId } from "react";

export default function Input({ name, value, setValue, pass }) {
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
          onChange={(e) => setValue(e.target.value)}
        />
        <label htmlFor={id}>{name}</label>
      </div>
    </>
  );
}
