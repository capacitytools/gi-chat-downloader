'use client';
import { useState } from 'react';
import { Loader2, Download, Copy } from 'lucide-react';

export default function DownloaderShell({ title, placeholder, endpoint, hint }) {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  async function handleFetch() {
    setError(''); setResult(null);
    if (!url.trim()) return;
    setLoading(true);
    try {
      const res = await fetch(`${endpoint}?url=${encodeURIComponent(url)}`);
      const data = await res.json();
      if (!data.success) throw new Error(data.error || 'Failed to extract');
      setResult(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
      {hint && <p className="text-sm text-gray-500">{hint}</p>}

      <div className="card space-y-3">
        <input
          className="input-brand"
          placeholder={placeholder}
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          inputMode="url"
        />
        <button onClick={handleFetch} disabled={loading} className="btn-brand w-full flex items-center justify-center gap-2">
          {loading ? <><Loader2 size={18} className="animate-spin" /> Extracting…</> : 'Get Download Links'}
        </button>
      </div>

      {error && <div className="card border-red-200 text-red-600 text-sm">{error}</div>}

      {result && (
        <div className="card space-y-3">
          {result.thumbnail && (
            <img src={result.thumbnail} alt="thumbnail" className="rounded-xl w-full" />
          )}
          {result.title && <p className="font-semibold text-gray-800">{result.title}</p>}
          <div className="grid gap-2">
            {result.links?.map((l, i) => (
              <a key={i} href={l.url} target="_blank" rel="noreferrer"
                 className="flex items-center justify-between border border-gray-200 rounded-xl px-4 py-3 hover:border-brand-400">
                <span className="text-sm font-medium text-gray-700">{l.label}</span>
                <Download size={18} className="text-brand-600" />
              </a>
            ))}
          </div>
          <button onClick={() => navigator.clipboard.writeText(url)}
            className="text-xs text-gray-500 flex items-center gap-1">
            <Copy size={14} /> Copy source URL
          </button>
        </div>
      )}
    </div>
  );
}