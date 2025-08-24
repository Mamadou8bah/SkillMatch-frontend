import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { jobs } from '../data/jobs';
import '../Styles/JobDetails.css';
import logo from '../Assets/image.png';

export const JobDetails = () => {
  const { id } = useParams();
  const job = jobs.find(j => j.id === parseInt(id));
  const navigate = useNavigate();

  if (!job) {
    return <div className="job-details-empty">Job not found.</div>;
  }

  const posted = new Date(job.postedDate).toLocaleDateString();


  const similarJobs = jobs
    .filter(j => j.id !== job.id && (j.level === job.level || j.location.type === job.location.type))
    .slice(0, 3);

  // Other jobs from same employer
  const otherEmployerJobs = jobs
    .filter(j => j.id !== job.id && j.employer.name === job.employer.name)
    .slice(0, 4);

  return (
    <div className="job-details">
      <div className="job-details-container">
        <div className="jd-header-row">
          <button className="jd-back" onClick={() => navigate(-1)} aria-label="Go back">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /><line x1="19" y1="12" x2="9" y2="12" /></svg>
            <span>Back</span>
          </button>
          <div className="jd-actions-desktop">
            <button className="jd-save" title="Save job" aria-label="Save job">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M200-120v-640q0-33 23.5-56.5T280-840h240v80H280v518l200-86 200 86v-278h80v400L480-240 200-120Zm80-640h240-240Zm400 160v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z"/></svg>
            </button>
            <button className="jd-apply">Apply Now</button>
          </div>
        </div>

        <div className="jd-layout">
          <div className="jd-main">
            <div className="jd-hero">
              <div className="jd-logo-wrap">
                <img src={logo} alt={job.employer.name + ' logo'} />
              </div>
              <div className="jd-hero-text">
                <h1 className="jd-title">{job.title}</h1>
                <div className="jd-meta-primary">
                  <span className="jd-employer">{job.employer.name}</span>
                  <span className="dot" aria-hidden>•</span>
                  <span className="jd-location">{job.location.name}</span>
                </div>
                <div className="jd-meta-tags">
                  <span className="tag soft">{job.location.type}</span>
                  <span className="tag soft">{job.level}</span>
                  
                </div>
              </div>
            </div>

            <div className="jd-body">
              <section className="jd-section">
                <h2 className="section-title">Job Description</h2>
                <p className="jd-description">{job.description}</p>
              </section>
              {job.requirements?.length > 0 && (
                <section className="jd-section">
                  <h2 className="section-title">Requirements</h2>
                  <ol className="jd-req-list">
                    {job.requirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ol>
                </section>
              )}
              {job.tags?.length > 0 && (
                <section className="jd-section">
                  <h2 className="section-title">Skills & Tools</h2>
                  <div className="jd-skill-tags">
                    {job.tags.map(t => (
                      <span  key={t} className="skill-tag">#{t}</span>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>

       
        </div>
        <div className="jd-mobile-actions">
        <button className="jd-apply full">Apply Now</button>
      </div>
      </div>
      

         <aside className="jd-side">
            {similarJobs.length > 0 && (
              <div className="jd-side-section">
                <h3 className="jd-side-title">Similar Jobs</h3>
                <div className="jd-side-list">
                  {similarJobs.map(sj => (
                    <button
                      key={sj.id}
                      className="jd-mini-card"
                      onClick={() => navigate(`/jobs/${sj.id}`)}
                      aria-label={`View ${sj.title}`}
                    >
                      <div className="mini-logo">
                        <img src={logo} alt="logo" />
                      </div>
                      <div className="mini-text">
                        <p className="mini-title">{sj.title}</p>
                        <p className="mini-sub">{sj.employer.name} - {sj.location.name}</p>
                        <div className="mini-tags">
                          <span className="mini-tag">{sj.level}</span>
                          <span className="mini-tag">{sj.location.type}</span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
            {otherEmployerJobs.length > 0 && (
              <div className="jd-side-section">
                <h3 className="jd-side-title">Other Jobs From {job.employer.name}</h3>
                <div className="jd-side-list">
                  {otherEmployerJobs.map(oj => (
                    <button
                      key={oj.id}
                      className="jd-mini-card"
                      onClick={() => navigate(`/jobs/${oj.id}`)}
                      aria-label={`View ${oj.title}`}
                    >
                      <div className="mini-logo">
                        <img src={logo} alt="logo" />
                      </div>
                      <div className="mini-text">
                        <p className="mini-title">{oj.title}</p>
                        <p className="mini-sub">{oj.location.type} • {oj.level}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </aside>
    </div>
  );
};
