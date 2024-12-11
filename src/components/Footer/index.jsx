import { useEffect, useState } from 'react';
import { FaHeart, FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaArrowUp } from 'react-icons/fa';
import './Footer.css';


function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const footer = document.querySelector('.footer-section');
    if (footer) observer.observe(footer);

    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      if (footer) observer.unobserve(footer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
      

      
    });
  };

  return (
    <footer className={`footer-section ${isVisible ? 'visible' : ''}`}>
      <div className="footer-background-animation"></div>
      
      <div className="container">
        <div className="row">
          {/* Quick Links */}
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div className="footer-widget animate-up">
              <h3 className="widget-title">Quick Links</h3>
              <ul className="footer-links">
                <li><a href={'#home'}>Home</a></li>
                <li><a href={"#about"}>About</a></li>
                <li><a href={"#projects"}>Projects</a></li>
                <li><a href={"#contact"}>Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div className="footer-widget animate-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="widget-title">Contact Info</h3>
              <ul className="footer-info">
                <li>
                  <i className="fas fa-envelope"></i>
                  <span>polisettymadhupavan449@gmail.com</span>
                </li>
                <li>
                  <i className="fas fa-phone"></i>
                  <span>+919032221609</span>
                </li>
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Andhra Pradhesh, yanam</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div className="col-lg-4 col-md-12">
            <div className="footer-widget animate-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="widget-title">Follow Me</h3>
              <div className="social-links">
                <a href={'ppp'} className="social-link">
                  <FaGithub />
                </a>
                <a href={'ppp'} className="social-link">
                  <FaLinkedin />
                </a>
                <a href={'jjj'} className="social-link">
                  <FaTwitter />
                </a>
                <a href={'jjj'} className="social-link">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider animate-up" style={{ animationDelay: '0.6s' }}></div>

        {/* Copyright */}
        <div className="footer-bottom animate-up" style={{ animationDelay: '0.8s' }}>
          <p className="copyright">
            Made with <FaHeart className="heart-icon" /> P.Madhu Pavan
            <br />
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button 
        className={`scroll-top-btn ${showScrollTop ? 'show' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to Top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
}

export default Footer;
