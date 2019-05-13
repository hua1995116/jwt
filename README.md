# jwt

> a simple instance for jwt.


# Install
```shell
npm install jwt-plus
```


# Usage
```javascript
import {encode, decode} from 'jwt-plus'
const payload = {k: 1};
const token = encode(payload, secret);
const [isPass, parseValue] = decode(token, secret);
// [true, {k: 1, exp: XXX}]

```

# Interface

## Functions

<dl>
<dt><a href="#encode">encode(payload, secret, [options])</a> ⇒ <code>string</code></dt>
<dd><p>jwt encode payload</p>
</dd>
<dt><a href="#decode">decode(token, secret)</a> ⇒ <code>Array</code></dt>
<dd><p>jwt decode token</p>
</dd>
</dl>

<a name="encode"></a>

## encode(payload, secret, [options]) ⇒ <code>string</code>
jwt encode payload

**Kind**: global function  
**Export**:   

| Param | Type |
| --- | --- |
| payload | <code>\*</code> | 
| secret | <code>string</code> | 
| [options] | <code>Object</code> | 

<a name="decode"></a>

## decode(token, secret) ⇒ <code>Array</code>
jwt decode token

**Kind**: global function  
**Returns**: <code>Array</code> - [Boolean, any]  
**Export**:   

| Param | Type |
| --- | --- |
| token | <code>string</code> | 
| secret | <code>string</code> | 


# License

MIT

Copyright (c) 2019 蓝色的秋风