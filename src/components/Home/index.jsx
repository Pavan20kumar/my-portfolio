import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Home.css';

function Home() {
  
  const onDownloadClick = () => {
    const link = document.createElement('a');
    link.href = 'http://localhost:3000/MadhuPavan.pdf';
    link.download = 'Madhu_Pavan_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    
  };
  return (
    <section id="home" className="hero min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 text-center text-lg-start">
            <div className="profile-content">
              <div className="text-animation">
                <h2 className="subtitle text-secondary">Welcome to my Portfolio</h2>
              </div>
              <div className="name-animation">
                <h1 className="main-title">Hi, I'm <span className="highlight">Madhu Pavan</span></h1>
              </div>
              <div className="role-animation">
                <div className="role-wrapper">
                  <span className="roles">
                    Full Stack Developer
                    
                    
                    <br />
                    Web Developer
                  </span>
                </div>
              </div>
              <p className="description fade-in">
                I'm a passionate Full Stack Developer with expertise in building responsive and user-friendly applications. With a strong foundation in both frontend and backend technologies, I create seamless digital experiences.
              </p>
              
              <div className="social-links fade-in">
                <a href={"https://github.com/Pavan20kumar"} className="social-icon">
                  <FaGithub />
                </a>
                <a href={"https://www.linkedin.com/in/naga-madhu-pavan-kumar-polisetty-6457bb265"} className="social-icon">
                  <FaLinkedin />
                </a>
                <a href={"https://x.com/PolisettyMadhu?t=W8AMMQuHRd1VHJzd3ZtRgQ&s=09"} className="social-icon">
                  <FaTwitter />
                </a>
                <a href={"https://www.instagram.com/madhupavanp/profilecard/?igsh=MTA3eHJkZHhxeWV4dA=="} className="social-icon">
                  <FaInstagram />
                </a>
              </div>

              <div className="mt-4 fade-in">
                <button className="custom-btn btn-primary me-3" onClick={onDownloadClick}>Download CV</button>
                <a href={'tel:+919032221609'}> <button className="custom-btn btn-secondary">Contact Me</button></a>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6 text-center">
            <div className="profile-image-container fade-in">
              <div className="profile-image-wrapper">
                <img src='photo/my.png' alt="Profile" className="profile-image" />
              </div>
              <div className="animated-background"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
