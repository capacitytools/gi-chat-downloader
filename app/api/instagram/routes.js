export const runtime = 'edge';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get('url');
  if (!url) return Response.json({ success: false, error: 'Missing url' }, { status: 400 });

  try {
    // Instagram's public embed JSON endpoint
    const clean = url.split('?')[0].replace(/\/$/, '');
    const embedUrl = `${clean}/embed/captioned/`;
    const html = await fetch(embedUrl, {
      headers: { 'User-Agent': 'Mozilla/5.0' },
    }).then(r => r.text());

    const videoMatch = html.match(/"video_url":"([^"]+)"/);
    const imgMatch = html.match(/"display_url":"([^"]+)"/);

    if (!videoMatch) throw new Error('No video found (private or photo post)');

    const decode = (s) => s.replace(/\\u0026/g, '&').replace(/\\\//g, '/');

    return Response.json({
      success: true,
      title: 'Instagram video',
      thumbnail: imgMatch ? decode(imgMatch[1]) : null,
      links: [{ label: 'Video (MP4)', url: decode(videoMatch[1]) }],
    });
  } catch (e) {
    return Response.json({ success: false, error: e.message }, { status: 500 });
  }
}