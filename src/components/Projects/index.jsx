import { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

function Projects() {
  const [filter, setFilter] = useState('all');
  const [animated, setAnimated] = useState(false);

  const projects = [
    {
      id: 1,
      title: "V.R Dental Care",
      description: "v.r Dental Care we are committed to provide high quality dental services",
      image: "photo/vr.png",
      category: "fullstack",
      technologies: ["React", "Node.js", "GoogleSheet", "Stripe"],
      githubLink: "https://github.com/Pavan20kumar/V.R-Dental-care",
      liveLink: "https://v-r-dental-care.vercel.app/",
      featured: true
    },
    {
      id: 2,
      title: "Social Media Dashboard",
      description: "Real-time analytics dashboard for social media metrics",
      image: "project2.jpg",
      category: "frontend",
      technologies: ["React", "Redux", "Chart.js", "Socket.io"],
      githubLink: "#",
      liveLink: "#",
      featured: true
    },
    {
      id: 3,
      title: "Wikipedia Website",
      description: "Wikipedia is provided by information",
      image: "photo/wi.png",
      category: "frontend",
      technologies: ["Html", "Css", "Bootstrap", "JavaScript",],
      githubLink: "https://github.com/Pavan20kumar/ChatGpt",
      liveLink: "https://wikipedia-silk.vercel.app/",
      featured: true
    }
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setAnimated(true);
        }
      });
    }, observerOptions);

    observer.observe(document.querySelector('.projects-section'));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="section-title animate-on-scroll">
              My Recent Projects
              <span className="highlight-bar"></span>
            </h2>
            <p className="section-subtitle animate-on-scroll">
              Here are some of my recent works
            </p>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="filter-buttons mb-5 animate-on-scroll">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${filter === 'frontend' ? 'active' : ''}`}
            onClick={() => setFilter('frontend')}
          >
            Frontend
          </button>
          <button 
            className={`filter-btn ${filter === 'fullstack' ? 'active' : ''}`}
            onClick={() => setFilter('fullstack')}
          >
            Full Stack
          </button>
        </div>

        {/* Projects Grid */}
        <div className="row g-4">
          {projects
            .filter(project => filter === 'all' || project.category === filter)
            .map((project, index) => (
              <div 
                key={project.id} 
                className={`col-md-6 col-lg-4 project-item ${animated ? 'show' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="project-card">
                  <div className="project-image-wrapper">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="project-image"
                    />
                    <div className="project-overlay">
                      <div className="project-links">
                        <a href={project.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
                          <FaGithub />
                        </a>
                        <a href={project.liveLink} className="project-link" target="_blank" rel="noopener noreferrer">
                          <FaExternalLinkAlt />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    
                    <div className="tech-stack">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.featured && (
                      <div className="featured-badge">
                        Featured
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
