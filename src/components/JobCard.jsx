import '../Styles/JobCard.css';
import { Link } from 'react-router-dom';

function JobCard({ job }) {
  if (!job) return null;
  const companyLine = [job.employer?.name, job.location?.name].filter(Boolean).join(' - ');
  const salaryFormatted = job.salary ? job.salary.toLocaleString() : '';
  let postedLabel = '';
  if (job.postedDate) {
    const d = new Date(job.postedDate);
    if (!isNaN(d)) {
      postedLabel = d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
    }
  }
  return (
    <div className="job-card modern">
      <div className="jc-top">
        <div className="jc-logo">
          <img src={job.employer?.logo} alt={(job.employer?.name || 'Company') + ' logo'} />
        </div>
        <div className="jc-head-text">
          <h3 className="jc-title">{job.title}</h3>
          <p className="jc-company-line">{companyLine}</p>
          {postedLabel && <p className="jc-posted">Posted {postedLabel}</p>}
        </div>
        
      </div>
    
      <div className="jc-desc">
        <p>{job.description}</p>
      </div>
      <div className="jc-footer">
        <div className="jc-salary">
          <span className="amt">GMD {salaryFormatted}+</span>
          <span className="per">/month</span>
        </div>
        <Link to={`/jobs/${job.id}`} className="jc-apply-btn">Apply Now</Link>
      </div>
    </div>
  );
}

export default JobCard;