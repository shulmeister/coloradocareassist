import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '@/lib/session';
import { NextApiRequest, NextApiResponse } from 'next';

export default withIronSessionApiRoute(loginRoute, sessionOptions);

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
  const { password } = await req.body;

  if (password === process.env.ADMIN_PASSWORD) {
    req.session.user = {
      id: 1,
      admin: true,
    };
    await req.session.save();
    res.json({ isLoggedIn: true });
  } else {
    res.status(401).json({ message: 'Invalid password' });
  }
}
