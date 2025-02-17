import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation';
import AppRoutes from './routes';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/amiri/400.css';
import '@fontsource/amiri/700.css';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        <Navigation />
        <main className="flex-1 p-6">
          <AppRoutes />
        </main>
      </div>
    </Router>
  );
}

export default App;