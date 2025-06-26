
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionWrapper from '../components/SectionWrapper';
import ScrollReveal from '../components/ScrollReveal';
import { COMPANY_INFO, CONTACT_FORM_FIELDS, SOCIAL_HANDLES } from '../constants';
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Facebook, CheckCircle as CheckCircleIcon, ArrowRight as ArrowRightIconLucide } from 'lucide-react'; // Renamed to avoid conflict
import { LucideIconType } from '../types'; // Import LucideIconType

const iconMap: { [key: string]: LucideIconType } = { // Changed React.ElementType to LucideIconType
  LinkedIn: Linkedin,
  Twitter: Twitter,
  Facebook: Facebook,
};

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
        alert("Please fill in all required fields.");
        return;
    }
    console.log("Form submitted:", formData); // Replace with actual submission logic
    setIsSubmitted(true);
    setFormData({}); 
  };

  return (
    <SectionWrapper id="contact" bgClassName="py-20 md:py-28 bg-light-bg dark:bg-dark-bg">
      <div className="text-center mb-16">
        <ScrollReveal>
          <Mail size={64} className="mx-auto mb-6 text-brand-primary dark:text-brand-accent" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">Get in Touch</h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Ready to automate your growth? Have questions? We're here to help.
          </p>
        </ScrollReveal>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <ScrollReveal animationClass="animate-fade-in-left" className="bg-white dark:bg-dark-card p-8 rounded-xl shadow-2xl">
          {isSubmitted ? (
            <div className="text-center py-12">
              <CheckCircleIcon size={48} className="mx-auto text-green-500 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Thank You!</h3>
              <p className="text-gray-600 dark:text-gray-400">Your message has been sent. We'll get back to you shortly.</p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-6 bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold py-2 px-4 rounded-lg"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Send Us a Message</h2>
              {CONTACT_FORM_FIELDS.map(field => (
                <div key={field.name}>
                  <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {field.placeholder}{field.required && <span className="text-red-500">*</span>}
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea
                      id={field.name}
                      name={field.name}
                      rows={4}
                      value={formData[field.name] || ''}
                      onChange={handleChange}
                      placeholder={`Enter ${field.placeholder.toLowerCase()}`}
                      required={field.required}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-brand-primary focus:border-brand-primary dark:bg-gray-700 dark:text-white"
                      aria-label={field.placeholder}
                    />
                  ) : (
                    <input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      value={formData[field.name] || ''}
                      onChange={handleChange}
                      placeholder={`Enter ${field.placeholder.toLowerCase()}`}
                      required={field.required}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-brand-primary focus:border-brand-primary dark:bg-gray-700 dark:text-white"
                      aria-label={field.placeholder}
                    />
                  )}
                </div>
              ))}
              <div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center py-3 px-6 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-gradient-to-r from-brand-primary to-brand-secondary hover:opacity-90 transition-opacity"
                >
                  <Send size={20} className="mr-2" /> Send Message
                </button>
              </div>
            </form>
          )}
        </ScrollReveal>

        {/* Contact Details */}
        <ScrollReveal animationClass="animate-fade-in-right" className="space-y-8">
            <div className="bg-white dark:bg-dark-card p-8 rounded-xl shadow-2xl">
                 <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Contact Information</h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                    <p className="flex items-start"><MapPin size={24} className="mr-3 mt-1 text-brand-primary flex-shrink-0" /> <span>{COMPANY_INFO.address}</span></p>
                    <p className="flex items-center"><Mail size={20} className="mr-3 text-brand-primary flex-shrink-0" /> <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-brand-primary dark:hover:text-brand-accent">{COMPANY_INFO.email}</a></p>
                    <p className="flex items-center"><Phone size={20} className="mr-3 text-brand-primary flex-shrink-0" /> <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-brand-primary dark:hover:text-brand-accent">{COMPANY_INFO.phone}</a></p>
                </div>
            </div>
            <div className="bg-white dark:bg-dark-card p-8 rounded-xl shadow-2xl">
                 <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Connect on Social Media</h2>
                 <div className="flex space-x-6">
                    {SOCIAL_HANDLES.map((social) => {
                        const IconComponent = iconMap[social.name];
                        if (!IconComponent) return null; 

                        return (
                        <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" 
                           className="text-gray-500 dark:text-gray-400 hover:text-brand-primary dark:hover:text-brand-accent transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                           aria-label={`Connect with us on ${social.name}`}>
                            <IconComponent size={28} />
                            <span className="sr-only">{social.name}</span>
                        </a>
                        );
                    })}
                 </div>
            </div>
        </ScrollReveal>
      </div>
      <p className="mt-16 text-center text-sm text-gray-600 dark:text-gray-400">
        Not a client yet?{' '}
        <Link to="/contact" className="font-medium text-brand-primary hover:text-brand-secondary dark:text-brand-accent dark:hover:text-brand-accent/80">
          Contact us to get started <ArrowRightIconLucide size={14} className="inline"/>
        </Link>
      </p>
    </SectionWrapper>
  );
};

// Removed dummy CheckCircle and ArrowRightIcon components as lucide-react ones are imported and used.
// Ensured lucide imports are aliased if there were local components with the same name (CheckCircleIcon, ArrowRightIconLucide).

export default ContactPage;
