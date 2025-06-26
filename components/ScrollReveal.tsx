
import React, { useEffect, useRef, useState } from 'react';
import { ScrollRevealProps } from '../types';

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  className = '', 
  animationClass = 'animate-fade-in-up', 
  delay = '', 
  threshold = 0.1, 
  triggerOnce = true 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce && elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        } else {
          if (!triggerOnce) {
            setIsVisible(false); // Re-trigger animation if element scrolls out and back in
          }
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(elementRef.current);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [threshold, triggerOnce]);

  return (
    <div
      ref={elementRef}
      className={`${className} transition-opacity duration-1000 ${delay} ${isVisible ? `opacity-100 ${animationClass}` : 'opacity-0'}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
