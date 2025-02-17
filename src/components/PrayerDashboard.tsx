import React, { useState } from 'react';
import { Clock, Compass, BookOpen, Volume2 } from 'lucide-react';
import { cn } from '../lib/utils';

interface Prayer {
    name: string;
    time: string;
    timeLeft: string;
    isNext: boolean;
}

function PrayerDashboard() {
    const [athkarCount, setAthkarCount] = useState(0);
    const prayers: Prayer[] = [
        { name: 'Fajr', time: '5:30 AM', timeLeft: '2h 15m', isNext: false },
        { name: 'Dhuhr', time: '12:30 PM', timeLeft: '4h 45m', isNext: true },
        { name: 'Asr', time: '3:45 PM', timeLeft: '8h', isNext: false },
        { name: 'Maghrib', time: '6:15 PM', timeLeft: '10h 30m', isNext: false },
        { name: 'Isha', time: '7:45 PM', timeLeft: '12h', isNext: false },
    ];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
                <div className="bg-white rounded-2xl shadow-elevated p-6">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-primary-50 rounded-xl">
                                <Clock className="text-primary-600" size={24} />
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold text-pearl-900">Prayer Times</h2>
                                <p className="text-sm text-pearl-500">Dubai, UAE</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-sm text-pearl-500">Next Prayer</p>
                            <p className="text-lg font-semibold text-primary-600">Dhuhr in 4h 45m</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {prayers.map(({ name, time, timeLeft, isNext }) => (
                            <div
                                key={name}
                                className={cn(
                                    "p-4 rounded-xl transition-all",
                                    isNext ? "bg-primary-50 border-2 border-primary-200" : "bg-pearl-50"
                                )}
                            >
                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-medium text-pearl-900">{name}</span>
                                    <span className={cn(
                                        "text-sm",
                                        isNext ? "text-primary-600 font-semibold" : "text-pearl-600"
                                    )}>{time}</span>
                                </div>
                                <p className="text-xs text-pearl-500">{timeLeft} remaining</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-2xl shadow-card p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-3 bg-primary-50 rounded-xl">
                                <BookOpen className="text-primary-600" size={24} />
                            </div>
                            <h3 className="text-lg font-semibold">Athkar Tracker</h3>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-pearl-600">Today's Count</span>
                                <span className="text-2xl font-semibold text-primary-600">{athkarCount}</span>
                            </div>
                            <button
                                onClick={() => setAthkarCount(prev => prev + 1)}
                                className="w-full py-3 bg-primary-50 text-primary-600 rounded-xl hover:bg-primary-100 transition-colors"
                            >
                                Add Dhikr
                            </button>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-card p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-3 bg-primary-50 rounded-xl">
                                <Compass className="text-primary-600" size={24} />
                            </div>
                            <h3 className="text-lg font-semibold">Qibla Direction</h3>
                        </div>
                        <div className="aspect-square bg-pearl-50 rounded-xl flex items-center justify-center">
                            <Compass className="text-primary-600 w-24 h-24" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-card p-6">
                    <h3 className="text-lg font-semibold mb-4">Prayer Guide</h3>
                    <div className="space-y-3">
                        {['Wudu', 'Prayer Steps', 'Duas', 'Common Mistakes'].map((item) => (
                            <button
                                key={item}
                                className="w-full p-3 text-left rounded-xl hover:bg-primary-50 transition-colors flex items-center justify-between"
                            >
                                <span>{item}</span>
                                <BookOpen className="text-primary-600" size={16} />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PrayerDashboard; 