import '../Styles/CandidatesPage.css';
import { useState } from 'react';
import SearchBar from "../components/SearchBar";
import { candidates } from '../data/candidate';
import CandidateCard from '../components/CandidateCard';
import { Link } from 'react-router-dom';
export const CandidatesPage = () => {
  

  const [query, setQuery] = useState('');
  const [profession, setProfession] = useState('all');

  const normalizedQuery = query.trim().toLowerCase();
  const filteredCandidates = candidates.filter(c => {
    const professionSlug = c.profession.toLowerCase().replace(/\s+/g,'-');
    const professionMatch = profession === 'all' || professionSlug === profession;
    const queryMatch = !normalizedQuery || c.profession.toLowerCase().includes(normalizedQuery);
    return professionMatch && queryMatch;
  });
  return (
  <div className='candidates-page'>
      <div className="jobs-header" style={{padding:'0 1rem'}}>
  <SearchBar onChange={setQuery} value={query}
        onSubmit={()=>{

        }}
  placeholder='Search Candidates....'/>
      </div>

  <div className="candidates-toolbar">
      <span className='total-candidates'>{filteredCandidates.length} Candidates Found</span>
   <div className="filter-candidates">
         <label htmlFor="profession-filter">Profession:</label>
        <select id="profession-filter" value={profession} onChange={(e) => setProfession(e.target.value)}>
          <option value="all">All</option>
          <option value="software-engineer">Software Engineer</option>
          <option value="frontend-developer">Frontend Developer</option>
          <option value="backend-developer">Backend Developer</option>
          <option value="fullstack-developer">Full Stack Developer</option>
          <option value="product-designer">Product Designer</option>
          <option value="data-analyst">Data Analyst</option>
          <option value="devops-engineer">DevOps Engineer</option>
          <option value="mobile-developer">Mobile Developer</option>
          <option value="cybersecurity-analyst">Cybersecurity Analyst</option>
          <option value="product-manager">Product Manager</option>
          <option value="project-manager">Project Manager</option>
          <option value="marketing-specialist">Marketing Specialist</option>
          <option value="sales-representative">Sales Representative</option>
          <option value="hr-generalist">HR Generalist</option>
          <option value="recruiter">Recruiter</option>
          <option value="customer-success-manager">Customer Success Manager</option>
          <option value="business-analyst">Business Analyst</option>
          <option value="operations-manager">Operations Manager</option>
          <option value="finance-analyst">Finance Analyst</option>
          <option value="accountant">Accountant</option>
          <option value="content-writer">Content Writer</option>
          <option value="ui-writer">UX / UI Writer</option>
          <option value="legal-counsel">Legal Counsel</option>
          <option value="support-specialist">Support Specialist</option>
        </select>
      </div>
      
    </div>

    <div className="candidates-list" style={{display:'grid',gap:'1.5rem',padding:'1rem',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))'}}>
      {filteredCandidates.map(c => (
        <CandidateCard key={c.id} candidate={c} />
      ))}
    </div>
    </div>

  )
}
