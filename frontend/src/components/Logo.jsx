import LogoSvg from "./LogoSvg";

export default function Logo() {
  return (
    <>
      <div className="logo">
        <LogoSvg />
      </div>
      <style jsx="true">{`
        .logo {
          width: 7rem;
          padding: 1rem;
          position: absolute;
          bottom: 0;
          right: calc(50vw - 3.5rem);
        }
      `}</style>
    </>
  );
}
