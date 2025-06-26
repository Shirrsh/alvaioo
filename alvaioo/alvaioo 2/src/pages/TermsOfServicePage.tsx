
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
          By accessing or using the services provided by ALVAIO ("Company", "we", "us", or "our"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do