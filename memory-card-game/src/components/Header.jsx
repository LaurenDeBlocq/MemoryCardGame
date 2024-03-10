import { Link, useMatches } from "react-router-dom";

const Header = () => {
  const matches = useMatches();
  return (
    <header className="header">
      <div className="header--grid"></div>
      <h2 className="header--text">Memory</h2>
      <div
        className="header--link-section"
        style={{
          visibility: matches[1].pathname === "/game/" ? "visible" : "hidden",
        }}
      >
        <Link
          to={"/game/"}
          className="header--link header--link-restart poppins-bold"
          reloadDocument
        >
          Restart Game
        </Link>
        <Link to={"/"} className="header--link header--link-exit poppins-bold">
          Exit Game
        </Link>
      </div>
    </header>
  );
};

export default Header;
