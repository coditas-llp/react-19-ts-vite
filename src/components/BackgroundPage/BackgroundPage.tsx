import { ReactNode } from 'react';
import './background-page.scss';

interface BackgroundPageProps {
  children: ReactNode;
}

export const BackgroundPage = ({ children }: BackgroundPageProps) => {
  return (
    <div className="background-page">
      <div className="animated-background">
        <div className="gradient-sphere gradient-sphere-1"></div>
        <div className="gradient-sphere gradient-sphere-2"></div>
        <div className="gradient-sphere gradient-sphere-3"></div>
      </div>
      <div className="content">
        {children}
      </div>
    </div>
  );
}; 