import React, { ReactNode } from 'react';
import { cn } from '../lib/utils';

interface ContentCardProps {
  title: string;
  children: ReactNode;
  className?: string;
}

function ContentCard({ title, children, className }: ContentCardProps) {
  return (
    <div className={cn("card", className)}>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      {children}
    </div>
  );
}

export default ContentCard;