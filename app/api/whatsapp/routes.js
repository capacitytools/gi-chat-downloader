export const runtime = 'edge';
export async function GET() {
  return Response.json({
    success: false,
    error: 'WhatsApp Status downloader requires file upload. Coming soon.',
  }, { status: 501 });
}