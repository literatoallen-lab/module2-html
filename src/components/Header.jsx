function Header({ toggleDarkMode }) {
  return (
    <header>
      <section className="card">
        <h1>Allen Literato</h1>
        <p>IT Student | Web Systems and Technologies</p>

        <button onClick={toggleDarkMode}>
          Toggle Dark Mode
        </button>
      </section>
    </header>
  );
}

export default Header;