import React from 'react';
import { Heart } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import DuaCollection from '../components/DuaCollection';

function DailyDuas() {
  return (
    <div className="max-w-7xl mx-auto">
      <PageHeader
        icon={Heart}
        title="Daily Duas"
        description="Collection of essential daily supplications"
      />

      <div className="mt-6">
        <DuaCollection />
      </div>
    </div>
  );
}

export default DailyDuas;