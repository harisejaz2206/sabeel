import React, { useState, useEffect } from 'react';
import { Circle, RotateCcw } from 'lucide-react';

function TasbihCounter() {
    const [count, setCount] = useState(0);
    const [totalCount, setTotalCount] = useState(0);

    const handleCount = () => {
        if ('vibrate' in navigator) {
            navigator.vibrate(20); // Haptic feedback
        }
        setCount((prev) => (prev + 1) % 33);
        setTotalCount((prev) => prev + 1);
    };

    const reset = () => {
        if ('vibrate' in navigator) {
            navigator.vibrate([30, 50, 30]);
        }
        setCount(0);
    };

    return (
        <div className="bg-white rounded-2xl shadow-elevated p-6">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-pearl-900">Digital Tasbih</h2>
                <span className="text-sm text-pearl-500">Total: {totalCount}</span>
            </div>

            <div className="relative aspect-square mb-6">
                <button
                    onClick={handleCount}
                    className="w-full h-full rounded-full bg-primary-50 hover:bg-primary-100 
                   transition-all active:scale-95 flex items-center justify-center"
                >
                    <span className="text-4xl font-semibold text-primary-600">{count}</span>
                </button>
                <button
                    onClick={reset}
                    className="absolute -top-2 -right-2 p-2 bg-white rounded-full shadow-card
                   hover:bg-pearl-50 transition-colors"
                >
                    <RotateCcw size={20} className="text-pearl-600" />
                </button>
            </div>

            <div className="grid grid-cols-3 gap-2 text-sm">
                <div className="text-center p-2 rounded-lg bg-pearl-50">
                    <span className="block text-pearl-600">SubhanAllah</span>
                    <span className="text-primary-600 font-medium">{Math.floor(totalCount / 33)}</span>
                </div>
                <div className="text-center p-2 rounded-lg bg-pearl-50">
                    <span className="block text-pearl-600">Alhamdulillah</span>
                    <span className="text-primary-600 font-medium">{Math.floor((totalCount % 33) / 33)}</span>
                </div>
                <div className="text-center p-2 rounded-lg bg-pearl-50">
                    <span className="block text-pearl-600">Allahu Akbar</span>
                    <span className="text-primary-600 font-medium">{Math.floor((totalCount % 33) / 33)}</span>
                </div>
            </div>
        </div>
    );
}

export default TasbihCounter; 