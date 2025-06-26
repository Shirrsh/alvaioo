
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AIAutomationPage from './pages/AIAutomationPage';
import IndustriesPage from './pages/IndustriesPage';
import WhyAlvaioPage from './pages/WhyAlvaioPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import LoginPage from './pages/LoginPage';
import DemoModal from './components/DemoModal';
import { NAV_LINKS } from './constants'; // Assuming NAV_LINKS has path property

const App: React.FC = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const openDemoModal = () => setIsDemoModalOpen(true);
  const closeDemoModal = () => setIsDemoModalOpen(false);

  // Basic theme toggle example
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

  return (
    <Layout openDemoModal={openDemoModal} toggleTheme={toggleTheme} isDarkMode={isDarkMode}>
      <Routes>
        <Route path={NAV_LINKS.home} element={<HomePage openDemoModal={openDemoModal} />} />
        <Route path={NAV_LINKS.services} element={<ServicesPage />} />
        <Route path={NAV_LINKS.aiAutomation} element={<AIAutomationPage />} />
        <Route path={NAV_LINKS.industries} element={<IndustriesPage />} />
        <Route path={NAV_LINKS.whyAlvaio} element={<WhyAlvaioPage />} />
        <Route path={NAV_LINKS.caseStudies} element={<CaseStudiesPage />} />
        <Route path={NAV_LINKS.contact} element={<ContactPage />} />
        <Route path={NAV_LINKS.blog} element={<BlogPage />} />
        <Route path={NAV_LINKS.login} element={<LoginPage />} />
        <Route path="*" element={<HomePage openDemoModal={openDemoModal} />} /> {/* Fallback to home */}
      </Routes>
      {isDemoModalOpen && <DemoModal onClose={closeDemoModal} />}
    </Layout>
  );
};

export default App;
