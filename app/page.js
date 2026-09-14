import Link from 'next/link';
import { Youtube, Music2, Facebook, Instagram, Twitter } from 'lucide-react';

const tools = [
  { href: '/download/youtube',   label: 'YouTube',   icon: Youtube,   color: 'text-red-600' },
  { href: '/download/tiktok',    label: 'TikTok',    icon: Music2,    color: 'text-black' },
  { href: '/download/facebook',  label: 'Facebook',  icon: Facebook,  color: 'text-blue-600' },
  { href: '/download/instagram', label: 'Instagram', icon: Instagram, color: 'text-pink-600' },
  { href: '/download/twitter',   label: 'X',         icon: Twitter,   color: 'text-black' },
];

export default function Home() {
  return (
    <div className="space-y-6">
      <section className="bg-gradient-to-br from-brand-500 to-brand-700 text-white rounded-2xl p-6">
        <h1 className="text-2xl font-bold">G1-Chat Downloader</h1>
        <p className="text-brand-50 mt-1 text-sm">
          Free video downloads. No watermark. No signup.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-gray-800 mb-3">Choose a platform</h2>
        <div className="grid grid-cols-3 gap-3">
          {tools.map(({ href, label, icon: Icon, color }) => (
            <Link
              key={href}
              href={href}
              className="card flex flex-col items-center py-5 hover:shadow-md transition"
            >
              <Icon size={28} className={color} />
              <span className="mt-2 text-sm font-medium text-gray-700">{label}</span>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <Link href="/tube" className="card block bg-brand-50 border-brand-200">
          <h3 className="font-bold text-brand-700">▶ G1-Chat Tube</h3>
          <p className="text-sm text-gray-600 mt-1">
            Paste a YouTube or Instagram link to preview and play it right here.
          </p>
        </Link>
      </section>

      <section>
        <Link href="/blog" className="card block hover:shadow-md">
          <h3 className="font-bold text-gray-800">📖 From the blog</h3>
          <p className="text-sm text-gray-600 mt-1">
            Tutorials, guides and tips for downloading videos safely.
          </p>
        </Link>
      </section>
    </div>
  );
}