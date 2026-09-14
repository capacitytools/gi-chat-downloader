export const runtime = 'edge';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get('url');
  if (!url) return Response.json({ success: false, error: 'Missing url' }, { status: 400 });

  try {
    // Convert to mobile for lighter HTML
    const mobile = url.replace('www.facebook.com', 'm.facebook.com');
    const html = await fetch(mobile, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Linux; Android 10)' },
    }).then(r => r.text());

    // Look for HD and SD source URLs
    const hd = html.match(/"playable_url_quality_hd":"([^"]+)"/)?.[1];
    const sd = html.match(/"playable_url":"([^"]+)"/)?.[1];

    const links = [];
    if (hd) links.push({ label: 'Video HD', url: JSON.parse(`"${hd}"`) });
    if (sd) links.push({ label: 'Video SD', url: JSON.parse(`"${sd}"`) });

    if (!links.length) throw new Error('No downloadable video found (private or unsupported)');

    const thumb = html.match(/"preferred_thumbnail":\{"image":\{"uri":"([^"]+)"/)?.[1];
    const title = html.match(/<title[^>]*>([^<]+)<\/title>/)?.[1];

    return Response.json({
      success: true,
      title: title || 'Facebook video',
      thumbnail: thumb ? JSON.parse(`"${thumb}"`) : null,
      links,
    });
  } catch (e) {
    return Response.json({ success: false, error: e.message }, { status: 500 });
  }
}