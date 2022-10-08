export default function Button({ text, onClick }) {
  return (
    <>
      <button onClick={onClick}>{text}</button>
      <style jsx>{`
        button {
          background: white;
          color: #9747ff;
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
          background: #eeddff;
        }
      `}</style>
    </>
  );
}
