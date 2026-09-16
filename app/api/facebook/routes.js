export const runtime = 'edge';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get('url');
  if (!url) {
    return Response.json({ success: false, error: 'Missing url' }, { status: 400 });
  }

  try {
    // Normalize the URL — resolve share/redirect links
    let targetUrl = url;

    // If it's a share short link, fetch it first to get the real URL
    if (url.includes('/share/') || url.includes('fb.watch')) {
      try {
        const headRes = await fetch(url, {
          redirect: 'follow',
          headers: {
            'User-Agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36',
          },
        });
        targetUrl = headRes.url || url;
      } catch {
        // If redirect resolution fails, continue with original
      }
    }

    // Try mobile version for lighter HTML
    const mobile = targetUrl
      .replace('www.facebook.com', 'm.facebook.com')
      .replace('web.facebook.com', 'm.facebook.com');

    const html = await fetch(mobile, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Linux; Android 13) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Mobile Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9',
      },
    }).then((r) => r.text());

    // Look for HD and SD video URLs
    const hdMatch = html.match(/"playable_url_quality_hd":"([^"]+)"/);
    const sdMatch = html.match(/"playable_url":"([^"]+)"/);

    const decode = (s) => {
      try {
        return JSON.parse(`"${s}"`);
      } catch {
        return s;
      }
    };

    const links = [];
    if (hdMatch) links.push({ label: 'Video HD', url: decode(hdMatch[1]) });
    if (sdMatch) links.push({ label: 'Video SD', url: decode(sdMatch[1]) });

    if (!links.length) {
      return Response.json(
        {
          success: false,
          error:
            'No downloadable video found. The post may be private, login-protected, or a photo/text post.',
        },
        { status: 200 }
      );
    }

    // Extract thumbnail + title
    const thumbMatch = html.match(
      /"preferred_thumbnail":\{"image":\{"uri":"([^"]+)"/
    );
    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/);

    return Response.json({
      success: true,
      title: titleMatch ? titleMatch[1] : 'Facebook video',
      thumbnail: thumbMatch ? decode(thumbMatch[1]) : null,
      links,
    });
  } catch (e) {
    return Response.json(
      { success: false, error: e.message || 'Extraction failed' },
      { status: 200 }
    );
  }
}