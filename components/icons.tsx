import React from 'react';

export const ProductIcon = (props: React.ComponentProps<'svg'>) => (
  <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v2"/>
    <path d="m7 10 5 3 5-3"/>
    <path d="M12 22V13"/>
    <path d="M21 16.5c0 2.2-4.1 4.5-9 4.5s-9-2.3-9-4.5S7.1 12 12 12s9 2.3 9 4.5Z"/>
  </svg>
);

export const VideoIcon = (props: React.ComponentProps<'svg'>) => (
  <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m22 8-6 4 6 4V8Z"/>
    <rect width="14" height="12" x="2" y="6" rx="2" ry="2"/>
  </svg>
);

export const LessonsIcon = (props: React.ComponentProps<'svg'>) => (
  <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
    <path d="M8 7h6"/>
    <path d="M8 11h8"/>
  </svg>
);

export const StrategyIcon = (props: React.ComponentProps<'svg'>) => (
  <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 20.562a2 2 0 0 0 1.396.903 2.001 2.001 0 0 0 1.846-1.185l4.33-8.66a2 2 0 0 0-3.464-2.002L12.5 12l.144-.288a2 2 0 0 0-3.464-2.001L5 18l5 2.562Z"/>
    <path d="M12 12V3.5a2.5 2.5 0 1 1 5 0V5"/>
  </svg>
);

export const AIIcon = (props: React.ComponentProps<'svg'>) => (
  <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 8V4H8"/>
    <rect width="16" height="12" x="4" y="8" rx="2"/>
    <path d="M2 14h2"/>
    <path d="M20 14h2"/>
    <path d="M15 13v2"/>
    <path d="M9 13v2"/>
  </svg>
);

export const ScheduleIcon = (props: React.ComponentProps<'svg'>) => (
  <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
    <line x1="16" x2="16" y1="2" y2="6"/>
    <line x1="8" x2="8" y1="2" y2="6"/>
    <line x1="3" x2="21" y1="10" y2="10"/>
    <path d="m9 14 2 2 4-4"/>
  </svg>
);

export const CheckmarkIcon = (props: React.ComponentProps<'svg'>) => (
  <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export const ChevronDownIcon = (props: React.ComponentProps<'svg'>) => (
  <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6"/>
  </svg>
);

export const StarIcon = (props: React.ComponentProps<'svg'>) => (
  <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

export const GuaranteeSealIcon = ({ className, ...rest }: React.ComponentProps<'div'>) => (
    <div {...rest} className={`relative w-24 h-24 ${className || ''}`}>
        <svg className="absolute inset-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" stroke="#FFD700" strokeWidth="4"/>
            <path d="M36 50L46 60L64 42" stroke="#FFD700" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <svg className="absolute inset-0 animate-spin-slow" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50,2 A48,48 0 0,1 50,98" stroke="#FFD700" strokeWidth="2" strokeDasharray="5 15" />
            <path d="M50,98 A48,48 0 0,1 50,2" stroke="#FFD700" strokeWidth="2" strokeDasharray="5 15" />
        </svg>
    </div>
);
