import React, { useId } from "react";

export default function Select({ name, options, value }) {
  const id = useId();

  return (
    <>
      <div className="input-container">
        <select className="input" id={id}>
          <option value="none" selected disabled hidden>
            Select Your {name}
          </option>
          {options.map((option) => (
            <option value={option} selected={option === value}>
              {option}
            </option>
          ))}
        </select>
        <label For={id}>{name}</label>
      </div>
    </>
  );
}
