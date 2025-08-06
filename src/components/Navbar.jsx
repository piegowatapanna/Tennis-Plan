import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <img src={logo} alt="Logo Tennis Plan" />
      </div>
      <ul className="navbar-menu">
          <Link to="/">Strona Główna</Link>
          <Link to="/kalendarz">Kalendarz</Link>
          <Link to="/notes">Notes</Link>
          <Link to="/statystyki">Statystyki</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
