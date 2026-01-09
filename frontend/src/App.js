import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TrustHomePage from './pages/TrustHomePage';
import SchoolPage from './pages/SchoolPage';
import { Toaster } from './components/ui/sonner';
import '@/App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Routes>
          <Route path="/" element={<TrustHomePage />} />
          <Route path="/school/:schoolId" element={<SchoolPage />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;

