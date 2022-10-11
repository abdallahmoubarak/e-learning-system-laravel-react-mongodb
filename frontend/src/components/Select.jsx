import { useId } from "react";

export default function Select({
  name,
  options,
  selected,
  setSelected,
  noDefault,
}) {
  const id = useId();

  return (
    <>
      <div className="input-container">
        <select
          className="input"
          id={id}
          onChange={(e) => setSelected(e.target.value)}
          defaultValue={selected}>
          {!noDefault && <option value="">Select {name}</option>}
          {options.map((option, i) => (
            <option key={i} value={option}>
              {option}
            </option>
          ))}
        </select>
        <label htmlFor={id}>{name}</label>
      </div>
    </>
  );
}

export function SpecialSelect({ name, options, selected, setSelected }) {
  const id = useId();

  return (
    <>
      <div className="input-container">
        <select
          className="input"
          id={id}
          onChange={(e) => setSelected(e.target.value)}
          defaultValue={selected}>
          <option value="">Select {name}</option>
          {options.map((option, i) => (
            <option key={i}>{option.name}</option>
          ))}
        </select>
        <label htmlFor={id}>{name}</label>
      </div>
    </>
  );
}
