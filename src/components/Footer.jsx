import '../Styles/Footer.css';
import  logo from '../Assets/ChatGPT-Image-Jul-24_-2025_-05_49_10-PM.svg'; 
function Footer() {
  return (
    <footer className="footer">
        <div className="logo">
            <img src={logo} alt="SkillMatch Logo" />
        </div>  
      <div className="quick-links">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/jobs">Jobs</a></li>
          <li><a href="/resume-builder">Resume Builder</a></li>
          <li><a href="/companies">Companies</a></li>
          <li><a href="/employees">Employees</a></li>
        </ul>
      </div>
      <div className="contact-info">
        <h3>Contact Us</h3>
        <p>Email: <a href="mailto:info@skillmatch.com">info@skillmatch.com</a></p>
        <p>Phone: <a href="tel:+2203281914">+220 328 1914</a></p>
      </div>
      <div className="socials">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="https://www.facebook.com/skillmatch" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook"></i></a>
          <a href="https://www.twitter.com/skillmatch" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-twitter"></i></a>
          <a href="https://www.instagram.com/skillmatch" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
          <a href="https://www.linkedin.com/company/skillmatch" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;