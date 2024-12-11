import { useEffect } from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiExpress } from 'react-icons/si';
import './About.css';

function About() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="about-image-wrapper animate-on-scroll fade-right">
              <div className="about-image-container">
                <img 
                  src="photo/my.png" 
                  alt="Profile" 
                  className="about-image" 
                />
                {/* <div className="experience-badge">
                  <span className="years"></span>
                  <span className="text">Years of<br/>Experience</span>
                </div> */}
              </div>
              <div className="shape-1"></div>
              <div className="shape-2"></div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about-content">
              <h2 className="section-title animate-on-scroll fade-up">
                About Me
              </h2>
              <p className="lead mb-4 animate-on-scroll fade-up">
                A passionate Full Stack Developer based in [Your Location] 📍
              </p>
              <p className="description animate-on-scroll fade-up">
                I am a dedicated web developer with expertise in building responsive 
                and user-friendly applications. With a strong foundation in both 
                frontend and backend technologies, I create seamless digital experiences.
              </p>

              <div className="skills-section animate-on-scroll fade-up">
                <h3 className="skills-title">Tech Stack</h3>
                <div className="skills-grid">
                  <div className="skill-item" data-tooltip="HTML5">
                    <FaHtml5 className="skill-icon html" />
                  </div>
                  <div className="skill-item" data-tooltip="CSS3">
                    <FaCss3Alt className="skill-icon css" />
                  </div>
                  <div className="skill-item" data-tooltip="JavaScript">
                    <SiJavascript className="skill-icon js" />
                  </div>
                  <div className="skill-item" data-tooltip="React">
                    <FaReact className="skill-icon react" />
                  </div>
                  <div className="skill-item" data-tooltip="Node.js">
                    <FaNodeJs className="skill-icon node" />
                  </div>
                  <div className="skill-item" data-tooltip="MongoDB">
                    <SiMongodb className="skill-icon mongodb" />
                  </div>
                  <div className="skill-item" data-tooltip="Express.js">
                    <SiExpress className="skill-icon express" />
                  </div>
                  <div className="skill-item" data-tooltip="Git">
                    <FaGitAlt className="skill-icon git" />
                  </div>
                </div>
              </div>

              <div className="stats-container animate-on-scroll fade-up">
                
                
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
