import React, { useId } from "react";

export default function Select({ name, options, selected, setSelected }) {
  const id = useId();

  return (
    <>
      <div className="input-container">
        <select
          className="input"
          id={id}
          onChange={(e) => setSelected(e.target.value)}>
          <option value="none" selected disabled hidden>
            Select A {name}
          </option>
          {options.map((option) => (
            <option value={option} selected={option === selected}>
              {option}
            </option>
          ))}
        </select>
        <label For={id}>{name}</label>
      </div>
    </>
  );
}
