import './App.css';
import Navbar from './components/Navbar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import JobsPage from './pages/JobsPage';
import HomePage from './pages/HomePage';
import { Route,Routes ,Navigate} from 'react-router-dom';
import Header from './components/Header';
import { CandidatesPage } from './pages/CandidatesPage';
import { CompaniesPage } from './pages/CompaniesPage';
import { JobDetails } from './pages/JobDetails';
import {CandidateDetailsPage} from './pages/CandidateDetailsPage';
function App() {
  return (
    <div className="App">
      
      <main className="main-content">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/" element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="jobs" element={<JobsPage />} />
          <Route path="candidates" element={<CandidatesPage />} />
          <Route path="companies" element={<CompaniesPage />} />
          <Route path="jobs/:id" element={<JobDetails />} />
          <Route path="candidates/:id" element={<CandidateDetailsPage />}></Route>
          <Route path="*" element={<div>Page Not Found, We are sorry!</div>} />
        </Routes>
      </main>
    </div>
  );
}



export default App;
