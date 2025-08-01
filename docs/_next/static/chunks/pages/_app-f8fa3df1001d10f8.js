(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [636],
  {
    5432: (a, e, s) => {
      a.exports = s(8754);
    },
    5508: (a, e, s) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/_app',
        function () {
          return s(8122);
        },
      ]);
    },
    7392: (a) => {
      a.exports = {
        style: { fontFamily: "'Geist Mono', 'Geist Mono Fallback'", fontStyle: 'normal' },
        className: '__className_493667',
        variable: '__variable_493667',
      };
    },
    8122: (a, e, s) => {
      'use strict';
      (s.r(e), s.d(e, { default: () => m }));
      var l = s(5640);
      s(9445);
      var n = s(8240),
        t = s.n(n),
        c = s(7392),
        i = s.n(c),
        o = s(5432),
        r = s.n(o);
      let _ = '/atomic';
      function m(a) {
        let { Component: e, pageProps: s } = a;
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsxs)(r(), {
              children: [
                (0, l.jsx)('title', { children: 'atomic' }),
                (0, l.jsx)('link', { rel: 'icon', href: ''.concat(_, '/favicon.ico'), type: 'image/x-icon' }),
              ],
            }),
            (0, l.jsx)('div', {
              className: ''.concat(t().className, ' ').concat(i().className),
              children: (0, l.jsx)(e, { ...s }),
            }),
          ],
        });
      }
    },
    8240: (a) => {
      a.exports = {
        style: { fontFamily: "'Geist', 'Geist Fallback'", fontStyle: 'normal' },
        className: '__className_a00d80',
        variable: '__variable_a00d80',
      };
    },
    9445: () => {},
  },
  (a) => {
    var e = (e) => a((a.s = e));
    (a.O(0, [6593, 8792], () => (e(5508), e(4239))), (_N_E = a.O()));
  },
]);
