
import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS_CONFIG, COMPANY_INFO, SOCIAL_HANDLES } from '@/constants';
import { Linkedin, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react'; 
import { LucideIconType } from '@/types'; // Import LucideIconType

const iconMap: { [key: string]: LucideIconType } = { // Changed React.ElementType to LucideIconType
  LinkedIn: Linkedin,
  Twitter: Twitter,
  Facebook: Facebook,
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-dark-card text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h5 className="text-xl font-bold bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent gradient-text mb-4">{COMPANY_INFO.name}</h5>
            <p className="text-sm mb-2">{COMPANY_INFO.tagline}</p>
            <div className="space-y-2 text-sm">
                <p className="flex items-center"><MapPin size={16} className="mr-2 text-brand-primary" /> {COMPANY_INFO.address}</p>
                <p className="flex items-center"><Mail size={16} className="mr-2 text-brand-primary" /> {COMPANY_INFO.email}</p>
                <p className="flex items-center"><Phone size={16} className="mr-2 text-brand-primary" /> {COMPANY_INFO.phone}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Quick Links</h5>
            <ul className="space-y-2">
              {NAV_LINKS_CONFIG.slice(0, 5).map((link) => ( 
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-brand-primary dark:hover:text-brand-accent transition-colors duration-200 text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Teaser */}
          <div>
            <h5 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Our Focus</h5>
            <ul className="space-y-2 text-sm">
              <li>E-commerce Excellence</li>
              <li>AI Business Automation</li>
              <li>SMB Growth Strategies</li>
              <li>Workflow Optimization</li>
            </ul>
          </div>
          
          {/* Social & Newsletter */}
          <div>
            <h5 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Connect</h5>
            <div className="flex space-x-4 mb-4">
              {SOCIAL_HANDLES.map((social) => {
                const IconComponent = iconMap[social.name];
                if (!IconComponent) return null; 
                return (
                  <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-brand-primary dark:hover:text-brand-accent transition-colors duration-200" aria-label={`Follow us on ${social.name}`}>
                    <IconComponent size={24} />
                    <span className="sr-only">{social.name}</span>
                  </a>
                );
              })}
            </div>
            <p className="text-sm mb-2">Stay updated with our latest insights:</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex">
              <input type="email" placeholder="Your email" aria-label="Subscribe to newsletter" className="w-full px-3 py-2 rounded-l-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-brand-primary" />
              <button type="submit" className="bg-brand-primary hover:bg-brand-primary/90 text-white px-4 py-2 rounded-r-md font-semibold transition-colors">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
          <p className="mt-1">
            <Link to="/privacy-policy" className="hover:underline mx-2">Privacy Policy</Link> | 
            <Link to="/terms-of-service" className="hover:underline mx-2">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
