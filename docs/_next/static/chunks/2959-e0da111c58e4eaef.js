(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2959],
  {
    4216: (e) => {
      !(function () {
        var t = {
            675: function (e, t) {
              'use strict';
              (t.byteLength = function (e) {
                var t = l(e),
                  n = t[0],
                  r = t[1];
                return ((n + r) * 3) / 4 - r;
              }),
                (t.toByteArray = function (e) {
                  var t,
                    n,
                    o = l(e),
                    a = o[0],
                    s = o[1],
                    u = new i(((a + s) * 3) / 4 - s),
                    c = 0,
                    h = s > 0 ? a - 4 : a;
                  for (n = 0; n < h; n += 4)
                    (t =
                      (r[e.charCodeAt(n)] << 18) |
                      (r[e.charCodeAt(n + 1)] << 12) |
                      (r[e.charCodeAt(n + 2)] << 6) |
                      r[e.charCodeAt(n + 3)]),
                      (u[c++] = (t >> 16) & 255),
                      (u[c++] = (t >> 8) & 255),
                      (u[c++] = 255 & t);
                  return (
                    2 === s && ((t = (r[e.charCodeAt(n)] << 2) | (r[e.charCodeAt(n + 1)] >> 4)), (u[c++] = 255 & t)),
                    1 === s &&
                      ((t = (r[e.charCodeAt(n)] << 10) | (r[e.charCodeAt(n + 1)] << 4) | (r[e.charCodeAt(n + 2)] >> 2)),
                      (u[c++] = (t >> 8) & 255),
                      (u[c++] = 255 & t)),
                    u
                  );
                }),
                (t.fromByteArray = function (e) {
                  for (var t, r = e.length, i = r % 3, o = [], a = 0, s = r - i; a < s; a += 16383)
                    o.push(
                      (function (e, t, r) {
                        for (var i, o = [], a = t; a < r; a += 3)
                          (i = ((e[a] << 16) & 0xff0000) + ((e[a + 1] << 8) & 65280) + (255 & e[a + 2])),
                            o.push(n[(i >> 18) & 63] + n[(i >> 12) & 63] + n[(i >> 6) & 63] + n[63 & i]);
                        return o.join('');
                      })(e, a, a + 16383 > s ? s : a + 16383)
                    );
                  return (
                    1 === i
                      ? o.push(n[(t = e[r - 1]) >> 2] + n[(t << 4) & 63] + '==')
                      : 2 === i &&
                        o.push(n[(t = (e[r - 2] << 8) + e[r - 1]) >> 10] + n[(t >> 4) & 63] + n[(t << 2) & 63] + '='),
                    o.join('')
                  );
                });
              for (
                var n = [],
                  r = [],
                  i = 'undefined' != typeof Uint8Array ? Uint8Array : Array,
                  o = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
                  a = 0,
                  s = o.length;
                a < s;
                ++a
              )
                (n[a] = o[a]), (r[o.charCodeAt(a)] = a);
              function l(e) {
                var t = e.length;
                if (t % 4 > 0) throw Error('Invalid string. Length must be a multiple of 4');
                var n = e.indexOf('=');
                -1 === n && (n = t);
                var r = n === t ? 0 : 4 - (n % 4);
                return [n, r];
              }
              (r[45] = 62), (r[95] = 63);
            },
            72: function (e, t, n) {
              'use strict';
              var r = n(675),
                i = n(783),
                o =
                  'function' == typeof Symbol && 'function' == typeof Symbol.for
                    ? Symbol.for('nodejs.util.inspect.custom')
                    : null;
              function a(e) {
                if (e > 0x7fffffff) throw RangeError('The value "' + e + '" is invalid for option "size"');
                var t = new Uint8Array(e);
                return Object.setPrototypeOf(t, s.prototype), t;
              }
              function s(e, t, n) {
                if ('number' == typeof e) {
                  if ('string' == typeof t)
                    throw TypeError('The "string" argument must be of type string. Received type number');
                  return c(e);
                }
                return l(e, t, n);
              }
              function l(e, t, n) {
                if ('string' == typeof e) {
                  var r = e,
                    i = t;
                  if ((('string' != typeof i || '' === i) && (i = 'utf8'), !s.isEncoding(i)))
                    throw TypeError('Unknown encoding: ' + i);
                  var o = 0 | d(r, i),
                    l = a(o),
                    u = l.write(r, i);
                  return u !== o && (l = l.slice(0, u)), l;
                }
                if (ArrayBuffer.isView(e)) return h(e);
                if (null == e)
                  throw TypeError(
                    'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
                      typeof e
                  );
                if (
                  x(e, ArrayBuffer) ||
                  (e && x(e.buffer, ArrayBuffer)) ||
                  ('undefined' != typeof SharedArrayBuffer &&
                    (x(e, SharedArrayBuffer) || (e && x(e.buffer, SharedArrayBuffer))))
                )
                  return (function (e, t, n) {
                    var r;
                    if (t < 0 || e.byteLength < t) throw RangeError('"offset" is outside of buffer bounds');
                    if (e.byteLength < t + (n || 0)) throw RangeError('"length" is outside of buffer bounds');
                    return (
                      Object.setPrototypeOf(
                        (r =
                          void 0 === t && void 0 === n
                            ? new Uint8Array(e)
                            : void 0 === n
                              ? new Uint8Array(e, t)
                              : new Uint8Array(e, t, n)),
                        s.prototype
                      ),
                      r
                    );
                  })(e, t, n);
                if ('number' == typeof e)
                  throw TypeError('The "value" argument must not be of type number. Received type number');
                var c = e.valueOf && e.valueOf();
                if (null != c && c !== e) return s.from(c, t, n);
                var m = (function (e) {
                  if (s.isBuffer(e)) {
                    var t = 0 | p(e.length),
                      n = a(t);
                    return 0 === n.length || e.copy(n, 0, 0, t), n;
                  }
                  return void 0 !== e.length
                    ? 'number' != typeof e.length ||
                      (function (e) {
                        return e != e;
                      })(e.length)
                      ? a(0)
                      : h(e)
                    : 'Buffer' === e.type && Array.isArray(e.data)
                      ? h(e.data)
                      : void 0;
                })(e);
                if (m) return m;
                if (
                  'undefined' != typeof Symbol &&
                  null != Symbol.toPrimitive &&
                  'function' == typeof e[Symbol.toPrimitive]
                )
                  return s.from(e[Symbol.toPrimitive]('string'), t, n);
                throw TypeError(
                  'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
                    typeof e
                );
              }
              function u(e) {
                if ('number' != typeof e) throw TypeError('"size" argument must be of type number');
                if (e < 0) throw RangeError('The value "' + e + '" is invalid for option "size"');
              }
              function c(e) {
                return u(e), a(e < 0 ? 0 : 0 | p(e));
              }
              function h(e) {
                for (var t = e.length < 0 ? 0 : 0 | p(e.length), n = a(t), r = 0; r < t; r += 1) n[r] = 255 & e[r];
                return n;
              }
              (t.Buffer = s),
                (t.SlowBuffer = function (e) {
                  return +e != e && (e = 0), s.alloc(+e);
                }),
                (t.INSPECT_MAX_BYTES = 50),
                (t.kMaxLength = 0x7fffffff),
                (s.TYPED_ARRAY_SUPPORT = (function () {
                  try {
                    var e = new Uint8Array(1),
                      t = {
                        foo: function () {
                          return 42;
                        },
                      };
                    return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), 42 === e.foo();
                  } catch (e) {
                    return !1;
                  }
                })()),
                s.TYPED_ARRAY_SUPPORT ||
                  'undefined' == typeof console ||
                  'function' != typeof console.error ||
                  console.error(
                    'This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
                  ),
                Object.defineProperty(s.prototype, 'parent', {
                  enumerable: !0,
                  get: function () {
                    if (s.isBuffer(this)) return this.buffer;
                  },
                }),
                Object.defineProperty(s.prototype, 'offset', {
                  enumerable: !0,
                  get: function () {
                    if (s.isBuffer(this)) return this.byteOffset;
                  },
                }),
                (s.poolSize = 8192),
                (s.from = function (e, t, n) {
                  return l(e, t, n);
                }),
                Object.setPrototypeOf(s.prototype, Uint8Array.prototype),
                Object.setPrototypeOf(s, Uint8Array),
                (s.alloc = function (e, t, n) {
                  return (u(e), e <= 0)
                    ? a(e)
                    : void 0 !== t
                      ? 'string' == typeof n
                        ? a(e).fill(t, n)
                        : a(e).fill(t)
                      : a(e);
                }),
                (s.allocUnsafe = function (e) {
                  return c(e);
                }),
                (s.allocUnsafeSlow = function (e) {
                  return c(e);
                });
              function p(e) {
                if (e >= 0x7fffffff)
                  throw RangeError('Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes');
                return 0 | e;
              }
              function d(e, t) {
                if (s.isBuffer(e)) return e.length;
                if (ArrayBuffer.isView(e) || x(e, ArrayBuffer)) return e.byteLength;
                if ('string' != typeof e)
                  throw TypeError(
                    'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
                      typeof e
                  );
                var n = e.length,
                  r = arguments.length > 2 && !0 === arguments[2];
                if (!r && 0 === n) return 0;
                for (var i = !1; ; )
                  switch (t) {
                    case 'ascii':
                    case 'latin1':
                    case 'binary':
                      return n;
                    case 'utf8':
                    case 'utf-8':
                      return A(e).length;
                    case 'ucs2':
                    case 'ucs-2':
                    case 'utf16le':
                    case 'utf-16le':
                      return 2 * n;
                    case 'hex':
                      return n >>> 1;
                    case 'base64':
                      return N(e).length;
                    default:
                      if (i) return r ? -1 : A(e).length;
                      (t = ('' + t).toLowerCase()), (i = !0);
                  }
              }
              function m(e, t, n) {
                var i,
                  o,
                  a,
                  s = !1;
                if (
                  ((void 0 === t || t < 0) && (t = 0),
                  t > this.length ||
                    ((void 0 === n || n > this.length) && (n = this.length), n <= 0 || (n >>>= 0) <= (t >>>= 0)))
                )
                  return '';
                for (e || (e = 'utf8'); ; )
                  switch (e) {
                    case 'hex':
                      return (function (e, t, n) {
                        var r = e.length;
                        (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
                        for (var i = '', o = t; o < n; ++o) i += P[e[o]];
                        return i;
                      })(this, t, n);
                    case 'utf8':
                    case 'utf-8':
                      return b(this, t, n);
                    case 'ascii':
                      return (function (e, t, n) {
                        var r = '';
                        n = Math.min(e.length, n);
                        for (var i = t; i < n; ++i) r += String.fromCharCode(127 & e[i]);
                        return r;
                      })(this, t, n);
                    case 'latin1':
                    case 'binary':
                      return (function (e, t, n) {
                        var r = '';
                        n = Math.min(e.length, n);
                        for (var i = t; i < n; ++i) r += String.fromCharCode(e[i]);
                        return r;
                      })(this, t, n);
                    case 'base64':
                      return (
                        (i = this),
                        (o = t),
                        (a = n),
                        0 === o && a === i.length ? r.fromByteArray(i) : r.fromByteArray(i.slice(o, a))
                      );
                    case 'ucs2':
                    case 'ucs-2':
                    case 'utf16le':
                    case 'utf-16le':
                      return (function (e, t, n) {
                        for (var r = e.slice(t, n), i = '', o = 0; o < r.length; o += 2)
                          i += String.fromCharCode(r[o] + 256 * r[o + 1]);
                        return i;
                      })(this, t, n);
                    default:
                      if (s) throw TypeError('Unknown encoding: ' + e);
                      (e = (e + '').toLowerCase()), (s = !0);
                  }
              }
              function f(e, t, n) {
                var r = e[t];
                (e[t] = e[n]), (e[n] = r);
              }
              function g(e, t, n, r, i) {
                var o;
                if (0 === e.length) return -1;
                if (
                  ('string' == typeof n
                    ? ((r = n), (n = 0))
                    : n > 0x7fffffff
                      ? (n = 0x7fffffff)
                      : n < -0x80000000 && (n = -0x80000000),
                  (o = n *= 1) != o && (n = i ? 0 : e.length - 1),
                  n < 0 && (n = e.length + n),
                  n >= e.length)
                )
                  if (i) return -1;
                  else n = e.length - 1;
                else if (n < 0)
                  if (!i) return -1;
                  else n = 0;
                if (('string' == typeof t && (t = s.from(t, r)), s.isBuffer(t)))
                  return 0 === t.length ? -1 : y(e, t, n, r, i);
                if ('number' == typeof t) {
                  if (((t &= 255), 'function' == typeof Uint8Array.prototype.indexOf))
                    if (i) return Uint8Array.prototype.indexOf.call(e, t, n);
                    else return Uint8Array.prototype.lastIndexOf.call(e, t, n);
                  return y(e, [t], n, r, i);
                }
                throw TypeError('val must be string, number or Buffer');
              }
              function y(e, t, n, r, i) {
                var o,
                  a = 1,
                  s = e.length,
                  l = t.length;
                if (
                  void 0 !== r &&
                  ('ucs2' === (r = String(r).toLowerCase()) || 'ucs-2' === r || 'utf16le' === r || 'utf-16le' === r)
                ) {
                  if (e.length < 2 || t.length < 2) return -1;
                  (a = 2), (s /= 2), (l /= 2), (n /= 2);
                }
                function u(e, t) {
                  return 1 === a ? e[t] : e.readUInt16BE(t * a);
                }
                if (i) {
                  var c = -1;
                  for (o = n; o < s; o++)
                    if (u(e, o) === u(t, -1 === c ? 0 : o - c)) {
                      if ((-1 === c && (c = o), o - c + 1 === l)) return c * a;
                    } else -1 !== c && (o -= o - c), (c = -1);
                } else
                  for (n + l > s && (n = s - l), o = n; o >= 0; o--) {
                    for (var h = !0, p = 0; p < l; p++)
                      if (u(e, o + p) !== u(t, p)) {
                        h = !1;
                        break;
                      }
                    if (h) return o;
                  }
                return -1;
              }
              (s.isBuffer = function (e) {
                return null != e && !0 === e._isBuffer && e !== s.prototype;
              }),
                (s.compare = function (e, t) {
                  if (
                    (x(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)),
                    x(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)),
                    !s.isBuffer(e) || !s.isBuffer(t))
                  )
                    throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                  if (e === t) return 0;
                  for (var n = e.length, r = t.length, i = 0, o = Math.min(n, r); i < o; ++i)
                    if (e[i] !== t[i]) {
                      (n = e[i]), (r = t[i]);
                      break;
                    }
                  return n < r ? -1 : +(r < n);
                }),
                (s.isEncoding = function (e) {
                  switch (String(e).toLowerCase()) {
                    case 'hex':
                    case 'utf8':
                    case 'utf-8':
                    case 'ascii':
                    case 'latin1':
                    case 'binary':
                    case 'base64':
                    case 'ucs2':
                    case 'ucs-2':
                    case 'utf16le':
                    case 'utf-16le':
                      return !0;
                    default:
                      return !1;
                  }
                }),
                (s.concat = function (e, t) {
                  if (!Array.isArray(e)) throw TypeError('"list" argument must be an Array of Buffers');
                  if (0 === e.length) return s.alloc(0);
                  if (void 0 === t) for (n = 0, t = 0; n < e.length; ++n) t += e[n].length;
                  var n,
                    r = s.allocUnsafe(t),
                    i = 0;
                  for (n = 0; n < e.length; ++n) {
                    var o = e[n];
                    if ((x(o, Uint8Array) && (o = s.from(o)), !s.isBuffer(o)))
                      throw TypeError('"list" argument must be an Array of Buffers');
                    o.copy(r, i), (i += o.length);
                  }
                  return r;
                }),
                (s.byteLength = d),
                (s.prototype._isBuffer = !0),
                (s.prototype.swap16 = function () {
                  var e = this.length;
                  if (e % 2 != 0) throw RangeError('Buffer size must be a multiple of 16-bits');
                  for (var t = 0; t < e; t += 2) f(this, t, t + 1);
                  return this;
                }),
                (s.prototype.swap32 = function () {
                  var e = this.length;
                  if (e % 4 != 0) throw RangeError('Buffer size must be a multiple of 32-bits');
                  for (var t = 0; t < e; t += 4) f(this, t, t + 3), f(this, t + 1, t + 2);
                  return this;
                }),
                (s.prototype.swap64 = function () {
                  var e = this.length;
                  if (e % 8 != 0) throw RangeError('Buffer size must be a multiple of 64-bits');
                  for (var t = 0; t < e; t += 8)
                    f(this, t, t + 7), f(this, t + 1, t + 6), f(this, t + 2, t + 5), f(this, t + 3, t + 4);
                  return this;
                }),
                (s.prototype.toString = function () {
                  var e = this.length;
                  return 0 === e ? '' : 0 == arguments.length ? b(this, 0, e) : m.apply(this, arguments);
                }),
                (s.prototype.toLocaleString = s.prototype.toString),
                (s.prototype.equals = function (e) {
                  if (!s.isBuffer(e)) throw TypeError('Argument must be a Buffer');
                  return this === e || 0 === s.compare(this, e);
                }),
                (s.prototype.inspect = function () {
                  var e = '',
                    n = t.INSPECT_MAX_BYTES;
                  return (
                    (e = this.toString('hex', 0, n)
                      .replace(/(.{2})/g, '$1 ')
                      .trim()),
                    this.length > n && (e += ' ... '),
                    '<Buffer ' + e + '>'
                  );
                }),
                o && (s.prototype[o] = s.prototype.inspect),
                (s.prototype.compare = function (e, t, n, r, i) {
                  if ((x(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), !s.isBuffer(e)))
                    throw TypeError(
                      'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e
                    );
                  if (
                    (void 0 === t && (t = 0),
                    void 0 === n && (n = e ? e.length : 0),
                    void 0 === r && (r = 0),
                    void 0 === i && (i = this.length),
                    t < 0 || n > e.length || r < 0 || i > this.length)
                  )
                    throw RangeError('out of range index');
                  if (r >= i && t >= n) return 0;
                  if (r >= i) return -1;
                  if (t >= n) return 1;
                  if (((t >>>= 0), (n >>>= 0), (r >>>= 0), (i >>>= 0), this === e)) return 0;
                  for (
                    var o = i - r, a = n - t, l = Math.min(o, a), u = this.slice(r, i), c = e.slice(t, n), h = 0;
                    h < l;
                    ++h
                  )
                    if (u[h] !== c[h]) {
                      (o = u[h]), (a = c[h]);
                      break;
                    }
                  return o < a ? -1 : +(a < o);
                }),
                (s.prototype.includes = function (e, t, n) {
                  return -1 !== this.indexOf(e, t, n);
                }),
                (s.prototype.indexOf = function (e, t, n) {
                  return g(this, e, t, n, !0);
                }),
                (s.prototype.lastIndexOf = function (e, t, n) {
                  return g(this, e, t, n, !1);
                });
              function b(e, t, n) {
                n = Math.min(e.length, n);
                for (var r = [], i = t; i < n; ) {
                  var o,
                    a,
                    s,
                    l,
                    u = e[i],
                    c = null,
                    h = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
                  if (i + h <= n)
                    switch (h) {
                      case 1:
                        u < 128 && (c = u);
                        break;
                      case 2:
                        (192 & (o = e[i + 1])) == 128 && (l = ((31 & u) << 6) | (63 & o)) > 127 && (c = l);
                        break;
                      case 3:
                        (o = e[i + 1]),
                          (a = e[i + 2]),
                          (192 & o) == 128 &&
                            (192 & a) == 128 &&
                            (l = ((15 & u) << 12) | ((63 & o) << 6) | (63 & a)) > 2047 &&
                            (l < 55296 || l > 57343) &&
                            (c = l);
                        break;
                      case 4:
                        (o = e[i + 1]),
                          (a = e[i + 2]),
                          (s = e[i + 3]),
                          (192 & o) == 128 &&
                            (192 & a) == 128 &&
                            (192 & s) == 128 &&
                            (l = ((15 & u) << 18) | ((63 & o) << 12) | ((63 & a) << 6) | (63 & s)) > 65535 &&
                            l < 1114112 &&
                            (c = l);
                    }
                  null === c
                    ? ((c = 65533), (h = 1))
                    : c > 65535 && ((c -= 65536), r.push(((c >>> 10) & 1023) | 55296), (c = 56320 | (1023 & c))),
                    r.push(c),
                    (i += h);
                }
                var p = r,
                  d = p.length;
                if (d <= 4096) return String.fromCharCode.apply(String, p);
                for (var m = '', f = 0; f < d; ) m += String.fromCharCode.apply(String, p.slice(f, (f += 4096)));
                return m;
              }
              function _(e, t, n) {
                if (e % 1 != 0 || e < 0) throw RangeError('offset is not uint');
                if (e + t > n) throw RangeError('Trying to access beyond buffer length');
              }
              function v(e, t, n, r, i, o) {
                if (!s.isBuffer(e)) throw TypeError('"buffer" argument must be a Buffer instance');
                if (t > i || t < o) throw RangeError('"value" argument is out of bounds');
                if (n + r > e.length) throw RangeError('Index out of range');
              }
              function S(e, t, n, r, i, o) {
                if (n + r > e.length || n < 0) throw RangeError('Index out of range');
              }
              function k(e, t, n, r, o) {
                return (
                  (t *= 1),
                  (n >>>= 0),
                  o || S(e, t, n, 4, 34028234663852886e22, -34028234663852886e22),
                  i.write(e, t, n, r, 23, 4),
                  n + 4
                );
              }
              function w(e, t, n, r, o) {
                return (
                  (t *= 1),
                  (n >>>= 0),
                  o || S(e, t, n, 8, 17976931348623157e292, -17976931348623157e292),
                  i.write(e, t, n, r, 52, 8),
                  n + 8
                );
              }
              (s.prototype.write = function (e, t, n, r) {
                if (void 0 === t) (r = 'utf8'), (n = this.length), (t = 0);
                else if (void 0 === n && 'string' == typeof t) (r = t), (n = this.length), (t = 0);
                else if (isFinite(t))
                  (t >>>= 0), isFinite(n) ? ((n >>>= 0), void 0 === r && (r = 'utf8')) : ((r = n), (n = void 0));
                else throw Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
                var i,
                  o,
                  a,
                  s,
                  l,
                  u,
                  c,
                  h,
                  p = this.length - t;
                if (((void 0 === n || n > p) && (n = p), (e.length > 0 && (n < 0 || t < 0)) || t > this.length))
                  throw RangeError('Attempt to write outside buffer bounds');
                r || (r = 'utf8');
                for (var d = !1; ; )
                  switch (r) {
                    case 'hex':
                      return (function (e, t, n, r) {
                        n = Number(n) || 0;
                        var i = e.length - n;
                        r ? (r = Number(r)) > i && (r = i) : (r = i);
                        var o = t.length;
                        r > o / 2 && (r = o / 2);
                        for (var a = 0; a < r; ++a) {
                          var s,
                            l = parseInt(t.substr(2 * a, 2), 16);
                          if ((s = l) != s) break;
                          e[n + a] = l;
                        }
                        return a;
                      })(this, e, t, n);
                    case 'utf8':
                    case 'utf-8':
                      return (i = t), (o = n), E(A(e, this.length - i), this, i, o);
                    case 'ascii':
                      return (a = t), (s = n), E(T(e), this, a, s);
                    case 'latin1':
                    case 'binary':
                      return (function (e, t, n, r) {
                        return E(T(t), e, n, r);
                      })(this, e, t, n);
                    case 'base64':
                      return (l = t), (u = n), E(N(e), this, l, u);
                    case 'ucs2':
                    case 'ucs-2':
                    case 'utf16le':
                    case 'utf-16le':
                      return (
                        (c = t),
                        (h = n),
                        E(
                          (function (e, t) {
                            for (var n, r, i = [], o = 0; o < e.length && !((t -= 2) < 0); ++o)
                              (r = (n = e.charCodeAt(o)) >> 8), i.push(n % 256), i.push(r);
                            return i;
                          })(e, this.length - c),
                          this,
                          c,
                          h
                        )
                      );
                    default:
                      if (d) throw TypeError('Unknown encoding: ' + r);
                      (r = ('' + r).toLowerCase()), (d = !0);
                  }
              }),
                (s.prototype.toJSON = function () {
                  return { type: 'Buffer', data: Array.prototype.slice.call(this._arr || this, 0) };
                }),
                (s.prototype.slice = function (e, t) {
                  var n = this.length;
                  (e = ~~e),
                    (t = void 0 === t ? n : ~~t),
                    e < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n),
                    t < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n),
                    t < e && (t = e);
                  var r = this.subarray(e, t);
                  return Object.setPrototypeOf(r, s.prototype), r;
                }),
                (s.prototype.readUIntLE = function (e, t, n) {
                  (e >>>= 0), (t >>>= 0), n || _(e, t, this.length);
                  for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256); ) r += this[e + o] * i;
                  return r;
                }),
                (s.prototype.readUIntBE = function (e, t, n) {
                  (e >>>= 0), (t >>>= 0), n || _(e, t, this.length);
                  for (var r = this[e + --t], i = 1; t > 0 && (i *= 256); ) r += this[e + --t] * i;
                  return r;
                }),
                (s.prototype.readUInt8 = function (e, t) {
                  return (e >>>= 0), t || _(e, 1, this.length), this[e];
                }),
                (s.prototype.readUInt16LE = function (e, t) {
                  return (e >>>= 0), t || _(e, 2, this.length), this[e] | (this[e + 1] << 8);
                }),
                (s.prototype.readUInt16BE = function (e, t) {
                  return (e >>>= 0), t || _(e, 2, this.length), (this[e] << 8) | this[e + 1];
                }),
                (s.prototype.readUInt32LE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || _(e, 4, this.length),
                    (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) + 0x1000000 * this[e + 3]
                  );
                }),
                (s.prototype.readUInt32BE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || _(e, 4, this.length),
                    0x1000000 * this[e] + ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
                  );
                }),
                (s.prototype.readIntLE = function (e, t, n) {
                  (e >>>= 0), (t >>>= 0), n || _(e, t, this.length);
                  for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256); ) r += this[e + o] * i;
                  return r >= (i *= 128) && (r -= Math.pow(2, 8 * t)), r;
                }),
                (s.prototype.readIntBE = function (e, t, n) {
                  (e >>>= 0), (t >>>= 0), n || _(e, t, this.length);
                  for (var r = t, i = 1, o = this[e + --r]; r > 0 && (i *= 256); ) o += this[e + --r] * i;
                  return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)), o;
                }),
                (s.prototype.readInt8 = function (e, t) {
                  return ((e >>>= 0), t || _(e, 1, this.length), 128 & this[e]) ? -((255 - this[e] + 1) * 1) : this[e];
                }),
                (s.prototype.readInt16LE = function (e, t) {
                  (e >>>= 0), t || _(e, 2, this.length);
                  var n = this[e] | (this[e + 1] << 8);
                  return 32768 & n ? 0xffff0000 | n : n;
                }),
                (s.prototype.readInt16BE = function (e, t) {
                  (e >>>= 0), t || _(e, 2, this.length);
                  var n = this[e + 1] | (this[e] << 8);
                  return 32768 & n ? 0xffff0000 | n : n;
                }),
                (s.prototype.readInt32LE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || _(e, 4, this.length),
                    this[e] | (this[e + 1] << 8) | (this[e + 2] << 16) | (this[e + 3] << 24)
                  );
                }),
                (s.prototype.readInt32BE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || _(e, 4, this.length),
                    (this[e] << 24) | (this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3]
                  );
                }),
                (s.prototype.readFloatLE = function (e, t) {
                  return (e >>>= 0), t || _(e, 4, this.length), i.read(this, e, !0, 23, 4);
                }),
                (s.prototype.readFloatBE = function (e, t) {
                  return (e >>>= 0), t || _(e, 4, this.length), i.read(this, e, !1, 23, 4);
                }),
                (s.prototype.readDoubleLE = function (e, t) {
                  return (e >>>= 0), t || _(e, 8, this.length), i.read(this, e, !0, 52, 8);
                }),
                (s.prototype.readDoubleBE = function (e, t) {
                  return (e >>>= 0), t || _(e, 8, this.length), i.read(this, e, !1, 52, 8);
                }),
                (s.prototype.writeUIntLE = function (e, t, n, r) {
                  if (((e *= 1), (t >>>= 0), (n >>>= 0), !r)) {
                    var i = Math.pow(2, 8 * n) - 1;
                    v(this, e, t, n, i, 0);
                  }
                  var o = 1,
                    a = 0;
                  for (this[t] = 255 & e; ++a < n && (o *= 256); ) this[t + a] = (e / o) & 255;
                  return t + n;
                }),
                (s.prototype.writeUIntBE = function (e, t, n, r) {
                  if (((e *= 1), (t >>>= 0), (n >>>= 0), !r)) {
                    var i = Math.pow(2, 8 * n) - 1;
                    v(this, e, t, n, i, 0);
                  }
                  var o = n - 1,
                    a = 1;
                  for (this[t + o] = 255 & e; --o >= 0 && (a *= 256); ) this[t + o] = (e / a) & 255;
                  return t + n;
                }),
                (s.prototype.writeUInt8 = function (e, t, n) {
                  return (e *= 1), (t >>>= 0), n || v(this, e, t, 1, 255, 0), (this[t] = 255 & e), t + 1;
                }),
                (s.prototype.writeUInt16LE = function (e, t, n) {
                  return (
                    (e *= 1),
                    (t >>>= 0),
                    n || v(this, e, t, 2, 65535, 0),
                    (this[t] = 255 & e),
                    (this[t + 1] = e >>> 8),
                    t + 2
                  );
                }),
                (s.prototype.writeUInt16BE = function (e, t, n) {
                  return (
                    (e *= 1),
                    (t >>>= 0),
                    n || v(this, e, t, 2, 65535, 0),
                    (this[t] = e >>> 8),
                    (this[t + 1] = 255 & e),
                    t + 2
                  );
                }),
                (s.prototype.writeUInt32LE = function (e, t, n) {
                  return (
                    (e *= 1),
                    (t >>>= 0),
                    n || v(this, e, t, 4, 0xffffffff, 0),
                    (this[t + 3] = e >>> 24),
                    (this[t + 2] = e >>> 16),
                    (this[t + 1] = e >>> 8),
                    (this[t] = 255 & e),
                    t + 4
                  );
                }),
                (s.prototype.writeUInt32BE = function (e, t, n) {
                  return (
                    (e *= 1),
                    (t >>>= 0),
                    n || v(this, e, t, 4, 0xffffffff, 0),
                    (this[t] = e >>> 24),
                    (this[t + 1] = e >>> 16),
                    (this[t + 2] = e >>> 8),
                    (this[t + 3] = 255 & e),
                    t + 4
                  );
                }),
                (s.prototype.writeIntLE = function (e, t, n, r) {
                  if (((e *= 1), (t >>>= 0), !r)) {
                    var i = Math.pow(2, 8 * n - 1);
                    v(this, e, t, n, i - 1, -i);
                  }
                  var o = 0,
                    a = 1,
                    s = 0;
                  for (this[t] = 255 & e; ++o < n && (a *= 256); )
                    e < 0 && 0 === s && 0 !== this[t + o - 1] && (s = 1), (this[t + o] = (((e / a) | 0) - s) & 255);
                  return t + n;
                }),
                (s.prototype.writeIntBE = function (e, t, n, r) {
                  if (((e *= 1), (t >>>= 0), !r)) {
                    var i = Math.pow(2, 8 * n - 1);
                    v(this, e, t, n, i - 1, -i);
                  }
                  var o = n - 1,
                    a = 1,
                    s = 0;
                  for (this[t + o] = 255 & e; --o >= 0 && (a *= 256); )
                    e < 0 && 0 === s && 0 !== this[t + o + 1] && (s = 1), (this[t + o] = (((e / a) | 0) - s) & 255);
                  return t + n;
                }),
                (s.prototype.writeInt8 = function (e, t, n) {
                  return (
                    (e *= 1),
                    (t >>>= 0),
                    n || v(this, e, t, 1, 127, -128),
                    e < 0 && (e = 255 + e + 1),
                    (this[t] = 255 & e),
                    t + 1
                  );
                }),
                (s.prototype.writeInt16LE = function (e, t, n) {
                  return (
                    (e *= 1),
                    (t >>>= 0),
                    n || v(this, e, t, 2, 32767, -32768),
                    (this[t] = 255 & e),
                    (this[t + 1] = e >>> 8),
                    t + 2
                  );
                }),
                (s.prototype.writeInt16BE = function (e, t, n) {
                  return (
                    (e *= 1),
                    (t >>>= 0),
                    n || v(this, e, t, 2, 32767, -32768),
                    (this[t] = e >>> 8),
                    (this[t + 1] = 255 & e),
                    t + 2
                  );
                }),
                (s.prototype.writeInt32LE = function (e, t, n) {
                  return (
                    (e *= 1),
                    (t >>>= 0),
                    n || v(this, e, t, 4, 0x7fffffff, -0x80000000),
                    (this[t] = 255 & e),
                    (this[t + 1] = e >>> 8),
                    (this[t + 2] = e >>> 16),
                    (this[t + 3] = e >>> 24),
                    t + 4
                  );
                }),
                (s.prototype.writeInt32BE = function (e, t, n) {
                  return (
                    (e *= 1),
                    (t >>>= 0),
                    n || v(this, e, t, 4, 0x7fffffff, -0x80000000),
                    e < 0 && (e = 0xffffffff + e + 1),
                    (this[t] = e >>> 24),
                    (this[t + 1] = e >>> 16),
                    (this[t + 2] = e >>> 8),
                    (this[t + 3] = 255 & e),
                    t + 4
                  );
                }),
                (s.prototype.writeFloatLE = function (e, t, n) {
                  return k(this, e, t, !0, n);
                }),
                (s.prototype.writeFloatBE = function (e, t, n) {
                  return k(this, e, t, !1, n);
                }),
                (s.prototype.writeDoubleLE = function (e, t, n) {
                  return w(this, e, t, !0, n);
                }),
                (s.prototype.writeDoubleBE = function (e, t, n) {
                  return w(this, e, t, !1, n);
                }),
                (s.prototype.copy = function (e, t, n, r) {
                  if (!s.isBuffer(e)) throw TypeError('argument should be a Buffer');
                  if (
                    (n || (n = 0),
                    r || 0 === r || (r = this.length),
                    t >= e.length && (t = e.length),
                    t || (t = 0),
                    r > 0 && r < n && (r = n),
                    r === n || 0 === e.length || 0 === this.length)
                  )
                    return 0;
                  if (t < 0) throw RangeError('targetStart out of bounds');
                  if (n < 0 || n >= this.length) throw RangeError('Index out of range');
                  if (r < 0) throw RangeError('sourceEnd out of bounds');
                  r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
                  var i = r - n;
                  if (this === e && 'function' == typeof Uint8Array.prototype.copyWithin) this.copyWithin(t, n, r);
                  else if (this === e && n < t && t < r) for (var o = i - 1; o >= 0; --o) e[o + t] = this[o + n];
                  else Uint8Array.prototype.set.call(e, this.subarray(n, r), t);
                  return i;
                }),
                (s.prototype.fill = function (e, t, n, r) {
                  if ('string' == typeof e) {
                    if (
                      ('string' == typeof t
                        ? ((r = t), (t = 0), (n = this.length))
                        : 'string' == typeof n && ((r = n), (n = this.length)),
                      void 0 !== r && 'string' != typeof r)
                    )
                      throw TypeError('encoding must be a string');
                    if ('string' == typeof r && !s.isEncoding(r)) throw TypeError('Unknown encoding: ' + r);
                    if (1 === e.length) {
                      var i,
                        o = e.charCodeAt(0);
                      (('utf8' === r && o < 128) || 'latin1' === r) && (e = o);
                    }
                  } else 'number' == typeof e ? (e &= 255) : 'boolean' == typeof e && (e = Number(e));
                  if (t < 0 || this.length < t || this.length < n) throw RangeError('Out of range index');
                  if (n <= t) return this;
                  if (((t >>>= 0), (n = void 0 === n ? this.length : n >>> 0), e || (e = 0), 'number' == typeof e))
                    for (i = t; i < n; ++i) this[i] = e;
                  else {
                    var a = s.isBuffer(e) ? e : s.from(e, r),
                      l = a.length;
                    if (0 === l) throw TypeError('The value "' + e + '" is invalid for argument "value"');
                    for (i = 0; i < n - t; ++i) this[i + t] = a[i % l];
                  }
                  return this;
                });
              var C = /[^+/0-9A-Za-z-_]/g;
              function A(e, t) {
                t = t || 1 / 0;
                for (var n, r = e.length, i = null, o = [], a = 0; a < r; ++a) {
                  if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
                    if (!i) {
                      if (n > 56319 || a + 1 === r) {
                        (t -= 3) > -1 && o.push(239, 191, 189);
                        continue;
                      }
                      i = n;
                      continue;
                    }
                    if (n < 56320) {
                      (t -= 3) > -1 && o.push(239, 191, 189), (i = n);
                      continue;
                    }
                    n = (((i - 55296) << 10) | (n - 56320)) + 65536;
                  } else i && (t -= 3) > -1 && o.push(239, 191, 189);
                  if (((i = null), n < 128)) {
                    if ((t -= 1) < 0) break;
                    o.push(n);
                  } else if (n < 2048) {
                    if ((t -= 2) < 0) break;
                    o.push((n >> 6) | 192, (63 & n) | 128);
                  } else if (n < 65536) {
                    if ((t -= 3) < 0) break;
                    o.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128);
                  } else if (n < 1114112) {
                    if ((t -= 4) < 0) break;
                    o.push((n >> 18) | 240, ((n >> 12) & 63) | 128, ((n >> 6) & 63) | 128, (63 & n) | 128);
                  } else throw Error('Invalid code point');
                }
                return o;
              }
              function T(e) {
                for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
                return t;
              }
              function N(e) {
                return r.toByteArray(
                  (function (e) {
                    if ((e = (e = e.split('=')[0]).trim().replace(C, '')).length < 2) return '';
                    for (; e.length % 4 != 0; ) e += '=';
                    return e;
                  })(e)
                );
              }
              function E(e, t, n, r) {
                for (var i = 0; i < r && !(i + n >= t.length) && !(i >= e.length); ++i) t[i + n] = e[i];
                return i;
              }
              function x(e, t) {
                return (
                  e instanceof t ||
                  (null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name)
                );
              }
              var P = (function () {
                for (var e = '0123456789abcdef', t = Array(256), n = 0; n < 16; ++n)
                  for (var r = 16 * n, i = 0; i < 16; ++i) t[r + i] = e[n] + e[i];
                return t;
              })();
            },
            783: function (e, t) {
              (t.read = function (e, t, n, r, i) {
                var o,
                  a,
                  s = 8 * i - r - 1,
                  l = (1 << s) - 1,
                  u = l >> 1,
                  c = -7,
                  h = n ? i - 1 : 0,
                  p = n ? -1 : 1,
                  d = e[t + h];
                for (h += p, o = d & ((1 << -c) - 1), d >>= -c, c += s; c > 0; o = 256 * o + e[t + h], h += p, c -= 8);
                for (a = o & ((1 << -c) - 1), o >>= -c, c += r; c > 0; a = 256 * a + e[t + h], h += p, c -= 8);
                if (0 === o) o = 1 - u;
                else {
                  if (o === l) return a ? NaN : (1 / 0) * (d ? -1 : 1);
                  (a += Math.pow(2, r)), (o -= u);
                }
                return (d ? -1 : 1) * a * Math.pow(2, o - r);
              }),
                (t.write = function (e, t, n, r, i, o) {
                  var a,
                    s,
                    l,
                    u = 8 * o - i - 1,
                    c = (1 << u) - 1,
                    h = c >> 1,
                    p = 5960464477539062e-23 * (23 === i),
                    d = r ? 0 : o - 1,
                    m = r ? 1 : -1,
                    f = +(t < 0 || (0 === t && 1 / t < 0));
                  for (
                    isNaN((t = Math.abs(t))) || t === 1 / 0
                      ? ((s = +!!isNaN(t)), (a = c))
                      : ((a = Math.floor(Math.log(t) / Math.LN2)),
                        t * (l = Math.pow(2, -a)) < 1 && (a--, (l *= 2)),
                        a + h >= 1 ? (t += p / l) : (t += p * Math.pow(2, 1 - h)),
                        t * l >= 2 && (a++, (l /= 2)),
                        a + h >= c
                          ? ((s = 0), (a = c))
                          : a + h >= 1
                            ? ((s = (t * l - 1) * Math.pow(2, i)), (a += h))
                            : ((s = t * Math.pow(2, h - 1) * Math.pow(2, i)), (a = 0)));
                    i >= 8;
                    e[n + d] = 255 & s, d += m, s /= 256, i -= 8
                  );
                  for (a = (a << i) | s, u += i; u > 0; e[n + d] = 255 & a, d += m, a /= 256, u -= 8);
                  e[n + d - m] |= 128 * f;
                });
            },
          },
          n = {};
        function r(e) {
          var i = n[e];
          if (void 0 !== i) return i.exports;
          var o = (n[e] = { exports: {} }),
            a = !0;
          try {
            t[e](o, o.exports, r), (a = !1);
          } finally {
            a && delete n[e];
          }
          return o.exports;
        }
        (r.ab = '//'), (e.exports = r(72));
      })();
    },
    5031: (e, t, n) => {
      'use strict';
      let r, i;
      n.d(t, { Yz: () => nA });
      var o = {};
      n.r(o),
        n.d(o, {
          boolean: () => eT,
          booleanish: () => eN,
          commaOrSpaceSeparated: () => eR,
          commaSeparated: () => eL,
          number: () => ex,
          overloadedBoolean: () => eE,
          spaceSeparated: () => eP,
        });
      class a extends Error {
        constructor(e) {
          super(e), (this.name = 'ShikiError');
        }
      }
      var s = n(6064);
      function l(e, ...t) {
        return (
          t.forEach((t) => {
            for (let n in t) e[n] = t[n];
          }),
          e
        );
      }
      var u = /\$(\d+)|\${(\d+):\/(downcase|upcase)}/g,
        c = class {
          static hasCaptures(e) {
            return null !== e && ((u.lastIndex = 0), u.test(e));
          }
          static replaceCaptures(e, t, n) {
            return e.replace(u, (e, r, i, o) => {
              let a = n[parseInt(r || i, 10)];
              if (!a) return e;
              {
                let e = t.substring(a.start, a.end);
                for (; '.' === e[0]; ) e = e.substring(1);
                switch (o) {
                  case 'downcase':
                    return e.toLowerCase();
                  case 'upcase':
                    return e.toUpperCase();
                  default:
                    return e;
                }
              }
            });
          }
        };
      function h(e, t) {
        return e < t ? -1 : +(e > t);
      }
      function p(e, t) {
        if (null === e && null === t) return 0;
        if (!e) return -1;
        if (!t) return 1;
        let n = e.length,
          r = t.length;
        if (n === r) {
          for (let r = 0; r < n; r++) {
            var i, o;
            let n = ((i = e[r]), i < (o = t[r]) ? -1 : +(i > o));
            if (0 !== n) return n;
          }
          return 0;
        }
        return n - r;
      }
      function d(e) {
        return !!(
          /^#[0-9a-f]{6}$/i.test(e) ||
          /^#[0-9a-f]{8}$/i.test(e) ||
          /^#[0-9a-f]{3}$/i.test(e) ||
          /^#[0-9a-f]{4}$/i.test(e)
        );
      }
      function m(e) {
        return e.replace(/[\-\\\{\}\*\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, '\\$&');
      }
      var f = class {
          constructor(e) {
            this.fn = e;
          }
          cache = new Map();
          get(e) {
            if (this.cache.has(e)) return this.cache.get(e);
            let t = this.fn(e);
            return this.cache.set(e, t), t;
          }
        },
        g = class {
          constructor(e, t, n) {
            (this._colorMap = e), (this._defaults = t), (this._root = n);
          }
          static createFromRawTheme(e, t) {
            return this.createFromParsedTheme(
              (function (e) {
                if (!e || !e.settings || !Array.isArray(e.settings)) return [];
                let t = e.settings,
                  n = [],
                  r = 0;
                for (let e = 0, i = t.length; e < i; e++) {
                  let i,
                    o = t[e];
                  if (!o.settings) continue;
                  if ('string' == typeof o.scope) {
                    let e = o.scope;
                    i = (e = (e = e.replace(/^[,]+/, '')).replace(/[,]+$/, '')).split(',');
                  } else i = Array.isArray(o.scope) ? o.scope : [''];
                  let a = -1;
                  if ('string' == typeof o.settings.fontStyle) {
                    a = 0;
                    let e = o.settings.fontStyle.split(' ');
                    for (let t = 0, n = e.length; t < n; t++)
                      switch (e[t]) {
                        case 'italic':
                          a |= 1;
                          break;
                        case 'bold':
                          a |= 2;
                          break;
                        case 'underline':
                          a |= 4;
                          break;
                        case 'strikethrough':
                          a |= 8;
                      }
                  }
                  let s = null;
                  'string' == typeof o.settings.foreground && d(o.settings.foreground) && (s = o.settings.foreground);
                  let l = null;
                  'string' == typeof o.settings.background && d(o.settings.background) && (l = o.settings.background);
                  for (let t = 0, o = i.length; t < o; t++) {
                    let o = i[t].trim().split(' '),
                      u = o[o.length - 1],
                      c = null;
                    o.length > 1 && (c = o.slice(0, o.length - 1)).reverse(), (n[r++] = new _(u, c, e, a, s, l));
                  }
                }
                return n;
              })(e),
              t
            );
          }
          static createFromParsedTheme(e, t) {
            return (function (e, t) {
              e.sort((e, t) => {
                var n, r;
                let i = ((n = e.scope), n < (r = t.scope) ? -1 : +(n > r));
                return 0 !== i || 0 !== (i = p(e.parentScopes, t.parentScopes)) ? i : e.index - t.index;
              });
              let n = 0,
                r = '#000000',
                i = '#ffffff';
              for (; e.length >= 1 && '' === e[0].scope; ) {
                let t = e.shift();
                -1 !== t.fontStyle && (n = t.fontStyle),
                  null !== t.foreground && (r = t.foreground),
                  null !== t.background && (i = t.background);
              }
              let o = new S(t),
                a = new b(n, o.getId(r), o.getId(i)),
                s = new C(new w(0, null, -1, 0, 0), []);
              for (let t = 0, n = e.length; t < n; t++) {
                let n = e[t];
                s.insert(0, n.scope, n.parentScopes, n.fontStyle, o.getId(n.foreground), o.getId(n.background));
              }
              return new g(o, a, s);
            })(e, t);
          }
          _cachedMatchRoot = new f((e) => this._root.match(e));
          getColorMap() {
            return this._colorMap.getColorMap();
          }
          getDefaults() {
            return this._defaults;
          }
          match(e) {
            if (null === e) return this._defaults;
            let t = e.scopeName,
              n = this._cachedMatchRoot.get(t).find((t) =>
                (function (e, t) {
                  if (0 === t.length) return !0;
                  for (let i = 0; i < t.length; i++) {
                    var n, r;
                    let o = t[i],
                      a = !1;
                    if ('>' === o) {
                      if (i === t.length - 1) return !1;
                      (o = t[++i]), (a = !0);
                    }
                    for (; e && ((n = e.scopeName), !((r = o) === n || (n.startsWith(r) && '.' === n[r.length]))); ) {
                      if (a) return !1;
                      e = e.parent;
                    }
                    if (!e) return !1;
                    e = e.parent;
                  }
                  return !0;
                })(e.parent, t.parentScopes)
              );
            return n ? new b(n.fontStyle, n.foreground, n.background) : null;
          }
        },
        y = class e {
          constructor(e, t) {
            (this.parent = e), (this.scopeName = t);
          }
          static push(t, n) {
            for (let r of n) t = new e(t, r);
            return t;
          }
          static from(...t) {
            let n = null;
            for (let r = 0; r < t.length; r++) n = new e(n, t[r]);
            return n;
          }
          push(t) {
            return new e(this, t);
          }
          getSegments() {
            let e = this,
              t = [];
            for (; e; ) t.push(e.scopeName), (e = e.parent);
            return t.reverse(), t;
          }
          toString() {
            return this.getSegments().join(' ');
          }
          extends(e) {
            return this === e || (null !== this.parent && this.parent.extends(e));
          }
          getExtensionIfDefined(e) {
            let t = [],
              n = this;
            for (; n && n !== e; ) t.push(n.scopeName), (n = n.parent);
            return n === e ? t.reverse() : void 0;
          }
        },
        b = class {
          constructor(e, t, n) {
            (this.fontStyle = e), (this.foregroundId = t), (this.backgroundId = n);
          }
        },
        _ = class {
          constructor(e, t, n, r, i, o) {
            (this.scope = e),
              (this.parentScopes = t),
              (this.index = n),
              (this.fontStyle = r),
              (this.foreground = i),
              (this.background = o);
          }
        },
        v = ((e) => (
          (e[(e.NotSet = -1)] = 'NotSet'),
          (e[(e.None = 0)] = 'None'),
          (e[(e.Italic = 1)] = 'Italic'),
          (e[(e.Bold = 2)] = 'Bold'),
          (e[(e.Underline = 4)] = 'Underline'),
          (e[(e.Strikethrough = 8)] = 'Strikethrough'),
          e
        ))(v || {}),
        S = class {
          _isFrozen;
          _lastColorId;
          _id2color;
          _color2id;
          constructor(e) {
            if (
              ((this._lastColorId = 0), (this._id2color = []), (this._color2id = Object.create(null)), Array.isArray(e))
            ) {
              this._isFrozen = !0;
              for (let t = 0, n = e.length; t < n; t++) (this._color2id[e[t]] = t), (this._id2color[t] = e[t]);
            } else this._isFrozen = !1;
          }
          getId(e) {
            if (null === e) return 0;
            e = e.toUpperCase();
            let t = this._color2id[e];
            if (t) return t;
            if (this._isFrozen) throw Error(`Missing color in color map - ${e}`);
            return (t = ++this._lastColorId), (this._color2id[e] = t), (this._id2color[t] = e), t;
          }
          getColorMap() {
            return this._id2color.slice(0);
          }
        },
        k = Object.freeze([]),
        w = class e {
          scopeDepth;
          parentScopes;
          fontStyle;
          foreground;
          background;
          constructor(e, t, n, r, i) {
            (this.scopeDepth = e),
              (this.parentScopes = t || k),
              (this.fontStyle = n),
              (this.foreground = r),
              (this.background = i);
          }
          clone() {
            return new e(this.scopeDepth, this.parentScopes, this.fontStyle, this.foreground, this.background);
          }
          static cloneArr(e) {
            let t = [];
            for (let n = 0, r = e.length; n < r; n++) t[n] = e[n].clone();
            return t;
          }
          acceptOverwrite(e, t, n, r) {
            this.scopeDepth > e ? console.log('how did this happen?') : (this.scopeDepth = e),
              -1 !== t && (this.fontStyle = t),
              0 !== n && (this.foreground = n),
              0 !== r && (this.background = r);
          }
        },
        C = class e {
          constructor(e, t = [], n = {}) {
            (this._mainRule = e), (this._children = n), (this._rulesWithParentScopes = t);
          }
          _rulesWithParentScopes;
          static _cmpBySpecificity(e, t) {
            if (e.scopeDepth !== t.scopeDepth) return t.scopeDepth - e.scopeDepth;
            let n = 0,
              r = 0;
            for (
              ;
              '>' === e.parentScopes[n] && n++,
                '>' === t.parentScopes[r] && r++,
                !(n >= e.parentScopes.length) && !(r >= t.parentScopes.length);

            ) {
              let i = t.parentScopes[r].length - e.parentScopes[n].length;
              if (0 !== i) return i;
              n++, r++;
            }
            return t.parentScopes.length - e.parentScopes.length;
          }
          match(t) {
            if ('' !== t) {
              let e,
                n,
                r = t.indexOf('.');
              if (
                (-1 === r ? ((e = t), (n = '')) : ((e = t.substring(0, r)), (n = t.substring(r + 1))),
                this._children.hasOwnProperty(e))
              )
                return this._children[e].match(n);
            }
            let n = this._rulesWithParentScopes.concat(this._mainRule);
            return n.sort(e._cmpBySpecificity), n;
          }
          insert(t, n, r, i, o, a) {
            let s, l, u;
            if ('' === n) return void this._doInsertHere(t, r, i, o, a);
            let c = n.indexOf('.');
            -1 === c ? ((s = n), (l = '')) : ((s = n.substring(0, c)), (l = n.substring(c + 1))),
              this._children.hasOwnProperty(s)
                ? (u = this._children[s])
                : ((u = new e(this._mainRule.clone(), w.cloneArr(this._rulesWithParentScopes))),
                  (this._children[s] = u)),
              u.insert(t + 1, l, r, i, o, a);
          }
          _doInsertHere(e, t, n, r, i) {
            if (null === t) return void this._mainRule.acceptOverwrite(e, n, r, i);
            for (let o = 0, a = this._rulesWithParentScopes.length; o < a; o++) {
              let a = this._rulesWithParentScopes[o];
              if (0 === p(a.parentScopes, t)) return void a.acceptOverwrite(e, n, r, i);
            }
            -1 === n && (n = this._mainRule.fontStyle),
              0 === r && (r = this._mainRule.foreground),
              0 === i && (i = this._mainRule.background),
              this._rulesWithParentScopes.push(new w(e, t, n, r, i));
          }
        },
        A = class e {
          static toBinaryStr(e) {
            return e.toString(2).padStart(32, '0');
          }
          static print(t) {
            let n = e.getLanguageId(t),
              r = e.getTokenType(t),
              i = e.getFontStyle(t);
            console.log({
              languageId: n,
              tokenType: r,
              fontStyle: i,
              foreground: e.getForeground(t),
              background: e.getBackground(t),
            });
          }
          static getLanguageId(e) {
            return (255 & e) >>> 0;
          }
          static getTokenType(e) {
            return (768 & e) >>> 8;
          }
          static containsBalancedBrackets(e) {
            return (1024 & e) != 0;
          }
          static getFontStyle(e) {
            return (30720 & e) >>> 11;
          }
          static getForeground(e) {
            return (0xff8000 & e) >>> 15;
          }
          static getBackground(e) {
            return (0xff000000 & e) >>> 24;
          }
          static set(t, n, r, i, o, a, s) {
            let l = e.getLanguageId(t),
              u = e.getTokenType(t),
              c = +!!e.containsBalancedBrackets(t),
              h = e.getFontStyle(t),
              p = e.getForeground(t),
              d = e.getBackground(t);
            return (
              0 !== n && (l = n),
              8 !== r && (u = r),
              null !== i && (c = +!!i),
              -1 !== o && (h = o),
              0 !== a && (p = a),
              0 !== s && (d = s),
              (0 | l | (u << 8) | (c << 10) | (h << 11) | (p << 15) | (d << 24)) >>> 0
            );
          }
        };
      function T(e, t) {
        var n;
        let r,
          i,
          o = [],
          a =
            ((n = e),
            (i = (r = /([LR]:|[\w\.:][\w\.:\-]*|[\,\|\-\(\)])/g).exec(n)),
            {
              next: () => {
                if (!i) return null;
                let e = i[0];
                return (i = r.exec(n)), e;
              },
            }),
          s = a.next();
        for (; null !== s; ) {
          let e = 0;
          if (2 === s.length && ':' === s.charAt(1)) {
            switch (s.charAt(0)) {
              case 'R':
                e = 1;
                break;
              case 'L':
                e = -1;
                break;
              default:
                console.log(`Unknown priority ${s} in scope selector`);
            }
            s = a.next();
          }
          let t = u();
          if ((o.push({ matcher: t, priority: e }), ',' !== s)) break;
          s = a.next();
        }
        return o;
        function l() {
          if ('-' === s) {
            s = a.next();
            let e = l();
            return (t) => !!e && !e(t);
          }
          if ('(' === s) {
            s = a.next();
            let e = (function () {
              let e = [],
                t = u();
              for (; t && (e.push(t), '|' === s || ',' === s); ) {
                do s = a.next();
                while ('|' === s || ',' === s);
                t = u();
              }
              return (t) => e.some((e) => e(t));
            })();
            return ')' === s && (s = a.next()), e;
          }
          if (N(s)) {
            let e = [];
            do e.push(s), (s = a.next());
            while (N(s));
            return (n) => t(e, n);
          }
          return null;
        }
        function u() {
          let e = [],
            t = l();
          for (; t; ) e.push(t), (t = l());
          return (t) => e.every((e) => e(t));
        }
      }
      function N(e) {
        return !!e && !!e.match(/[\w\.:]+/);
      }
      var E = ((e) => (
        (e[(e.None = 0)] = 'None'),
        (e[(e.NotBeginString = 1)] = 'NotBeginString'),
        (e[(e.NotEndString = 2)] = 'NotEndString'),
        (e[(e.NotBeginPosition = 4)] = 'NotBeginPosition'),
        (e[(e.DebugCall = 8)] = 'DebugCall'),
        e
      ))(E || {});
      function x(e) {
        'function' == typeof e.dispose && e.dispose();
      }
      var P = class {
          constructor(e) {
            this.scopeName = e;
          }
          toKey() {
            return this.scopeName;
          }
        },
        L = class {
          constructor(e, t) {
            (this.scopeName = e), (this.ruleName = t);
          }
          toKey() {
            return `${this.scopeName}#${this.ruleName}`;
          }
        },
        R = class {
          _references = [];
          _seenReferenceKeys = new Set();
          get references() {
            return this._references;
          }
          visitedRule = new Set();
          add(e) {
            let t = e.toKey();
            this._seenReferenceKeys.has(t) || (this._seenReferenceKeys.add(t), this._references.push(e));
          }
        },
        O = class {
          constructor(e, t) {
            (this.repo = e),
              (this.initialScopeName = t),
              this.seenFullScopeRequests.add(this.initialScopeName),
              (this.Q = [new P(this.initialScopeName)]);
          }
          seenFullScopeRequests = new Set();
          seenPartialScopeRequests = new Set();
          Q;
          processQueue() {
            let e = this.Q;
            this.Q = [];
            let t = new R();
            for (let n of e)
              !(function (e, t, n, r) {
                let i = n.lookup(e.scopeName);
                if (!i) {
                  if (e.scopeName === t) throw Error(`No grammar provided for <${t}>`);
                  return;
                }
                let o = n.lookup(t);
                e instanceof P
                  ? M({ baseGrammar: o, selfGrammar: i }, r)
                  : I(e.ruleName, { baseGrammar: o, selfGrammar: i, repository: i.repository }, r);
                let a = n.injections(e.scopeName);
                if (a) for (let e of a) r.add(new P(e));
              })(n, this.initialScopeName, this.repo, t);
            for (let e of t.references)
              if (e instanceof P) {
                if (this.seenFullScopeRequests.has(e.scopeName)) continue;
                this.seenFullScopeRequests.add(e.scopeName), this.Q.push(e);
              } else {
                if (this.seenFullScopeRequests.has(e.scopeName) || this.seenPartialScopeRequests.has(e.toKey()))
                  continue;
                this.seenPartialScopeRequests.add(e.toKey()), this.Q.push(e);
              }
          }
        };
      function I(e, t, n) {
        t.repository && t.repository[e] && D([t.repository[e]], t, n);
      }
      function M(e, t) {
        e.selfGrammar.patterns &&
          Array.isArray(e.selfGrammar.patterns) &&
          D(e.selfGrammar.patterns, { ...e, repository: e.selfGrammar.repository }, t),
          e.selfGrammar.injections &&
            D(Object.values(e.selfGrammar.injections), { ...e, repository: e.selfGrammar.repository }, t);
      }
      function D(e, t, n) {
        for (let r of e) {
          if (n.visitedRule.has(r)) continue;
          n.visitedRule.add(r);
          let e = r.repository ? l({}, t.repository, r.repository) : t.repository;
          Array.isArray(r.patterns) && D(r.patterns, { ...t, repository: e }, n);
          let i = r.include;
          if (!i) continue;
          let o = H(i);
          switch (o.kind) {
            case 0:
              M({ ...t, selfGrammar: t.baseGrammar }, n);
              break;
            case 1:
              M(t, n);
              break;
            case 2:
              I(o.ruleName, { ...t, repository: e }, n);
              break;
            case 3:
            case 4:
              let a =
                o.scopeName === t.selfGrammar.scopeName
                  ? t.selfGrammar
                  : o.scopeName === t.baseGrammar.scopeName
                    ? t.baseGrammar
                    : void 0;
              if (a) {
                let r = { baseGrammar: t.baseGrammar, selfGrammar: a, repository: e };
                4 === o.kind ? I(o.ruleName, r, n) : M(r, n);
              } else 4 === o.kind ? n.add(new L(o.scopeName, o.ruleName)) : n.add(new P(o.scopeName));
          }
        }
      }
      var B = class {
          kind = 0;
        },
        U = class {
          kind = 1;
        },
        G = class {
          constructor(e) {
            this.ruleName = e;
          }
          kind = 2;
        },
        j = class {
          constructor(e) {
            this.scopeName = e;
          }
          kind = 3;
        },
        F = class {
          constructor(e, t) {
            (this.scopeName = e), (this.ruleName = t);
          }
          kind = 4;
        };
      function H(e) {
        if ('$base' === e) return new B();
        if ('$self' === e) return new U();
        let t = e.indexOf('#');
        return -1 === t ? new j(e) : 0 === t ? new G(e.substring(1)) : new F(e.substring(0, t), e.substring(t + 1));
      }
      var z = /\\(\d+)/,
        $ = /\\(\d+)/g;
      Symbol('RuleId');
      var W = class {
          $location;
          id;
          _nameIsCapturing;
          _name;
          _contentNameIsCapturing;
          _contentName;
          constructor(e, t, n, r) {
            (this.$location = e),
              (this.id = t),
              (this._name = n || null),
              (this._nameIsCapturing = c.hasCaptures(this._name)),
              (this._contentName = r || null),
              (this._contentNameIsCapturing = c.hasCaptures(this._contentName));
          }
          get debugName() {
            let e = this.$location
              ? `${(function e(t) {
                  let n = ~t.lastIndexOf('/') || ~t.lastIndexOf('\\');
                  return 0 === n ? t : ~n == t.length - 1 ? e(t.substring(0, t.length - 1)) : t.substr(~n + 1);
                })(this.$location.filename)}:${this.$location.line}`
              : 'unknown';
            return `${this.constructor.name}#${this.id} @ ${e}`;
          }
          getName(e, t) {
            return this._nameIsCapturing && null !== this._name && null !== e && null !== t
              ? c.replaceCaptures(this._name, e, t)
              : this._name;
          }
          getContentName(e, t) {
            return this._contentNameIsCapturing && null !== this._contentName
              ? c.replaceCaptures(this._contentName, e, t)
              : this._contentName;
          }
        },
        q = class extends W {
          retokenizeCapturedWithRuleId;
          constructor(e, t, n, r, i) {
            super(e, t, n, r), (this.retokenizeCapturedWithRuleId = i);
          }
          dispose() {}
          collectPatterns(e, t) {
            throw Error('Not supported!');
          }
          compile(e, t) {
            throw Error('Not supported!');
          }
          compileAG(e, t, n, r) {
            throw Error('Not supported!');
          }
        },
        V = class extends W {
          _match;
          captures;
          _cachedCompiledPatterns;
          constructor(e, t, n, r, i) {
            super(e, t, n, null),
              (this._match = new Q(r, this.id)),
              (this.captures = i),
              (this._cachedCompiledPatterns = null);
          }
          dispose() {
            this._cachedCompiledPatterns &&
              (this._cachedCompiledPatterns.dispose(), (this._cachedCompiledPatterns = null));
          }
          get debugMatchRegExp() {
            return `${this._match.source}`;
          }
          collectPatterns(e, t) {
            t.push(this._match);
          }
          compile(e, t) {
            return this._getCachedCompiledPatterns(e).compile(e);
          }
          compileAG(e, t, n, r) {
            return this._getCachedCompiledPatterns(e).compileAG(e, n, r);
          }
          _getCachedCompiledPatterns(e) {
            return (
              this._cachedCompiledPatterns ||
                ((this._cachedCompiledPatterns = new Z()), this.collectPatterns(e, this._cachedCompiledPatterns)),
              this._cachedCompiledPatterns
            );
          }
        },
        Y = class extends W {
          hasMissingPatterns;
          patterns;
          _cachedCompiledPatterns;
          constructor(e, t, n, r, i) {
            super(e, t, n, r),
              (this.patterns = i.patterns),
              (this.hasMissingPatterns = i.hasMissingPatterns),
              (this._cachedCompiledPatterns = null);
          }
          dispose() {
            this._cachedCompiledPatterns &&
              (this._cachedCompiledPatterns.dispose(), (this._cachedCompiledPatterns = null));
          }
          collectPatterns(e, t) {
            for (let n of this.patterns) e.getRule(n).collectPatterns(e, t);
          }
          compile(e, t) {
            return this._getCachedCompiledPatterns(e).compile(e);
          }
          compileAG(e, t, n, r) {
            return this._getCachedCompiledPatterns(e).compileAG(e, n, r);
          }
          _getCachedCompiledPatterns(e) {
            return (
              this._cachedCompiledPatterns ||
                ((this._cachedCompiledPatterns = new Z()), this.collectPatterns(e, this._cachedCompiledPatterns)),
              this._cachedCompiledPatterns
            );
          }
        },
        K = class extends W {
          _begin;
          beginCaptures;
          _end;
          endHasBackReferences;
          endCaptures;
          applyEndPatternLast;
          hasMissingPatterns;
          patterns;
          _cachedCompiledPatterns;
          constructor(e, t, n, r, i, o, a, s, l, u) {
            super(e, t, n, r),
              (this._begin = new Q(i, this.id)),
              (this.beginCaptures = o),
              (this._end = new Q(a || '￿', -1)),
              (this.endHasBackReferences = this._end.hasBackReferences),
              (this.endCaptures = s),
              (this.applyEndPatternLast = l || !1),
              (this.patterns = u.patterns),
              (this.hasMissingPatterns = u.hasMissingPatterns),
              (this._cachedCompiledPatterns = null);
          }
          dispose() {
            this._cachedCompiledPatterns &&
              (this._cachedCompiledPatterns.dispose(), (this._cachedCompiledPatterns = null));
          }
          get debugBeginRegExp() {
            return `${this._begin.source}`;
          }
          get debugEndRegExp() {
            return `${this._end.source}`;
          }
          getEndWithResolvedBackReferences(e, t) {
            return this._end.resolveBackReferences(e, t);
          }
          collectPatterns(e, t) {
            t.push(this._begin);
          }
          compile(e, t) {
            return this._getCachedCompiledPatterns(e, t).compile(e);
          }
          compileAG(e, t, n, r) {
            return this._getCachedCompiledPatterns(e, t).compileAG(e, n, r);
          }
          _getCachedCompiledPatterns(e, t) {
            if (!this._cachedCompiledPatterns) {
              for (let t of ((this._cachedCompiledPatterns = new Z()), this.patterns))
                e.getRule(t).collectPatterns(e, this._cachedCompiledPatterns);
              this.applyEndPatternLast
                ? this._cachedCompiledPatterns.push(this._end.hasBackReferences ? this._end.clone() : this._end)
                : this._cachedCompiledPatterns.unshift(this._end.hasBackReferences ? this._end.clone() : this._end);
            }
            return (
              this._end.hasBackReferences &&
                (this.applyEndPatternLast
                  ? this._cachedCompiledPatterns.setSource(this._cachedCompiledPatterns.length() - 1, t)
                  : this._cachedCompiledPatterns.setSource(0, t)),
              this._cachedCompiledPatterns
            );
          }
        },
        X = class extends W {
          _begin;
          beginCaptures;
          whileCaptures;
          _while;
          whileHasBackReferences;
          hasMissingPatterns;
          patterns;
          _cachedCompiledPatterns;
          _cachedCompiledWhilePatterns;
          constructor(e, t, n, r, i, o, a, s, l) {
            super(e, t, n, r),
              (this._begin = new Q(i, this.id)),
              (this.beginCaptures = o),
              (this.whileCaptures = s),
              (this._while = new Q(a, -2)),
              (this.whileHasBackReferences = this._while.hasBackReferences),
              (this.patterns = l.patterns),
              (this.hasMissingPatterns = l.hasMissingPatterns),
              (this._cachedCompiledPatterns = null),
              (this._cachedCompiledWhilePatterns = null);
          }
          dispose() {
            this._cachedCompiledPatterns &&
              (this._cachedCompiledPatterns.dispose(), (this._cachedCompiledPatterns = null)),
              this._cachedCompiledWhilePatterns &&
                (this._cachedCompiledWhilePatterns.dispose(), (this._cachedCompiledWhilePatterns = null));
          }
          get debugBeginRegExp() {
            return `${this._begin.source}`;
          }
          get debugWhileRegExp() {
            return `${this._while.source}`;
          }
          getWhileWithResolvedBackReferences(e, t) {
            return this._while.resolveBackReferences(e, t);
          }
          collectPatterns(e, t) {
            t.push(this._begin);
          }
          compile(e, t) {
            return this._getCachedCompiledPatterns(e).compile(e);
          }
          compileAG(e, t, n, r) {
            return this._getCachedCompiledPatterns(e).compileAG(e, n, r);
          }
          _getCachedCompiledPatterns(e) {
            if (!this._cachedCompiledPatterns)
              for (let t of ((this._cachedCompiledPatterns = new Z()), this.patterns))
                e.getRule(t).collectPatterns(e, this._cachedCompiledPatterns);
            return this._cachedCompiledPatterns;
          }
          compileWhile(e, t) {
            return this._getCachedCompiledWhilePatterns(e, t).compile(e);
          }
          compileWhileAG(e, t, n, r) {
            return this._getCachedCompiledWhilePatterns(e, t).compileAG(e, n, r);
          }
          _getCachedCompiledWhilePatterns(e, t) {
            return (
              this._cachedCompiledWhilePatterns ||
                ((this._cachedCompiledWhilePatterns = new Z()),
                this._cachedCompiledWhilePatterns.push(
                  this._while.hasBackReferences ? this._while.clone() : this._while
                )),
              this._while.hasBackReferences && this._cachedCompiledWhilePatterns.setSource(0, t || '￿'),
              this._cachedCompiledWhilePatterns
            );
          }
        },
        J = class e {
          static createCaptureRule(e, t, n, r, i) {
            return e.registerRule((e) => new q(t, e, n, r, i));
          }
          static getCompiledRuleId(t, n, r) {
            return (
              t.id ||
                n.registerRule((i) => {
                  if (((t.id = i), t.match))
                    return new V(
                      t.$vscodeTextmateLocation,
                      t.id,
                      t.name,
                      t.match,
                      e._compileCaptures(t.captures, n, r)
                    );
                  if (void 0 === t.begin) {
                    t.repository && (r = l({}, r, t.repository));
                    let i = t.patterns;
                    return (
                      void 0 === i && t.include && (i = [{ include: t.include }]),
                      new Y(t.$vscodeTextmateLocation, t.id, t.name, t.contentName, e._compilePatterns(i, n, r))
                    );
                  }
                  return t.while
                    ? new X(
                        t.$vscodeTextmateLocation,
                        t.id,
                        t.name,
                        t.contentName,
                        t.begin,
                        e._compileCaptures(t.beginCaptures || t.captures, n, r),
                        t.while,
                        e._compileCaptures(t.whileCaptures || t.captures, n, r),
                        e._compilePatterns(t.patterns, n, r)
                      )
                    : new K(
                        t.$vscodeTextmateLocation,
                        t.id,
                        t.name,
                        t.contentName,
                        t.begin,
                        e._compileCaptures(t.beginCaptures || t.captures, n, r),
                        t.end,
                        e._compileCaptures(t.endCaptures || t.captures, n, r),
                        t.applyEndPatternLast,
                        e._compilePatterns(t.patterns, n, r)
                      );
                }),
              t.id
            );
          }
          static _compileCaptures(t, n, r) {
            let i = [];
            if (t) {
              let o = 0;
              for (let e in t) {
                if ('$vscodeTextmateLocation' === e) continue;
                let t = parseInt(e, 10);
                t > o && (o = t);
              }
              for (let e = 0; e <= o; e++) i[e] = null;
              for (let o in t) {
                if ('$vscodeTextmateLocation' === o) continue;
                let a = parseInt(o, 10),
                  s = 0;
                t[o].patterns && (s = e.getCompiledRuleId(t[o], n, r)),
                  (i[a] = e.createCaptureRule(n, t[o].$vscodeTextmateLocation, t[o].name, t[o].contentName, s));
              }
            }
            return i;
          }
          static _compilePatterns(t, n, r) {
            let i = [];
            if (t)
              for (let o = 0, a = t.length; o < a; o++) {
                let a = t[o],
                  s = -1;
                if (a.include) {
                  let t = H(a.include);
                  switch (t.kind) {
                    case 0:
                    case 1:
                      s = e.getCompiledRuleId(r[a.include], n, r);
                      break;
                    case 2:
                      let i = r[t.ruleName];
                      i && (s = e.getCompiledRuleId(i, n, r));
                      break;
                    case 3:
                    case 4:
                      let o = t.scopeName,
                        l = 4 === t.kind ? t.ruleName : null,
                        u = n.getExternalGrammar(o, r);
                      if (u)
                        if (l) {
                          let t = u.repository[l];
                          t && (s = e.getCompiledRuleId(t, n, u.repository));
                        } else s = e.getCompiledRuleId(u.repository.$self, n, u.repository);
                  }
                } else s = e.getCompiledRuleId(a, n, r);
                if (-1 !== s) {
                  let e = n.getRule(s),
                    t = !1;
                  if (
                    ((e instanceof Y || e instanceof K || e instanceof X) &&
                      e.hasMissingPatterns &&
                      0 === e.patterns.length &&
                      (t = !0),
                    t)
                  )
                    continue;
                  i.push(s);
                }
              }
            return { patterns: i, hasMissingPatterns: (t ? t.length : 0) !== i.length };
          }
        },
        Q = class e {
          source;
          ruleId;
          hasAnchor;
          hasBackReferences;
          _anchorCache;
          constructor(e, t) {
            if (e && 'string' == typeof e) {
              let t = e.length,
                n = 0,
                r = [],
                i = !1;
              for (let o = 0; o < t; o++)
                if ('\\' === e.charAt(o) && o + 1 < t) {
                  let t = e.charAt(o + 1);
                  'z' === t
                    ? (r.push(e.substring(n, o)), r.push('$(?!\\n)(?<!\\n)'), (n = o + 2))
                    : ('A' === t || 'G' === t) && (i = !0),
                    o++;
                }
              (this.hasAnchor = i),
                0 === n ? (this.source = e) : (r.push(e.substring(n, t)), (this.source = r.join('')));
            } else (this.hasAnchor = !1), (this.source = e);
            this.hasAnchor ? (this._anchorCache = this._buildAnchorCache()) : (this._anchorCache = null),
              (this.ruleId = t),
              'string' == typeof this.source
                ? (this.hasBackReferences = z.test(this.source))
                : (this.hasBackReferences = !1);
          }
          clone() {
            return new e(this.source, this.ruleId);
          }
          setSource(e) {
            this.source !== e && ((this.source = e), this.hasAnchor && (this._anchorCache = this._buildAnchorCache()));
          }
          resolveBackReferences(e, t) {
            if ('string' != typeof this.source)
              throw Error('This method should only be called if the source is a string');
            let n = t.map((t) => e.substring(t.start, t.end));
            return ($.lastIndex = 0), this.source.replace($, (e, t) => m(n[parseInt(t, 10)] || ''));
          }
          _buildAnchorCache() {
            let e, t, n, r;
            if ('string' != typeof this.source)
              throw Error('This method should only be called if the source is a string');
            let i = [],
              o = [],
              a = [],
              s = [];
            for (e = 0, t = this.source.length; e < t; e++)
              (n = this.source.charAt(e)),
                (i[e] = n),
                (o[e] = n),
                (a[e] = n),
                (s[e] = n),
                '\\' === n &&
                  e + 1 < t &&
                  ('A' === (r = this.source.charAt(e + 1))
                    ? ((i[e + 1] = '￿'), (o[e + 1] = '￿'), (a[e + 1] = 'A'), (s[e + 1] = 'A'))
                    : 'G' === r
                      ? ((i[e + 1] = '￿'), (o[e + 1] = 'G'), (a[e + 1] = '￿'), (s[e + 1] = 'G'))
                      : ((i[e + 1] = r), (o[e + 1] = r), (a[e + 1] = r), (s[e + 1] = r)),
                  e++);
            return { A0_G0: i.join(''), A0_G1: o.join(''), A1_G0: a.join(''), A1_G1: s.join('') };
          }
          resolveAnchors(e, t) {
            if (!this.hasAnchor || !this._anchorCache || 'string' != typeof this.source) return this.source;
            if (e)
              if (t) return this._anchorCache.A1_G1;
              else return this._anchorCache.A1_G0;
            return t ? this._anchorCache.A0_G1 : this._anchorCache.A0_G0;
          }
        },
        Z = class {
          _items;
          _hasAnchors;
          _cached;
          _anchorCache;
          constructor() {
            (this._items = []),
              (this._hasAnchors = !1),
              (this._cached = null),
              (this._anchorCache = { A0_G0: null, A0_G1: null, A1_G0: null, A1_G1: null });
          }
          dispose() {
            this._disposeCaches();
          }
          _disposeCaches() {
            this._cached && (this._cached.dispose(), (this._cached = null)),
              this._anchorCache.A0_G0 && (this._anchorCache.A0_G0.dispose(), (this._anchorCache.A0_G0 = null)),
              this._anchorCache.A0_G1 && (this._anchorCache.A0_G1.dispose(), (this._anchorCache.A0_G1 = null)),
              this._anchorCache.A1_G0 && (this._anchorCache.A1_G0.dispose(), (this._anchorCache.A1_G0 = null)),
              this._anchorCache.A1_G1 && (this._anchorCache.A1_G1.dispose(), (this._anchorCache.A1_G1 = null));
          }
          push(e) {
            this._items.push(e), (this._hasAnchors = this._hasAnchors || e.hasAnchor);
          }
          unshift(e) {
            this._items.unshift(e), (this._hasAnchors = this._hasAnchors || e.hasAnchor);
          }
          length() {
            return this._items.length;
          }
          setSource(e, t) {
            this._items[e].source !== t && (this._disposeCaches(), this._items[e].setSource(t));
          }
          compile(e) {
            if (!this._cached) {
              let t = this._items.map((e) => e.source);
              this._cached = new ee(
                e,
                t,
                this._items.map((e) => e.ruleId)
              );
            }
            return this._cached;
          }
          compileAG(e, t, n) {
            if (!this._hasAnchors) return this.compile(e);
            if (t)
              if (n)
                return (
                  this._anchorCache.A1_G1 || (this._anchorCache.A1_G1 = this._resolveAnchors(e, t, n)),
                  this._anchorCache.A1_G1
                );
              else
                return (
                  this._anchorCache.A1_G0 || (this._anchorCache.A1_G0 = this._resolveAnchors(e, t, n)),
                  this._anchorCache.A1_G0
                );
            return n
              ? (this._anchorCache.A0_G1 || (this._anchorCache.A0_G1 = this._resolveAnchors(e, t, n)),
                this._anchorCache.A0_G1)
              : (this._anchorCache.A0_G0 || (this._anchorCache.A0_G0 = this._resolveAnchors(e, t, n)),
                this._anchorCache.A0_G0);
          }
          _resolveAnchors(e, t, n) {
            return new ee(
              e,
              this._items.map((e) => e.resolveAnchors(t, n)),
              this._items.map((e) => e.ruleId)
            );
          }
        },
        ee = class {
          constructor(e, t, n) {
            (this.regExps = t), (this.rules = n), (this.scanner = e.createOnigScanner(t));
          }
          scanner;
          dispose() {
            'function' == typeof this.scanner.dispose && this.scanner.dispose();
          }
          toString() {
            let e = [];
            for (let t = 0, n = this.rules.length; t < n; t++) e.push('   - ' + this.rules[t] + ': ' + this.regExps[t]);
            return e.join('\n');
          }
          findNextMatchSync(e, t, n) {
            let r = this.scanner.findNextMatchSync(e, t, n);
            return r ? { ruleId: this.rules[r.index], captureIndices: r.captureIndices } : null;
          }
        },
        et = class {
          constructor(e, t) {
            (this.languageId = e), (this.tokenType = t);
          }
        },
        en = class e {
          _defaultAttributes;
          _embeddedLanguagesMatcher;
          constructor(e, t) {
            (this._defaultAttributes = new et(e, 8)),
              (this._embeddedLanguagesMatcher = new er(Object.entries(t || {})));
          }
          getDefaultAttributes() {
            return this._defaultAttributes;
          }
          getBasicScopeAttributes(t) {
            return null === t ? e._NULL_SCOPE_METADATA : this._getBasicScopeAttributes.get(t);
          }
          static _NULL_SCOPE_METADATA = new et(0, 0);
          _getBasicScopeAttributes = new f((e) => new et(this._scopeToLanguage(e), this._toStandardTokenType(e)));
          _scopeToLanguage(e) {
            return this._embeddedLanguagesMatcher.match(e) || 0;
          }
          _toStandardTokenType(t) {
            let n = t.match(e.STANDARD_TOKEN_TYPE_REGEXP);
            if (!n) return 8;
            switch (n[1]) {
              case 'comment':
                return 1;
              case 'string':
                return 2;
              case 'regex':
                return 3;
              case 'meta.embedded':
                return 0;
            }
            throw Error('Unexpected match for standard token type!');
          }
          static STANDARD_TOKEN_TYPE_REGEXP = /\b(comment|string|regex|meta\.embedded)\b/;
        },
        er = class {
          values;
          scopesRegExp;
          constructor(e) {
            if (0 === e.length) (this.values = null), (this.scopesRegExp = null);
            else {
              this.values = new Map(e);
              let t = e.map(([e, t]) => m(e));
              t.sort(), t.reverse(), (this.scopesRegExp = RegExp(`^((${t.join(')|(')}))($|\\.)`, ''));
            }
          }
          match(e) {
            if (!this.scopesRegExp) return;
            let t = e.match(this.scopesRegExp);
            if (t) return this.values.get(t[1]);
          }
        };
      void 0 !== s && s.env.VSCODE_TEXTMATE_DEBUG;
      var ei = class {
        constructor(e, t) {
          (this.stack = e), (this.stoppedEarly = t);
        }
      };
      function eo(e, t, n, r, i, o, a, s) {
        let l = t.content.length,
          u = !1,
          c = -1;
        if (a) {
          let a = (function (e, t, n, r, i, o) {
            let a = i.beginRuleCapturedEOL ? 0 : -1,
              s = [];
            for (let t = i; t; t = t.pop()) {
              let n = t.getRule(e);
              n instanceof X && s.push({ rule: n, stack: t });
            }
            for (let d = s.pop(); d; d = s.pop()) {
              var l, u, c, h, p;
              let { ruleScanner: s, findOptions: m } =
                  ((l = d.rule),
                  (u = e),
                  (c = d.stack.endRule),
                  (h = n),
                  (p = r === a),
                  { ruleScanner: l.compileWhileAG(u, c, h, p), findOptions: 0 }),
                f = s.findNextMatchSync(t, r, m);
              if (f) {
                if (-2 !== f.ruleId) {
                  i = d.stack.pop();
                  break;
                }
                f.captureIndices &&
                  f.captureIndices.length &&
                  (o.produce(d.stack, f.captureIndices[0].start),
                  es(e, t, n, d.stack, o, d.rule.whileCaptures, f.captureIndices),
                  o.produce(d.stack, f.captureIndices[0].end),
                  (a = f.captureIndices[0].end),
                  f.captureIndices[0].end > r && ((r = f.captureIndices[0].end), (n = !1)));
              } else {
                i = d.stack.pop();
                break;
              }
            }
            return { stack: i, linePos: r, anchorPosition: a, isFirstLine: n };
          })(e, t, n, r, i, o);
          (i = a.stack), (r = a.linePos), (n = a.isFirstLine), (c = a.anchorPosition);
        }
        let h = Date.now();
        for (; !u; ) {
          if (0 !== s && Date.now() - h > s) return new ei(i, !0);
          !(function () {
            let a = (function (e, t, n, r, i, o) {
              let a = (function (e, t, n, r, i, o) {
                  let { ruleScanner: a, findOptions: s } = ea(i.getRule(e), e, i.endRule, n, r === o),
                    l = a.findNextMatchSync(t, r, s);
                  return l ? { captureIndices: l.captureIndices, matchedRuleId: l.ruleId } : null;
                })(e, t, n, r, i, o),
                s = e.getInjections();
              if (0 === s.length) return a;
              let l = (function (e, t, n, r, i, o, a) {
                let s,
                  l = Number.MAX_VALUE,
                  u = null,
                  c = 0,
                  h = o.contentNameScopesList.getScopeNames();
                for (let o = 0, p = e.length; o < p; o++) {
                  let p = e[o];
                  if (!p.matcher(h)) continue;
                  let { ruleScanner: d, findOptions: m } = ea(t.getRule(p.ruleId), t, null, r, i === a),
                    f = d.findNextMatchSync(n, i, m);
                  if (!f) continue;
                  let g = f.captureIndices[0].start;
                  if (!(g >= l) && ((l = g), (u = f.captureIndices), (s = f.ruleId), (c = p.priority), l === i)) break;
                }
                return u ? { priorityMatch: -1 === c, captureIndices: u, matchedRuleId: s } : null;
              })(s, e, t, n, r, i, o);
              if (!l) return a;
              if (!a) return l;
              let u = a.captureIndices[0].start,
                c = l.captureIndices[0].start;
              return c < u || (l.priorityMatch && c === u) ? l : a;
            })(e, t, n, r, i, c);
            if (!a) {
              o.produce(i, l), (u = !0);
              return;
            }
            let s = a.captureIndices,
              h = a.matchedRuleId,
              p = !!s && s.length > 0 && s[0].end > r;
            if (-1 === h) {
              let a = i.getRule(e);
              o.produce(i, s[0].start),
                (i = i.withContentNameScopesList(i.nameScopesList)),
                es(e, t, n, i, o, a.endCaptures, s),
                o.produce(i, s[0].end);
              let h = i;
              if (((i = i.parent), (c = h.getAnchorPos()), !p && h.getEnterPos() === r)) {
                (i = h), o.produce(i, l), (u = !0);
                return;
              }
            } else {
              let a = e.getRule(h);
              o.produce(i, s[0].start);
              let d = i,
                m = a.getName(t.content, s),
                f = i.contentNameScopesList.pushAttributed(m, e);
              if (((i = i.push(h, r, c, s[0].end === l, null, f, f)), a instanceof K)) {
                es(e, t, n, i, o, a.beginCaptures, s), o.produce(i, s[0].end), (c = s[0].end);
                let r = a.getContentName(t.content, s),
                  h = f.pushAttributed(r, e);
                if (
                  ((i = i.withContentNameScopesList(h)),
                  a.endHasBackReferences && (i = i.withEndRule(a.getEndWithResolvedBackReferences(t.content, s))),
                  !p && d.hasSameRuleAs(i))
                ) {
                  (i = i.pop()), o.produce(i, l), (u = !0);
                  return;
                }
              } else if (a instanceof X) {
                es(e, t, n, i, o, a.beginCaptures, s), o.produce(i, s[0].end), (c = s[0].end);
                let r = a.getContentName(t.content, s),
                  h = f.pushAttributed(r, e);
                if (
                  ((i = i.withContentNameScopesList(h)),
                  a.whileHasBackReferences && (i = i.withEndRule(a.getWhileWithResolvedBackReferences(t.content, s))),
                  !p && d.hasSameRuleAs(i))
                ) {
                  (i = i.pop()), o.produce(i, l), (u = !0);
                  return;
                }
              } else if ((es(e, t, n, i, o, a.captures, s), o.produce(i, s[0].end), (i = i.pop()), !p)) {
                (i = i.safePop()), o.produce(i, l), (u = !0);
                return;
              }
            }
            s[0].end > r && ((r = s[0].end), (n = !1));
          })();
        }
        return new ei(i, !1);
      }
      function ea(e, t, n, r, i) {
        return { ruleScanner: e.compileAG(t, n, r, i), findOptions: 0 };
      }
      function es(e, t, n, r, i, o, a) {
        if (0 === o.length) return;
        let s = t.content,
          l = Math.min(o.length, a.length),
          u = [],
          c = a[0].end;
        for (let t = 0; t < l; t++) {
          let l = o[t];
          if (null === l) continue;
          let h = a[t];
          if (0 === h.length) continue;
          if (h.start > c) break;
          for (; u.length > 0 && u[u.length - 1].endPos <= h.start; )
            i.produceFromScopes(u[u.length - 1].scopes, u[u.length - 1].endPos), u.pop();
          if (
            (u.length > 0 ? i.produceFromScopes(u[u.length - 1].scopes, h.start) : i.produce(r, h.start),
            l.retokenizeCapturedWithRuleId)
          ) {
            let t = l.getName(s, a),
              o = r.contentNameScopesList.pushAttributed(t, e),
              u = l.getContentName(s, a),
              c = o.pushAttributed(u, e),
              p = r.push(l.retokenizeCapturedWithRuleId, h.start, -1, !1, null, o, c),
              d = e.createOnigString(s.substring(0, h.end));
            eo(e, d, n && 0 === h.start, h.start, p, i, !1, 0), x(d);
            continue;
          }
          let p = l.getName(s, a);
          if (null !== p) {
            let t = (u.length > 0 ? u[u.length - 1].scopes : r.contentNameScopesList).pushAttributed(p, e);
            u.push(new el(t, h.end));
          }
        }
        for (; u.length > 0; ) i.produceFromScopes(u[u.length - 1].scopes, u[u.length - 1].endPos), u.pop();
      }
      var el = class {
        scopes;
        endPos;
        constructor(e, t) {
          (this.scopes = e), (this.endPos = t);
        }
      };
      function eu(e, t, n, r, i) {
        let o = T(t, ec),
          a = J.getCompiledRuleId(n, r, i.repository);
        for (let n of o) e.push({ debugSelector: t, matcher: n.matcher, ruleId: a, grammar: i, priority: n.priority });
      }
      function ec(e, t) {
        if (t.length < e.length) return !1;
        let n = 0;
        return e.every((e) => {
          for (let r = n; r < t.length; r++)
            if (
              (function (e, t) {
                if (!e) return !1;
                if (e === t) return !0;
                let n = t.length;
                return e.length > n && e.substr(0, n) === t && '.' === e[n];
              })(t[r], e)
            )
              return (n = r + 1), !0;
          return !1;
        });
      }
      var eh = class {
        constructor(e, t, n, r, i, o, a, s) {
          if (
            ((this._rootScopeName = e),
            (this.balancedBracketSelectors = o),
            (this._onigLib = s),
            (this._basicScopeAttributesProvider = new en(n, r)),
            (this._rootId = -1),
            (this._lastRuleId = 0),
            (this._ruleId2desc = [null]),
            (this._includedGrammars = {}),
            (this._grammarRepository = a),
            (this._grammar = ep(t, null)),
            (this._injections = null),
            (this._tokenTypeMatchers = []),
            i)
          )
            for (let e of Object.keys(i))
              for (let t of T(e, ec)) this._tokenTypeMatchers.push({ matcher: t.matcher, type: i[e] });
        }
        _rootId;
        _lastRuleId;
        _ruleId2desc;
        _includedGrammars;
        _grammarRepository;
        _grammar;
        _injections;
        _basicScopeAttributesProvider;
        _tokenTypeMatchers;
        get themeProvider() {
          return this._grammarRepository;
        }
        dispose() {
          for (let e of this._ruleId2desc) e && e.dispose();
        }
        createOnigScanner(e) {
          return this._onigLib.createOnigScanner(e);
        }
        createOnigString(e) {
          return this._onigLib.createOnigString(e);
        }
        getMetadataForScope(e) {
          return this._basicScopeAttributesProvider.getBasicScopeAttributes(e);
        }
        _collectInjections() {
          let e = [],
            t = this._rootScopeName,
            n = {
              lookup: (e) => (e === this._rootScopeName ? this._grammar : this.getExternalGrammar(e)),
              injections: (e) => this._grammarRepository.injections(e),
            }.lookup(t);
          if (n) {
            let r = n.injections;
            if (r) for (let t in r) eu(e, t, r[t], this, n);
            let i = this._grammarRepository.injections(t);
            i &&
              i.forEach((t) => {
                let n = this.getExternalGrammar(t);
                if (n) {
                  let t = n.injectionSelector;
                  t && eu(e, t, n, this, n);
                }
              });
          }
          return e.sort((e, t) => e.priority - t.priority), e;
        }
        getInjections() {
          return null === this._injections && (this._injections = this._collectInjections()), this._injections;
        }
        registerRule(e) {
          let t = ++this._lastRuleId,
            n = e(t);
          return (this._ruleId2desc[t] = n), n;
        }
        getRule(e) {
          return this._ruleId2desc[e];
        }
        getExternalGrammar(e, t) {
          if (this._includedGrammars[e]) return this._includedGrammars[e];
          if (this._grammarRepository) {
            let n = this._grammarRepository.lookup(e);
            if (n) return (this._includedGrammars[e] = ep(n, t && t.$base)), this._includedGrammars[e];
          }
        }
        tokenizeLine(e, t, n = 0) {
          let r = this._tokenize(e, t, !1, n);
          return {
            tokens: r.lineTokens.getResult(r.ruleStack, r.lineLength),
            ruleStack: r.ruleStack,
            stoppedEarly: r.stoppedEarly,
          };
        }
        tokenizeLine2(e, t, n = 0) {
          let r = this._tokenize(e, t, !0, n);
          return {
            tokens: r.lineTokens.getBinaryResult(r.ruleStack, r.lineLength),
            ruleStack: r.ruleStack,
            stoppedEarly: r.stoppedEarly,
          };
        }
        _tokenize(e, t, n, r) {
          let i;
          if (
            (-1 === this._rootId &&
              ((this._rootId = J.getCompiledRuleId(this._grammar.repository.$self, this, this._grammar.repository)),
              this.getInjections()),
            t && t !== em.NULL)
          )
            (i = !1), t.reset();
          else {
            let e;
            i = !0;
            let n = this._basicScopeAttributesProvider.getDefaultAttributes(),
              r = this.themeProvider.getDefaults(),
              o = A.set(0, n.languageId, n.tokenType, null, r.fontStyle, r.foregroundId, r.backgroundId),
              a = this.getRule(this._rootId).getName(null, null);
            (e = a ? ed.createRootAndLookUpScopeName(a, o, this) : ed.createRoot('unknown', o)),
              (t = new em(null, this._rootId, -1, -1, !1, null, e, e));
          }
          e += '\n';
          let o = this.createOnigString(e),
            a = o.content.length,
            s = new eg(n, e, this._tokenTypeMatchers, this.balancedBracketSelectors),
            l = eo(this, o, i, 0, t, s, !0, r);
          return x(o), { lineLength: a, lineTokens: s, ruleStack: l.stack, stoppedEarly: l.stoppedEarly };
        }
      };
      function ep(e, t) {
        return (
          ((e = (function e(t) {
            return Array.isArray(t)
              ? (function (t) {
                  let n = [];
                  for (let r = 0, i = t.length; r < i; r++) n[r] = e(t[r]);
                  return n;
                })(t)
              : t instanceof RegExp
                ? t
                : 'object' == typeof t
                  ? (function (t) {
                      let n = {};
                      for (let r in t) n[r] = e(t[r]);
                      return n;
                    })(t)
                  : t;
          })(e)).repository = e.repository || {}),
          (e.repository.$self = {
            $vscodeTextmateLocation: e.$vscodeTextmateLocation,
            patterns: e.patterns,
            name: e.scopeName,
          }),
          (e.repository.$base = t || e.repository.$self),
          e
        );
      }
      var ed = class e {
          constructor(e, t, n) {
            (this.parent = e), (this.scopePath = t), (this.tokenAttributes = n);
          }
          static fromExtension(t, n) {
            let r = t,
              i = t?.scopePath ?? null;
            for (let t of n) r = new e(r, (i = y.push(i, t.scopeNames)), t.encodedTokenAttributes);
            return r;
          }
          static createRoot(t, n) {
            return new e(null, new y(null, t), n);
          }
          static createRootAndLookUpScopeName(t, n, r) {
            let i = r.getMetadataForScope(t),
              o = new y(null, t),
              a = r.themeProvider.themeMatch(o),
              s = e.mergeAttributes(n, i, a);
            return new e(null, o, s);
          }
          get scopeName() {
            return this.scopePath.scopeName;
          }
          toString() {
            return this.getScopeNames().join(' ');
          }
          equals(t) {
            return e.equals(this, t);
          }
          static equals(e, t) {
            for (;;) {
              if (e === t || (!e && !t)) return !0;
              if (!e || !t || e.scopeName !== t.scopeName || e.tokenAttributes !== t.tokenAttributes) return !1;
              (e = e.parent), (t = t.parent);
            }
          }
          static mergeAttributes(e, t, n) {
            let r = -1,
              i = 0,
              o = 0;
            return (
              null !== n && ((r = n.fontStyle), (i = n.foregroundId), (o = n.backgroundId)),
              A.set(e, t.languageId, t.tokenType, null, r, i, o)
            );
          }
          pushAttributed(t, n) {
            if (null === t) return this;
            if (-1 === t.indexOf(' ')) return e._pushAttributed(this, t, n);
            let r = t.split(/ /g),
              i = this;
            for (let t of r) i = e._pushAttributed(i, t, n);
            return i;
          }
          static _pushAttributed(t, n, r) {
            let i = r.getMetadataForScope(n),
              o = t.scopePath.push(n),
              a = r.themeProvider.themeMatch(o),
              s = e.mergeAttributes(t.tokenAttributes, i, a);
            return new e(t, o, s);
          }
          getScopeNames() {
            return this.scopePath.getSegments();
          }
          getExtensionIfDefined(e) {
            let t = [],
              n = this;
            for (; n && n !== e; )
              t.push({
                encodedTokenAttributes: n.tokenAttributes,
                scopeNames: n.scopePath.getExtensionIfDefined(n.parent?.scopePath ?? null),
              }),
                (n = n.parent);
            return n === e ? t.reverse() : void 0;
          }
        },
        em = class e {
          constructor(e, t, n, r, i, o, a, s) {
            (this.parent = e),
              (this.ruleId = t),
              (this.beginRuleCapturedEOL = i),
              (this.endRule = o),
              (this.nameScopesList = a),
              (this.contentNameScopesList = s),
              (this.depth = this.parent ? this.parent.depth + 1 : 1),
              (this._enterPos = n),
              (this._anchorPos = r);
          }
          _stackElementBrand = void 0;
          static NULL = new e(null, 0, 0, 0, !1, null, null, null);
          _enterPos;
          _anchorPos;
          depth;
          equals(t) {
            return null !== t && e._equals(this, t);
          }
          static _equals(e, t) {
            return (
              e === t || (!!this._structuralEquals(e, t) && ed.equals(e.contentNameScopesList, t.contentNameScopesList))
            );
          }
          static _structuralEquals(e, t) {
            for (;;) {
              if (e === t || (!e && !t)) return !0;
              if (!e || !t || e.depth !== t.depth || e.ruleId !== t.ruleId || e.endRule !== t.endRule) return !1;
              (e = e.parent), (t = t.parent);
            }
          }
          clone() {
            return this;
          }
          static _reset(e) {
            for (; e; ) (e._enterPos = -1), (e._anchorPos = -1), (e = e.parent);
          }
          reset() {
            e._reset(this);
          }
          pop() {
            return this.parent;
          }
          safePop() {
            return this.parent ? this.parent : this;
          }
          push(t, n, r, i, o, a, s) {
            return new e(this, t, n, r, i, o, a, s);
          }
          getEnterPos() {
            return this._enterPos;
          }
          getAnchorPos() {
            return this._anchorPos;
          }
          getRule(e) {
            return e.getRule(this.ruleId);
          }
          toString() {
            let e = [];
            return this._writeString(e, 0), '[' + e.join(',') + ']';
          }
          _writeString(e, t) {
            return (
              this.parent && (t = this.parent._writeString(e, t)),
              (e[t++] =
                `(${this.ruleId}, ${this.nameScopesList?.toString()}, ${this.contentNameScopesList?.toString()})`),
              t
            );
          }
          withContentNameScopesList(e) {
            return this.contentNameScopesList === e
              ? this
              : this.parent.push(
                  this.ruleId,
                  this._enterPos,
                  this._anchorPos,
                  this.beginRuleCapturedEOL,
                  this.endRule,
                  this.nameScopesList,
                  e
                );
          }
          withEndRule(t) {
            return this.endRule === t
              ? this
              : new e(
                  this.parent,
                  this.ruleId,
                  this._enterPos,
                  this._anchorPos,
                  this.beginRuleCapturedEOL,
                  t,
                  this.nameScopesList,
                  this.contentNameScopesList
                );
          }
          hasSameRuleAs(e) {
            let t = this;
            for (; t && t._enterPos === e._enterPos; ) {
              if (t.ruleId === e.ruleId) return !0;
              t = t.parent;
            }
            return !1;
          }
          toStateStackFrame() {
            return {
              ruleId: this.ruleId,
              beginRuleCapturedEOL: this.beginRuleCapturedEOL,
              endRule: this.endRule,
              nameScopesList: this.nameScopesList?.getExtensionIfDefined(this.parent?.nameScopesList ?? null) ?? [],
              contentNameScopesList: this.contentNameScopesList?.getExtensionIfDefined(this.nameScopesList) ?? [],
            };
          }
          static pushFrame(t, n) {
            let r = ed.fromExtension(t?.nameScopesList ?? null, n.nameScopesList);
            return new e(
              t,
              n.ruleId,
              n.enterPos ?? -1,
              n.anchorPos ?? -1,
              n.beginRuleCapturedEOL,
              n.endRule,
              r,
              ed.fromExtension(r, n.contentNameScopesList)
            );
          }
        },
        ef = class {
          balancedBracketScopes;
          unbalancedBracketScopes;
          allowAny = !1;
          constructor(e, t) {
            (this.balancedBracketScopes = e.flatMap((e) =>
              '*' === e ? ((this.allowAny = !0), []) : T(e, ec).map((e) => e.matcher)
            )),
              (this.unbalancedBracketScopes = t.flatMap((e) => T(e, ec).map((e) => e.matcher)));
          }
          get matchesAlways() {
            return this.allowAny && 0 === this.unbalancedBracketScopes.length;
          }
          get matchesNever() {
            return 0 === this.balancedBracketScopes.length && !this.allowAny;
          }
          match(e) {
            for (let t of this.unbalancedBracketScopes) if (t(e)) return !1;
            for (let t of this.balancedBracketScopes) if (t(e)) return !0;
            return this.allowAny;
          }
        },
        eg = class {
          constructor(e, t, n, r) {
            (this.balancedBracketSelectors = r),
              (this._emitBinaryTokens = e),
              (this._tokenTypeOverrides = n),
              (this._lineText = null),
              (this._tokens = []),
              (this._binaryTokens = []),
              (this._lastTokenEndIndex = 0);
          }
          _emitBinaryTokens;
          _lineText;
          _tokens;
          _binaryTokens;
          _lastTokenEndIndex;
          _tokenTypeOverrides;
          produce(e, t) {
            this.produceFromScopes(e.contentNameScopesList, t);
          }
          produceFromScopes(e, t) {
            if (this._lastTokenEndIndex >= t) return;
            if (this._emitBinaryTokens) {
              let n = e?.tokenAttributes ?? 0,
                r = !1;
              if (
                (this.balancedBracketSelectors?.matchesAlways && (r = !0),
                this._tokenTypeOverrides.length > 0 ||
                  (this.balancedBracketSelectors &&
                    !this.balancedBracketSelectors.matchesAlways &&
                    !this.balancedBracketSelectors.matchesNever))
              ) {
                let t = e?.getScopeNames() ?? [];
                for (let e of this._tokenTypeOverrides) e.matcher(t) && (n = A.set(n, 0, e.type, null, -1, 0, 0));
                this.balancedBracketSelectors && (r = this.balancedBracketSelectors.match(t));
              }
              if (
                (r && (n = A.set(n, 0, 8, r, -1, 0, 0)),
                this._binaryTokens.length > 0 && this._binaryTokens[this._binaryTokens.length - 1] === n)
              ) {
                this._lastTokenEndIndex = t;
                return;
              }
              this._binaryTokens.push(this._lastTokenEndIndex),
                this._binaryTokens.push(n),
                (this._lastTokenEndIndex = t);
              return;
            }
            let n = e?.getScopeNames() ?? [];
            this._tokens.push({ startIndex: this._lastTokenEndIndex, endIndex: t, scopes: n }),
              (this._lastTokenEndIndex = t);
          }
          getResult(e, t) {
            return (
              this._tokens.length > 0 &&
                this._tokens[this._tokens.length - 1].startIndex === t - 1 &&
                this._tokens.pop(),
              0 === this._tokens.length &&
                ((this._lastTokenEndIndex = -1),
                this.produce(e, t),
                (this._tokens[this._tokens.length - 1].startIndex = 0)),
              this._tokens
            );
          }
          getBinaryResult(e, t) {
            this._binaryTokens.length > 0 &&
              this._binaryTokens[this._binaryTokens.length - 2] === t - 1 &&
              (this._binaryTokens.pop(), this._binaryTokens.pop()),
              0 === this._binaryTokens.length &&
                ((this._lastTokenEndIndex = -1),
                this.produce(e, t),
                (this._binaryTokens[this._binaryTokens.length - 2] = 0));
            let n = new Uint32Array(this._binaryTokens.length);
            for (let e = 0, t = this._binaryTokens.length; e < t; e++) n[e] = this._binaryTokens[e];
            return n;
          }
        },
        ey = class {
          constructor(e, t) {
            (this._onigLib = t), (this._theme = e);
          }
          _grammars = new Map();
          _rawGrammars = new Map();
          _injectionGrammars = new Map();
          _theme;
          dispose() {
            for (let e of this._grammars.values()) e.dispose();
          }
          setTheme(e) {
            this._theme = e;
          }
          getColorMap() {
            return this._theme.getColorMap();
          }
          addGrammar(e, t) {
            this._rawGrammars.set(e.scopeName, e), t && this._injectionGrammars.set(e.scopeName, t);
          }
          lookup(e) {
            return this._rawGrammars.get(e);
          }
          injections(e) {
            return this._injectionGrammars.get(e);
          }
          getDefaults() {
            return this._theme.getDefaults();
          }
          themeMatch(e) {
            return this._theme.match(e);
          }
          grammarForScopeName(e, t, n, r, i) {
            if (!this._grammars.has(e)) {
              let o = this._rawGrammars.get(e);
              if (!o) return null;
              this._grammars.set(e, new eh(e, o, t, n, r, i, this, this._onigLib));
            }
            return this._grammars.get(e);
          }
        },
        eb = class {
          _options;
          _syncRegistry;
          _ensureGrammarCache;
          constructor(e) {
            (this._options = e),
              (this._syncRegistry = new ey(g.createFromRawTheme(e.theme, e.colorMap), e.onigLib)),
              (this._ensureGrammarCache = new Map());
          }
          dispose() {
            this._syncRegistry.dispose();
          }
          setTheme(e, t) {
            this._syncRegistry.setTheme(g.createFromRawTheme(e, t));
          }
          getColorMap() {
            return this._syncRegistry.getColorMap();
          }
          loadGrammarWithEmbeddedLanguages(e, t, n) {
            return this.loadGrammarWithConfiguration(e, t, { embeddedLanguages: n });
          }
          loadGrammarWithConfiguration(e, t, n) {
            return this._loadGrammar(
              e,
              t,
              n.embeddedLanguages,
              n.tokenTypes,
              new ef(n.balancedBracketSelectors || [], n.unbalancedBracketSelectors || [])
            );
          }
          loadGrammar(e) {
            return this._loadGrammar(e, 0, null, null, null);
          }
          _loadGrammar(e, t, n, r, i) {
            let o = new O(this._syncRegistry, e);
            for (; o.Q.length > 0; ) o.Q.map((e) => this._loadSingleGrammar(e.scopeName)), o.processQueue();
            return this._grammarForScopeName(e, t, n, r, i);
          }
          _loadSingleGrammar(e) {
            this._ensureGrammarCache.has(e) || (this._doLoadSingleGrammar(e), this._ensureGrammarCache.set(e, !0));
          }
          _doLoadSingleGrammar(e) {
            let t = this._options.loadGrammar(e);
            if (t) {
              let n = 'function' == typeof this._options.getInjections ? this._options.getInjections(e) : void 0;
              this._syncRegistry.addGrammar(t, n);
            }
          }
          addGrammar(e, t = [], n = 0, r = null) {
            return this._syncRegistry.addGrammar(e, t), this._grammarForScopeName(e.scopeName, n, r);
          }
          _grammarForScopeName(e, t = 0, n = null, r = null, i = null) {
            return this._syncRegistry.grammarForScopeName(e, t, n, r, i);
          }
        },
        e_ = em.NULL;
      let ev = [
        'area',
        'base',
        'basefont',
        'bgsound',
        'br',
        'col',
        'command',
        'embed',
        'frame',
        'hr',
        'image',
        'img',
        'input',
        'keygen',
        'link',
        'meta',
        'param',
        'source',
        'track',
        'wbr',
      ];
      class eS {
        constructor(e, t, n) {
          (this.normal = t), (this.property = e), n && (this.space = n);
        }
      }
      function ek(e, t) {
        let n = {},
          r = {};
        for (let t of e) Object.assign(n, t.property), Object.assign(r, t.normal);
        return new eS(n, r, t);
      }
      function ew(e) {
        return e.toLowerCase();
      }
      (eS.prototype.normal = {}), (eS.prototype.property = {}), (eS.prototype.space = void 0);
      class eC {
        constructor(e, t) {
          (this.attribute = t), (this.property = e);
        }
      }
      (eC.prototype.attribute = ''),
        (eC.prototype.booleanish = !1),
        (eC.prototype.boolean = !1),
        (eC.prototype.commaOrSpaceSeparated = !1),
        (eC.prototype.commaSeparated = !1),
        (eC.prototype.defined = !1),
        (eC.prototype.mustUseProperty = !1),
        (eC.prototype.number = !1),
        (eC.prototype.overloadedBoolean = !1),
        (eC.prototype.property = ''),
        (eC.prototype.spaceSeparated = !1),
        (eC.prototype.space = void 0);
      let eA = 0,
        eT = eO(),
        eN = eO(),
        eE = eO(),
        ex = eO(),
        eP = eO(),
        eL = eO(),
        eR = eO();
      function eO() {
        return 2 ** ++eA;
      }
      let eI = Object.keys(o);
      class eM extends eC {
        constructor(e, t, n, r) {
          let i = -1;
          if (
            (super(e, t),
            (function (e, t, n) {
              n && (e[t] = n);
            })(this, 'space', r),
            'number' == typeof n)
          )
            for (; ++i < eI.length; ) {
              let e = eI[i];
              !(function (e, t, n) {
                n && (e[t] = n);
              })(this, eI[i], (n & o[e]) === o[e]);
            }
        }
      }
      function eD(e) {
        let t = {},
          n = {};
        for (let [r, i] of Object.entries(e.properties)) {
          let o = new eM(r, e.transform(e.attributes || {}, r), i, e.space);
          e.mustUseProperty && e.mustUseProperty.includes(r) && (o.mustUseProperty = !0),
            (t[r] = o),
            (n[ew(r)] = r),
            (n[ew(o.attribute)] = r);
        }
        return new eS(t, n, e.space);
      }
      eM.prototype.defined = !0;
      let eB = eD({
        properties: {
          ariaActiveDescendant: null,
          ariaAtomic: eN,
          ariaAutoComplete: null,
          ariaBusy: eN,
          ariaChecked: eN,
          ariaColCount: ex,
          ariaColIndex: ex,
          ariaColSpan: ex,
          ariaControls: eP,
          ariaCurrent: null,
          ariaDescribedBy: eP,
          ariaDetails: null,
          ariaDisabled: eN,
          ariaDropEffect: eP,
          ariaErrorMessage: null,
          ariaExpanded: eN,
          ariaFlowTo: eP,
          ariaGrabbed: eN,
          ariaHasPopup: null,
          ariaHidden: eN,
          ariaInvalid: null,
          ariaKeyShortcuts: null,
          ariaLabel: null,
          ariaLabelledBy: eP,
          ariaLevel: ex,
          ariaLive: null,
          ariaModal: eN,
          ariaMultiLine: eN,
          ariaMultiSelectable: eN,
          ariaOrientation: null,
          ariaOwns: eP,
          ariaPlaceholder: null,
          ariaPosInSet: ex,
          ariaPressed: eN,
          ariaReadOnly: eN,
          ariaRelevant: null,
          ariaRequired: eN,
          ariaRoleDescription: eP,
          ariaRowCount: ex,
          ariaRowIndex: ex,
          ariaRowSpan: ex,
          ariaSelected: eN,
          ariaSetSize: ex,
          ariaSort: null,
          ariaValueMax: ex,
          ariaValueMin: ex,
          ariaValueNow: ex,
          ariaValueText: null,
          role: null,
        },
        transform: (e, t) => ('role' === t ? t : 'aria-' + t.slice(4).toLowerCase()),
      });
      function eU(e, t) {
        return t in e ? e[t] : t;
      }
      function eG(e, t) {
        return eU(e, t.toLowerCase());
      }
      let ej = eD({
          attributes: { acceptcharset: 'accept-charset', classname: 'class', htmlfor: 'for', httpequiv: 'http-equiv' },
          mustUseProperty: ['checked', 'multiple', 'muted', 'selected'],
          properties: {
            abbr: null,
            accept: eL,
            acceptCharset: eP,
            accessKey: eP,
            action: null,
            allow: null,
            allowFullScreen: eT,
            allowPaymentRequest: eT,
            allowUserMedia: eT,
            alt: null,
            as: null,
            async: eT,
            autoCapitalize: null,
            autoComplete: eP,
            autoFocus: eT,
            autoPlay: eT,
            blocking: eP,
            capture: null,
            charSet: null,
            checked: eT,
            cite: null,
            className: eP,
            cols: ex,
            colSpan: null,
            content: null,
            contentEditable: eN,
            controls: eT,
            controlsList: eP,
            coords: ex | eL,
            crossOrigin: null,
            data: null,
            dateTime: null,
            decoding: null,
            default: eT,
            defer: eT,
            dir: null,
            dirName: null,
            disabled: eT,
            download: eE,
            draggable: eN,
            encType: null,
            enterKeyHint: null,
            fetchPriority: null,
            form: null,
            formAction: null,
            formEncType: null,
            formMethod: null,
            formNoValidate: eT,
            formTarget: null,
            headers: eP,
            height: ex,
            hidden: eE,
            high: ex,
            href: null,
            hrefLang: null,
            htmlFor: eP,
            httpEquiv: eP,
            id: null,
            imageSizes: null,
            imageSrcSet: null,
            inert: eT,
            inputMode: null,
            integrity: null,
            is: null,
            isMap: eT,
            itemId: null,
            itemProp: eP,
            itemRef: eP,
            itemScope: eT,
            itemType: eP,
            kind: null,
            label: null,
            lang: null,
            language: null,
            list: null,
            loading: null,
            loop: eT,
            low: ex,
            manifest: null,
            max: null,
            maxLength: ex,
            media: null,
            method: null,
            min: null,
            minLength: ex,
            multiple: eT,
            muted: eT,
            name: null,
            nonce: null,
            noModule: eT,
            noValidate: eT,
            onAbort: null,
            onAfterPrint: null,
            onAuxClick: null,
            onBeforeMatch: null,
            onBeforePrint: null,
            onBeforeToggle: null,
            onBeforeUnload: null,
            onBlur: null,
            onCancel: null,
            onCanPlay: null,
            onCanPlayThrough: null,
            onChange: null,
            onClick: null,
            onClose: null,
            onContextLost: null,
            onContextMenu: null,
            onContextRestored: null,
            onCopy: null,
            onCueChange: null,
            onCut: null,
            onDblClick: null,
            onDrag: null,
            onDragEnd: null,
            onDragEnter: null,
            onDragExit: null,
            onDragLeave: null,
            onDragOver: null,
            onDragStart: null,
            onDrop: null,
            onDurationChange: null,
            onEmptied: null,
            onEnded: null,
            onError: null,
            onFocus: null,
            onFormData: null,
            onHashChange: null,
            onInput: null,
            onInvalid: null,
            onKeyDown: null,
            onKeyPress: null,
            onKeyUp: null,
            onLanguageChange: null,
            onLoad: null,
            onLoadedData: null,
            onLoadedMetadata: null,
            onLoadEnd: null,
            onLoadStart: null,
            onMessage: null,
            onMessageError: null,
            onMouseDown: null,
            onMouseEnter: null,
            onMouseLeave: null,
            onMouseMove: null,
            onMouseOut: null,
            onMouseOver: null,
            onMouseUp: null,
            onOffline: null,
            onOnline: null,
            onPageHide: null,
            onPageShow: null,
            onPaste: null,
            onPause: null,
            onPlay: null,
            onPlaying: null,
            onPopState: null,
            onProgress: null,
            onRateChange: null,
            onRejectionHandled: null,
            onReset: null,
            onResize: null,
            onScroll: null,
            onScrollEnd: null,
            onSecurityPolicyViolation: null,
            onSeeked: null,
            onSeeking: null,
            onSelect: null,
            onSlotChange: null,
            onStalled: null,
            onStorage: null,
            onSubmit: null,
            onSuspend: null,
            onTimeUpdate: null,
            onToggle: null,
            onUnhandledRejection: null,
            onUnload: null,
            onVolumeChange: null,
            onWaiting: null,
            onWheel: null,
            open: eT,
            optimum: ex,
            pattern: null,
            ping: eP,
            placeholder: null,
            playsInline: eT,
            popover: null,
            popoverTarget: null,
            popoverTargetAction: null,
            poster: null,
            preload: null,
            readOnly: eT,
            referrerPolicy: null,
            rel: eP,
            required: eT,
            reversed: eT,
            rows: ex,
            rowSpan: ex,
            sandbox: eP,
            scope: null,
            scoped: eT,
            seamless: eT,
            selected: eT,
            shadowRootClonable: eT,
            shadowRootDelegatesFocus: eT,
            shadowRootMode: null,
            shape: null,
            size: ex,
            sizes: null,
            slot: null,
            span: ex,
            spellCheck: eN,
            src: null,
            srcDoc: null,
            srcLang: null,
            srcSet: null,
            start: ex,
            step: null,
            style: null,
            tabIndex: ex,
            target: null,
            title: null,
            translate: null,
            type: null,
            typeMustMatch: eT,
            useMap: null,
            value: eN,
            width: ex,
            wrap: null,
            writingSuggestions: null,
            align: null,
            aLink: null,
            archive: eP,
            axis: null,
            background: null,
            bgColor: null,
            border: ex,
            borderColor: null,
            bottomMargin: ex,
            cellPadding: null,
            cellSpacing: null,
            char: null,
            charOff: null,
            classId: null,
            clear: null,
            code: null,
            codeBase: null,
            codeType: null,
            color: null,
            compact: eT,
            declare: eT,
            event: null,
            face: null,
            frame: null,
            frameBorder: null,
            hSpace: ex,
            leftMargin: ex,
            link: null,
            longDesc: null,
            lowSrc: null,
            marginHeight: ex,
            marginWidth: ex,
            noResize: eT,
            noHref: eT,
            noShade: eT,
            noWrap: eT,
            object: null,
            profile: null,
            prompt: null,
            rev: null,
            rightMargin: ex,
            rules: null,
            scheme: null,
            scrolling: eN,
            standby: null,
            summary: null,
            text: null,
            topMargin: ex,
            valueType: null,
            version: null,
            vAlign: null,
            vLink: null,
            vSpace: ex,
            allowTransparency: null,
            autoCorrect: null,
            autoSave: null,
            disablePictureInPicture: eT,
            disableRemotePlayback: eT,
            prefix: null,
            property: null,
            results: ex,
            security: null,
            unselectable: null,
          },
          space: 'html',
          transform: eG,
        }),
        eF = eD({
          attributes: {
            accentHeight: 'accent-height',
            alignmentBaseline: 'alignment-baseline',
            arabicForm: 'arabic-form',
            baselineShift: 'baseline-shift',
            capHeight: 'cap-height',
            className: 'class',
            clipPath: 'clip-path',
            clipRule: 'clip-rule',
            colorInterpolation: 'color-interpolation',
            colorInterpolationFilters: 'color-interpolation-filters',
            colorProfile: 'color-profile',
            colorRendering: 'color-rendering',
            crossOrigin: 'crossorigin',
            dataType: 'datatype',
            dominantBaseline: 'dominant-baseline',
            enableBackground: 'enable-background',
            fillOpacity: 'fill-opacity',
            fillRule: 'fill-rule',
            floodColor: 'flood-color',
            floodOpacity: 'flood-opacity',
            fontFamily: 'font-family',
            fontSize: 'font-size',
            fontSizeAdjust: 'font-size-adjust',
            fontStretch: 'font-stretch',
            fontStyle: 'font-style',
            fontVariant: 'font-variant',
            fontWeight: 'font-weight',
            glyphName: 'glyph-name',
            glyphOrientationHorizontal: 'glyph-orientation-horizontal',
            glyphOrientationVertical: 'glyph-orientation-vertical',
            hrefLang: 'hreflang',
            horizAdvX: 'horiz-adv-x',
            horizOriginX: 'horiz-origin-x',
            horizOriginY: 'horiz-origin-y',
            imageRendering: 'image-rendering',
            letterSpacing: 'letter-spacing',
            lightingColor: 'lighting-color',
            markerEnd: 'marker-end',
            markerMid: 'marker-mid',
            markerStart: 'marker-start',
            navDown: 'nav-down',
            navDownLeft: 'nav-down-left',
            navDownRight: 'nav-down-right',
            navLeft: 'nav-left',
            navNext: 'nav-next',
            navPrev: 'nav-prev',
            navRight: 'nav-right',
            navUp: 'nav-up',
            navUpLeft: 'nav-up-left',
            navUpRight: 'nav-up-right',
            onAbort: 'onabort',
            onActivate: 'onactivate',
            onAfterPrint: 'onafterprint',
            onBeforePrint: 'onbeforeprint',
            onBegin: 'onbegin',
            onCancel: 'oncancel',
            onCanPlay: 'oncanplay',
            onCanPlayThrough: 'oncanplaythrough',
            onChange: 'onchange',
            onClick: 'onclick',
            onClose: 'onclose',
            onCopy: 'oncopy',
            onCueChange: 'oncuechange',
            onCut: 'oncut',
            onDblClick: 'ondblclick',
            onDrag: 'ondrag',
            onDragEnd: 'ondragend',
            onDragEnter: 'ondragenter',
            onDragExit: 'ondragexit',
            onDragLeave: 'ondragleave',
            onDragOver: 'ondragover',
            onDragStart: 'ondragstart',
            onDrop: 'ondrop',
            onDurationChange: 'ondurationchange',
            onEmptied: 'onemptied',
            onEnd: 'onend',
            onEnded: 'onended',
            onError: 'onerror',
            onFocus: 'onfocus',
            onFocusIn: 'onfocusin',
            onFocusOut: 'onfocusout',
            onHashChange: 'onhashchange',
            onInput: 'oninput',
            onInvalid: 'oninvalid',
            onKeyDown: 'onkeydown',
            onKeyPress: 'onkeypress',
            onKeyUp: 'onkeyup',
            onLoad: 'onload',
            onLoadedData: 'onloadeddata',
            onLoadedMetadata: 'onloadedmetadata',
            onLoadStart: 'onloadstart',
            onMessage: 'onmessage',
            onMouseDown: 'onmousedown',
            onMouseEnter: 'onmouseenter',
            onMouseLeave: 'onmouseleave',
            onMouseMove: 'onmousemove',
            onMouseOut: 'onmouseout',
            onMouseOver: 'onmouseover',
            onMouseUp: 'onmouseup',
            onMouseWheel: 'onmousewheel',
            onOffline: 'onoffline',
            onOnline: 'ononline',
            onPageHide: 'onpagehide',
            onPageShow: 'onpageshow',
            onPaste: 'onpaste',
            onPause: 'onpause',
            onPlay: 'onplay',
            onPlaying: 'onplaying',
            onPopState: 'onpopstate',
            onProgress: 'onprogress',
            onRateChange: 'onratechange',
            onRepeat: 'onrepeat',
            onReset: 'onreset',
            onResize: 'onresize',
            onScroll: 'onscroll',
            onSeeked: 'onseeked',
            onSeeking: 'onseeking',
            onSelect: 'onselect',
            onShow: 'onshow',
            onStalled: 'onstalled',
            onStorage: 'onstorage',
            onSubmit: 'onsubmit',
            onSuspend: 'onsuspend',
            onTimeUpdate: 'ontimeupdate',
            onToggle: 'ontoggle',
            onUnload: 'onunload',
            onVolumeChange: 'onvolumechange',
            onWaiting: 'onwaiting',
            onZoom: 'onzoom',
            overlinePosition: 'overline-position',
            overlineThickness: 'overline-thickness',
            paintOrder: 'paint-order',
            panose1: 'panose-1',
            pointerEvents: 'pointer-events',
            referrerPolicy: 'referrerpolicy',
            renderingIntent: 'rendering-intent',
            shapeRendering: 'shape-rendering',
            stopColor: 'stop-color',
            stopOpacity: 'stop-opacity',
            strikethroughPosition: 'strikethrough-position',
            strikethroughThickness: 'strikethrough-thickness',
            strokeDashArray: 'stroke-dasharray',
            strokeDashOffset: 'stroke-dashoffset',
            strokeLineCap: 'stroke-linecap',
            strokeLineJoin: 'stroke-linejoin',
            strokeMiterLimit: 'stroke-miterlimit',
            strokeOpacity: 'stroke-opacity',
            strokeWidth: 'stroke-width',
            tabIndex: 'tabindex',
            textAnchor: 'text-anchor',
            textDecoration: 'text-decoration',
            textRendering: 'text-rendering',
            transformOrigin: 'transform-origin',
            typeOf: 'typeof',
            underlinePosition: 'underline-position',
            underlineThickness: 'underline-thickness',
            unicodeBidi: 'unicode-bidi',
            unicodeRange: 'unicode-range',
            unitsPerEm: 'units-per-em',
            vAlphabetic: 'v-alphabetic',
            vHanging: 'v-hanging',
            vIdeographic: 'v-ideographic',
            vMathematical: 'v-mathematical',
            vectorEffect: 'vector-effect',
            vertAdvY: 'vert-adv-y',
            vertOriginX: 'vert-origin-x',
            vertOriginY: 'vert-origin-y',
            wordSpacing: 'word-spacing',
            writingMode: 'writing-mode',
            xHeight: 'x-height',
            playbackOrder: 'playbackorder',
            timelineBegin: 'timelinebegin',
          },
          properties: {
            about: eR,
            accentHeight: ex,
            accumulate: null,
            additive: null,
            alignmentBaseline: null,
            alphabetic: ex,
            amplitude: ex,
            arabicForm: null,
            ascent: ex,
            attributeName: null,
            attributeType: null,
            azimuth: ex,
            bandwidth: null,
            baselineShift: null,
            baseFrequency: null,
            baseProfile: null,
            bbox: null,
            begin: null,
            bias: ex,
            by: null,
            calcMode: null,
            capHeight: ex,
            className: eP,
            clip: null,
            clipPath: null,
            clipPathUnits: null,
            clipRule: null,
            color: null,
            colorInterpolation: null,
            colorInterpolationFilters: null,
            colorProfile: null,
            colorRendering: null,
            content: null,
            contentScriptType: null,
            contentStyleType: null,
            crossOrigin: null,
            cursor: null,
            cx: null,
            cy: null,
            d: null,
            dataType: null,
            defaultAction: null,
            descent: ex,
            diffuseConstant: ex,
            direction: null,
            display: null,
            dur: null,
            divisor: ex,
            dominantBaseline: null,
            download: eT,
            dx: null,
            dy: null,
            edgeMode: null,
            editable: null,
            elevation: ex,
            enableBackground: null,
            end: null,
            event: null,
            exponent: ex,
            externalResourcesRequired: null,
            fill: null,
            fillOpacity: ex,
            fillRule: null,
            filter: null,
            filterRes: null,
            filterUnits: null,
            floodColor: null,
            floodOpacity: null,
            focusable: null,
            focusHighlight: null,
            fontFamily: null,
            fontSize: null,
            fontSizeAdjust: null,
            fontStretch: null,
            fontStyle: null,
            fontVariant: null,
            fontWeight: null,
            format: null,
            fr: null,
            from: null,
            fx: null,
            fy: null,
            g1: eL,
            g2: eL,
            glyphName: eL,
            glyphOrientationHorizontal: null,
            glyphOrientationVertical: null,
            glyphRef: null,
            gradientTransform: null,
            gradientUnits: null,
            handler: null,
            hanging: ex,
            hatchContentUnits: null,
            hatchUnits: null,
            height: null,
            href: null,
            hrefLang: null,
            horizAdvX: ex,
            horizOriginX: ex,
            horizOriginY: ex,
            id: null,
            ideographic: ex,
            imageRendering: null,
            initialVisibility: null,
            in: null,
            in2: null,
            intercept: ex,
            k: ex,
            k1: ex,
            k2: ex,
            k3: ex,
            k4: ex,
            kernelMatrix: eR,
            kernelUnitLength: null,
            keyPoints: null,
            keySplines: null,
            keyTimes: null,
            kerning: null,
            lang: null,
            lengthAdjust: null,
            letterSpacing: null,
            lightingColor: null,
            limitingConeAngle: ex,
            local: null,
            markerEnd: null,
            markerMid: null,
            markerStart: null,
            markerHeight: null,
            markerUnits: null,
            markerWidth: null,
            mask: null,
            maskContentUnits: null,
            maskUnits: null,
            mathematical: null,
            max: null,
            media: null,
            mediaCharacterEncoding: null,
            mediaContentEncodings: null,
            mediaSize: ex,
            mediaTime: null,
            method: null,
            min: null,
            mode: null,
            name: null,
            navDown: null,
            navDownLeft: null,
            navDownRight: null,
            navLeft: null,
            navNext: null,
            navPrev: null,
            navRight: null,
            navUp: null,
            navUpLeft: null,
            navUpRight: null,
            numOctaves: null,
            observer: null,
            offset: null,
            onAbort: null,
            onActivate: null,
            onAfterPrint: null,
            onBeforePrint: null,
            onBegin: null,
            onCancel: null,
            onCanPlay: null,
            onCanPlayThrough: null,
            onChange: null,
            onClick: null,
            onClose: null,
            onCopy: null,
            onCueChange: null,
            onCut: null,
            onDblClick: null,
            onDrag: null,
            onDragEnd: null,
            onDragEnter: null,
            onDragExit: null,
            onDragLeave: null,
            onDragOver: null,
            onDragStart: null,
            onDrop: null,
            onDurationChange: null,
            onEmptied: null,
            onEnd: null,
            onEnded: null,
            onError: null,
            onFocus: null,
            onFocusIn: null,
            onFocusOut: null,
            onHashChange: null,
            onInput: null,
            onInvalid: null,
            onKeyDown: null,
            onKeyPress: null,
            onKeyUp: null,
            onLoad: null,
            onLoadedData: null,
            onLoadedMetadata: null,
            onLoadStart: null,
            onMessage: null,
            onMouseDown: null,
            onMouseEnter: null,
            onMouseLeave: null,
            onMouseMove: null,
            onMouseOut: null,
            onMouseOver: null,
            onMouseUp: null,
            onMouseWheel: null,
            onOffline: null,
            onOnline: null,
            onPageHide: null,
            onPageShow: null,
            onPaste: null,
            onPause: null,
            onPlay: null,
            onPlaying: null,
            onPopState: null,
            onProgress: null,
            onRateChange: null,
            onRepeat: null,
            onReset: null,
            onResize: null,
            onScroll: null,
            onSeeked: null,
            onSeeking: null,
            onSelect: null,
            onShow: null,
            onStalled: null,
            onStorage: null,
            onSubmit: null,
            onSuspend: null,
            onTimeUpdate: null,
            onToggle: null,
            onUnload: null,
            onVolumeChange: null,
            onWaiting: null,
            onZoom: null,
            opacity: null,
            operator: null,
            order: null,
            orient: null,
            orientation: null,
            origin: null,
            overflow: null,
            overlay: null,
            overlinePosition: ex,
            overlineThickness: ex,
            paintOrder: null,
            panose1: null,
            path: null,
            pathLength: ex,
            patternContentUnits: null,
            patternTransform: null,
            patternUnits: null,
            phase: null,
            ping: eP,
            pitch: null,
            playbackOrder: null,
            pointerEvents: null,
            points: null,
            pointsAtX: ex,
            pointsAtY: ex,
            pointsAtZ: ex,
            preserveAlpha: null,
            preserveAspectRatio: null,
            primitiveUnits: null,
            propagate: null,
            property: eR,
            r: null,
            radius: null,
            referrerPolicy: null,
            refX: null,
            refY: null,
            rel: eR,
            rev: eR,
            renderingIntent: null,
            repeatCount: null,
            repeatDur: null,
            requiredExtensions: eR,
            requiredFeatures: eR,
            requiredFonts: eR,
            requiredFormats: eR,
            resource: null,
            restart: null,
            result: null,
            rotate: null,
            rx: null,
            ry: null,
            scale: null,
            seed: null,
            shapeRendering: null,
            side: null,
            slope: null,
            snapshotTime: null,
            specularConstant: ex,
            specularExponent: ex,
            spreadMethod: null,
            spacing: null,
            startOffset: null,
            stdDeviation: null,
            stemh: null,
            stemv: null,
            stitchTiles: null,
            stopColor: null,
            stopOpacity: null,
            strikethroughPosition: ex,
            strikethroughThickness: ex,
            string: null,
            stroke: null,
            strokeDashArray: eR,
            strokeDashOffset: null,
            strokeLineCap: null,
            strokeLineJoin: null,
            strokeMiterLimit: ex,
            strokeOpacity: ex,
            strokeWidth: null,
            style: null,
            surfaceScale: ex,
            syncBehavior: null,
            syncBehaviorDefault: null,
            syncMaster: null,
            syncTolerance: null,
            syncToleranceDefault: null,
            systemLanguage: eR,
            tabIndex: ex,
            tableValues: null,
            target: null,
            targetX: ex,
            targetY: ex,
            textAnchor: null,
            textDecoration: null,
            textRendering: null,
            textLength: null,
            timelineBegin: null,
            title: null,
            transformBehavior: null,
            type: null,
            typeOf: eR,
            to: null,
            transform: null,
            transformOrigin: null,
            u1: null,
            u2: null,
            underlinePosition: ex,
            underlineThickness: ex,
            unicode: null,
            unicodeBidi: null,
            unicodeRange: null,
            unitsPerEm: ex,
            values: null,
            vAlphabetic: ex,
            vMathematical: ex,
            vectorEffect: null,
            vHanging: ex,
            vIdeographic: ex,
            version: null,
            vertAdvY: ex,
            vertOriginX: ex,
            vertOriginY: ex,
            viewBox: null,
            viewTarget: null,
            visibility: null,
            width: null,
            widths: null,
            wordSpacing: null,
            writingMode: null,
            x: null,
            x1: null,
            x2: null,
            xChannelSelector: null,
            xHeight: ex,
            y: null,
            y1: null,
            y2: null,
            yChannelSelector: null,
            z: null,
            zoomAndPan: null,
          },
          space: 'svg',
          transform: eU,
        }),
        eH = eD({
          properties: {
            xLinkActuate: null,
            xLinkArcRole: null,
            xLinkHref: null,
            xLinkRole: null,
            xLinkShow: null,
            xLinkTitle: null,
            xLinkType: null,
          },
          space: 'xlink',
          transform: (e, t) => 'xlink:' + t.slice(5).toLowerCase(),
        }),
        ez = eD({
          attributes: { xmlnsxlink: 'xmlns:xlink' },
          properties: { xmlnsXLink: null, xmlns: null },
          space: 'xmlns',
          transform: eG,
        }),
        e$ = eD({
          properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
          space: 'xml',
          transform: (e, t) => 'xml:' + t.slice(3).toLowerCase(),
        }),
        eW = ek([eB, ej, eH, ez, e$], 'html'),
        eq = ek([eB, eF, eH, ez, e$], 'svg'),
        eV = {}.hasOwnProperty,
        eY = /["&'<>`]/g,
        eK = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        eX = /[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g,
        eJ = /[|\\{}()[\]^$+*?.]/g,
        eQ = new WeakMap(),
        eZ = /[\dA-Fa-f]/,
        e0 = /\d/,
        e1 = [
          'AElig',
          'AMP',
          'Aacute',
          'Acirc',
          'Agrave',
          'Aring',
          'Atilde',
          'Auml',
          'COPY',
          'Ccedil',
          'ETH',
          'Eacute',
          'Ecirc',
          'Egrave',
          'Euml',
          'GT',
          'Iacute',
          'Icirc',
          'Igrave',
          'Iuml',
          'LT',
          'Ntilde',
          'Oacute',
          'Ocirc',
          'Ograve',
          'Oslash',
          'Otilde',
          'Ouml',
          'QUOT',
          'REG',
          'THORN',
          'Uacute',
          'Ucirc',
          'Ugrave',
          'Uuml',
          'Yacute',
          'aacute',
          'acirc',
          'acute',
          'aelig',
          'agrave',
          'amp',
          'aring',
          'atilde',
          'auml',
          'brvbar',
          'ccedil',
          'cedil',
          'cent',
          'copy',
          'curren',
          'deg',
          'divide',
          'eacute',
          'ecirc',
          'egrave',
          'eth',
          'euml',
          'frac12',
          'frac14',
          'frac34',
          'gt',
          'iacute',
          'icirc',
          'iexcl',
          'igrave',
          'iquest',
          'iuml',
          'laquo',
          'lt',
          'macr',
          'micro',
          'middot',
          'nbsp',
          'not',
          'ntilde',
          'oacute',
          'ocirc',
          'ograve',
          'ordf',
          'ordm',
          'oslash',
          'otilde',
          'ouml',
          'para',
          'plusmn',
          'pound',
          'quot',
          'raquo',
          'reg',
          'sect',
          'shy',
          'sup1',
          'sup2',
          'sup3',
          'szlig',
          'thorn',
          'times',
          'uacute',
          'ucirc',
          'ugrave',
          'uml',
          'uuml',
          'yacute',
          'yen',
          'yuml',
        ],
        e2 = {
          nbsp: '\xa0',
          iexcl: '\xa1',
          cent: '\xa2',
          pound: '\xa3',
          curren: '\xa4',
          yen: '\xa5',
          brvbar: '\xa6',
          sect: '\xa7',
          uml: '\xa8',
          copy: '\xa9',
          ordf: '\xaa',
          laquo: '\xab',
          not: '\xac',
          shy: '\xad',
          reg: '\xae',
          macr: '\xaf',
          deg: '\xb0',
          plusmn: '\xb1',
          sup2: '\xb2',
          sup3: '\xb3',
          acute: '\xb4',
          micro: '\xb5',
          para: '\xb6',
          middot: '\xb7',
          cedil: '\xb8',
          sup1: '\xb9',
          ordm: '\xba',
          raquo: '\xbb',
          frac14: '\xbc',
          frac12: '\xbd',
          frac34: '\xbe',
          iquest: '\xbf',
          Agrave: '\xc0',
          Aacute: '\xc1',
          Acirc: '\xc2',
          Atilde: '\xc3',
          Auml: '\xc4',
          Aring: '\xc5',
          AElig: '\xc6',
          Ccedil: '\xc7',
          Egrave: '\xc8',
          Eacute: '\xc9',
          Ecirc: '\xca',
          Euml: '\xcb',
          Igrave: '\xcc',
          Iacute: '\xcd',
          Icirc: '\xce',
          Iuml: '\xcf',
          ETH: '\xd0',
          Ntilde: '\xd1',
          Ograve: '\xd2',
          Oacute: '\xd3',
          Ocirc: '\xd4',
          Otilde: '\xd5',
          Ouml: '\xd6',
          times: '\xd7',
          Oslash: '\xd8',
          Ugrave: '\xd9',
          Uacute: '\xda',
          Ucirc: '\xdb',
          Uuml: '\xdc',
          Yacute: '\xdd',
          THORN: '\xde',
          szlig: '\xdf',
          agrave: '\xe0',
          aacute: '\xe1',
          acirc: '\xe2',
          atilde: '\xe3',
          auml: '\xe4',
          aring: '\xe5',
          aelig: '\xe6',
          ccedil: '\xe7',
          egrave: '\xe8',
          eacute: '\xe9',
          ecirc: '\xea',
          euml: '\xeb',
          igrave: '\xec',
          iacute: '\xed',
          icirc: '\xee',
          iuml: '\xef',
          eth: '\xf0',
          ntilde: '\xf1',
          ograve: '\xf2',
          oacute: '\xf3',
          ocirc: '\xf4',
          otilde: '\xf5',
          ouml: '\xf6',
          divide: '\xf7',
          oslash: '\xf8',
          ugrave: '\xf9',
          uacute: '\xfa',
          ucirc: '\xfb',
          uuml: '\xfc',
          yacute: '\xfd',
          thorn: '\xfe',
          yuml: '\xff',
          fnof: 'ƒ',
          Alpha: 'Α',
          Beta: 'Β',
          Gamma: 'Γ',
          Delta: 'Δ',
          Epsilon: 'Ε',
          Zeta: 'Ζ',
          Eta: 'Η',
          Theta: 'Θ',
          Iota: 'Ι',
          Kappa: 'Κ',
          Lambda: 'Λ',
          Mu: 'Μ',
          Nu: 'Ν',
          Xi: 'Ξ',
          Omicron: 'Ο',
          Pi: 'Π',
          Rho: 'Ρ',
          Sigma: 'Σ',
          Tau: 'Τ',
          Upsilon: 'Υ',
          Phi: 'Φ',
          Chi: 'Χ',
          Psi: 'Ψ',
          Omega: 'Ω',
          alpha: 'α',
          beta: 'β',
          gamma: 'γ',
          delta: 'δ',
          epsilon: 'ε',
          zeta: 'ζ',
          eta: 'η',
          theta: 'θ',
          iota: 'ι',
          kappa: 'κ',
          lambda: 'λ',
          mu: 'μ',
          nu: 'ν',
          xi: 'ξ',
          omicron: 'ο',
          pi: 'π',
          rho: 'ρ',
          sigmaf: 'ς',
          sigma: 'σ',
          tau: 'τ',
          upsilon: 'υ',
          phi: 'φ',
          chi: 'χ',
          psi: 'ψ',
          omega: 'ω',
          thetasym: 'ϑ',
          upsih: 'ϒ',
          piv: 'ϖ',
          bull: '•',
          hellip: '…',
          prime: '′',
          Prime: '″',
          oline: '‾',
          frasl: '⁄',
          weierp: '℘',
          image: 'ℑ',
          real: 'ℜ',
          trade: '™',
          alefsym: 'ℵ',
          larr: '←',
          uarr: '↑',
          rarr: '→',
          darr: '↓',
          harr: '↔',
          crarr: '↵',
          lArr: '⇐',
          uArr: '⇑',
          rArr: '⇒',
          dArr: '⇓',
          hArr: '⇔',
          forall: '∀',
          part: '∂',
          exist: '∃',
          empty: '∅',
          nabla: '∇',
          isin: '∈',
          notin: '∉',
          ni: '∋',
          prod: '∏',
          sum: '∑',
          minus: '−',
          lowast: '∗',
          radic: '√',
          prop: '∝',
          infin: '∞',
          ang: '∠',
          and: '∧',
          or: '∨',
          cap: '∩',
          cup: '∪',
          int: '∫',
          there4: '∴',
          sim: '∼',
          cong: '≅',
          asymp: '≈',
          ne: '≠',
          equiv: '≡',
          le: '≤',
          ge: '≥',
          sub: '⊂',
          sup: '⊃',
          nsub: '⊄',
          sube: '⊆',
          supe: '⊇',
          oplus: '⊕',
          otimes: '⊗',
          perp: '⊥',
          sdot: '⋅',
          lceil: '⌈',
          rceil: '⌉',
          lfloor: '⌊',
          rfloor: '⌋',
          lang: '〈',
          rang: '〉',
          loz: '◊',
          spades: '♠',
          clubs: '♣',
          hearts: '♥',
          diams: '♦',
          quot: '"',
          amp: '&',
          lt: '<',
          gt: '>',
          OElig: 'Œ',
          oelig: 'œ',
          Scaron: 'Š',
          scaron: 'š',
          Yuml: 'Ÿ',
          circ: 'ˆ',
          tilde: '˜',
          ensp: ' ',
          emsp: ' ',
          thinsp: ' ',
          zwnj: '‌',
          zwj: '‍',
          lrm: '‎',
          rlm: '‏',
          ndash: '–',
          mdash: '—',
          lsquo: '‘',
          rsquo: '’',
          sbquo: '‚',
          ldquo: '“',
          rdquo: '”',
          bdquo: '„',
          dagger: '†',
          Dagger: '‡',
          permil: '‰',
          lsaquo: '‹',
          rsaquo: '›',
          euro: '€',
        },
        e3 = ['cent', 'copy', 'divide', 'gt', 'lt', 'not', 'para', 'times'],
        e5 = {}.hasOwnProperty,
        e6 = {};
      for (r in e2) e5.call(e2, r) && (e6[e2[r]] = r);
      let e8 = /[^\dA-Za-z]/;
      function e4(e, t, n) {
        let r,
          i = (function (e, t, n) {
            let r = '&#x' + e.toString(16).toUpperCase();
            return n && t && !eZ.test(String.fromCharCode(t)) ? r : r + ';';
          })(e, t, n.omitOptionalSemicolons);
        if (
          ((n.useNamedReferences || n.useShortestReferences) &&
            (r = (function (e, t, n, r) {
              let i = String.fromCharCode(e);
              if (e5.call(e6, i)) {
                let e = e6[i],
                  o = '&' + e;
                return n &&
                  e1.includes(e) &&
                  !e3.includes(e) &&
                  (!r || (t && 61 !== t && e8.test(String.fromCharCode(t))))
                  ? o
                  : o + ';';
              }
              return '';
            })(e, t, n.omitOptionalSemicolons, n.attribute)),
          (n.useShortestReferences || !r) && n.useShortestReferences)
        ) {
          let r = (function (e, t, n) {
            let r = '&#' + String(e);
            return n && t && !e0.test(String.fromCharCode(t)) ? r : r + ';';
          })(e, t, n.omitOptionalSemicolons);
          r.length < i.length && (i = r);
        }
        return r && (!n.useShortestReferences || r.length < i.length) ? r : i;
      }
      function e9(e, t) {
        let n;
        var r,
          i = e,
          o = Object.assign({ format: e4 }, t);
        if (
          ((i = i.replace(
            o.subset
              ? ((r = o.subset),
                (n = eQ.get(r)) ||
                  ((n = (function (e) {
                    let t = [],
                      n = -1;
                    for (; ++n < e.length; ) t.push(e[n].replace(eJ, '\\$&'));
                    return RegExp('(?:' + t.join('|') + ')', 'g');
                  })(r)),
                  eQ.set(r, n)),
                n)
              : eY,
            a
          )),
          o.subset || o.escapeOnly)
        )
          return i;
        return i
          .replace(eK, function (e, t, n) {
            return o.format((e.charCodeAt(0) - 55296) * 1024 + e.charCodeAt(1) - 56320 + 65536, n.charCodeAt(t + 2), o);
          })
          .replace(eX, a);
        function a(e, t, n) {
          return o.format(e.charCodeAt(0), n.charCodeAt(t + 1), o);
        }
      }
      let e7 = /^>|^->|<!--|-->|--!>|<!-$/g,
        te = ['>'],
        tt = ['<', '>'];
      function tn(e, t) {
        let n = String(e);
        if ('string' != typeof t) throw TypeError('Expected character');
        let r = 0,
          i = n.indexOf(t);
        for (; -1 !== i; ) r++, (i = n.indexOf(t, i + t.length));
        return r;
      }
      let tr = /[A-Z]/g,
        ti = /-[a-z]/g,
        to = /^data[-\w.:]+$/i;
      function ta(e) {
        return '-' + e.toLowerCase();
      }
      function ts(e) {
        return e.charAt(1).toUpperCase();
      }
      let tl = /[ \t\n\f\r]/g;
      function tu(e) {
        return 'object' == typeof e ? 'text' === e.type && tc(e.value) : tc(e);
      }
      function tc(e) {
        return '' === e.replace(tl, '');
      }
      let th = tm(1),
        tp = tm(-1),
        td = [];
      function tm(e) {
        return function (t, n, r) {
          let i = t ? t.children : td,
            o = (n || 0) + e,
            a = i[o];
          if (!r) for (; a && tu(a); ) (o += e), (a = i[o]);
          return a;
        };
      }
      let tf = {}.hasOwnProperty;
      function tg(e) {
        return function (t, n, r) {
          return tf.call(e, t.tagName) && e[t.tagName](t, n, r);
        };
      }
      let ty = tg({
        body: function (e, t, n) {
          let r = th(n, t);
          return !r || 'comment' !== r.type;
        },
        caption: tb,
        colgroup: tb,
        dd: function (e, t, n) {
          let r = th(n, t);
          return !r || ('element' === r.type && ('dt' === r.tagName || 'dd' === r.tagName));
        },
        dt: function (e, t, n) {
          let r = th(n, t);
          return !!(r && 'element' === r.type && ('dt' === r.tagName || 'dd' === r.tagName));
        },
        head: tb,
        html: function (e, t, n) {
          let r = th(n, t);
          return !r || 'comment' !== r.type;
        },
        li: function (e, t, n) {
          let r = th(n, t);
          return !r || ('element' === r.type && 'li' === r.tagName);
        },
        optgroup: function (e, t, n) {
          let r = th(n, t);
          return !r || ('element' === r.type && 'optgroup' === r.tagName);
        },
        option: function (e, t, n) {
          let r = th(n, t);
          return !r || ('element' === r.type && ('option' === r.tagName || 'optgroup' === r.tagName));
        },
        p: function (e, t, n) {
          let r = th(n, t);
          return r
            ? 'element' === r.type &&
                ('address' === r.tagName ||
                  'article' === r.tagName ||
                  'aside' === r.tagName ||
                  'blockquote' === r.tagName ||
                  'details' === r.tagName ||
                  'div' === r.tagName ||
                  'dl' === r.tagName ||
                  'fieldset' === r.tagName ||
                  'figcaption' === r.tagName ||
                  'figure' === r.tagName ||
                  'footer' === r.tagName ||
                  'form' === r.tagName ||
                  'h1' === r.tagName ||
                  'h2' === r.tagName ||
                  'h3' === r.tagName ||
                  'h4' === r.tagName ||
                  'h5' === r.tagName ||
                  'h6' === r.tagName ||
                  'header' === r.tagName ||
                  'hgroup' === r.tagName ||
                  'hr' === r.tagName ||
                  'main' === r.tagName ||
                  'menu' === r.tagName ||
                  'nav' === r.tagName ||
                  'ol' === r.tagName ||
                  'p' === r.tagName ||
                  'pre' === r.tagName ||
                  'section' === r.tagName ||
                  'table' === r.tagName ||
                  'ul' === r.tagName)
            : !n ||
                'element' !== n.type ||
                ('a' !== n.tagName &&
                  'audio' !== n.tagName &&
                  'del' !== n.tagName &&
                  'ins' !== n.tagName &&
                  'map' !== n.tagName &&
                  'noscript' !== n.tagName &&
                  'video' !== n.tagName);
        },
        rp: t_,
        rt: t_,
        tbody: function (e, t, n) {
          let r = th(n, t);
          return !r || ('element' === r.type && ('tbody' === r.tagName || 'tfoot' === r.tagName));
        },
        td: tv,
        tfoot: function (e, t, n) {
          return !th(n, t);
        },
        th: tv,
        thead: function (e, t, n) {
          let r = th(n, t);
          return !!(r && 'element' === r.type && ('tbody' === r.tagName || 'tfoot' === r.tagName));
        },
        tr: function (e, t, n) {
          let r = th(n, t);
          return !r || ('element' === r.type && 'tr' === r.tagName);
        },
      });
      function tb(e, t, n) {
        let r = th(n, t, !0);
        return !r || ('comment' !== r.type && !('text' === r.type && tu(r.value.charAt(0))));
      }
      function t_(e, t, n) {
        let r = th(n, t);
        return !r || ('element' === r.type && ('rp' === r.tagName || 'rt' === r.tagName));
      }
      function tv(e, t, n) {
        let r = th(n, t);
        return !r || ('element' === r.type && ('td' === r.tagName || 'th' === r.tagName));
      }
      let tS = tg({
          body: function (e) {
            let t = th(e, -1, !0);
            return (
              !t ||
              ('comment' !== t.type &&
                !('text' === t.type && tu(t.value.charAt(0))) &&
                ('element' !== t.type ||
                  ('meta' !== t.tagName &&
                    'link' !== t.tagName &&
                    'script' !== t.tagName &&
                    'style' !== t.tagName &&
                    'template' !== t.tagName)))
            );
          },
          colgroup: function (e, t, n) {
            let r = tp(n, t),
              i = th(e, -1, !0);
            return (
              !(n && r && 'element' === r.type && 'colgroup' === r.tagName && ty(r, n.children.indexOf(r), n)) &&
              !!(i && 'element' === i.type && 'col' === i.tagName)
            );
          },
          head: function (e) {
            let t = new Set();
            for (let n of e.children)
              if ('element' === n.type && ('base' === n.tagName || 'title' === n.tagName)) {
                if (t.has(n.tagName)) return !1;
                t.add(n.tagName);
              }
            let n = e.children[0];
            return !n || 'element' === n.type;
          },
          html: function (e) {
            let t = th(e, -1);
            return !t || 'comment' !== t.type;
          },
          tbody: function (e, t, n) {
            let r = tp(n, t),
              i = th(e, -1);
            return (
              !(
                n &&
                r &&
                'element' === r.type &&
                ('thead' === r.tagName || 'tbody' === r.tagName) &&
                ty(r, n.children.indexOf(r), n)
              ) && !!(i && 'element' === i.type && 'tr' === i.tagName)
            );
          },
        }),
        tk = {
          name: [
            ['	\n\f\r &/=>'.split(''), '	\n\f\r "&\'/=>`'.split('')],
            ['\0	\n\f\r "&\'/<=>'.split(''), '\0	\n\f\r "&\'/<=>`'.split('')],
          ],
          unquoted: [
            ['	\n\f\r &>'.split(''), '\0	\n\f\r "&\'<=>`'.split('')],
            ['\0	\n\f\r "&\'<=>`'.split(''), '\0	\n\f\r "&\'<=>`'.split('')],
          ],
          single: [
            ["&'".split(''), '"&\'`'.split('')],
            ["\0&'".split(''), '\0"&\'`'.split('')],
          ],
          double: [
            ['"&'.split(''), '"&\'`'.split('')],
            ['\0"&'.split(''), '\0"&\'`'.split('')],
          ],
        },
        tw = ['<', '&'];
      function tC(e, t, n, r) {
        return n && 'element' === n.type && ('script' === n.tagName || 'style' === n.tagName)
          ? e.value
          : e9(e.value, Object.assign({}, r.settings.characterReferences, { subset: tw }));
      }
      let tA = (function (e, t) {
          let n = t || {};
          function r(t, ...n) {
            let i = r.invalid,
              o = r.handlers;
            if (t && eV.call(t, e)) {
              let n = String(t[e]);
              i = eV.call(o, n) ? o[n] : r.unknown;
            }
            if (i) return i.call(this, t, ...n);
          }
          return (r.handlers = n.handlers || {}), (r.invalid = n.invalid), (r.unknown = n.unknown), r;
        })('type', {
          invalid: function (e) {
            throw Error('Expected node, not `' + e + '`');
          },
          unknown: function (e) {
            throw Error('Cannot compile unknown node `' + e.type + '`');
          },
          handlers: {
            comment: function (e, t, n, r) {
              return r.settings.bogusComments
                ? '<?' + e9(e.value, Object.assign({}, r.settings.characterReferences, { subset: te })) + '>'
                : '\x3c!--' +
                    e.value.replace(e7, function (e) {
                      return e9(e, Object.assign({}, r.settings.characterReferences, { subset: tt }));
                    }) +
                    '--\x3e';
            },
            doctype: function (e, t, n, r) {
              return (
                '<!' +
                (r.settings.upperDoctype ? 'DOCTYPE' : 'doctype') +
                (r.settings.tightDoctype ? '' : ' ') +
                'html>'
              );
            },
            element: function (e, t, n, r) {
              let i,
                o = r.schema,
                a = 'svg' !== o.space && r.settings.omitOptionalTags,
                s =
                  'svg' === o.space
                    ? r.settings.closeEmptyElements
                    : r.settings.voids.includes(e.tagName.toLowerCase()),
                l = [];
              'html' === o.space && 'svg' === e.tagName && (r.schema = eq);
              let u = (function (e, t) {
                  let n,
                    r = [],
                    i = -1;
                  if (t) {
                    for (n in t)
                      if (null !== t[n] && void 0 !== t[n]) {
                        let i = (function (e, t, n) {
                          let r,
                            i = (function (e, t) {
                              let n = ew(t),
                                r = t,
                                i = eC;
                              if (n in e.normal) return e.property[e.normal[n]];
                              if (n.length > 4 && 'data' === n.slice(0, 4) && to.test(t)) {
                                if ('-' === t.charAt(4)) {
                                  let e = t.slice(5).replace(ti, ts);
                                  r = 'data' + e.charAt(0).toUpperCase() + e.slice(1);
                                } else {
                                  let e = t.slice(4);
                                  if (!ti.test(e)) {
                                    let n = e.replace(tr, ta);
                                    '-' !== n.charAt(0) && (n = '-' + n), (t = 'data' + n);
                                  }
                                }
                                i = eM;
                              }
                              return new i(r, t);
                            })(e.schema, t),
                            o = e.settings.allowParseErrors && 'html' === e.schema.space ? 0 : 1,
                            a = +!e.settings.allowDangerousCharacters,
                            s = e.quote;
                          if (
                            (i.overloadedBoolean && (n === i.attribute || '' === n)
                              ? (n = !0)
                              : (i.boolean || i.overloadedBoolean) &&
                                ('string' != typeof n || n === i.attribute || '' === n) &&
                                (n = !!n),
                            null == n || !1 === n || ('number' == typeof n && Number.isNaN(n)))
                          )
                            return '';
                          let l = e9(
                            i.attribute,
                            Object.assign({}, e.settings.characterReferences, { subset: tk.name[o][a] })
                          );
                          return !0 === n ||
                            ((n = Array.isArray(n)
                              ? (i.commaSeparated
                                  ? function (e, t) {
                                      let n = t || {};
                                      return ('' === e[e.length - 1] ? [...e, ''] : e)
                                        .join((n.padRight ? ' ' : '') + ',' + (!1 === n.padLeft ? '' : ' '))
                                        .trim();
                                    }
                                  : function (e) {
                                      return e.join(' ').trim();
                                    })(n, { padLeft: !e.settings.tightCommaSeparatedLists })
                              : String(n)),
                            e.settings.collapseEmptyAttributes && !n)
                            ? l
                            : (e.settings.preferUnquoted &&
                                (r = e9(
                                  n,
                                  Object.assign({}, e.settings.characterReferences, {
                                    attribute: !0,
                                    subset: tk.unquoted[o][a],
                                  })
                                )),
                              r !== n &&
                                (e.settings.quoteSmart && tn(n, s) > tn(n, e.alternative) && (s = e.alternative),
                                (r =
                                  s +
                                  e9(
                                    n,
                                    Object.assign({}, e.settings.characterReferences, {
                                      subset: ("'" === s ? tk.single : tk.double)[o][a],
                                      attribute: !0,
                                    })
                                  ) +
                                  s)),
                              l + (r ? '=' + r : r));
                        })(e, n, t[n]);
                        i && r.push(i);
                      }
                  }
                  for (; ++i < r.length; ) {
                    let t = e.settings.tightAttributes ? r[i].charAt(r[i].length - 1) : void 0;
                    i !== r.length - 1 && '"' !== t && "'" !== t && (r[i] += ' ');
                  }
                  return r.join('');
                })(r, e.properties),
                c = r.all('html' === o.space && 'template' === e.tagName ? e.content : e);
              return (
                (r.schema = o),
                c && (s = !1),
                (!u && a && tS(e, t, n)) ||
                  (l.push('<', e.tagName, u ? ' ' + u : ''),
                  s &&
                    ('svg' === o.space || r.settings.closeSelfClosing) &&
                    ((i = u.charAt(u.length - 1)),
                    (!r.settings.tightSelfClosing || '/' === i || (i && '"' !== i && "'" !== i)) && l.push(' '),
                    l.push('/')),
                  l.push('>')),
                l.push(c),
                s || (a && ty(e, t, n)) || l.push('</' + e.tagName + '>'),
                l.join('')
              );
            },
            raw: function (e, t, n, r) {
              return r.settings.allowDangerousHtml ? e.value : tC(e, t, n, r);
            },
            root: function (e, t, n, r) {
              return r.all(e);
            },
            text: tC,
          },
        }),
        tT = {},
        tN = {},
        tE = [];
      function tx(e, t, n) {
        return tA(e, t, n, this);
      }
      function tP(e) {
        let t = [],
          n = (e && e.children) || tE,
          r = -1;
        for (; ++r < n.length; ) t[r] = this.one(n[r], r, e);
        return t.join('');
      }
      function tL(e, t) {
        let n = 'string' == typeof e ? {} : { ...e.colorReplacements },
          r = 'string' == typeof e ? e : e.name;
        for (let [e, i] of Object.entries(t?.colorReplacements || {}))
          'string' == typeof i ? (n[e] = i) : e === r && Object.assign(n, i);
        return n;
      }
      function tR(e, t) {
        return (e && t?.[e?.toLowerCase()]) || e;
      }
      async function tO(e) {
        return Promise.resolve('function' == typeof e ? e() : e).then((e) => e.default || e);
      }
      function tI(e) {
        return !e || ['plaintext', 'txt', 'text', 'plain'].includes(e);
      }
      function tM(e) {
        return 'ansi' === e || tI(e);
      }
      function tD(e) {
        return 'none' === e;
      }
      function tB(e, t) {
        if (!t) return e;
        for (let n of ((e.properties ||= {}),
        (e.properties.class ||= []),
        'string' == typeof e.properties.class && (e.properties.class = e.properties.class.split(/\s+/g)),
        Array.isArray(e.properties.class) || (e.properties.class = []),
        Array.isArray(t) ? t : t.split(/\s+/g)))
          n && !e.properties.class.includes(n) && e.properties.class.push(n);
        return e;
      }
      function tU(e, t = !1) {
        let n = e.split(/(\r?\n)/g),
          r = 0,
          i = [];
        for (let e = 0; e < n.length; e += 2) {
          let o = t ? n[e] + (n[e + 1] || '') : n[e];
          i.push([o, r]), (r += n[e].length), (r += n[e + 1]?.length || 0);
        }
        return i;
      }
      function tG(e) {
        let t = {};
        if ((e.color && (t.color = e.color), e.bgColor && (t['background-color'] = e.bgColor), e.fontStyle)) {
          e.fontStyle & v.Italic && (t['font-style'] = 'italic'), e.fontStyle & v.Bold && (t['font-weight'] = 'bold');
          let n = [];
          e.fontStyle & v.Underline && n.push('underline'),
            e.fontStyle & v.Strikethrough && n.push('line-through'),
            n.length && (t['text-decoration'] = n.join(' '));
        }
        return t;
      }
      function tj(e) {
        return 'string' == typeof e
          ? e
          : Object.entries(e)
              .map(([e, t]) => `${e}:${t}`)
              .join(';');
      }
      let tF = new WeakMap();
      function tH(e, t) {
        tF.set(e, t);
      }
      function tz(e) {
        return tF.get(e);
      }
      class t$ {
        _stacks = {};
        lang;
        get themes() {
          return Object.keys(this._stacks);
        }
        get theme() {
          return this.themes[0];
        }
        get _stack() {
          return this._stacks[this.theme];
        }
        static initial(e, t) {
          return new t$(Object.fromEntries((Array.isArray(t) ? t : [t]).map((e) => [e, e_])), e);
        }
        constructor(...e) {
          if (2 === e.length) {
            let [t, n] = e;
            (this.lang = n), (this._stacks = t);
          } else {
            let [t, n, r] = e;
            (this.lang = n), (this._stacks = { [r]: t });
          }
        }
        getInternalStack(e = this.theme) {
          return this._stacks[e];
        }
        getScopes(e = this.theme) {
          var t = this._stacks[e];
          let n = [],
            r = new Set();
          return (
            !(function e(t) {
              if (r.has(t)) return;
              r.add(t);
              let i = t?.nameScopesList?.scopeName;
              i && n.push(i), t.parent && e(t.parent);
            })(t),
            n
          );
        }
        toJSON() {
          return { lang: this.lang, theme: this.theme, themes: this.themes, scopes: this.getScopes() };
        }
      }
      let tW = [
        (function () {
          let e = new WeakMap();
          function t(t) {
            if (!e.has(t.meta)) {
              let n = function (e) {
                  if ('number' == typeof e) {
                    if (e < 0 || e > t.source.length)
                      throw new a(`Invalid decoration offset: ${e}. Code length: ${t.source.length}`);
                    return { ...r.indexToPos(e), offset: e };
                  }
                  {
                    let t = r.lines[e.line];
                    if (void 0 === t)
                      throw new a(`Invalid decoration position ${JSON.stringify(e)}. Lines length: ${r.lines.length}`);
                    if (e.character < 0 || e.character > t.length)
                      throw new a(
                        `Invalid decoration position ${JSON.stringify(e)}. Line ${e.line} length: ${t.length}`
                      );
                    return { ...e, offset: r.posToIndex(e.line, e.character) };
                  }
                },
                r = (function (e) {
                  let t = tU(e, !0).map(([e]) => e);
                  return {
                    lines: t,
                    indexToPos: function (n) {
                      if (n === e.length) return { line: t.length - 1, character: t[t.length - 1].length };
                      let r = n,
                        i = 0;
                      for (let e of t) {
                        if (r < e.length) break;
                        (r -= e.length), i++;
                      }
                      return { line: i, character: r };
                    },
                    posToIndex: function (e, n) {
                      let r = 0;
                      for (let n = 0; n < e; n++) r += t[n].length;
                      return r + n;
                    },
                  };
                })(t.source),
                i = (t.options.decorations || []).map((e) => ({ ...e, start: n(e.start), end: n(e.end) }));
              (function (e) {
                for (let t = 0; t < e.length; t++) {
                  let n = e[t];
                  if (n.start.offset > n.end.offset)
                    throw new a(`Invalid decoration range: ${JSON.stringify(n.start)} - ${JSON.stringify(n.end)}`);
                  for (let r = t + 1; r < e.length; r++) {
                    let t = e[r],
                      i = n.start.offset <= t.start.offset && t.start.offset < n.end.offset,
                      o = n.start.offset < t.end.offset && t.end.offset <= n.end.offset,
                      s = t.start.offset <= n.start.offset && n.start.offset < t.end.offset,
                      l = t.start.offset < n.end.offset && n.end.offset <= t.end.offset;
                    if (i || o || s || l) {
                      if ((i && o) || (s && l)) continue;
                      throw new a(`Decorations ${JSON.stringify(n.start)} and ${JSON.stringify(t.start)} intersect.`);
                    }
                  }
                }
              })(i),
                e.set(t.meta, { decorations: i, converter: r, source: t.source });
            }
            return e.get(t.meta);
          }
          return {
            name: 'shiki:decorations',
            tokens(e) {
              if (this.options.decorations?.length) {
                var n = e,
                  r = t(this).decorations.flatMap((e) => [e.start.offset, e.end.offset]);
                let i = Array.from(r instanceof Set ? r : new Set(r)).sort((e, t) => e - t);
                return i.length
                  ? n.map((e) =>
                      e.flatMap((e) => {
                        let t = i
                          .filter((t) => e.offset < t && t < e.offset + e.content.length)
                          .map((t) => t - e.offset)
                          .sort((e, t) => e - t);
                        if (!t.length) return e;
                        let n = 0,
                          r = [];
                        for (let i of t)
                          i > n && r.push({ ...e, content: e.content.slice(n, i), offset: e.offset + n }), (n = i);
                        return (
                          n < e.content.length && r.push({ ...e, content: e.content.slice(n), offset: e.offset + n }), r
                        );
                      })
                    )
                  : n;
              }
            },
            code(e) {
              if (!this.options.decorations?.length) return;
              let n = t(this),
                r = Array.from(e.children).filter((e) => 'element' === e.type && 'span' === e.tagName);
              if (r.length !== n.converter.lines.length)
                throw new a(
                  `Number of lines in code element (${r.length}) does not match the number of lines in the source (${n.converter.lines.length}). Failed to apply decorations.`
                );
              function i(e, t, n, i) {
                let s = r[e],
                  l = '',
                  u = -1,
                  c = -1;
                if (
                  (0 === t && (u = 0),
                  0 === n && (c = 0),
                  n === Number.POSITIVE_INFINITY && (c = s.children.length),
                  -1 === u || -1 === c)
                )
                  for (let e = 0; e < s.children.length; e++)
                    (l += (function e(t) {
                      return 'text' === t.type ? t.value : 'element' === t.type ? t.children.map(e).join('') : '';
                    })(s.children[e])),
                      -1 === u && l.length === t && (u = e + 1),
                      -1 === c && l.length === n && (c = e + 1);
                if (-1 === u) throw new a(`Failed to find start index for decoration ${JSON.stringify(i.start)}`);
                if (-1 === c) throw new a(`Failed to find end index for decoration ${JSON.stringify(i.end)}`);
                let h = s.children.slice(u, c);
                if (i.alwaysWrap || h.length !== s.children.length)
                  if (i.alwaysWrap || 1 !== h.length || 'element' !== h[0].type) {
                    let e = { type: 'element', tagName: 'span', properties: {}, children: h };
                    o(e, i, 'wrapper'), s.children.splice(u, h.length, e);
                  } else o(h[0], i, 'token');
                else o(s, i, 'line');
              }
              function o(e, t, n) {
                let r = t.properties || {},
                  i = t.transform || ((e) => e);
                return (
                  (e.tagName = t.tagName || 'span'),
                  (e.properties = { ...e.properties, ...r, class: e.properties.class }),
                  t.properties?.class && tB(e, t.properties.class),
                  (e = i(e, n) || e)
                );
              }
              let s = [];
              for (let e of n.decorations.sort(
                (e, t) => t.start.offset - e.start.offset || e.end.offset - t.end.offset
              )) {
                let { start: t, end: n } = e;
                if (t.line === n.line) i(t.line, t.character, n.character, e);
                else if (t.line < n.line) {
                  i(t.line, t.character, Number.POSITIVE_INFINITY, e);
                  for (let i = t.line + 1; i < n.line; i++)
                    s.unshift(() => {
                      var t;
                      r[(t = i)] = o(r[t], e, 'line');
                    });
                  i(n.line, 0, n.character, e);
                }
              }
              s.forEach((e) => e());
            },
          };
        })(),
      ];
      function tq(e) {
        return [...(e.transformers || []), ...tW];
      }
      var tV = [
          'black',
          'red',
          'green',
          'yellow',
          'blue',
          'magenta',
          'cyan',
          'white',
          'brightBlack',
          'brightRed',
          'brightGreen',
          'brightYellow',
          'brightBlue',
          'brightMagenta',
          'brightCyan',
          'brightWhite',
        ],
        tY = { 1: 'bold', 2: 'dim', 3: 'italic', 4: 'underline', 7: 'reverse', 8: 'hidden', 9: 'strikethrough' };
      function tK(e) {
        let t = e.shift();
        if ('2' === t) {
          let t = e.splice(0, 3).map((e) => Number.parseInt(e));
          if (3 !== t.length || t.some((e) => Number.isNaN(e))) return;
          return { type: 'rgb', rgb: t };
        }
        if ('5' === t) {
          let t = e.shift();
          if (t) return { type: 'table', index: Number(t) };
        }
      }
      var tX = {
        black: '#000000',
        red: '#bb0000',
        green: '#00bb00',
        yellow: '#bbbb00',
        blue: '#0000bb',
        magenta: '#ff00ff',
        cyan: '#00bbbb',
        white: '#eeeeee',
        brightBlack: '#555555',
        brightRed: '#ff5555',
        brightGreen: '#00ff00',
        brightYellow: '#ffff55',
        brightBlue: '#5555ff',
        brightMagenta: '#ff55ff',
        brightCyan: '#55ffff',
        brightWhite: '#ffffff',
      };
      function tJ(e, t, n = {}) {
        let { lang: r = 'text', theme: i = e.getLoadedThemes()[0] } = n;
        if (tI(r) || tD(i)) return tU(t).map((e) => [{ content: e[0], offset: e[1] }]);
        let { theme: o, colorMap: s } = e.setTheme(i);
        if ('ansi' === r)
          return (function (e, t, n) {
            let r,
              i,
              o,
              a = tL(e, n),
              s = tU(t),
              l = (function (e = tX) {
                let t;
                function n(e) {
                  return `#${e.map((e) => Math.max(0, Math.min(e, 255)).toString(16).padStart(2, '0')).join('')}`;
                }
                return {
                  value: function (r) {
                    switch (r.type) {
                      case 'named':
                        return e[r.name];
                      case 'rgb':
                        return n(r.rgb);
                      case 'table':
                        var i;
                        return (
                          (i = r.index),
                          (function () {
                            if (t) return t;
                            t = [];
                            for (let n = 0; n < tV.length; n++) t.push(e[tV[n]]);
                            let r = [0, 95, 135, 175, 215, 255];
                            for (let e = 0; e < 6; e++)
                              for (let i = 0; i < 6; i++) for (let o = 0; o < 6; o++) t.push(n([r[e], r[i], r[o]]));
                            let i = 8;
                            for (let e = 0; e < 24; e++, i += 10) t.push(n([i, i, i]));
                            return t;
                          })()[i]
                        );
                    }
                  },
                };
              })(
                Object.fromEntries(
                  tV.map((t) => [t, e.colors?.[`terminal.ansi${t[0].toUpperCase()}${t.substring(1)}`]])
                )
              ),
              u =
                ((r = null),
                (i = null),
                (o = new Set()),
                {
                  parse(e) {
                    let t = [],
                      n = 0;
                    do {
                      let a = (function (e, t) {
                          let n = e.indexOf('\x1b', t);
                          if (-1 !== n && '[' === e[n + 1]) {
                            let t = e.indexOf('m', n);
                            if (-1 !== t)
                              return { sequence: e.substring(n + 2, t).split(';'), startPosition: n, position: t + 1 };
                          }
                          return { position: e.length };
                        })(e, n),
                        s = a.sequence ? e.substring(n, a.startPosition) : e.substring(n);
                      if (
                        (s.length > 0 && t.push({ value: s, foreground: r, background: i, decorations: new Set(o) }),
                        a.sequence)
                      ) {
                        let e = (function (e) {
                          let t = [];
                          for (; e.length > 0; ) {
                            let n = e.shift();
                            if (!n) continue;
                            let r = Number.parseInt(n);
                            if (!Number.isNaN(r))
                              if (0 === r) t.push({ type: 'resetAll' });
                              else if (r <= 9) tY[r] && t.push({ type: 'setDecoration', value: tY[r] });
                              else if (r <= 29) {
                                let e = tY[r - 20];
                                e &&
                                  (t.push({ type: 'resetDecoration', value: e }),
                                  'dim' === e && t.push({ type: 'resetDecoration', value: 'bold' }));
                              } else if (r <= 37)
                                t.push({ type: 'setForegroundColor', value: { type: 'named', name: tV[r - 30] } });
                              else if (38 === r) {
                                let n = tK(e);
                                n && t.push({ type: 'setForegroundColor', value: n });
                              } else if (39 === r) t.push({ type: 'resetForegroundColor' });
                              else if (r <= 47)
                                t.push({ type: 'setBackgroundColor', value: { type: 'named', name: tV[r - 40] } });
                              else if (48 === r) {
                                let n = tK(e);
                                n && t.push({ type: 'setBackgroundColor', value: n });
                              } else
                                49 === r
                                  ? t.push({ type: 'resetBackgroundColor' })
                                  : 53 === r
                                    ? t.push({ type: 'setDecoration', value: 'overline' })
                                    : 55 === r
                                      ? t.push({ type: 'resetDecoration', value: 'overline' })
                                      : r >= 90 && r <= 97
                                        ? t.push({
                                            type: 'setForegroundColor',
                                            value: { type: 'named', name: tV[r - 90 + 8] },
                                          })
                                        : r >= 100 &&
                                          r <= 107 &&
                                          t.push({
                                            type: 'setBackgroundColor',
                                            value: { type: 'named', name: tV[r - 100 + 8] },
                                          });
                          }
                          return t;
                        })(a.sequence);
                        for (let t of e)
                          'resetAll' === t.type
                            ? ((r = null), (i = null), o.clear())
                            : 'resetForegroundColor' === t.type
                              ? (r = null)
                              : 'resetBackgroundColor' === t.type
                                ? (i = null)
                                : 'resetDecoration' === t.type && o.delete(t.value);
                        for (let t of e)
                          'setForegroundColor' === t.type
                            ? (r = t.value)
                            : 'setBackgroundColor' === t.type
                              ? (i = t.value)
                              : 'setDecoration' === t.type && o.add(t.value);
                      }
                      n = a.position;
                    } while (n < e.length);
                    return t;
                  },
                });
            return s.map((t) =>
              u.parse(t[0]).map((n) => {
                let r, i;
                n.decorations.has('reverse')
                  ? ((r = n.background ? l.value(n.background) : e.bg),
                    (i = n.foreground ? l.value(n.foreground) : e.fg))
                  : ((r = n.foreground ? l.value(n.foreground) : e.fg),
                    (i = n.background ? l.value(n.background) : void 0)),
                  (r = tR(r, a)),
                  (i = tR(i, a)),
                  n.decorations.has('dim') &&
                    (r = (function (e) {
                      let t = e.match(/#([0-9a-f]{3})([0-9a-f]{3})?([0-9a-f]{2})?/);
                      if (t)
                        if (t[3]) {
                          let e = Math.round(Number.parseInt(t[3], 16) / 2)
                            .toString(16)
                            .padStart(2, '0');
                          return `#${t[1]}${t[2]}${e}`;
                        } else if (t[2]) return `#${t[1]}${t[2]}80`;
                        else
                          return `#${Array.from(t[1])
                            .map((e) => `${e}${e}`)
                            .join('')}80`;
                      let n = e.match(/var\((--[\w-]+-ansi-[\w-]+)\)/);
                      return n ? `var(${n[1]}-dim)` : e;
                    })(r));
                let o = v.None;
                return (
                  n.decorations.has('bold') && (o |= v.Bold),
                  n.decorations.has('italic') && (o |= v.Italic),
                  n.decorations.has('underline') && (o |= v.Underline),
                  n.decorations.has('strikethrough') && (o |= v.Strikethrough),
                  { content: n.value, offset: t[1], color: r, bgColor: i, fontStyle: o }
                );
              })
            );
          })(o, t, n);
        let l = e.getLanguage(r);
        if (n.grammarState) {
          if (n.grammarState.lang !== l.name)
            throw new a(
              `Grammar state language "${n.grammarState.lang}" does not match highlight language "${l.name}"`
            );
          if (!n.grammarState.themes.includes(o.name))
            throw new a(`Grammar state themes "${n.grammarState.themes}" do not contain highlight theme "${o.name}"`);
        }
        var u = t,
          c = l,
          h = o,
          p = s,
          d = n;
        let m = tQ(u, c, h, p, d),
          f = new t$(tQ(u, c, h, p, d).stateStack, c.name, h.name);
        return tH(m.tokens, f), m.tokens;
      }
      function tQ(e, t, n, r, i) {
        let o = tL(n, i),
          { tokenizeMaxLineLength: s = 0, tokenizeTimeLimit: l = 500 } = i,
          u = tU(e),
          c = i.grammarState
            ? ((function (e, t) {
                if (!(e instanceof t$)) throw new a('Invalid grammar state');
                return e.getInternalStack(t);
              })(i.grammarState, n.name) ?? e_)
            : null != i.grammarContextCode
              ? tQ(i.grammarContextCode, t, n, r, { ...i, grammarState: void 0, grammarContextCode: void 0 }).stateStack
              : e_,
          h = [],
          p = [];
        for (let e = 0, a = u.length; e < a; e++) {
          let a,
            d,
            [m, f] = u[e];
          if ('' === m) {
            (h = []), p.push([]);
            continue;
          }
          if (s > 0 && m.length >= s) {
            (h = []), p.push([{ content: m, offset: f, color: '', fontStyle: 0 }]);
            continue;
          }
          i.includeExplanation && ((a = t.tokenizeLine(m, c, l).tokens), (d = 0));
          let g = t.tokenizeLine2(m, c, l),
            y = g.tokens.length / 2;
          for (let e = 0; e < y; e++) {
            let t = g.tokens[2 * e],
              s = e + 1 < y ? g.tokens[2 * e + 2] : m.length;
            if (t === s) continue;
            let l = g.tokens[2 * e + 1],
              u = tR(r[A.getForeground(l)], o),
              c = A.getFontStyle(l),
              p = { content: m.substring(t, s), offset: f + t, color: u, fontStyle: c };
            if (i.includeExplanation) {
              let e = [];
              if ('scopeName' !== i.includeExplanation)
                for (let t of n.settings) {
                  let n;
                  switch (typeof t.scope) {
                    case 'string':
                      n = t.scope.split(/,/).map((e) => e.trim());
                      break;
                    case 'object':
                      n = t.scope;
                      break;
                    default:
                      continue;
                  }
                  e.push({ settings: t, selectors: n.map((e) => e.split(/ /)) });
                }
              p.explanation = [];
              let r = 0;
              for (; t + r < s; ) {
                let t = a[d],
                  n = m.substring(t.startIndex, t.endIndex);
                (r += n.length),
                  p.explanation.push({
                    content: n,
                    scopes:
                      'scopeName' === i.includeExplanation
                        ? t.scopes.map((e) => ({ scopeName: e }))
                        : (function (e, t) {
                            let n = [];
                            for (let r = 0, i = t.length; r < i; r++) {
                              let i = t[r];
                              n[r] = {
                                scopeName: i,
                                themeMatches: (function (e, t, n) {
                                  let r = [];
                                  for (let { selectors: i, settings: o } of e)
                                    for (let e of i)
                                      if (
                                        (function (e, t, n) {
                                          if (!tZ(e[e.length - 1], t)) return !1;
                                          let r = e.length - 2,
                                            i = n.length - 1;
                                          for (; r >= 0 && i >= 0; ) tZ(e[r], n[i]) && (r -= 1), (i -= 1);
                                          return -1 === r;
                                        })(e, t, n)
                                      ) {
                                        r.push(o);
                                        break;
                                      }
                                  return r;
                                })(e, i, t.slice(0, r)),
                              };
                            }
                            return n;
                          })(e, t.scopes),
                  }),
                  (d += 1);
              }
            }
            h.push(p);
          }
          p.push(h), (h = []), (c = g.ruleStack);
        }
        return { tokens: p, stateStack: c };
      }
      function tZ(e, t) {
        return e === t || (t.substring(0, e.length) === e && '.' === t[e.length]);
      }
      function t0(e, t, n) {
        let r = Object.entries(n.themes)
            .filter((e) => e[1])
            .map((e) => ({ color: e[0], theme: e[1] })),
          i = r.map((r) => {
            let i = tJ(e, t, { ...n, theme: r.theme }),
              o = tz(i);
            return { tokens: i, state: o, theme: 'string' == typeof r.theme ? r.theme : r.theme.name };
          }),
          o = (function (...e) {
            let t = e.map(() => []),
              n = e.length;
            for (let r = 0; r < e[0].length; r++) {
              let i = e.map((e) => e[r]),
                o = t.map(() => []);
              t.forEach((e, t) => e.push(o[t]));
              let a = i.map(() => 0),
                s = i.map((e) => e[0]);
              for (; s.every((e) => e); ) {
                let e = Math.min(...s.map((e) => e.content.length));
                for (let t = 0; t < n; t++) {
                  let n = s[t];
                  n.content.length === e
                    ? (o[t].push(n), (a[t] += 1), (s[t] = i[t][a[t]]))
                    : (o[t].push({ ...n, content: n.content.slice(0, e) }),
                      (s[t] = { ...n, content: n.content.slice(e), offset: n.offset + e }));
                }
              }
            }
            return t;
          })(...i.map((e) => e.tokens)),
          a = o[0].map((e, t) =>
            e.map((e, i) => {
              let a = { content: e.content, variants: {}, offset: e.offset };
              return (
                'includeExplanation' in n && n.includeExplanation && (a.explanation = e.explanation),
                o.forEach((e, n) => {
                  let { content: o, explanation: s, offset: l, ...u } = e[t][i];
                  a.variants[r[n].color] = u;
                }),
                a
              );
            })
          ),
          s = i[0].state
            ? new t$(Object.fromEntries(i.map((e) => [e.theme, e.state?.getInternalStack(e.theme)])), i[0].state.lang)
            : void 0;
        return s && tH(a, s), a;
      }
      function t1(e, t, n) {
        let r, i, o, s, l, u;
        if ('themes' in n) {
          let { defaultColor: c = 'light', cssVariablePrefix: h = '--shiki-' } = n,
            p = Object.entries(n.themes)
              .filter((e) => e[1])
              .map((e) => ({ color: e[0], theme: e[1] }))
              .sort((e, t) => (e.color === c ? -1 : +(t.color === c)));
          if (0 === p.length) throw new a('`themes` option must not be empty');
          let d = t0(e, t, n);
          if (((u = tz(d)), c && !p.find((e) => e.color === c)))
            throw new a(`\`themes\` option must contain the defaultColor key \`${c}\``);
          let m = p.map((t) => e.getTheme(t.theme)),
            f = p.map((e) => e.color);
          (o = d.map((e) =>
            e.map((e) =>
              (function (e, t, n, r) {
                let i = { content: e.content, explanation: e.explanation, offset: e.offset },
                  o = t.map((t) => tG(e.variants[t])),
                  a = new Set(o.flatMap((e) => Object.keys(e))),
                  s = {};
                return (
                  o.forEach((e, i) => {
                    for (let o of a) {
                      let a = e[o] || 'inherit';
                      if (0 === i && r) s[o] = a;
                      else {
                        let e = 'color' === o ? '' : 'background-color' === o ? '-bg' : `-${o}`;
                        s[n + t[i] + ('color' === o ? '' : e)] = a;
                      }
                    }
                  }),
                  (i.htmlStyle = s),
                  i
                );
              })(e, f, h, c)
            )
          )),
            u && tH(o, u);
          let g = p.map((e) => tL(e.theme, n));
          (i = p.map((e, t) => (0 === t && c ? '' : `${h + e.color}:`) + (tR(m[t].fg, g[t]) || 'inherit')).join(';')),
            (r = p
              .map((e, t) => (0 === t && c ? '' : `${h + e.color}-bg:`) + (tR(m[t].bg, g[t]) || 'inherit'))
              .join(';')),
            (s = `shiki-themes ${m.map((e) => e.name).join(' ')}`),
            (l = c ? void 0 : [i, r].join(';'));
        } else if ('theme' in n) {
          let a = tL(n.theme, n);
          o = tJ(e, t, n);
          let l = e.getTheme(n.theme);
          (r = tR(l.bg, a)), (i = tR(l.fg, a)), (s = l.name), (u = tz(o));
        } else throw new a('Invalid options, either `theme` or `themes` must be provided');
        return { tokens: o, fg: i, bg: r, themeName: s, rootStyle: l, grammarState: u };
      }
      function t2(
        e,
        t,
        n,
        r = { meta: {}, options: n, codeToHast: (t, n) => t2(e, t, n), codeToTokens: (t, n) => t1(e, t, n) }
      ) {
        let i = t;
        for (let e of tq(n)) i = e.preprocess?.call(r, i, n) || i;
        let { tokens: o, fg: a, bg: s, themeName: l, rootStyle: u, grammarState: c } = t1(e, i, n),
          { mergeWhitespaces: h = !0, mergeSameStyleTokens: p = !1 } = n;
        !0 === h
          ? (o = o.map((e) => {
              let t = [],
                n = '',
                r = 0;
              return (
                e.forEach((i, o) => {
                  let a = !(i.fontStyle && (i.fontStyle & v.Underline || i.fontStyle & v.Strikethrough));
                  a && i.content.match(/^\s+$/) && e[o + 1]
                    ? (r || (r = i.offset), (n += i.content))
                    : n
                      ? (a ? t.push({ ...i, offset: r, content: n + i.content }) : t.push({ content: n, offset: r }, i),
                        (r = 0),
                        (n = ''))
                      : t.push(i);
                }),
                t
              );
            }))
          : 'never' === h &&
            (o = o.map((e) =>
              e.flatMap((e) => {
                if (e.content.match(/^\s+$/)) return e;
                let t = e.content.match(/^(\s*)(.*?)(\s*)$/);
                if (!t) return e;
                let [, n, r, i] = t;
                if (!n && !i) return e;
                let o = [{ ...e, offset: e.offset + n.length, content: r }];
                return (
                  n && o.unshift({ content: n, offset: e.offset }),
                  i && o.push({ content: i, offset: e.offset + n.length + r.length }),
                  o
                );
              })
            )),
          p &&
            (o = o.map((e) => {
              let t = [];
              for (let n of e) {
                if (0 === t.length) {
                  t.push({ ...n });
                  continue;
                }
                let e = t[t.length - 1],
                  r = e.htmlStyle || tj(tG(e)),
                  i = n.htmlStyle || tj(tG(n)),
                  o = e.fontStyle && (e.fontStyle & v.Underline || e.fontStyle & v.Strikethrough),
                  a = n.fontStyle && (n.fontStyle & v.Underline || n.fontStyle & v.Strikethrough);
                o || a || r !== i ? t.push({ ...n }) : (e.content += n.content);
              }
              return t;
            }));
        let d = {
          ...r,
          get source() {
            return i;
          },
        };
        for (let e of tq(n)) o = e.tokens?.call(d, o) || o;
        return (function (e, t, n, r = tz(e)) {
          let i = tq(t),
            o = [],
            a = { type: 'root', children: [] },
            { structure: s = 'classic', tabindex: l = '0' } = t,
            u = {
              type: 'element',
              tagName: 'pre',
              properties: {
                class: `shiki ${t.themeName || ''}`,
                style: t.rootStyle || `background-color:${t.bg};color:${t.fg}`,
                ...(!1 !== l && null != l ? { tabindex: l.toString() } : {}),
                ...Object.fromEntries(Array.from(Object.entries(t.meta || {})).filter(([e]) => !e.startsWith('_'))),
              },
              children: [],
            },
            c = { type: 'element', tagName: 'code', properties: {}, children: o },
            h = [],
            p = {
              ...n,
              structure: s,
              addClassToHast: tB,
              get source() {
                return n.source;
              },
              get tokens() {
                return e;
              },
              get options() {
                return t;
              },
              get root() {
                return a;
              },
              get pre() {
                return u;
              },
              get code() {
                return c;
              },
              get lines() {
                return h;
              },
            };
          if (
            (e.forEach((e, t) => {
              t &&
                ('inline' === s
                  ? a.children.push({ type: 'element', tagName: 'br', properties: {}, children: [] })
                  : 'classic' === s && o.push({ type: 'text', value: '\n' }));
              let n = { type: 'element', tagName: 'span', properties: { class: 'line' }, children: [] },
                r = 0;
              for (let o of e) {
                let e = {
                    type: 'element',
                    tagName: 'span',
                    properties: { ...o.htmlAttrs },
                    children: [{ type: 'text', value: o.content }],
                  },
                  l = tj(o.htmlStyle || tG(o));
                for (let a of (l && (e.properties.style = l), i)) e = a?.span?.call(p, e, t + 1, r, n, o) || e;
                'inline' === s ? a.children.push(e) : 'classic' === s && n.children.push(e), (r += o.content.length);
              }
              if ('classic' === s) {
                for (let e of i) n = e?.line?.call(p, n, t + 1) || n;
                h.push(n), o.push(n);
              }
            }),
            'classic' === s)
          ) {
            for (let e of i) c = e?.code?.call(p, c) || c;
            for (let e of (u.children.push(c), i)) u = e?.pre?.call(p, u) || u;
            a.children.push(u);
          }
          let d = a;
          for (let e of i) d = e?.root?.call(p, d) || d;
          return r && tH(d, r), d;
        })(o, { ...n, fg: a, bg: s, themeName: l, rootStyle: u }, d, c);
      }
      let t3 = function (e, t) {
          let n = t || tT,
            r = n.quote || '"';
          if ('"' !== r && "'" !== r) throw Error('Invalid quote `' + r + '`, expected `\'` or `"`');
          return {
            one: tx,
            all: tP,
            settings: {
              omitOptionalTags: n.omitOptionalTags || !1,
              allowParseErrors: n.allowParseErrors || !1,
              allowDangerousCharacters: n.allowDangerousCharacters || !1,
              quoteSmart: n.quoteSmart || !1,
              preferUnquoted: n.preferUnquoted || !1,
              tightAttributes: n.tightAttributes || !1,
              upperDoctype: n.upperDoctype || !1,
              tightDoctype: n.tightDoctype || !1,
              bogusComments: n.bogusComments || !1,
              tightCommaSeparatedLists: n.tightCommaSeparatedLists || !1,
              tightSelfClosing: n.tightSelfClosing || !1,
              collapseEmptyAttributes: n.collapseEmptyAttributes || !1,
              allowDangerousHtml: n.allowDangerousHtml || !1,
              voids: n.voids || ev,
              characterReferences: n.characterReferences || tN,
              closeSelfClosing: n.closeSelfClosing || !1,
              closeEmptyElements: n.closeEmptyElements || !1,
            },
            schema: 'svg' === n.space ? eq : eW,
            quote: r,
            alternative: '"' === r ? "'" : '"',
          }.one(Array.isArray(e) ? { type: 'root', children: e } : e, void 0, void 0);
        },
        t5 = { light: '#333333', dark: '#bbbbbb' },
        t6 = { light: '#fffffe', dark: '#1e1e1e' },
        t8 = '__shiki_resolved';
      function t4(e) {
        if (e?.[t8]) return e;
        let t = { ...e };
        t.tokenColors && !t.settings && ((t.settings = t.tokenColors), delete t.tokenColors),
          (t.type ||= 'dark'),
          (t.colorReplacements = { ...t.colorReplacements }),
          (t.settings ||= []);
        let { bg: n, fg: r } = t;
        if (!n || !r) {
          let e = t.settings ? t.settings.find((e) => !e.name && !e.scope) : void 0;
          e?.settings?.foreground && (r = e.settings.foreground),
            e?.settings?.background && (n = e.settings.background),
            !r && t?.colors?.['editor.foreground'] && (r = t.colors['editor.foreground']),
            !n && t?.colors?.['editor.background'] && (n = t.colors['editor.background']),
            r || (r = 'light' === t.type ? t5.light : t5.dark),
            n || (n = 'light' === t.type ? t6.light : t6.dark),
            (t.fg = r),
            (t.bg = n);
        }
        (t.settings[0] && t.settings[0].settings && !t.settings[0].scope) ||
          t.settings.unshift({ settings: { foreground: t.fg, background: t.bg } });
        let i = 0,
          o = new Map();
        function a(e) {
          if (o.has(e)) return o.get(e);
          i += 1;
          let n = `#${i.toString(16).padStart(8, '0').toLowerCase()}`;
          return t.colorReplacements?.[`#${n}`] ? a(e) : (o.set(e, n), n);
        }
        for (let e of ((t.settings = t.settings.map((e) => {
          let n = e.settings?.foreground && !e.settings.foreground.startsWith('#'),
            r = e.settings?.background && !e.settings.background.startsWith('#');
          if (!n && !r) return e;
          let i = { ...e, settings: { ...e.settings } };
          if (n) {
            let n = a(e.settings.foreground);
            (t.colorReplacements[n] = e.settings.foreground), (i.settings.foreground = n);
          }
          if (r) {
            let n = a(e.settings.background);
            (t.colorReplacements[n] = e.settings.background), (i.settings.background = n);
          }
          return i;
        })),
        Object.keys(t.colors || {})))
          if (
            ('editor.foreground' === e || 'editor.background' === e || e.startsWith('terminal.ansi')) &&
            !t.colors[e]?.startsWith('#')
          ) {
            let n = a(t.colors[e]);
            (t.colorReplacements[n] = t.colors[e]), (t.colors[e] = n);
          }
        return Object.defineProperty(t, t8, { enumerable: !1, writable: !1, value: !0 }), t;
      }
      async function t9(e) {
        return Array.from(
          new Set(
            (
              await Promise.all(
                e.filter((e) => !tM(e)).map(async (e) => await tO(e).then((e) => (Array.isArray(e) ? e : [e])))
              )
            ).flat()
          )
        );
      }
      async function t7(e) {
        return (await Promise.all(e.map(async (e) => (tD(e) ? null : t4(await tO(e)))))).filter((e) => !!e);
      }
      class ne extends Error {
        constructor(e) {
          super(e), (this.name = 'ShikiError');
        }
      }
      class nt extends eb {
        constructor(e, t, n, r = {}) {
          super(e),
            (this._resolver = e),
            (this._themes = t),
            (this._langs = n),
            (this._alias = r),
            this._themes.map((e) => this.loadTheme(e)),
            this.loadLanguages(this._langs);
        }
        _resolvedThemes = new Map();
        _resolvedGrammars = new Map();
        _langMap = new Map();
        _langGraph = new Map();
        _textmateThemeCache = new WeakMap();
        _loadedThemesCache = null;
        _loadedLanguagesCache = null;
        getTheme(e) {
          return 'string' == typeof e ? this._resolvedThemes.get(e) : this.loadTheme(e);
        }
        loadTheme(e) {
          let t = t4(e);
          return t.name && (this._resolvedThemes.set(t.name, t), (this._loadedThemesCache = null)), t;
        }
        getLoadedThemes() {
          return (
            this._loadedThemesCache || (this._loadedThemesCache = [...this._resolvedThemes.keys()]),
            this._loadedThemesCache
          );
        }
        setTheme(e) {
          let t = this._textmateThemeCache.get(e);
          t || ((t = g.createFromRawTheme(e)), this._textmateThemeCache.set(e, t)), this._syncRegistry.setTheme(t);
        }
        getGrammar(e) {
          if (this._alias[e]) {
            let t = new Set([e]);
            for (; this._alias[e]; ) {
              if (((e = this._alias[e]), t.has(e)))
                throw new ne(`Circular alias \`${Array.from(t).join(' -> ')} -> ${e}\``);
              t.add(e);
            }
          }
          return this._resolvedGrammars.get(e);
        }
        loadLanguage(e) {
          if (this.getGrammar(e.name)) return;
          let t = new Set([...this._langMap.values()].filter((t) => t.embeddedLangsLazy?.includes(e.name)));
          this._resolver.addLanguage(e);
          let n = {
            balancedBracketSelectors: e.balancedBracketSelectors || ['*'],
            unbalancedBracketSelectors: e.unbalancedBracketSelectors || [],
          };
          this._syncRegistry._rawGrammars.set(e.scopeName, e);
          let r = this.loadGrammarWithConfiguration(e.scopeName, 1, n);
          if (
            ((r.name = e.name),
            this._resolvedGrammars.set(e.name, r),
            e.aliases &&
              e.aliases.forEach((t) => {
                this._alias[t] = e.name;
              }),
            (this._loadedLanguagesCache = null),
            t.size)
          )
            for (let e of t)
              this._resolvedGrammars.delete(e.name),
                (this._loadedLanguagesCache = null),
                this._syncRegistry?._injectionGrammars?.delete(e.scopeName),
                this._syncRegistry?._grammars?.delete(e.scopeName),
                this.loadLanguage(this._langMap.get(e.name));
        }
        dispose() {
          super.dispose(),
            this._resolvedThemes.clear(),
            this._resolvedGrammars.clear(),
            this._langMap.clear(),
            this._langGraph.clear(),
            (this._loadedThemesCache = null);
        }
        loadLanguages(e) {
          for (let t of e) this.resolveEmbeddedLanguages(t);
          let t = Array.from(this._langGraph.entries()),
            n = t.filter(([e, t]) => !t);
          if (n.length) {
            let e = t
              .filter(([e, t]) => t && t.embeddedLangs?.some((e) => n.map(([e]) => e).includes(e)))
              .filter((e) => !n.includes(e));
            throw new ne(
              `Missing languages ${n.map(([e]) => `\`${e}\``).join(', ')}, required by ${e.map(([e]) => `\`${e}\``).join(', ')}`
            );
          }
          for (let [e, n] of t) this._resolver.addLanguage(n);
          for (let [e, n] of t) this.loadLanguage(n);
        }
        getLoadedLanguages() {
          return (
            this._loadedLanguagesCache ||
              (this._loadedLanguagesCache = [
                ...new Set([...this._resolvedGrammars.keys(), ...Object.keys(this._alias)]),
              ]),
            this._loadedLanguagesCache
          );
        }
        resolveEmbeddedLanguages(e) {
          if ((this._langMap.set(e.name, e), this._langGraph.set(e.name, e), e.embeddedLangs))
            for (let t of e.embeddedLangs) this._langGraph.set(t, this._langMap.get(t));
        }
      }
      class nn {
        _langs = new Map();
        _scopeToLang = new Map();
        _injections = new Map();
        _onigLib;
        constructor(e, t) {
          (this._onigLib = {
            createOnigScanner: (t) => e.createScanner(t),
            createOnigString: (t) => e.createString(t),
          }),
            t.forEach((e) => this.addLanguage(e));
        }
        get onigLib() {
          return this._onigLib;
        }
        getLangRegistration(e) {
          return this._langs.get(e);
        }
        loadGrammar(e) {
          return this._scopeToLang.get(e);
        }
        addLanguage(e) {
          this._langs.set(e.name, e),
            e.aliases &&
              e.aliases.forEach((t) => {
                this._langs.set(t, e);
              }),
            this._scopeToLang.set(e.scopeName, e),
            e.injectTo &&
              e.injectTo.forEach((t) => {
                this._injections.get(t) || this._injections.set(t, []), this._injections.get(t).push(e.scopeName);
              });
        }
        getInjections(e) {
          let t = e.split('.'),
            n = [];
          for (let e = 1; e <= t.length; e++) {
            let r = t.slice(0, e).join('.');
            n = [...n, ...(this._injections.get(r) || [])];
          }
          return n;
        }
      }
      let nr = 0;
      async function ni(e) {
        e.engine ||
          (function (e, t = 3) {
            if (1 && !(t > 3))
              if (1) console.trace(`[SHIKI DEPRECATE]: ${e}`);
              else throw Error(`[SHIKI DEPRECATE]: ${e}`);
          })(
            '`engine` option is required. Use `createOnigurumaEngine` or `createJavaScriptRegexEngine` to create an engine.'
          );
        let [t, n, r] = await Promise.all([t7(e.themes || []), t9(e.langs || []), e.engine]);
        return (function (e) {
          let t;
          (nr += 1),
            !1 !== e.warnings &&
              nr >= 10 &&
              nr % 10 == 0 &&
              console.warn(
                `[Shiki] ${nr} instances have been created. Shiki is supposed to be used as a singleton, consider refactoring your code to cache your highlighter instance; Or call \`highlighter.dispose()\` to release unused instances.`
              );
          let n = !1;
          if (!e.engine) throw new ne('`engine` option is required for synchronous mode');
          let r = (e.langs || []).flat(1),
            i = (e.themes || []).flat(1).map(t4),
            o = new nt(new nn(e.engine, r), i, r, e.langAlias);
          function a(e) {
            if ('none' === e) return { bg: '', fg: '', name: 'none', settings: [], type: 'dark' };
            u();
            let t = o.getTheme(e);
            if (!t) throw new ne(`Theme \`${e}\` not found, you may need to load it first`);
            return t;
          }
          function s(...e) {
            u(), o.loadLanguages(e.flat(1));
          }
          function l(...e) {
            for (let t of (u(), e.flat(1))) o.loadTheme(t);
          }
          function u() {
            if (n) throw new ne('Shiki instance has been disposed');
          }
          function c() {
            n || ((n = !0), o.dispose(), (nr -= 1));
          }
          return {
            setTheme: function (e) {
              u();
              let n = a(e);
              return t !== e && (o.setTheme(n), (t = e)), { theme: n, colorMap: o.getColorMap() };
            },
            getTheme: a,
            getLanguage: function (e) {
              u();
              let t = o.getGrammar('string' == typeof e ? e : e.name);
              if (!t) throw new ne(`Language \`${e}\` not found, you may need to load it first`);
              return t;
            },
            getLoadedThemes: function () {
              return u(), o.getLoadedThemes();
            },
            getLoadedLanguages: function () {
              return u(), o.getLoadedLanguages();
            },
            loadLanguage: async function (...e) {
              return s(await t9(e));
            },
            loadLanguageSync: s,
            loadTheme: async function (...e) {
              return u(), l(await t7(e));
            },
            loadThemeSync: l,
            dispose: c,
            [Symbol.dispose]: c,
          };
        })({ ...e, themes: t, langs: n, engine: r });
      }
      async function no(e) {
        let t = await ni(e);
        return {
          getLastGrammarState: (...e) =>
            (function (...e) {
              if (2 === e.length) return tz(e[1]);
              let [t, n, r = {}] = e,
                { lang: i = 'text', theme: o = t.getLoadedThemes()[0] } = r;
              if (tI(i) || tD(o)) throw new a('Plain language does not have grammar state');
              if ('ansi' === i) throw new a('ANSI language does not have grammar state');
              let { theme: s, colorMap: l } = t.setTheme(o),
                u = t.getLanguage(i);
              return new t$(tQ(n, u, s, l, r).stateStack, u.name, s.name);
            })(t, ...e),
          codeToTokensBase: (e, n) => tJ(t, e, n),
          codeToTokensWithThemes: (e, n) => t0(t, e, n),
          codeToTokens: (e, n) => t1(t, e, n),
          codeToHast: (e, n) => t2(t, e, n),
          codeToHtml: (e, n) =>
            (function (e, t, n) {
              let r = { meta: {}, options: n, codeToHast: (t, n) => t2(e, t, n), codeToTokens: (t, n) => t1(e, t, n) },
                i = t3(t2(e, t, n, r));
              for (let e of tq(n)) i = e.postprocess?.call(r, i, n) || i;
              return i;
            })(t, e, n),
          getBundledLanguages: () => ({}),
          getBundledThemes: () => ({}),
          ...t,
          getInternalContext: () => t,
        };
      }
      let na = [
          { id: 'abap', name: 'ABAP', import: () => n.e(1310).then(n.bind(n, 1310)) },
          { id: 'actionscript-3', name: 'ActionScript', import: () => n.e(8215).then(n.bind(n, 8215)) },
          { id: 'ada', name: 'Ada', import: () => n.e(7270).then(n.bind(n, 7270)) },
          {
            id: 'angular-html',
            name: 'Angular HTML',
            import: () => Promise.all([n.e(6705), n.e(3939), n.e(947), n.e(2488)]).then(n.bind(n, 2488)),
          },
          {
            id: 'angular-ts',
            name: 'Angular TypeScript',
            import: () =>
              Promise.all([n.e(6705), n.e(2540), n.e(3939), n.e(947), n.e(232), n.e(7404)]).then(n.bind(n, 848)),
          },
          { id: 'apache', name: 'Apache Conf', import: () => n.e(4006).then(n.bind(n, 4006)) },
          { id: 'apex', name: 'Apex', import: () => n.e(6952).then(n.bind(n, 6952)) },
          {
            id: 'apl',
            name: 'APL',
            import: () => Promise.all([n.e(6705), n.e(3939), n.e(947), n.e(2268), n.e(6259)]).then(n.bind(n, 6259)),
          },
          { id: 'applescript', name: 'AppleScript', import: () => n.e(9539).then(n.bind(n, 9539)) },
          { id: 'ara', name: 'Ara', import: () => n.e(7355).then(n.bind(n, 9736)) },
          { id: 'asciidoc', name: 'AsciiDoc', aliases: ['adoc'], import: () => n.e(8693).then(n.bind(n, 8693)) },
          { id: 'asm', name: 'Assembly', import: () => n.e(347).then(n.bind(n, 347)) },
          {
            id: 'astro',
            name: 'Astro',
            import: () => Promise.all([n.e(6705), n.e(4402), n.e(3939), n.e(5599)]).then(n.bind(n, 5599)),
          },
          { id: 'awk', name: 'AWK', import: () => n.e(3573).then(n.bind(n, 3573)) },
          { id: 'ballerina', name: 'Ballerina', import: () => n.e(4742).then(n.bind(n, 4742)) },
          { id: 'bat', name: 'Batch File', aliases: ['batch'], import: () => n.e(5123).then(n.bind(n, 5123)) },
          { id: 'beancount', name: 'Beancount', import: () => n.e(1341).then(n.bind(n, 1341)) },
          { id: 'berry', name: 'Berry', aliases: ['be'], import: () => n.e(4474).then(n.bind(n, 4474)) },
          { id: 'bibtex', name: 'BibTeX', import: () => n.e(7442).then(n.bind(n, 7442)) },
          { id: 'bicep', name: 'Bicep', import: () => n.e(6411).then(n.bind(n, 6411)) },
          {
            id: 'blade',
            name: 'Blade',
            import: () =>
              Promise.all([n.e(6705), n.e(3939), n.e(947), n.e(2268), n.e(9754), n.e(6800)]).then(n.bind(n, 6800)),
          },
          { id: 'bsl', name: '1C (Enterprise)', aliases: ['1c'], import: () => n.e(1953).then(n.bind(n, 1953)) },
          { id: 'c', name: 'C', import: () => n.e(5233).then(n.bind(n, 5233)) },
          { id: 'cadence', name: 'Cadence', aliases: ['cdc'], import: () => n.e(1711).then(n.bind(n, 1711)) },
          { id: 'cairo', name: 'Cairo', import: () => Promise.all([n.e(3034), n.e(7542)]).then(n.bind(n, 7542)) },
          { id: 'clarity', name: 'Clarity', import: () => n.e(1394).then(n.bind(n, 1394)) },
          { id: 'clojure', name: 'Clojure', aliases: ['clj'], import: () => n.e(2294).then(n.bind(n, 2294)) },
          { id: 'cmake', name: 'CMake', import: () => n.e(7403).then(n.bind(n, 7403)) },
          {
            id: 'cobol',
            name: 'COBOL',
            import: () => Promise.all([n.e(6705), n.e(3939), n.e(947), n.e(2268), n.e(1599)]).then(n.bind(n, 1599)),
          },
          { id: 'codeowners', name: 'CODEOWNERS', import: () => n.e(1043).then(n.bind(n, 1043)) },
          { id: 'codeql', name: 'CodeQL', aliases: ['ql'], import: () => n.e(4520).then(n.bind(n, 4520)) },
          {
            id: 'coffee',
            name: 'CoffeeScript',
            aliases: ['coffeescript'],
            import: () => Promise.all([n.e(6705), n.e(9736)]).then(n.bind(n, 7355)),
          },
          { id: 'common-lisp', name: 'Common Lisp', aliases: ['lisp'], import: () => n.e(8218).then(n.bind(n, 8218)) },
          { id: 'coq', name: 'Coq', import: () => n.e(8793).then(n.bind(n, 8793)) },
          {
            id: 'cpp',
            name: 'C++',
            aliases: ['c++'],
            import: () => Promise.all([n.e(4226), n.e(4478), n.e(9754), n.e(5233), n.e(7692)]).then(n.bind(n, 3745)),
          },
          {
            id: 'crystal',
            name: 'Crystal',
            import: () =>
              Promise.all([n.e(6705), n.e(3939), n.e(947), n.e(9754), n.e(5233), n.e(7917), n.e(1184)]).then(
                n.bind(n, 1184)
              ),
          },
          { id: 'csharp', name: 'C#', aliases: ['c#', 'cs'], import: () => n.e(3193).then(n.bind(n, 3193)) },
          { id: 'css', name: 'CSS', import: () => n.e(3939).then(n.bind(n, 3939)) },
          { id: 'csv', name: 'CSV', import: () => n.e(842).then(n.bind(n, 842)) },
          { id: 'cue', name: 'CUE', import: () => n.e(6003).then(n.bind(n, 6003)) },
          { id: 'cypher', name: 'Cypher', aliases: ['cql'], import: () => n.e(1241).then(n.bind(n, 1241)) },
          { id: 'd', name: 'D', import: () => n.e(4350).then(n.bind(n, 1969)) },
          { id: 'dart', name: 'Dart', import: () => n.e(2883).then(n.bind(n, 2883)) },
          { id: 'dax', name: 'DAX', import: () => n.e(2513).then(n.bind(n, 2513)) },
          { id: 'desktop', name: 'Desktop', import: () => n.e(1094).then(n.bind(n, 1094)) },
          { id: 'diff', name: 'Diff', import: () => n.e(297).then(n.bind(n, 297)) },
          { id: 'docker', name: 'Dockerfile', aliases: ['dockerfile'], import: () => n.e(2772).then(n.bind(n, 2772)) },
          { id: 'dotenv', name: 'dotEnv', import: () => n.e(5898).then(n.bind(n, 5898)) },
          { id: 'dream-maker', name: 'Dream Maker', import: () => n.e(6912).then(n.bind(n, 6912)) },
          {
            id: 'edge',
            name: 'Edge',
            import: () => Promise.all([n.e(6705), n.e(4402), n.e(3939), n.e(947), n.e(7111)]).then(n.bind(n, 7111)),
          },
          {
            id: 'elixir',
            name: 'Elixir',
            import: () => Promise.all([n.e(6705), n.e(3939), n.e(947), n.e(2833)]).then(n.bind(n, 2833)),
          },
          { id: 'elm', name: 'Elm', import: () => Promise.all([n.e(5233), n.e(7350)]).then(n.bind(n, 7350)) },
          { id: 'emacs-lisp', name: 'Emacs Lisp', aliases: ['elisp'], import: () => n.e(5428).then(n.bind(n, 4398)) },
          {
            id: 'erb',
            name: 'ERB',
            import: () =>
              Promise.all([
                n.e(6705),
                n.e(4402),
                n.e(2422),
                n.e(3824),
                n.e(4226),
                n.e(4478),
                n.e(3939),
                n.e(947),
                n.e(2268),
                n.e(9754),
                n.e(5233),
                n.e(7917),
                n.e(8937),
                n.e(3791),
                n.e(6855),
              ]).then(n.bind(n, 6855)),
          },
          { id: 'erlang', name: 'Erlang', aliases: ['erl'], import: () => n.e(8113).then(n.bind(n, 8113)) },
          { id: 'fennel', name: 'Fennel', import: () => n.e(7576).then(n.bind(n, 7576)) },
          { id: 'fish', name: 'Fish', import: () => n.e(1478).then(n.bind(n, 1478)) },
          { id: 'fluent', name: 'Fluent', aliases: ['ftl'], import: () => n.e(5526).then(n.bind(n, 5526)) },
          {
            id: 'fortran-fixed-form',
            name: 'Fortran (Fixed Form)',
            aliases: ['f', 'for', 'f77'],
            import: () => Promise.all([n.e(2358), n.e(482)]).then(n.bind(n, 482)),
          },
          {
            id: 'fortran-free-form',
            name: 'Fortran (Free Form)',
            aliases: ['f90', 'f95', 'f03', 'f08', 'f18'],
            import: () => n.e(2358).then(n.bind(n, 2358)),
          },
          {
            id: 'fsharp',
            name: 'F#',
            aliases: ['f#', 'fs'],
            import: () => Promise.all([n.e(6639), n.e(2934)]).then(n.bind(n, 2934)),
          },
          { id: 'gdresource', name: 'GDResource', import: () => n.e(5173).then(n.bind(n, 5173)) },
          { id: 'gdscript', name: 'GDScript', import: () => n.e(1775).then(n.bind(n, 4156)) },
          { id: 'gdshader', name: 'GDShader', import: () => n.e(10).then(n.bind(n, 10)) },
          { id: 'genie', name: 'Genie', import: () => n.e(2502).then(n.bind(n, 2502)) },
          { id: 'gherkin', name: 'Gherkin', import: () => n.e(2588).then(n.bind(n, 2588)) },
          { id: 'git-commit', name: 'Git Commit Message', import: () => n.e(8498).then(n.bind(n, 6117)) },
          {
            id: 'git-rebase',
            name: 'Git Rebase Message',
            import: () => Promise.all([n.e(7917), n.e(7537)]).then(n.bind(n, 7537)),
          },
          { id: 'gleam', name: 'Gleam', import: () => n.e(906).then(n.bind(n, 906)) },
          {
            id: 'glimmer-js',
            name: 'Glimmer JS',
            aliases: ['gjs'],
            import: () => Promise.all([n.e(6705), n.e(4402), n.e(3939), n.e(947), n.e(9643)]).then(n.bind(n, 9643)),
          },
          {
            id: 'glimmer-ts',
            name: 'Glimmer TS',
            aliases: ['gts'],
            import: () => Promise.all([n.e(6705), n.e(4402), n.e(3939), n.e(947), n.e(2905)]).then(n.bind(n, 2905)),
          },
          { id: 'glsl', name: 'GLSL', import: () => Promise.all([n.e(5233), n.e(5048)]).then(n.bind(n, 5048)) },
          { id: 'gnuplot', name: 'Gnuplot', import: () => n.e(6635).then(n.bind(n, 6635)) },
          { id: 'go', name: 'Go', import: () => n.e(6182).then(n.bind(n, 6182)) },
          {
            id: 'graphql',
            name: 'GraphQL',
            aliases: ['gql'],
            import: () => Promise.all([n.e(6705), n.e(4402), n.e(2422), n.e(3824), n.e(8937)]).then(n.bind(n, 8937)),
          },
          { id: 'groovy', name: 'Groovy', import: () => n.e(7610).then(n.bind(n, 7610)) },
          {
            id: 'hack',
            name: 'Hack',
            import: () => Promise.all([n.e(6705), n.e(3939), n.e(947), n.e(9754), n.e(9443)]).then(n.bind(n, 9443)),
          },
          {
            id: 'haml',
            name: 'Ruby Haml',
            import: () => Promise.all([n.e(6705), n.e(3939), n.e(5934)]).then(n.bind(n, 5934)),
          },
          {
            id: 'handlebars',
            name: 'Handlebars',
            aliases: ['hbs'],
            import: () => Promise.all([n.e(6705), n.e(3939), n.e(947), n.e(8572)]).then(n.bind(n, 8572)),
          },
          { id: 'haskell', name: 'Haskell', aliases: ['hs'], import: () => n.e(1250).then(n.bind(n, 1250)) },
          { id: 'haxe', name: 'Haxe', import: () => n.e(4856).then(n.bind(n, 4856)) },
          { id: 'hcl', name: 'HashiCorp HCL', import: () => n.e(2267).then(n.bind(n, 2267)) },
          { id: 'hjson', name: 'Hjson', import: () => n.e(7676).then(n.bind(n, 7676)) },
          { id: 'hlsl', name: 'HLSL', import: () => n.e(6517).then(n.bind(n, 6517)) },
          {
            id: 'html',
            name: 'HTML',
            import: () => Promise.all([n.e(6705), n.e(3939), n.e(947)]).then(n.bind(n, 947)),
          },
          {
            id: 'html-derivative',
            name: 'HTML (Derivative)',
            import: () => Promise.all([n.e(6705), n.e(3939), n.e(947), n.e(5005)]).then(n.bind(n, 5005)),
          },
          {
            id: 'http',
            name: 'HTTP',
            import: () =>
              Promise.all([
                n.e(6705),
                n.e(4402),
                n.e(2422),
                n.e(3824),
                n.e(2268),
                n.e(7917),
                n.e(8937),
                n.e(3188),
              ]).then(n.bind(n, 3188)),
          },
          { id: 'hxml', name: 'HXML', import: () => n.e(5135).then(n.bind(n, 5135)) },
          { id: 'hy', name: 'Hy', import: () => n.e(8065).then(n.bind(n, 8065)) },
          { id: 'imba', name: 'Imba', import: () => n.e(8381).then(n.bind(n, 8381)) },
          { id: 'ini', name: 'INI', aliases: ['properties'], import: () => n.e(4036).then(n.bind(n, 4036)) },
          { id: 'java', name: 'Java', import: () => n.e(2268).then(n.bind(n, 2268)) },
          { id: 'javascript', name: 'JavaScript', aliases: ['js'], import: () => n.e(6705).then(n.bind(n, 6577)) },
          {
            id: 'jinja',
            name: 'Jinja',
            import: () => Promise.all([n.e(6705), n.e(3939), n.e(947), n.e(7522)]).then(n.bind(n, 7522)),
          },
          { id: 'jison', name: 'Jison', import: () => Promise.all([n.e(6705), n.e(379)]).then(n.bind(n, 379)) },
          { id: 'json', name: 'JSON', import: () => n.e(1086).then(n.bind(n, 1086)) },
          { id: 'json5', name: 'JSON5', import: () => n.e(4697).then(n.bind(n, 4697)) },
          { id: 'jsonc', name: 'JSON with Comments', import: () => n.e(3315).then(n.bind(n, 3315)) },
          { id: 'jsonl', name: 'JSON Lines', import: () => n.e(5596).then(n.bind(n, 5596)) },
          { id: 'jsonnet', name: 'Jsonnet', import: () => n.e(5469).then(n.bind(n, 5469)) },
          { id: 'jssm', name: 'JSSM', aliases: ['fsl'], import: () => n.e(6337).then(n.bind(n, 6337)) },
          { id: 'jsx', name: 'JSX', import: () => n.e(2422).then(n.bind(n, 2437)) },
          {
            id: 'julia',
            name: 'Julia',
            aliases: ['jl'],
            import: () =>
              Promise.all([
                n.e(6705),
                n.e(4226),
                n.e(4478),
                n.e(9754),
                n.e(5233),
                n.e(3034),
                n.e(6588),
                n.e(1748),
              ]).then(n.bind(n, 3161)),
          },
          { id: 'kotlin', name: 'Kotlin', aliases: ['kt', 'kts'], import: () => n.e(1447).then(n.bind(n, 1447)) },
          { id: 'kusto', name: 'Kusto', aliases: ['kql'], import: () => n.e(2410).then(n.bind(n, 2410)) },
          { id: 'latex', name: 'LaTeX', import: () => Promise.all([n.e(6588), n.e(9622)]).then(n.bind(n, 9622)) },
          { id: 'lean', name: 'Lean 4', aliases: ['lean4'], import: () => n.e(212).then(n.bind(n, 212)) },
          { id: 'less', name: 'Less', import: () => n.e(4051).then(n.bind(n, 4051)) },
          {
            id: 'liquid',
            name: 'Liquid',
            import: () => Promise.all([n.e(6705), n.e(3939), n.e(947), n.e(8196)]).then(n.bind(n, 8196)),
          },
          { id: 'llvm', name: 'LLVM IR', import: () => n.e(9415).then(n.bind(n, 9415)) },
          { id: 'log', name: 'Log file', import: () => n.e(1936).then(n.bind(n, 1936)) },
          { id: 'logo', name: 'Logo', import: () => n.e(8481).then(n.bind(n, 8481)) },
          { id: 'lua', name: 'Lua', import: () => Promise.all([n.e(5233), n.e(9480)]).then(n.bind(n, 9480)) },
          { id: 'luau', name: 'Luau', import: () => n.e(6287).then(n.bind(n, 6287)) },
          { id: 'make', name: 'Makefile', aliases: ['makefile'], import: () => n.e(7066).then(n.bind(n, 7066)) },
          { id: 'markdown', name: 'Markdown', aliases: ['md'], import: () => n.e(6639).then(n.bind(n, 6639)) },
          {
            id: 'marko',
            name: 'Marko',
            import: () => Promise.all([n.e(6705), n.e(3939), n.e(232), n.e(4051), n.e(1812)]).then(n.bind(n, 1812)),
          },
          { id: 'matlab', name: 'MATLAB', import: () => n.e(5311).then(n.bind(n, 5311)) },
          {
            id: 'mdc',
            name: 'MDC',
            import: () => Promise.all([n.e(6705), n.e(3939), n.e(947), n.e(6639), n.e(7932)]).then(n.bind(n, 7932)),
          },
          { id: 'mdx', name: 'MDX', import: () => n.e(2263).then(n.bind(n, 2263)) },
          { id: 'mermaid', name: 'Mermaid', aliases: ['mmd'], import: () => n.e(8707).then(n.bind(n, 8707)) },
          { id: 'mipsasm', name: 'MIPS Assembly', aliases: ['mips'], import: () => n.e(2476).then(n.bind(n, 2476)) },
          { id: 'mojo', name: 'Mojo', import: () => n.e(1029).then(n.bind(n, 1029)) },
          { id: 'move', name: 'Move', import: () => n.e(9391).then(n.bind(n, 9391)) },
          { id: 'narrat', name: 'Narrat Language', aliases: ['nar'], import: () => n.e(7688).then(n.bind(n, 7688)) },
          { id: 'nextflow', name: 'Nextflow', aliases: ['nf'], import: () => n.e(2419).then(n.bind(n, 2419)) },
          { id: 'nginx', name: 'Nginx', import: () => Promise.all([n.e(5233), n.e(4682)]).then(n.bind(n, 2301)) },
          {
            id: 'nim',
            name: 'Nim',
            import: () =>
              Promise.all([n.e(6705), n.e(3939), n.e(947), n.e(2268), n.e(5233), n.e(6639), n.e(2450)]).then(
                n.bind(n, 2450)
              ),
          },
          { id: 'nix', name: 'Nix', import: () => n.e(2379).then(n.bind(n, 2379)) },
          { id: 'nushell', name: 'nushell', aliases: ['nu'], import: () => n.e(8629).then(n.bind(n, 8629)) },
          { id: 'objective-c', name: 'Objective-C', aliases: ['objc'], import: () => n.e(5111).then(n.bind(n, 5111)) },
          { id: 'objective-cpp', name: 'Objective-C++', import: () => n.e(8894).then(n.bind(n, 2695)) },
          { id: 'ocaml', name: 'OCaml', import: () => n.e(350).then(n.bind(n, 350)) },
          { id: 'pascal', name: 'Pascal', import: () => n.e(2876).then(n.bind(n, 2876)) },
          {
            id: 'perl',
            name: 'Perl',
            import: () =>
              Promise.all([n.e(6705), n.e(3939), n.e(947), n.e(2268), n.e(9754), n.e(1283)]).then(n.bind(n, 1283)),
          },
          {
            id: 'php',
            name: 'PHP',
            import: () =>
              Promise.all([n.e(6705), n.e(3939), n.e(947), n.e(2268), n.e(9754), n.e(6610), n.e(3253)]).then(
                n.bind(n, 6610)
              ),
          },
          { id: 'plsql', name: 'PL/SQL', import: () => n.e(7046).then(n.bind(n, 7046)) },
          { id: 'po', name: 'Gettext PO', aliases: ['pot', 'potx'], import: () => n.e(3155).then(n.bind(n, 3155)) },
          { id: 'polar', name: 'Polar', import: () => n.e(8106).then(n.bind(n, 8106)) },
          { id: 'postcss', name: 'PostCSS', import: () => n.e(5001).then(n.bind(n, 5001)) },
          { id: 'powerquery', name: 'PowerQuery', import: () => n.e(5129).then(n.bind(n, 5129)) },
          {
            id: 'powershell',
            name: 'PowerShell',
            aliases: ['ps', 'ps1'],
            import: () => n.e(4339).then(n.bind(n, 4339)),
          },
          { id: 'prisma', name: 'Prisma', import: () => n.e(5536).then(n.bind(n, 5536)) },
          { id: 'prolog', name: 'Prolog', import: () => n.e(6769).then(n.bind(n, 6769)) },
          {
            id: 'proto',
            name: 'Protocol Buffer 3',
            aliases: ['protobuf'],
            import: () => n.e(5344).then(n.bind(n, 5344)),
          },
          {
            id: 'pug',
            name: 'Pug',
            aliases: ['jade'],
            import: () => Promise.all([n.e(6705), n.e(3939), n.e(947), n.e(6542)]).then(n.bind(n, 6542)),
          },
          { id: 'puppet', name: 'Puppet', import: () => n.e(7618).then(n.bind(n, 7618)) },
          { id: 'purescript', name: 'PureScript', import: () => n.e(6471).then(n.bind(n, 6471)) },
          { id: 'python', name: 'Python', aliases: ['py'], import: () => n.e(3034).then(n.bind(n, 3034)) },
          { id: 'qml', name: 'QML', import: () => Promise.all([n.e(6705), n.e(4196)]).then(n.bind(n, 4196)) },
          { id: 'qmldir', name: 'QML Directory', import: () => n.e(8927).then(n.bind(n, 8927)) },
          { id: 'qss', name: 'Qt Style Sheets', import: () => n.e(9961).then(n.bind(n, 9961)) },
          { id: 'r', name: 'R', import: () => n.e(6588).then(n.bind(n, 6588)) },
          { id: 'racket', name: 'Racket', import: () => n.e(6430).then(n.bind(n, 6430)) },
          { id: 'raku', name: 'Raku', aliases: ['perl6'], import: () => n.e(4643).then(n.bind(n, 4643)) },
          {
            id: 'razor',
            name: 'ASP.NET Razor',
            import: () => Promise.all([n.e(6705), n.e(3939), n.e(947), n.e(3193), n.e(9898)]).then(n.bind(n, 9898)),
          },
          { id: 'reg', name: 'Windows Registry Script', import: () => n.e(9516).then(n.bind(n, 9516)) },
          { id: 'regexp', name: 'RegExp', aliases: ['regex'], import: () => n.e(9003).then(n.bind(n, 9003)) },
          { id: 'rel', name: 'Rel', import: () => n.e(2151).then(n.bind(n, 2151)) },
          { id: 'riscv', name: 'RISC-V', import: () => n.e(7911).then(n.bind(n, 7911)) },
          {
            id: 'rst',
            name: 'reStructuredText',
            import: () =>
              Promise.all([
                n.e(6705),
                n.e(4402),
                n.e(2422),
                n.e(3824),
                n.e(4226),
                n.e(4478),
                n.e(3939),
                n.e(947),
                n.e(2268),
                n.e(9754),
                n.e(5233),
                n.e(7917),
                n.e(8937),
                n.e(3034),
                n.e(3791),
                n.e(1465),
              ]).then(n.bind(n, 1465)),
          },
          {
            id: 'ruby',
            name: 'Ruby',
            aliases: ['rb'],
            import: () =>
              Promise.all([
                n.e(6705),
                n.e(4402),
                n.e(2422),
                n.e(3824),
                n.e(4226),
                n.e(4478),
                n.e(3939),
                n.e(947),
                n.e(2268),
                n.e(9754),
                n.e(5233),
                n.e(7917),
                n.e(8937),
                n.e(3791),
              ]).then(n.bind(n, 8036)),
          },
          { id: 'rust', name: 'Rust', aliases: ['rs'], import: () => n.e(850).then(n.bind(n, 850)) },
          { id: 'sas', name: 'SAS', import: () => Promise.all([n.e(9754), n.e(9309)]).then(n.bind(n, 9309)) },
          { id: 'sass', name: 'Sass', import: () => n.e(7938).then(n.bind(n, 7938)) },
          { id: 'scala', name: 'Scala', import: () => n.e(2140).then(n.bind(n, 2140)) },
          { id: 'scheme', name: 'Scheme', import: () => n.e(161).then(n.bind(n, 161)) },
          { id: 'scss', name: 'SCSS', import: () => Promise.all([n.e(3939), n.e(232)]).then(n.bind(n, 232)) },
          { id: 'sdbl', name: '1C (Query)', aliases: ['1c-query'], import: () => n.e(7423).then(n.bind(n, 7423)) },
          { id: 'shaderlab', name: 'ShaderLab', aliases: ['shader'], import: () => n.e(890).then(n.bind(n, 890)) },
          {
            id: 'shellscript',
            name: 'Shell',
            aliases: ['bash', 'sh', 'shell', 'zsh'],
            import: () => n.e(7917).then(n.bind(n, 7917)),
          },
          {
            id: 'shellsession',
            name: 'Shell Session',
            aliases: ['console'],
            import: () => Promise.all([n.e(7917), n.e(5582)]).then(n.bind(n, 5582)),
          },
          { id: 'smalltalk', name: 'Smalltalk', import: () => n.e(4113).then(n.bind(n, 4113)) },
          { id: 'solidity', name: 'Solidity', import: () => n.e(8827).then(n.bind(n, 8827)) },
          {
            id: 'soy',
            name: 'Closure Templates',
            aliases: ['closure-templates'],
            import: () => Promise.all([n.e(6705), n.e(3939), n.e(947), n.e(8529)]).then(n.bind(n, 8529)),
          },
          { id: 'sparql', name: 'SPARQL', import: () => n.e(5107).then(n.bind(n, 5107)) },
          {
            id: 'splunk',
            name: 'Splunk Query Language',
            aliases: ['spl'],
            import: () => n.e(3361).then(n.bind(n, 3361)),
          },
          { id: 'sql', name: 'SQL', import: () => n.e(9754).then(n.bind(n, 9754)) },
          { id: 'ssh-config', name: 'SSH Config', import: () => n.e(353).then(n.bind(n, 353)) },
          { id: 'stata', name: 'Stata', import: () => Promise.all([n.e(9754), n.e(5473)]).then(n.bind(n, 5473)) },
          { id: 'stylus', name: 'Stylus', aliases: ['styl'], import: () => n.e(4978).then(n.bind(n, 4978)) },
          {
            id: 'svelte',
            name: 'Svelte',
            import: () => Promise.all([n.e(6705), n.e(4402), n.e(3939), n.e(993)]).then(n.bind(n, 993)),
          },
          { id: 'swift', name: 'Swift', import: () => n.e(8467).then(n.bind(n, 8467)) },
          { id: 'system-verilog', name: 'SystemVerilog', import: () => n.e(8234).then(n.bind(n, 8234)) },
          { id: 'systemd', name: 'Systemd Units', import: () => n.e(8075).then(n.bind(n, 8075)) },
          { id: 'talonscript', name: 'TalonScript', aliases: ['talon'], import: () => n.e(843).then(n.bind(n, 843)) },
          { id: 'tasl', name: 'Tasl', import: () => n.e(1640).then(n.bind(n, 1640)) },
          { id: 'tcl', name: 'Tcl', import: () => n.e(3975).then(n.bind(n, 3975)) },
          {
            id: 'templ',
            name: 'Templ',
            import: () => Promise.all([n.e(6705), n.e(3939), n.e(6182), n.e(9800)]).then(n.bind(n, 9800)),
          },
          {
            id: 'terraform',
            name: 'Terraform',
            aliases: ['tf', 'tfvars'],
            import: () => n.e(1506).then(n.bind(n, 1506)),
          },
          { id: 'tex', name: 'TeX', import: () => Promise.all([n.e(6588), n.e(8557)]).then(n.bind(n, 8557)) },
          { id: 'toml', name: 'TOML', import: () => n.e(2068).then(n.bind(n, 2068)) },
          {
            id: 'ts-tags',
            name: 'TypeScript with Tags',
            aliases: ['lit'],
            import: () =>
              Promise.all([n.e(6705), n.e(4402), n.e(3939), n.e(947), n.e(2268), n.e(9754), n.e(5233), n.e(4071)]).then(
                n.bind(n, 4071)
              ),
          },
          { id: 'tsv', name: 'TSV', import: () => n.e(1569).then(n.bind(n, 1569)) },
          { id: 'tsx', name: 'TSX', import: () => n.e(3824).then(n.bind(n, 3779)) },
          { id: 'turtle', name: 'Turtle', import: () => n.e(4066).then(n.bind(n, 4066)) },
          {
            id: 'twig',
            name: 'Twig',
            import: () =>
              Promise.all([
                n.e(6705),
                n.e(4402),
                n.e(2422),
                n.e(3824),
                n.e(4226),
                n.e(4478),
                n.e(3939),
                n.e(947),
                n.e(2268),
                n.e(9754),
                n.e(5233),
                n.e(7917),
                n.e(8937),
                n.e(3034),
                n.e(3791),
                n.e(232),
                n.e(6610),
                n.e(6683),
              ]).then(n.bind(n, 6683)),
          },
          { id: 'typescript', name: 'TypeScript', aliases: ['ts'], import: () => n.e(4402).then(n.bind(n, 6593)) },
          { id: 'typespec', name: 'TypeSpec', aliases: ['tsp'], import: () => n.e(9093).then(n.bind(n, 9093)) },
          { id: 'typst', name: 'Typst', aliases: ['typ'], import: () => n.e(6436).then(n.bind(n, 6436)) },
          { id: 'v', name: 'V', import: () => n.e(5611).then(n.bind(n, 5611)) },
          { id: 'vala', name: 'Vala', import: () => n.e(7218).then(n.bind(n, 7218)) },
          { id: 'vb', name: 'Visual Basic', aliases: ['cmd'], import: () => n.e(4344).then(n.bind(n, 4344)) },
          { id: 'verilog', name: 'Verilog', import: () => n.e(8300).then(n.bind(n, 8300)) },
          { id: 'vhdl', name: 'VHDL', import: () => n.e(3454).then(n.bind(n, 3454)) },
          {
            id: 'viml',
            name: 'Vim Script',
            aliases: ['vim', 'vimscript'],
            import: () => n.e(2232).then(n.bind(n, 2232)),
          },
          {
            id: 'vue',
            name: 'Vue',
            import: () => Promise.all([n.e(6705), n.e(4402), n.e(3939), n.e(947), n.e(8936)]).then(n.bind(n, 8936)),
          },
          {
            id: 'vue-html',
            name: 'Vue HTML',
            import: () => Promise.all([n.e(6705), n.e(4402), n.e(3939), n.e(947), n.e(6730)]).then(n.bind(n, 6730)),
          },
          { id: 'vyper', name: 'Vyper', aliases: ['vy'], import: () => n.e(7786).then(n.bind(n, 7786)) },
          { id: 'wasm', name: 'WebAssembly', import: () => n.e(4156).then(n.bind(n, 1775)) },
          { id: 'wenyan', name: 'Wenyan', aliases: ['文言'], import: () => n.e(3646).then(n.bind(n, 3646)) },
          { id: 'wgsl', name: 'WGSL', import: () => n.e(6183).then(n.bind(n, 6183)) },
          {
            id: 'wikitext',
            name: 'Wikitext',
            aliases: ['mediawiki', 'wiki'],
            import: () => n.e(2329).then(n.bind(n, 2329)),
          },
          { id: 'wit', name: 'WebAssembly Interface Types', import: () => n.e(8414).then(n.bind(n, 8414)) },
          { id: 'wolfram', name: 'Wolfram', aliases: ['wl'], import: () => n.e(8717).then(n.bind(n, 8434)) },
          { id: 'xml', name: 'XML', import: () => Promise.all([n.e(2268), n.e(5634)]).then(n.bind(n, 3253)) },
          { id: 'xsl', name: 'XSL', import: () => Promise.all([n.e(2268), n.e(7243)]).then(n.bind(n, 7243)) },
          { id: 'yaml', name: 'YAML', aliases: ['yml'], import: () => n.e(7221).then(n.bind(n, 7221)) },
          { id: 'zenscript', name: 'ZenScript', import: () => n.e(7480).then(n.bind(n, 7480)) },
          { id: 'zig', name: 'Zig', import: () => n.e(7808).then(n.bind(n, 7808)) },
        ],
        ns = Object.fromEntries(na.map((e) => [e.id, e.import])),
        nl = Object.fromEntries(na.flatMap((e) => e.aliases?.map((t) => [t, e.import]) || [])),
        nu = { ...ns, ...nl },
        nc = Object.fromEntries(
          [
            {
              id: 'andromeeda',
              displayName: 'Andromeeda',
              type: 'dark',
              import: () => n.e(4714).then(n.bind(n, 4714)),
            },
            { id: 'aurora-x', displayName: 'Aurora X', type: 'dark', import: () => n.e(2009).then(n.bind(n, 2009)) },
            { id: 'ayu-dark', displayName: 'Ayu Dark', type: 'dark', import: () => n.e(7862).then(n.bind(n, 7862)) },
            {
              id: 'catppuccin-frappe',
              displayName: 'Catppuccin Frapp\xe9',
              type: 'dark',
              import: () => n.e(3249).then(n.bind(n, 3249)),
            },
            {
              id: 'catppuccin-latte',
              displayName: 'Catppuccin Latte',
              type: 'light',
              import: () => n.e(7117).then(n.bind(n, 7117)),
            },
            {
              id: 'catppuccin-macchiato',
              displayName: 'Catppuccin Macchiato',
              type: 'dark',
              import: () => n.e(6806).then(n.bind(n, 6806)),
            },
            {
              id: 'catppuccin-mocha',
              displayName: 'Catppuccin Mocha',
              type: 'dark',
              import: () => n.e(9629).then(n.bind(n, 9629)),
            },
            { id: 'dark-plus', displayName: 'Dark Plus', type: 'dark', import: () => n.e(3833).then(n.bind(n, 3833)) },
            {
              id: 'dracula',
              displayName: 'Dracula Theme',
              type: 'dark',
              import: () => n.e(9878).then(n.bind(n, 9878)),
            },
            {
              id: 'dracula-soft',
              displayName: 'Dracula Theme Soft',
              type: 'dark',
              import: () => n.e(3845).then(n.bind(n, 3845)),
            },
            {
              id: 'everforest-dark',
              displayName: 'Everforest Dark',
              type: 'dark',
              import: () => n.e(2492).then(n.bind(n, 2492)),
            },
            {
              id: 'everforest-light',
              displayName: 'Everforest Light',
              type: 'light',
              import: () => n.e(8298).then(n.bind(n, 8298)),
            },
            {
              id: 'github-dark',
              displayName: 'GitHub Dark',
              type: 'dark',
              import: () => n.e(6070).then(n.bind(n, 6070)),
            },
            {
              id: 'github-dark-default',
              displayName: 'GitHub Dark Default',
              type: 'dark',
              import: () => n.e(8066).then(n.bind(n, 8066)),
            },
            {
              id: 'github-dark-dimmed',
              displayName: 'GitHub Dark Dimmed',
              type: 'dark',
              import: () => n.e(5705).then(n.bind(n, 5705)),
            },
            {
              id: 'github-dark-high-contrast',
              displayName: 'GitHub Dark High Contrast',
              type: 'dark',
              import: () => n.e(3510).then(n.bind(n, 3510)),
            },
            {
              id: 'github-light',
              displayName: 'GitHub Light',
              type: 'light',
              import: () => n.e(556).then(n.bind(n, 556)),
            },
            {
              id: 'github-light-default',
              displayName: 'GitHub Light Default',
              type: 'light',
              import: () => n.e(6516).then(n.bind(n, 6516)),
            },
            {
              id: 'github-light-high-contrast',
              displayName: 'GitHub Light High Contrast',
              type: 'light',
              import: () => n.e(2356).then(n.bind(n, 2356)),
            },
            {
              id: 'gruvbox-dark-hard',
              displayName: 'Gruvbox Dark Hard',
              type: 'dark',
              import: () => n.e(2716).then(n.bind(n, 2716)),
            },
            {
              id: 'gruvbox-dark-medium',
              displayName: 'Gruvbox Dark Medium',
              type: 'dark',
              import: () => n.e(5338).then(n.bind(n, 5338)),
            },
            {
              id: 'gruvbox-dark-soft',
              displayName: 'Gruvbox Dark Soft',
              type: 'dark',
              import: () => n.e(8723).then(n.bind(n, 8723)),
            },
            {
              id: 'gruvbox-light-hard',
              displayName: 'Gruvbox Light Hard',
              type: 'light',
              import: () => n.e(6274).then(n.bind(n, 6274)),
            },
            {
              id: 'gruvbox-light-medium',
              displayName: 'Gruvbox Light Medium',
              type: 'light',
              import: () => n.e(7964).then(n.bind(n, 7964)),
            },
            {
              id: 'gruvbox-light-soft',
              displayName: 'Gruvbox Light Soft',
              type: 'light',
              import: () => n.e(8857).then(n.bind(n, 8857)),
            },
            { id: 'houston', displayName: 'Houston', type: 'dark', import: () => n.e(7730).then(n.bind(n, 7730)) },
            {
              id: 'kanagawa-dragon',
              displayName: 'Kanagawa Dragon',
              type: 'dark',
              import: () => n.e(2137).then(n.bind(n, 2137)),
            },
            {
              id: 'kanagawa-lotus',
              displayName: 'Kanagawa Lotus',
              type: 'light',
              import: () => n.e(5675).then(n.bind(n, 5675)),
            },
            {
              id: 'kanagawa-wave',
              displayName: 'Kanagawa Wave',
              type: 'dark',
              import: () => n.e(3891).then(n.bind(n, 3891)),
            },
            { id: 'laserwave', displayName: 'LaserWave', type: 'dark', import: () => n.e(1374).then(n.bind(n, 1374)) },
            { id: 'light-plus', displayName: 'Light Plus', type: 'light', import: () => n.e(111).then(n.bind(n, 111)) },
            {
              id: 'material-theme',
              displayName: 'Material Theme',
              type: 'dark',
              import: () => n.e(8573).then(n.bind(n, 8573)),
            },
            {
              id: 'material-theme-darker',
              displayName: 'Material Theme Darker',
              type: 'dark',
              import: () => n.e(5897).then(n.bind(n, 5897)),
            },
            {
              id: 'material-theme-lighter',
              displayName: 'Material Theme Lighter',
              type: 'light',
              import: () => n.e(5179).then(n.bind(n, 5179)),
            },
            {
              id: 'material-theme-ocean',
              displayName: 'Material Theme Ocean',
              type: 'dark',
              import: () => n.e(3932).then(n.bind(n, 3932)),
            },
            {
              id: 'material-theme-palenight',
              displayName: 'Material Theme Palenight',
              type: 'dark',
              import: () => n.e(8316).then(n.bind(n, 8316)),
            },
            { id: 'min-dark', displayName: 'Min Dark', type: 'dark', import: () => n.e(8595).then(n.bind(n, 8595)) },
            { id: 'min-light', displayName: 'Min Light', type: 'light', import: () => n.e(795).then(n.bind(n, 795)) },
            { id: 'monokai', displayName: 'Monokai', type: 'dark', import: () => n.e(3238).then(n.bind(n, 3238)) },
            { id: 'night-owl', displayName: 'Night Owl', type: 'dark', import: () => n.e(5139).then(n.bind(n, 5139)) },
            { id: 'nord', displayName: 'Nord', type: 'dark', import: () => n.e(6313).then(n.bind(n, 6313)) },
            {
              id: 'one-dark-pro',
              displayName: 'One Dark Pro',
              type: 'dark',
              import: () => n.e(8369).then(n.bind(n, 8369)),
            },
            { id: 'one-light', displayName: 'One Light', type: 'light', import: () => n.e(1399).then(n.bind(n, 1399)) },
            { id: 'plastic', displayName: 'Plastic', type: 'dark', import: () => n.e(5568).then(n.bind(n, 5568)) },
            {
              id: 'poimandres',
              displayName: 'Poimandres',
              type: 'dark',
              import: () => n.e(1532).then(n.bind(n, 9151)),
            },
            { id: 'red', displayName: 'Red', type: 'dark', import: () => n.e(589).then(n.bind(n, 589)) },
            {
              id: 'rose-pine',
              displayName: 'Ros\xe9 Pine',
              type: 'dark',
              import: () => n.e(2676).then(n.bind(n, 2676)),
            },
            {
              id: 'rose-pine-dawn',
              displayName: 'Ros\xe9 Pine Dawn',
              type: 'light',
              import: () => n.e(8257).then(n.bind(n, 8257)),
            },
            {
              id: 'rose-pine-moon',
              displayName: 'Ros\xe9 Pine Moon',
              type: 'dark',
              import: () => n.e(8072).then(n.bind(n, 8072)),
            },
            {
              id: 'slack-dark',
              displayName: 'Slack Dark',
              type: 'dark',
              import: () => n.e(2411).then(n.bind(n, 2411)),
            },
            {
              id: 'slack-ochin',
              displayName: 'Slack Ochin',
              type: 'light',
              import: () => n.e(5548).then(n.bind(n, 5548)),
            },
            {
              id: 'snazzy-light',
              displayName: 'Snazzy Light',
              type: 'light',
              import: () => n.e(188).then(n.bind(n, 188)),
            },
            {
              id: 'solarized-dark',
              displayName: 'Solarized Dark',
              type: 'dark',
              import: () => n.e(3684).then(n.bind(n, 3684)),
            },
            {
              id: 'solarized-light',
              displayName: 'Solarized Light',
              type: 'light',
              import: () => n.e(1218).then(n.bind(n, 1218)),
            },
            {
              id: 'synthwave-84',
              displayName: "Synthwave '84",
              type: 'dark',
              import: () => n.e(7180).then(n.bind(n, 7180)),
            },
            {
              id: 'tokyo-night',
              displayName: 'Tokyo Night',
              type: 'dark',
              import: () => n.e(2783).then(n.bind(n, 2783)),
            },
            { id: 'vesper', displayName: 'Vesper', type: 'dark', import: () => n.e(8161).then(n.bind(n, 8161)) },
            {
              id: 'vitesse-black',
              displayName: 'Vitesse Black',
              type: 'dark',
              import: () => n.e(7899).then(n.bind(n, 7899)),
            },
            {
              id: 'vitesse-dark',
              displayName: 'Vitesse Dark',
              type: 'dark',
              import: () => n.e(6288).then(n.bind(n, 6288)),
            },
            {
              id: 'vitesse-light',
              displayName: 'Vitesse Light',
              type: 'light',
              import: () => n.e(982).then(n.bind(n, 982)),
            },
          ].map((e) => [e.id, e.import])
        );
      var nh = n(4216).Buffer;
      class np extends Error {
        constructor(e) {
          super(e), (this.name = 'ShikiError');
        }
      }
      function nd() {
        return 'undefined' != typeof performance ? performance.now() : Date.now();
      }
      let nm = (e, t) => e + ((t - (e % t)) % t);
      async function nf(e) {
        let t,
          n,
          r = {};
        function i(e) {
          (n = e), (r.HEAPU8 = new Uint8Array(e)), (r.HEAPU32 = new Uint32Array(e));
        }
        let o = 'undefined' != typeof TextDecoder ? new TextDecoder('utf8') : void 0;
        function a(e, t) {
          return e
            ? (function (e, t, n = 1024) {
                let r = t + n,
                  i = t;
                for (; e[i] && !(i >= r); ) ++i;
                if (i - t > 16 && e.buffer && o) return o.decode(e.subarray(t, i));
                let a = '';
                for (; t < i; ) {
                  let n = e[t++];
                  if (!(128 & n)) {
                    a += String.fromCharCode(n);
                    continue;
                  }
                  let r = 63 & e[t++];
                  if ((224 & n) == 192) {
                    a += String.fromCharCode(((31 & n) << 6) | r);
                    continue;
                  }
                  let i = 63 & e[t++];
                  if (
                    (n =
                      (240 & n) == 224
                        ? ((15 & n) << 12) | (r << 6) | i
                        : ((7 & n) << 18) | (r << 12) | (i << 6) | (63 & e[t++])) < 65536
                  )
                    a += String.fromCharCode(n);
                  else {
                    let e = n - 65536;
                    a += String.fromCharCode(55296 | (e >> 10), 56320 | (1023 & e));
                  }
                }
                return a;
              })(r.HEAPU8, e, t)
            : '';
        }
        let s = {
          emscripten_get_now: nd,
          emscripten_memcpy_big: function (e, t, n) {
            r.HEAPU8.copyWithin(e, t, t + n);
          },
          emscripten_resize_heap: function (e) {
            let o = r.HEAPU8.length;
            if ((e >>>= 0) > 0x80000000) return !1;
            for (let r = 1; r <= 4; r *= 2) {
              let a = o * (1 + 0.2 / r);
              if (
                ((a = Math.min(a, e + 0x6000000)),
                (function (e) {
                  try {
                    return t.grow((e - n.byteLength + 65535) >>> 16), i(t.buffer), 1;
                  } catch {}
                })(Math.min(0x80000000, nm(Math.max(e, a), 65536))))
              )
                return !0;
            }
            return !1;
          },
          fd_write: () => 0,
        };
        async function l() {
          let n = await e({ env: s, wasi_snapshot_preview1: s });
          i((t = n.memory).buffer), Object.assign(r, n), (r.UTF8ToString = a);
        }
        return await l(), r;
      }
      var ng = Object.defineProperty,
        ny = (e, t, n) =>
          t in e ? ng(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n),
        nb = (e, t, n) => ny(e, 'symbol' != typeof t ? t + '' : t, n);
      let n_ = null;
      class nv {
        constructor(e) {
          nb(this, 'utf16Length'),
            nb(this, 'utf8Length'),
            nb(this, 'utf16Value'),
            nb(this, 'utf8Value'),
            nb(this, 'utf16OffsetToUtf8'),
            nb(this, 'utf8OffsetToUtf16');
          let t = e.length,
            n = nv._utf8ByteLength(e),
            r = n !== t,
            i = r ? new Uint32Array(t + 1) : null;
          r && (i[t] = n);
          let o = r ? new Uint32Array(n + 1) : null;
          r && (o[n] = t);
          let a = new Uint8Array(n),
            s = 0;
          for (let n = 0; n < t; n++) {
            let l = e.charCodeAt(n),
              u = l,
              c = !1;
            if (l >= 55296 && l <= 56319 && n + 1 < t) {
              let t = e.charCodeAt(n + 1);
              t >= 56320 && t <= 57343 && ((u = (((l - 55296) << 10) + 65536) | (t - 56320)), (c = !0));
            }
            r &&
              ((i[n] = s),
              c && (i[n + 1] = s),
              u <= 127
                ? (o[s + 0] = n)
                : u <= 2047
                  ? ((o[s + 0] = n), (o[s + 1] = n))
                  : u <= 65535
                    ? ((o[s + 0] = n), (o[s + 1] = n), (o[s + 2] = n))
                    : ((o[s + 0] = n), (o[s + 1] = n), (o[s + 2] = n), (o[s + 3] = n))),
              u <= 127
                ? (a[s++] = u)
                : (u <= 2047
                    ? (a[s++] = 192 | ((1984 & u) >>> 6))
                    : (u <= 65535
                        ? (a[s++] = 224 | ((61440 & u) >>> 12))
                        : ((a[s++] = 240 | ((1835008 & u) >>> 18)), (a[s++] = 128 | ((258048 & u) >>> 12))),
                      (a[s++] = 128 | ((4032 & u) >>> 6))),
                  (a[s++] = 128 | ((63 & u) >>> 0))),
              c && n++;
          }
          (this.utf16Length = t),
            (this.utf8Length = n),
            (this.utf16Value = e),
            (this.utf8Value = a),
            (this.utf16OffsetToUtf8 = i),
            (this.utf8OffsetToUtf16 = o);
        }
        static _utf8ByteLength(e) {
          let t = 0;
          for (let n = 0, r = e.length; n < r; n++) {
            let i = e.charCodeAt(n),
              o = i,
              a = !1;
            if (i >= 55296 && i <= 56319 && n + 1 < r) {
              let t = e.charCodeAt(n + 1);
              t >= 56320 && t <= 57343 && ((o = (((i - 55296) << 10) + 65536) | (t - 56320)), (a = !0));
            }
            o <= 127 ? (t += 1) : o <= 2047 ? (t += 2) : o <= 65535 ? (t += 3) : (t += 4), a && n++;
          }
          return t;
        }
        createString(e) {
          let t = e.omalloc(this.utf8Length);
          return e.HEAPU8.set(this.utf8Value, t), t;
        }
      }
      let nS = class e {
        constructor(t) {
          if (
            (nb(this, 'id', ++e.LAST_ID),
            nb(this, '_onigBinding'),
            nb(this, 'content'),
            nb(this, 'utf16Length'),
            nb(this, 'utf8Length'),
            nb(this, 'utf16OffsetToUtf8'),
            nb(this, 'utf8OffsetToUtf16'),
            nb(this, 'ptr'),
            !n_)
          )
            throw new np('Must invoke loadWasm first.');
          (this._onigBinding = n_), (this.content = t);
          let n = new nv(t);
          (this.utf16Length = n.utf16Length),
            (this.utf8Length = n.utf8Length),
            (this.utf16OffsetToUtf8 = n.utf16OffsetToUtf8),
            (this.utf8OffsetToUtf16 = n.utf8OffsetToUtf16),
            this.utf8Length < 1e4 && !e._sharedPtrInUse
              ? (e._sharedPtr || (e._sharedPtr = n_.omalloc(1e4)),
                (e._sharedPtrInUse = !0),
                n_.HEAPU8.set(n.utf8Value, e._sharedPtr),
                (this.ptr = e._sharedPtr))
              : (this.ptr = n.createString(n_));
        }
        convertUtf8OffsetToUtf16(e) {
          return this.utf8OffsetToUtf16
            ? e < 0
              ? 0
              : e > this.utf8Length
                ? this.utf16Length
                : this.utf8OffsetToUtf16[e]
            : e;
        }
        convertUtf16OffsetToUtf8(e) {
          return this.utf16OffsetToUtf8
            ? e < 0
              ? 0
              : e > this.utf16Length
                ? this.utf8Length
                : this.utf16OffsetToUtf8[e]
            : e;
        }
        dispose() {
          this.ptr === e._sharedPtr ? (e._sharedPtrInUse = !1) : this._onigBinding.ofree(this.ptr);
        }
      };
      nb(nS, 'LAST_ID', 0), nb(nS, '_sharedPtr', 0), nb(nS, '_sharedPtrInUse', !1);
      class nk {
        constructor(e) {
          if ((nb(this, '_onigBinding'), nb(this, '_ptr'), !n_)) throw new np('Must invoke loadWasm first.');
          let t = [],
            n = [];
          for (let r = 0, i = e.length; r < i; r++) {
            let i = new nv(e[r]);
            (t[r] = i.createString(n_)), (n[r] = i.utf8Length);
          }
          let r = n_.omalloc(4 * e.length);
          n_.HEAPU32.set(t, r / 4);
          let i = n_.omalloc(4 * e.length);
          n_.HEAPU32.set(n, i / 4);
          let o = n_.createOnigScanner(r, i, e.length);
          for (let n = 0, r = e.length; n < r; n++) n_.ofree(t[n]);
          n_.ofree(i),
            n_.ofree(r),
            0 === o &&
              (function (e) {
                throw new np(e.UTF8ToString(e.getLastOnigError()));
              })(n_),
            (this._onigBinding = n_),
            (this._ptr = o);
        }
        dispose() {
          this._onigBinding.freeOnigScanner(this._ptr);
        }
        findNextMatchSync(e, t, n) {
          let r = 0;
          if (('number' == typeof n && (r = n), 'string' == typeof e)) {
            e = new nS(e);
            let n = this._findNextMatchSync(e, t, !1, r);
            return e.dispose(), n;
          }
          return this._findNextMatchSync(e, t, !1, r);
        }
        _findNextMatchSync(e, t, n, r) {
          let i = this._onigBinding,
            o = i.findNextOnigScannerMatch(this._ptr, e.id, e.ptr, e.utf8Length, e.convertUtf16OffsetToUtf8(t), r);
          if (0 === o) return null;
          let a = i.HEAPU32,
            s = o / 4,
            l = a[s++],
            u = a[s++],
            c = [];
          for (let t = 0; t < u; t++) {
            let n = e.convertUtf8OffsetToUtf16(a[s++]),
              r = e.convertUtf8OffsetToUtf16(a[s++]);
            c[t] = { start: n, end: r, length: r - n };
          }
          return { index: l, captureIndices: c };
        }
      }
      function nw(e) {
        return (t) => WebAssembly.instantiate(e, t);
      }
      async function nC(e) {
        return (
          e &&
            (await (i ||
              (i = (async function () {
                n_ = await nf(async (t) => {
                  let n = e;
                  if (
                    ('function' == typeof (n = await n) && (n = await n(t)),
                    'function' == typeof n && (n = await n(t)),
                    'function' == typeof n.instantiator)
                  )
                    n = await n.instantiator(t);
                  else if ('function' == typeof n.default) n = await n.default(t);
                  else {
                    var r, i, o, a;
                    if (
                      (void 0 !== n.data && (n = n.data),
                      (r = n),
                      'undefined' != typeof Response && r instanceof Response)
                    ) {
                      n =
                        'function' == typeof WebAssembly.instantiateStreaming
                          ? await ((o = n), (e) => WebAssembly.instantiateStreaming(o, e))(t)
                          : await ((a = n),
                            async (e) => {
                              let t = await a.arrayBuffer();
                              return WebAssembly.instantiate(t, e);
                            })(t);
                    } else
                      ((i = n),
                      ('undefined' != typeof ArrayBuffer && (i instanceof ArrayBuffer || ArrayBuffer.isView(i))) ||
                        (void 0 !== nh && nh.isBuffer?.(i)) ||
                        ('undefined' != typeof SharedArrayBuffer && i instanceof SharedArrayBuffer) ||
                        ('undefined' != typeof Uint32Array && i instanceof Uint32Array) ||
                        n instanceof WebAssembly.Module)
                        ? (n = await nw(n)(t))
                        : 'default' in n && n.default instanceof WebAssembly.Module && (n = await nw(n.default)(t));
                  }
                  return 'instance' in n && (n = n.instance), 'exports' in n && (n = n.exports), n;
                });
              })()))),
          {
            createScanner: (e) => new nk(e.map((e) => ('string' == typeof e ? e : e.source))),
            createString: (e) => new nS(e),
          }
        );
      }
      let { codeToHtml: nA } = (function (e, t) {
        let n,
          r = async function (t = {}) {
            if (!n) return (n = e({ ...t, themes: t.themes || [], langs: t.langs || [] }));
            {
              let e = await n;
              return await Promise.all([e.loadTheme(...(t.themes || [])), e.loadLanguage(...(t.langs || []))]), e;
            }
          };
        async function i(e, n) {
          let i = await r({ langs: [n.lang], themes: 'theme' in n ? [n.theme] : Object.values(n.themes) }),
            o = await t?.guessEmbeddedLanguages?.(e, n.lang, i);
          return o && (await i.loadLanguage(...o)), i;
        }
        return {
          getSingletonHighlighter: (e) => r(e),
          codeToHtml: async (e, t) => (await i(e, t)).codeToHtml(e, t),
          codeToHast: async (e, t) => (await i(e, t)).codeToHast(e, t),
          codeToTokens: async (e, t) => (await i(e, t)).codeToTokens(e, t),
          codeToTokensBase: async (e, t) => (await i(e, t)).codeToTokensBase(e, t),
          codeToTokensWithThemes: async (e, t) => (await i(e, t)).codeToTokensWithThemes(e, t),
          getLastGrammarState: async (e, t) =>
            (await r({ langs: [t.lang], themes: [t.theme] })).getLastGrammarState(e, t),
        };
      })(
        (function (e) {
          let t = e.langs,
            n = e.themes,
            r = e.engine;
          return async function (e) {
            function i(e) {
              if ('string' == typeof e) {
                if (tM(e)) return [];
                let n = t[e];
                if (!n)
                  throw new a(
                    `Language \`${e}\` is not included in this bundle. You may want to load it from external source.`
                  );
                return n;
              }
              return e;
            }
            function o(e) {
              if (tD(e)) return 'none';
              if ('string' == typeof e) {
                let t = n[e];
                if (!t)
                  throw new a(
                    `Theme \`${e}\` is not included in this bundle. You may want to load it from external source.`
                  );
                return t;
              }
              return e;
            }
            let s = (e.themes ?? []).map((e) => o(e)),
              l = (e.langs ?? []).map((e) => i(e)),
              u = await no({ engine: e.engine ?? r(), ...e, themes: s, langs: l });
            return {
              ...u,
              loadLanguage: (...e) => u.loadLanguage(...e.map(i)),
              loadTheme: (...e) => u.loadTheme(...e.map(o)),
              getBundledLanguages: () => t,
              getBundledThemes: () => n,
            };
          };
        })({ langs: nu, themes: nc, engine: () => nC(Promise.all([n.e(8093), n.e(410)]).then(n.bind(n, 410))) }),
        {
          guessEmbeddedLanguages: function (e, t, n) {
            let r = new Set();
            for (let t of e.matchAll(/lang=["']([\w-]+)["']/g)) r.add(t[1]);
            for (let t of e.matchAll(/(?:```|~~~)([\w-]+)/g)) r.add(t[1]);
            for (let t of e.matchAll(/\\begin\{([\w-]+)\}/g)) r.add(t[1]);
            if (!n) return Array.from(r);
            let i = n.getBundledLanguages();
            return Array.from(r).filter((e) => e && i[e]);
          },
        }
      );
    },
    8809: (e, t, n) => {
      'use strict';
      n.d(t, { A: () => en });
      let { entries: r, setPrototypeOf: i, isFrozen: o, getPrototypeOf: a, getOwnPropertyDescriptor: s } = Object,
        { freeze: l, seal: u, create: c } = Object,
        { apply: h, construct: p } = 'undefined' != typeof Reflect && Reflect;
      l ||
        (l = function (e) {
          return e;
        }),
        u ||
          (u = function (e) {
            return e;
          }),
        h ||
          (h = function (e, t, n) {
            return e.apply(t, n);
          }),
        p ||
          (p = function (e, t) {
            return new e(...t);
          });
      let d = N(Array.prototype.forEach),
        m = N(Array.prototype.lastIndexOf),
        f = N(Array.prototype.pop),
        g = N(Array.prototype.push),
        y = N(Array.prototype.splice),
        b = N(String.prototype.toLowerCase),
        _ = N(String.prototype.toString),
        v = N(String.prototype.match),
        S = N(String.prototype.replace),
        k = N(String.prototype.indexOf),
        w = N(String.prototype.trim),
        C = N(Object.prototype.hasOwnProperty),
        A = N(RegExp.prototype.test),
        T =
          ((J = TypeError),
          function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return p(J, t);
          });
      function N(e) {
        return function (t) {
          t instanceof RegExp && (t.lastIndex = 0);
          for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
          return h(e, t, r);
        };
      }
      function E(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : b;
        i && i(e, null);
        let r = t.length;
        for (; r--; ) {
          let i = t[r];
          if ('string' == typeof i) {
            let e = n(i);
            e !== i && (o(t) || (t[r] = e), (i = e));
          }
          e[i] = !0;
        }
        return e;
      }
      function x(e) {
        let t = c(null);
        for (let [n, i] of r(e))
          C(e, n) &&
            (Array.isArray(i)
              ? (t[n] = (function (e) {
                  for (let t = 0; t < e.length; t++) C(e, t) || (e[t] = null);
                  return e;
                })(i))
              : i && 'object' == typeof i && i.constructor === Object
                ? (t[n] = x(i))
                : (t[n] = i));
        return t;
      }
      function P(e, t) {
        for (; null !== e; ) {
          let n = s(e, t);
          if (n) {
            if (n.get) return N(n.get);
            if ('function' == typeof n.value) return N(n.value);
          }
          e = a(e);
        }
        return function () {
          return null;
        };
      }
      let L = l([
          'a',
          'abbr',
          'acronym',
          'address',
          'area',
          'article',
          'aside',
          'audio',
          'b',
          'bdi',
          'bdo',
          'big',
          'blink',
          'blockquote',
          'body',
          'br',
          'button',
          'canvas',
          'caption',
          'center',
          'cite',
          'code',
          'col',
          'colgroup',
          'content',
          'data',
          'datalist',
          'dd',
          'decorator',
          'del',
          'details',
          'dfn',
          'dialog',
          'dir',
          'div',
          'dl',
          'dt',
          'element',
          'em',
          'fieldset',
          'figcaption',
          'figure',
          'font',
          'footer',
          'form',
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'head',
          'header',
          'hgroup',
          'hr',
          'html',
          'i',
          'img',
          'input',
          'ins',
          'kbd',
          'label',
          'legend',
          'li',
          'main',
          'map',
          'mark',
          'marquee',
          'menu',
          'menuitem',
          'meter',
          'nav',
          'nobr',
          'ol',
          'optgroup',
          'option',
          'output',
          'p',
          'picture',
          'pre',
          'progress',
          'q',
          'rp',
          'rt',
          'ruby',
          's',
          'samp',
          'section',
          'select',
          'shadow',
          'small',
          'source',
          'spacer',
          'span',
          'strike',
          'strong',
          'style',
          'sub',
          'summary',
          'sup',
          'table',
          'tbody',
          'td',
          'template',
          'textarea',
          'tfoot',
          'th',
          'thead',
          'time',
          'tr',
          'track',
          'tt',
          'u',
          'ul',
          'var',
          'video',
          'wbr',
        ]),
        R = l([
          'svg',
          'a',
          'altglyph',
          'altglyphdef',
          'altglyphitem',
          'animatecolor',
          'animatemotion',
          'animatetransform',
          'circle',
          'clippath',
          'defs',
          'desc',
          'ellipse',
          'filter',
          'font',
          'g',
          'glyph',
          'glyphref',
          'hkern',
          'image',
          'line',
          'lineargradient',
          'marker',
          'mask',
          'metadata',
          'mpath',
          'path',
          'pattern',
          'polygon',
          'polyline',
          'radialgradient',
          'rect',
          'stop',
          'style',
          'switch',
          'symbol',
          'text',
          'textpath',
          'title',
          'tref',
          'tspan',
          'view',
          'vkern',
        ]),
        O = l([
          'feBlend',
          'feColorMatrix',
          'feComponentTransfer',
          'feComposite',
          'feConvolveMatrix',
          'feDiffuseLighting',
          'feDisplacementMap',
          'feDistantLight',
          'feDropShadow',
          'feFlood',
          'feFuncA',
          'feFuncB',
          'feFuncG',
          'feFuncR',
          'feGaussianBlur',
          'feImage',
          'feMerge',
          'feMergeNode',
          'feMorphology',
          'feOffset',
          'fePointLight',
          'feSpecularLighting',
          'feSpotLight',
          'feTile',
          'feTurbulence',
        ]),
        I = l([
          'animate',
          'color-profile',
          'cursor',
          'discard',
          'font-face',
          'font-face-format',
          'font-face-name',
          'font-face-src',
          'font-face-uri',
          'foreignobject',
          'hatch',
          'hatchpath',
          'mesh',
          'meshgradient',
          'meshpatch',
          'meshrow',
          'missing-glyph',
          'script',
          'set',
          'solidcolor',
          'unknown',
          'use',
        ]),
        M = l([
          'math',
          'menclose',
          'merror',
          'mfenced',
          'mfrac',
          'mglyph',
          'mi',
          'mlabeledtr',
          'mmultiscripts',
          'mn',
          'mo',
          'mover',
          'mpadded',
          'mphantom',
          'mroot',
          'mrow',
          'ms',
          'mspace',
          'msqrt',
          'mstyle',
          'msub',
          'msup',
          'msubsup',
          'mtable',
          'mtd',
          'mtext',
          'mtr',
          'munder',
          'munderover',
          'mprescripts',
        ]),
        D = l([
          'maction',
          'maligngroup',
          'malignmark',
          'mlongdiv',
          'mscarries',
          'mscarry',
          'msgroup',
          'mstack',
          'msline',
          'msrow',
          'semantics',
          'annotation',
          'annotation-xml',
          'mprescripts',
          'none',
        ]),
        B = l(['#text']),
        U = l([
          'accept',
          'action',
          'align',
          'alt',
          'autocapitalize',
          'autocomplete',
          'autopictureinpicture',
          'autoplay',
          'background',
          'bgcolor',
          'border',
          'capture',
          'cellpadding',
          'cellspacing',
          'checked',
          'cite',
          'class',
          'clear',
          'color',
          'cols',
          'colspan',
          'controls',
          'controlslist',
          'coords',
          'crossorigin',
          'datetime',
          'decoding',
          'default',
          'dir',
          'disabled',
          'disablepictureinpicture',
          'disableremoteplayback',
          'download',
          'draggable',
          'enctype',
          'enterkeyhint',
          'face',
          'for',
          'headers',
          'height',
          'hidden',
          'high',
          'href',
          'hreflang',
          'id',
          'inputmode',
          'integrity',
          'ismap',
          'kind',
          'label',
          'lang',
          'list',
          'loading',
          'loop',
          'low',
          'max',
          'maxlength',
          'media',
          'method',
          'min',
          'minlength',
          'multiple',
          'muted',
          'name',
          'nonce',
          'noshade',
          'novalidate',
          'nowrap',
          'open',
          'optimum',
          'pattern',
          'placeholder',
          'playsinline',
          'popover',
          'popovertarget',
          'popovertargetaction',
          'poster',
          'preload',
          'pubdate',
          'radiogroup',
          'readonly',
          'rel',
          'required',
          'rev',
          'reversed',
          'role',
          'rows',
          'rowspan',
          'spellcheck',
          'scope',
          'selected',
          'shape',
          'size',
          'sizes',
          'span',
          'srclang',
          'start',
          'src',
          'srcset',
          'step',
          'style',
          'summary',
          'tabindex',
          'title',
          'translate',
          'type',
          'usemap',
          'valign',
          'value',
          'width',
          'wrap',
          'xmlns',
          'slot',
        ]),
        G = l([
          'accent-height',
          'accumulate',
          'additive',
          'alignment-baseline',
          'amplitude',
          'ascent',
          'attributename',
          'attributetype',
          'azimuth',
          'basefrequency',
          'baseline-shift',
          'begin',
          'bias',
          'by',
          'class',
          'clip',
          'clippathunits',
          'clip-path',
          'clip-rule',
          'color',
          'color-interpolation',
          'color-interpolation-filters',
          'color-profile',
          'color-rendering',
          'cx',
          'cy',
          'd',
          'dx',
          'dy',
          'diffuseconstant',
          'direction',
          'display',
          'divisor',
          'dur',
          'edgemode',
          'elevation',
          'end',
          'exponent',
          'fill',
          'fill-opacity',
          'fill-rule',
          'filter',
          'filterunits',
          'flood-color',
          'flood-opacity',
          'font-family',
          'font-size',
          'font-size-adjust',
          'font-stretch',
          'font-style',
          'font-variant',
          'font-weight',
          'fx',
          'fy',
          'g1',
          'g2',
          'glyph-name',
          'glyphref',
          'gradientunits',
          'gradienttransform',
          'height',
          'href',
          'id',
          'image-rendering',
          'in',
          'in2',
          'intercept',
          'k',
          'k1',
          'k2',
          'k3',
          'k4',
          'kerning',
          'keypoints',
          'keysplines',
          'keytimes',
          'lang',
          'lengthadjust',
          'letter-spacing',
          'kernelmatrix',
          'kernelunitlength',
          'lighting-color',
          'local',
          'marker-end',
          'marker-mid',
          'marker-start',
          'markerheight',
          'markerunits',
          'markerwidth',
          'maskcontentunits',
          'maskunits',
          'max',
          'mask',
          'media',
          'method',
          'mode',
          'min',
          'name',
          'numoctaves',
          'offset',
          'operator',
          'opacity',
          'order',
          'orient',
          'orientation',
          'origin',
          'overflow',
          'paint-order',
          'path',
          'pathlength',
          'patterncontentunits',
          'patterntransform',
          'patternunits',
          'points',
          'preservealpha',
          'preserveaspectratio',
          'primitiveunits',
          'r',
          'rx',
          'ry',
          'radius',
          'refx',
          'refy',
          'repeatcount',
          'repeatdur',
          'restart',
          'result',
          'rotate',
          'scale',
          'seed',
          'shape-rendering',
          'slope',
          'specularconstant',
          'specularexponent',
          'spreadmethod',
          'startoffset',
          'stddeviation',
          'stitchtiles',
          'stop-color',
          'stop-opacity',
          'stroke-dasharray',
          'stroke-dashoffset',
          'stroke-linecap',
          'stroke-linejoin',
          'stroke-miterlimit',
          'stroke-opacity',
          'stroke',
          'stroke-width',
          'style',
          'surfacescale',
          'systemlanguage',
          'tabindex',
          'tablevalues',
          'targetx',
          'targety',
          'transform',
          'transform-origin',
          'text-anchor',
          'text-decoration',
          'text-rendering',
          'textlength',
          'type',
          'u1',
          'u2',
          'unicode',
          'values',
          'viewbox',
          'visibility',
          'version',
          'vert-adv-y',
          'vert-origin-x',
          'vert-origin-y',
          'width',
          'word-spacing',
          'wrap',
          'writing-mode',
          'xchannelselector',
          'ychannelselector',
          'x',
          'x1',
          'x2',
          'xmlns',
          'y',
          'y1',
          'y2',
          'z',
          'zoomandpan',
        ]),
        j = l([
          'accent',
          'accentunder',
          'align',
          'bevelled',
          'close',
          'columnsalign',
          'columnlines',
          'columnspan',
          'denomalign',
          'depth',
          'dir',
          'display',
          'displaystyle',
          'encoding',
          'fence',
          'frame',
          'height',
          'href',
          'id',
          'largeop',
          'length',
          'linethickness',
          'lspace',
          'lquote',
          'mathbackground',
          'mathcolor',
          'mathsize',
          'mathvariant',
          'maxsize',
          'minsize',
          'movablelimits',
          'notation',
          'numalign',
          'open',
          'rowalign',
          'rowlines',
          'rowspacing',
          'rowspan',
          'rspace',
          'rquote',
          'scriptlevel',
          'scriptminsize',
          'scriptsizemultiplier',
          'selection',
          'separator',
          'separators',
          'stretchy',
          'subscriptshift',
          'supscriptshift',
          'symmetric',
          'voffset',
          'width',
          'xmlns',
        ]),
        F = l(['xlink:href', 'xml:id', 'xlink:title', 'xml:space', 'xmlns:xlink']),
        H = u(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
        z = u(/<%[\w\W]*|[\w\W]*%>/gm),
        $ = u(/\$\{[\w\W]*/gm),
        W = u(/^data-[\-\w.\u00B7-\uFFFF]+$/),
        q = u(/^aria-[\-\w]+$/),
        V = u(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
        Y = u(/^(?:\w+script|data):/i),
        K = u(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
        X = u(/^html$/i);
      var J,
        Q = Object.freeze({
          __proto__: null,
          ARIA_ATTR: q,
          ATTR_WHITESPACE: K,
          CUSTOM_ELEMENT: u(/^[a-z][.\w]*(-[.\w]+)+$/i),
          DATA_ATTR: W,
          DOCTYPE_NAME: X,
          ERB_EXPR: z,
          IS_ALLOWED_URI: V,
          IS_SCRIPT_OR_DATA: Y,
          MUSTACHE_EXPR: H,
          TMPLIT_EXPR: $,
        });
      let Z = { element: 1, text: 3, progressingInstruction: 7, comment: 8, document: 9 },
        ee = function (e, t) {
          if ('object' != typeof e || 'function' != typeof e.createPolicy) return null;
          let n = null,
            r = 'data-tt-policy-suffix';
          t && t.hasAttribute(r) && (n = t.getAttribute(r));
          let i = 'dompurify' + (n ? '#' + n : '');
          try {
            return e.createPolicy(i, { createHTML: (e) => e, createScriptURL: (e) => e });
          } catch (e) {
            return console.warn('TrustedTypes policy ' + i + ' could not be created.'), null;
          }
        },
        et = function () {
          return {
            afterSanitizeAttributes: [],
            afterSanitizeElements: [],
            afterSanitizeShadowDOM: [],
            beforeSanitizeAttributes: [],
            beforeSanitizeElements: [],
            beforeSanitizeShadowDOM: [],
            uponSanitizeAttribute: [],
            uponSanitizeElement: [],
            uponSanitizeShadowNode: [],
          };
        };
      var en = (function e() {
        let t,
          n =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : 'undefined' == typeof window
                ? null
                : window,
          i = (t) => e(t);
        if (
          ((i.version = '3.2.6'),
          (i.removed = []),
          !n || !n.document || n.document.nodeType !== Z.document || !n.Element)
        )
          return (i.isSupported = !1), i;
        let { document: o } = n,
          a = o,
          s = a.currentScript,
          {
            DocumentFragment: u,
            HTMLTemplateElement: h,
            Node: p,
            Element: N,
            NodeFilter: H,
            NamedNodeMap: z = n.NamedNodeMap || n.MozNamedAttrMap,
            HTMLFormElement: $,
            DOMParser: W,
            trustedTypes: q,
          } = n,
          Y = N.prototype,
          K = P(Y, 'cloneNode'),
          J = P(Y, 'remove'),
          en = P(Y, 'nextSibling'),
          er = P(Y, 'childNodes'),
          ei = P(Y, 'parentNode');
        if ('function' == typeof h) {
          let e = o.createElement('template');
          e.content && e.content.ownerDocument && (o = e.content.ownerDocument);
        }
        let eo = '',
          { implementation: ea, createNodeIterator: es, createDocumentFragment: el, getElementsByTagName: eu } = o,
          { importNode: ec } = a,
          eh = et();
        i.isSupported = 'function' == typeof r && 'function' == typeof ei && ea && void 0 !== ea.createHTMLDocument;
        let {
            MUSTACHE_EXPR: ep,
            ERB_EXPR: ed,
            TMPLIT_EXPR: em,
            DATA_ATTR: ef,
            ARIA_ATTR: eg,
            IS_SCRIPT_OR_DATA: ey,
            ATTR_WHITESPACE: eb,
            CUSTOM_ELEMENT: e_,
          } = Q,
          { IS_ALLOWED_URI: ev } = Q,
          eS = null,
          ek = E({}, [...L, ...R, ...O, ...M, ...B]),
          ew = null,
          eC = E({}, [...U, ...G, ...j, ...F]),
          eA = Object.seal(
            c(null, {
              tagNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null },
              attributeNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null },
              allowCustomizedBuiltInElements: { writable: !0, configurable: !1, enumerable: !0, value: !1 },
            })
          ),
          eT = null,
          eN = null,
          eE = !0,
          ex = !0,
          eP = !1,
          eL = !0,
          eR = !1,
          eO = !0,
          eI = !1,
          eM = !1,
          eD = !1,
          eB = !1,
          eU = !1,
          eG = !1,
          ej = !0,
          eF = !1,
          eH = !0,
          ez = !1,
          e$ = {},
          eW = null,
          eq = E({}, [
            'annotation-xml',
            'audio',
            'colgroup',
            'desc',
            'foreignobject',
            'head',
            'iframe',
            'math',
            'mi',
            'mn',
            'mo',
            'ms',
            'mtext',
            'noembed',
            'noframes',
            'noscript',
            'plaintext',
            'script',
            'style',
            'svg',
            'template',
            'thead',
            'title',
            'video',
            'xmp',
          ]),
          eV = null,
          eY = E({}, ['audio', 'video', 'img', 'source', 'image', 'track']),
          eK = null,
          eX = E({}, [
            'alt',
            'class',
            'for',
            'id',
            'label',
            'name',
            'pattern',
            'placeholder',
            'role',
            'summary',
            'title',
            'value',
            'style',
            'xmlns',
          ]),
          eJ = 'http://www.w3.org/1998/Math/MathML',
          eQ = 'http://www.w3.org/2000/svg',
          eZ = 'http://www.w3.org/1999/xhtml',
          e0 = eZ,
          e1 = !1,
          e2 = null,
          e3 = E({}, [eJ, eQ, eZ], _),
          e5 = E({}, ['mi', 'mo', 'mn', 'ms', 'mtext']),
          e6 = E({}, ['annotation-xml']),
          e8 = E({}, ['title', 'style', 'font', 'a', 'script']),
          e4 = null,
          e9 = ['application/xhtml+xml', 'text/html'],
          e7 = null,
          te = null,
          tt = o.createElement('form'),
          tn = function (e) {
            return e instanceof RegExp || e instanceof Function;
          },
          tr = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (!te || te !== e) {
              if (
                ((e && 'object' == typeof e) || (e = {}),
                (e = x(e)),
                (e7 =
                  'application/xhtml+xml' ===
                  (e4 = -1 === e9.indexOf(e.PARSER_MEDIA_TYPE) ? 'text/html' : e.PARSER_MEDIA_TYPE)
                    ? _
                    : b),
                (eS = C(e, 'ALLOWED_TAGS') ? E({}, e.ALLOWED_TAGS, e7) : ek),
                (ew = C(e, 'ALLOWED_ATTR') ? E({}, e.ALLOWED_ATTR, e7) : eC),
                (e2 = C(e, 'ALLOWED_NAMESPACES') ? E({}, e.ALLOWED_NAMESPACES, _) : e3),
                (eK = C(e, 'ADD_URI_SAFE_ATTR') ? E(x(eX), e.ADD_URI_SAFE_ATTR, e7) : eX),
                (eV = C(e, 'ADD_DATA_URI_TAGS') ? E(x(eY), e.ADD_DATA_URI_TAGS, e7) : eY),
                (eW = C(e, 'FORBID_CONTENTS') ? E({}, e.FORBID_CONTENTS, e7) : eq),
                (eT = C(e, 'FORBID_TAGS') ? E({}, e.FORBID_TAGS, e7) : x({})),
                (eN = C(e, 'FORBID_ATTR') ? E({}, e.FORBID_ATTR, e7) : x({})),
                (e$ = !!C(e, 'USE_PROFILES') && e.USE_PROFILES),
                (eE = !1 !== e.ALLOW_ARIA_ATTR),
                (ex = !1 !== e.ALLOW_DATA_ATTR),
                (eP = e.ALLOW_UNKNOWN_PROTOCOLS || !1),
                (eL = !1 !== e.ALLOW_SELF_CLOSE_IN_ATTR),
                (eR = e.SAFE_FOR_TEMPLATES || !1),
                (eO = !1 !== e.SAFE_FOR_XML),
                (eI = e.WHOLE_DOCUMENT || !1),
                (eB = e.RETURN_DOM || !1),
                (eU = e.RETURN_DOM_FRAGMENT || !1),
                (eG = e.RETURN_TRUSTED_TYPE || !1),
                (eD = e.FORCE_BODY || !1),
                (ej = !1 !== e.SANITIZE_DOM),
                (eF = e.SANITIZE_NAMED_PROPS || !1),
                (eH = !1 !== e.KEEP_CONTENT),
                (ez = e.IN_PLACE || !1),
                (ev = e.ALLOWED_URI_REGEXP || V),
                (e0 = e.NAMESPACE || eZ),
                (e5 = e.MATHML_TEXT_INTEGRATION_POINTS || e5),
                (e6 = e.HTML_INTEGRATION_POINTS || e6),
                (eA = e.CUSTOM_ELEMENT_HANDLING || {}),
                e.CUSTOM_ELEMENT_HANDLING &&
                  tn(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
                  (eA.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
                e.CUSTOM_ELEMENT_HANDLING &&
                  tn(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
                  (eA.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
                e.CUSTOM_ELEMENT_HANDLING &&
                  'boolean' == typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements &&
                  (eA.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
                eR && (ex = !1),
                eU && (eB = !0),
                e$ &&
                  ((eS = E({}, B)),
                  (ew = []),
                  !0 === e$.html && (E(eS, L), E(ew, U)),
                  !0 === e$.svg && (E(eS, R), E(ew, G), E(ew, F)),
                  !0 === e$.svgFilters && (E(eS, O), E(ew, G), E(ew, F)),
                  !0 === e$.mathMl && (E(eS, M), E(ew, j), E(ew, F))),
                e.ADD_TAGS && (eS === ek && (eS = x(eS)), E(eS, e.ADD_TAGS, e7)),
                e.ADD_ATTR && (ew === eC && (ew = x(ew)), E(ew, e.ADD_ATTR, e7)),
                e.ADD_URI_SAFE_ATTR && E(eK, e.ADD_URI_SAFE_ATTR, e7),
                e.FORBID_CONTENTS && (eW === eq && (eW = x(eW)), E(eW, e.FORBID_CONTENTS, e7)),
                eH && (eS['#text'] = !0),
                eI && E(eS, ['html', 'head', 'body']),
                eS.table && (E(eS, ['tbody']), delete eT.tbody),
                e.TRUSTED_TYPES_POLICY)
              ) {
                if ('function' != typeof e.TRUSTED_TYPES_POLICY.createHTML)
                  throw T('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
                if ('function' != typeof e.TRUSTED_TYPES_POLICY.createScriptURL)
                  throw T('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
                eo = (t = e.TRUSTED_TYPES_POLICY).createHTML('');
              } else void 0 === t && (t = ee(q, s)), null !== t && 'string' == typeof eo && (eo = t.createHTML(''));
              l && l(e), (te = e);
            }
          },
          ti = E({}, [...R, ...O, ...I]),
          to = E({}, [...M, ...D]),
          ta = function (e) {
            let t = ei(e);
            (t && t.tagName) || (t = { namespaceURI: e0, tagName: 'template' });
            let n = b(e.tagName),
              r = b(t.tagName);
            return (
              !!e2[e.namespaceURI] &&
              (e.namespaceURI === eQ
                ? t.namespaceURI === eZ
                  ? 'svg' === n
                  : t.namespaceURI === eJ
                    ? 'svg' === n && ('annotation-xml' === r || e5[r])
                    : !!ti[n]
                : e.namespaceURI === eJ
                  ? t.namespaceURI === eZ
                    ? 'math' === n
                    : t.namespaceURI === eQ
                      ? 'math' === n && e6[r]
                      : !!to[n]
                  : e.namespaceURI === eZ
                    ? (t.namespaceURI !== eQ || !!e6[r]) &&
                      (t.namespaceURI !== eJ || !!e5[r]) &&
                      !to[n] &&
                      (e8[n] || !ti[n])
                    : 'application/xhtml+xml' === e4 && !!e2[e.namespaceURI])
            );
          },
          ts = function (e) {
            g(i.removed, { element: e });
            try {
              ei(e).removeChild(e);
            } catch (t) {
              J(e);
            }
          },
          tl = function (e, t) {
            try {
              g(i.removed, { attribute: t.getAttributeNode(e), from: t });
            } catch (e) {
              g(i.removed, { attribute: null, from: t });
            }
            if ((t.removeAttribute(e), 'is' === e))
              if (eB || eU)
                try {
                  ts(t);
                } catch (e) {}
              else
                try {
                  t.setAttribute(e, '');
                } catch (e) {}
          },
          tu = function (e) {
            let n = null,
              r = null;
            if (eD) e = '<remove></remove>' + e;
            else {
              let t = v(e, /^[\r\n\t ]+/);
              r = t && t[0];
            }
            'application/xhtml+xml' === e4 &&
              e0 === eZ &&
              (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + '</body></html>');
            let i = t ? t.createHTML(e) : e;
            if (e0 === eZ)
              try {
                n = new W().parseFromString(i, e4);
              } catch (e) {}
            if (!n || !n.documentElement) {
              n = ea.createDocument(e0, 'template', null);
              try {
                n.documentElement.innerHTML = e1 ? eo : i;
              } catch (e) {}
            }
            let a = n.body || n.documentElement;
            return (e && r && a.insertBefore(o.createTextNode(r), a.childNodes[0] || null), e0 === eZ)
              ? eu.call(n, eI ? 'html' : 'body')[0]
              : eI
                ? n.documentElement
                : a;
          },
          tc = function (e) {
            return es.call(
              e.ownerDocument || e,
              e,
              H.SHOW_ELEMENT | H.SHOW_COMMENT | H.SHOW_TEXT | H.SHOW_PROCESSING_INSTRUCTION | H.SHOW_CDATA_SECTION,
              null
            );
          },
          th = function (e) {
            return (
              e instanceof $ &&
              ('string' != typeof e.nodeName ||
                'string' != typeof e.textContent ||
                'function' != typeof e.removeChild ||
                !(e.attributes instanceof z) ||
                'function' != typeof e.removeAttribute ||
                'function' != typeof e.setAttribute ||
                'string' != typeof e.namespaceURI ||
                'function' != typeof e.insertBefore ||
                'function' != typeof e.hasChildNodes)
            );
          },
          tp = function (e) {
            return 'function' == typeof p && e instanceof p;
          };
        function td(e, t, n) {
          d(e, (e) => {
            e.call(i, t, n, te);
          });
        }
        let tm = function (e) {
            let t = null;
            if ((td(eh.beforeSanitizeElements, e, null), th(e))) return ts(e), !0;
            let n = e7(e.nodeName);
            if (
              (td(eh.uponSanitizeElement, e, { tagName: n, allowedTags: eS }),
              (eO &&
                e.hasChildNodes() &&
                !tp(e.firstElementChild) &&
                A(/<[/\w!]/g, e.innerHTML) &&
                A(/<[/\w!]/g, e.textContent)) ||
                e.nodeType === Z.progressingInstruction ||
                (eO && e.nodeType === Z.comment && A(/<[/\w]/g, e.data)))
            )
              return ts(e), !0;
            if (!eS[n] || eT[n]) {
              if (
                !eT[n] &&
                tg(n) &&
                ((eA.tagNameCheck instanceof RegExp && A(eA.tagNameCheck, n)) ||
                  (eA.tagNameCheck instanceof Function && eA.tagNameCheck(n)))
              )
                return !1;
              if (eH && !eW[n]) {
                let t = ei(e) || e.parentNode,
                  n = er(e) || e.childNodes;
                if (n && t) {
                  let r = n.length;
                  for (let i = r - 1; i >= 0; --i) {
                    let r = K(n[i], !0);
                    (r.__removalCount = (e.__removalCount || 0) + 1), t.insertBefore(r, en(e));
                  }
                }
              }
              return ts(e), !0;
            }
            return (e instanceof N && !ta(e)) ||
              (('noscript' === n || 'noembed' === n || 'noframes' === n) &&
                A(/<\/no(script|embed|frames)/i, e.innerHTML))
              ? (ts(e), !0)
              : (eR &&
                  e.nodeType === Z.text &&
                  ((t = e.textContent),
                  d([ep, ed, em], (e) => {
                    t = S(t, e, ' ');
                  }),
                  e.textContent !== t && (g(i.removed, { element: e.cloneNode() }), (e.textContent = t))),
                td(eh.afterSanitizeElements, e, null),
                !1);
          },
          tf = function (e, t, n) {
            if (ej && ('id' === t || 'name' === t) && (n in o || n in tt)) return !1;
            if (ex && !eN[t] && A(ef, t));
            else if (eE && A(eg, t));
            else if (!ew[t] || eN[t]) {
              if (
                !(
                  (tg(e) &&
                    ((eA.tagNameCheck instanceof RegExp && A(eA.tagNameCheck, e)) ||
                      (eA.tagNameCheck instanceof Function && eA.tagNameCheck(e))) &&
                    ((eA.attributeNameCheck instanceof RegExp && A(eA.attributeNameCheck, t)) ||
                      (eA.attributeNameCheck instanceof Function && eA.attributeNameCheck(t)))) ||
                  ('is' === t &&
                    eA.allowCustomizedBuiltInElements &&
                    ((eA.tagNameCheck instanceof RegExp && A(eA.tagNameCheck, n)) ||
                      (eA.tagNameCheck instanceof Function && eA.tagNameCheck(n))))
                )
              )
                return !1;
            } else if (eK[t]);
            else if (A(ev, S(n, eb, '')));
            else if (
              ('src' === t || 'xlink:href' === t || 'href' === t) &&
              'script' !== e &&
              0 === k(n, 'data:') &&
              eV[e]
            );
            else if (eP && !A(ey, S(n, eb, '')));
            else if (n) return !1;
            return !0;
          },
          tg = function (e) {
            return 'annotation-xml' !== e && v(e, e_);
          },
          ty = function (e) {
            td(eh.beforeSanitizeAttributes, e, null);
            let { attributes: n } = e;
            if (!n || th(e)) return;
            let r = { attrName: '', attrValue: '', keepAttr: !0, allowedAttributes: ew, forceKeepAttr: void 0 },
              o = n.length;
            for (; o--; ) {
              let { name: a, namespaceURI: s, value: l } = n[o],
                u = e7(a),
                c = 'value' === a ? l : w(l);
              if (
                ((r.attrName = u),
                (r.attrValue = c),
                (r.keepAttr = !0),
                (r.forceKeepAttr = void 0),
                td(eh.uponSanitizeAttribute, e, r),
                (c = r.attrValue),
                eF && ('id' === u || 'name' === u) && (tl(a, e), (c = 'user-content-' + c)),
                eO && A(/((--!?|])>)|<\/(style|title)/i, c))
              ) {
                tl(a, e);
                continue;
              }
              if (r.forceKeepAttr) continue;
              if (!r.keepAttr || (!eL && A(/\/>/i, c))) {
                tl(a, e);
                continue;
              }
              eR &&
                d([ep, ed, em], (e) => {
                  c = S(c, e, ' ');
                });
              let h = e7(e.nodeName);
              if (!tf(h, u, c)) {
                tl(a, e);
                continue;
              }
              if (t && 'object' == typeof q && 'function' == typeof q.getAttributeType)
                if (s);
                else
                  switch (q.getAttributeType(h, u)) {
                    case 'TrustedHTML':
                      c = t.createHTML(c);
                      break;
                    case 'TrustedScriptURL':
                      c = t.createScriptURL(c);
                  }
              if (c !== l)
                try {
                  s ? e.setAttributeNS(s, a, c) : e.setAttribute(a, c), th(e) ? ts(e) : f(i.removed);
                } catch (t) {
                  tl(a, e);
                }
            }
            td(eh.afterSanitizeAttributes, e, null);
          },
          tb = function e(t) {
            let n = null,
              r = tc(t);
            for (td(eh.beforeSanitizeShadowDOM, t, null); (n = r.nextNode()); )
              td(eh.uponSanitizeShadowNode, n, null), tm(n), ty(n), n.content instanceof u && e(n.content);
            td(eh.afterSanitizeShadowDOM, t, null);
          };
        return (
          (i.sanitize = function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              r = null,
              o = null,
              s = null,
              l = null;
            if (((e1 = !e) && (e = '\x3c!--\x3e'), 'string' != typeof e && !tp(e)))
              if ('function' == typeof e.toString) {
                if ('string' != typeof (e = e.toString())) throw T('dirty is not a string, aborting');
              } else throw T('toString is not a function');
            if (!i.isSupported) return e;
            if ((eM || tr(n), (i.removed = []), 'string' == typeof e && (ez = !1), ez)) {
              if (e.nodeName) {
                let t = e7(e.nodeName);
                if (!eS[t] || eT[t]) throw T('root node is forbidden and cannot be sanitized in-place');
              }
            } else if (e instanceof p)
              ((o = (r = tu('\x3c!----\x3e')).ownerDocument.importNode(e, !0)).nodeType === Z.element &&
                'BODY' === o.nodeName) ||
              'HTML' === o.nodeName
                ? (r = o)
                : r.appendChild(o);
            else {
              if (!eB && !eR && !eI && -1 === e.indexOf('<')) return t && eG ? t.createHTML(e) : e;
              if (!(r = tu(e))) return eB ? null : eG ? eo : '';
            }
            r && eD && ts(r.firstChild);
            let c = tc(ez ? e : r);
            for (; (s = c.nextNode()); ) tm(s), ty(s), s.content instanceof u && tb(s.content);
            if (ez) return e;
            if (eB) {
              if (eU) for (l = el.call(r.ownerDocument); r.firstChild; ) l.appendChild(r.firstChild);
              else l = r;
              return (ew.shadowroot || ew.shadowrootmode) && (l = ec.call(a, l, !0)), l;
            }
            let h = eI ? r.outerHTML : r.innerHTML;
            return (
              eI &&
                eS['!doctype'] &&
                r.ownerDocument &&
                r.ownerDocument.doctype &&
                r.ownerDocument.doctype.name &&
                A(X, r.ownerDocument.doctype.name) &&
                (h = '<!DOCTYPE ' + r.ownerDocument.doctype.name + '>\n' + h),
              eR &&
                d([ep, ed, em], (e) => {
                  h = S(h, e, ' ');
                }),
              t && eG ? t.createHTML(h) : h
            );
          }),
          (i.setConfig = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            tr(e), (eM = !0);
          }),
          (i.clearConfig = function () {
            (te = null), (eM = !1);
          }),
          (i.isValidAttribute = function (e, t, n) {
            return te || tr({}), tf(e7(e), e7(t), n);
          }),
          (i.addHook = function (e, t) {
            'function' == typeof t && g(eh[e], t);
          }),
          (i.removeHook = function (e, t) {
            if (void 0 !== t) {
              let n = m(eh[e], t);
              return -1 === n ? void 0 : y(eh[e], n, 1)[0];
            }
            return f(eh[e]);
          }),
          (i.removeHooks = function (e) {
            eh[e] = [];
          }),
          (i.removeAllHooks = function () {
            eh = et();
          }),
          i
        );
      })();
    },
  },
]);
