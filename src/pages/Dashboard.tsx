import React, { useState } from 'react';
import { Sunrise, Moon, BookOpen, Calendar, Heart } from 'lucide-react';
import RamadanCountdown from '../components/RamadanCountdown';
import TasbihCounter from '../components/TasbihCounter';
import BottomSheet from '../components/BottomSheet';

function Dashboard() {
  const [activeSheet, setActiveSheet] = useState<string | null>(null);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6 text-pearl-900 dark:text-pearl-50">
        Welcome to Islamic Companion
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Prayer Times */}
        <div className="bg-white dark:bg-pearl-800 rounded-2xl shadow-elevated p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-primary-50 dark:bg-primary-900/50 rounded-xl">
              <Sunrise className="text-primary-600 dark:text-primary-400" size={24} />
            </div>
            <h2 className="text-lg font-semibold text-pearl-900 dark:text-pearl-50">Prayer Times</h2>
          </div>
          <div className="space-y-3">
            {['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'].map((prayer, index) => (
              <div key={prayer} className="flex justify-between items-center">
                <span className="text-pearl-600 dark:text-pearl-400">{prayer}</span>
                <span className="text-pearl-900 dark:text-pearl-50">5:30 AM</span>
              </div>
            ))}
          </div>
        </div>

        {/* Daily Verse */}
        <div className="bg-white dark:bg-pearl-800 rounded-2xl shadow-elevated p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-primary-50 dark:bg-primary-900/50 rounded-xl">
              <BookOpen className="text-primary-600 dark:text-primary-400" size={24} />
            </div>
            <h2 className="text-lg font-semibold text-pearl-900 dark:text-pearl-50">Daily Verse</h2>
          </div>
          <p className="font-arabic text-2xl mb-3 text-pearl-900 dark:text-pearl-50">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>
          <p className="text-pearl-600 dark:text-pearl-400">
            In the name of Allah, the Most Gracious, the Most Merciful
          </p>
        </div>

        <TasbihCounter />
        <RamadanCountdown />
      </div>

      {/* Upcoming Events Section */}
      <h2 className="text-xl font-semibold mt-8 mb-4 text-pearl-900 dark:text-pearl-50">
        Upcoming Events
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {['Ramadan Preparation', 'Tafsir Session', 'Community Iftar'].map((event) => (
          <div key={event} className="bg-white dark:bg-pearl-800 rounded-2xl shadow-elevated p-6">
            <h3 className="font-semibold text-pearl-900 dark:text-pearl-50 mb-2">{event}</h3>
            <p className="text-pearl-600 dark:text-pearl-400">Coming soon...</p>
          </div>
        ))}
      </div>

      <BottomSheet
        isOpen={activeSheet === 'duas'}
        onClose={() => setActiveSheet(null)}
        title="Quick Duas"
      >
        <div className="space-y-4">
          {['Morning Adhkar', 'Evening Adhkar', 'Before Sleep'].map((dua) => (
            <button
              key={dua}
              className="w-full p-4 text-left bg-pearl-50 dark:bg-pearl-700 rounded-xl 
                       hover:bg-pearl-100 dark:hover:bg-pearl-600 transition-colors
                       text-pearl-900 dark:text-pearl-50"
            >
              {dua}
            </button>
          ))}
        </div>
      </BottomSheet>
    </div>
  );
}

export default Dashboard;