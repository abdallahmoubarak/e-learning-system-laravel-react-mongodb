import React, { useId } from "react";

export default function Select({ name, options, selected, setSelected }) {
  const id = useId();

  return (
    <>
      <div className="input-container">
        <select
          className="input"
          id={id}
          onChange={(e) => setSelected(e.target.value)}
          value={selected || `Select A ${name}`}>
          {options.map((option, i) => (
            <option key={i}>{option}</option>
          ))}
        </select>
        <label htmlFor={id}>{name}</label>
      </div>
    </>
  );
}
