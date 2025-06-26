
import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import ScrollReveal from '../components/ScrollReveal';
import { Testimonial } from '../types';
import { LOTTIE_ANIMATIONS } from '../constants';
import { Star, MessageSquare, TrendingUp } from 'lucide-react';
import LottiePlayer from '../components/LottiePlayer';

const testimonialsData: Testimonial[] = [
  { id: 't1', quote: "ALVAIO's AI automation transformed our customer support, reducing response times by 70% and boosting satisfaction significantly!", author: 'Jane Doe', company: 'CEO, Fashionista Co.', avatarUrl: 'https://picsum.photos/seed/jane/100/100', improvement: '-70% Response Time' },
  { id: 't2', quote: "Our e-commerce sales have increased by 40% since implementing ALVAIO's listing optimization and inventory management. Game changer!", author: 'John Smith', company: 'Founder, GadgetGalaxy', avatarUrl: 'https://picsum.photos/seed/john/100/100', improvement: '+40% Sales' },
  { id: 't3', quote: "The CRM automation workflows ALVAIO set up saved us countless hours and helped us convert more leads. Highly recommended!", author: 'Alice Brown', company: 'Marketing Director, HomeComforts', avatarUrl: 'https://picsum.photos/seed/alice/100/100', improvement: '+25% Lead Conversion' },
  { id: 't4', quote: "Managing our multi-platform presence was a nightmare. ALVAIO streamlined everything, allowing us to focus on growth.", author: 'Robert Green', company: 'Owner, Gourmet Foods Inc.', avatarUrl: 'https://picsum.photos/seed/robert/100/100', improvement: '50+ Hours Saved Weekly' },
];

const CaseStudiesPage: React.FC = () => {
  return (
    <>
    <SectionWrapper id="casestudies-hero" bgClassName="py-20 md:py-28 bg-gradient-to-br from-brand-secondary via-deep-purple to-gray-900 text-white">
        <div className="text-center">
          <ScrollReveal>
            <TrendingUp size={64} className="mx-auto mb-6 text-yellow-300 animate-bounce" />
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Real Results, Real Growth</h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
              See how businesses like yours have achieved remarkable success with ALVAIO.
            </p>
          </ScrollReveal>
        </div>
      </SectionWrapper>

    <SectionWrapper id="testimonials" bgClassName="py-16 md:py-24 bg-light-bg dark:bg-dark-bg">
      <div className="text-center mb-16">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Hear directly from businesses that have partnered with ALVAIO.</p>
        </ScrollReveal>
      </div>
      
      {/* Testimonial Carousel - simplified horizontal scroll */}
      <ScrollReveal className="relative">
        <div className="flex overflow-x-auto space-x-8 pb-8 scrollbar-thin scrollbar-thumb-brand-primary/50 dark:scrollbar-thumb-brand-accent/50 scrollbar-track-gray-100 dark:scrollbar-track-gray-700">
          {testimonialsData.map((testimonial, index) => (
            <div key={testimonial.id} className="flex-shrink-0 w-80 md:w-96 bg-white dark:bg-dark-card shadow-xl rounded-lg p-8 transform transition-all hover:scale-105">
              <div className="flex items-center mb-4">
                <img src={testimonial.avatarUrl} alt={testimonial.author} className="w-16 h-16 rounded-full mr-4 border-2 border-brand-primary dark:border-brand-accent"/>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.company}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} className="text-yellow-400 fill-current" />)}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
              {testimonial.improvement && (
                <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm font-semibold text-green-600 dark:text-green-400 flex items-center">
                    <TrendingUp size={18} className="mr-2"/> Result: {testimonial.improvement}
                  </p>
                </div>
              )}
            </div>
          ))}
           {/* Add a "ghost" card to ensure last real card can scroll fully into view if needed */}
          <div className="flex-shrink-0 w-1"></div>
        </div>
      </ScrollReveal>
      
      {/* Placeholder for more detailed case studies */}
      <div className="mt-16 text-center">
        <ScrollReveal>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Want to see more?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">We have detailed case studies available for various industries and specific automation solutions.</p>
            <button className="bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors">
                Request Full Case Studies
            </button>
        </ScrollReveal>
      </div>

    </SectionWrapper>
    </>
  );
};

export default CaseStudiesPage;
