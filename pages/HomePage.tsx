
import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import LottiePlayer from '../components/LottiePlayer';
import ScrollReveal from '../components/ScrollReveal';
import AnimatedCard from '../components/AnimatedCard';
import { Link } from 'react-router-dom';
import { LOTTIE_ANIMATIONS, COMPANY_INFO, NAV_LINKS, SERVICE_ICONS, WHY_ALVAIO_POINTS } from '../constants';
import { Service } from '../types';
import { Zap, ArrowRight, CheckCircle } from 'lucide-react';

const featuredServices: Service[] = [
  { id: 'fs1', title: 'AI-Powered E-commerce Management', description: 'Comprehensive handling of your online stores with AI precision.', icon: SERVICE_ICONS.inventory, lottieUrl: LOTTIE_ANIMATIONS.ecommerceAiMerge },
  { id: 'fs2', title: 'Business Process Automation', description: 'Streamline operations with custom AI workflows for maximum efficiency.', icon: SERVICE_ICONS.crmAutomation, lottieUrl: LOTTIE_ANIMATIONS.workflowArrows },
  { id: 'fs3', title: 'Intelligent Customer Engagement', description: 'Automated, personalized customer interactions across all channels.', icon: SERVICE_ICONS.aiChatbot, lottieUrl: LOTTIE_ANIMATIONS.customerMessaging },
];

