export const runtime = 'edge';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get('url');
  if (!url) return Response.json({ success: false, error: 'Missing url' }, { status: 400 });

  try {
    const r = await fetch('https://api.cobalt.tools/api/json', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ url, vQuality: '1080' }),
    });
    const j = await r.json();
    if (j.status === 'error') throw new Error(j.text || 'YouTube extraction failed');

    const links = [];
    if (j.url) links.push({ label: 'Video (MP4)', url: j.url });
    if (j.audio) links.push({ label: 'Audio (MP3)', url: j.audio });

    // YouTube thumbnail from video ID
    const vid = url.match(/(?:v=|youtu\.be\/)([\w-]{11})/)?.[1];
    const thumb = vid ? `https://i.ytimg.com/vi/${vid}/hqdefault.jpg` : null;

    return Response.json({ success: true, title: 'YouTube video', thumbnail: thumb, links });
  } catch (e) {
    return Response.json({ success: false, error: e.message }, { status: 500 });
  }
}