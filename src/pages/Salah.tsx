import React from 'react';
import { Clock, Droplet, Book, Bath, Heart, Calculator, Compass } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ContentCard from '../components/ContentCard';

function Salah() {
  const prayerTimes = [
    { name: 'Fajr', time: '5:30 AM' },
    { name: 'Sunrise', time: '6:45 AM' },
    { name: 'Dhuhr', time: '12:30 PM' },
    { name: 'Asr', time: '3:45 PM' },
    { name: 'Maghrib', time: '6:15 PM' },
    { name: 'Isha', time: '7:45 PM' },
  ];

  const guides = [
    { icon: Droplet, title: 'Wudu Guide', description: 'Step-by-step guide to ritual ablution' },
    { icon: Book, title: 'Prayer Guide', description: 'Comprehensive prayer tutorial' },
    { icon: Bath, title: 'Ghusl Guide', description: 'Complete ritual bath procedure' },
    { icon: Heart, title: 'Dhikr After Prayer', description: 'Post-prayer remembrance' },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <PageHeader
        icon={Clock}
        title="Salah"
        description="Prayer times and comprehensive guides for your daily prayers"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ContentCard title="Prayer Times">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {prayerTimes.map(({ name, time }) => (
                <div key={name} className="bg-background-secondary p-4 rounded-lg text-center">
                  <h4 className="font-semibold mb-1">{name}</h4>
                  <p className="text-accent-primary">{time}</p>
                </div>
              ))}
            </div>
          </ContentCard>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {guides.map(({ icon: Icon, title, description }) => (
              <div key={title} className="card hover:scale-[1.02] transition-all duration-200 cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-background-secondary rounded-lg">
                    <Icon className="text-accent-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{title}</h3>
                    <p className="text-sm text-text-body">{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <ContentCard title="Qibla Direction">
            <div className="aspect-square bg-background-secondary rounded-lg flex items-center justify-center">
              <Compass className="text-accent-primary" size={64} />
            </div>
            <p className="text-center mt-4 text-sm text-text-body">Tap to calibrate compass</p>
          </ContentCard>

          <ContentCard title="Missed Prayer Calculator">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-text-body mb-1">Number of days missed:</label>
                <input
                  type="number"
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-accent-primary focus:ring-2 focus:ring-accent-primary focus:ring-opacity-50"
                  min="0"
                />
              </div>
              <button className="btn w-full">Calculate</button>
            </div>
          </ContentCard>
        </div>
      </div>
    </div>
  );
}

export default Salah;