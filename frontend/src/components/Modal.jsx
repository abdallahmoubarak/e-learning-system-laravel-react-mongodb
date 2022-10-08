export default function Modal({ openModal, setOpenModal, content }) {
  return (
    <>
      <div className={`modal ${openModal && "show"}`}>
        <div className="X" onClick={() => setOpenModal(false)}>
          x
        </div>
        {content}
      </div>
      <style jsx>{`
        .modal {
          width: 100vw;
          max-width: 30rem;
          min-height: 100%;
          height: 100%;
          background: white;
          position: fixed;
          right: -30rem;
          top: 0;
          border-left: 1px solid #9747ff;
          z-index: 100;
          -webkit-transition: right 0.5s ease-in-out;
          -o-transition: right 0.5s ease-in-out;
          transition: right 0.5s ease-in-out;
          font-size: 1.2rem;
          overflow: hidden;
          overflow-y: auto;
        }

        .show {
          right: 0px;
          -webkit-transition: right 0.2s ease-in-out;
          -o-transition: right 0.2s ease-in-out;
          transition: right 0.2s ease-in-out;
        }

        .X {
          text-align: right;
          font-size: 2rem;
          line-height: 2rem;
          padding-right: 2rem;
          padding-top: 1.2rem;
          cursor: pointer;
          z-index: 100;
        }
      `}</style>
    </>
  );
}
