export const metadata = { title: 'Blog — G1-Chat' };

export default function BlogPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-gray-800">G1-Chat Blog</h1>
      <p className="text-sm text-gray-500">
        Tutorials and guides coming soon.
      </p>
      <div className="card">
        <p className="font-semibold text-gray-800">How to download TikTok without watermark</p>
        <p className="text-xs text-gray-400 mt-1">Coming soon</p>
      </div>
      <div className="card">
        <p className="font-semibold text-gray-800">Best way to save YouTube videos on Android</p>
        <p className="text-xs text-gray-400 mt-1">Coming soon</p>
      </div>
    </div>
  );
}