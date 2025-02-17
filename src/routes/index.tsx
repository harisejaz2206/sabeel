import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Dashboard from '../pages/Dashboard';
import DailyDuas from '../pages/DailyDuas';
import Salah from '../pages/Salah';
import Quran from '../pages/Quran';
import SpecialOccasions from '../pages/SpecialOccasions';
import Ramadan from '../pages/Ramadan';
import Settings from '../pages/Settings';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/duas', element: <DailyDuas /> },
      { path: '/prayer', element: <Salah /> },
      { path: '/quran', element: <Quran /> },
      { path: '/events', element: <SpecialOccasions /> },
      { path: '/ramadan', element: <Ramadan /> },
      { path: '/settings', element: <Settings /> },
    ],
  },
]);

export default router;