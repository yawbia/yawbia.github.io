import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  compact?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = "", compact = false }) => {
  return (
    <section id={id} className={`section-wrapper ${className}`}>
      <div className="section-header">
        <h2 className="section-title">
          <span className="section-indicator"></span>
          {title}
        </h2>
      </div>
      <div className="section-content">
        {children}
      </div>
    </section>
  );
};

export default Section;