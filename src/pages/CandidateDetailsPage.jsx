import React from 'react'
import { useParams,useNavigate, Link } from 'react-router-dom'
import { candidates } from '../data/candidate'
import '../Styles/CandidateDetailsPage.css'
export const CandidateDetailsPage = () => {
  const {id}=useParams()

  const candidate=candidates.find(c=>c.id === parseInt(id));

  const similarCandidates=candidates.filter(
    c=>c.id!==candidate.id &&(c.profession===candidate.profession)
    
  )

  const navigate=useNavigate()
  if (!candidate) {
    return <div className="job-details-empty">Candidate not found.</div>;
  }

  return (
    <div className="cd-page">
        <div className="cd-main" >
          <div className="jd-header-row">
          <button className="jd-back" onClick={() => navigate(-1)} aria-label="Go back">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /><line x1="19" y1="12" x2="9" y2="12" /></svg>
            <span>Back</span>
          </button>
          <div className="jd-actions-desktop">
            <button className="jd-save" title="Save job" aria-label="Save job">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M200-120v-640q0-33 23.5-56.5T280-840h240v80H280v518l200-86 200 86v-278h80v400L480-240 200-120Zm80-640h240-240Zm400 160v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z"/></svg>
            </button>
            <button className="jd-apply">Message</button>
          </div>
        </div>
        <div className="cd-profile-header-page">
          <div className="cd-profile-image">
            <img src={candidate.profilePic} alt={candidate.fullName} />
          </div>
          <div className="cd-profile-text">
            <h2>{candidate.fullName}</h2>
            <div className="cd-profession">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#7a7777ff"><path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z"/></svg>
              <p>{candidate.profession}</p>
            </div>
            <div className="cd-location">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#827f7fff"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>
              <p>{candidate.location}</p>
            </div>  
          </div>

        </div>
        <div className="cd-skills">
          <p className='section-title'>Skills</p>
          <ul>
            {candidate.skills.map(skill => (
              <li key={skill}>#{skill}</li>
            ))}
          </ul>
        </div>
        <div className="cd-bio">
          <h4 className='section-title'>Biography</h4>
          <p className='jd-description'>{candidate.bio}</p>
        </div>
        <div className="cd-experiences">
          <h4 className="section-title">Experience</h4>
          <div className="cd-experience">
            <ul>
              {candidate.experience.map((experience)=>(
              <div key={experience.id} className="cd-experience-item">
                <h5 className='jd-description'>- {experience.role}</h5>
                <p>{experience.employer}</p>
                <p>{experience.startDate} - {experience.endDate}</p>
              </div>
            ))}
            </ul>
          </div>
        </div>
        <div className="cd-educations">
          <h4 className='section-title'>Education History</h4>
          <div className="cd-education">
            <ul>
              {candidate.education.map((education)=>(
                <div className="cd-education item">
                  <h5 className="jd-description">- {education.course}</h5>
                  <p>{education.institution}</p>
                </div>
              ))}
            </ul>
          </div>
        </div>

        <div className="cd-contact-details">
             <h4 className='section-title'>Contact Details</h4>
              <div className="cd-contact-methods">
                <div className="cd-contact-item">
                  <i className="fa-solid fa-phone"></i>
                  <a href={`tel:${candidate.phone}`} aria-label={`Call ${candidate.fullName}`}>{candidate.phone}</a>
                </div>
                <div className="cd-contact-item">
                  <i className="fa-solid fa-envelope"></i>
                  <a href={`mailto:${candidate.email}`} aria-label={`Email ${candidate.fullName}`}>{candidate.email}</a>
                </div>
              </div>
        </div>

        
        </div>

        <div className="similar-candidates">
          <h3>Similar Candidates</h3>

          <div className="similar-candidates-list">
            <ul>
              {similarCandidates.map(
                (c)=>(
                 <Link to={`/candidates/${c.id}`}>
                  <div className="sc-profile">
                    <div className="sc-profile-pic">
                      <img src={c.profilePic} alt={c.fullName} />
                    </div>
                    <div className="sc-other-details">
                      <h4 className="sc-name">
                        {c.fullName}
                      </h4>
                      <p className="sc-profession">
                        {c.profession}
                      </p>
                      <p className="sc-location">
                        {c.location}
                      </p>
                    </div>
                  </div>
                 </Link>
                )
              )}
            </ul>
          </div>
        </div>

    </div>
  )
}


