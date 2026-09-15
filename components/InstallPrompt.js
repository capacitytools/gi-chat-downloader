'use client';
import { useEffect, useState } from 'react';
import { Download, X } from 'lucide-react';

const STORAGE_KEY = 'g1chat-install-dismissed';
const VISIT_KEY = 'g1chat-visits';

export default function InstallPrompt() {
  const [prompt, setPrompt] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(display-mode: standalone)').matches) return;

    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (dismissed && Date.now() - Number(dismissed) < 7 * 24 * 60 * 60 * 1000) {
      return;
    }

    const visits = Number(localStorage.getItem(VISIT_KEY) || '0') + 1;
    localStorage.setItem(VISIT_KEY, String(visits));
    if (visits < 2) return;

    const handler = (e) => {
      e.preventDefault();
      setPrompt(e);
      setVisible(true);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  async function install() {
    if (!prompt) return;
    prompt.prompt();
    const { outcome } = await prompt.userChoice;
    if (outcome === 'accepted') {
      localStorage.setItem(STORAGE_KEY, String(Date.now()));
      setVisible(false);
    }
    setPrompt(null);
  }

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, String(Date.now()));
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed left-4 right-4 bottom-24 z-40 max-w-md mx-auto">
      <div className="bg-brand-600 text-white rounded-2xl shadow-lg p-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-white text-brand-600 grid place-items-center font-bold shrink-0">
          G1
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-sm">Install G1-Chat</p>
          <p className="text-xs text-brand-50">
            Faster access, works offline, no browser bar.
          </p>
        </div>
        <button
          onClick={install}
          className="bg-white text-brand-700 font-semibold rounded-lg px-3 py-2 text-xs flex items-center gap-1"
        >
          <Download size={14} /> Install
        </button>
        <button
          onClick={dismiss}
          className="p-1 rounded-full hover:bg-brand-700"
          aria-label="Dismiss"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}