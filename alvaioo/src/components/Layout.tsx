import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  openDemoModal: () => void;
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, openDemoModal, toggleTheme, isDarkMode }) => {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Navbar openDemoModal={openDemoModal} toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <main className="flex-grow pt-16"> {/* Adjust pt if navbar height changes */}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;