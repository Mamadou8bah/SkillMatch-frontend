import JobCard from "../components/JobCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../Styles/HomePage.css';
function HomePage() {
  return (
    <div className="home-page" >
      <Header />
      <div className="hero">
        <div className="hero-heading">
            <h1>Find the Right Talent. Land the Right Job.</h1>
            <p>SkillMatch connects skilled professionals with companies that value them.</p>
        </div>
        <div className="search-jobs">
            <input type="text" placeholder="Search for jobs....." />
            <button className="search-button">Search</button>
        </div>
        <div className="buttons">
            <button className="primary-button">Find Jobs</button>
            <button className="secondary-button">Post a Job</button>
        </div>
      </div>
      <div className="featured-jobs">
        <div className="featured-jobs-header">
            <h2>Featured Jobs</h2>
            <a href="">See All<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg></a>
        </div>
        <div className="job-list">
         {/* <JobCard />
          <JobCard />
          <JobCard /> */}
        </div>
        <div className="featured-jobs-footer">
            <a href="">See All Jobs</a>
        </div>
      </div>
      <div className="featured-candidates">
        <div className="featured-candidates-header">
            <h2>Featured Candidates</h2>
            <a href="">See All<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg></a>
        </div>
        <div className="candidate-list">
          
        </div>
        <div className="featured-candidates-footer">
            <a href="">See Candidates</a>
        </div>

      </div>
      <div className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial-list">
          <div className="testimonial-card">
            <div className="testimonial-image">
              <img src="https://via.placeholder.com/50" alt="User" />
            </div>
          <div className="testimonial-text">
            <p>"SkillMatch didn’t just help me find a job — it helped me find the job. Within a week of signing up, I landed interviews with two companies that matched my skills and goals. The platform is clean, easy to use, and actually works."</p>
            <span className="name">- Lamin Bah</span><span className="profession">Bussiness Analyst</span>
          </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-image">
              <img src="https://via.placeholder.com/50" alt="User" />
            </div>
            <div className="testimonial-text">
              <p>"We were struggling to hire quality developers until we tried SkillMatch. In just a few days, we connected with skilled candidates who were ready to contribute from day one. It’s now our go-to platform for tech hiring in West Africa."</p>
              <span className="name">- Gibril Sey</span><span className="profession">CTO, Tech Innovations</span>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-image">
              <img src="https://via.placeholder.com/50" alt="User" />
            </div>
            <div className="testimonial-text">
              <p>"As a freelancer, I’ve used many job platforms, but SkillMatch stands out. The quality of job listings is top-notch, and the application process is straightforward. I’ve secured multiple projects that align perfectly with my skills."</p>
              <span className="name">- Lamin Bah</span><span className="profession">Software Engineer</span>
            </div>
         </div>
          <div className="testimonial-card">
            <div className="testimonial-image">
              <img src="https://via.placeholder.com/50" alt="User" />
            </div>
            <div className="testimonial-text">
              <p>"SkillMatch has been a game-changer for our hiring process. We found candidates who not only have the right skills but also fit our company culture. The platform is intuitive and saves us so much time."</p>
              <span className="name">- Kadijatou Jah</span> <span className="institution">Bah Tech</span>
            </div>
          </div>
        </div>
        </div>
        <div className="advert">
          <h2>Advertise with Us</h2>
          <p>Looking to reach skilled professionals in West Africa? Advertise your job openings or services on SkillMatch and connect with the right audience.</p>
          <button className="advert-button">Advertise Now</button>
        </div>
        <div className="contact-us">
          <h2>Contact Us</h2>
          <p>Have questions or need support? Our team is here to help you make the most of SkillMatch.</p>
          <div className="contact-cards">
            <div className="contact-card">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M440-120v-80h320v-284q0-117-81.5-198.5T480-764q-117 0-198.5 81.5T200-484v244h-40q-33 0-56.5-23.5T80-320v-80q0-21 10.5-39.5T120-469l3-53q8-68 39.5-126t79-101q47.5-43 109-67T480-840q68 0 129 24t109 66.5Q766-707 797-649t40 126l3 52q19 9 29.5 27t10.5 38v92q0 20-10.5 38T840-249v49q0 33-23.5 56.5T760-120H440Zm-80-280q-17 0-28.5-11.5T320-440q0-17 11.5-28.5T360-480q17 0 28.5 11.5T400-440q0 17-11.5 28.5T360-400Zm240 0q-17 0-28.5-11.5T560-440q0-17 11.5-28.5T600-480q17 0 28.5 11.5T640-440q0 17-11.5 28.5T600-400Zm-359-62q-7-106 64-182t177-76q89 0 156.5 56.5T720-519q-91-1-167.5-49T435-698q-16 80-67.5 142.5T241-462Z"/></svg>
              <div className="contact-details">
                <p>Call SkillMatch and get connected to real support — fast, friendly, and always ready to help.</p>
                 <a href="tel:+2203281914">Call</a>
              </div>
           
          </div>
          <div className="contact-card">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
            <div className="contact-details">
              <p>Send us an email and we’ll get back to you within 24 hours.</p>
              <a href="mailto:support@skillmatch.com">Email</a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
      </div>

  );
}

export default HomePage;