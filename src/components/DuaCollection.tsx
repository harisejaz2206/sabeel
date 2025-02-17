import React, { useState } from 'react';
import { Search, Heart, Star, Volume2 } from 'lucide-react';
import { cn } from '../lib/utils';

interface Dua {
    id: string;
    arabic: string;
    translation: string;
    transliteration: string;
    category: string;
    isFavorite: boolean;
}

function DuaCollection() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    const duas: Dua[] = [
        {
            id: '1',
            arabic: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
            translation: 'Our Lord, grant us good in this world and good in the Hereafter and protect us from the punishment of the Fire.',
            transliteration: 'Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan waqina adhaban-nar',
            category: 'daily',
            isFavorite: true
        }
        // Add more duas here
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-pearl-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search duas..."
                        className="w-full pl-10 pr-4 py-2 rounded-xl border border-pearl-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <button className="p-2 rounded-xl bg-primary-50 text-primary-600 hover:bg-primary-100 transition-colors">
                    <Heart size={20} />
                </button>
            </div>

            <div className="grid gap-4">
                {duas.map((dua) => (
                    <div key={dua.id} className="bg-white rounded-xl shadow-card p-6 space-y-4">
                        <div className="flex justify-between items-start">
                            <div className="space-y-2">
                                <p className="font-arabic text-2xl leading-relaxed">{dua.arabic}</p>
                                <p className="text-pearl-600 italic">{dua.transliteration}</p>
                                <p className="text-pearl-900">{dua.translation}</p>
                            </div>
                            <div className="flex gap-2">
                                <button className="p-2 rounded-lg hover:bg-pearl-50 transition-colors">
                                    <Volume2 size={20} className="text-primary-600" />
                                </button>
                                <button
                                    className={cn(
                                        "p-2 rounded-lg transition-colors",
                                        dua.isFavorite ? "text-gold-500 bg-gold-50" : "text-pearl-400 hover:bg-pearl-50"
                                    )}
                                >
                                    <Star size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DuaCollection; 