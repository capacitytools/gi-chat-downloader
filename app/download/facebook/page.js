import DownloaderShell from '@/components/DownloaderShell';
export const metadata = { title: 'Facebook Downloader — G1-Chat' };

export default function Page() {
  return (
    <DownloaderShell
      title="Facebook Downloader"
      hint="Paste a Facebook video or Reel link (public videos only)."
      placeholder="https://www.facebook.com/watch?v=..."
      endpoint="/api/facebook"
    />
  );
}