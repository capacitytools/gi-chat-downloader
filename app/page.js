import Link from 'next/link';

const tools = [
  { href: '/download/youtube',   label: 'YouTube Downloader',   desc: 'MP4 & MP3, up to 1080p' },
  { href: '/download/tiktok',    label: 'TikTok Downloader',    desc: 'No watermark, HD' },
  { href: '/download/facebook',  label: 'Facebook Downloader',  desc: 'Videos & Reels' },
  { href: '/download/instagram', label: 'Instagram Downloader', desc: 'Reels & posts' },
  { href: '/download/twitter',   label: 'X (Twitter) Downloader', desc: 'Videos & GIFs' },
  { href: '/download/whatsapp',  label: 'WhatsApp Status Saver', desc: 'Save statuses to your device' },
];

export default function DownloadHub() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-gray-800">All Downloaders</h1>
      <p className="text-sm text-gray-500">Pick a platform. No signup, no watermark.</p>
      <div className="grid gap-3">
        {tools.map(t => (
          <Link key={t.href} href={t.href} className="card hover:shadow-md transition">
            <p className="font-semibold text-gray-800">{t.label}</p>
            <p className="text-sm text-gray-500">{t.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}