import '../Styles/EmployeesPage.css';
export const EmployeesPage = () => {
  return (
    <div className='employees-page'>
        <div className="search-bar">
            <input type="text" placeholder="Search for employees..." />
            <button className="search-button">Search</button>
        </div>
       <div className="filter-profession">
            <label htmlFor="job">Profession:</label>
            <select id="job">
                <option value="all">All</option>
                <option value="frontend-developer">Frontend Developer</option>
                <option value="backend-developer">Backend Developer</option>
                <option value="fullstack-developer">Fullstack Developer</option>
                <option value="data-scientist">Data Scientist</option>
                <option value="product-manager">Product Manager</option>
                <option value="graphic-designer">Graphic Designer</option>
                <option value="digital-marketer">Digital Marketer</option>
                <option value="sales-representative">Sales Representative</option>
                <option value="customer-support">Customer Support</option>
                <option value="hr-specialist">HR Specialist</option>
                <option value="accountant">Accountant</option>
                <option value="business-analyst">Business Analyst</option>
            </select>
        </div>


    </div>
  )
}
