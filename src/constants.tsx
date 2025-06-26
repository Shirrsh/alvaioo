
import { NavLink, LucideIconType } from '@/types'; // Updated path alias & Added LucideIconType
import {
    // Icons used in SERVICE_ICONS
    ListChecks, ShoppingCart, Settings, Bot, MailCheck, Users2, Send,
    // Icons used in AI_WORKFLOW_ICONS
    MessageCircle, Users, Mail, BarChartBig, ZapIcon, BrainCircuit, FileText,
    // Icons used in INDUSTRY_ICONS
    Palette, Cpu, Gem, Building, TrendingUp,
    // Icons used in WHY_ALVAIO_POINTS
    Zap, BarChart2
} from 'lucide-react';

export const NAV_LINKS_CONFIG: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'Our Services', path: '/services' },
  { name: 'AI Automation', path: '/ai-automation' },
  { name: 'Industries', path: '/industries' },
  { name: 'Why ALVAIO?', path: '/why-alvaio' },
  { name: 'Case Studies', path: '/clients' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact Us', path: '/contact' },
  { name: 'Login', path: '/login' },
];

// For easier access in Routes and Links
export const NAV_LINKS = NAV_LINKS_CONFIG.reduce((acc, link) => {
  const key = link.name.toLowerCase().replace(/\s+/g, '-').replace(/[?]/g, '');
  acc[key] = link.path;
  return acc;
}, {} as Record<string, string>);


export const LOTTIE_ANIMATIONS = {
  hero: 'https://assets10.lottiefiles.com/packages/lf20_LW9L229L2V.json', 
  ecommerceAiMerge: 'https://assets3.lottiefiles.com/packages/lf20_xnsda3nb.json', 
  chatbot: 'https://assets3.lottiefiles.com/packages/lf20_UW9K24.json',
  workflowArrows: 'https://assets8.lottiefiles.com/packages/lf20_i2wz9j5t.json', 
  emailBot: 'https://assets5.lottiefiles.com/packages/lf20_u25cckyg.json',
  analyticsDashboard: 'https://assets1.lottiefiles.com/packages/lf20_vPDUX3.json',
  aiBrain: 'https://assets6.lottiefiles.com/packages/lf20_ofa3xwo7.json',
  robotAssistant: 'https://assets4.lottiefiles.com/packages/lf20_aZTdD5.json', 
  automationPipes: 'https://assets9.lottiefiles.com/packages/lf20_nxsyeffk.json',
  customerMessaging: 'https://assets2.lottiefiles.com/packages/lf20_gjmecwer.json', 
  timelineFlow: 'https://assets1.lottiefiles.com/packages/lf20_cUG5wO.json' 
};

export const COMPANY_INFO = {
  name: "ALVAIO",
  tagline: "Automate Growth",
  email: "contact@alvaio.com",
  phone: "+1 (555) 123-4567",
  address: "123 Tech Avenue, Innovation City, TX 75001",
  socials: {
    linkedin: "https://linkedin.com/company/alvaio",
    twitter: "https://twitter.com/alvaio",
    facebook: "https://facebook.com/alvaio",
  }
};

export const SERVICE_ICONS: { [key: string]: LucideIconType } = { // Changed React.ElementType to LucideIconType
  listing: ListChecks,
  inventory: ShoppingCart,
  accountHandling: Settings,
  aiChatbot: Bot,
  autoReply: MailCheck,
  crmAutomation: Users2,
  socialMedia: Send,
};

export const AI_WORKFLOW_ICONS: { [key: string]: LucideIconType } = { // Changed React.ElementType to LucideIconType
  inquiry: MessageCircle,
  botReply: Bot,
  leadAssigned: Users,
  emailSent: Mail,
  crmUpdated: BarChartBig,
  zapier: ZapIcon,
  openai: BrainCircuit,
  googleSheets: FileText,
};

export const INDUSTRY_ICONS: { [key: string]: LucideIconType } = { // Changed React.ElementType to LucideIconType
  fashion: Palette,
  electronics: Cpu,
  fmcg: ShoppingCart,
  jewelry: Gem,
  furniture: Building, 
  healthBeauty: TrendingUp,
};

export const WHY_ALVAIO_POINTS = [
    { title: 'Time Saved', value: 'Up to 80%', icon: Zap, description: 'Automate repetitive tasks and free up your team for strategic work.' },
    { title: 'Cost Reduction', value: 'Up to 60%', icon: TrendingUp, description: 'Lower operational costs by optimizing processes and reducing manual labor.' },
    { title: 'Increased Speed', value: '3x Faster', icon: BarChart2, description: 'Accelerate your business operations from lead response to order fulfillment.' },
];

export const SOCIAL_HANDLES = [
  { name: 'LinkedIn', url: COMPANY_INFO.socials.linkedin },
  { name: 'Twitter', url: COMPANY_INFO.socials.twitter },
  { name: 'Facebook', url: COMPANY_INFO.socials.facebook },
];

export const CONTACT_FORM_FIELDS = [
  { name: 'name', type: 'text', placeholder: 'Your Full Name', required: true },
  { name: 'email', type: 'email', placeholder: 'Your Email Address', required: true },
  { name: 'company', type: 'text', placeholder: 'Company Name (Optional)', required: false },
  { name: 'message', type: 'textarea', placeholder: 'How can we help you automate growth?', required: true },
];
