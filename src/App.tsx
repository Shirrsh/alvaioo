
import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import ServicesPage from '@/pages/ServicesPage';
import AIAutomationPage from '@/pages/AIAutomationPage';
import IndustriesPage from '@/pages/IndustriesPage';
import WhyAlvaioPage from '@/pages/WhyAlvaioPage';
import CaseStudiesPage from '@/pages/CaseStudiesPage';
import ContactPage from '@/pages/ContactPage';
import BlogPage from '@/pages/BlogPage';
import LoginPage from '@/pages/LoginPage'; 
import DemoModal from '@/components/DemoModal'; 
import { NAV_LINKS } from '@/constants'; 

const PrivacyPolicyPage = lazy(() => import('@/pages/PrivacyPolicyPage'));
const TermsOfServicePage = lazy(() => import('@/pages/TermsOfServicePage'));

const App: React.FC = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const openDemoModal = () => setIsDemoModalOpen(true);
  const closeDemoModal = () => setIsDemoModalOpen(false);

  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
             (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  
  const SuspenseFallback = () => <div className="suspense-fallback">Loading Page...</div>;

  return (
    <Layout openDemoModal={openDemoModal} toggleTheme={toggleTheme} isDarkMode={isDarkMode}>
      <Suspense fallback={<SuspenseFallback />}>
        <Routes>
          <Route path={NAV_LINKS.home} element={<HomePage openDemoModal={openDemoModal} />} />
          <Route path={NAV_LINKS['our-services']} element={<ServicesPage />} />
          <Route path={NAV_LINKS['ai-automation']} element={<AIAutomationPage />} />
          <Route path={NAV_LINKS.industries} element={<IndustriesPage />} />
          <Route path={NAV_LINKS['why-alvaio']} element={<WhyAlvaioPage />} />
          <Route path={NAV_LINKS['case-studies']} element={<CaseStudiesPage />} />
          <Route path={NAV_LINKS['contact-us']} element={<ContactPage />} />
          <Route path={NAV_LINKS.blog} element={<BlogPage />} />
          <Route path={NAV_LINKS.login} element={<LoginPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="*" element={<HomePage openDemoModal={openDemoModal} />} /> {/* Fallback to home */}
        </Routes>
      </Suspense>
      {isDemoModalOpen && <DemoModal onClose={closeDemoModal} />}
    </Layout>
  );
};

export default App;
