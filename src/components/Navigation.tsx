import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Book, Clock, Heart, Calendar, Settings } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const navItems = [
  { to: '/', icon: Home, label: 'Home' },
  { to: '/duas', icon: Heart, label: 'Duas' },
  { to: '/prayer', icon: Clock, label: 'Prayer' },
  { to: '/quran', icon: Book, label: 'Quran' },
  { to: '/events', icon: Calendar, label: 'Events' },
];

function Navigation() {
  // const { theme, toggleTheme } = useTheme();

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="hidden lg:flex flex-col fixed left-0 top-0 h-screen w-64 bg-white dark:bg-pearl-800 border-r border-pearl-200 dark:border-pearl-700">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-lg bg-primary-50 dark:bg-primary-900/50 flex items-center justify-center">
              <Book className="text-primary-600 dark:text-primary-400" size={20} />
            </div>
            <span className="text-lg font-semibold">Islamic Guide</span>
          </div>

          <div className="space-y-2">
            {navItems.map(({ to, icon: Icon, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${isActive
                    ? 'bg-primary-50 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400'
                    : 'text-pearl-600 dark:text-pearl-400 hover:bg-pearl-50 dark:hover:bg-pearl-700'
                  }`
                }
              >
                <Icon size={20} />
                <span>{label}</span>
              </NavLink>
            ))}
          </div>
        </div>

        <div className="mt-auto p-6 border-t border-pearl-200 dark:border-pearl-700">
          <NavLink
            to="/settings"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-pearl-600 dark:text-pearl-400 hover:bg-pearl-50 dark:hover:bg-pearl-700"
          >
            <Settings size={20} />
            <span>Settings</span>
          </NavLink>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-pearl-800 border-t border-pearl-200 dark:border-pearl-700 z-50">
        <div className="flex justify-around items-center h-16 px-4">
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${isActive
                  ? 'text-primary-600 dark:text-primary-400'
                  : 'text-pearl-600 dark:text-pearl-400'
                }`
              }
            >
              <Icon size={20} />
              <span className="text-xs">{label}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
}

export default Navigation;