import React from 'react';
import { Book, BookOpen, Bookmark, BookMarked, BarChart, GraduationCap } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ContentCard from '../components/ContentCard';

function Quran() {
  const surahs = [
    { number: 1, name: 'Al-Fatiha', verses: 7, progress: 100 },
    { number: 2, name: 'Al-Baqarah', verses: 286, progress: 45 },
    { number: 3, name: "Ali Imran", verses: 200, progress: 30 },
  ];

  const bookmarks = [
    { surah: 'Al-Fatiha', verse: 1, note: 'Daily reading' },
    { surah: 'Al-Mulk', verse: 1, note: 'Night reading' },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <PageHeader
        icon={Book}
        title="Quran"
        description="Read, learn, and reflect on the Holy Quran"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <ContentCard title="Daily Verse">
            <div className="space-y-4">
              <p className="font-arabic text-2xl text-center mb-4">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
              <p className="text-center">In the name of Allah, the Most Gracious, the Most Merciful</p>
              <p className="text-sm text-text-body text-center">Al-Fatiha: 1</p>
            </div>
          </ContentCard>

          <ContentCard title="Surah Index">
            <div className="space-y-4">
              {surahs.map(({ number, name, verses, progress }) => (
                <div key={number} className="flex items-center justify-between p-4 bg-background-secondary rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-accent-primary text-white rounded-full flex items-center justify-center font-semibold">
                      {number}
                    </div>
                    <div>
                      <h4 className="font-semibold">{name}</h4>
                      <p className="text-sm text-text-body">{verses} verses</p>
                    </div>
                  </div>
                  <div className="w-24">
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-full bg-accent-primary rounded-full"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ContentCard>
        </div>

        <div className="space-y-6">
          <ContentCard title="Memorization Progress">
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold">Overall Progress</h4>
                <span className="text-accent-primary">23%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-full bg-accent-primary rounded-full" style={{ width: '23%' }} />
              </div>
            </div>
          </ContentCard>

          <ContentCard title="Bookmarks">
            <div className="space-y-4">
              {bookmarks.map(({ surah, verse, note }) => (
                <div key={`${surah}-${verse}`} className="flex items-center justify-between p-4 bg-background-secondary rounded-lg">
                  <div>
                    <h4 className="font-semibold">{surah}</h4>
                    <p className="text-sm text-text-body">Verse {verse} - {note}</p>
                  </div>
                  <BookMarked className="text-accent-primary" size={20} />
                </div>
              ))}
            </div>
          </ContentCard>

          <ContentCard title="Tafsir Resources">
            <div className="space-y-4">
              <button className="btn w-full">Ibn Kathir</button>
              <button className="btn w-full">Al-Qurtubi</button>
              <button className="btn w-full">Al-Tabari</button>
            </div>
          </ContentCard>
        </div>
      </div>
    </div>
  );
}

export default Quran;