import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Book, 
  Clock, 
  Heart, 
  Calendar, 
  Users, 
  GraduationCap,
  Moon,
  Menu,
  X
} from 'lucide-react';
import { cn } from '../lib/utils';

const navItems = [
  { to: '/', icon: Home, label: 'Dashboard' },
  { to: '/duas', icon: Heart, label: 'Daily Duas' },
  { to: '/salah', icon: Clock, label: 'Salah' },
  { to: '/quran', icon: Book, label: 'Quran' },
  { to: '/occasions', icon: Calendar, label: 'Special Occasions' },
  { to: '/life-events', icon: Users, label: 'Life Events' },
  { to: '/learn', icon: GraduationCap, label: 'Learning Center' },
  { to: '/ramadan', icon: Moon, label: 'Ramadan' },
];

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-interactive"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <nav className={cn(
        "fixed lg:static w-nav h-screen bg-white shadow-lg p-6 transition-transform duration-200 ease-in-out",
        "flex flex-col gap-4",
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        <div className="flex items-center gap-2 mb-8">
          <Moon className="text-accent-primary" size={32} />
          <h1 className="text-xl font-semibold text-text-heading">Islamic Companion</h1>
        </div>

        <div className="flex flex-col gap-2">
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => cn(
                "nav-link",
                isActive && "active"
              )}
            >
              <Icon size={20} />
              <span>{label}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
}

export default Navigation;