import './globals.css';
import BottomNav from '@/components/BottomNav';
import Header from '@/components/Header';
import InstallPrompt from '@/components/InstallPrompt';
import PWARegister from '@/components/PWARegister';

export const metadata = {
  title: 'G1-Chat Downloader',
  description:
    'Free video downloader for YouTube, TikTok, Facebook, Instagram and X. Plus G1-Chat Tube.',
  manifest: '/manifest.json',
  applicationName: 'G1-Chat',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'G1-Chat',
  },
  formatDetection: { telephone: false },
  openGraph: {
    title: 'G1-Chat Downloader',
    description:
      'Free video downloader — YouTube, TikTok, Facebook, Instagram, X.',
    type: 'website',
  },
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
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="G1-Chat" />
      </head>
      <body>
        <Header />
        <main className="max-w-2xl mx-auto px-4 pt-4 pb-24">
          {children}
        </main>
        <BottomNav />
        <InstallPrompt />
        <PWARegister />
      </body>
    </html>
  );
}