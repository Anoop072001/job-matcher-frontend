import type { Metadata } from 'next';
import './globals.css';
import TopBar from '../components/TopBar';

export const metadata: Metadata = {
  title: 'Job Matcher',
  description: 'Find jobs with AI assistance',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <TopBar />
        {children}
      </body>
    </html>
  );
}