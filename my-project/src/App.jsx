import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PublicAnalytics from './pages/PublicAnalytics';
import PrivateTracker from './pages/PrivateTracker';
import './index.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<PublicAnalytics />} />
        <Route path="/tracker" element={<PrivateTracker />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
