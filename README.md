# jwt

> a simple instance for jwt.

<p align="center">
    <a href="https://travis-ci.org/hua1995116/jwt"><img src="https://travis-ci.org/hua1995116/jwt.svg?branch=master" /></a>
    <a href="https://codecov.io/gh/hua1995116/jwt"><img src="https://codecov.io/gh/hua1995116/jwt/branch/master/graph/badge.svg" /></a>
    <a href="https://npmcharts.com/compare/jwt-plus?minimal=true" rel="nofollow"><img src="https://img.shields.io/npm/dm/jwt-plus.svg" style="max-width:100%;"></a>
    <a href="https://www.npmjs.com/package/jwt-plus" rel="nofollow"><img src="https://img.shields.io/npm/v/jwt-plus.svg" style="max-width:100%;"></a>
    <a href="https://www.npmjs.com/package/jwt-plus" rel="nofollow"><img src="https://img.shields.io/npm/l/jwt-plus.svg?style=flat" style="max-width:100%;"></a>
</p>

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


# reference

https://guseyn.com/posts/simple-jwt?v=1.0.85
https://azimi.me/2016/09/30/nyc-mocha-typescript.1.html

# License

MIT

Copyright (c) 2019 蓝色的秋风