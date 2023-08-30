import React from 'react';
import './App.css';
import MainProducts from './components/MainProducts';
import { QueryClient, QueryClientProvider } from 'react-query';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainProducts />
    </QueryClientProvider>
  );
}
