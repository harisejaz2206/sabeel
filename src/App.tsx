import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/amiri/400.css';
import '@fontsource/amiri/700.css';

function App() {
  return <RouterProvider router={router} />;
}

export default App;