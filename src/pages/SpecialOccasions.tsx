import React from 'react';
import { Calendar, Moon, SprayCan as Pray, Heart, Baby, Bell } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ContentCard from '../components/ContentCard';

function SpecialOccasions() {
  const occasions = [
    {
      icon: Moon,
      title: 'Ramadan Duas',
      description: 'Special supplications for the blessed month',
      date: 'March 10, 2024'
    },
    {
      icon: Pray,
      title: 'Eid Prayers',
      description: 'Guidance for Eid prayers and celebrations',
      date: 'April 10, 2024'
    },
    {
      icon: Pray,
      title: 'Hajj & Umrah',
      description: 'Complete guide for pilgrimage',
      date: 'June 15, 2024'
    },
    {
      icon: Heart,
      title: 'Marriage Duas',
      description: 'Blessed supplications for matrimony',
      date: 'Ongoing'
    },
    {
      icon: Baby,
      title: 'New Baby Duas',
      description: 'Welcoming new life with blessings',
      date: 'Ongoing'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <PageHeader
        icon={Calendar}
        title="Special Occasions"
        description="Guidance and supplications for life's significant moments"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {occasions.map(({ icon: Icon, title, description, date }) => (
          <div key={title} className="card">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-background-secondary rounded-lg">
                <Icon className="text-accent-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{title}</h3>
                <p className="text-sm text-text-body mb-2">{description}</p>
                <p className="text-xs text-accent-primary">{date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <ContentCard title="Upcoming Events">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-background-secondary rounded-lg">
              <div className="flex items-center gap-4">
                <Bell className="text-accent-primary" size={20} />
                <div>
                  <h4 className="font-semibold">Ramadan Preparation Workshop</h4>
                  <p className="text-sm text-text-body">Learn how to prepare for the blessed month</p>
                </div>
              </div>
              <p className="text-sm text-accent-primary">2 days away</p>
            </div>
          </div>
        </ContentCard>
      </div>
    </div>
  );
}

export default SpecialOccasions;