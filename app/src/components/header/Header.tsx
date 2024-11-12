import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from '../../assets/karabox_logo.svg';

function Header() {
  return (
    <div className={styles['header-container']}>
      <img src={logo} alt="" className={styles['logo']} />

      <ul>
        <li className={styles['nav-item']}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles['nav-item']}>
          <Link to="/news">News</Link>
        </li>
      </ul>

      <button className={styles['sign-button']}>Sign In</button>
    </div>
  );
}

export default Header;
