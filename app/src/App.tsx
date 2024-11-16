import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import News from './pages/News';
import './index.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </Router>
  );
}

export default App;
