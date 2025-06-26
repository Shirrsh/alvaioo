
import React, { lazy, Suspense } from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import ScrollReveal from '@/components/ScrollReveal';
import { ShieldCheck } from 'lucide-react';

const Minimal3DScene = lazy(() => import('@/components/3d/Minimal3DScene'));

const PrivacyPolicyPage: React.FC = () => {
  return (
    <SectionWrapper id="privacy-policy" bgClassName="py-20 md:py-28 bg-light-bg dark:bg-dark-bg">
      <div className="text-center mb-12">
        <ScrollReveal>
          <ShieldCheck size={48} className="mx-auto mb-4 text-brand-primary dark:text-brand-accent" />
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
          </p>
        </ScrollReveal>
      </div>

      <ScrollReveal className="bg-white dark:bg-dark-card p-6 md:p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">1. Information We Collect</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          We collect information you provide directly to us, such as when you create an account, fill out a form, request customer support, or otherwise communicate with us. This may include your name, email address, phone number, company name, and any other information you choose to provide.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 mt-6">2. How We Use Your Information</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          We use the information we collect to:
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>Provide, maintain, and improve our services;</li>
            <li>Process transactions and send you related information;</li>
            <li>Send you technical notices, updates, security alerts, and support messages;</li>
            <li>Respond to your comments, questions, and requests;</li>
            <li>Communicate with you about products, services, offers, and events offered by ALVAIO and others;</li>
            <li>Monitor and analyze trends, usage, and activities in connection with our services.</li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 mt-6">3. Sharing of Information</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          We do not share your personal information with third parties except as described in this Privacy Policy or with your consent.
        </p>

        {/* Placeholder for more sections */}
        <p className="text-gray-700 dark:text-gray-300 mt-6">
          This is a simplified privacy policy. Please consult a legal professional for a comprehensive policy tailored to your specific business needs.
        </p>
      </ScrollReveal>
      
      <div className="mt-12">
        <Suspense fallback={<div className="suspense-fallback">Loading 3D Scene...</div>}>
          <Minimal3DScene meshShape="sphere" meshColor="#0EA5E9" cameraPosition={[0,0,3]} />
        </Suspense>
      </div>
    </SectionWrapper>
  );
};

export default PrivacyPolicyPage;
