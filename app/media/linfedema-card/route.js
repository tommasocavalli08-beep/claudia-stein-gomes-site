import c1 from '@/lib/linfedema-chunk-1';
import c2 from '@/lib/linfedema-chunk-2';
import c3 from '@/lib/linfedema-chunk-3';
import c4 from '@/lib/linfedema-chunk-4';

export const runtime = 'nodejs';

export async function GET() {
  const bytes = Buffer.from(c1 + c2 + c3 + c4, 'base64');
  return new Response(bytes, {
    headers: {
      'Content-Type': 'image/jpeg',
      'Content-Length': String(bytes.length),
      'Cache-Control': 'public, max-age=31536000, immutable'
    }
  });
}
