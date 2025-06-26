
import React, { useEffect, useRef, useState } from 'react';
import { ScrollRevealProps } from '@/types';

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

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, triggerOnce, animationClass]); // Added animationClass to dependencies if it can change

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
