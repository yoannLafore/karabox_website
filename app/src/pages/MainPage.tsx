import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import SlotBooking from '../components/slot_reservation/SlotBooking';
import styles from './MainPage.module.scss';

function MainPage() {
  return (
    <div className={styles['main-page-container']}>
      <Header />
      <main>
        <div className={styles['title']}>
          <h1>Karaoke Box</h1>
          <p>Welcome to the Karabox, the best place to sing!</p>
        </div>

        <div className={styles['main-page-content-container']}>
          <div className={styles['description-container']}>
            <h1>Karabox description</h1>
          </div>
          <div className={styles['vertical-line']}></div>
          <div className={styles['slot-selector-container']}>
            <SlotBooking />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default MainPage;
