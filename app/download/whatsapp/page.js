'use client';
import { useState } from 'react';
import { Upload, Download } from 'lucide-react';

export default function WhatsAppPage() {
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState('');
  const [error, setError] = useState('');

  function handleFile(e) {
    setError('');
    const f = e.target.files?.[0];
    if (!f) return;
    setFile(f);
    setFileUrl(URL.createObjectURL(f));
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-gray-800">WhatsApp Status Downloader</h1>
      <p className="text-sm text-gray-500">
        WhatsApp statuses live only on your phone. Upload a status video/image from
        your phone's <code>WhatsApp/Media/.Statuses</code> folder and preview or save it here.
      </p>

      <div className="card space-y-3">
        <label className="flex flex-col items-center justify-center border-2 border-dashed border-brand-300 rounded-xl py-8 cursor-pointer hover:bg-brand-50">
          <Upload size={28} className="text-brand-500" />
          <span className="mt-2 text-sm font-medium text-gray-700">
            {file ? file.name : 'Tap to select status file'}
          </span>
          <input type="file" accept="video/*,image/*" className="hidden" onChange={handleFile} />
        </label>
      </div>

      {error && <div className="card border-red-200 text-red-600 text-sm">{error}</div>}

      {fileUrl && file && (
        <div className="card space-y-3">
          {file.type.startsWith('video') ? (
            <video src={fileUrl} controls className="rounded-xl w-full" />
          ) : (
            <img src={fileUrl} alt="status" className="rounded-xl w-full" />
          )}
          <a href={fileUrl} download={file.name}
             className="btn-brand w-full flex items-center justify-center gap-2">
            <Download size={18} /> Save to device
          </a>
        </div>
      )}
    </div>
  );
}