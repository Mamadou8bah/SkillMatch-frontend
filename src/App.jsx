import './App.css';
import Navbar from './components/Navbar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import JobsPage from './pages/JobsPage';
import HomePage from './pages/HomePage';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <main className="main-content">
        <HomePage />
        <JobsPage />
      </main>
    </div>
  );
}

export default App;
