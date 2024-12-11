import { useState, useEffect } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('.contact-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add your form submission logic here
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  return (
    <section className={`contact-section ${isVisible ? 'visible' : ''}`} id="contact">
      <div className="contact-background"></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center mb-5">
            <h2 className="section-title animate-up">
              Get In Touch
              <div className="title-decoration"></div>
            </h2>
            <p className="section-subtitle animate-up-delay-1">
              Let's work together to bring your ideas to life
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          {/* Contact Info Cards */}
          <div className="col-lg-4 mb-4 mb-lg-0">
            <div className="contact-info">
              <div className="contact-card animate-up-delay-2">
                <div className="card-icon">
                  <FaEnvelope />
                </div>
                <h3>Email</h3>
               <a href={'mailto:polisettymadhupavan449@gmail.com'}><p>polisettymadhupavan@gmail.com</p></a> 
                <div className="card-decoration"></div>
              </div>

              <div className="contact-card animate-up-delay-3">
                <div className="card-icon">
                  <FaPhone />
                </div>
                <h3>Phone</h3>
               <a href={'tel: +919032221609'}> <p>+91903221609</p></a>
                <div className="card-decoration"></div>
              </div>

              <div className="contact-card animate-up-delay-4">
                <div className="card-icon">
                  <FaMapMarkerAlt />
                </div>
                <h3>Location</h3>
                <p>Yanam, Pondicherry</p>
                <div className="card-decoration"></div>
              </div>

              <div className="social-links animate-up-delay-5">
                <a href={"ppp"} className="social-link">
                  <FaLinkedin />
                </a>
                <a href={"pppp"} className="social-link">
                  <FaGithub />
                </a>
                <a href={"pppp"} className="social-link">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-8">
            <div className="contact-form-wrapper animate-up-delay-6">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                    <div className="focus-border"></div>
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                    <div className="focus-border"></div>
                  </div>
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    required
                  />
                  <div className="focus-border"></div>
                </div>

                <div className="form-group">
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  ></textarea>
                  <div className="focus-border"></div>
                </div>

                <button 
                  type="submit" 
                  className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="spinner"></span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
