
import React, { lazy, Suspense } from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import AnimatedCard from '@/components/AnimatedCard';
import ScrollReveal from '@/components/ScrollReveal';
import { Service } from '@/types';
import { SERVICE_ICONS, LOTTIE_ANIMATIONS } from '@/constants';

const Minimal3DScene = lazy(() => import('@/components/3d/Minimal3DScene'));

const servicesData: Service[] = [
  { id: 's1', title: 'Product Listing Optimization', description: 'Enhance visibility and conversion rates with AI-driven listing strategies for Amazon, Flipkart, Shopify, and more.', icon: SERVICE_ICONS.listing, lottieUrl: "https://assets7.lottiefiles.com/packages/lf20_m6u5xose.json" },
  { id: 's2', title: 'Inventory & Order Management', description: 'Automated, real-time tracking and management of inventory and orders across multiple platforms to prevent stockouts and streamline fulfillment.', icon: SERVICE_ICONS.inventory, lottieUrl: "https://assets1.lottiefiles.com/packages/lf20_d68omsf0.json" },
  { id: 's3', title: 'Amazon/Flipkart Account Handling', description: 'Comprehensive account management, from health monitoring and compliance to PPC campaign optimization and dispute resolution.', icon: SERVICE_ICONS.accountHandling, lottieUrl: "https://assets6.lottiefiles.com/packages/lf20_cSyY6S.json" },
  { id: 's4', title: 'AI Chatbot for Customer Support', description: '24/7 intelligent chatbot support to handle queries, guide customers, and reduce response times, integrated with your existing systems.', icon: SERVICE_ICONS.aiChatbot, lottieUrl: LOTTIE_ANIMATIONS.chatbot },
  { id: 's5', title: 'WhatsApp/Email Auto Reply', description: 'Automate responses on WhatsApp and email for common inquiries, order updates, and follow-ups, ensuring consistent communication.', icon: SERVICE_ICONS.autoReply, lottieUrl: LOTTIE_ANIMATIONS.emailBot },
  { id: 's6', title: 'CRM + Lead Management Automation', description: 'Seamlessly integrate your CRM with lead capture and nurturing workflows. Automate lead scoring, assignment, and follow-ups.', icon: SERVICE_ICONS.crmAutomation, lottieUrl: "https://assets5.lottiefiles.com/packages/lf20_q7B4f9.json" },
  { id: 's7', title: 'Social Media Auto Posting', description: 'Schedule and automate social media posts across platforms. AI can help generate content ideas and optimize posting times.', icon: SERVICE_ICONS.socialMedia, lottieUrl: "https://assets10.lottiefiles.com/packages/lf20_T0yF0k.json" },
  { id: 's8', title: 'PPC Campaign Automation', description: 'AI-powered optimization of your Pay-Per-Click campaigns on platforms like Google Ads, Amazon, and Flipkart for better ROI.', icon: SERVICE_ICONS.listing /* Placeholder, better icon needed */, lottieUrl: "https://assets4.lottiefiles.com/packages/lf20_3rqk3y7v.json" },
  { id: 's9', title: 'Returns & Claims Automation', description: 'Streamline the returns process with automated tracking, communication, and initial claims processing to improve customer satisfaction.', icon: SERVICE_ICONS.inventory /* Placeholder */, lottieUrl: "https://assets3.lottiefiles.com/packages/lf20_oduegcvx.json" },
];

const ServicesPage: React.FC = () => {
  return (
    <SectionWrapper id="services" bgClassName="py-20 md:py-28 bg-light-bg dark:bg-dark-bg">
      <div className="text-center mb-16">
        <ScrollReveal>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">Our Comprehensive Solutions</h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            ALVAIO offers a full suite of e-commerce and AI automation services designed to propel your business forward.
          </p>
        </ScrollReveal>
      </div>
      <div className="mb-12">
        <Suspense fallback={<div className="suspense-fallback">Loading 3D Scene...</div>}>
          <Minimal3DScene meshShape="box" meshColor="#8B5CF6" />
        </Suspense>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <ScrollReveal key={service.id} animationClass="animate-fade-in-up" delay={`delay-${(index % 3) * 100}`}>
            <AnimatedCard
              title={service.title}
              description={service.description}
              icon={service.icon}
              lottieUrl={service.lottieUrl}
              className="h-full flex flex-col" 
            />
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ServicesPage;
