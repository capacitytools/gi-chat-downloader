import './globals.css';
import BottomNav from '@/components/BottomNav';
import Header from '@/components/Header';

export const metadata = {
  title: 'G1-Chat Downloader',
  description: 'Free YouTube, TikTok, Facebook, Instagram and X video downloader.',
  manifest: '/manifest.json',
  themeColor: '#00a86b',
  appleWebApp: { capable: true, statusBarStyle: 'default', title: 'G1-Chat' },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#00a86b" />
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