import { expect } from 'chai';

import {encode, decode} from '../src/index';

describe('jwt', () => {
    it('can be parse', () => {
      const secret = 'jwt';
      const payload = {k: 1};
      const token = encode(payload, secret);
      const [isPass, parseValue] = decode(token, secret);
      expect(payload.k).to.equal(parseValue.k);
    });
})