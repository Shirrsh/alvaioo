
import React, { lazy, Suspense } from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import ScrollReveal from '@/components/ScrollReveal';
import { BlogPost } from '@/types';
import { ArrowRight, Calendar, User, FileText } from 'lucide-react'; 
import { Link } from 'react-router-dom';

const Minimal3DScene = lazy(() => import('@/components/3d/Minimal3DScene'));

const dummyBlogPosts: BlogPost[] = [
  { id: 'bp1', title: '5 Ways AI Can Supercharge Your E-commerce Sales', summary: 'Discover practical AI strategies to boost your online store\'s revenue and customer engagement.', imageUrl: 'https://picsum.photos/seed/blog1/400/250', date: 'October 26, 2023', author: 'AI Insights Team', slug: 'ai-ecommerce-sales' },
  { id: 'bp2', title: 'The Future of Customer Service: AI Chatbots vs. Human Agents', summary: 'A deep dive into how AI chatbots are revolutionizing customer support and where human interaction still matters.', imageUrl: 'https://picsum.photos/seed/blog2/400/250', date: 'October 15, 2023', author: 'Dr. Bot', slug: 'ai-chatbots-future' },
  { id: 'bp3', title: 'Automating Your Shopify Store: A Beginner\'s Guide', summary: 'Learn the basics of Shopify automation to save time and scale your business efficiently.', imageUrl: 'https://picsum.photos/seed/blog3/400/250', date: 'September 28, 2023', author: 'Ecom Expert', slug: 'shopify-automation-guide' },
  { id: 'bp4', title: 'Maximizing ROI with AI-Powered PPC Campaigns', summary: 'Understand how artificial intelligence can optimize your pay-per-click advertising for better results.', imageUrl: 'https://picsum.photos/seed/blog4/400/250', date: 'September 10, 2023', author: 'AdTech Analyst', slug: 'ai-ppc-roi' },
];

const BlogPage: React.FC = () => {
  return (
    <SectionWrapper id="blog" bgClassName="py-20 md:py-28 bg-light-bg dark:bg-dark-bg">
      <div className="text-center mb-16">
        <ScrollReveal>
          <FileText size={64} className="mx-auto mb-6 text-brand-primary dark:text-brand-accent" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">ALVAIO Insights</h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Stay ahead with the latest tips, trends, and strategies in AI and e-commerce automation.
          </p>
        </ScrollReveal>
      </div>

      <div className="mb-12">
        <Suspense fallback={<div className="suspense-fallback">Loading 3D Scene...</div>}>
          <Minimal3DScene meshShape="dodecahedron" meshColor="#3B82F6" cameraPosition={[0,0,3.5]} />
        </Suspense>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dummyBlogPosts.map((post, index) => (
          <ScrollReveal key={post.id} animationClass="animate-fade-in-up" delay={`delay-${(index % 3) * 100}`}>
            <div className="bg-white dark:bg-dark-card rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out overflow-hidden flex flex-col h-full group">
              <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3 group-hover:text-brand-primary dark:group-hover:text-brand-accent transition-colors">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">{post.summary}</p>
                <div className="text-xs text-gray-500 dark:text-gray-500 mb-4 space-y-1">
                    <p className="flex items-center"><Calendar size={14} className="mr-2" /> {post.date}</p>
                    <p className="flex items-center"><User size={14} className="mr-2" /> By {post.author}</p>
                </div>
                <Link 
                  to={`/blog/${post.slug}`} 
                  className="inline-flex items-center text-sm font-semibold text-brand-primary dark:text-brand-accent hover:underline mt-auto"
                  aria-label={`Read more about ${post.title}`}
                >
                  Read More <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <ScrollReveal>
            <button className="bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors">
                Load More Articles
            </button>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
};

export default BlogPage;
