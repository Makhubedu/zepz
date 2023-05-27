import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import router from './routes';

function App() {
  return (
    <RouterProvider router={createBrowserRouter(router)} fallbackElement={<>Loading on navigate</>} />
  );
}

export default App;
