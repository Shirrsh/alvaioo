
import React, { lazy, Suspense } from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import ScrollReveal from '@/components/ScrollReveal';
import { FileText } from 'lucide-react';

const Minimal3DScene = lazy(() => import('@/components/3d/Minimal3DScene'));

const TermsOfServicePage: React.FC = () => {
  return (
    <SectionWrapper id="terms-of-service" bgClassName="py-20 md:py-28 bg-light-bg dark:bg-dark-bg">
      <div className="text-center mb-12">
        <ScrollReveal>
          <FileText size={48} className="mx-auto mb-4 text-brand-primary dark:text-brand-accent" />
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Terms of Service</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Please read these terms carefully before using our services.
          </p>
        </ScrollReveal>
      </div>

      <ScrollReveal className="bg-white dark:bg-dark-card p-6 md:p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">1. Acceptance of Terms</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          By accessing or using the services provided by ALVAIO ("Company", "we", "us", or "our"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use our services.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 mt-6">2. Description of Service</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          ALVAIO provides e-commerce solutions and AI automation workflows for businesses. These services may include, but are not limited to, account management, listing optimization, AI chatbots, and process automation.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 mt-6">3. User Responsibilities</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
        </p>
        
        {/* Placeholder for more sections */}
         <p className="text-gray-700 dark:text-gray-300 mt-6">
          This is a simplified terms of service document. Please consult a legal professional for a comprehensive policy tailored to your specific business needs.
        </p>
      </ScrollReveal>
      
      <div className="mt-12">
        <Suspense fallback={<div className="suspense-fallback">Loading 3D Scene...</div>}>
          <Minimal3DScene meshShape="box" meshColor="#4F46E5" wireframe={true} cameraPosition={[0,0,4]} />
        </Suspense>
      </div>
    </SectionWrapper>
  );
};

export default TermsOfServicePage;
