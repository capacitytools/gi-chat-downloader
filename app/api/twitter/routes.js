export const runtime = 'edge';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get('url');
  if (!url) return Response.json({ success: false, error: 'Missing url' }, { status: 400 });

  try {
    const m = url.match(/status\/(\d+)/);
    if (!m) throw new Error('Invalid tweet URL');
    const id = m[1];

    const r = await fetch(`https://api.vxtwitter.com/Twitter/status/${id}`);
    const j = await r.json();

    const links = [];
    if (j.mediaURLs?.length) {
      j.mediaURLs.forEach((u, i) => links.push({ label: `Video ${i + 1} (MP4)`, url: u }));
    }
    if (!links.length) throw new Error('No video found in this tweet');

    return Response.json({
      success: true,
      title: j.text?.slice(0, 100) || 'Tweet video',
      thumbnail: j.mediaURLs?.[0],
      links,
    });
  } catch (e) {
    return Response.json({ success: false, error: e.message }, { status: 500 });
  }
}