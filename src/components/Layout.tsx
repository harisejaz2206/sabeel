import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import { ThemeProvider } from '../contexts/ThemeContext';

function Layout() {
    return (
        <ThemeProvider>
            <div className="min-h-screen bg-pearl-50 dark:bg-pearl-900">
                <Navigation />
                <main className="lg:pl-64 pt-6 px-4 pb-20 lg:pb-6">
                    <div className="max-w-7xl mx-auto">
                        <Outlet />
                    </div>
                </main>
            </div>
        </ThemeProvider>
    );
}

export default Layout; 