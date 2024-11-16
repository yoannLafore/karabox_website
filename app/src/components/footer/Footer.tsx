import styles from './Footer.module.scss';

function Instagram() {
  const insta_account_link = 'https://instagram.com/yourprofile';

  return (
    <a href={insta_account_link} target="_blank" rel="noopener noreferrer">
      <i className="fab fa-instagram"></i>
    </a>
  );
}

function Footer() {
  return (
    <footer>
      <div className={styles['description']}>
        <p className={styles['about']}>About</p>
        <p className={styles['privacy']}>Privacy Policy</p>
      </div>
      <div className={styles['sponsors']}></div>
      <div className={styles['contact-info']}>
        <p className={styles['email']}>karabox@example.com</p>
        <div className={styles['social-media']}>
          <Instagram />
        </div>

        <p className={styles['copyright']}>
          &copy; 2024 Karabox. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
