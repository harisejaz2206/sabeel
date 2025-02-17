import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface PageHeaderProps {
  icon: LucideIcon;
  title: string;
  description?: string;
}

function PageHeader({ icon: Icon, title, description }: PageHeaderProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-2">
        <Icon className="text-accent-primary" size={32} />
        <h1 className="text-2xl font-semibold text-text-heading">{title}</h1>
      </div>
      {description && (
        <p className="text-text-body ml-11">{description}</p>
      )}
    </div>
  );
}

export default PageHeader;