interface HomePageProps {
  openDemoModal: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ openDemoModal }) => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <SectionWrapper bgClassName="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-deep-purple to-brand-primary text-white overflow-hidden py-20 md:py-0" id="home-hero">
        <div className="absolute inset-0 opacity-20">
          <LottiePlayer src={LOTTIE_ANIMATIONS.hero} ariaLabel="Abstract technology background" />
        </div>
        <div className="relative z-10 text-center container mx-auto px-4">
          <ScrollReveal animationClass="animate-fade-in-down">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
              {COMPANY_INFO.name}: <span className="block sm:inline bg-clip-text text-transparent bg-gradient-to-r from-brand-accent via-neon-blue to-white">{COMPANY_INFO.tagline}</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal animationClass="animate-fade-in-up" delay="delay-300">
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Unlock exponential growth with AI-driven e-commerce solutions and intelligent automation tailored for your SMB.
            </p>
          </ScrollReveal>
          <ScrollReveal animationClass="animate-fade-in-up" delay="delay-500">
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to={NAV_LINKS.services}
                className="bg-gradient-to-r from-brand-accent to-neon-blue hover:opacity-90 text-white font-bold py-3 px-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 text-lg flex items-center"
              >
                Explore Services <ArrowRight size={20} className="ml-2" />
              </Link>
              <button
                onClick={openDemoModal}
                className="bg-white text-brand-primary font-bold py-3 px-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 text-lg flex items-center"
              >
                <Zap size={20} className="mr-2" /> Try AI Demo
              </button>
            </div>
          </ScrollReveal>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-light-bg dark:from-dark-bg to-transparent"></div>
      </SectionWrapper>

      {/* Animated Scroll Storytelling - Business Transformation */}
      <SectionWrapper id="transformation" bgClassName="py-16 md:py-24 bg-light-bg dark:bg-dark-bg">
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Transform Your Business with ALVAIO</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">See how we help businesses like yours evolve, streamline, and scale.</p>
          </ScrollReveal>
        </div>

        <div className="space-y-16 md:space-y-24">
          {/* Step 1: The Challenge */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <ScrollReveal className="md:w-1/2" animationClass="animate-fade-in-left">
              <LottiePlayer src="https://assets2.lottiefiles.com/packages/lf20_ofa3xwo7.json" className="w-full max-w-md mx-auto h-auto rounded-lg shadow-xl" ariaLabel="Business challenge illustration"/>
            </ScrollReveal>
            <ScrollReveal className="md:w-1/2" animationClass="animate-fade-in-right">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">1. The Manual Grind</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Struggling with time-consuming e-commerce tasks? Overwhelmed by customer inquiries and repetitive processes? You're not alone.</p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-center"><CheckCircle size={18} className="mr-2 text-red-500" /> Wasted hours on manual data entry.</li>
                <li className="flex items-center"><CheckCircle size={18} className="mr-2 text-red-500" /> Missed opportunities due to slow responses.</li>
                <li className="flex items-center"><CheckCircle size={18} className="mr-2 text-red-500" /> Inconsistent customer experiences.</li>
              </ul>
            </ScrollReveal>
          </div>

          {/* Step 2: ALVAIO Solution */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
            <ScrollReveal className="md:w-1/2" animationClass="animate-fade-in-right">
              <LottiePlayer src={LOTTIE_ANIMATIONS.automationPipes} className="w-full max-w-md mx-auto h-auto rounded-lg shadow-xl" ariaLabel="AI automation solution"/>
            </ScrollReveal>
            <ScrollReveal className="md:w-1/2" animationClass="animate-fade-in-left">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">2. The ALVAIO Intervention</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">We implement intelligent automation and AI-powered e-commerce strategies to revolutionize your operations.</p>
               <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-center"><CheckCircle size={18} className="mr-2 text-green-500" /> Smart listing and inventory sync.</li>
                <li className="flex items-center"><CheckCircle size={18} className="mr-2 text-green-500" /> AI chatbots for 24/7 support.</li>
                <li className="flex items-center"><CheckCircle size={18} className="mr-2 text-green-500" /> Automated CRM and marketing workflows.</li>
              </ul>
            </ScrollReveal>
          </div>

          {/* Step 3: The Result */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <ScrollReveal className="md:w-1/2" animationClass="animate-fade-in-left">
              <LottiePlayer src={LOTTIE_ANIMATIONS.analyticsDashboard} className="w-full max-w-md mx-auto h-auto rounded-lg shadow-xl" ariaLabel="Business growth and success"/>
            </ScrollReveal>
            <ScrollReveal className="md:w-1/2" animationClass="animate-fade-in-right">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">3. Growth Automated</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Experience increased efficiency, higher sales, and happier customers. Focus on strategy while ALVAIO handles the rest.</p>
               <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-center"><CheckCircle size={18} className="mr-2 text-green-500" /> Significant time and cost savings.</li>
                <li className="flex items-center"><CheckCircle size={18} className="mr-2 text-green-500" /> Enhanced customer satisfaction and loyalty.</li>
                <li className="flex items-center"><CheckCircle size={18} className="mr-2 text-green-500" /> Scalable operations ready for future growth.</li>
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </SectionWrapper>

      {/* Featured Services */}
      <SectionWrapper id="featured-services" bgClassName="py-16 md:py-24 bg-gray-50 dark:bg-dark-card">
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Core Solutions to Elevate Your Business</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Discover how our key services can make a difference.</p>
          </ScrollReveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <ScrollReveal key={service.id} animationClass="animate-fade-in-up" delay={`delay-${index * 150}`}>
              <AnimatedCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                lottieUrl={service.lottieUrl}
              />
            </ScrollReveal>
          ))}
        </div>
         <div className="text-center mt-12">
            <ScrollReveal>
              <Link
                to={NAV_LINKS.services}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-primary hover:bg-brand-primary/90"
              >
                Discover All Services <ArrowRight size={20} className="ml-2" />
              </Link>
            </ScrollReveal>
          </div>
      </SectionWrapper>

      {/* Why Alvaio Snippet */}
        <SectionWrapper id="why-alvaio-snippet" bgClassName="py-16 md:py-24 bg-light-bg dark:bg-dark-bg">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <ScrollReveal animationClass="animate-fade-in-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">Why Choose ALVAIO?</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                        We blend e-commerce expertise with cutting-edge AI to deliver tangible results. Partner with us for innovation, reliability, and growth.
                    </p>
                    <ul className="space-y-4 mb-8">
                        {WHY_ALVAIO_POINTS.map(point => (
                             <li key={point.title} className="flex items-start">
                                <div className="flex-shrink-0">
                                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-gray-700 dark:text-gray-200">{point.title}: <span className="text-brand-primary dark:text-brand-accent">{point.value}</span></h4>
                                    <p className="text-gray-600 dark:text-gray-400">{point.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <Link
                        to={NAV_LINKS['why-alvaio']}
                        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-secondary hover:bg-brand-secondary/90"
                    >
                        Learn More About Us <ArrowRight size={20} className="ml-2" />
                    </Link>
                </ScrollReveal>
                <ScrollReveal animationClass="animate-fade-in-right" className="flex justify-center">
                     <LottiePlayer src={LOTTIE_ANIMATIONS.robotAssistant} className="w-full max-w-md h-auto" />
                </ScrollReveal>
            </div>
        </SectionWrapper>

    </div>
  );
};

export default HomePage;
