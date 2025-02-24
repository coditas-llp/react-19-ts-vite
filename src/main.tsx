import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import './styles/base.scss';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LoaderProvider } from 'LoaderContext/Provider.tsx';
import { BackgroundPage } from 'components/BackgroundPage/BackgroundPage.tsx';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LoaderProvider>
      <QueryClientProvider client={queryClient}>
        <BackgroundPage>
          <App />
        </BackgroundPage>
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </LoaderProvider>
  </React.StrictMode>,
);
