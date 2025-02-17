import React from 'react';
import { Sunrise, Moon, BookOpen, Calendar, Heart } from 'lucide-react';

function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Welcome to Islamic Companion</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Prayer Times Widget */}
        <div className="card">
          <div className="flex items-center gap-2 mb-4">
            <Sunrise className="text-accent-primary" />
            <h2 className="text-lg font-semibold">Prayer Times</h2>
          </div>
          <div className="space-y-2">
            <p>Fajr: 5:30 AM</p>
            <p>Dhuhr: 12:30 PM</p>
            <p>Asr: 3:45 PM</p>
            <p>Maghrib: 6:15 PM</p>
            <p>Isha: 7:45 PM</p>
          </div>
        </div>

        {/* Daily Verse */}
        <div className="card">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="text-accent-primary" />
            <h2 className="text-lg font-semibold">Daily Verse</h2>
          </div>
          <p className="font-arabic text-lg mb-2">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
          <p className="text-sm">In the name of Allah, the Most Gracious, the Most Merciful</p>
        </div>

        {/* Quick Access Duas */}
        <div className="card">
          <div className="flex items-center gap-2 mb-4">
            <Heart className="text-accent-primary" />
            <h2 className="text-lg font-semibold">Quick Duas</h2>
          </div>
          <div className="space-y-2">
            <button className="btn w-full">Morning Adhkar</button>
            <button className="btn w-full">Evening Adhkar</button>
            <button className="btn w-full">Before Sleep</button>
          </div>
        </div>

        {/* Ramadan Countdown */}
        <div className="card">
          <div className="flex items-center gap-2 mb-4">
            <Moon className="text-accent-primary" />
            <h2 className="text-lg font-semibold">Ramadan 2024</h2>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-accent-primary mb-2">14</p>
            <p>Days until Ramadan</p>
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="mt-8">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="text-accent-primary" />
          <h2 className="text-xl font-semibold">Upcoming Events</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card">
            <h3 className="font-semibold mb-2">Ramadan Preparation Workshop</h3>
            <p className="text-sm">Learn how to make the most of the blessed month</p>
            <p className="text-sm text-accent-primary mt-2">March 10, 2024</p>
          </div>
          <div className="card">
            <h3 className="font-semibold mb-2">Tafsir Session</h3>
            <p className="text-sm">Weekly Quran interpretation class</p>
            <p className="text-sm text-accent-primary mt-2">Every Thursday</p>
          </div>
          <div className="card">
            <h3 className="font-semibold mb-2">Community Iftar</h3>
            <p className="text-sm">Join us for a blessed gathering</p>
            <p className="text-sm text-accent-primary mt-2">First day of Ramadan</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;