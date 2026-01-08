import handler from '@/pages/api/contact';

// Minimal mock objects for Next.js API route
function makeReq(body: any) {
  return {
    method: 'POST',
    headers: {},
    body,
    socket: { remoteAddress: '127.0.0.1' }
  } as any;
}

function makeRes() {
  const res: any = {};
  res.status = (code: number) => {
    res.statusCode = code;
    return res;
  };
  res.json = (payload: any) => {
    res.payload = payload;
    return res;
  };
  return res;
}

describe('Contact API handler', () => {
  beforeAll(() => {
    process.env.BREVO_API_KEY = 'test-key';
    process.env.CONTACT_TO_EMAIL = 'care@coloradocareassist.com';
    process.env.CONTACT_FROM_EMAIL = 'noreply@coloradocareassist.com';
  });

  test('rejects invalid method', async () => {
    const req: any = { method: 'GET' };
    const res: any = makeRes();
    await handler(req, res);
    expect(res.statusCode).toBe(405);
    expect(res.payload).toHaveProperty('error');
  });

  test('returns 400 for invalid payload', async () => {
    const req = makeReq({ name: 'A', email: 'bad', phone: '123', location: 'D', care_needs: 'no', timeframe: '', preferred_contact_method: '' });
    const res = makeRes();
    await handler(req, res);
    expect(res.statusCode).toBe(400);
    expect(res.payload).toHaveProperty('error');
  });
});
