import * as SentryNode from '@sentry/node';

const dsn = process.env.SENTRY_DSN || '';

if (dsn) {
  SentryNode.init({
    dsn,
    environment: process.env.NODE_ENV || 'development',
  });
}

export function captureException(err: any) {
  try {
    if (dsn) {
      SentryNode.captureException(err);
    }
  } catch (e) {
    // swallow errors during error reporting
    // console.log intentionally kept minimal
    console.error('Sentry capture failed', (e as any)?.message || e);
  }
}

export default SentryNode;
