import React, { useId } from "react";

export default function Input({ name, value, setValue, type }) {
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
          type={type || "text"}
          onChange={(e) => setValue(e.target.value)}
        />
        <label htmlFor={id}>{name}</label>
      </div>
    </>
  );
}
