import { Link } from 'react-router-dom';
import './Header.scss';
import logo from '../assets/karabox_logo.svg';

function Header() {
  return (
    <div className="headerContainer">
      <img src={logo} alt="" className="logo" />

      <ul>
        <li className="navItem">
          <Link to="/">Home</Link>
        </li>
        <li className="navItem">
          <Link to="/news">News</Link>
        </li>
      </ul>

      <button className="signButton">Sign In</button>
    </div>
  );
}

export default Header;
