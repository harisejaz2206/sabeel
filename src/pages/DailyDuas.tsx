import React from 'react';
import { Heart, Sun, Moon, Coffee, Home, Bed, ShowerHead as Shower, Plane, Search, Star } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ContentCard from '../components/ContentCard';

function DailyDuas() {
  const duaCategories = [
    { icon: Sun, title: 'Morning Adhkar', description: 'Start your day with blessed remembrance' },
    { icon: Moon, title: 'Evening Adhkar', description: 'End your day with peaceful devotion' },
    { icon: Coffee, title: 'Before & After Meals', description: 'Blessed eating etiquettes' },
    { icon: Home, title: 'Entering & Leaving Home', description: 'Protection in your comings and goings' },
    { icon: Bed, title: 'Before & After Sleep', description: 'Rest with divine protection' },
    { icon: Shower, title: 'Bathroom Etiquettes', description: 'Maintaining purity and modesty' },
    { icon: Plane, title: 'Travel Duas', description: 'Safeguard your journeys' },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <PageHeader
        icon={Heart}
        title="Daily Duas"
        description="Essential supplications for every moment of your day"
      />

      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-body" />
          <input
            type="text"
            placeholder="Search duas..."
            className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-accent-primary focus:ring-2 focus:ring-accent-primary focus:ring-opacity-50"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {duaCategories.map(({ icon: Icon, title, description }) => (
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

      <div className="mt-8">
        <ContentCard title="Favorites">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-background-secondary rounded-lg">
              <div>
                <p className="font-arabic text-lg mb-1">رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ</p>
                <p className="text-sm text-text-body">Our Lord, grant us good in this world and good in the Hereafter and protect us from the punishment of the Fire.</p>
              </div>
              <Star className="text-accent-primary cursor-pointer" size={20} />
            </div>
            {/* Add more favorite duas here */}
          </div>
        </ContentCard>
      </div>
    </div>
  );
}

export default DailyDuas;