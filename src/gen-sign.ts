import * as crypto from 'crypto';

function generateSignature (str: string, secret: string) {
  return crypto
      .createHmac('sha256', secret)
      .update(str)
      .digest('base64')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
}

export default generateSignature;