export const runtime = 'edge';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get('url');
  if (!url) return Response.json({ success: false, error: 'Missing url' }, { status: 400 });

  try {
    const api = `https://www.tikwm.com/api/?url=${encodeURIComponent(url)}&hd=1`;
    const r = await fetch(api);
    const j = await r.json();
    if (j.code !== 0) throw new Error(j.msg || 'TikTok extraction failed');

    const d = j.data;
    const links = [
      { label: 'Video (No Watermark, HD)', url: d.hdplay },
      { label: 'Video (SD)', url: d.play },
      { label: 'Audio (MP3)', url: d.music },
    ].filter(x => x.url);

    return Response.json({
      success: true,
      title: d.title,
      thumbnail: d.cover,
      links,
    });
  } catch (e) {
    return Response.json({ success: false, error: e.message }, { status: 500 });
  }
}