
import React, { lazy, Suspense } from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import LottiePlayer from '@/components/LottiePlayer';
import ScrollReveal from '@/components/ScrollReveal';
import { TimelineEvent, LucideIconType } from '@/types'; // Import LucideIconType
import { LOTTIE_ANIMATIONS, AI_WORKFLOW_ICONS } from '@/constants';
import { Zap, BrainCircuit, ArrowDown } from 'lucide-react'; 

const Minimal3DScene = lazy(() => import('@/components/3d/Minimal3DScene'));

interface TechStackItem {
  name: string;
  icon: LucideIconType; // Use LucideIconType
  color: string;
  bgColor: string;
}

const techStack: TechStackItem[] = [
  { name: 'OpenAI', icon: AI_WORKFLOW_ICONS.openai, color: 'text-green-500', bgColor: 'bg-green-100 dark:bg-green-900' },
  { name: 'Zapier', icon: AI_WORKFLOW_ICONS.zapier, color: 'text-orange-500', bgColor: 'bg-orange-100 dark:bg-orange-900' },
  { name: 'Google Sheets', icon: AI_WORKFLOW_ICONS.googleSheets, color: 'text-emerald-500', bgColor: 'bg-emerald-100 dark:bg-emerald-900' },
  { name: 'Custom APIs', icon: Zap, color: 'text-sky-500', bgColor: 'bg-sky-100 dark:bg-sky-900' },
];

const timelineEvents: TimelineEvent[] = [
  { id: 'e1', title: 'Customer Inquiry Received', description: 'A potential customer reaches out via website chat, email, or social media.', icon: AI_WORKFLOW_ICONS.inquiry },
  { id: 'e2', title: 'AI Bot Initial Reply', description: 'An AI-powered bot provides an instant, intelligent response, gathers initial information, or answers common questions.', icon: AI_WORKFLOW_ICONS.botReply },
  { id: 'e3', title: 'Lead Scored & Assigned', description: 'The AI analyzes the inquiry, scores the lead based on pre-defined criteria, and assigns it to the appropriate sales representative.', icon: AI_WORKFLOW_ICONS.leadAssigned },
  { id: 'e4', title: 'Automated Email Follow-up', description: 'A personalized follow-up email is automatically sent, providing more information or suggesting next steps.', icon: AI_WORKFLOW_ICONS.emailSent },
  { id: 'e5', title: 'CRM Updated Instantly', description: 'All interaction details, lead status, and communication history are automatically logged in your CRM system.', icon: AI_WORKFLOW_ICONS.crmUpdated },
  { id: 'e6', title: 'Further Nurturing (if needed)', description: 'Lead is added to an automated nurturing sequence if not ready to convert, receiving relevant content over time.', icon: BrainCircuit },
];

const AIAutomationPage: React.FC = () => {
  return (
    <>
      <SectionWrapper id="ai-automation-hero" bgClassName="py-20 md:py-28 bg-gradient-to-br from-deep-purple via-brand-primary to-brand-accent text-white">
        <div className="text-center">
          <ScrollReveal>
            <Zap size={64} className="mx-auto mb-6 text-yellow-300 animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">AI Automation Workflows</h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
              Witness how ALVAIO transforms complex business processes into seamless, automated operations.
            </p>
          </ScrollReveal>
        </div>
      </SectionWrapper>
      
      <SectionWrapper id="ai-3d-visual" bgClassName="py-10 md:py-12 bg-light-bg dark:bg-dark-bg">
        <div className="text-center mb-8">
            <ScrollReveal>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">Visualizing Automation</h2>
            </ScrollReveal>
        </div>
        <Suspense fallback={<div className="suspense-fallback">Loading 3D Scene...</div>}>
          <Minimal3DScene meshShape="sphere" meshColor="#0EA5E9" wireframe={true} cameraPosition={[0,0,4]} />
        </Suspense>
      </SectionWrapper>

      <SectionWrapper id="workflow-timeline" bgClassName="py-16 md:py-24 bg-light-bg dark:bg-dark-bg">
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Example: Automated Lead Management</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">From first contact to CRM update, see AI in action.</p>
          </ScrollReveal>
        </div>

        <div className="relative">
          <ScrollReveal className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 max-w-sm z-0 opacity-30 dark:opacity-20" animationClass="animate-fade-in-up">
            <LottiePlayer src={LOTTIE_ANIMATIONS.timelineFlow} />
          </ScrollReveal>

          <div className="max-w-3xl mx-auto relative z-10">
            {timelineEvents.map((event, index) => (
              <React.Fragment key={event.id}>
                <ScrollReveal animationClass={index % 2 === 0 ? 'animate-fade-in-left' : 'animate-fade-in-right'}>
                  <div className={`flex items-start my-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="flex-shrink-0 w-16 h-16 bg-brand-primary/10 dark:bg-brand-accent/10 rounded-full flex items-center justify-center mr-4 md:mr-0 md:ml-0 md:mb-0 mb-4 md:group-odd:mr-6 md:group-even:ml-6">
                      {event.icon && <event.icon size={32} className="text-brand-primary dark:text-brand-accent" />}
                    </div>
                    <div className={`bg-white dark:bg-dark-card p-6 rounded-lg shadow-xl w-full ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{index+1}. {event.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{event.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
                {index < timelineEvents.length - 1 && (
                  <ScrollReveal animationClass="animate-fade-in-up">
                    <div className="flex justify-center my-4">
                      <ArrowDown size={32} className="text-gray-400 dark:text-gray-600 animate-bounce" />
                    </div>
                  </ScrollReveal>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="tech-stack" bgClassName="py-16 md:py-24 bg-gray-100 dark:bg-dark-card">
        <div className="text-center mb-12">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Powered by Leading Technologies</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">We leverage a robust tech stack to build powerful and reliable automation solutions.</p>
          </ScrollReveal>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {techStack.map((tech, index) => {
            const IconComponent = tech.icon; // IconComponent is now LucideIconType
            return (
              <ScrollReveal key={tech.name} animationClass="animate-fade-in-up" delay={`delay-${index * 100}`}>
                <div className="group p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${tech.bgColor} mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent size={32} className={tech.color} />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-200">{tech.name}</h4>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </SectionWrapper>
    </>
  );
};

export default AIAutomationPage;