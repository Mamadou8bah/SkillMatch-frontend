import '../Styles/JobCard.css';
function JobCard({ job }) {
  return (
    <div className="job-card">
        <div className="employer-details">
         <img src={job.employer.logo} alt={`${job.employer.name} logo`} />
         <div className="job-title-location">
            <h2 className="job-title">{job.title}</h2>
            <div className="job-employer-details">
              <p>{job.employer.name}</p>
              <span>-</span>
              <p>{job.employer.location}</p>
            </div>
         </div>
        </div>
        <div className="job-type">
            <span className="job-location-type">{job.location.type}</span>
            <span className="job-level">{job.level}</span>
            <span className="job-shift-type">${job.shift}</span>
        </div>
        <div className="job-description">
            <p>{job.description}</p>
        </div>
        <div className="salary-apply">
            <span className="job-salary">${job.salary}/Month</span>
            <button className="apply-button">Apply Now</button>
        </div>
    </div>
  );
}
export default JobCard;