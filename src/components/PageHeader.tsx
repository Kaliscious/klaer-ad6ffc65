
import { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  className?: string;
}

const PageHeader = ({ title, subtitle, icon, className = '' }: PageHeaderProps) => {
  return (
    <div className={`mb-10 text-center ${className}`}>
      {icon && <div className="mb-3 inline-block">{icon}</div>}
      <h1 className="text-4xl md:text-5xl font-bold mb-3 font-playfair">{title}</h1>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className="mt-4 flex justify-center">
        <div className="w-24 h-1 bg-gradient-to-r from-anime-pink to-anime-purple rounded-full"></div>
      </div>
    </div>
  );
};

export default PageHeader;
