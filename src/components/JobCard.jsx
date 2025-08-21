import '../Styles/JobCard.css';
import { Link } from 'react-router-dom';
function JobCard({ job }) {
  return (
  <div className="job-card">
    <div className="employer-details">
    <div className="employer-image">
       <img src={job.employer?.logo} alt={`${job.employer?.name || 'employer'} logo`} />
    </div>
     <div className="job-title-location">
      <h2 className="job-title">{job.title}</h2>
      <div className="job-employer-details">
        <p>{job.employer?.name}</p>
        <span> • </span>
        <p style={{ color: 'gray' ,marginLeft: '5px'}}>{job.location?.name}</p>
      </div>
     </div>
    </div>
    <div className="job-type">
      <span className="job-location-type">{job.location?.type}</span>
      •
      <span className="job-level">{job.level}</span>
    </div>
    <div className="job-description">
      <p>{job.description.slice(0,400)}...</p>
    </div>
    <div className="salary-apply">
      <span className="job-salary">GMD {job.salary}/Month</span>
      <Link to={`/jobs/${job.id}`}><button className="apply-button">Apply Now</button></Link>
    </div>
  </div>
  );
}
export default JobCard;