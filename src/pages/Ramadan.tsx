import React from 'react';
import { Moon, Clock, Book, Calculator, Calendar, Utensils } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import RamadanCountdown from '../components/RamadanCountdown';
import IslamicCalendar from '../components/IslamicCalendar';
import TasbihCounter from '../components/TasbihCounter';
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
    <div className="max-w-7xl mx-auto px-4 pb-20 lg:pb-6">
      <PageHeader
        icon={Moon}
        title="Ramadan"
        description="Your complete companion for the blessed month"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <RamadanCountdown />

        <div className="lg:col-span-2">
          <IslamicCalendar />
        </div>

        <div className="space-y-6">
          <TasbihCounter />

          <div className="bg-white rounded-2xl shadow-elevated p-6">
            <h3 className="text-lg font-semibold mb-4">Daily Schedule</h3>
            <div className="space-y-3">
              {schedule.map(({ meal, time }) => (
                <div key={meal} className="flex justify-between items-center p-3 bg-pearl-50 rounded-xl">
                  <span className="font-medium">{meal}</span>
                  <span className="text-primary-600">{time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ramadan;