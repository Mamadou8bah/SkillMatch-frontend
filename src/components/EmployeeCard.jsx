function EmployeeCard({ employee }) {

    const skills=employee.skills;
  return (
    <div className="employee-card">
        <div className="profile">
            <img src={employee.profilePic} alt={employee.firstName} />
            <div className="name-profession">
                <h4>{employee.firstName+" "+employee.lastName}</h4>
                <p>{employee.profession}</p>
            </div>
        </div>
        <div className="skills">
                <ul>
                    {skills.slice(0,4).map((skill, index) => (
                        <li key={index} className="skill-item">{skill}</li>
                    ))}
                </ul>
        </div>
      
    </div>
  );
}
export default EmployeeCard;