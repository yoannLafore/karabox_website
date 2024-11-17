import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import News from './pages/News';
import './index.scss';
import LoginPage from './pages/login/LoginPage';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import EmailLoginPage from './pages/login/email_login/EmailLoginPage';
import CreateAccountPage from './pages/login/create_account/CreateAccountPage';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/news" element={<News />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/login/email" element={<EmailLoginPage />} />
            <Route path="/create-account" element={<CreateAccountPage />} />

            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
