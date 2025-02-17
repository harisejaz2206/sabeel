import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import DailyDuas from '../pages/DailyDuas';
import Salah from '../pages/Salah';
import Quran from '../pages/Quran';
import SpecialOccasions from '../pages/SpecialOccasions';
import LifeEvents from '../pages/LifeEvents';
import IslamicLearning from '../pages/IslamicLearning';
import Ramadan from '../pages/Ramadan';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/duas" element={<DailyDuas />} />
      <Route path="/salah" element={<Salah />} />
      <Route path="/quran" element={<Quran />} />
      <Route path="/occasions" element={<SpecialOccasions />} />
      <Route path="/life-events" element={<LifeEvents />} />
      <Route path="/learn" element={<IslamicLearning />} />
      <Route path="/ramadan" element={<Ramadan />} />
    </Routes>
  );
}

export default AppRoutes;