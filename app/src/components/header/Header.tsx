import { Link } from 'react-router-dom';
import './Header.scss';
import logo from '../../assets/karabox_logo.svg';

function Header() {
  return (
    <div className="header-container">
      <img src={logo} alt="" className="logo" />

      <ul>
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/news">News</Link>
        </li>
      </ul>

      <button className="sign-button">Sign In</button>
    </div>
  );
}

export default Header;
