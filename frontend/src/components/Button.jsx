export default function Button({ text, onClick }) {
  return (
    <>
      <button onClick={onClick}>{text}</button>
      <style jsx>{`
        button {
          background: white;
          color: #9747ff;
          padding: 0.8rem 3.6rem;
          border-radius: 0.4rem;
          font-size: 1.2rem;
          border: none;
          cursor: pointer;
          font-weight: 600;
          width: fit-content;
        }
        button:hover {
          background: #eeddff;
        }
      `}</style>
    </>
  );
}
