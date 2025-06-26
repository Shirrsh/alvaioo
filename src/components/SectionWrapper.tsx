
import React from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bgClassName?: string; // For custom background like gradients
  containerClassName?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, className = '', id, bgClassName = 'py-16 md:py-24', containerClassName = 'container mx-auto px-4 sm:px-6 lg:px-8' }) => {
  return (
    <section id={id} className={`${bgClassName} ${className}`}>
      <div className={containerClassName}>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
