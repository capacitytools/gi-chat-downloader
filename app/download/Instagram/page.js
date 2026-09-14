import DownloaderShell from '@/components/DownloaderShell';
export const metadata = { title: 'Instagram Downloader — G1-Chat' };

export default function Page() {
  return (
    <DownloaderShell
      title="Instagram Downloader"
      hint="Paste an Instagram Reel or post link (public content only)."
      placeholder="https://www.instagram.com/reel/..."
      endpoint="/api/instagram"
    />
  );
}