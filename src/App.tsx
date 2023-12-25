import { RouterProvider } from 'react-router-dom';
import React from 'react';
import router from './routes';

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
