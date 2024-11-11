import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import './MainPage.scss';

function MainPage() {
  return (
    <div className="main-page-container">
      <Header />
      <main>
        <h1>Home</h1>
        <p>Welcome to the Home page!</p>
      </main>

      <Footer />
    </div>
  );
}

export default MainPage;
