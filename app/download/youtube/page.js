import DownloaderShell from '@/components/DownloaderShell';
export const metadata = { title: 'YouTube Downloader — G1-Chat' };

export default function Page() {
  return (
    <DownloaderShell
      title="YouTube Downloader"
      hint="Paste a YouTube link. Get MP4 or MP3 download links."
      placeholder="https://www.youtube.com/watch?v=..."
      endpoint="/api/youtube"
    />
  );
}