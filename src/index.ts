import { base64UrlEncodeJSON, base64UrlDecodeToJSON, payloadWithExpirationTime } from "./helper";
import generateSignature from "./gen-sign";

/**
 * @desc jwt encode payload
 * @export
 * @param {*} payload
 * @param {string} secret
 * @param {Object} [options]
 * @returns {string}
 */
export function encode(payload: any, secret: string, options?: Object): string {

  const header = {
    alg: "HS256",
    typ: "JWT"
  };
  const encodedHeaderInBase64 = base64UrlEncodeJSON(header);
  const newPayload = payloadWithExpirationTime(payload, 12 * 60 * 1000);
  const encodedPayloadInBase64 = base64UrlEncodeJSON(newPayload);
  const encodedSignatureInBase64 = generateSignature(
    `${encodedHeaderInBase64}.${encodedPayloadInBase64}`,
    secret
  );
  const token = `${encodedHeaderInBase64}.${encodedPayloadInBase64}.${encodedSignatureInBase64}`;
  return token;
}

/**
 * @desc jwt decode token
 * @export
 * @param {string} token
 * @param {string} secret
 * @returns {Array} [Boolean, any]
 */
export function decode(token: string, secret: string): [Boolean, any] {
  const parts = token.split('.')
  const header = base64UrlDecodeToJSON(parts[0])
  const payload = base64UrlDecodeToJSON(parts[1])
  if (header.alg !== 'HS256' || header.typ !== 'JWT') {
    return [false, {}]
  }
  const signature = parts[2]
  const exp = payload.exp
  if (exp) {
    if (exp < new Date().getTime()) {
      return [false, {}]
    }
  }
  return [generateSignature(`${parts[0]}.${parts[1]}`, secret) === signature, payload];
}
