import './globals.css';
import BottomNav from '@/components/BottomNav';
import Header from '@/components/Header';

export const metadata = {
  title: 'G1-Chat Downloader',
  description: 'Free YouTube, TikTok, Facebook, Instagram and X video downloader.',
  manifest: '/manifest.json',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
  themeColor: '#00a86b',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
      </head>
      <body>
        <Header />
        <main className="max-w-2xl mx-auto px-4 pt-4">{children}</main>
        <BottomNav />
      </body>
    </html>
  );
}