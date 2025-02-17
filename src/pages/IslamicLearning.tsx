import React from 'react';
import { GraduationCap, Book, Scroll, Star, History, Brain } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ContentCard from '../components/ContentCard';

function IslamicLearning() {
  const topics = [
    {
      icon: Book,
      title: 'Prophetic Stories',
      description: 'Learn from the lives of the Prophets',
      progress: 45
    },
    {
      icon: Scroll,
      title: 'Hadith of the Day',
      description: 'Daily wisdom from the Prophet ﷺ',
      progress: 60
    },
    {
      icon: Star,
      title: 'Names of Allah',
      description: 'Understanding the Divine Names',
      progress: 30
    },
    {
      icon: History,
      title: 'Seerah',
      description: 'Life of Prophet Muhammad ﷺ',
      progress: 25
    },
    {
      icon: Brain,
      title: 'Islamic Ethics',
      description: 'Building noble character',
      progress: 35
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <PageHeader
        icon={GraduationCap}
        title="Learning Center"
        description="Expand your Islamic knowledge through structured learning"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map(({ icon: Icon, title, description, progress }) => (
          <ContentCard key={title} title={title}>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-background-secondary rounded-lg">
                  <Icon className="text-accent-primary" size={24} />
                </div>
                <div>
                  <p className="text-sm text-text-body mb-2">{description}</p>
                  <div className="w-full h-2 bg-background-secondary rounded-full">
                    <div
                      className="h-full bg-accent-primary rounded-full"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <p className="text-xs text-accent-primary mt-1">{progress}% Complete</p>
                </div>
              </div>
            </div>
          </ContentCard>
        ))}
      </div>

      <div className="mt-8">
        <ContentCard title="Daily Quiz">
          <div className="space-y-4">
            <h4 className="font-semibold">Today's Question</h4>
            <p className="text-text-body">What are the five pillars of Islam?</p>
            <div className="space-y-2">
              <button className="btn w-full">Start Quiz</button>
            </div>
          </div>
        </ContentCard>
      </div>
    </div>
  );
}

export default IslamicLearning;