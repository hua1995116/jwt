/**
 * @desc jwt encode payload
 * @export
 * @param {*} payload
 * @param {string} secret
 * @param {Object} [options]
 * @returns {string}
 */
export declare function encode(payload: any, secret: string, options?: Object): string;
/**
 * @desc jwt decode token
 * @export
 * @param {string} token
 * @param {string} secret
 * @returns {Array} [Boolean, any]
 */
export declare function decode(token: string, secret: string): [Boolean, any];
