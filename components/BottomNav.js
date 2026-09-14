'use client';
import { Home, Play, Download, BookOpen, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const items = [
  { href: '/',        label: 'Home',     icon: Home },
  { href: '/tube',    label: 'Tube',     icon: Play },
  { href: '/download',label: 'Download', icon: Download },
  { href: '/blog',    label: 'Blog',     icon: BookOpen },
  { href: '/account', label: 'Account',  icon: User },
];

export default function BottomNav() {
  const path = usePathname();
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 z-50">
      <div className="max-w-2xl mx-auto grid grid-cols-5">
        {items.map(({ href, label, icon: Icon }) => {
          const active = path === href || (href !== '/' && path.startsWith(href));
          return (
            <Link key={href} href={href}
              className={`flex flex-col items-center py-2 text-xs ${active ? 'text-brand-600' : 'text-gray-500'}`}>
              <Icon size={22} strokeWidth={active ? 2.5 : 2} />
              <span className="mt-0.5">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}