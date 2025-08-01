import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import JobCard from "../components/JobCard";
import '../Styles/JobsPage.css';

function JobsPage({ onMenuToggle }) {
  return (
    <div className="jobs-page" style={{ 
      width: '100%', 
      height:'100%', 
      display: 'flex', 
      flexDirection: 'column'
    }}>
      <Header onMenuToggle={onMenuToggle} />
      <SearchBar />
      <div style={{
        padding: '1rem 1rem 0.5rem 1rem',
        borderBottom: '1px solid #f0f0f0'
      }}>
        <span style={{
          fontSize: '1.1rem',
          fontWeight: '600',
          color: '#a09f9fff'
        }}>Jobs Found</span>
      </div>
      <div className="jobs" style={{
        flex: 1,
        padding: '1rem',
        overflowY: 'auto'
      }}>
      </div>
    </div>
  );
}

export default JobsPage;