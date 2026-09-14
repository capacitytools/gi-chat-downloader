import DownloaderShell from '@/components/DownloaderShell';
export const metadata = { title: 'TikTok Downloader — G1-Chat' };
export default function Page() {
  return (
    <DownloaderShell
      title="TikTok Downloader"
      hint="Paste a TikTok link. We'll fetch it without watermark."
      placeholder="https://www.tiktok.com/@user/video/..."
      endpoint="/api/tiktok"
    />
  );
}