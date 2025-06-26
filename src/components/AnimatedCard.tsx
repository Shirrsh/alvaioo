
import React from 'react';
import LottiePlayer from '@/components/LottiePlayer'; 
import { LucideIconType } from '@/types'; // Import LucideIconType

interface AnimatedCardProps {
  title: string;
  description: string;
  icon?: LucideIconType; // Changed from React.ElementType
  lottieUrl?: string;
  className?: string;
  onClick?: () => void;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ title, description, icon: Icon, lottieUrl, className, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`bg-white dark:bg-dark-card p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer group ${className}`}
      role={onClick ? "button" : "article"}
      tabIndex={onClick ? 0 : -1}
      onKeyDown={onClick ? (e) => (e.key === 'Enter' || e.key === ' ') && onClick() : undefined}
    >
      {lottieUrl && (
        <div className="w-full h-40 mb-4 overflow-hidden rounded-md">
           <LottiePlayer src={lottieUrl} className="w-full h-full object-cover" />
        </div>
      )}
      {Icon && !lottieUrl && (
        <div className="mb-4 text-brand-primary dark:text-brand-accent bg-brand-primary/10 dark:bg-brand-accent/10 p-3 rounded-full inline-block group-hover:scale-110 transition-transform">
          <Icon size={32} />
        </div>
      )}
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-brand-primary dark:group-hover:text-brand-accent transition-colors">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default AnimatedCard;
