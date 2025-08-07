import '../Styles/EmployeeCard.css';
function EmployeeCard({ employee }) {

    const skills=employee.skills;
  return (
    <div className="employee-card">
        <div className="profile">
            <img src={employee.profilePic} alt={employee.firstName} />
            <div className="name-profession">
                <h4>{employee.firstName+" "+employee.lastName}</h4>
                <div className="profession-loca">
                    <p>{employee.profession}</p>
                <div className="location">
                    <i className="fa-solid fa-location-dot"></i>
                    <span>{employee.location}</span>
               </div>
            </div>
        </div>
        </div>
        <div className="skills">
                <ul>
                    {skills.slice(0,4).map((skill, index) => (
                        <li key={index} className="skill-item">{skill}</li>
                    ))}
                </ul>
        </div>
        <div className="bio">
            <p>{employee.bio}</p>
        </div>
        <div className="see-details">
            <button className="details-btn">
                <i className="fa-solid fa-circle-info"></i>
                <span>See Details</span>
            </button>
        </div>
        
    </div>
  );
}
export default EmployeeCard;