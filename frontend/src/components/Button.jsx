export default function Button({ text = "click", onClick, dark }) {
  return (
    <>
      <button onClick={onClick}>{text}</button>
      <style jsx="true">{`
        button {
          background: ${dark ? "#9747ff" : "white"};
          color: ${dark ? "white" : "#9747ff"};
          padding: 0.6rem 3rem;
          border-radius: 0.4rem;
          font-size: 1.2rem;
          border: none;
          cursor: pointer;
          font-weight: 600;
          width: fit-content;
          border: 1px solid #9747ff;
        }
        button:hover {
          background: ${dark ? "#7727ff" : "#eeddff"};
        }
      `}</style>
    </>
  );
}
