import React from 'react';
import { Settings as SettingsIcon } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { useTheme } from '../contexts/ThemeContext';

function Settings() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div>
            <PageHeader
                icon={SettingsIcon}
                title="Settings"
                description="Customize your experience"
            />

            <div className="mt-6 bg-white dark:bg-pearl-800 rounded-2xl shadow-elevated p-6">
                <div className="flex items-center justify-between">
                    <span className="text-pearl-900 dark:text-pearl-50">Dark Mode</span>
                    <button
                        onClick={toggleTheme}
                        className="px-4 py-2 bg-primary-50 dark:bg-primary-900/50 rounded-lg"
                    >
                        {theme === 'dark' ? 'Light' : 'Dark'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Settings; 