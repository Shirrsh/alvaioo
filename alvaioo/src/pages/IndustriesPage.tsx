
import React, { lazy, Suspense } from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import ScrollReveal from '@/components/ScrollReveal';
import { Industry, LucideIconType } from '@/types'; // Import LucideIconType
import { INDUSTRY_ICONS } from '@/constants';
// import LottiePlayer from '@/components/LottiePlayer'; // Not used directly here, but good to have if needed for other image types

const Minimal3DScene = lazy(() => import('@/components/3d/Minimal3DScene'));

const industriesData: Industry[] = [
  { id: 'ind1', name: 'Fashion & Apparel', description: 'AI-driven inventory, trend forecasting, and personalized marketing for fashion brands.', imageUrl: 'https://picsum.photos/seed/fashion/600/400', },
  { id: 'ind2', name: 'Electronics & Gadgets', description: 'Streamlined listing, competitive pricing automation, and efficient returns handling for electronics retailers.', imageUrl: 'https://picsum.photos/seed/electronics/600/400', },
  { id: 'ind3', name: 'FMCG & Groceries', description: 'Automated reordering, demand planning, and hyper-local delivery coordination for fast-moving consumer goods.', imageUrl: 'https://picsum.photos/seed/fmcg/600/400', },
  { id: 'ind4', name: 'Jewelry & Accessories', description: 'Secure inventory management, high-value item tracking, and personalized customer engagement for luxury goods.', imageUrl: 'https://picsum.photos/seed/jewelry/600/400', },
  { id: 'ind5', name: 'Furniture & Home Decor', description: 'Complex catalog management, logistics automation for bulky items, and AI-powered product recommendations.', imageUrl: 'https://picsum.photos/seed/furniture/600/400', },
  { id: 'ind6', name: 'Health & Beauty', description: 'Subscription management, personalized product suggestions based on AI skin/health analysis, and regulatory compliance automation.', imageUrl: 'https://picsum.photos/seed/health/600/400', },
];

const IndustriesPage: React.FC = () => {
  return (
    <SectionWrapper id="industries" bgClassName="py-20 md:py-28 bg-light-bg dark:bg-dark-bg">
      <div className="text-center mb-16">
        <ScrollReveal>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">Industries We Empower</h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            ALVAIO provides tailored AI automation and e-commerce solutions across a diverse range of sectors.
          </p>
        </ScrollReveal>
      </div>
      
       <div className="mb-12">
        <Suspense fallback={<div className="suspense-fallback">Loading 3D Scene...</div>}>
          <Minimal3DScene meshShape="sphere" meshColor="#F59E0B" cameraPosition={[0,0,4]} />
        </Suspense>
      </div>

      <div className="space-y-16">
        {industriesData.map((industry, index) => {
          const industryKey = industry.name.toLowerCase().split(' ')[0].replace('&', '').replace('fmcg', 'fmcg').trim();
          const IconComponent: LucideIconType = INDUSTRY_ICONS[industryKey] || INDUSTRY_ICONS.fmcg; // Fallback icon, ensure type
          return (
            <ScrollReveal key={industry.id} animationClass={index % 2 === 0 ? 'animate-fade-in-left' : 'animate-fade-in-right'}>
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center bg-white dark:bg-dark-card shadow-xl rounded-xl overflow-hidden`}>
                <div className="md:w-1/2">
                  <img src={industry.imageUrl} alt={industry.name} className="w-full h-64 md:h-full object-cover"/>
                </div>
                <div className="md:w-1/2 p-8 md:p-12">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-primary/10 dark:bg-brand-accent/10">
                     <IconComponent size={28} className="text-brand-primary dark:text-brand-accent" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-4">{industry.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{industry.description}</p>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default IndustriesPage;
