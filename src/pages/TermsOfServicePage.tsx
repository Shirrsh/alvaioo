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
        
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 mt-6">2. Use of Services</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for all your activity in connection with the services. You agree not to:
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>Engage in any activity that is illegal, fraudulent, or harmful.</li>
            <li>Attempt to gain unauthorized access to our systems or user accounts.</li>
            <li>Transmit any viruses, worms, or malicious code.</li>
            <li>Interfere with or disrupt the integrity or performance of the services.</li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 mt-6">3. Intellectual Property</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          All content, features, and functionality on our services, including text, graphics, logos, icons, and software, are the exclusive property of ALVAIO or its licensors and are protected by intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any part of our services without our prior written consent.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 mt-6">4. Disclaimer of Warranties</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
            Our services are provided "as is" and "as available" without any warranties of any kind, express or implied. We do not warrant that the services will be uninterrupted, error-free, or secure.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 mt-6">5. Limitation of Liability</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
            To the fullest extent permitted by law, ALVAIO shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your use of our services.
        </p>

        <p className="text-gray-700 dark:text-gray-300 mt-6">
          This is a simplified terms of service. Please consult a legal professional for a comprehensive policy tailored to your specific business needs and jurisdiction.
        </p>
      </ScrollReveal>
      
      <div className="mt-12">
        <Suspense fallback={<div className="suspense-fallback">Loading 3D Scene...</div>}>
          <Minimal3DScene meshShape="box" meshColor="#FBBF24" cameraPosition={[0,0,3]}/>
        </Suspense>
      </div>
    </SectionWrapper>
  );
};

export default TermsOfServicePage;