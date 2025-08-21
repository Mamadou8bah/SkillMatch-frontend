import { useState, useMemo } from 'react';
import SearchBar from "../components/SearchBar";
import JobCard from "../components/JobCard";
import '../Styles/JobsPage.css';
import { jobs as allJobs } from "../data/jobs";

function JobsPage() {
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('recent'); 

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    let list = allJobs.filter(j =>
      j.title.toLowerCase().includes(q) ||
      j.employer.name.toLowerCase().includes(q) ||
      j.location.name.toLowerCase().includes(q) ||
      j.tags.some(t => t.toLowerCase().includes(q))
    );
    switch (sort) {
      case 'salaryHigh':
        list = [...list].sort((a,b)=> b.salary - a.salary); break;
      case 'salaryLow':
        list = [...list].sort((a,b)=> a.salary - b.salary); break;
      case 'title':
        list = [...list].sort((a,b)=> a.title.localeCompare(b.title)); break;
      default: // recent (postedDate desc)
        list = [...list].sort((a,b)=> new Date(b.postedDate) - new Date(a.postedDate));
    }
    return list;
  }, [query, sort]);

  return (
    <div className="jobs-page">
      <div className="jobs-header" style={{padding:'0 1rem'}}>
        <SearchBar
          value={query}
          onChange={setQuery}
          onSubmit={()=>{/* no-op for now, filtering live */}}
        />
        <div className="jobs-toolbar" style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'0 1rem 0.75rem 1rem',borderBottom:'1px solid #f0f0f0'}}>
          <span style={{fontSize:'1.05rem',fontWeight:600,color:'#666'}}>{filtered.length} Jobs Found</span>
          <div style={{display:'flex',gap:'0.5rem',alignItems:'center'}}>
            <label htmlFor="sort" style={{fontSize:'0.85rem',color:'#555'}}>Sort:</label>
            <select id="sort" value={sort} onChange={e=>setSort(e.target.value)} style={{padding:'0.4rem 0.6rem',borderRadius:6,border:'1px solid #ddd',background:'#fafafa',fontSize:'0.85rem',cursor:'pointer'}}>
              <option value="recent">Most Recent</option>
              <option value="salaryHigh">Salary (High)</option>
              <option value="salaryLow">Salary (Low)</option>
              <option value="title">Title (A-Z)</option>
            </select>
          </div>
        </div>
      </div>
      <div className="jobs" style={{flex:1,padding:'1rem',overflowY:'auto'}}>
        {filtered.length === 0 && (
          <div style={{textAlign:'center',padding:'3rem 1rem',color:'#666'}}>
            <h3 style={{margin:'0 0 0.5rem'}}>No jobs match your search</h3>
            <p style={{margin:0,fontSize:'0.9rem'}}>Try changing the keywords or clearing the search.</p>
          </div>
        )}
        <div className="job-list-page">
          {filtered.map(job => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default JobsPage;