(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7382],
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
                    a = l(e),
                    o = a[0],
                    s = a[1],
                    u = new i(((o + s) * 3) / 4 - s),
                    h = 0,
                    c = s > 0 ? o - 4 : o;
                  for (n = 0; n < c; n += 4)
                    (t =
                      (r[e.charCodeAt(n)] << 18) |
                      (r[e.charCodeAt(n + 1)] << 12) |
                      (r[e.charCodeAt(n + 2)] << 6) |
                      r[e.charCodeAt(n + 3)]),
                      (u[h++] = (t >> 16) & 255),
                      (u[h++] = (t >> 8) & 255),
                      (u[h++] = 255 & t);
                  return (
                    2 === s && ((t = (r[e.charCodeAt(n)] << 2) | (r[e.charCodeAt(n + 1)] >> 4)), (u[h++] = 255 & t)),
                    1 === s &&
                      ((t = (r[e.charCodeAt(n)] << 10) | (r[e.charCodeAt(n + 1)] << 4) | (r[e.charCodeAt(n + 2)] >> 2)),
                      (u[h++] = (t >> 8) & 255),
                      (u[h++] = 255 & t)),
                    u
                  );
                }),
                (t.fromByteArray = function (e) {
                  for (var t, r = e.length, i = r % 3, a = [], o = 0, s = r - i; o < s; o += 16383)
                    a.push(
                      (function (e, t, r) {
                        for (var i, a = [], o = t; o < r; o += 3)
                          (i = ((e[o] << 16) & 0xff0000) + ((e[o + 1] << 8) & 65280) + (255 & e[o + 2])),
                            a.push(n[(i >> 18) & 63] + n[(i >> 12) & 63] + n[(i >> 6) & 63] + n[63 & i]);
                        return a.join('');
                      })(e, o, o + 16383 > s ? s : o + 16383)
                    );
                  return (
                    1 === i
                      ? a.push(n[(t = e[r - 1]) >> 2] + n[(t << 4) & 63] + '==')
                      : 2 === i &&
                        a.push(n[(t = (e[r - 2] << 8) + e[r - 1]) >> 10] + n[(t >> 4) & 63] + n[(t << 2) & 63] + '='),
                    a.join('')
                  );
                });
              for (
                var n = [],
                  r = [],
                  i = 'undefined' != typeof Uint8Array ? Uint8Array : Array,
                  a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
                  o = 0,
                  s = a.length;
                o < s;
                ++o
              )
                (n[o] = a[o]), (r[a.charCodeAt(o)] = o);
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
                a =
                  'function' == typeof Symbol && 'function' == typeof Symbol.for
                    ? Symbol.for('nodejs.util.inspect.custom')
                    : null;
              function o(e) {
                if (e > 0x7fffffff) throw RangeError('The value "' + e + '" is invalid for option "size"');
                var t = new Uint8Array(e);
                return Object.setPrototypeOf(t, s.prototype), t;
              }
              function s(e, t, n) {
                if ('number' == typeof e) {
                  if ('string' == typeof t)
                    throw TypeError('The "string" argument must be of type string. Received type number');
                  return h(e);
                }
                return l(e, t, n);
              }
              function l(e, t, n) {
                if ('string' == typeof e) {
                  var r = e,
                    i = t;
                  if ((('string' != typeof i || '' === i) && (i = 'utf8'), !s.isEncoding(i)))
                    throw TypeError('Unknown encoding: ' + i);
                  var a = 0 | p(r, i),
                    l = o(a),
                    u = l.write(r, i);
                  return u !== a && (l = l.slice(0, u)), l;
                }
                if (ArrayBuffer.isView(e)) return c(e);
                if (null == e)
                  throw TypeError(
                    'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
                      typeof e
                  );
                if (
                  T(e, ArrayBuffer) ||
                  (e && T(e.buffer, ArrayBuffer)) ||
                  ('undefined' != typeof SharedArrayBuffer &&
                    (T(e, SharedArrayBuffer) || (e && T(e.buffer, SharedArrayBuffer))))
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
                var h = e.valueOf && e.valueOf();
                if (null != h && h !== e) return s.from(h, t, n);
                var m = (function (e) {
                  if (s.isBuffer(e)) {
                    var t = 0 | d(e.length),
                      n = o(t);
                    return 0 === n.length || e.copy(n, 0, 0, t), n;
                  }
                  return void 0 !== e.length
                    ? 'number' != typeof e.length ||
                      (function (e) {
                        return e != e;
                      })(e.length)
                      ? o(0)
                      : c(e)
                    : 'Buffer' === e.type && Array.isArray(e.data)
                      ? c(e.data)
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
              function h(e) {
                return u(e), o(e < 0 ? 0 : 0 | d(e));
              }
              function c(e) {
                for (var t = e.length < 0 ? 0 : 0 | d(e.length), n = o(t), r = 0; r < t; r += 1) n[r] = 255 & e[r];
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
                    ? o(e)
                    : void 0 !== t
                      ? 'string' == typeof n
                        ? o(e).fill(t, n)
                        : o(e).fill(t)
                      : o(e);
                }),
                (s.allocUnsafe = function (e) {
                  return h(e);
                }),
                (s.allocUnsafeSlow = function (e) {
                  return h(e);
                });
              function d(e) {
                if (e >= 0x7fffffff)
                  throw RangeError('Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes');
                return 0 | e;
              }
              function p(e, t) {
                if (s.isBuffer(e)) return e.length;
                if (ArrayBuffer.isView(e) || T(e, ArrayBuffer)) return e.byteLength;
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
                  a,
                  o,
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
                        for (var i = '', a = t; a < n; ++a) i += L[e[a]];
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
                        (a = t),
                        (o = n),
                        0 === a && o === i.length ? r.fromByteArray(i) : r.fromByteArray(i.slice(a, o))
                      );
                    case 'ucs2':
                    case 'ucs-2':
                    case 'utf16le':
                    case 'utf-16le':
                      return (function (e, t, n) {
                        for (var r = e.slice(t, n), i = '', a = 0; a < r.length; a += 2)
                          i += String.fromCharCode(r[a] + 256 * r[a + 1]);
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
                var a;
                if (0 === e.length) return -1;
                if (
                  ('string' == typeof n
                    ? ((r = n), (n = 0))
                    : n > 0x7fffffff
                      ? (n = 0x7fffffff)
                      : n < -0x80000000 && (n = -0x80000000),
                  (a = n *= 1) != a && (n = i ? 0 : e.length - 1),
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
                var a,
                  o = 1,
                  s = e.length,
                  l = t.length;
                if (
                  void 0 !== r &&
                  ('ucs2' === (r = String(r).toLowerCase()) || 'ucs-2' === r || 'utf16le' === r || 'utf-16le' === r)
                ) {
                  if (e.length < 2 || t.length < 2) return -1;
                  (o = 2), (s /= 2), (l /= 2), (n /= 2);
                }
                function u(e, t) {
                  return 1 === o ? e[t] : e.readUInt16BE(t * o);
                }
                if (i) {
                  var h = -1;
                  for (a = n; a < s; a++)
                    if (u(e, a) === u(t, -1 === h ? 0 : a - h)) {
                      if ((-1 === h && (h = a), a - h + 1 === l)) return h * o;
                    } else -1 !== h && (a -= a - h), (h = -1);
                } else
                  for (n + l > s && (n = s - l), a = n; a >= 0; a--) {
                    for (var c = !0, d = 0; d < l; d++)
                      if (u(e, a + d) !== u(t, d)) {
                        c = !1;
                        break;
                      }
                    if (c) return a;
                  }
                return -1;
              }
              (s.isBuffer = function (e) {
                return null != e && !0 === e._isBuffer && e !== s.prototype;
              }),
                (s.compare = function (e, t) {
                  if (
                    (T(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)),
                    T(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)),
                    !s.isBuffer(e) || !s.isBuffer(t))
                  )
                    throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                  if (e === t) return 0;
                  for (var n = e.length, r = t.length, i = 0, a = Math.min(n, r); i < a; ++i)
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
                    var a = e[n];
                    if ((T(a, Uint8Array) && (a = s.from(a)), !s.isBuffer(a)))
                      throw TypeError('"list" argument must be an Array of Buffers');
                    a.copy(r, i), (i += a.length);
                  }
                  return r;
                }),
                (s.byteLength = p),
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
                a && (s.prototype[a] = s.prototype.inspect),
                (s.prototype.compare = function (e, t, n, r, i) {
                  if ((T(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), !s.isBuffer(e)))
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
                    var a = i - r, o = n - t, l = Math.min(a, o), u = this.slice(r, i), h = e.slice(t, n), c = 0;
                    c < l;
                    ++c
                  )
                    if (u[c] !== h[c]) {
                      (a = u[c]), (o = h[c]);
                      break;
                    }
                  return a < o ? -1 : +(o < a);
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
                  var a,
                    o,
                    s,
                    l,
                    u = e[i],
                    h = null,
                    c = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
                  if (i + c <= n)
                    switch (c) {
                      case 1:
                        u < 128 && (h = u);
                        break;
                      case 2:
                        (192 & (a = e[i + 1])) == 128 && (l = ((31 & u) << 6) | (63 & a)) > 127 && (h = l);
                        break;
                      case 3:
                        (a = e[i + 1]),
                          (o = e[i + 2]),
                          (192 & a) == 128 &&
                            (192 & o) == 128 &&
                            (l = ((15 & u) << 12) | ((63 & a) << 6) | (63 & o)) > 2047 &&
                            (l < 55296 || l > 57343) &&
                            (h = l);
                        break;
                      case 4:
                        (a = e[i + 1]),
                          (o = e[i + 2]),
                          (s = e[i + 3]),
                          (192 & a) == 128 &&
                            (192 & o) == 128 &&
                            (192 & s) == 128 &&
                            (l = ((15 & u) << 18) | ((63 & a) << 12) | ((63 & o) << 6) | (63 & s)) > 65535 &&
                            l < 1114112 &&
                            (h = l);
                    }
                  null === h
                    ? ((h = 65533), (c = 1))
                    : h > 65535 && ((h -= 65536), r.push(((h >>> 10) & 1023) | 55296), (h = 56320 | (1023 & h))),
                    r.push(h),
                    (i += c);
                }
                var d = r,
                  p = d.length;
                if (p <= 4096) return String.fromCharCode.apply(String, d);
                for (var m = '', f = 0; f < p; ) m += String.fromCharCode.apply(String, d.slice(f, (f += 4096)));
                return m;
              }
              function _(e, t, n) {
                if (e % 1 != 0 || e < 0) throw RangeError('offset is not uint');
                if (e + t > n) throw RangeError('Trying to access beyond buffer length');
              }
              function v(e, t, n, r, i, a) {
                if (!s.isBuffer(e)) throw TypeError('"buffer" argument must be a Buffer instance');
                if (t > i || t < a) throw RangeError('"value" argument is out of bounds');
                if (n + r > e.length) throw RangeError('Index out of range');
              }
              function k(e, t, n, r, i, a) {
                if (n + r > e.length || n < 0) throw RangeError('Index out of range');
              }
              function w(e, t, n, r, a) {
                return (
                  (t *= 1),
                  (n >>>= 0),
                  a || k(e, t, n, 4, 34028234663852886e22, -34028234663852886e22),
                  i.write(e, t, n, r, 23, 4),
                  n + 4
                );
              }
              function S(e, t, n, r, a) {
                return (
                  (t *= 1),
                  (n >>>= 0),
                  a || k(e, t, n, 8, 17976931348623157e292, -17976931348623157e292),
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
                  a,
                  o,
                  s,
                  l,
                  u,
                  h,
                  c,
                  d = this.length - t;
                if (((void 0 === n || n > d) && (n = d), (e.length > 0 && (n < 0 || t < 0)) || t > this.length))
                  throw RangeError('Attempt to write outside buffer bounds');
                r || (r = 'utf8');
                for (var p = !1; ; )
                  switch (r) {
                    case 'hex':
                      return (function (e, t, n, r) {
                        n = Number(n) || 0;
                        var i = e.length - n;
                        r ? (r = Number(r)) > i && (r = i) : (r = i);
                        var a = t.length;
                        r > a / 2 && (r = a / 2);
                        for (var o = 0; o < r; ++o) {
                          var s,
                            l = parseInt(t.substr(2 * o, 2), 16);
                          if ((s = l) != s) break;
                          e[n + o] = l;
                        }
                        return o;
                      })(this, e, t, n);
                    case 'utf8':
                    case 'utf-8':
                      return (i = t), (a = n), x(A(e, this.length - i), this, i, a);
                    case 'ascii':
                      return (o = t), (s = n), x(P(e), this, o, s);
                    case 'latin1':
                    case 'binary':
                      return (function (e, t, n, r) {
                        return x(P(t), e, n, r);
                      })(this, e, t, n);
                    case 'base64':
                      return (l = t), (u = n), x(N(e), this, l, u);
                    case 'ucs2':
                    case 'ucs-2':
                    case 'utf16le':
                    case 'utf-16le':
                      return (
                        (h = t),
                        (c = n),
                        x(
                          (function (e, t) {
                            for (var n, r, i = [], a = 0; a < e.length && !((t -= 2) < 0); ++a)
                              (r = (n = e.charCodeAt(a)) >> 8), i.push(n % 256), i.push(r);
                            return i;
                          })(e, this.length - h),
                          this,
                          h,
                          c
                        )
                      );
                    default:
                      if (p) throw TypeError('Unknown encoding: ' + r);
                      (r = ('' + r).toLowerCase()), (p = !0);
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
                  for (var r = this[e], i = 1, a = 0; ++a < t && (i *= 256); ) r += this[e + a] * i;
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
                  for (var r = this[e], i = 1, a = 0; ++a < t && (i *= 256); ) r += this[e + a] * i;
                  return r >= (i *= 128) && (r -= Math.pow(2, 8 * t)), r;
                }),
                (s.prototype.readIntBE = function (e, t, n) {
                  (e >>>= 0), (t >>>= 0), n || _(e, t, this.length);
                  for (var r = t, i = 1, a = this[e + --r]; r > 0 && (i *= 256); ) a += this[e + --r] * i;
                  return a >= (i *= 128) && (a -= Math.pow(2, 8 * t)), a;
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
                  var a = 1,
                    o = 0;
                  for (this[t] = 255 & e; ++o < n && (a *= 256); ) this[t + o] = (e / a) & 255;
                  return t + n;
                }),
                (s.prototype.writeUIntBE = function (e, t, n, r) {
                  if (((e *= 1), (t >>>= 0), (n >>>= 0), !r)) {
                    var i = Math.pow(2, 8 * n) - 1;
                    v(this, e, t, n, i, 0);
                  }
                  var a = n - 1,
                    o = 1;
                  for (this[t + a] = 255 & e; --a >= 0 && (o *= 256); ) this[t + a] = (e / o) & 255;
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
                  var a = 0,
                    o = 1,
                    s = 0;
                  for (this[t] = 255 & e; ++a < n && (o *= 256); )
                    e < 0 && 0 === s && 0 !== this[t + a - 1] && (s = 1), (this[t + a] = (((e / o) | 0) - s) & 255);
                  return t + n;
                }),
                (s.prototype.writeIntBE = function (e, t, n, r) {
                  if (((e *= 1), (t >>>= 0), !r)) {
                    var i = Math.pow(2, 8 * n - 1);
                    v(this, e, t, n, i - 1, -i);
                  }
                  var a = n - 1,
                    o = 1,
                    s = 0;
                  for (this[t + a] = 255 & e; --a >= 0 && (o *= 256); )
                    e < 0 && 0 === s && 0 !== this[t + a + 1] && (s = 1), (this[t + a] = (((e / o) | 0) - s) & 255);
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
                  return w(this, e, t, !0, n);
                }),
                (s.prototype.writeFloatBE = function (e, t, n) {
                  return w(this, e, t, !1, n);
                }),
                (s.prototype.writeDoubleLE = function (e, t, n) {
                  return S(this, e, t, !0, n);
                }),
                (s.prototype.writeDoubleBE = function (e, t, n) {
                  return S(this, e, t, !1, n);
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
                  else if (this === e && n < t && t < r) for (var a = i - 1; a >= 0; --a) e[a + t] = this[a + n];
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
                        a = e.charCodeAt(0);
                      (('utf8' === r && a < 128) || 'latin1' === r) && (e = a);
                    }
                  } else 'number' == typeof e ? (e &= 255) : 'boolean' == typeof e && (e = Number(e));
                  if (t < 0 || this.length < t || this.length < n) throw RangeError('Out of range index');
                  if (n <= t) return this;
                  if (((t >>>= 0), (n = void 0 === n ? this.length : n >>> 0), e || (e = 0), 'number' == typeof e))
                    for (i = t; i < n; ++i) this[i] = e;
                  else {
                    var o = s.isBuffer(e) ? e : s.from(e, r),
                      l = o.length;
                    if (0 === l) throw TypeError('The value "' + e + '" is invalid for argument "value"');
                    for (i = 0; i < n - t; ++i) this[i + t] = o[i % l];
                  }
                  return this;
                });
              var C = /[^+/0-9A-Za-z-_]/g;
              function A(e, t) {
                t = t || 1 / 0;
                for (var n, r = e.length, i = null, a = [], o = 0; o < r; ++o) {
                  if ((n = e.charCodeAt(o)) > 55295 && n < 57344) {
                    if (!i) {
                      if (n > 56319 || o + 1 === r) {
                        (t -= 3) > -1 && a.push(239, 191, 189);
                        continue;
                      }
                      i = n;
                      continue;
                    }
                    if (n < 56320) {
                      (t -= 3) > -1 && a.push(239, 191, 189), (i = n);
                      continue;
                    }
                    n = (((i - 55296) << 10) | (n - 56320)) + 65536;
                  } else i && (t -= 3) > -1 && a.push(239, 191, 189);
                  if (((i = null), n < 128)) {
                    if ((t -= 1) < 0) break;
                    a.push(n);
                  } else if (n < 2048) {
                    if ((t -= 2) < 0) break;
                    a.push((n >> 6) | 192, (63 & n) | 128);
                  } else if (n < 65536) {
                    if ((t -= 3) < 0) break;
                    a.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128);
                  } else if (n < 1114112) {
                    if ((t -= 4) < 0) break;
                    a.push((n >> 18) | 240, ((n >> 12) & 63) | 128, ((n >> 6) & 63) | 128, (63 & n) | 128);
                  } else throw Error('Invalid code point');
                }
                return a;
              }
              function P(e) {
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
              function x(e, t, n, r) {
                for (var i = 0; i < r && !(i + n >= t.length) && !(i >= e.length); ++i) t[i + n] = e[i];
                return i;
              }
              function T(e, t) {
                return (
                  e instanceof t ||
                  (null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name)
                );
              }
              var L = (function () {
                for (var e = '0123456789abcdef', t = Array(256), n = 0; n < 16; ++n)
                  for (var r = 16 * n, i = 0; i < 16; ++i) t[r + i] = e[n] + e[i];
                return t;
              })();
            },
            783: function (e, t) {
              (t.read = function (e, t, n, r, i) {
                var a,
                  o,
                  s = 8 * i - r - 1,
                  l = (1 << s) - 1,
                  u = l >> 1,
                  h = -7,
                  c = n ? i - 1 : 0,
                  d = n ? -1 : 1,
                  p = e[t + c];
                for (c += d, a = p & ((1 << -h) - 1), p >>= -h, h += s; h > 0; a = 256 * a + e[t + c], c += d, h -= 8);
                for (o = a & ((1 << -h) - 1), a >>= -h, h += r; h > 0; o = 256 * o + e[t + c], c += d, h -= 8);
                if (0 === a) a = 1 - u;
                else {
                  if (a === l) return o ? NaN : (1 / 0) * (p ? -1 : 1);
                  (o += Math.pow(2, r)), (a -= u);
                }
                return (p ? -1 : 1) * o * Math.pow(2, a - r);
              }),
                (t.write = function (e, t, n, r, i, a) {
                  var o,
                    s,
                    l,
                    u = 8 * a - i - 1,
                    h = (1 << u) - 1,
                    c = h >> 1,
                    d = 5960464477539062e-23 * (23 === i),
                    p = r ? 0 : a - 1,
                    m = r ? 1 : -1,
                    f = +(t < 0 || (0 === t && 1 / t < 0));
                  for (
                    isNaN((t = Math.abs(t))) || t === 1 / 0
                      ? ((s = +!!isNaN(t)), (o = h))
                      : ((o = Math.floor(Math.log(t) / Math.LN2)),
                        t * (l = Math.pow(2, -o)) < 1 && (o--, (l *= 2)),
                        o + c >= 1 ? (t += d / l) : (t += d * Math.pow(2, 1 - c)),
                        t * l >= 2 && (o++, (l /= 2)),
                        o + c >= h
                          ? ((s = 0), (o = h))
                          : o + c >= 1
                            ? ((s = (t * l - 1) * Math.pow(2, i)), (o += c))
                            : ((s = t * Math.pow(2, c - 1) * Math.pow(2, i)), (o = 0)));
                    i >= 8;
                    e[n + p] = 255 & s, p += m, s /= 256, i -= 8
                  );
                  for (o = (o << i) | s, u += i; u > 0; e[n + p] = 255 & o, p += m, o /= 256, u -= 8);
                  e[n + p - m] |= 128 * f;
                });
            },
          },
          n = {};
        function r(e) {
          var i = n[e];
          if (void 0 !== i) return i.exports;
          var a = (n[e] = { exports: {} }),
            o = !0;
          try {
            t[e](a, a.exports, r), (o = !1);
          } finally {
            o && delete n[e];
          }
          return a.exports;
        }
        (r.ab = '//'), (e.exports = r(72));
      })();
    },
    7382: (e, t, n) => {
      'use strict';
      let r, i;
      n.d(t, { Yz: () => nN });
      var a = {};
      n.r(a),
        n.d(a, {
          boolean: () => eP,
          booleanish: () => eN,
          commaOrSpaceSeparated: () => eR,
          commaSeparated: () => eE,
          number: () => eT,
          overloadedBoolean: () => ex,
          spaceSeparated: () => eL,
        });
      class o extends Error {
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
        h = class {
          static hasCaptures(e) {
            return null !== e && ((u.lastIndex = 0), u.test(e));
          }
          static replaceCaptures(e, t, n) {
            return e.replace(u, (e, r, i, a) => {
              let o = n[parseInt(r || i, 10)];
              if (!o) return e;
              {
                let e = t.substring(o.start, o.end);
                for (; '.' === e[0]; ) e = e.substring(1);
                switch (a) {
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
      function c(e, t) {
        return e < t ? -1 : +(e > t);
      }
      function d(e, t) {
        if (null === e && null === t) return 0;
        if (!e) return -1;
        if (!t) return 1;
        let n = e.length,
          r = t.length;
        if (n === r) {
          for (let r = 0; r < n; r++) {
            var i, a;
            let n = ((i = e[r]), i < (a = t[r]) ? -1 : +(i > a));
            if (0 !== n) return n;
          }
          return 0;
        }
        return n - r;
      }
      function p(e) {
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
                    a = t[e];
                  if (!a.settings) continue;
                  if ('string' == typeof a.scope) {
                    let e = a.scope;
                    i = (e = (e = e.replace(/^[,]+/, '')).replace(/[,]+$/, '')).split(',');
                  } else i = Array.isArray(a.scope) ? a.scope : [''];
                  let o = -1;
                  if ('string' == typeof a.settings.fontStyle) {
                    o = 0;
                    let e = a.settings.fontStyle.split(' ');
                    for (let t = 0, n = e.length; t < n; t++)
                      switch (e[t]) {
                        case 'italic':
                          o |= 1;
                          break;
                        case 'bold':
                          o |= 2;
                          break;
                        case 'underline':
                          o |= 4;
                          break;
                        case 'strikethrough':
                          o |= 8;
                      }
                  }
                  let s = null;
                  'string' == typeof a.settings.foreground && p(a.settings.foreground) && (s = a.settings.foreground);
                  let l = null;
                  'string' == typeof a.settings.background && p(a.settings.background) && (l = a.settings.background);
                  for (let t = 0, a = i.length; t < a; t++) {
                    let a = i[t].trim().split(' '),
                      u = a[a.length - 1],
                      h = null;
                    a.length > 1 && (h = a.slice(0, a.length - 1)).reverse(), (n[r++] = new _(u, h, e, o, s, l));
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
                return 0 !== i || 0 !== (i = d(e.parentScopes, t.parentScopes)) ? i : e.index - t.index;
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
              let a = new k(t),
                o = new b(n, a.getId(r), a.getId(i)),
                s = new C(new S(0, null, -1, 0, 0), []);
              for (let t = 0, n = e.length; t < n; t++) {
                let n = e[t];
                s.insert(0, n.scope, n.parentScopes, n.fontStyle, a.getId(n.foreground), a.getId(n.background));
              }
              return new g(a, o, s);
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
                    let a = t[i],
                      o = !1;
                    if ('>' === a) {
                      if (i === t.length - 1) return !1;
                      (a = t[++i]), (o = !0);
                    }
                    for (; e && ((n = e.scopeName), !((r = a) === n || (n.startsWith(r) && '.' === n[r.length]))); ) {
                      if (o) return !1;
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
          constructor(e, t, n, r, i, a) {
            (this.scope = e),
              (this.parentScopes = t),
              (this.index = n),
              (this.fontStyle = r),
              (this.foreground = i),
              (this.background = a);
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
        k = class {
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
        w = Object.freeze([]),
        S = class e {
          scopeDepth;
          parentScopes;
          fontStyle;
          foreground;
          background;
          constructor(e, t, n, r, i) {
            (this.scopeDepth = e),
              (this.parentScopes = t || w),
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
          insert(t, n, r, i, a, o) {
            let s, l, u;
            if ('' === n) return void this._doInsertHere(t, r, i, a, o);
            let h = n.indexOf('.');
            -1 === h ? ((s = n), (l = '')) : ((s = n.substring(0, h)), (l = n.substring(h + 1))),
              this._children.hasOwnProperty(s)
                ? (u = this._children[s])
                : ((u = new e(this._mainRule.clone(), S.cloneArr(this._rulesWithParentScopes))),
                  (this._children[s] = u)),
              u.insert(t + 1, l, r, i, a, o);
          }
          _doInsertHere(e, t, n, r, i) {
            if (null === t) return void this._mainRule.acceptOverwrite(e, n, r, i);
            for (let a = 0, o = this._rulesWithParentScopes.length; a < o; a++) {
              let o = this._rulesWithParentScopes[a];
              if (0 === d(o.parentScopes, t)) return void o.acceptOverwrite(e, n, r, i);
            }
            -1 === n && (n = this._mainRule.fontStyle),
              0 === r && (r = this._mainRule.foreground),
              0 === i && (i = this._mainRule.background),
              this._rulesWithParentScopes.push(new S(e, t, n, r, i));
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
          static set(t, n, r, i, a, o, s) {
            let l = e.getLanguageId(t),
              u = e.getTokenType(t),
              h = +!!e.containsBalancedBrackets(t),
              c = e.getFontStyle(t),
              d = e.getForeground(t),
              p = e.getBackground(t);
            return (
              0 !== n && (l = n),
              8 !== r && (u = r),
              null !== i && (h = +!!i),
              -1 !== a && (c = a),
              0 !== o && (d = o),
              0 !== s && (p = s),
              (0 | l | (u << 8) | (h << 10) | (c << 11) | (d << 15) | (p << 24)) >>> 0
            );
          }
        };
      function P(e, t) {
        var n;
        let r,
          i,
          a = [],
          o =
            ((n = e),
            (i = (r = /([LR]:|[\w\.:][\w\.:\-]*|[\,\|\-\(\)])/g).exec(n)),
            {
              next: () => {
                if (!i) return null;
                let e = i[0];
                return (i = r.exec(n)), e;
              },
            }),
          s = o.next();
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
            s = o.next();
          }
          let t = u();
          if ((a.push({ matcher: t, priority: e }), ',' !== s)) break;
          s = o.next();
        }
        return a;
        function l() {
          if ('-' === s) {
            s = o.next();
            let e = l();
            return (t) => !!e && !e(t);
          }
          if ('(' === s) {
            s = o.next();
            let e = (function () {
              let e = [],
                t = u();
              for (; t && (e.push(t), '|' === s || ',' === s); ) {
                do s = o.next();
                while ('|' === s || ',' === s);
                t = u();
              }
              return (t) => e.some((e) => e(t));
            })();
            return ')' === s && (s = o.next()), e;
          }
          if (N(s)) {
            let e = [];
            do e.push(s), (s = o.next());
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
      var x = ((e) => (
        (e[(e.None = 0)] = 'None'),
        (e[(e.NotBeginString = 1)] = 'NotBeginString'),
        (e[(e.NotEndString = 2)] = 'NotEndString'),
        (e[(e.NotBeginPosition = 4)] = 'NotBeginPosition'),
        (e[(e.DebugCall = 8)] = 'DebugCall'),
        e
      ))(x || {});
      function T(e) {
        'function' == typeof e.dispose && e.dispose();
      }
      var L = class {
          constructor(e) {
            this.scopeName = e;
          }
          toKey() {
            return this.scopeName;
          }
        },
        E = class {
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
        I = class {
          constructor(e, t) {
            (this.repo = e),
              (this.initialScopeName = t),
              this.seenFullScopeRequests.add(this.initialScopeName),
              (this.Q = [new L(this.initialScopeName)]);
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
                let a = n.lookup(t);
                e instanceof L
                  ? M({ baseGrammar: a, selfGrammar: i }, r)
                  : O(e.ruleName, { baseGrammar: a, selfGrammar: i, repository: i.repository }, r);
                let o = n.injections(e.scopeName);
                if (o) for (let e of o) r.add(new L(e));
              })(n, this.initialScopeName, this.repo, t);
            for (let e of t.references)
              if (e instanceof L) {
                if (this.seenFullScopeRequests.has(e.scopeName)) continue;
                this.seenFullScopeRequests.add(e.scopeName), this.Q.push(e);
              } else {
                if (this.seenFullScopeRequests.has(e.scopeName) || this.seenPartialScopeRequests.has(e.toKey()))
                  continue;
                this.seenPartialScopeRequests.add(e.toKey()), this.Q.push(e);
              }
          }
        };
      function O(e, t, n) {
        t.repository && t.repository[e] && B([t.repository[e]], t, n);
      }
      function M(e, t) {
        e.selfGrammar.patterns &&
          Array.isArray(e.selfGrammar.patterns) &&
          B(e.selfGrammar.patterns, { ...e, repository: e.selfGrammar.repository }, t),
          e.selfGrammar.injections &&
            B(Object.values(e.selfGrammar.injections), { ...e, repository: e.selfGrammar.repository }, t);
      }
      function B(e, t, n) {
        for (let r of e) {
          if (n.visitedRule.has(r)) continue;
          n.visitedRule.add(r);
          let e = r.repository ? l({}, t.repository, r.repository) : t.repository;
          Array.isArray(r.patterns) && B(r.patterns, { ...t, repository: e }, n);
          let i = r.include;
          if (!i) continue;
          let a = F(i);
          switch (a.kind) {
            case 0:
              M({ ...t, selfGrammar: t.baseGrammar }, n);
              break;
            case 1:
              M(t, n);
              break;
            case 2:
              O(a.ruleName, { ...t, repository: e }, n);
              break;
            case 3:
            case 4:
              let o =
                a.scopeName === t.selfGrammar.scopeName
                  ? t.selfGrammar
                  : a.scopeName === t.baseGrammar.scopeName
                    ? t.baseGrammar
                    : void 0;
              if (o) {
                let r = { baseGrammar: t.baseGrammar, selfGrammar: o, repository: e };
                4 === a.kind ? O(a.ruleName, r, n) : M(r, n);
              } else 4 === a.kind ? n.add(new E(a.scopeName, a.ruleName)) : n.add(new L(a.scopeName));
          }
        }
      }
      var D = class {
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
        $ = class {
          constructor(e, t) {
            (this.scopeName = e), (this.ruleName = t);
          }
          kind = 4;
        };
      function F(e) {
        if ('$base' === e) return new D();
        if ('$self' === e) return new U();
        let t = e.indexOf('#');
        return -1 === t ? new j(e) : 0 === t ? new G(e.substring(1)) : new $(e.substring(0, t), e.substring(t + 1));
      }
      var H = /\\(\d+)/,
        W = /\\(\d+)/g;
      Symbol('RuleId');
      var q = class {
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
              (this._nameIsCapturing = h.hasCaptures(this._name)),
              (this._contentName = r || null),
              (this._contentNameIsCapturing = h.hasCaptures(this._contentName));
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
              ? h.replaceCaptures(this._name, e, t)
              : this._name;
          }
          getContentName(e, t) {
            return this._contentNameIsCapturing && null !== this._contentName
              ? h.replaceCaptures(this._contentName, e, t)
              : this._contentName;
          }
        },
        z = class extends q {
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
        V = class extends q {
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
        K = class extends q {
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
        Y = class extends q {
          _begin;
          beginCaptures;
          _end;
          endHasBackReferences;
          endCaptures;
          applyEndPatternLast;
          hasMissingPatterns;
          patterns;
          _cachedCompiledPatterns;
          constructor(e, t, n, r, i, a, o, s, l, u) {
            super(e, t, n, r),
              (this._begin = new Q(i, this.id)),
              (this.beginCaptures = a),
              (this._end = new Q(o || '￿', -1)),
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
        X = class extends q {
          _begin;
          beginCaptures;
          whileCaptures;
          _while;
          whileHasBackReferences;
          hasMissingPatterns;
          patterns;
          _cachedCompiledPatterns;
          _cachedCompiledWhilePatterns;
          constructor(e, t, n, r, i, a, o, s, l) {
            super(e, t, n, r),
              (this._begin = new Q(i, this.id)),
              (this.beginCaptures = a),
              (this.whileCaptures = s),
              (this._while = new Q(o, -2)),
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
            return e.registerRule((e) => new z(t, e, n, r, i));
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
                      new K(t.$vscodeTextmateLocation, t.id, t.name, t.contentName, e._compilePatterns(i, n, r))
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
                    : new Y(
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
              let a = 0;
              for (let e in t) {
                if ('$vscodeTextmateLocation' === e) continue;
                let t = parseInt(e, 10);
                t > a && (a = t);
              }
              for (let e = 0; e <= a; e++) i[e] = null;
              for (let a in t) {
                if ('$vscodeTextmateLocation' === a) continue;
                let o = parseInt(a, 10),
                  s = 0;
                t[a].patterns && (s = e.getCompiledRuleId(t[a], n, r)),
                  (i[o] = e.createCaptureRule(n, t[a].$vscodeTextmateLocation, t[a].name, t[a].contentName, s));
              }
            }
            return i;
          }
          static _compilePatterns(t, n, r) {
            let i = [];
            if (t)
              for (let a = 0, o = t.length; a < o; a++) {
                let o = t[a],
                  s = -1;
                if (o.include) {
                  let t = F(o.include);
                  switch (t.kind) {
                    case 0:
                    case 1:
                      s = e.getCompiledRuleId(r[o.include], n, r);
                      break;
                    case 2:
                      let i = r[t.ruleName];
                      i && (s = e.getCompiledRuleId(i, n, r));
                      break;
                    case 3:
                    case 4:
                      let a = t.scopeName,
                        l = 4 === t.kind ? t.ruleName : null,
                        u = n.getExternalGrammar(a, r);
                      if (u)
                        if (l) {
                          let t = u.repository[l];
                          t && (s = e.getCompiledRuleId(t, n, u.repository));
                        } else s = e.getCompiledRuleId(u.repository.$self, n, u.repository);
                  }
                } else s = e.getCompiledRuleId(o, n, r);
                if (-1 !== s) {
                  let e = n.getRule(s),
                    t = !1;
                  if (
                    ((e instanceof K || e instanceof Y || e instanceof X) &&
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
              for (let a = 0; a < t; a++)
                if ('\\' === e.charAt(a) && a + 1 < t) {
                  let t = e.charAt(a + 1);
                  'z' === t
                    ? (r.push(e.substring(n, a)), r.push('$(?!\\n)(?<!\\n)'), (n = a + 2))
                    : ('A' === t || 'G' === t) && (i = !0),
                    a++;
                }
              (this.hasAnchor = i),
                0 === n ? (this.source = e) : (r.push(e.substring(n, t)), (this.source = r.join('')));
            } else (this.hasAnchor = !1), (this.source = e);
            this.hasAnchor ? (this._anchorCache = this._buildAnchorCache()) : (this._anchorCache = null),
              (this.ruleId = t),
              'string' == typeof this.source
                ? (this.hasBackReferences = H.test(this.source))
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
            return (W.lastIndex = 0), this.source.replace(W, (e, t) => m(n[parseInt(t, 10)] || ''));
          }
          _buildAnchorCache() {
            let e, t, n, r;
            if ('string' != typeof this.source)
              throw Error('This method should only be called if the source is a string');
            let i = [],
              a = [],
              o = [],
              s = [];
            for (e = 0, t = this.source.length; e < t; e++)
              (n = this.source.charAt(e)),
                (i[e] = n),
                (a[e] = n),
                (o[e] = n),
                (s[e] = n),
                '\\' === n &&
                  e + 1 < t &&
                  ('A' === (r = this.source.charAt(e + 1))
                    ? ((i[e + 1] = '￿'), (a[e + 1] = '￿'), (o[e + 1] = 'A'), (s[e + 1] = 'A'))
                    : 'G' === r
                      ? ((i[e + 1] = '￿'), (a[e + 1] = 'G'), (o[e + 1] = '￿'), (s[e + 1] = 'G'))
                      : ((i[e + 1] = r), (a[e + 1] = r), (o[e + 1] = r), (s[e + 1] = r)),
                  e++);
            return { A0_G0: i.join(''), A0_G1: a.join(''), A1_G0: o.join(''), A1_G1: s.join('') };
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
      function ea(e, t, n, r, i, a, o, s) {
        let l = t.content.length,
          u = !1,
          h = -1;
        if (o) {
          let o = (function (e, t, n, r, i, a) {
            let o = i.beginRuleCapturedEOL ? 0 : -1,
              s = [];
            for (let t = i; t; t = t.pop()) {
              let n = t.getRule(e);
              n instanceof X && s.push({ rule: n, stack: t });
            }
            for (let p = s.pop(); p; p = s.pop()) {
              var l, u, h, c, d;
              let { ruleScanner: s, findOptions: m } =
                  ((l = p.rule),
                  (u = e),
                  (h = p.stack.endRule),
                  (c = n),
                  (d = r === o),
                  { ruleScanner: l.compileWhileAG(u, h, c, d), findOptions: 0 }),
                f = s.findNextMatchSync(t, r, m);
              if (f) {
                if (-2 !== f.ruleId) {
                  i = p.stack.pop();
                  break;
                }
                f.captureIndices &&
                  f.captureIndices.length &&
                  (a.produce(p.stack, f.captureIndices[0].start),
                  es(e, t, n, p.stack, a, p.rule.whileCaptures, f.captureIndices),
                  a.produce(p.stack, f.captureIndices[0].end),
                  (o = f.captureIndices[0].end),
                  f.captureIndices[0].end > r && ((r = f.captureIndices[0].end), (n = !1)));
              } else {
                i = p.stack.pop();
                break;
              }
            }
            return { stack: i, linePos: r, anchorPosition: o, isFirstLine: n };
          })(e, t, n, r, i, a);
          (i = o.stack), (r = o.linePos), (n = o.isFirstLine), (h = o.anchorPosition);
        }
        let c = Date.now();
        for (; !u; ) {
          if (0 !== s && Date.now() - c > s) return new ei(i, !0);
          !(function () {
            let o = (function (e, t, n, r, i, a) {
              let o = (function (e, t, n, r, i, a) {
                  let { ruleScanner: o, findOptions: s } = eo(i.getRule(e), e, i.endRule, n, r === a),
                    l = o.findNextMatchSync(t, r, s);
                  return l ? { captureIndices: l.captureIndices, matchedRuleId: l.ruleId } : null;
                })(e, t, n, r, i, a),
                s = e.getInjections();
              if (0 === s.length) return o;
              let l = (function (e, t, n, r, i, a, o) {
                let s,
                  l = Number.MAX_VALUE,
                  u = null,
                  h = 0,
                  c = a.contentNameScopesList.getScopeNames();
                for (let a = 0, d = e.length; a < d; a++) {
                  let d = e[a];
                  if (!d.matcher(c)) continue;
                  let { ruleScanner: p, findOptions: m } = eo(t.getRule(d.ruleId), t, null, r, i === o),
                    f = p.findNextMatchSync(n, i, m);
                  if (!f) continue;
                  let g = f.captureIndices[0].start;
                  if (!(g >= l) && ((l = g), (u = f.captureIndices), (s = f.ruleId), (h = d.priority), l === i)) break;
                }
                return u ? { priorityMatch: -1 === h, captureIndices: u, matchedRuleId: s } : null;
              })(s, e, t, n, r, i, a);
              if (!l) return o;
              if (!o) return l;
              let u = o.captureIndices[0].start,
                h = l.captureIndices[0].start;
              return h < u || (l.priorityMatch && h === u) ? l : o;
            })(e, t, n, r, i, h);
            if (!o) {
              a.produce(i, l), (u = !0);
              return;
            }
            let s = o.captureIndices,
              c = o.matchedRuleId,
              d = !!s && s.length > 0 && s[0].end > r;
            if (-1 === c) {
              let o = i.getRule(e);
              a.produce(i, s[0].start),
                (i = i.withContentNameScopesList(i.nameScopesList)),
                es(e, t, n, i, a, o.endCaptures, s),
                a.produce(i, s[0].end);
              let c = i;
              if (((i = i.parent), (h = c.getAnchorPos()), !d && c.getEnterPos() === r)) {
                (i = c), a.produce(i, l), (u = !0);
                return;
              }
            } else {
              let o = e.getRule(c);
              a.produce(i, s[0].start);
              let p = i,
                m = o.getName(t.content, s),
                f = i.contentNameScopesList.pushAttributed(m, e);
              if (((i = i.push(c, r, h, s[0].end === l, null, f, f)), o instanceof Y)) {
                es(e, t, n, i, a, o.beginCaptures, s), a.produce(i, s[0].end), (h = s[0].end);
                let r = o.getContentName(t.content, s),
                  c = f.pushAttributed(r, e);
                if (
                  ((i = i.withContentNameScopesList(c)),
                  o.endHasBackReferences && (i = i.withEndRule(o.getEndWithResolvedBackReferences(t.content, s))),
                  !d && p.hasSameRuleAs(i))
                ) {
                  (i = i.pop()), a.produce(i, l), (u = !0);
                  return;
                }
              } else if (o instanceof X) {
                es(e, t, n, i, a, o.beginCaptures, s), a.produce(i, s[0].end), (h = s[0].end);
                let r = o.getContentName(t.content, s),
                  c = f.pushAttributed(r, e);
                if (
                  ((i = i.withContentNameScopesList(c)),
                  o.whileHasBackReferences && (i = i.withEndRule(o.getWhileWithResolvedBackReferences(t.content, s))),
                  !d && p.hasSameRuleAs(i))
                ) {
                  (i = i.pop()), a.produce(i, l), (u = !0);
                  return;
                }
              } else if ((es(e, t, n, i, a, o.captures, s), a.produce(i, s[0].end), (i = i.pop()), !d)) {
                (i = i.safePop()), a.produce(i, l), (u = !0);
                return;
              }
            }
            s[0].end > r && ((r = s[0].end), (n = !1));
          })();
        }
        return new ei(i, !1);
      }
      function eo(e, t, n, r, i) {
        return { ruleScanner: e.compileAG(t, n, r, i), findOptions: 0 };
      }
      function es(e, t, n, r, i, a, o) {
        if (0 === a.length) return;
        let s = t.content,
          l = Math.min(a.length, o.length),
          u = [],
          h = o[0].end;
        for (let t = 0; t < l; t++) {
          let l = a[t];
          if (null === l) continue;
          let c = o[t];
          if (0 === c.length) continue;
          if (c.start > h) break;
          for (; u.length > 0 && u[u.length - 1].endPos <= c.start; )
            i.produceFromScopes(u[u.length - 1].scopes, u[u.length - 1].endPos), u.pop();
          if (
            (u.length > 0 ? i.produceFromScopes(u[u.length - 1].scopes, c.start) : i.produce(r, c.start),
            l.retokenizeCapturedWithRuleId)
          ) {
            let t = l.getName(s, o),
              a = r.contentNameScopesList.pushAttributed(t, e),
              u = l.getContentName(s, o),
              h = a.pushAttributed(u, e),
              d = r.push(l.retokenizeCapturedWithRuleId, c.start, -1, !1, null, a, h),
              p = e.createOnigString(s.substring(0, c.end));
            ea(e, p, n && 0 === c.start, c.start, d, i, !1, 0), T(p);
            continue;
          }
          let d = l.getName(s, o);
          if (null !== d) {
            let t = (u.length > 0 ? u[u.length - 1].scopes : r.contentNameScopesList).pushAttributed(d, e);
            u.push(new el(t, c.end));
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
        let a = P(t, eh),
          o = J.getCompiledRuleId(n, r, i.repository);
        for (let n of a) e.push({ debugSelector: t, matcher: n.matcher, ruleId: o, grammar: i, priority: n.priority });
      }
      function eh(e, t) {
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
      var ec = class {
        constructor(e, t, n, r, i, a, o, s) {
          if (
            ((this._rootScopeName = e),
            (this.balancedBracketSelectors = a),
            (this._onigLib = s),
            (this._basicScopeAttributesProvider = new en(n, r)),
            (this._rootId = -1),
            (this._lastRuleId = 0),
            (this._ruleId2desc = [null]),
            (this._includedGrammars = {}),
            (this._grammarRepository = o),
            (this._grammar = ed(t, null)),
            (this._injections = null),
            (this._tokenTypeMatchers = []),
            i)
          )
            for (let e of Object.keys(i))
              for (let t of P(e, eh)) this._tokenTypeMatchers.push({ matcher: t.matcher, type: i[e] });
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
            if (n) return (this._includedGrammars[e] = ed(n, t && t.$base)), this._includedGrammars[e];
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
              a = A.set(0, n.languageId, n.tokenType, null, r.fontStyle, r.foregroundId, r.backgroundId),
              o = this.getRule(this._rootId).getName(null, null);
            (e = o ? ep.createRootAndLookUpScopeName(o, a, this) : ep.createRoot('unknown', a)),
              (t = new em(null, this._rootId, -1, -1, !1, null, e, e));
          }
          e += '\n';
          let a = this.createOnigString(e),
            o = a.content.length,
            s = new eg(n, e, this._tokenTypeMatchers, this.balancedBracketSelectors),
            l = ea(this, a, i, 0, t, s, !0, r);
          return T(a), { lineLength: o, lineTokens: s, ruleStack: l.stack, stoppedEarly: l.stoppedEarly };
        }
      };
      function ed(e, t) {
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
      var ep = class e {
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
              a = new y(null, t),
              o = r.themeProvider.themeMatch(a),
              s = e.mergeAttributes(n, i, o);
            return new e(null, a, s);
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
              a = 0;
            return (
              null !== n && ((r = n.fontStyle), (i = n.foregroundId), (a = n.backgroundId)),
              A.set(e, t.languageId, t.tokenType, null, r, i, a)
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
              a = t.scopePath.push(n),
              o = r.themeProvider.themeMatch(a),
              s = e.mergeAttributes(t.tokenAttributes, i, o);
            return new e(t, a, s);
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
          constructor(e, t, n, r, i, a, o, s) {
            (this.parent = e),
              (this.ruleId = t),
              (this.beginRuleCapturedEOL = i),
              (this.endRule = a),
              (this.nameScopesList = o),
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
              e === t || (!!this._structuralEquals(e, t) && ep.equals(e.contentNameScopesList, t.contentNameScopesList))
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
          push(t, n, r, i, a, o, s) {
            return new e(this, t, n, r, i, a, o, s);
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
            let r = ep.fromExtension(t?.nameScopesList ?? null, n.nameScopesList);
            return new e(
              t,
              n.ruleId,
              n.enterPos ?? -1,
              n.anchorPos ?? -1,
              n.beginRuleCapturedEOL,
              n.endRule,
              r,
              ep.fromExtension(r, n.contentNameScopesList)
            );
          }
        },
        ef = class {
          balancedBracketScopes;
          unbalancedBracketScopes;
          allowAny = !1;
          constructor(e, t) {
            (this.balancedBracketScopes = e.flatMap((e) =>
              '*' === e ? ((this.allowAny = !0), []) : P(e, eh).map((e) => e.matcher)
            )),
              (this.unbalancedBracketScopes = t.flatMap((e) => P(e, eh).map((e) => e.matcher)));
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
              let a = this._rawGrammars.get(e);
              if (!a) return null;
              this._grammars.set(e, new ec(e, a, t, n, r, i, this, this._onigLib));
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
            let a = new I(this._syncRegistry, e);
            for (; a.Q.length > 0; ) a.Q.map((e) => this._loadSingleGrammar(e.scopeName)), a.processQueue();
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
      class ek {
        constructor(e, t, n) {
          (this.normal = t), (this.property = e), n && (this.space = n);
        }
      }
      function ew(e, t) {
        let n = {},
          r = {};
        for (let t of e) Object.assign(n, t.property), Object.assign(r, t.normal);
        return new ek(n, r, t);
      }
      function eS(e) {
        return e.toLowerCase();
      }
      (ek.prototype.normal = {}), (ek.prototype.property = {}), (ek.prototype.space = void 0);
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
        eP = eI(),
        eN = eI(),
        ex = eI(),
        eT = eI(),
        eL = eI(),
        eE = eI(),
        eR = eI();
      function eI() {
        return 2 ** ++eA;
      }
      let eO = Object.keys(a);
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
            for (; ++i < eO.length; ) {
              let e = eO[i];
              !(function (e, t, n) {
                n && (e[t] = n);
              })(this, eO[i], (n & a[e]) === a[e]);
            }
        }
      }
      function eB(e) {
        let t = {},
          n = {};
        for (let [r, i] of Object.entries(e.properties)) {
          let a = new eM(r, e.transform(e.attributes || {}, r), i, e.space);
          e.mustUseProperty && e.mustUseProperty.includes(r) && (a.mustUseProperty = !0),
            (t[r] = a),
            (n[eS(r)] = r),
            (n[eS(a.attribute)] = r);
        }
        return new ek(t, n, e.space);
      }
      eM.prototype.defined = !0;
      let eD = eB({
        properties: {
          ariaActiveDescendant: null,
          ariaAtomic: eN,
          ariaAutoComplete: null,
          ariaBusy: eN,
          ariaChecked: eN,
          ariaColCount: eT,
          ariaColIndex: eT,
          ariaColSpan: eT,
          ariaControls: eL,
          ariaCurrent: null,
          ariaDescribedBy: eL,
          ariaDetails: null,
          ariaDisabled: eN,
          ariaDropEffect: eL,
          ariaErrorMessage: null,
          ariaExpanded: eN,
          ariaFlowTo: eL,
          ariaGrabbed: eN,
          ariaHasPopup: null,
          ariaHidden: eN,
          ariaInvalid: null,
          ariaKeyShortcuts: null,
          ariaLabel: null,
          ariaLabelledBy: eL,
          ariaLevel: eT,
          ariaLive: null,
          ariaModal: eN,
          ariaMultiLine: eN,
          ariaMultiSelectable: eN,
          ariaOrientation: null,
          ariaOwns: eL,
          ariaPlaceholder: null,
          ariaPosInSet: eT,
          ariaPressed: eN,
          ariaReadOnly: eN,
          ariaRelevant: null,
          ariaRequired: eN,
          ariaRoleDescription: eL,
          ariaRowCount: eT,
          ariaRowIndex: eT,
          ariaRowSpan: eT,
          ariaSelected: eN,
          ariaSetSize: eT,
          ariaSort: null,
          ariaValueMax: eT,
          ariaValueMin: eT,
          ariaValueNow: eT,
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
      let ej = eB({
          attributes: { acceptcharset: 'accept-charset', classname: 'class', htmlfor: 'for', httpequiv: 'http-equiv' },
          mustUseProperty: ['checked', 'multiple', 'muted', 'selected'],
          properties: {
            abbr: null,
            accept: eE,
            acceptCharset: eL,
            accessKey: eL,
            action: null,
            allow: null,
            allowFullScreen: eP,
            allowPaymentRequest: eP,
            allowUserMedia: eP,
            alt: null,
            as: null,
            async: eP,
            autoCapitalize: null,
            autoComplete: eL,
            autoFocus: eP,
            autoPlay: eP,
            blocking: eL,
            capture: null,
            charSet: null,
            checked: eP,
            cite: null,
            className: eL,
            cols: eT,
            colSpan: null,
            content: null,
            contentEditable: eN,
            controls: eP,
            controlsList: eL,
            coords: eT | eE,
            crossOrigin: null,
            data: null,
            dateTime: null,
            decoding: null,
            default: eP,
            defer: eP,
            dir: null,
            dirName: null,
            disabled: eP,
            download: ex,
            draggable: eN,
            encType: null,
            enterKeyHint: null,
            fetchPriority: null,
            form: null,
            formAction: null,
            formEncType: null,
            formMethod: null,
            formNoValidate: eP,
            formTarget: null,
            headers: eL,
            height: eT,
            hidden: ex,
            high: eT,
            href: null,
            hrefLang: null,
            htmlFor: eL,
            httpEquiv: eL,
            id: null,
            imageSizes: null,
            imageSrcSet: null,
            inert: eP,
            inputMode: null,
            integrity: null,
            is: null,
            isMap: eP,
            itemId: null,
            itemProp: eL,
            itemRef: eL,
            itemScope: eP,
            itemType: eL,
            kind: null,
            label: null,
            lang: null,
            language: null,
            list: null,
            loading: null,
            loop: eP,
            low: eT,
            manifest: null,
            max: null,
            maxLength: eT,
            media: null,
            method: null,
            min: null,
            minLength: eT,
            multiple: eP,
            muted: eP,
            name: null,
            nonce: null,
            noModule: eP,
            noValidate: eP,
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
            open: eP,
            optimum: eT,
            pattern: null,
            ping: eL,
            placeholder: null,
            playsInline: eP,
            popover: null,
            popoverTarget: null,
            popoverTargetAction: null,
            poster: null,
            preload: null,
            readOnly: eP,
            referrerPolicy: null,
            rel: eL,
            required: eP,
            reversed: eP,
            rows: eT,
            rowSpan: eT,
            sandbox: eL,
            scope: null,
            scoped: eP,
            seamless: eP,
            selected: eP,
            shadowRootClonable: eP,
            shadowRootDelegatesFocus: eP,
            shadowRootMode: null,
            shape: null,
            size: eT,
            sizes: null,
            slot: null,
            span: eT,
            spellCheck: eN,
            src: null,
            srcDoc: null,
            srcLang: null,
            srcSet: null,
            start: eT,
            step: null,
            style: null,
            tabIndex: eT,
            target: null,
            title: null,
            translate: null,
            type: null,
            typeMustMatch: eP,
            useMap: null,
            value: eN,
            width: eT,
            wrap: null,
            writingSuggestions: null,
            align: null,
            aLink: null,
            archive: eL,
            axis: null,
            background: null,
            bgColor: null,
            border: eT,
            borderColor: null,
            bottomMargin: eT,
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
            compact: eP,
            declare: eP,
            event: null,
            face: null,
            frame: null,
            frameBorder: null,
            hSpace: eT,
            leftMargin: eT,
            link: null,
            longDesc: null,
            lowSrc: null,
            marginHeight: eT,
            marginWidth: eT,
            noResize: eP,
            noHref: eP,
            noShade: eP,
            noWrap: eP,
            object: null,
            profile: null,
            prompt: null,
            rev: null,
            rightMargin: eT,
            rules: null,
            scheme: null,
            scrolling: eN,
            standby: null,
            summary: null,
            text: null,
            topMargin: eT,
            valueType: null,
            version: null,
            vAlign: null,
            vLink: null,
            vSpace: eT,
            allowTransparency: null,
            autoCorrect: null,
            autoSave: null,
            disablePictureInPicture: eP,
            disableRemotePlayback: eP,
            prefix: null,
            property: null,
            results: eT,
            security: null,
            unselectable: null,
          },
          space: 'html',
          transform: eG,
        }),
        e$ = eB({
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
            accentHeight: eT,
            accumulate: null,
            additive: null,
            alignmentBaseline: null,
            alphabetic: eT,
            amplitude: eT,
            arabicForm: null,
            ascent: eT,
            attributeName: null,
            attributeType: null,
            azimuth: eT,
            bandwidth: null,
            baselineShift: null,
            baseFrequency: null,
            baseProfile: null,
            bbox: null,
            begin: null,
            bias: eT,
            by: null,
            calcMode: null,
            capHeight: eT,
            className: eL,
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
            descent: eT,
            diffuseConstant: eT,
            direction: null,
            display: null,
            dur: null,
            divisor: eT,
            dominantBaseline: null,
            download: eP,
            dx: null,
            dy: null,
            edgeMode: null,
            editable: null,
            elevation: eT,
            enableBackground: null,
            end: null,
            event: null,
            exponent: eT,
            externalResourcesRequired: null,
            fill: null,
            fillOpacity: eT,
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
            g1: eE,
            g2: eE,
            glyphName: eE,
            glyphOrientationHorizontal: null,
            glyphOrientationVertical: null,
            glyphRef: null,
            gradientTransform: null,
            gradientUnits: null,
            handler: null,
            hanging: eT,
            hatchContentUnits: null,
            hatchUnits: null,
            height: null,
            href: null,
            hrefLang: null,
            horizAdvX: eT,
            horizOriginX: eT,
            horizOriginY: eT,
            id: null,
            ideographic: eT,
            imageRendering: null,
            initialVisibility: null,
            in: null,
            in2: null,
            intercept: eT,
            k: eT,
            k1: eT,
            k2: eT,
            k3: eT,
            k4: eT,
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
            limitingConeAngle: eT,
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
            mediaSize: eT,
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
            overlinePosition: eT,
            overlineThickness: eT,
            paintOrder: null,
            panose1: null,
            path: null,
            pathLength: eT,
            patternContentUnits: null,
            patternTransform: null,
            patternUnits: null,
            phase: null,
            ping: eL,
            pitch: null,
            playbackOrder: null,
            pointerEvents: null,
            points: null,
            pointsAtX: eT,
            pointsAtY: eT,
            pointsAtZ: eT,
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
            specularConstant: eT,
            specularExponent: eT,
            spreadMethod: null,
            spacing: null,
            startOffset: null,
            stdDeviation: null,
            stemh: null,
            stemv: null,
            stitchTiles: null,
            stopColor: null,
            stopOpacity: null,
            strikethroughPosition: eT,
            strikethroughThickness: eT,
            string: null,
            stroke: null,
            strokeDashArray: eR,
            strokeDashOffset: null,
            strokeLineCap: null,
            strokeLineJoin: null,
            strokeMiterLimit: eT,
            strokeOpacity: eT,
            strokeWidth: null,
            style: null,
            surfaceScale: eT,
            syncBehavior: null,
            syncBehaviorDefault: null,
            syncMaster: null,
            syncTolerance: null,
            syncToleranceDefault: null,
            systemLanguage: eR,
            tabIndex: eT,
            tableValues: null,
            target: null,
            targetX: eT,
            targetY: eT,
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
            underlinePosition: eT,
            underlineThickness: eT,
            unicode: null,
            unicodeBidi: null,
            unicodeRange: null,
            unitsPerEm: eT,
            values: null,
            vAlphabetic: eT,
            vMathematical: eT,
            vectorEffect: null,
            vHanging: eT,
            vIdeographic: eT,
            version: null,
            vertAdvY: eT,
            vertOriginX: eT,
            vertOriginY: eT,
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
            xHeight: eT,
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
        eF = eB({
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
        eH = eB({
          attributes: { xmlnsxlink: 'xmlns:xlink' },
          properties: { xmlnsXLink: null, xmlns: null },
          space: 'xmlns',
          transform: eG,
        }),
        eW = eB({
          properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
          space: 'xml',
          transform: (e, t) => 'xml:' + t.slice(3).toLowerCase(),
        }),
        eq = ew([eD, ej, eF, eH, eW], 'html'),
        ez = ew([eD, e$, eF, eH, eW], 'svg'),
        eV = {}.hasOwnProperty,
        eK = /["&'<>`]/g,
        eY = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
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
        e8 = {
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
        e2 = ['cent', 'copy', 'divide', 'gt', 'lt', 'not', 'para', 'times'],
        e6 = {}.hasOwnProperty,
        e5 = {};
      for (r in e8) e6.call(e8, r) && (e5[e8[r]] = r);
      let e4 = /[^\dA-Za-z]/;
      function e3(e, t, n) {
        let r,
          i = (function (e, t, n) {
            let r = '&#x' + e.toString(16).toUpperCase();
            return n && t && !eZ.test(String.fromCharCode(t)) ? r : r + ';';
          })(e, t, n.omitOptionalSemicolons);
        if (
          ((n.useNamedReferences || n.useShortestReferences) &&
            (r = (function (e, t, n, r) {
              let i = String.fromCharCode(e);
              if (e6.call(e5, i)) {
                let e = e5[i],
                  a = '&' + e;
                return n &&
                  e1.includes(e) &&
                  !e2.includes(e) &&
                  (!r || (t && 61 !== t && e4.test(String.fromCharCode(t))))
                  ? a
                  : a + ';';
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
          a = Object.assign({ format: e3 }, t);
        if (
          ((i = i.replace(
            a.subset
              ? ((r = a.subset),
                (n = eQ.get(r)) ||
                  ((n = (function (e) {
                    let t = [],
                      n = -1;
                    for (; ++n < e.length; ) t.push(e[n].replace(eJ, '\\$&'));
                    return RegExp('(?:' + t.join('|') + ')', 'g');
                  })(r)),
                  eQ.set(r, n)),
                n)
              : eK,
            o
          )),
          a.subset || a.escapeOnly)
        )
          return i;
        return i
          .replace(eY, function (e, t, n) {
            return a.format((e.charCodeAt(0) - 55296) * 1024 + e.charCodeAt(1) - 56320 + 65536, n.charCodeAt(t + 2), a);
          })
          .replace(eX, o);
        function o(e, t, n) {
          return a.format(e.charCodeAt(0), n.charCodeAt(t + 1), a);
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
        ta = /^data[-\w.:]+$/i;
      function to(e) {
        return '-' + e.toLowerCase();
      }
      function ts(e) {
        return e.charAt(1).toUpperCase();
      }
      let tl = /[ \t\n\f\r]/g;
      function tu(e) {
        return 'object' == typeof e ? 'text' === e.type && th(e.value) : th(e);
      }
      function th(e) {
        return '' === e.replace(tl, '');
      }
      let tc = tm(1),
        td = tm(-1),
        tp = [];
      function tm(e) {
        return function (t, n, r) {
          let i = t ? t.children : tp,
            a = (n || 0) + e,
            o = i[a];
          if (!r) for (; o && tu(o); ) (a += e), (o = i[a]);
          return o;
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
          let r = tc(n, t);
          return !r || 'comment' !== r.type;
        },
        caption: tb,
        colgroup: tb,
        dd: function (e, t, n) {
          let r = tc(n, t);
          return !r || ('element' === r.type && ('dt' === r.tagName || 'dd' === r.tagName));
        },
        dt: function (e, t, n) {
          let r = tc(n, t);
          return !!(r && 'element' === r.type && ('dt' === r.tagName || 'dd' === r.tagName));
        },
        head: tb,
        html: function (e, t, n) {
          let r = tc(n, t);
          return !r || 'comment' !== r.type;
        },
        li: function (e, t, n) {
          let r = tc(n, t);
          return !r || ('element' === r.type && 'li' === r.tagName);
        },
        optgroup: function (e, t, n) {
          let r = tc(n, t);
          return !r || ('element' === r.type && 'optgroup' === r.tagName);
        },
        option: function (e, t, n) {
          let r = tc(n, t);
          return !r || ('element' === r.type && ('option' === r.tagName || 'optgroup' === r.tagName));
        },
        p: function (e, t, n) {
          let r = tc(n, t);
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
          let r = tc(n, t);
          return !r || ('element' === r.type && ('tbody' === r.tagName || 'tfoot' === r.tagName));
        },
        td: tv,
        tfoot: function (e, t, n) {
          return !tc(n, t);
        },
        th: tv,
        thead: function (e, t, n) {
          let r = tc(n, t);
          return !!(r && 'element' === r.type && ('tbody' === r.tagName || 'tfoot' === r.tagName));
        },
        tr: function (e, t, n) {
          let r = tc(n, t);
          return !r || ('element' === r.type && 'tr' === r.tagName);
        },
      });
      function tb(e, t, n) {
        let r = tc(n, t, !0);
        return !r || ('comment' !== r.type && !('text' === r.type && tu(r.value.charAt(0))));
      }
      function t_(e, t, n) {
        let r = tc(n, t);
        return !r || ('element' === r.type && ('rp' === r.tagName || 'rt' === r.tagName));
      }
      function tv(e, t, n) {
        let r = tc(n, t);
        return !r || ('element' === r.type && ('td' === r.tagName || 'th' === r.tagName));
      }
      let tk = tg({
          body: function (e) {
            let t = tc(e, -1, !0);
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
            let r = td(n, t),
              i = tc(e, -1, !0);
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
            let t = tc(e, -1);
            return !t || 'comment' !== t.type;
          },
          tbody: function (e, t, n) {
            let r = td(n, t),
              i = tc(e, -1);
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
        tw = {
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
        tS = ['<', '&'];
      function tC(e, t, n, r) {
        return n && 'element' === n.type && ('script' === n.tagName || 'style' === n.tagName)
          ? e.value
          : e9(e.value, Object.assign({}, r.settings.characterReferences, { subset: tS }));
      }
      let tA = (function (e, t) {
          let n = t || {};
          function r(t, ...n) {
            let i = r.invalid,
              a = r.handlers;
            if (t && eV.call(t, e)) {
              let n = String(t[e]);
              i = eV.call(a, n) ? a[n] : r.unknown;
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
                a = r.schema,
                o = 'svg' !== a.space && r.settings.omitOptionalTags,
                s =
                  'svg' === a.space
                    ? r.settings.closeEmptyElements
                    : r.settings.voids.includes(e.tagName.toLowerCase()),
                l = [];
              'html' === a.space && 'svg' === e.tagName && (r.schema = ez);
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
                              let n = eS(t),
                                r = t,
                                i = eC;
                              if (n in e.normal) return e.property[e.normal[n]];
                              if (n.length > 4 && 'data' === n.slice(0, 4) && ta.test(t)) {
                                if ('-' === t.charAt(4)) {
                                  let e = t.slice(5).replace(ti, ts);
                                  r = 'data' + e.charAt(0).toUpperCase() + e.slice(1);
                                } else {
                                  let e = t.slice(4);
                                  if (!ti.test(e)) {
                                    let n = e.replace(tr, to);
                                    '-' !== n.charAt(0) && (n = '-' + n), (t = 'data' + n);
                                  }
                                }
                                i = eM;
                              }
                              return new i(r, t);
                            })(e.schema, t),
                            a = e.settings.allowParseErrors && 'html' === e.schema.space ? 0 : 1,
                            o = +!e.settings.allowDangerousCharacters,
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
                            Object.assign({}, e.settings.characterReferences, { subset: tw.name[a][o] })
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
                                    subset: tw.unquoted[a][o],
                                  })
                                )),
                              r !== n &&
                                (e.settings.quoteSmart && tn(n, s) > tn(n, e.alternative) && (s = e.alternative),
                                (r =
                                  s +
                                  e9(
                                    n,
                                    Object.assign({}, e.settings.characterReferences, {
                                      subset: ("'" === s ? tw.single : tw.double)[a][o],
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
                h = r.all('html' === a.space && 'template' === e.tagName ? e.content : e);
              return (
                (r.schema = a),
                h && (s = !1),
                (!u && o && tk(e, t, n)) ||
                  (l.push('<', e.tagName, u ? ' ' + u : ''),
                  s &&
                    ('svg' === a.space || r.settings.closeSelfClosing) &&
                    ((i = u.charAt(u.length - 1)),
                    (!r.settings.tightSelfClosing || '/' === i || (i && '"' !== i && "'" !== i)) && l.push(' '),
                    l.push('/')),
                  l.push('>')),
                l.push(h),
                s || (o && ty(e, t, n)) || l.push('</' + e.tagName + '>'),
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
        tP = {},
        tN = {},
        tx = [];
      function tT(e, t, n) {
        return tA(e, t, n, this);
      }
      function tL(e) {
        let t = [],
          n = (e && e.children) || tx,
          r = -1;
        for (; ++r < n.length; ) t[r] = this.one(n[r], r, e);
        return t.join('');
      }
      function tE(e, t) {
        let n = 'string' == typeof e ? {} : { ...e.colorReplacements },
          r = 'string' == typeof e ? e : e.name;
        for (let [e, i] of Object.entries(t?.colorReplacements || {}))
          'string' == typeof i ? (n[e] = i) : e === r && Object.assign(n, i);
        return n;
      }
      function tR(e, t) {
        return (e && t?.[e?.toLowerCase()]) || e;
      }
      async function tI(e) {
        return Promise.resolve('function' == typeof e ? e() : e).then((e) => e.default || e);
      }
      function tO(e) {
        return !e || ['plaintext', 'txt', 'text', 'plain'].includes(e);
      }
      function tM(e) {
        return 'ansi' === e || tO(e);
      }
      function tB(e) {
        return 'none' === e;
      }
      function tD(e, t) {
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
          let a = t ? n[e] + (n[e + 1] || '') : n[e];
          i.push([a, r]), (r += n[e].length), (r += n[e + 1]?.length || 0);
        }
        return i;
      }
      let tG = 'light-dark()';
      function tj(e) {
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
      function t$(e) {
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
      function tW(e) {
        return tF.get(e);
      }
      class tq {
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
          return new tq(Object.fromEntries((Array.isArray(t) ? t : [t]).map((e) => [e, e_])), e);
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
      let tz = [
        (function () {
          let e = new WeakMap();
          function t(t) {
            if (!e.has(t.meta)) {
              let n = function (e) {
                  if ('number' == typeof e) {
                    if (e < 0 || e > t.source.length)
                      throw new o(`Invalid decoration offset: ${e}. Code length: ${t.source.length}`);
                    return { ...r.indexToPos(e), offset: e };
                  }
                  {
                    let t = r.lines[e.line];
                    if (void 0 === t)
                      throw new o(`Invalid decoration position ${JSON.stringify(e)}. Lines length: ${r.lines.length}`);
                    if (e.character < 0 || e.character > t.length)
                      throw new o(
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
                    throw new o(`Invalid decoration range: ${JSON.stringify(n.start)} - ${JSON.stringify(n.end)}`);
                  for (let r = t + 1; r < e.length; r++) {
                    let t = e[r],
                      i = n.start.offset <= t.start.offset && t.start.offset < n.end.offset,
                      a = n.start.offset < t.end.offset && t.end.offset <= n.end.offset,
                      s = t.start.offset <= n.start.offset && n.start.offset < t.end.offset,
                      l = t.start.offset < n.end.offset && n.end.offset <= t.end.offset;
                    if (i || a || s || l) {
                      if ((i && a) || (s && l)) continue;
                      throw new o(`Decorations ${JSON.stringify(n.start)} and ${JSON.stringify(t.start)} intersect.`);
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
                throw new o(
                  `Number of lines in code element (${r.length}) does not match the number of lines in the source (${n.converter.lines.length}). Failed to apply decorations.`
                );
              function i(e, t, n, i) {
                let s = r[e],
                  l = '',
                  u = -1,
                  h = -1;
                if (
                  (0 === t && (u = 0),
                  0 === n && (h = 0),
                  n === Number.POSITIVE_INFINITY && (h = s.children.length),
                  -1 === u || -1 === h)
                )
                  for (let e = 0; e < s.children.length; e++)
                    (l += (function e(t) {
                      return 'text' === t.type ? t.value : 'element' === t.type ? t.children.map(e).join('') : '';
                    })(s.children[e])),
                      -1 === u && l.length === t && (u = e + 1),
                      -1 === h && l.length === n && (h = e + 1);
                if (-1 === u) throw new o(`Failed to find start index for decoration ${JSON.stringify(i.start)}`);
                if (-1 === h) throw new o(`Failed to find end index for decoration ${JSON.stringify(i.end)}`);
                let c = s.children.slice(u, h);
                if (i.alwaysWrap || c.length !== s.children.length)
                  if (i.alwaysWrap || 1 !== c.length || 'element' !== c[0].type) {
                    let e = { type: 'element', tagName: 'span', properties: {}, children: c };
                    a(e, i, 'wrapper'), s.children.splice(u, c.length, e);
                  } else a(c[0], i, 'token');
                else a(s, i, 'line');
              }
              function a(e, t, n) {
                let r = t.properties || {},
                  i = t.transform || ((e) => e);
                return (
                  (e.tagName = t.tagName || 'span'),
                  (e.properties = { ...e.properties, ...r, class: e.properties.class }),
                  t.properties?.class && tD(e, t.properties.class),
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
                      r[(t = i)] = a(r[t], e, 'line');
                    });
                  i(n.line, 0, n.character, e);
                }
              }
              s.forEach((e) => e());
            },
          };
        })(),
      ];
      function tV(e) {
        return [...(e.transformers || []), ...tz];
      }
      var tK = [
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
      function tX(e) {
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
      var tJ = {
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
      function tQ(e, t, n = {}) {
        let { lang: r = 'text', theme: i = e.getLoadedThemes()[0] } = n;
        if (tO(r) || tB(i)) return tU(t).map((e) => [{ content: e[0], offset: e[1] }]);
        let { theme: a, colorMap: s } = e.setTheme(i);
        if ('ansi' === r)
          return (function (e, t, n) {
            let r,
              i,
              a,
              o = tE(e, n),
              s = tU(t),
              l = (function (e = tJ) {
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
                            for (let n = 0; n < tK.length; n++) t.push(e[tK[n]]);
                            let r = [0, 95, 135, 175, 215, 255];
                            for (let e = 0; e < 6; e++)
                              for (let i = 0; i < 6; i++) for (let a = 0; a < 6; a++) t.push(n([r[e], r[i], r[a]]));
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
                  tK.map((t) => [t, e.colors?.[`terminal.ansi${t[0].toUpperCase()}${t.substring(1)}`]])
                )
              ),
              u =
                ((r = null),
                (i = null),
                (a = new Set()),
                {
                  parse(e) {
                    let t = [],
                      n = 0;
                    do {
                      let o = (function (e, t) {
                          let n = e.indexOf('\x1b', t);
                          if (-1 !== n && '[' === e[n + 1]) {
                            let t = e.indexOf('m', n);
                            if (-1 !== t)
                              return { sequence: e.substring(n + 2, t).split(';'), startPosition: n, position: t + 1 };
                          }
                          return { position: e.length };
                        })(e, n),
                        s = o.sequence ? e.substring(n, o.startPosition) : e.substring(n);
                      if (
                        (s.length > 0 && t.push({ value: s, foreground: r, background: i, decorations: new Set(a) }),
                        o.sequence)
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
                                t.push({ type: 'setForegroundColor', value: { type: 'named', name: tK[r - 30] } });
                              else if (38 === r) {
                                let n = tX(e);
                                n && t.push({ type: 'setForegroundColor', value: n });
                              } else if (39 === r) t.push({ type: 'resetForegroundColor' });
                              else if (r <= 47)
                                t.push({ type: 'setBackgroundColor', value: { type: 'named', name: tK[r - 40] } });
                              else if (48 === r) {
                                let n = tX(e);
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
                                            value: { type: 'named', name: tK[r - 90 + 8] },
                                          })
                                        : r >= 100 &&
                                          r <= 107 &&
                                          t.push({
                                            type: 'setBackgroundColor',
                                            value: { type: 'named', name: tK[r - 100 + 8] },
                                          });
                          }
                          return t;
                        })(o.sequence);
                        for (let t of e)
                          'resetAll' === t.type
                            ? ((r = null), (i = null), a.clear())
                            : 'resetForegroundColor' === t.type
                              ? (r = null)
                              : 'resetBackgroundColor' === t.type
                                ? (i = null)
                                : 'resetDecoration' === t.type && a.delete(t.value);
                        for (let t of e)
                          'setForegroundColor' === t.type
                            ? (r = t.value)
                            : 'setBackgroundColor' === t.type
                              ? (i = t.value)
                              : 'setDecoration' === t.type && a.add(t.value);
                      }
                      n = o.position;
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
                  (r = tR(r, o)),
                  (i = tR(i, o)),
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
                let a = v.None;
                return (
                  n.decorations.has('bold') && (a |= v.Bold),
                  n.decorations.has('italic') && (a |= v.Italic),
                  n.decorations.has('underline') && (a |= v.Underline),
                  n.decorations.has('strikethrough') && (a |= v.Strikethrough),
                  { content: n.value, offset: t[1], color: r, bgColor: i, fontStyle: a }
                );
              })
            );
          })(a, t, n);
        let l = e.getLanguage(r);
        if (n.grammarState) {
          if (n.grammarState.lang !== l.name)
            throw new o(
              `Grammar state language "${n.grammarState.lang}" does not match highlight language "${l.name}"`
            );
          if (!n.grammarState.themes.includes(a.name))
            throw new o(`Grammar state themes "${n.grammarState.themes}" do not contain highlight theme "${a.name}"`);
        }
        var u = t,
          h = l,
          c = a,
          d = s,
          p = n;
        let m = tZ(u, h, c, d, p),
          f = new tq(tZ(u, h, c, d, p).stateStack, h.name, c.name);
        return tH(m.tokens, f), m.tokens;
      }
      function tZ(e, t, n, r, i) {
        let a = tE(n, i),
          { tokenizeMaxLineLength: s = 0, tokenizeTimeLimit: l = 500 } = i,
          u = tU(e),
          h = i.grammarState
            ? ((function (e, t) {
                if (!(e instanceof tq)) throw new o('Invalid grammar state');
                return e.getInternalStack(t);
              })(i.grammarState, n.name) ?? e_)
            : null != i.grammarContextCode
              ? tZ(i.grammarContextCode, t, n, r, { ...i, grammarState: void 0, grammarContextCode: void 0 }).stateStack
              : e_,
          c = [],
          d = [];
        for (let e = 0, o = u.length; e < o; e++) {
          let o,
            p,
            [m, f] = u[e];
          if ('' === m) {
            (c = []), d.push([]);
            continue;
          }
          if (s > 0 && m.length >= s) {
            (c = []), d.push([{ content: m, offset: f, color: '', fontStyle: 0 }]);
            continue;
          }
          i.includeExplanation && ((o = t.tokenizeLine(m, h, l).tokens), (p = 0));
          let g = t.tokenizeLine2(m, h, l),
            y = g.tokens.length / 2;
          for (let e = 0; e < y; e++) {
            let t = g.tokens[2 * e],
              s = e + 1 < y ? g.tokens[2 * e + 2] : m.length;
            if (t === s) continue;
            let l = g.tokens[2 * e + 1],
              u = tR(r[A.getForeground(l)], a),
              h = A.getFontStyle(l),
              d = { content: m.substring(t, s), offset: f + t, color: u, fontStyle: h };
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
              d.explanation = [];
              let r = 0;
              for (; t + r < s; ) {
                let t = o[p],
                  n = m.substring(t.startIndex, t.endIndex);
                (r += n.length),
                  d.explanation.push({
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
                                  for (let { selectors: i, settings: a } of e)
                                    for (let e of i)
                                      if (
                                        (function (e, t, n) {
                                          if (!t0(e[e.length - 1], t)) return !1;
                                          let r = e.length - 2,
                                            i = n.length - 1;
                                          for (; r >= 0 && i >= 0; ) t0(e[r], n[i]) && (r -= 1), (i -= 1);
                                          return -1 === r;
                                        })(e, t, n)
                                      ) {
                                        r.push(a);
                                        break;
                                      }
                                  return r;
                                })(e, i, t.slice(0, r)),
                              };
                            }
                            return n;
                          })(e, t.scopes),
                  }),
                  (p += 1);
              }
            }
            c.push(d);
          }
          d.push(c), (c = []), (h = g.ruleStack);
        }
        return { tokens: d, stateStack: h };
      }
      function t0(e, t) {
        return e === t || (t.substring(0, e.length) === e && '.' === t[e.length]);
      }
      function t1(e, t, n) {
        let r = Object.entries(n.themes)
            .filter((e) => e[1])
            .map((e) => ({ color: e[0], theme: e[1] })),
          i = r.map((r) => {
            let i = tQ(e, t, { ...n, theme: r.theme }),
              a = tW(i);
            return { tokens: i, state: a, theme: 'string' == typeof r.theme ? r.theme : r.theme.name };
          }),
          a = (function (...e) {
            let t = e.map(() => []),
              n = e.length;
            for (let r = 0; r < e[0].length; r++) {
              let i = e.map((e) => e[r]),
                a = t.map(() => []);
              t.forEach((e, t) => e.push(a[t]));
              let o = i.map(() => 0),
                s = i.map((e) => e[0]);
              for (; s.every((e) => e); ) {
                let e = Math.min(...s.map((e) => e.content.length));
                for (let t = 0; t < n; t++) {
                  let n = s[t];
                  n.content.length === e
                    ? (a[t].push(n), (o[t] += 1), (s[t] = i[t][o[t]]))
                    : (a[t].push({ ...n, content: n.content.slice(0, e) }),
                      (s[t] = { ...n, content: n.content.slice(e), offset: n.offset + e }));
                }
              }
            }
            return t;
          })(...i.map((e) => e.tokens)),
          o = a[0].map((e, t) =>
            e.map((e, i) => {
              let o = { content: e.content, variants: {}, offset: e.offset };
              return (
                'includeExplanation' in n && n.includeExplanation && (o.explanation = e.explanation),
                a.forEach((e, n) => {
                  let { content: a, explanation: s, offset: l, ...u } = e[t][i];
                  o.variants[r[n].color] = u;
                }),
                o
              );
            })
          ),
          s = i[0].state
            ? new tq(Object.fromEntries(i.map((e) => [e.theme, e.state?.getInternalStack(e.theme)])), i[0].state.lang)
            : void 0;
        return s && tH(o, s), o;
      }
      function t8(e, t, n) {
        let r, i, a, s, l, u;
        if ('themes' in n) {
          let { defaultColor: h = 'light', cssVariablePrefix: c = '--shiki-', colorsRendering: d = 'css-vars' } = n,
            p = Object.entries(n.themes)
              .filter((e) => e[1])
              .map((e) => ({ color: e[0], theme: e[1] }))
              .sort((e, t) => (e.color === h ? -1 : +(t.color === h)));
          if (0 === p.length) throw new o('`themes` option must not be empty');
          let m = t1(e, t, n);
          if (((u = tW(m)), h && tG !== h && !p.find((e) => e.color === h)))
            throw new o(`\`themes\` option must contain the defaultColor key \`${h}\``);
          let f = p.map((t) => e.getTheme(t.theme)),
            g = p.map((e) => e.color);
          (a = m.map((e) =>
            e.map((e) =>
              (function (e, t, n, r, i = 'css-vars') {
                let a = { content: e.content, explanation: e.explanation, offset: e.offset },
                  s = t.map((t) => tj(e.variants[t])),
                  l = new Set(s.flatMap((e) => Object.keys(e))),
                  u = {},
                  h = (e, r) => {
                    let i = 'color' === r ? '' : 'background-color' === r ? '-bg' : `-${r}`;
                    return n + t[e] + ('color' === r ? '' : i);
                  };
                return (
                  s.forEach((e, n) => {
                    for (let a of l) {
                      let l = e[a] || 'inherit';
                      if (0 === n && r)
                        if (r === tG && s.length > 1) {
                          let e = t.findIndex((e) => 'light' === e),
                            r = t.findIndex((e) => 'dark' === e);
                          if (-1 === e || -1 === r)
                            throw new o(
                              'When using `defaultColor: "light-dark()"`, you must provide both `light` and `dark` themes'
                            );
                          let c = s[e][a] || 'inherit',
                            d = s[r][a] || 'inherit';
                          (u[a] = `light-dark(${c}, ${d})`), 'css-vars' === i && (u[h(n, a)] = l);
                        } else u[a] = l;
                      else 'css-vars' === i && (u[h(n, a)] = l);
                    }
                  }),
                  (a.htmlStyle = u),
                  a
                );
              })(e, g, c, h, d)
            )
          )),
            u && tH(a, u);
          let y = p.map((e) => tE(e.theme, n));
          (i = t2(p, f, y, c, h, 'fg', d)),
            (r = t2(p, f, y, c, h, 'bg', d)),
            (s = `shiki-themes ${f.map((e) => e.name).join(' ')}`),
            (l = h ? void 0 : [i, r].join(';'));
        } else if ('theme' in n) {
          let o = tE(n.theme, n);
          a = tQ(e, t, n);
          let l = e.getTheme(n.theme);
          (r = tR(l.bg, o)), (i = tR(l.fg, o)), (s = l.name), (u = tW(a));
        } else throw new o('Invalid options, either `theme` or `themes` must be provided');
        return { tokens: a, fg: i, bg: r, themeName: s, rootStyle: l, grammarState: u };
      }
      function t2(e, t, n, r, i, a, s) {
        return e
          .map((l, u) => {
            let h = tR(t[u][a], n[u]) || 'inherit',
              c = `${r + l.color}${'bg' === a ? '-bg' : ''}:${h}`;
            if (0 === u && i) {
              if (i === tG && e.length > 1) {
                let r = e.findIndex((e) => 'light' === e.color),
                  i = e.findIndex((e) => 'dark' === e.color);
                if (-1 === r || -1 === i)
                  throw new o(
                    'When using `defaultColor: "light-dark()"`, you must provide both `light` and `dark` themes'
                  );
                let s = tR(t[r][a], n[r]) || 'inherit',
                  l = tR(t[i][a], n[i]) || 'inherit';
                return `light-dark(${s}, ${l});${c}`;
              }
              return h;
            }
            return 'css-vars' === s ? c : null;
          })
          .filter((e) => !!e)
          .join(';');
      }
      function t6(
        e,
        t,
        n,
        r = { meta: {}, options: n, codeToHast: (t, n) => t6(e, t, n), codeToTokens: (t, n) => t8(e, t, n) }
      ) {
        let i = t;
        for (let e of tV(n)) i = e.preprocess?.call(r, i, n) || i;
        let { tokens: a, fg: o, bg: s, themeName: l, rootStyle: u, grammarState: h } = t8(e, i, n),
          { mergeWhitespaces: c = !0, mergeSameStyleTokens: d = !1 } = n;
        !0 === c
          ? (a = a.map((e) => {
              let t = [],
                n = '',
                r = 0;
              return (
                e.forEach((i, a) => {
                  let o = !(i.fontStyle && (i.fontStyle & v.Underline || i.fontStyle & v.Strikethrough));
                  o && i.content.match(/^\s+$/) && e[a + 1]
                    ? (r || (r = i.offset), (n += i.content))
                    : n
                      ? (o ? t.push({ ...i, offset: r, content: n + i.content }) : t.push({ content: n, offset: r }, i),
                        (r = 0),
                        (n = ''))
                      : t.push(i);
                }),
                t
              );
            }))
          : 'never' === c &&
            (a = a.map((e) =>
              e.flatMap((e) => {
                if (e.content.match(/^\s+$/)) return e;
                let t = e.content.match(/^(\s*)(.*?)(\s*)$/);
                if (!t) return e;
                let [, n, r, i] = t;
                if (!n && !i) return e;
                let a = [{ ...e, offset: e.offset + n.length, content: r }];
                return (
                  n && a.unshift({ content: n, offset: e.offset }),
                  i && a.push({ content: i, offset: e.offset + n.length + r.length }),
                  a
                );
              })
            )),
          d &&
            (a = a.map((e) => {
              let t = [];
              for (let n of e) {
                if (0 === t.length) {
                  t.push({ ...n });
                  continue;
                }
                let e = t[t.length - 1],
                  r = t$(e.htmlStyle || tj(e)),
                  i = t$(n.htmlStyle || tj(n)),
                  a = e.fontStyle && (e.fontStyle & v.Underline || e.fontStyle & v.Strikethrough),
                  o = n.fontStyle && (n.fontStyle & v.Underline || n.fontStyle & v.Strikethrough);
                a || o || r !== i ? t.push({ ...n }) : (e.content += n.content);
              }
              return t;
            }));
        let p = {
          ...r,
          get source() {
            return i;
          },
        };
        for (let e of tV(n)) a = e.tokens?.call(p, a) || a;
        return (function (e, t, n, r = tW(e)) {
          let i = tV(t),
            a = [],
            o = { type: 'root', children: [] },
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
            h = { type: 'element', tagName: 'code', properties: {}, children: a },
            c = [],
            d = {
              ...n,
              structure: s,
              addClassToHast: tD,
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
                return o;
              },
              get pre() {
                return u;
              },
              get code() {
                return h;
              },
              get lines() {
                return c;
              },
            };
          if (
            (e.forEach((e, t) => {
              t &&
                ('inline' === s
                  ? o.children.push({ type: 'element', tagName: 'br', properties: {}, children: [] })
                  : 'classic' === s && a.push({ type: 'text', value: '\n' }));
              let n = { type: 'element', tagName: 'span', properties: { class: 'line' }, children: [] },
                r = 0;
              for (let a of e) {
                let e = {
                    type: 'element',
                    tagName: 'span',
                    properties: { ...a.htmlAttrs },
                    children: [{ type: 'text', value: a.content }],
                  },
                  l = t$(a.htmlStyle || tj(a));
                for (let o of (l && (e.properties.style = l), i)) e = o?.span?.call(d, e, t + 1, r, n, a) || e;
                'inline' === s ? o.children.push(e) : 'classic' === s && n.children.push(e), (r += a.content.length);
              }
              if ('classic' === s) {
                for (let e of i) n = e?.line?.call(d, n, t + 1) || n;
                c.push(n), a.push(n);
              }
            }),
            'classic' === s)
          ) {
            for (let e of i) h = e?.code?.call(d, h) || h;
            for (let e of (u.children.push(h), i)) u = e?.pre?.call(d, u) || u;
            o.children.push(u);
          }
          let p = o;
          for (let e of i) p = e?.root?.call(d, p) || p;
          return r && tH(p, r), p;
        })(a, { ...n, fg: o, bg: s, themeName: l, rootStyle: u }, p, h);
      }
      let t5 = function (e, t) {
          let n = t || tP,
            r = n.quote || '"';
          if ('"' !== r && "'" !== r) throw Error('Invalid quote `' + r + '`, expected `\'` or `"`');
          return {
            one: tT,
            all: tL,
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
            schema: 'svg' === n.space ? ez : eq,
            quote: r,
            alternative: '"' === r ? "'" : '"',
          }.one(Array.isArray(e) ? { type: 'root', children: e } : e, void 0, void 0);
        },
        t4 = { light: '#333333', dark: '#bbbbbb' },
        t3 = { light: '#fffffe', dark: '#1e1e1e' },
        t9 = '__shiki_resolved';
      function t7(e) {
        if (e?.[t9]) return e;
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
            r || (r = 'light' === t.type ? t4.light : t4.dark),
            n || (n = 'light' === t.type ? t3.light : t3.dark),
            (t.fg = r),
            (t.bg = n);
        }
        (t.settings[0] && t.settings[0].settings && !t.settings[0].scope) ||
          t.settings.unshift({ settings: { foreground: t.fg, background: t.bg } });
        let i = 0,
          a = new Map();
        function o(e) {
          if (a.has(e)) return a.get(e);
          i += 1;
          let n = `#${i.toString(16).padStart(8, '0').toLowerCase()}`;
          return t.colorReplacements?.[`#${n}`] ? o(e) : (a.set(e, n), n);
        }
        for (let e of ((t.settings = t.settings.map((e) => {
          let n = e.settings?.foreground && !e.settings.foreground.startsWith('#'),
            r = e.settings?.background && !e.settings.background.startsWith('#');
          if (!n && !r) return e;
          let i = { ...e, settings: { ...e.settings } };
          if (n) {
            let n = o(e.settings.foreground);
            (t.colorReplacements[n] = e.settings.foreground), (i.settings.foreground = n);
          }
          if (r) {
            let n = o(e.settings.background);
            (t.colorReplacements[n] = e.settings.background), (i.settings.background = n);
          }
          return i;
        })),
        Object.keys(t.colors || {})))
          if (
            ('editor.foreground' === e || 'editor.background' === e || e.startsWith('terminal.ansi')) &&
            !t.colors[e]?.startsWith('#')
          ) {
            let n = o(t.colors[e]);
            (t.colorReplacements[n] = t.colors[e]), (t.colors[e] = n);
          }
        return Object.defineProperty(t, t9, { enumerable: !1, writable: !1, value: !0 }), t;
      }
      async function ne(e) {
        return Array.from(
          new Set(
            (
              await Promise.all(
                e.filter((e) => !tM(e)).map(async (e) => await tI(e).then((e) => (Array.isArray(e) ? e : [e])))
              )
            ).flat()
          )
        );
      }
      async function nt(e) {
        return (await Promise.all(e.map(async (e) => (tB(e) ? null : t7(await tI(e)))))).filter((e) => !!e);
      }
      class nn extends Error {
        constructor(e) {
          super(e), (this.name = 'ShikiError');
        }
      }
      class nr extends eb {
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
          let t = t7(e);
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
                throw new nn(`Circular alias \`${Array.from(t).join(' -> ')} -> ${e}\``);
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
            throw new nn(
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
      class ni {
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
      let na = 0;
      async function no(e) {
        e.engine ||
          (function (e, t = 3) {
            if (1 && !(t > 3))
              if (1) console.trace(`[SHIKI DEPRECATE]: ${e}`);
              else throw Error(`[SHIKI DEPRECATE]: ${e}`);
          })(
            '`engine` option is required. Use `createOnigurumaEngine` or `createJavaScriptRegexEngine` to create an engine.'
          );
        let [t, n, r] = await Promise.all([nt(e.themes || []), ne(e.langs || []), e.engine]);
        return (function (e) {
          let t;
          (na += 1),
            !1 !== e.warnings &&
              na >= 10 &&
              na % 10 == 0 &&
              console.warn(
                `[Shiki] ${na} instances have been created. Shiki is supposed to be used as a singleton, consider refactoring your code to cache your highlighter instance; Or call \`highlighter.dispose()\` to release unused instances.`
              );
          let n = !1;
          if (!e.engine) throw new nn('`engine` option is required for synchronous mode');
          let r = (e.langs || []).flat(1),
            i = (e.themes || []).flat(1).map(t7),
            a = new nr(new ni(e.engine, r), i, r, e.langAlias);
          function o(e) {
            if ('none' === e) return { bg: '', fg: '', name: 'none', settings: [], type: 'dark' };
            u();
            let t = a.getTheme(e);
            if (!t) throw new nn(`Theme \`${e}\` not found, you may need to load it first`);
            return t;
          }
          function s(...e) {
            u(), a.loadLanguages(e.flat(1));
          }
          function l(...e) {
            for (let t of (u(), e.flat(1))) a.loadTheme(t);
          }
          function u() {
            if (n) throw new nn('Shiki instance has been disposed');
          }
          function h() {
            n || ((n = !0), a.dispose(), (na -= 1));
          }
          return {
            setTheme: function (e) {
              u();
              let n = o(e);
              return t !== e && (a.setTheme(n), (t = e)), { theme: n, colorMap: a.getColorMap() };
            },
            getTheme: o,
            getLanguage: function (e) {
              u();
              let t = a.getGrammar('string' == typeof e ? e : e.name);
              if (!t) throw new nn(`Language \`${e}\` not found, you may need to load it first`);
              return t;
            },
            getLoadedThemes: function () {
              return u(), a.getLoadedThemes();
            },
            getLoadedLanguages: function () {
              return u(), a.getLoadedLanguages();
            },
            loadLanguage: async function (...e) {
              return s(await ne(e));
            },
            loadLanguageSync: s,
            loadTheme: async function (...e) {
              return u(), l(await nt(e));
            },
            loadThemeSync: l,
            dispose: h,
            [Symbol.dispose]: h,
          };
        })({ ...e, themes: t, langs: n, engine: r });
      }
      async function ns(e) {
        let t = await no(e);
        return {
          getLastGrammarState: (...e) =>
            (function (...e) {
              if (2 === e.length) return tW(e[1]);
              let [t, n, r = {}] = e,
                { lang: i = 'text', theme: a = t.getLoadedThemes()[0] } = r;
              if (tO(i) || tB(a)) throw new o('Plain language does not have grammar state');
              if ('ansi' === i) throw new o('ANSI language does not have grammar state');
              let { theme: s, colorMap: l } = t.setTheme(a),
                u = t.getLanguage(i);
              return new tq(tZ(n, u, s, l, r).stateStack, u.name, s.name);
            })(t, ...e),
          codeToTokensBase: (e, n) => tQ(t, e, n),
          codeToTokensWithThemes: (e, n) => t1(t, e, n),
          codeToTokens: (e, n) => t8(t, e, n),
          codeToHast: (e, n) => t6(t, e, n),
          codeToHtml: (e, n) =>
            (function (e, t, n) {
              let r = { meta: {}, options: n, codeToHast: (t, n) => t6(e, t, n), codeToTokens: (t, n) => t8(e, t, n) },
                i = t5(t6(e, t, n, r));
              for (let e of tV(n)) i = e.postprocess?.call(r, i, n) || i;
              return i;
            })(t, e, n),
          getBundledLanguages: () => ({}),
          getBundledThemes: () => ({}),
          ...t,
          getInternalContext: () => t,
        };
      }
      let nl = [
          { id: 'abap', name: 'ABAP', import: () => n.e(4974).then(n.bind(n, 4974)) },
          { id: 'actionscript-3', name: 'ActionScript', import: () => n.e(215).then(n.bind(n, 215)) },
          { id: 'ada', name: 'Ada', import: () => n.e(3718).then(n.bind(n, 3718)) },
          {
            id: 'angular-html',
            name: 'Angular HTML',
            import: () => Promise.all([n.e(6887), n.e(4019), n.e(9875), n.e(3467)]).then(n.bind(n, 3467)),
          },
          {
            id: 'angular-ts',
            name: 'Angular TypeScript',
            import: () =>
              Promise.all([n.e(6887), n.e(5243), n.e(4019), n.e(9875), n.e(7240), n.e(9324)]).then(n.bind(n, 6976)),
          },
          { id: 'apache', name: 'Apache Conf', import: () => n.e(2326).then(n.bind(n, 2326)) },
          { id: 'apex', name: 'Apex', import: () => n.e(3096).then(n.bind(n, 3096)) },
          {
            id: 'apl',
            name: 'APL',
            import: () => Promise.all([n.e(6887), n.e(4019), n.e(9875), n.e(5468), n.e(7331)]).then(n.bind(n, 7331)),
          },
          { id: 'applescript', name: 'AppleScript', import: () => n.e(4083).then(n.bind(n, 4083)) },
          { id: 'ara', name: 'Ara', import: () => n.e(6056).then(n.bind(n, 6056)) },
          { id: 'asciidoc', name: 'AsciiDoc', aliases: ['adoc'], import: () => n.e(8965).then(n.bind(n, 8965)) },
          { id: 'asm', name: 'Assembly', import: () => n.e(3243).then(n.bind(n, 3243)) },
          {
            id: 'astro',
            name: 'Astro',
            import: () => Promise.all([n.e(6887), n.e(5859), n.e(4019), n.e(2911)]).then(n.bind(n, 2911)),
          },
          { id: 'awk', name: 'AWK', import: () => n.e(9317).then(n.bind(n, 9317)) },
          { id: 'ballerina', name: 'Ballerina', import: () => n.e(3750).then(n.bind(n, 3750)) },
          { id: 'bat', name: 'Batch File', aliases: ['batch'], import: () => n.e(6659).then(n.bind(n, 6659)) },
          { id: 'beancount', name: 'Beancount', import: () => n.e(4813).then(n.bind(n, 4813)) },
          { id: 'berry', name: 'Berry', aliases: ['be'], import: () => n.e(7658).then(n.bind(n, 7658)) },
          { id: 'bibtex', name: 'BibTeX', import: () => n.e(7218).then(n.bind(n, 7218)) },
          { id: 'bicep', name: 'Bicep', import: () => n.e(8651).then(n.bind(n, 8651)) },
          {
            id: 'blade',
            name: 'Blade',
            import: () =>
              Promise.all([n.e(6887), n.e(4019), n.e(9875), n.e(5468), n.e(4682), n.e(2080)]).then(n.bind(n, 2080)),
          },
          { id: 'bsl', name: '1C (Enterprise)', aliases: ['1c'], import: () => n.e(3585).then(n.bind(n, 3585)) },
          { id: 'c', name: 'C', import: () => n.e(6833).then(n.bind(n, 6833)) },
          { id: 'cadence', name: 'Cadence', aliases: ['cdc'], import: () => n.e(4303).then(n.bind(n, 4303)) },
          { id: 'cairo', name: 'Cairo', import: () => Promise.all([n.e(8282), n.e(7222)]).then(n.bind(n, 7222)) },
          { id: 'clarity', name: 'Clarity', import: () => n.e(1970).then(n.bind(n, 1970)) },
          { id: 'clojure', name: 'Clojure', aliases: ['clj'], import: () => n.e(870).then(n.bind(n, 870)) },
          { id: 'cmake', name: 'CMake', import: () => n.e(6987).then(n.bind(n, 6987)) },
          {
            id: 'cobol',
            name: 'COBOL',
            import: () => Promise.all([n.e(6887), n.e(4019), n.e(9875), n.e(5468), n.e(4079)]).then(n.bind(n, 4079)),
          },
          { id: 'codeowners', name: 'CODEOWNERS', import: () => n.e(7491).then(n.bind(n, 7491)) },
          { id: 'codeql', name: 'CodeQL', aliases: ['ql'], import: () => n.e(9592).then(n.bind(n, 9592)) },
          {
            id: 'coffee',
            name: 'CoffeeScript',
            aliases: ['coffeescript'],
            import: () => Promise.all([n.e(6887), n.e(8952)]).then(n.bind(n, 8952)),
          },
          { id: 'common-lisp', name: 'Common Lisp', aliases: ['lisp'], import: () => n.e(7130).then(n.bind(n, 7130)) },
          { id: 'coq', name: 'Coq', import: () => n.e(441).then(n.bind(n, 441)) },
          {
            id: 'cpp',
            name: 'C++',
            aliases: ['c++'],
            import: () => Promise.all([n.e(9749), n.e(9368), n.e(4682), n.e(6833), n.e(1964)]).then(n.bind(n, 177)),
          },
          {
            id: 'crystal',
            name: 'Crystal',
            import: () =>
              Promise.all([n.e(6887), n.e(4019), n.e(9875), n.e(4682), n.e(6833), n.e(6877), n.e(7328)]).then(
                n.bind(n, 7328)
              ),
          },
          { id: 'csharp', name: 'C#', aliases: ['c#', 'cs'], import: () => n.e(377).then(n.bind(n, 377)) },
          { id: 'css', name: 'CSS', import: () => n.e(4019).then(n.bind(n, 4019)) },
          { id: 'csv', name: 'CSV', import: () => n.e(8554).then(n.bind(n, 8554)) },
          { id: 'cue', name: 'CUE', import: () => n.e(2259).then(n.bind(n, 2259)) },
          { id: 'cypher', name: 'Cypher', aliases: ['cql'], import: () => n.e(9337).then(n.bind(n, 9337)) },
          { id: 'd', name: 'D', import: () => n.e(9342).then(n.bind(n, 9342)) },
          { id: 'dart', name: 'Dart', import: () => n.e(8371).then(n.bind(n, 8371)) },
          { id: 'dax', name: 'DAX', import: () => n.e(3809).then(n.bind(n, 3809)) },
          { id: 'desktop', name: 'Desktop', import: () => n.e(966).then(n.bind(n, 966)) },
          { id: 'diff', name: 'Diff', import: () => n.e(1817).then(n.bind(n, 1817)) },
          { id: 'docker', name: 'Dockerfile', aliases: ['dockerfile'], import: () => n.e(1748).then(n.bind(n, 1748)) },
          { id: 'dotenv', name: 'dotEnv', import: () => n.e(8154).then(n.bind(n, 8154)) },
          { id: 'dream-maker', name: 'Dream Maker', import: () => n.e(5952).then(n.bind(n, 5952)) },
          {
            id: 'edge',
            name: 'Edge',
            import: () => Promise.all([n.e(6887), n.e(5859), n.e(4019), n.e(9875), n.e(4951)]).then(n.bind(n, 4951)),
          },
          {
            id: 'elixir',
            name: 'Elixir',
            import: () => Promise.all([n.e(6887), n.e(4019), n.e(9875), n.e(4785)]).then(n.bind(n, 4785)),
          },
          { id: 'elm', name: 'Elm', import: () => Promise.all([n.e(6833), n.e(3798)]).then(n.bind(n, 3798)) },
          { id: 'emacs-lisp', name: 'Emacs Lisp', aliases: ['elisp'], import: () => n.e(2770).then(n.bind(n, 5774)) },
          {
            id: 'erb',
            name: 'ERB',
            import: () =>
              Promise.all([
                n.e(6887),
                n.e(5859),
                n.e(3883),
                n.e(642),
                n.e(9749),
                n.e(9368),
                n.e(4019),
                n.e(9875),
                n.e(5468),
                n.e(4682),
                n.e(6833),
                n.e(6877),
                n.e(7193),
                n.e(9087),
                n.e(599),
              ]).then(n.bind(n, 599)),
          },
          { id: 'erlang', name: 'Erlang', aliases: ['erl'], import: () => n.e(2017).then(n.bind(n, 2017)) },
          { id: 'fennel', name: 'Fennel', import: () => n.e(3672).then(n.bind(n, 3672)) },
          { id: 'fish', name: 'Fish', import: () => n.e(1686).then(n.bind(n, 1686)) },
          { id: 'fluent', name: 'Fluent', aliases: ['ftl'], import: () => n.e(3990).then(n.bind(n, 3990)) },
          {
            id: 'fortran-fixed-form',
            name: 'Fortran (Fixed Form)',
            aliases: ['f', 'for', 'f77'],
            import: () => Promise.all([n.e(9910), n.e(9218)]).then(n.bind(n, 9218)),
          },
          {
            id: 'fortran-free-form',
            name: 'Fortran (Free Form)',
            aliases: ['f90', 'f95', 'f03', 'f08', 'f18'],
            import: () => n.e(9910).then(n.bind(n, 9910)),
          },
          {
            id: 'fsharp',
            name: 'F#',
            aliases: ['f#', 'fs'],
            import: () => Promise.all([n.e(175), n.e(5878)]).then(n.bind(n, 5878)),
          },
          { id: 'gdresource', name: 'GDResource', import: () => n.e(9157).then(n.bind(n, 9157)) },
          { id: 'gdscript', name: 'GDScript', import: () => n.e(6188).then(n.bind(n, 6188)) },
          { id: 'gdshader', name: 'GDShader', import: () => n.e(6186).then(n.bind(n, 6186)) },
          { id: 'genie', name: 'Genie', import: () => n.e(8566).then(n.bind(n, 6185)) },
          { id: 'gherkin', name: 'Gherkin', import: () => n.e(4332).then(n.bind(n, 4332)) },
          { id: 'git-commit', name: 'Git Commit Message', import: () => n.e(3682).then(n.bind(n, 3682)) },
          {
            id: 'git-rebase',
            name: 'Git Rebase Message',
            import: () => Promise.all([n.e(6877), n.e(1921)]).then(n.bind(n, 1921)),
          },
          { id: 'gleam', name: 'Gleam', import: () => n.e(1882).then(n.bind(n, 1882)) },
          {
            id: 'glimmer-js',
            name: 'Glimmer JS',
            aliases: ['gjs'],
            import: () => Promise.all([n.e(6887), n.e(5859), n.e(4019), n.e(9875), n.e(7451)]).then(n.bind(n, 7451)),
          },
          {
            id: 'glimmer-ts',
            name: 'Glimmer TS',
            aliases: ['gts'],
            import: () => Promise.all([n.e(6887), n.e(5859), n.e(4019), n.e(9875), n.e(4969)]).then(n.bind(n, 4969)),
          },
          { id: 'glsl', name: 'GLSL', import: () => Promise.all([n.e(6833), n.e(1944)]).then(n.bind(n, 1944)) },
          { id: 'gnuplot', name: 'Gnuplot', import: () => n.e(9387).then(n.bind(n, 9387)) },
          { id: 'go', name: 'Go', import: () => n.e(7446).then(n.bind(n, 7446)) },
          {
            id: 'graphql',
            name: 'GraphQL',
            aliases: ['gql'],
            import: () => Promise.all([n.e(6887), n.e(5859), n.e(3883), n.e(642), n.e(7193)]).then(n.bind(n, 7193)),
          },
          { id: 'groovy', name: 'Groovy', import: () => n.e(6730).then(n.bind(n, 6730)) },
          {
            id: 'hack',
            name: 'Hack',
            import: () => Promise.all([n.e(6887), n.e(4019), n.e(9875), n.e(4682), n.e(2355)]).then(n.bind(n, 2355)),
          },
          {
            id: 'haml',
            name: 'Ruby Haml',
            import: () => Promise.all([n.e(6887), n.e(4019), n.e(5406)]).then(n.bind(n, 5406)),
          },
          {
            id: 'handlebars',
            name: 'Handlebars',
            aliases: ['hbs'],
            import: () => Promise.all([n.e(6887), n.e(4019), n.e(9875), n.e(2684)]).then(n.bind(n, 2684)),
          },
          { id: 'haskell', name: 'Haskell', aliases: ['hs'], import: () => n.e(6514).then(n.bind(n, 6514)) },
          { id: 'haxe', name: 'Haxe', import: () => n.e(2696).then(n.bind(n, 2696)) },
          { id: 'hcl', name: 'HashiCorp HCL', import: () => n.e(8091).then(n.bind(n, 8091)) },
          { id: 'hjson', name: 'Hjson', import: () => n.e(540).then(n.bind(n, 540)) },
          { id: 'hlsl', name: 'HLSL', import: () => n.e(4869).then(n.bind(n, 4869)) },
          {
            id: 'html',
            name: 'HTML',
            import: () => Promise.all([n.e(6887), n.e(4019), n.e(9875)]).then(n.bind(n, 9875)),
          },
          {
            id: 'html-derivative',
            name: 'HTML (Derivative)',
            import: () => Promise.all([n.e(6887), n.e(4019), n.e(9875), n.e(6077)]).then(n.bind(n, 6077)),
          },
          {
            id: 'http',
            name: 'HTTP',
            import: () =>
              Promise.all([n.e(6887), n.e(5859), n.e(3883), n.e(642), n.e(5468), n.e(6877), n.e(7193), n.e(8292)]).then(
                n.bind(n, 8292)
              ),
          },
          { id: 'hxml', name: 'HXML', import: () => n.e(9455).then(n.bind(n, 9455)) },
          { id: 'hy', name: 'Hy', import: () => n.e(8161).then(n.bind(n, 8161)) },
          { id: 'imba', name: 'Imba', import: () => n.e(6381).then(n.bind(n, 6381)) },
          { id: 'ini', name: 'INI', aliases: ['properties'], import: () => n.e(2660).then(n.bind(n, 2660)) },
          { id: 'java', name: 'Java', import: () => n.e(5468).then(n.bind(n, 5468)) },
          { id: 'javascript', name: 'JavaScript', aliases: ['js'], import: () => n.e(6887).then(n.bind(n, 4017)) },
          {
            id: 'jinja',
            name: 'Jinja',
            import: () => Promise.all([n.e(6887), n.e(4019), n.e(9875), n.e(1490)]).then(n.bind(n, 1490)),
          },
          { id: 'jison', name: 'Jison', import: () => Promise.all([n.e(6887), n.e(7211)]).then(n.bind(n, 7211)) },
          { id: 'json', name: 'JSON', import: () => n.e(9838).then(n.bind(n, 9838)) },
          { id: 'json5', name: 'JSON5', import: () => n.e(2953).then(n.bind(n, 2953)) },
          { id: 'jsonc', name: 'JSON with Comments', import: () => n.e(7539).then(n.bind(n, 7539)) },
          { id: 'jsonl', name: 'JSON Lines', import: () => n.e(8908).then(n.bind(n, 8908)) },
          { id: 'jsonnet', name: 'Jsonnet', import: () => n.e(2781).then(n.bind(n, 2781)) },
          { id: 'jssm', name: 'JSSM', aliases: ['fsl'], import: () => n.e(4801).then(n.bind(n, 4801)) },
          { id: 'jsx', name: 'JSX', import: () => n.e(3883).then(n.bind(n, 6453)) },
          {
            id: 'julia',
            name: 'Julia',
            aliases: ['jl'],
            import: () =>
              Promise.all([
                n.e(6887),
                n.e(9749),
                n.e(9368),
                n.e(4682),
                n.e(6833),
                n.e(8282),
                n.e(2988),
                n.e(9268),
              ]).then(n.bind(n, 3865)),
          },
          { id: 'kotlin', name: 'Kotlin', aliases: ['kt', 'kts'], import: () => n.e(7943).then(n.bind(n, 7943)) },
          { id: 'kusto', name: 'Kusto', aliases: ['kql'], import: () => n.e(1306).then(n.bind(n, 1306)) },
          { id: 'latex', name: 'LaTeX', import: () => Promise.all([n.e(2988), n.e(790)]).then(n.bind(n, 790)) },
          { id: 'lean', name: 'Lean 4', aliases: ['lean4'], import: () => n.e(2788).then(n.bind(n, 2788)) },
          { id: 'less', name: 'Less', import: () => n.e(3187).then(n.bind(n, 3187)) },
          {
            id: 'liquid',
            name: 'Liquid',
            import: () => Promise.all([n.e(6887), n.e(4019), n.e(9875), n.e(1524)]).then(n.bind(n, 1524)),
          },
          { id: 'llvm', name: 'LLVM IR', import: () => n.e(8023).then(n.bind(n, 8023)) },
          { id: 'log', name: 'Log file', import: () => n.e(3056).then(n.bind(n, 3056)) },
          { id: 'logo', name: 'Logo', import: () => n.e(8673).then(n.bind(n, 8673)) },
          { id: 'lua', name: 'Lua', import: () => Promise.all([n.e(6833), n.e(7848)]).then(n.bind(n, 7848)) },
          { id: 'luau', name: 'Luau', import: () => n.e(63).then(n.bind(n, 63)) },
          { id: 'make', name: 'Makefile', aliases: ['makefile'], import: () => n.e(7562).then(n.bind(n, 7562)) },
          { id: 'markdown', name: 'Markdown', aliases: ['md'], import: () => n.e(175).then(n.bind(n, 175)) },
          {
            id: 'marko',
            name: 'Marko',
            import: () => Promise.all([n.e(6887), n.e(4019), n.e(7240), n.e(3187), n.e(8132)]).then(n.bind(n, 8132)),
          },
          { id: 'matlab', name: 'MATLAB', import: () => n.e(5375).then(n.bind(n, 5375)) },
          {
            id: 'mdc',
            name: 'MDC',
            import: () => Promise.all([n.e(6887), n.e(4019), n.e(9875), n.e(175), n.e(4204)]).then(n.bind(n, 4204)),
          },
          { id: 'mdx', name: 'MDX', import: () => n.e(6871).then(n.bind(n, 6871)) },
          { id: 'mermaid', name: 'Mermaid', aliases: ['mmd'], import: () => n.e(1939).then(n.bind(n, 1939)) },
          { id: 'mipsasm', name: 'MIPS Assembly', aliases: ['mips'], import: () => n.e(3564).then(n.bind(n, 3564)) },
          { id: 'mojo', name: 'Mojo', import: () => n.e(4133).then(n.bind(n, 4133)) },
          { id: 'move', name: 'Move', import: () => n.e(8271).then(n.bind(n, 8271)) },
          { id: 'narrat', name: 'Narrat Language', aliases: ['nar'], import: () => n.e(1320).then(n.bind(n, 1320)) },
          { id: 'nextflow', name: 'Nextflow', aliases: ['nf'], import: () => n.e(1571).then(n.bind(n, 1571)) },
          { id: 'nginx', name: 'Nginx', import: () => Promise.all([n.e(6833), n.e(4506)]).then(n.bind(n, 4506)) },
          {
            id: 'nim',
            name: 'Nim',
            import: () =>
              Promise.all([n.e(6887), n.e(4019), n.e(9875), n.e(5468), n.e(6833), n.e(175), n.e(786)]).then(
                n.bind(n, 786)
              ),
          },
          { id: 'nix', name: 'Nix', import: () => n.e(1323).then(n.bind(n, 1323)) },
          { id: 'nushell', name: 'nushell', aliases: ['nu'], import: () => n.e(4789).then(n.bind(n, 4789)) },
          { id: 'objective-c', name: 'Objective-C', aliases: ['objc'], import: () => n.e(5431).then(n.bind(n, 5431)) },
          { id: 'objective-cpp', name: 'Objective-C++', import: () => n.e(2519).then(n.bind(n, 1975)) },
          { id: 'ocaml', name: 'OCaml', import: () => n.e(7918).then(n.bind(n, 7918)) },
          { id: 'pascal', name: 'Pascal', import: () => n.e(6204).then(n.bind(n, 6204)) },
          {
            id: 'perl',
            name: 'Perl',
            import: () =>
              Promise.all([n.e(6887), n.e(4019), n.e(9875), n.e(5468), n.e(4682), n.e(7363)]).then(n.bind(n, 7363)),
          },
          {
            id: 'php',
            name: 'PHP',
            import: () =>
              Promise.all([n.e(6887), n.e(4019), n.e(9875), n.e(5468), n.e(4682), n.e(9698), n.e(5541)]).then(
                n.bind(n, 9698)
              ),
          },
          { id: 'plsql', name: 'PL/SQL', import: () => n.e(6310).then(n.bind(n, 3929)) },
          { id: 'po', name: 'Gettext PO', aliases: ['pot', 'potx'], import: () => n.e(4723).then(n.bind(n, 4723)) },
          { id: 'polar', name: 'Polar', import: () => n.e(7306).then(n.bind(n, 7306)) },
          { id: 'postcss', name: 'PostCSS', import: () => n.e(9577).then(n.bind(n, 9577)) },
          { id: 'powerquery', name: 'PowerQuery', import: () => n.e(3433).then(n.bind(n, 3433)) },
          {
            id: 'powershell',
            name: 'PowerShell',
            aliases: ['ps', 'ps1'],
            import: () => n.e(4115).then(n.bind(n, 4115)),
          },
          { id: 'prisma', name: 'Prisma', import: () => n.e(8592).then(n.bind(n, 8592)) },
          { id: 'prolog', name: 'Prolog', import: () => n.e(2641).then(n.bind(n, 2641)) },
          {
            id: 'proto',
            name: 'Protocol Buffer 3',
            aliases: ['protobuf'],
            import: () => n.e(7376).then(n.bind(n, 7376)),
          },
          {
            id: 'pug',
            name: 'Pug',
            aliases: ['jade'],
            import: () => Promise.all([n.e(6887), n.e(4019), n.e(9875), n.e(9470)]).then(n.bind(n, 9470)),
          },
          { id: 'puppet', name: 'Puppet', import: () => n.e(8226).then(n.bind(n, 8226)) },
          { id: 'purescript', name: 'PureScript', import: () => n.e(4295).then(n.bind(n, 4295)) },
          { id: 'python', name: 'Python', aliases: ['py'], import: () => n.e(8282).then(n.bind(n, 8282)) },
          { id: 'qml', name: 'QML', import: () => Promise.all([n.e(6887), n.e(1556)]).then(n.bind(n, 1556)) },
          { id: 'qmldir', name: 'QML Directory', import: () => n.e(1279).then(n.bind(n, 1279)) },
          { id: 'qss', name: 'Qt Style Sheets', import: () => n.e(3545).then(n.bind(n, 3545)) },
          { id: 'r', name: 'R', import: () => n.e(2988).then(n.bind(n, 2988)) },
          { id: 'racket', name: 'Racket', import: () => n.e(8302).then(n.bind(n, 8302)) },
          { id: 'raku', name: 'Raku', aliases: ['perl6'], import: () => n.e(7699).then(n.bind(n, 7699)) },
          {
            id: 'razor',
            name: 'ASP.NET Razor',
            import: () => Promise.all([n.e(6887), n.e(4019), n.e(9875), n.e(377), n.e(874)]).then(n.bind(n, 874)),
          },
          { id: 'reg', name: 'Windows Registry Script', import: () => n.e(2588).then(n.bind(n, 2588)) },
          { id: 'regexp', name: 'RegExp', aliases: ['regex'], import: () => n.e(7035).then(n.bind(n, 7035)) },
          { id: 'rel', name: 'Rel', import: () => n.e(1831).then(n.bind(n, 1831)) },
          { id: 'riscv', name: 'RISC-V', import: () => n.e(2487).then(n.bind(n, 2487)) },
          {
            id: 'rst',
            name: 'reStructuredText',
            import: () =>
              Promise.all([
                n.e(6887),
                n.e(5859),
                n.e(3883),
                n.e(642),
                n.e(9749),
                n.e(9368),
                n.e(4019),
                n.e(9875),
                n.e(5468),
                n.e(4682),
                n.e(6833),
                n.e(6877),
                n.e(7193),
                n.e(8282),
                n.e(9087),
                n.e(7993),
              ]).then(n.bind(n, 7993)),
          },
          {
            id: 'ruby',
            name: 'Ruby',
            aliases: ['rb'],
            import: () =>
              Promise.all([
                n.e(6887),
                n.e(5859),
                n.e(3883),
                n.e(642),
                n.e(9749),
                n.e(9368),
                n.e(4019),
                n.e(9875),
                n.e(5468),
                n.e(4682),
                n.e(6833),
                n.e(6877),
                n.e(7193),
                n.e(9087),
              ]).then(n.bind(n, 4452)),
          },
          { id: 'rust', name: 'Rust', aliases: ['rs'], import: () => n.e(6178).then(n.bind(n, 6178)) },
          { id: 'sas', name: 'SAS', import: () => Promise.all([n.e(4682), n.e(3021)]).then(n.bind(n, 3021)) },
          { id: 'sass', name: 'Sass', import: () => n.e(6834).then(n.bind(n, 6834)) },
          { id: 'scala', name: 'Scala', import: () => n.e(956).then(n.bind(n, 956)) },
          { id: 'scheme', name: 'Scheme', import: () => n.e(7121).then(n.bind(n, 7121)) },
          { id: 'scss', name: 'SCSS', import: () => Promise.all([n.e(4019), n.e(7240)]).then(n.bind(n, 7240)) },
          { id: 'sdbl', name: '1C (Query)', aliases: ['1c-query'], import: () => n.e(5391).then(n.bind(n, 5391)) },
          { id: 'shaderlab', name: 'ShaderLab', aliases: ['shader'], import: () => n.e(7594).then(n.bind(n, 7594)) },
          {
            id: 'shellscript',
            name: 'Shell',
            aliases: ['bash', 'sh', 'shell', 'zsh'],
            import: () => n.e(6877).then(n.bind(n, 6877)),
          },
          {
            id: 'shellsession',
            name: 'Shell Session',
            aliases: ['console'],
            import: () => Promise.all([n.e(6877), n.e(2974)]).then(n.bind(n, 2974)),
          },
          { id: 'smalltalk', name: 'Smalltalk', import: () => n.e(6769).then(n.bind(n, 6769)) },
          { id: 'solidity', name: 'Solidity', import: () => n.e(7947).then(n.bind(n, 7947)) },
          {
            id: 'soy',
            name: 'Closure Templates',
            aliases: ['closure-templates'],
            import: () => Promise.all([n.e(6887), n.e(4019), n.e(9875), n.e(5313)]).then(n.bind(n, 5313)),
          },
          { id: 'sparql', name: 'SPARQL', import: () => n.e(5267).then(n.bind(n, 5267)) },
          {
            id: 'splunk',
            name: 'Splunk Query Language',
            aliases: ['spl'],
            import: () => n.e(4129).then(n.bind(n, 4129)),
          },
          { id: 'sql', name: 'SQL', import: () => n.e(4682).then(n.bind(n, 2301)) },
          { id: 'ssh-config', name: 'SSH Config', import: () => n.e(9905).then(n.bind(n, 9905)) },
          { id: 'stata', name: 'Stata', import: () => Promise.all([n.e(4682), n.e(4193)]).then(n.bind(n, 4193)) },
          { id: 'stylus', name: 'Stylus', aliases: ['styl'], import: () => n.e(450).then(n.bind(n, 450)) },
          {
            id: 'svelte',
            name: 'Svelte',
            import: () => Promise.all([n.e(6887), n.e(5859), n.e(4019), n.e(7985)]).then(n.bind(n, 7985)),
          },
          { id: 'swift', name: 'Swift', import: () => n.e(8291).then(n.bind(n, 8291)) },
          { id: 'system-verilog', name: 'SystemVerilog', import: () => n.e(8618).then(n.bind(n, 8618)) },
          { id: 'systemd', name: 'Systemd Units', import: () => n.e(9243).then(n.bind(n, 9243)) },
          { id: 'talonscript', name: 'TalonScript', aliases: ['talon'], import: () => n.e(3435).then(n.bind(n, 3435)) },
          { id: 'tasl', name: 'Tasl', import: () => n.e(1208).then(n.bind(n, 1208)) },
          { id: 'tcl', name: 'Tcl', import: () => n.e(551).then(n.bind(n, 551)) },
          {
            id: 'templ',
            name: 'Templ',
            import: () => Promise.all([n.e(6887), n.e(4019), n.e(7446), n.e(40)]).then(n.bind(n, 40)),
          },
          {
            id: 'terraform',
            name: 'Terraform',
            aliases: ['tf', 'tfvars'],
            import: () => n.e(8258).then(n.bind(n, 8258)),
          },
          { id: 'tex', name: 'TeX', import: () => Promise.all([n.e(2988), n.e(4493)]).then(n.bind(n, 4493)) },
          { id: 'toml', name: 'TOML', import: () => n.e(4740).then(n.bind(n, 4740)) },
          {
            id: 'ts-tags',
            name: 'TypeScript with Tags',
            aliases: ['lit'],
            import: () =>
              Promise.all([
                n.e(6887),
                n.e(5859),
                n.e(4019),
                n.e(9875),
                n.e(5468),
                n.e(4682),
                n.e(6833),
                n.e(1991),
              ]).then(n.bind(n, 1991)),
          },
          { id: 'tsv', name: 'TSV', import: () => n.e(3649).then(n.bind(n, 3649)) },
          { id: 'tsx', name: 'TSX', import: () => n.e(642).then(n.bind(n, 4195)) },
          { id: 'turtle', name: 'Turtle', import: () => n.e(4034).then(n.bind(n, 4034)) },
          {
            id: 'twig',
            name: 'Twig',
            import: () =>
              Promise.all([
                n.e(6887),
                n.e(5859),
                n.e(3883),
                n.e(642),
                n.e(9749),
                n.e(9368),
                n.e(4019),
                n.e(9875),
                n.e(5468),
                n.e(4682),
                n.e(6833),
                n.e(6877),
                n.e(7193),
                n.e(8282),
                n.e(9087),
                n.e(7240),
                n.e(9698),
                n.e(2491),
              ]).then(n.bind(n, 2491)),
          },
          { id: 'typescript', name: 'TypeScript', aliases: ['ts'], import: () => n.e(5859).then(n.bind(n, 1009)) },
          { id: 'typespec', name: 'TypeSpec', aliases: ['tsp'], import: () => n.e(9141).then(n.bind(n, 9141)) },
          { id: 'typst', name: 'Typst', aliases: ['typ'], import: () => n.e(180).then(n.bind(n, 180)) },
          { id: 'v', name: 'V', import: () => n.e(6232).then(n.bind(n, 6232)) },
          { id: 'vala', name: 'Vala', import: () => n.e(3794).then(n.bind(n, 3794)) },
          { id: 'vb', name: 'Visual Basic', aliases: ['cmd'], import: () => n.e(4584).then(n.bind(n, 4584)) },
          { id: 'verilog', name: 'Verilog', import: () => n.e(7820).then(n.bind(n, 7820)) },
          { id: 'vhdl', name: 'VHDL', import: () => n.e(4830).then(n.bind(n, 4830)) },
          {
            id: 'viml',
            name: 'Vim Script',
            aliases: ['vim', 'vimscript'],
            import: () => n.e(1480).then(n.bind(n, 1480)),
          },
          {
            id: 'vue',
            name: 'Vue',
            import: () => Promise.all([n.e(6887), n.e(5859), n.e(4019), n.e(9875), n.e(7e3)]).then(n.bind(n, 7e3)),
          },
          {
            id: 'vue-html',
            name: 'Vue HTML',
            import: () => Promise.all([n.e(6887), n.e(5859), n.e(4019), n.e(9875), n.e(8666)]).then(n.bind(n, 8666)),
          },
          { id: 'vyper', name: 'Vyper', aliases: ['vy'], import: () => n.e(3354).then(n.bind(n, 3354)) },
          { id: 'wasm', name: 'WebAssembly', import: () => n.e(5868).then(n.bind(n, 5868)) },
          { id: 'wenyan', name: 'Wenyan', aliases: ['文言'], import: () => n.e(4798).then(n.bind(n, 4798)) },
          { id: 'wgsl', name: 'WGSL', import: () => n.e(7559).then(n.bind(n, 7559)) },
          {
            id: 'wikitext',
            name: 'Wikitext',
            aliases: ['mediawiki', 'wiki'],
            import: () => n.e(4137).then(n.bind(n, 4137)),
          },
          { id: 'wit', name: 'WebAssembly Interface Types', import: () => n.e(5566).then(n.bind(n, 5566)) },
          { id: 'wolfram', name: 'Wolfram', aliases: ['wl'], import: () => n.e(311).then(n.bind(n, 6770)) },
          { id: 'xml', name: 'XML', import: () => Promise.all([n.e(5468), n.e(7922)]).then(n.bind(n, 7922)) },
          { id: 'xsl', name: 'XSL', import: () => Promise.all([n.e(5468), n.e(2043)]).then(n.bind(n, 2043)) },
          { id: 'yaml', name: 'YAML', aliases: ['yml'], import: () => n.e(6725).then(n.bind(n, 6725)) },
          { id: 'zenscript', name: 'ZenScript', import: () => n.e(4008).then(n.bind(n, 4008)) },
          { id: 'zig', name: 'Zig', import: () => n.e(4640).then(n.bind(n, 4640)) },
        ],
        nu = Object.fromEntries(nl.map((e) => [e.id, e.import])),
        nh = Object.fromEntries(nl.flatMap((e) => e.aliases?.map((t) => [t, e.import]) || [])),
        nc = { ...nu, ...nh },
        nd = Object.fromEntries(
          [
            {
              id: 'andromeeda',
              displayName: 'Andromeeda',
              type: 'dark',
              import: () => n.e(1818).then(n.bind(n, 1818)),
            },
            { id: 'aurora-x', displayName: 'Aurora X', type: 'dark', import: () => n.e(9401).then(n.bind(n, 9401)) },
            { id: 'ayu-dark', displayName: 'Ayu Dark', type: 'dark', import: () => n.e(4038).then(n.bind(n, 4038)) },
            {
              id: 'catppuccin-frappe',
              displayName: 'Catppuccin Frapp\xe9',
              type: 'dark',
              import: () => n.e(4449).then(n.bind(n, 4449)),
            },
            {
              id: 'catppuccin-latte',
              displayName: 'Catppuccin Latte',
              type: 'light',
              import: () => n.e(669).then(n.bind(n, 669)),
            },
            {
              id: 'catppuccin-macchiato',
              displayName: 'Catppuccin Macchiato',
              type: 'dark',
              import: () => n.e(7830).then(n.bind(n, 7830)),
            },
            {
              id: 'catppuccin-mocha',
              displayName: 'Catppuccin Mocha',
              type: 'dark',
              import: () => n.e(8045).then(n.bind(n, 8045)),
            },
            { id: 'dark-plus', displayName: 'Dark Plus', type: 'dark', import: () => n.e(8953).then(n.bind(n, 8953)) },
            {
              id: 'dracula',
              displayName: 'Dracula Theme',
              type: 'dark',
              import: () => n.e(1942).then(n.bind(n, 1942)),
            },
            {
              id: 'dracula-soft',
              displayName: 'Dracula Theme Soft',
              type: 'dark',
              import: () => n.e(501).then(n.bind(n, 501)),
            },
            {
              id: 'everforest-dark',
              displayName: 'Everforest Dark',
              type: 'dark',
              import: () => n.e(4604).then(n.bind(n, 4604)),
            },
            {
              id: 'everforest-light',
              displayName: 'Everforest Light',
              type: 'light',
              import: () => n.e(8778).then(n.bind(n, 8778)),
            },
            {
              id: 'github-dark',
              displayName: 'GitHub Dark',
              type: 'dark',
              import: () => n.e(566).then(n.bind(n, 566)),
            },
            {
              id: 'github-dark-default',
              displayName: 'GitHub Dark Default',
              type: 'dark',
              import: () => n.e(6098).then(n.bind(n, 6098)),
            },
            {
              id: 'github-dark-dimmed',
              displayName: 'GitHub Dark Dimmed',
              type: 'dark',
              import: () => n.e(9545).then(n.bind(n, 9545)),
            },
            {
              id: 'github-dark-high-contrast',
              displayName: 'GitHub Dark High Contrast',
              type: 'dark',
              import: () => n.e(1238).then(n.bind(n, 1238)),
            },
            {
              id: 'github-light',
              displayName: 'GitHub Light',
              type: 'light',
              import: () => n.e(5628).then(n.bind(n, 5628)),
            },
            {
              id: 'github-light-default',
              displayName: 'GitHub Light Default',
              type: 'light',
              import: () => n.e(7748).then(n.bind(n, 7748)),
            },
            {
              id: 'github-light-high-contrast',
              displayName: 'GitHub Light High Contrast',
              type: 'light',
              import: () => n.e(9796).then(n.bind(n, 9796)),
            },
            {
              id: 'gruvbox-dark-hard',
              displayName: 'Gruvbox Dark Hard',
              type: 'dark',
              import: () => n.e(2604).then(n.bind(n, 2604)),
            },
            {
              id: 'gruvbox-dark-medium',
              displayName: 'Gruvbox Dark Medium',
              type: 'dark',
              import: () => n.e(1162).then(n.bind(n, 1162)),
            },
            {
              id: 'gruvbox-dark-soft',
              displayName: 'Gruvbox Dark Soft',
              type: 'dark',
              import: () => n.e(5747).then(n.bind(n, 5747)),
            },
            {
              id: 'gruvbox-light-hard',
              displayName: 'Gruvbox Light Hard',
              type: 'light',
              import: () => n.e(5618).then(n.bind(n, 5618)),
            },
            {
              id: 'gruvbox-light-medium',
              displayName: 'Gruvbox Light Medium',
              type: 'light',
              import: () => n.e(1068).then(n.bind(n, 1068)),
            },
            {
              id: 'gruvbox-light-soft',
              displayName: 'Gruvbox Light Soft',
              type: 'light',
              import: () => n.e(4793).then(n.bind(n, 4793)),
            },
            { id: 'houston', displayName: 'Houston', type: 'dark', import: () => n.e(5698).then(n.bind(n, 5698)) },
            {
              id: 'kanagawa-dragon',
              displayName: 'Kanagawa Dragon',
              type: 'dark',
              import: () => n.e(8921).then(n.bind(n, 8921)),
            },
            {
              id: 'kanagawa-lotus',
              displayName: 'Kanagawa Lotus',
              type: 'light',
              import: () => n.e(9899).then(n.bind(n, 9899)),
            },
            {
              id: 'kanagawa-wave',
              displayName: 'Kanagawa Wave',
              type: 'dark',
              import: () => n.e(8403).then(n.bind(n, 8403)),
            },
            { id: 'laserwave', displayName: 'LaserWave', type: 'dark', import: () => n.e(5694).then(n.bind(n, 5694)) },
            {
              id: 'light-plus',
              displayName: 'Light Plus',
              type: 'light',
              import: () => n.e(6367).then(n.bind(n, 6367)),
            },
            {
              id: 'material-theme',
              displayName: 'Material Theme',
              type: 'dark',
              import: () => n.e(5757).then(n.bind(n, 5757)),
            },
            {
              id: 'material-theme-darker',
              displayName: 'Material Theme Darker',
              type: 'dark',
              import: () => n.e(6057).then(n.bind(n, 6057)),
            },
            {
              id: 'material-theme-lighter',
              displayName: 'Material Theme Lighter',
              type: 'light',
              import: () => n.e(5579).then(n.bind(n, 5579)),
            },
            {
              id: 'material-theme-ocean',
              displayName: 'Material Theme Ocean',
              type: 'dark',
              import: () => n.e(9404).then(n.bind(n, 9404)),
            },
            {
              id: 'material-theme-palenight',
              displayName: 'Material Theme Palenight',
              type: 'dark',
              import: () => n.e(9468).then(n.bind(n, 9468)),
            },
            { id: 'min-dark', displayName: 'Min Dark', type: 'dark', import: () => n.e(947).then(n.bind(n, 947)) },
            { id: 'min-light', displayName: 'Min Light', type: 'light', import: () => n.e(667).then(n.bind(n, 667)) },
            { id: 'monokai', displayName: 'Monokai', type: 'dark', import: () => n.e(8454).then(n.bind(n, 8454)) },
            { id: 'night-owl', displayName: 'Night Owl', type: 'dark', import: () => n.e(1875).then(n.bind(n, 1875)) },
            { id: 'nord', displayName: 'Nord', type: 'dark', import: () => n.e(1577).then(n.bind(n, 1577)) },
            {
              id: 'one-dark-pro',
              displayName: 'One Dark Pro',
              type: 'dark',
              import: () => n.e(2929).then(n.bind(n, 2929)),
            },
            { id: 'one-light', displayName: 'One Light', type: 'light', import: () => n.e(9895).then(n.bind(n, 9895)) },
            { id: 'plastic', displayName: 'Plastic', type: 'dark', import: () => n.e(4432).then(n.bind(n, 4432)) },
            {
              id: 'poimandres',
              displayName: 'Poimandres',
              type: 'dark',
              import: () => n.e(8092).then(n.bind(n, 8092)),
            },
            { id: 'red', displayName: 'Red', type: 'dark', import: () => n.e(2589).then(n.bind(n, 2589)) },
            {
              id: 'rose-pine',
              displayName: 'Ros\xe9 Pine',
              type: 'dark',
              import: () => n.e(1108).then(n.bind(n, 1108)),
            },
            {
              id: 'rose-pine-dawn',
              displayName: 'Ros\xe9 Pine Dawn',
              type: 'light',
              import: () => n.e(4433).then(n.bind(n, 4433)),
            },
            {
              id: 'rose-pine-moon',
              displayName: 'Ros\xe9 Pine Moon',
              type: 'dark',
              import: () => n.e(2776).then(n.bind(n, 2776)),
            },
            {
              id: 'slack-dark',
              displayName: 'Slack Dark',
              type: 'dark',
              import: () => n.e(8027).then(n.bind(n, 8027)),
            },
            {
              id: 'slack-ochin',
              displayName: 'Slack Ochin',
              type: 'light',
              import: () => n.e(1388).then(n.bind(n, 1388)),
            },
            {
              id: 'snazzy-light',
              displayName: 'Snazzy Light',
              type: 'light',
              import: () => n.e(9756).then(n.bind(n, 7375)),
            },
            {
              id: 'solarized-dark',
              displayName: 'Solarized Dark',
              type: 'dark',
              import: () => n.e(6900).then(n.bind(n, 6900)),
            },
            {
              id: 'solarized-light',
              displayName: 'Solarized Light',
              type: 'light',
              import: () => n.e(8786).then(n.bind(n, 8786)),
            },
            {
              id: 'synthwave-84',
              displayName: "Synthwave '84",
              type: 'dark',
              import: () => n.e(2764).then(n.bind(n, 2764)),
            },
            {
              id: 'tokyo-night',
              displayName: 'Tokyo Night',
              type: 'dark',
              import: () => n.e(8591).then(n.bind(n, 8591)),
            },
            { id: 'vesper', displayName: 'Vesper', type: 'dark', import: () => n.e(3249).then(n.bind(n, 3249)) },
            {
              id: 'vitesse-black',
              displayName: 'Vitesse Black',
              type: 'dark',
              import: () => n.e(1035).then(n.bind(n, 1035)),
            },
            {
              id: 'vitesse-dark',
              displayName: 'Vitesse Dark',
              type: 'dark',
              import: () => n.e(3488).then(n.bind(n, 3488)),
            },
            {
              id: 'vitesse-light',
              displayName: 'Vitesse Light',
              type: 'light',
              import: () => n.e(3702).then(n.bind(n, 3702)),
            },
          ].map((e) => [e.id, e.import])
        );
      var np = n(4216).Buffer;
      class nm extends Error {
        constructor(e) {
          super(e), (this.name = 'ShikiError');
        }
      }
      function nf() {
        return 'undefined' != typeof performance ? performance.now() : Date.now();
      }
      let ng = (e, t) => e + ((t - (e % t)) % t);
      async function ny(e) {
        let t,
          n,
          r = {};
        function i(e) {
          (n = e), (r.HEAPU8 = new Uint8Array(e)), (r.HEAPU32 = new Uint32Array(e));
        }
        let a = 'undefined' != typeof TextDecoder ? new TextDecoder('utf8') : void 0;
        function o(e, t) {
          return e
            ? (function (e, t, n = 1024) {
                let r = t + n,
                  i = t;
                for (; e[i] && !(i >= r); ) ++i;
                if (i - t > 16 && e.buffer && a) return a.decode(e.subarray(t, i));
                let o = '';
                for (; t < i; ) {
                  let n = e[t++];
                  if (!(128 & n)) {
                    o += String.fromCharCode(n);
                    continue;
                  }
                  let r = 63 & e[t++];
                  if ((224 & n) == 192) {
                    o += String.fromCharCode(((31 & n) << 6) | r);
                    continue;
                  }
                  let i = 63 & e[t++];
                  if (
                    (n =
                      (240 & n) == 224
                        ? ((15 & n) << 12) | (r << 6) | i
                        : ((7 & n) << 18) | (r << 12) | (i << 6) | (63 & e[t++])) < 65536
                  )
                    o += String.fromCharCode(n);
                  else {
                    let e = n - 65536;
                    o += String.fromCharCode(55296 | (e >> 10), 56320 | (1023 & e));
                  }
                }
                return o;
              })(r.HEAPU8, e, t)
            : '';
        }
        let s = {
          emscripten_get_now: nf,
          emscripten_memcpy_big: function (e, t, n) {
            r.HEAPU8.copyWithin(e, t, t + n);
          },
          emscripten_resize_heap: function (e) {
            let a = r.HEAPU8.length;
            if ((e >>>= 0) > 0x80000000) return !1;
            for (let r = 1; r <= 4; r *= 2) {
              let o = a * (1 + 0.2 / r);
              if (
                ((o = Math.min(o, e + 0x6000000)),
                (function (e) {
                  try {
                    return t.grow((e - n.byteLength + 65535) >>> 16), i(t.buffer), 1;
                  } catch {}
                })(Math.min(0x80000000, ng(Math.max(e, o), 65536))))
              )
                return !0;
            }
            return !1;
          },
          fd_write: () => 0,
        };
        async function l() {
          let n = await e({ env: s, wasi_snapshot_preview1: s });
          i((t = n.memory).buffer), Object.assign(r, n), (r.UTF8ToString = o);
        }
        return await l(), r;
      }
      var nb = Object.defineProperty,
        n_ = (e, t, n) =>
          t in e ? nb(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n),
        nv = (e, t, n) => n_(e, 'symbol' != typeof t ? t + '' : t, n);
      let nk = null;
      class nw {
        constructor(e) {
          nv(this, 'utf16Length'),
            nv(this, 'utf8Length'),
            nv(this, 'utf16Value'),
            nv(this, 'utf8Value'),
            nv(this, 'utf16OffsetToUtf8'),
            nv(this, 'utf8OffsetToUtf16');
          let t = e.length,
            n = nw._utf8ByteLength(e),
            r = n !== t,
            i = r ? new Uint32Array(t + 1) : null;
          r && (i[t] = n);
          let a = r ? new Uint32Array(n + 1) : null;
          r && (a[n] = t);
          let o = new Uint8Array(n),
            s = 0;
          for (let n = 0; n < t; n++) {
            let l = e.charCodeAt(n),
              u = l,
              h = !1;
            if (l >= 55296 && l <= 56319 && n + 1 < t) {
              let t = e.charCodeAt(n + 1);
              t >= 56320 && t <= 57343 && ((u = (((l - 55296) << 10) + 65536) | (t - 56320)), (h = !0));
            }
            r &&
              ((i[n] = s),
              h && (i[n + 1] = s),
              u <= 127
                ? (a[s + 0] = n)
                : u <= 2047
                  ? ((a[s + 0] = n), (a[s + 1] = n))
                  : u <= 65535
                    ? ((a[s + 0] = n), (a[s + 1] = n), (a[s + 2] = n))
                    : ((a[s + 0] = n), (a[s + 1] = n), (a[s + 2] = n), (a[s + 3] = n))),
              u <= 127
                ? (o[s++] = u)
                : (u <= 2047
                    ? (o[s++] = 192 | ((1984 & u) >>> 6))
                    : (u <= 65535
                        ? (o[s++] = 224 | ((61440 & u) >>> 12))
                        : ((o[s++] = 240 | ((1835008 & u) >>> 18)), (o[s++] = 128 | ((258048 & u) >>> 12))),
                      (o[s++] = 128 | ((4032 & u) >>> 6))),
                  (o[s++] = 128 | ((63 & u) >>> 0))),
              h && n++;
          }
          (this.utf16Length = t),
            (this.utf8Length = n),
            (this.utf16Value = e),
            (this.utf8Value = o),
            (this.utf16OffsetToUtf8 = i),
            (this.utf8OffsetToUtf16 = a);
        }
        static _utf8ByteLength(e) {
          let t = 0;
          for (let n = 0, r = e.length; n < r; n++) {
            let i = e.charCodeAt(n),
              a = i,
              o = !1;
            if (i >= 55296 && i <= 56319 && n + 1 < r) {
              let t = e.charCodeAt(n + 1);
              t >= 56320 && t <= 57343 && ((a = (((i - 55296) << 10) + 65536) | (t - 56320)), (o = !0));
            }
            a <= 127 ? (t += 1) : a <= 2047 ? (t += 2) : a <= 65535 ? (t += 3) : (t += 4), o && n++;
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
            (nv(this, 'id', ++e.LAST_ID),
            nv(this, '_onigBinding'),
            nv(this, 'content'),
            nv(this, 'utf16Length'),
            nv(this, 'utf8Length'),
            nv(this, 'utf16OffsetToUtf8'),
            nv(this, 'utf8OffsetToUtf16'),
            nv(this, 'ptr'),
            !nk)
          )
            throw new nm('Must invoke loadWasm first.');
          (this._onigBinding = nk), (this.content = t);
          let n = new nw(t);
          (this.utf16Length = n.utf16Length),
            (this.utf8Length = n.utf8Length),
            (this.utf16OffsetToUtf8 = n.utf16OffsetToUtf8),
            (this.utf8OffsetToUtf16 = n.utf8OffsetToUtf16),
            this.utf8Length < 1e4 && !e._sharedPtrInUse
              ? (e._sharedPtr || (e._sharedPtr = nk.omalloc(1e4)),
                (e._sharedPtrInUse = !0),
                nk.HEAPU8.set(n.utf8Value, e._sharedPtr),
                (this.ptr = e._sharedPtr))
              : (this.ptr = n.createString(nk));
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
      nv(nS, 'LAST_ID', 0), nv(nS, '_sharedPtr', 0), nv(nS, '_sharedPtrInUse', !1);
      class nC {
        constructor(e) {
          if ((nv(this, '_onigBinding'), nv(this, '_ptr'), !nk)) throw new nm('Must invoke loadWasm first.');
          let t = [],
            n = [];
          for (let r = 0, i = e.length; r < i; r++) {
            let i = new nw(e[r]);
            (t[r] = i.createString(nk)), (n[r] = i.utf8Length);
          }
          let r = nk.omalloc(4 * e.length);
          nk.HEAPU32.set(t, r / 4);
          let i = nk.omalloc(4 * e.length);
          nk.HEAPU32.set(n, i / 4);
          let a = nk.createOnigScanner(r, i, e.length);
          for (let n = 0, r = e.length; n < r; n++) nk.ofree(t[n]);
          nk.ofree(i),
            nk.ofree(r),
            0 === a &&
              (function (e) {
                throw new nm(e.UTF8ToString(e.getLastOnigError()));
              })(nk),
            (this._onigBinding = nk),
            (this._ptr = a);
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
            a = i.findNextOnigScannerMatch(this._ptr, e.id, e.ptr, e.utf8Length, e.convertUtf16OffsetToUtf8(t), r);
          if (0 === a) return null;
          let o = i.HEAPU32,
            s = a / 4,
            l = o[s++],
            u = o[s++],
            h = [];
          for (let t = 0; t < u; t++) {
            let n = e.convertUtf8OffsetToUtf16(o[s++]),
              r = e.convertUtf8OffsetToUtf16(o[s++]);
            h[t] = { start: n, end: r, length: r - n };
          }
          return { index: l, captureIndices: h };
        }
      }
      function nA(e) {
        return (t) => WebAssembly.instantiate(e, t);
      }
      async function nP(e) {
        return (
          e &&
            (await (i ||
              (i = (async function () {
                nk = await ny(async (t) => {
                  let n = e;
                  if (
                    ('function' == typeof (n = await n) && (n = await n(t)),
                    'function' == typeof n && (n = await n(t)),
                    'function' == typeof n.instantiator)
                  )
                    n = await n.instantiator(t);
                  else if ('function' == typeof n.default) n = await n.default(t);
                  else {
                    var r, i, a, o;
                    if (
                      (void 0 !== n.data && (n = n.data),
                      (r = n),
                      'undefined' != typeof Response && r instanceof Response)
                    ) {
                      n =
                        'function' == typeof WebAssembly.instantiateStreaming
                          ? await ((a = n), (e) => WebAssembly.instantiateStreaming(a, e))(t)
                          : await ((o = n),
                            async (e) => {
                              let t = await o.arrayBuffer();
                              return WebAssembly.instantiate(t, e);
                            })(t);
                    } else
                      ((i = n),
                      ('undefined' != typeof ArrayBuffer && (i instanceof ArrayBuffer || ArrayBuffer.isView(i))) ||
                        (void 0 !== np && np.isBuffer?.(i)) ||
                        ('undefined' != typeof SharedArrayBuffer && i instanceof SharedArrayBuffer) ||
                        ('undefined' != typeof Uint32Array && i instanceof Uint32Array) ||
                        n instanceof WebAssembly.Module)
                        ? (n = await nA(n)(t))
                        : 'default' in n && n.default instanceof WebAssembly.Module && (n = await nA(n.default)(t));
                  }
                  return 'instance' in n && (n = n.instance), 'exports' in n && (n = n.exports), n;
                });
              })()))),
          {
            createScanner: (e) => new nC(e.map((e) => ('string' == typeof e ? e : e.source))),
            createString: (e) => new nS(e),
          }
        );
      }
      let { codeToHtml: nN } = (function (e, t) {
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
            a = await t?.guessEmbeddedLanguages?.(e, n.lang, i);
          return a && (await i.loadLanguage(...a)), i;
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
                  throw new o(
                    `Language \`${e}\` is not included in this bundle. You may want to load it from external source.`
                  );
                return n;
              }
              return e;
            }
            function a(e) {
              if (tB(e)) return 'none';
              if ('string' == typeof e) {
                let t = n[e];
                if (!t)
                  throw new o(
                    `Theme \`${e}\` is not included in this bundle. You may want to load it from external source.`
                  );
                return t;
              }
              return e;
            }
            let s = (e.themes ?? []).map((e) => a(e)),
              l = (e.langs ?? []).map((e) => i(e)),
              u = await ns({ engine: e.engine ?? r(), ...e, themes: s, langs: l });
            return {
              ...u,
              loadLanguage: (...e) => u.loadLanguage(...e.map(i)),
              loadTheme: (...e) => u.loadTheme(...e.map(a)),
              getBundledLanguages: () => t,
              getBundledThemes: () => n,
            };
          };
        })({ langs: nc, themes: nd, engine: () => nP(Promise.all([n.e(2349), n.e(4154)]).then(n.bind(n, 4154))) }),
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
  },
]);
