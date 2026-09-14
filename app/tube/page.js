'use client';
import { useState } from 'react';

export default function TubePage() {
  const [url, setUrl] = useState('');
  const [embed, setEmbed] = useState(null);
  const [error, setError] = useState('');

  function load() {
    setError(''); setEmbed(null);
    const yt = url.match(/(?:v=|youtu\.be\/|shorts\/)([\w-]{11})/);
    const ig = url.match(/instagram\.com\/(?:reel|p)\/([\w-]+)/);

    if (yt) {
      setEmbed({ type: 'youtube', id: yt[1] });
    } else if (ig) {
      setEmbed({ type: 'instagram', id: ig[1] });
    } else {
      setError('Only YouTube and Instagram links supported for now.');
    }
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-gray-800">G1-Chat Tube</h1>
      <p className="text-sm text-gray-500">Preview & play YouTube and Instagram videos here.</p>

      <div className="card space-y-3">
        <input
          className="input-brand"
          placeholder="Paste YouTube or Instagram link…"
          value={url}
          onChange={e => setUrl(e.target.value)}
          inputMode="url"
        />
        <button onClick={load} className="btn-brand w-full">Preview</button>
      </div>

      {error && <div className="card border-red-200 text-red-600 text-sm">{error}</div>}

      {embed && (
        <div className="rounded-2xl overflow-hidden border-4 border-brand-500 shadow-lg bg-black">
          <div className="bg-brand-500 text-white text-xs px-3 py-1 flex justify-between">
            <span>▶ G1-Chat Tube</span>
            <span>g1chat</span>
          </div>
          {embed.type === 'youtube' && (
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${embed.id}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
                allowFullScreen
              />
            </div>
          )}
          {embed.type === 'instagram' && (
            <div className="aspect-[9/16] max-h-[80vh]">
              <iframe
                className="w-full h-full bg-white"
                src={`https://www.instagram.com/p/${embed.id}/embed/`}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}