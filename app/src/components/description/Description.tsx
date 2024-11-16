import karabox_picture from '../../assets/karabox_picture.png';
import styles from './Description.module.scss';
import LocationMap from './location_map/LocationMap';

function Description() {
  return (
    <div className={styles['container']}>
      <div className={styles['description-container']}>
        <div className={styles['description']}>
          <p>
            <strong>Welcome to Karabox - Your On-Campus Escape!</strong>
          </p>
          <p>
            Take a break from your studies and enjoy a 15-minute session of pure
            fun and relaxation. Whether you're solo or with a friend, the
            Karabox is the perfect place to unwind by singing your favorite
            tunes.
          </p>
          <p>
            Simply book a slot using the menu on the right, then show up at your
            scheduled time for a hassle-free experience.
          </p>
        </div>
        <div className={styles['karabox-picture']}>
          <img src={karabox_picture} alt="Photo of the Karabox" />
        </div>
      </div>

      <div className={styles['location-section-container']}>
        <LocationMap />

        <div className={styles['location-description']}>
          <p>
            <strong>Find Us at the Rolex Learning Center</strong>
          </p>
          <p>
            The Karabox is located in the heart of the Rolex Learning Center.
            It's easy to find and even easier to use!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Description;
