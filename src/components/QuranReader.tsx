import React, { useState } from 'react';
import { BookOpen, Bookmark, ChevronLeft, ChevronRight, Volume2 } from 'lucide-react';
import { cn } from '../lib/utils';

interface Verse {
    number: number;
    arabic: string;
    translation: string;
}

function QuranReader() {
    const [currentVerse, setCurrentVerse] = useState(0);
    const [isBookmarked, setIsBookmarked] = useState(false);

    const verses: Verse[] = [
        {
            number: 1,
            arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
            translation: "In the name of Allah, the Entirely Merciful, the Especially Merciful"
        },
        // Add more verses
    ];

    return (
        <div className="bg-white rounded-2xl shadow-elevated p-6">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary-50 rounded-xl">
                        <BookOpen className="text-primary-600" size={24} />
                    </div>
                    <h2 className="text-lg font-semibold">Al-Fatiha</h2>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setIsBookmarked(!isBookmarked)}
                        className={cn(
                            "p-2 rounded-lg transition-colors",
                            isBookmarked ? "text-gold-500 bg-gold-50" : "text-pearl-400 hover:bg-pearl-50"
                        )}
                    >
                        <Bookmark size={20} />
                    </button>
                </div>
            </div>

            <div className="space-y-8 mb-8">
                <p className="text-3xl text-center font-arabic leading-loose">{verses[currentVerse].arabic}</p>
                <p className="text-center text-pearl-600">{verses[currentVerse].translation}</p>
            </div>

            <div className="flex items-center justify-between">
                <button
                    onClick={() => setCurrentVerse(prev => Math.max(0, prev - 1))}
                    className="p-2 rounded-lg hover:bg-pearl-50 transition-colors"
                >
                    <ChevronLeft size={24} />
                </button>
                <div className="flex items-center gap-4">
                    <button className="p-2 rounded-lg hover:bg-pearl-50 transition-colors">
                        <Volume2 size={20} />
                    </button>
                    <span className="text-pearl-600">Verse {currentVerse + 1}</span>
                </div>
                <button
                    onClick={() => setCurrentVerse(prev => Math.min(verses.length - 1, prev + 1))}
                    className="p-2 rounded-lg hover:bg-pearl-50 transition-colors"
                >
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>
    );
}

export default QuranReader; 