import LogoSvg from "./LogoSvg";

export default function Logo() {
  return (
    <>
      <div className="logo">
        <LogoSvg />
      </div>
      <style jsx>{`
        .logo {
          width: 7rem;
          position: fixed;
          bottom: 0;
          padding: 1rem;
          left: calc(50% - 3.5rem);
        }
      `}</style>
    </>
  );
}
