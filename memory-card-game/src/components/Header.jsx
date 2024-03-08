const Header = () => {
  return (
    <header className="header">
      <div className="header--grid"></div>
      <h2 className="header--text">Memory</h2>
      <div className="header--button-section">
        <button className="header--button header--button-restart poppins-bold">
          Restart Game
        </button>
        <button className="header--button header--button-exit poppins-bold">
          Exit Game
        </button>
      </div>
    </header>
  );
};

export default Header;
