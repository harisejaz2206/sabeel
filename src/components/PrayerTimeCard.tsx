import React from 'react';
import { Clock } from 'lucide-react';

interface Prayer {
    name: string;
    time: string;
    isNext?: boolean;
}

function PrayerTimeCard() {
    const prayers: Prayer[] = [
        { name: 'Fajr', time: '5:30 AM' },
        { name: 'Dhuhr', time: '12:30 PM' },
        { name: 'Asr', time: '3:45 PM', isNext: true },
        { name: 'Maghrib', time: '6:15 PM' },
        { name: 'Isha', time: '7:45 PM' },
    ];

    return (
        <div className="bg-white rounded-2xl shadow-card p-6">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary-50 rounded-xl">
                    <Clock className="text-primary-600" size={24} />
                </div>
                <div>
                    <h2 className="text-lg font-semibold text-pearl-900">Prayer Times</h2>
                    <p className="text-sm text-pearl-500">Dubai, UAE</p>
                </div>
            </div>

            <div className="space-y-4">
                {prayers.map(({ name, time, isNext }) => (
                    <div
                        key={name}
                        className={`flex justify-between items-center p-3 rounded-xl transition-all ${isNext ? 'bg-primary-50 text-primary-600' : 'hover:bg-pearl-50'
                            }`}
                    >
                        <span className="font-medium">{name}</span>
                        <span className={isNext ? 'font-semibold' : ''}>{time}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PrayerTimeCard; 