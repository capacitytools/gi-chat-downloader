'use client';
import { Search, Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-100">
      <div className="max-w-2xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-brand-500 text-white grid place-items-center font-bold">
            G1
          </div>
          <span className="font-bold text-gray-800">G1-Chat</span>
        </Link>
        <div className="flex items-center gap-2">
          <Link href="/" className="p-2 rounded-full hover:bg-gray-100">
            <Search size={20} />
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-full hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-gray-100 bg-white">
          <div className="max-w-2xl mx-auto px-4 py-2 grid grid-cols-2 gap-1 text-sm">
            <Link className="py-2 px-3 rounded-lg hover:bg-gray-50" href="/download/youtube">YouTube</Link>
            <Link className="py-2 px-3 rounded-lg hover:bg-gray-50" href="/download/tiktok">TikTok</Link>
            <Link className="py-2 px-3 rounded-lg hover:bg-gray-50" href="/download/facebook">Facebook</Link>
            <Link className="py-2 px-3 rounded-lg hover:bg-gray-50" href="/download/instagram">Instagram</Link>
            <Link className="py-2 px-3 rounded-lg hover:bg-gray-50" href="/download/twitter">X (Twitter)</Link>
            <Link className="py-2 px-3 rounded-lg hover:bg-gray-50" href="/download/whatsapp">WhatsApp Status</Link>
            <Link className="py-2 px-3 rounded-lg hover:bg-gray-50" href="/tube">G1-Chat Tube</Link>
            <Link className="py-2 px-3 rounded-lg hover:bg-gray-50" href="/blog">Blog</Link>
            <Link className="py-2 px-3 rounded-lg hover:bg-gray-50" href="/admin">Admin</Link>
            <Link className="py-2 px-3 rounded-lg hover:bg-gray-50" href="/account">Account</Link>
          </div>
        </nav>
      )}
    </header>
  );
}