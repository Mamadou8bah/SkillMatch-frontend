import '../Styles/JobCard.css';
import { Link } from 'react-router-dom';

function JobCard({ job }) {
  if (!job) return null;
  const companyLine = [job.employer?.name, job.location?.name].filter(Boolean).join(' - ');
  const salaryFormatted = job.salary ? job.salary.toLocaleString() : '';
  return (
    <div className="job-card modern">
      <div className="jc-top">
        <div className="jc-logo">
          <img src={job.employer?.logo} alt={(job.employer?.name || 'Company') + ' logo'} />
        </div>
        <div className="jc-head-text">
          <h3 className="jc-title">{job.title}</h3>
          <p className="jc-company-line">{companyLine}</p>
        </div>
      </div>
      <div className="jc-badges">
        {job.location?.type && (
          <span className="jc-badge">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>
            {job.location.type}
          </span>
        )}
        {job.level && (
          <span className="jc-badge">
            <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path fill="currentColor" d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-4.42 0-8 1.79-8 4v2h16v-2c0-2.21-3.58-4-8-4Z"/></svg>
            {job.level}
          </span>
        )}
        {job.shift && (
          <span className="jc-badge">
            <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path fill="currentColor" d="M12 8h5v2h-7V5h2Zm0-6a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8Z"/></svg>
            {job.shift}
          </span>
        )}
      </div>
      <div className="jc-desc">
        <p>{job.description}</p>
      </div>
      <div className="jc-footer">
        <div className="jc-salary">
          <span className="amt">GMD {salaryFormatted}</span>
          <span className="per">/month</span>
        </div>
        <Link to={`/jobs/${job.id}`} className="jc-apply-btn">Apply Now</Link>
      </div>
    </div>
  );
}

export default JobCard;