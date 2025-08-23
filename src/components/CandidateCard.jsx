import '../Styles/CandidateCard.css';
import { Link } from 'react-router-dom';

function CandidateCard({ candidate }) {

    const skills=candidate.skills || [];
  return (
    <div className="candidate-card">
        <div className="candidate-profile-header">
            <img src={candidate.profilePic} alt={candidate.firstName} />
                        <div className="name-profession">
                                <h4>
                                    <Link to={`/candidates/${candidate.id}`} className="candidate-name-link">
                                        {candidate.fullName}
                                    </Link>
                                </h4>
                <div className="profession">
                    <p>{candidate.profession}</p>
                </div>
                <div className="location">
                    <i className="fa-solid fa-location-dot"></i>
                    <span>{candidate.location}</span>
               </div>
        </div>
        </div>
        <div className="skills">
                <ul>
                    {skills.slice(0,4).map((skill, index) => (
                        <li key={index} className="skill-item">#{skill}</li>
                    ))}
                </ul>
        </div>
        <div className="bio">
            <Link to={`/candidates/${candidate.id}`} className="bio-link">
                <p>{candidate.bio}</p>
            </Link>
        </div>
                <div className="see-details">
                    <Link to={`/candidates/${candidate.id}`} className="details-btn" aria-label={`View details for ${candidate.fullName}`}>
                        <i className="fa-solid fa-circle-info" aria-hidden="true"></i>
                        <span>View Details</span>
                    </Link>
                </div>
        
    </div>
  );
}
export default CandidateCard;