
import React, { lazy, Suspense } from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import LottiePlayer from '@/components/LottiePlayer';
import ScrollReveal from '@/components/ScrollReveal';
import { LOTTIE_ANIMATIONS, WHY_ALVAIO_POINTS } from '@/constants';
import { CheckCircle, ShieldCheck, Smile } from 'lucide-react';

const Minimal3DScene = lazy(() => import('@/components/3d/Minimal3DScene'));

const comparisonPoints = [
  { category: 'Task Handling', manual: 'Time-consuming, error-prone', alvaio: 'Automated, accurate, 24/7 operation' },
  { category: 'Customer Response', manual: 'Delayed, inconsistent', alvaio: 'Instant, personalized AI replies' },
  { category: 'Data Analysis', manual: 'Basic, slow reporting', alvaio: 'Real-time insights, predictive analytics' },
  { category: 'Scalability', manual: 'Limited by manpower', alvaio: 'Effortlessly scales with business growth' },
  { category: 'Operational Costs', manual: 'High labor costs', alvaio: 'Reduced overhead, optimized resource use' },
];

const WhyAlvaioPage: React.FC = () => {
  return (
    <>
      <SectionWrapper id="why-alvaio-hero" bgClassName="py-20 md:py-28 bg-gradient-to-br from-brand-primary via-deep-purple to-gray-900 text-white">
        <div className="text-center">
          <ScrollReveal>
            <ShieldCheck size={64} className="mx-auto mb-6 text-green-300 animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Why Partner with ALVAIO?</h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
              Discover the ALVAIO difference: tangible results, cutting-edge technology, and a partnership focused on your growth.
            </p>
          </ScrollReveal>
        </div>
      </SectionWrapper>
      
      <SectionWrapper id="why-alvaio-3d" bgClassName="py-10 md:py-12 bg-light-bg dark:bg-dark-bg">
        <Suspense fallback={<div className="suspense-fallback">Loading 3D Scene...</div>}>
          <Minimal3DScene meshShape="dodecahedron" meshColor="#4ADE80" enableControls={true} />
        </Suspense>
      </SectionWrapper>

      {/* Comparison Slider Section */}
      <SectionWrapper id="comparison" bgClassName="py-16 md:py-24 bg-light-bg dark:bg-dark-bg">
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Manual vs. ALVAIO Automation</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">See the clear advantages of automating your business processes.</p>
          </ScrollReveal>
        </div>
        <ScrollReveal className="overflow-x-auto">
          <div className="min-w-max md:min-w-full bg-white dark:bg-dark-card shadow-xl rounded-lg p-6 md:p-8">
            <div className="grid grid-cols-3 gap-4 font-semibold text-gray-700 dark:text-gray-200 border-b pb-4 mb-4">
              <div>Category</div>
              <div className="text-center">Traditional / Manual</div>
              <div className="text-center text-brand-primary dark:text-brand-accent">ALVAIO Automation</div>
            </div>
            {comparisonPoints.map((point, index) => (
              <div key={index} className={`grid grid-cols-3 gap-4 py-3 ${index < comparisonPoints.length -1 ? 'border-b border-gray-200 dark:border-gray-700' : ''} items-center`}>
                <div className="font-medium text-gray-700 dark:text-gray-300">{point.category}</div>
                <div className="text-center text-gray-600 dark:text-gray-400 text-sm">{point.manual}</div>
                <div className="text-center text-green-600 dark:text-green-400 font-semibold text-sm flex items-center justify-center">
                  <CheckCircle size={16} className="mr-1" /> {point.alvaio}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </SectionWrapper>

      {/* Benefits Section with 3D AI Bot */}
      <SectionWrapper id="benefits" bgClassName="py-16 md:py-24 bg-gray-50 dark:bg-dark-card">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal animationClass="animate-fade-in-left" className="flex justify-center md:order-last">
             <LottiePlayer src={LOTTIE_ANIMATIONS.robotAssistant} className="w-full max-w-lg h-auto animate-subtle-bob" />
          </ScrollReveal>
          <ScrollReveal animationClass="animate-fade-in-right" className="md:order-first">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">Unlock Key Advantages</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              ALVAIO isn't just about automation; it's about transforming your business for sustainable success.
            </p>
            <ul className="space-y-6">
              {WHY_ALVAIO_POINTS.map(point => {
                const Icon = point.icon || Smile;
                return (
                 <li key={point.title} className="flex items-start">
                    <div className="flex-shrink-0">
                       <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-primary/10 dark:bg-brand-accent/10 text-brand-primary dark:text-brand-accent mr-4">
                        <Icon size={24} />
                       </div>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-gray-700 dark:text-gray-200">{point.title}: <span className="text-brand-primary dark:text-brand-accent">{point.value}</span></h4>
                        <p className="text-gray-600 dark:text-gray-400">{point.description}</p>
                    </div>
                </li>
                );
              })}
            </ul>
          </ScrollReveal>
        </div>
      </SectionWrapper>
    </>
  );
};

export default WhyAlvaioPage;