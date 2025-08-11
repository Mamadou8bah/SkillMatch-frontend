import '../Styles/EmployeesPage.css';
import { useState } from 'react';
export const EmployeesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedJob, setSelectedJob] = useState('all');
  const [employeesFound, setEmployeesFound] = useState(0);

  const handleSearchChange = (e) => {
      setSearchTerm(e.target.value);
  };
  return (
    <div className='employees-page'>
        <div className="search-bar">
            <input type="text" placeholder="Search for employees..." value={searchTerm} onChange={handleSearchChange} />
            <button className="search-button">Search</button>
        </div>
       <div className="filter-profession">
            <label htmlFor="job">Profession:</label>
            <select id="job" className='profession-filter' value={selectedJob} onChange={(e) => setSelectedJob(e.target.value)}>
                <option value="all" className='option'>All</option>
                <option value="frontend-developer" className='option'>Frontend Developer</option>
                <option value="backend-developer" className='option'>Backend Developer</option>
                <option value="fullstack-developer" className='option'>Fullstack Developer</option>
                <option value="data-scientist" className='option'>Data Scientist</option>
                <option value="product-manager" className='option'>Product Manager</option>
                <option value="graphic-designer" className='option'>Graphic Designer</option>
                <option value="digital-marketer" className='option'>Digital Marketer</option>
                <option value="sales-representative" className='option'>Sales Representative</option>
                <option value="customer-support" className='option'>Customer Support</option>
                <option value="hr-specialist" className='option'>HR Specialist</option>
                <option value="accountant" className='option'>Accountant</option>
                <option value="business-analyst" className='option'>Business Analyst</option>
            </select>
        </div>

        <div className="employees-list">
            <div className="employee card">
                
            </div>
        </div>


    </div>
  )
}
