import './App.css';
import Navbar from './components/Navbar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import JobsPage from './pages/JobsPage';
import HomePage from './pages/HomePage';
import { useState } from 'react';
import { Route,Routes } from 'react-router-dom';
import Header from './components/Header';
import { EmployeesPage } from './pages/EmployeesPage';
import { CompaniesPage } from './pages/CompaniesPage';
import { JobDetails } from './pages/JobDetails';
function App() {
  return (
    <div className="App">
      
      <main className="main-content">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="jobs" element={<JobsPage />} />
          <Route path="employees" element={<EmployeesPage />} />
          <Route path="companies" element={<CompaniesPage />} />
          <Route path="jobs/:id" element={<JobDetails />} />
          <Route path="*" element={<div>Page Not Found, We are sorry!</div>} />
        </Routes>
      </main>
    </div>
  );
}



export default App;
