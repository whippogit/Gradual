import DateFormat from "./DateFormat";
import Search from "./Search";

function NavBar({ handleSearch }) {
  return (
    <nav className="container navbar">
      <div className="d-none d-sm-block">
        <a className="navbar-brand fs-6" href="#">
          Todas las Noticias
        </a>
        <a className="navbar-brand fs-6" href="#">
          Política
        </a>
        <a className="navbar-brand fs-6" href="#">
          Economía
        </a>
        <a className="navbar-brand fs-6" href="#">
          Sociedad
        </a>
        <a className="navbar-brand fs-6" href="#">
          Educación
        </a>
        <a className="navbar-brand fs-6" href="#">
          Deporte
        </a>
        <a className="navbar-brand fs-6" href="#">
          Turismo
        </a>
      </div>
      <div className="d-none d-sm-block">
        <Search handleSearch={handleSearch} />
      </div>
      <div className="text-end d-none d-sm-block">
        <DateFormat />
      </div>

      <div className="d-block d-sm-none">
        <DateFormat />
      </div>
    </nav>
  );
}

export default NavBar;
