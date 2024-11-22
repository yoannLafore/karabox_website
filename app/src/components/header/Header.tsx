import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from '../../assets/karabox_logo.svg';
import AccountButton from '../auth/account/AccountButton';

function Header() {
  return (
    <header className={styles['header-container']}>
      <img src={logo} alt="" className={styles['logo']} />

      <ul>
        <li className={styles['nav-item']}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles['nav-item']}>
          <Link to="/news">News</Link>
        </li>
      </ul>

      <AccountButton />
    </header>
  );
}

export default Header;
