'use client';
import { useEffect } from 'react';

export default function PWARegister() {
  useEffect(() => {
    if (!('serviceWorker' in navigator)) return;

    navigator.serviceWorker
      .register('/sw.js')
      .then((reg) => {
        // Check for SW updates every 60 minutes
        setInterval(() => reg.update(), 60 * 60 * 1000);
      })
      .catch(() => {});

    // Reload once when new SW takes over
    let refreshed = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (refreshed) return;
      refreshed = true;
      window.location.reload();
    });
  }, []);

  return null;
}