import React from 'react';
import { Users, BookOpen, Coins, Heart, Brain, Home } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ContentCard from '../components/ContentCard';

function LifeEvents() {
  const categories = [
    {
      icon: BookOpen,
      title: 'Seeking Knowledge',
      description: 'Duas for students and seekers of knowledge',
      duas: ['Before studying', 'For memory', 'For understanding']
    },
    {
      icon: Coins,
      title: 'Financial Matters',
      description: 'Guidance for financial decisions',
      duas: ['Before business', 'Debt relief', 'Gratitude for provision']
    },
    {
      icon: Heart,
      title: 'Health & Healing',
      description: 'Supplications for well-being',
      duas: ['For healing', 'For protection', 'For strength']
    },
    {
      icon: Brain,
      title: 'Stress & Anxiety',
      description: 'Finding peace through prayer',
      duas: ['For peace', 'For relief', 'For patience']
    },
    {
      icon: Users,
      title: 'Family Relations',
      description: 'Strengthening family bonds',
      duas: ['For parents', 'For children', 'For harmony']
    },
    {
      icon: Home,
      title: 'Daily Life',
      description: 'Everyday supplications',
      duas: ['Morning', 'Evening', 'Before sleep']
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <PageHeader
        icon={Users}
        title="Life Events"
        description="Guidance and supplications for every aspect of life"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map(({ icon: Icon, title, description, duas }) => (
          <ContentCard key={title} title={title}>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-background-secondary rounded-lg">
                  <Icon className="text-accent-primary" size={24} />
                </div>
                <p className="text-sm text-text-body">{description}</p>
              </div>
              <div className="space-y-2">
                {duas.map((dua) => (
                  <div key={dua} className="p-2 bg-background-secondary rounded-lg text-sm">
                    {dua}
                  </div>
                ))}
              </div>
            </div>
          </ContentCard>
        ))}
      </div>
    </div>
  );
}

export default LifeEvents;