import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


import './index.css';

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </QueryClientProvider>
);
