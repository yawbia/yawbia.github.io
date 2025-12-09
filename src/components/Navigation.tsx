import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [showFloatingButton, setShowFloatingButton] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating button after scrolling past the initial header area (e.g., 200px)
      setShowFloatingButton(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Publications', href: '#publications' },
    { name: 'Highlights', href: '#awards' },
  ];

  return (
    <>
      {/* Alternative 1: Static Top Navigation (Scrolls away) */}
      <nav className="nav-static">
        <div className="nav-content">
          <a href="#" className="logo">
            YB.
          </a>

          {/* Desktop Inline Links */}
          <div className="nav-links-desktop">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="nav-link"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          {/* Mobile Placeholder */}
          <div className="mobile-placeholder" style={{display: 'none'}}></div>
        </div>
      </nav>

      {/* Alternative 2: Floating Menu Button (Appears on Scroll) */}
      <button 
        className={`nav-floating-btn ${showFloatingButton || isMenuOpen ? '' : 'hidden'}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Full Screen Menu Overlay */}
      <div 
        className={`nav-overlay ${isMenuOpen ? 'open' : 'closed'}`}
      >
        <div className="nav-overlay-content">
          {navLinks.map((link, index) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="nav-overlay-link"
              style={{ transitionDelay: `${index * 50}ms` }}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;