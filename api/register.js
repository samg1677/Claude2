/**
 * One-step Zoom webinar registration.
 *
 * Deploy this next to index.html (Vercel: /api/register.js, Netlify: rename the
 * export per netlify/functions), then set REGISTER_ENDPOINT = "/api/register"
 * in index.html. The on-page form then registers students directly — no second
 * form on zoom.us.
 *
 * Required environment variables (Zoom Server-to-Server OAuth app):
 *   ZOOM_ACCOUNT_ID
 *   ZOOM_CLIENT_ID
 *   ZOOM_CLIENT_SECRET
 *   ZOOM_WEBINAR_ID      numeric webinar id (e.g. 81234567890), NOT the WN_ token
 *
 * Zoom app scopes needed: webinar:write:registrant:admin
 * (classic scope name: webinar:write:admin)
 */

const ZOOM_OAUTH = 'https://zoom.us/oauth/token';
const ZOOM_API = 'https://api.zoom.us/v2';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

async function getAccessToken() {
  const { ZOOM_ACCOUNT_ID, ZOOM_CLIENT_ID, ZOOM_CLIENT_SECRET } = process.env;
  const basic = Buffer.from(`${ZOOM_CLIENT_ID}:${ZOOM_CLIENT_SECRET}`).toString('base64');

  const res = await fetch(
    `${ZOOM_OAUTH}?grant_type=account_credentials&account_id=${encodeURIComponent(ZOOM_ACCOUNT_ID)}`,
    { method: 'POST', headers: { Authorization: `Basic ${basic}` } }
  );

  if (!res.ok) {
    throw new Error(`Zoom auth failed (${res.status}): ${await res.text()}`);
  }
  return (await res.json()).access_token;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed.' });
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
  const firstName = String(body.first_name || '').trim();
  const lastName = String(body.last_name || '').trim();
  const email = String(body.email || '').trim();

  if (!firstName || !lastName || !EMAIL_RE.test(email)) {
    return res.status(400).json({ message: 'Please check your name and email address.' });
  }

  try {
    const token = await getAccessToken();

    const zoomRes = await fetch(
      `${ZOOM_API}/webinars/${encodeURIComponent(process.env.ZOOM_WEBINAR_ID)}/registrants`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email
        })
      }
    );

    const data = await zoomRes.json().catch(() => ({}));

    if (!zoomRes.ok) {
      // 3027 = registration closed, 3038 = webinar has ended
      const friendly =
        data.code === 3027 ? 'Registration for this webinar is closed.' :
        data.code === 3038 ? 'This webinar has already taken place.' :
        'We could not complete your registration.';
      console.error('Zoom registrant error', zoomRes.status, data);
      return res.status(zoomRes.status === 429 ? 429 : 502).json({ message: friendly });
    }

    // Hand off to your CRM / mailing list here if you want the extra fields:
    // await fetch(process.env.CRM_WEBHOOK_URL, { method: 'POST', body: JSON.stringify({ ...body }) });

    return res.status(200).json({
      registrant_id: data.registrant_id,
      join_url: data.join_url
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Something went wrong on our side.' });
  }
}
