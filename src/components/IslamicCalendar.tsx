import React, { useState } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

interface IslamicDate {
    gregorian: string;
    hijri: string;
    events?: string[];
}

function IslamicCalendar() {
    const [currentMonth, setCurrentMonth] = useState(new Date());

    const islamicDates: Record<string, IslamicDate> = {
        '2024-03-10': {
            gregorian: 'March 10, 2024',
            hijri: '1 Ramadan 1445',
            events: ['Beginning of Ramadan']
        },
        '2024-04-09': {
            gregorian: 'April 9, 2024',
            hijri: '30 Ramadan 1445',
            events: ['Eid ul-Fitr Eve']
        },
        // Add more significant dates
    };

    const getDaysInMonth = (date: Date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const days = new Date(year, month + 1, 0).getDate();
        const firstDay = new Date(year, month, 1).getDay();
        return { days, firstDay };
    };

    const { days, firstDay } = getDaysInMonth(currentMonth);

    const nextMonth = () => {
        setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)));
    };

    const prevMonth = () => {
        setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)));
    };

    return (
        <div className="bg-white dark:bg-pearl-800 rounded-2xl shadow-elevated p-6 transition-colors">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary-50 dark:bg-primary-900/50 rounded-xl">
                        <CalendarIcon className="text-primary-600 dark:text-primary-400" size={24} />
                    </div>
                    <h2 className="text-lg font-semibold text-pearl-900 dark:text-pearl-50">
                        {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
                    </h2>
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={prevMonth}
                        className="p-2 rounded-lg hover:bg-pearl-50 dark:hover:bg-pearl-700 transition-colors"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={nextMonth}
                        className="p-2 rounded-lg hover:bg-pearl-50 dark:hover:bg-pearl-700 transition-colors"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-7 gap-2 mb-4">
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                    <div key={day} className="text-center text-sm text-pearl-500 dark:text-pearl-400 font-medium">
                        {day}
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: firstDay }).map((_, i) => (
                    <div key={`empty-${i}`} className="aspect-square" />
                ))}
                {Array.from({ length: days }).map((_, i) => {
                    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i + 1);
                    const dateString = date.toISOString().split('T')[0];
                    const isToday = new Date().toISOString().split('T')[0] === dateString;
                    const hasEvent = islamicDates[dateString];

                    return (
                        <div
                            key={i}
                            className={cn(
                                "aspect-square p-1 relative rounded-lg transition-colors",
                                isToday && "bg-primary-50 dark:bg-primary-900/50",
                                hasEvent && "ring-2 ring-primary-200 dark:ring-primary-700"
                            )}
                        >
                            <span className="text-sm">{i + 1}</span>
                            {hasEvent && (
                                <div className="absolute bottom-1 right-1 w-2 h-2 rounded-full bg-primary-500" />
                            )}
                        </div>
                    );
                })}
            </div>

            <div className="mt-4 space-y-2">
                {Object.entries(islamicDates).map(([date, { hijri, events }]) => (
                    <div
                        key={date}
                        className="p-3 bg-pearl-50 dark:bg-pearl-700/50 rounded-lg text-sm"
                    >
                        <div className="flex justify-between">
                            <span className="text-pearl-900 dark:text-pearl-50 font-medium">{hijri}</span>
                            <span className="text-pearl-500 dark:text-pearl-400">{date}</span>
                        </div>
                        {events?.map(event => (
                            <p key={event} className="text-primary-600 dark:text-primary-400 mt-1">{event}</p>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default IslamicCalendar; 