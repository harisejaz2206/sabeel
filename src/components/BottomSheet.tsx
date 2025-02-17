import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface BottomSheetProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title: string;
}

function BottomSheet({ isOpen, onClose, children, title }: BottomSheetProps) {
    const sheetRef = useRef<HTMLDivElement>(null);
    const [snapPoint, setSnapPoint] = useState<'full' | 'half'>('half');

    const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const threshold = window.innerHeight * 0.2;
        if (info.velocity.y > 500 || info.offset.y > threshold) {
            onClose();
        } else {
            const newSnapPoint = info.offset.y < -threshold ? 'full' : 'half';
            setSnapPoint(newSnapPoint);
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-pearl-900 z-40"
                        onClick={onClose}
                    />
                    <motion.div
                        ref={sheetRef}
                        initial={{ y: '100%' }}
                        animate={{
                            y: snapPoint === 'full' ? '0%' : '50%',
                            transition: { type: 'spring', damping: 30, stiffness: 300 }
                        }}
                        exit={{ y: '100%' }}
                        drag="y"
                        dragConstraints={{ top: 0, bottom: 0 }}
                        dragElastic={0.2}
                        onDragEnd={handleDragEnd}
                        className="fixed bottom-0 left-0 right-0 bg-white dark:bg-pearl-800 
                     rounded-t-3xl z-50 max-h-[90vh] overflow-hidden"
                    >
                        <div className="p-4 border-b border-pearl-100 dark:border-pearl-700">
                            <div className="w-12 h-1 bg-pearl-200 dark:bg-pearl-600 rounded-full mx-auto mb-4" />
                            <h2 className="text-lg font-semibold text-pearl-900 dark:text-pearl-50">{title}</h2>
                        </div>
                        <div className="overflow-y-auto p-4 max-h-[calc(90vh-80px)]">
                            {children}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

export default BottomSheet; 