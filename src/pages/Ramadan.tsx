import React from 'react';
import { Moon, Clock, Book, Calculator, Calendar, Utensils } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ContentCard from '../components/ContentCard';

function Ramadan() {
  const schedule = [
    { meal: 'Suhoor', time: '4:30 AM' },
    { meal: 'Fajr', time: '5:15 AM' },
    { meal: 'Iftar', time: '6:45 PM' },
    { meal: 'Taraweeh', time: '8:00 PM' }
  ];

  const goals = [
    { title: 'Quran Reading', target: '1 Juz daily', progress: 60 },
    { title: 'Taraweeh', target: '20 rakah', progress: 75 },
    { title: 'Charity', target: '$500', progress: 45 }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <PageHeader
        icon={Moon}
        title="Ramadan"
        description="Your complete companion for the blessed month"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <ContentCard title="Daily Schedule">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {schedule.map(({ meal, time }) => (
                <div key={meal} className="bg-background-secondary p-4 rounded-lg text-center">
                  <h4 className="font-semibold mb-1">{meal}</h4>
                  <p className="text-accent-primary">{time}</p>
                </div>
              ))}
            </div>
          </ContentCard>

          <ContentCard title="Ramadan Goals">
            <div className="space-y-4">
              {goals.map(({ title, target, progress }) => (
                <div key={title} className="p-4 bg-background-secondary rounded-lg">
                  <div className="flex justify-between mb-2">
                    <h4 className="font-semibold">{title}</h4>
                    <span className="text-sm text-accent-primary">{target}</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-full bg-accent-primary rounded-full"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </ContentCard>
        </div>

        <div className="space-y-6">
          <ContentCard title="Zakat Calculator">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-text-body mb-1">
                  Total Savings (USD)
                </label>
                <input
                  type="number"
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-accent-primary focus:ring-2 focus:ring-accent-primary focus:ring-opacity-50"
                />
              </div>
              <button className="btn w-full">Calculate Zakat</button>
            </div>
          </ContentCard>

          <ContentCard title="Iftar Planning">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Utensils className="text-accent-primary" size={24} />
                <div>
                  <h4 className="font-semibold">Today's Menu</h4>
                  <p className="text-sm text-text-body">Plan your iftar meal</p>
                </div>
              </div>
              <button className="btn w-full">Add Menu Item</button>
            </div>
          </ContentCard>
        </div>
      </div>
    </div>
  );
}

export default Ramadan;