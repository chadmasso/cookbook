'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { OpenAPI } from '../../generated';
import './globals.css';
OpenAPI.BASE = process.env.NEXT_PUBLIC_FASTAPI_SERVER_HOST || 'http://localhost:8000';

const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <div className="mx-auto mt-10 max-w-md rounded-lg bg-gray-100 p-8">{children}</div>
        </QueryClientProvider>
      </body>
    </html>
  );
}
