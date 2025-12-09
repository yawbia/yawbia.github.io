import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  GraduationCap,
  ArrowRight,
  ArrowUp
} from 'lucide-react';
import Navigation from './src/components/Navigation';
import Section from './src/components/Section';
import { PERSONAL_INFO, HIGHLIGHTS, PUBLICATIONS, EXPERIENCE, SOCIAL_LINKS, EDUCATION } from './constants';

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'github': return <Github size={18} />;
      case 'linkedin': return <Linkedin size={18} />;
      case 'graduation-cap': return <GraduationCap size={18} />;
      default: return <ExternalLink size={18} />;
    }
  };

  return (
    <div className="app-wrapper">
      
      <Navigation />

      <main className="main-content">
        {/* Compact Hero Section */}
        <div id="about" className="hero-section">
          <div className="hero-grid">
            <div className="hero-text-content">
              <div>
                <h1 className="hero-name">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="hero-title">
                  {PERSONAL_INFO.title}
                </p>
              </div>
              <p className="hero-tagline">
                {PERSONAL_INFO.tagline}
              </p>
              
              <div className="hero-socials">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    aria-label={link.platform}
                  >
                    {getIcon(link.icon)}
                  </a>
                ))}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="contact-btn-small"
                >
                  <Mail size={14} />
                  Contact
                </a>
              </div>
            </div>
            
            {/* About / Abstract Visual */}
            <div className="hero-abstract">
                <p>
                  {PERSONAL_INFO.about}
                </p>
                <a 
                  href="https://www.linkedin.com/in/yawbia/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="linkedin-link"
                >
                  More on LinkedIn <ArrowRight size={12} />
                </a>
            </div>
          </div>
        </div>

        {/* Experience & Education - Grid Layout */}
        <Section id="experience" title="Timeline" className="scroll-mt-24">
            <div className="timeline-grid">
              {/* Experience Column - Boxed Card Style */}
              <div className="exp-column">
                  <h3 className="exp-label">
                    Experience
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {EXPERIENCE.map((exp) => (
                      <div key={exp.id} className="exp-card">
                        <div className="exp-header">
                          <h4 className="exp-role">{exp.role}</h4>
                          <span className="exp-period">
                            {exp.period}
                          </span>
                        </div>
                        <div className="exp-company">{exp.company}</div>
                        <p className="exp-desc">
                          {exp.description}
                        </p>
                        <div className="exp-location">
                           <span className="dot"></span>
                           {exp.location}
                        </div>
                      </div>
                    ))}
                  </div>
              </div>

              {/* Education & Highlights Column - Timeline Style */}
              <div className="tree-column">
                <div id="education" style={{ scrollMarginTop: '7rem' }}>
                  <h3 className="exp-label">Education</h3>
                  <div className="tree-container">
                    {EDUCATION.map(edu => (
                      <div key={edu.id} className="tree-item">
                          <div className="tree-dot"></div>
                          <div className="tree-header">
                             <h4 className="tree-title">{edu.school}</h4>
                             <span className="tree-period">
                               {edu.period}
                             </span>
                          </div>
                          <div className="tree-subtitle">{edu.degree}</div>
                          {edu.description && <p className="tree-desc">{edu.description}</p>}
                      </div>
                    ))}
                  </div>
                </div>

                <div id="awards" style={{ scrollMarginTop: '7rem' }}>
                    <h3 className="exp-label">Highlights & Awards</h3>
                    <div className="tree-container highlights">
                    {HIGHLIGHTS.map((item) => (
                      <div key={item.id} className="tree-item highlights">
                        <div className="tree-dot"></div>
                        <p className="highlight-content">
                          <span className="highlight-date">
                            {item.date}
                          </span>
                          <span>{item.content}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
        </Section>

        {/* Publications - Overlapping Square Stack */}
        <Section id="publications" title="Selected Publications" className="scroll-mt-24">
            <div className="pubs-container">
              {PUBLICATIONS.map((pub, index) => (
                <a 
                  key={pub.id}
                  href={pub.links[0]?.url}
                  target="_blank"
                  rel="noreferrer"
                  className="pub-card"
                  style={{ zIndex: 10 + index }}
                >
                  {/* Abstract/Blank Placeholder Texture */}
                  <div className="pub-overlay"></div>
                  
                  {/* Content */}
                  <div className="pub-content">
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <span className="pub-year">
                            {pub.year}
                        </span>
                        <h3 className="pub-title">
                          {pub.title}
                        </h3>
                      </div>
                      
                      <div className="pub-footer">
                        <span className="pub-venue">
                          {pub.venue}
                        </span>
                        <ExternalLink size={14} className="pub-icon" />
                      </div>
                  </div>
                </a>
              ))}
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <a 
                href="https://scholar.google.com/citations?hl=en&user=vRS_sU4AAAAJ&view_op=list_works&sortby=pubdate" 
                target="_blank" 
                rel="noreferrer"
                className="btn-full-list"
              >
                View Full Publication List 
                <ArrowRight size={14} />
              </a>
            </div>
        </Section>

        {/* Contact Me Button Area + Footer Navigation (Alternative 3) */}
        <div className="contact-section">
            <h3 className="contact-title">Get In Touch</h3>
             <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="btn-contact-large"
            >
              <Mail size={16} />
              Contact Me
            </a>

            {/* Footer Navigation Links */}
            <div className="footer-nav">
              <a href="#about" className="footer-link">About</a>
              <a href="#experience" className="footer-link">Experience</a>
              <a href="#education" className="footer-link">Education</a>
              <a href="#publications" className="footer-link">Publications</a>
              <a href="#awards" className="footer-link">Highlights</a>
            </div>
            <p className="copyright">© {new Date().getFullYear()} Yaw Bia Tan. All rights reserved.</p>
         </div>

      </main>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`btn-back-to-top ${showScrollTop ? '' : 'hidden'}`}
        aria-label="Back to top"
      >
        <ArrowUp size={16} />
      </button>

    </div>
  );
};

export default App;
