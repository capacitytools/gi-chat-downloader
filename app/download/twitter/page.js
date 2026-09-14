import DownloaderShell from '@/components/DownloaderShell';
export const metadata = { title: 'X (Twitter) Downloader — G1-Chat' };

export default function Page() {
  return (
    <DownloaderShell
      title="X (Twitter) Downloader"
      hint="Paste a tweet link that contains a video or GIF."
      placeholder="https://x.com/user/status/..."
      endpoint="/api/twitter"
    />
  );
}