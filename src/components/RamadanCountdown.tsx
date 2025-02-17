import React, { useEffect, useState } from 'react';
import { Moon, Calendar } from 'lucide-react';

function RamadanCountdown() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            // Example date - should be dynamically calculated based on Islamic calendar
            const ramadanDate = new Date('2024-03-10');
            const now = new Date();
            const difference = ramadanDate.getTime() - now.getTime();

            setTimeLeft({
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            });
        };

        const timer = setInterval(calculateTimeLeft, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-white rounded-2xl shadow-elevated p-6">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary-50 rounded-xl">
                    <Moon className="text-primary-600" size={24} />
                </div>
                <div>
                    <h2 className="text-lg font-semibold text-pearl-900">Ramadan Countdown</h2>
                    <p className="text-sm text-pearl-500">Time until the blessed month</p>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
                {Object.entries(timeLeft).map(([unit, value]) => (
                    <div key={unit} className="text-center p-4 bg-pearl-50 rounded-xl">
                        <span className="block text-2xl font-semibold text-primary-600">{value}</span>
                        <span className="text-sm text-pearl-600 capitalize">{unit}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RamadanCountdown; 