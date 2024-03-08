const Header = () => {
  return (
    <header className="header">
      <h2 className="header--text">Memory</h2>
      <button className="header--button header--button-restart poppins-bold">
        Restart Game
      </button>
      <button className="header--button header--button-exit poppins-bold">
        Exit Game
      </button>
    </header>
  );
};

export default Header;
